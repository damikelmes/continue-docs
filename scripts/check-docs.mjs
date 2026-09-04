import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { dirname, extname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { nodes, nodeCategories } from '../docs/.vitepress/node-data.mjs';
import { behaviors, behaviorCategories } from '../docs/.vitepress/behavior-data.mjs';
import { expressions, expressionCategories } from '../docs/.vitepress/expression-data.mjs';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const docs = join(root, 'docs');
const read = (file) => readFileSync(file, 'utf8');
const files = (directory, extension) => readdirSync(directory, { recursive: true })
  .filter((file) => file.endsWith(extension)).map((file) => join(directory, file));
const failures = [];
const check = (ok, message) => { if (!ok) failures.push(message); };

for (const [items, categories, folder] of [[nodes, nodeCategories, 'nos'], [behaviors, behaviorCategories, 'comportamentos'], [expressions, expressionCategories, 'expressoes']]) {
  check(new Set(items.map((item) => item.slug)).size === items.length, `Endereços repetidos: ${folder}`);
  for (const item of items) {
    check(categories.some((category) => category.key === item.category), `Categoria inválida: ${item.slug}`);
    check(existsSync(join(docs, folder, `${item.slug}.md`)), `Página não gerada: ${item.slug}`);
    check(item.rules?.length > 0, `Sem regras: ${item.slug}`);
    check((item.examples ?? item.example)?.length >= 2, `Exemplo incompleto: ${item.slug}`);
  }
}

const glyphSource = read(join(docs, '.vitepress/theme/NodeIcon.vue')).split('const glyphCodes:')[1].split('};')[0];
const glyphs = new Set([...glyphSource.matchAll(/(?:'([^']+)'|([\w-]+)):\s*\d+/g)].map((match) => match[1] ?? match[2]));
const icons = new Set([...nodes, ...nodeCategories, ...expressions, ...expressionCategories, ...behaviorCategories].map((item) => item.icon));
for (const file of files(docs, '.md').filter((file) => !file.includes('.vitepress'))) {
  const source = read(file);
  for (const match of source.matchAll(/icon="([^"]+)"/g)) icons.add(match[1]);
  check(!/^\|.+\|/m.test(source), `Tabela restante: ${file}`);
  check(!/<(?:NodeIcon|BehaviorIcon|DocHeadingIcon)\b[^>]*\s:size=/.test(source), `Tamanho de ícone fora do padrão compartilhado: ${file}`);
}
for (const icon of icons) check(glyphs.has(icon), `Ícone sem glifo: ${icon}`);

// Contrato de layout: páginas e geradores não podem voltar a definir tamanhos isolados.
const theme = join(docs, '.vitepress/theme');
for (const file of [...files(theme, '.vue'), ...files(join(root, 'scripts'), '.mjs')]) {
  check(!/<(?:NodeIcon|BehaviorIcon|DocHeadingIcon)\b[^>]*\s:size=/.test(read(file)), `Tamanho de ícone isolado no componente ou gerador: ${file}`);
}
for (const [component, prefix] of [['NodeIcon.vue', 'node'], ['BehaviorIcon.vue', 'behavior']]) {
  const source = read(join(theme, component));
  check(source.includes(`--${prefix}-icon-size: var(--continue-icon-size, 1.5rem)`), `Escala compartilhada ausente: ${component}`);
  const box = source.split(`.${prefix}-glyph {`)[1]?.split('}')[0] ?? '';
  check(box.includes(`width: var(--${prefix}-icon-size);`) && box.includes(`height: var(--${prefix}-icon-size);`), `Ícone sem caixa quadrada: ${component}`);
  check(box.includes('flex: 0 0 auto;'), `Ícone pode ser comprimido pelo texto: ${component}`);
  check(source.includes('letter-spacing: 0;') && source.includes('font-synthesis: none;'), `Ícone herda formatação do título: ${component}`);
}
const css = read(join(theme, 'custom.css'));
check(css.includes('repeat(auto-fit, minmax(min(100%, 18rem), 1fr))'), 'Cards não se adaptam à largura disponível.');
check(css.includes('repeat(auto-fit, minmax(min(100%, 16rem), 1fr))'), 'Categorias não se adaptam à largura disponível.');
check(css.includes('--continue-icon-standard: 1.5rem;') && css.includes('--continue-icon-inline: 1.25rem;') && css.includes('--continue-icon-arrow: 1rem;'), 'Escalas de ícones inconsistentes.');

const editorArg = process.argv.find((arg) => arg.startsWith('--editor='));
if (editorArg) {
  const editor = resolve(editorArg.slice('--editor='.length));
  const context = read(join(editor, 'contexts/projects-context.tsx'));
  const types = (name) => [...context.split(`export type ${name} =`)[1].split(';')[0].matchAll(/'([^']+)'/g)].map((match) => match[1]);
  for (const type of types('ProjectSceneMainNodeType')) check(nodes.some((node) => node.type === type), `Nó sem página: ${type}`);
  for (const type of types('ProjectBehaviorType')) check(behaviors.some((behavior) => behavior.type === type), `Comportamento sem página: ${type}`);
  const numeric = read(join(editor, 'utils/numeric-expression.ts'));
  const properties = [...numeric.split('export type ObjectNumericExpressionProperty =')[1].split(';')[0].matchAll(/'([^']+)'/g)].map((match) => match[1]);
  for (const property of properties) check(expressions.some((expression) => expression.token.endsWith(`.${property}`)), `Propriedade sem página: ${property}`);
  const picker = read(join(editor, 'components/visual-node-editor.tsx')).split('const EXPRESSION_REFERENCE_OPTIONS')[1];
  assert.ok(picker, 'Seletor de expressões não encontrado para conferir cobertura.');
  const tokens = [...picker.split('function ')[0].matchAll(/token: '([^']+)'/g)].map((match) => match[1]);
  for (const token of tokens) check(expressions.some((expression) => expression.token.split('(')[0] === token.split('(')[0]), `Expressão sem página: ${token}`);
}

const dist = join(docs, '.vitepress/dist');
let links = 0;
if (existsSync(dist)) {
  const detectedBase = read(join(dist, 'index.html')).match(/<script[^>]+src="([^"]*\/)assets\/app\./)?.[1];
  const base = process.argv.find((arg) => arg.startsWith('--base='))?.slice(7) ?? detectedBase ?? '/';
  const htmlFiles = files(dist, '.html');
  const htmlCache = new Map(htmlFiles.map((file) => [file, read(file)]));
  const ids = new Map(htmlFiles.map((file) => [file, new Set([...htmlCache.get(file).matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]))]));
  for (const [file, html] of htmlCache) {
    const relative = file.slice(dist.length + 1).replaceAll('\\', '/');
    for (const [, raw] of html.matchAll(/\bhref="([^"]+)"/g)) {
      if (/^(?:https?:|mailto:|tel:|data:)/.test(raw)) continue;
      const url = new URL(raw.replaceAll('&amp;', '&'), `https://docs.local${base}${relative}`);
      const path = decodeURIComponent(url.pathname);
      check(path.startsWith(base), `Link fora da base ${base}: ${relative} → ${raw}`);
      if (!path.startsWith(base)) continue;
      const target = join(dist, path.slice(base.length));
      const candidates = extname(target) ? [target] : [target + '.html', join(target, 'index.html')];
      const resolved = candidates.find((candidate) => existsSync(candidate));
      check(Boolean(resolved), `Link quebrado: ${relative} → ${raw}`);
      if (resolved && url.hash && ids.has(resolved)) check(ids.get(resolved).has(decodeURIComponent(url.hash.slice(1))), `Âncora ausente: ${relative} → ${raw}`);
      links++;
    }
  }
  console.log(`${htmlFiles.length} páginas HTML; ${links} links locais conferidos.`);
}
assert.equal(failures.length, 0, [...new Set(failures)].join('\n'));
console.log(`${nodes.length} nós, ${behaviors.length} comportamentos e ${expressions.length} expressões: referências e cobertura válidas.`);
