import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { expressionCategories, expressions, expressionsByCategory } from '../docs/.vitepress/expression-data.mjs';

const projectRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const expressionsDirectory = join(projectRoot, 'docs', 'expressoes');
const categoryByKey = new Map(expressionCategories.map((category) => [category.key, category]));

const escapeHtml = (value) => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;');

function renderCard(expression) {
  return `  <a class="node-card expression-card" style="--node-card-color: ${expression.color}" href="./${expression.slug}">
    <span class="node-card-icon"><NodeIcon type="${expression.type}" icon="${expression.icon}" color="${expression.color}" :size="30" /></span>
    <span class="node-card-copy">
      <strong>${escapeHtml(expression.title)}</strong>
      <small><code>${escapeHtml(expression.token)}</code></small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>`;
}

function renderExpressionPage(expression) {
  const category = categoryByKey.get(expression.category);
  const relatedExpressions = expressionsByCategory[expression.category]
    .filter((item) => item.key !== expression.key)
    .slice(0, 5);
  const examples = expression.examples.map((item, index) => `  <section class="expression-example">
    <strong>${index + 1}. ${escapeHtml(item.title)}</strong>
    <pre><code>${escapeHtml(item.code)}</code></pre>
    <p>${escapeHtml(item.description)}</p>
  </section>`).join('\n');
  const rules = expression.rules.map((rule) => `- ${rule}`).join('\n');
  const related = relatedExpressions
    .map((item) => `- [${item.title}](./${item.slug}) — \`${item.token}\``)
    .join('\n');

  return `---
title: ${JSON.stringify(expression.title)}
description: ${JSON.stringify(expression.summary)}
---

<div class="node-page-kicker" style="--node-page-color: ${expression.color}">
  <span class="node-page-meta">
    <span class="node-kind">EXPRESSÃO</span>
    <span class="node-category-name">${escapeHtml(category.label)}</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: ${expression.color}">
  <span class="node-title-icon"><NodeIcon type="${expression.type}" icon="${expression.icon}" color="${expression.color}" :size="26" /></span>
  <span>${escapeHtml(expression.title)}</span>
</h1>

<p class="node-purpose">${escapeHtml(expression.summary)}</p>

## O que retorna

${expression.returns}

## Como escrever

<div class="expression-token" style="--expression-color: ${expression.color}"><code>${escapeHtml(expression.token)}</code></div>

Use o botão de procurar expressão no campo numérico para o editor escrever o nome correto automaticamente.

## Exemplos de uso

<div class="expression-example-list" style="--expression-color: ${expression.color}">
${examples}
</div>

## Regras

${rules}

## Expressões relacionadas

${related || '- Nenhuma expressão relacionada nesta categoria.'}

<a class="node-back-link" href="./">← Ver todas as expressões</a>
`;
}

function renderIndex() {
  const sections = expressionCategories.map((category) => {
    const cards = expressionsByCategory[category.key].map(renderCard).join('\n');
    return `## <DocHeadingIcon icon="${category.icon}" color="${category.color}" /> ${category.label}

<p class="node-category-copy">${escapeHtml(category.description)}</p>

<div class="node-grid expression-grid">
${cards}
</div>`;
  }).join('\n\n');

  return `---
title: Todas as expressões
description: Lista completa das expressões numéricas disponíveis na Continue.
---

# <DocHeadingIcon icon="calculator-outline" color="#FB923C" :size="22" /> Todas as expressões

Expressões usam informações do jogo no lugar de um número fixo. Toque em uma expressão para ver o que ela retorna, suas regras e vários exemplos diferentes de utilização.

<div class="nodes-intro expressions-intro">
  <strong>${expressions.length}</strong>
  <span>expressões documentadas individualmente, cada uma com pelo menos três exemplos de uso.</span>
</div>

## <DocHeadingIcon icon="search-outline" color="#60A5FA" /> Como inserir uma expressão

1. Abra um campo numérico de uma ação, condição ou repetição.
2. Toque no botão de procurar expressão.
3. Escolha a categoria e a informação que deseja usar.
4. Para propriedades de objetos, escolha o objeto e, se precisar, uma instância específica.
5. Combine o valor com números, operações ou outras expressões.

O seletor escreve o identificador correto. Por exemplo, \`camera.x + 120\` representa uma posição 120 pixels à direita do centro da câmera.

## <DocHeadingIcon icon="calculator-outline" color="#A78BFA" /> Operações básicas

- \`+\` soma valores.
- \`-\` subtrai valores.
- \`*\` multiplica valores.
- \`/\` divide valores.
- \`( )\` define a ordem do cálculo.

Multiplicação e divisão são calculadas antes de soma e subtração. Use parênteses quando quiser deixar a ordem clara: \`(10 + 4) * 2\` retorna \`28\`.

::: info Comparações ficam no nó de condição
Não escreva \`<\`, \`>\` ou \`==\` dentro de uma expressão numérica. No nó **Comparar valores**, coloque uma expressão em cada campo e escolha separadamente **Igual a**, **Menor que** ou **Maior que**.
:::

::: warning Divisão por zero
Uma expressão que divide por zero é inválida. Corrija o divisor ou use um valor mínimo seguro, como \`math.max(jogador.variable.divisor, 0.0001)\`.
:::

## <DocHeadingIcon icon="play-forward-outline" color="#FACC15" /> Ordem e valores atualizados

A expressão lê o valor disponível no instante em que seu nó é executado. Se um fluxo move o personagem e outro centraliza a câmera, deixe o movimento acima para a câmera usar a posição nova.

Veja [Ordem de execução dos scripts](/editor/scripts-visuais#ordem-de-execucao) para entender os fluxos completos.

${sections}
`;
}

const keys = new Set(expressions.map((expression) => expression.key));
const slugs = new Set(expressions.map((expression) => expression.slug));

if (keys.size !== expressions.length || slugs.size !== expressions.length) {
  throw new Error('Os identificadores e endereços das expressões precisam ser únicos.');
}

for (const expression of expressions) {
  if (!expression.examples || expression.examples.length < 2) {
    throw new Error(`${expression.key} precisa ter mais de um exemplo.`);
  }
}

await mkdir(expressionsDirectory, { recursive: true });
await Promise.all([
  writeFile(join(expressionsDirectory, 'index.md'), renderIndex(), 'utf8'),
  ...expressions.map((expression) => writeFile(join(expressionsDirectory, `${expression.slug}.md`), renderExpressionPage(expression), 'utf8')),
]);

console.log(`${expressions.length} páginas de expressões geradas.`);
