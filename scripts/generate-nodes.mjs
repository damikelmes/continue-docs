import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { nodeCategories, nodes, nodesByCategory } from '../docs/.vitepress/node-data.mjs';

const projectRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const nodesDirectory = join(projectRoot, 'docs', 'nos');
const categoryByKey = new Map(nodeCategories.map((category) => [category.key, category]));

const escapeMarkdownCell = (value) => value.replaceAll('|', '\\|').replaceAll('\n', ' ');
const escapeHtml = (value) => value
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;');

function renderCard(node) {
  return `  <a class="node-card" style="--node-card-color: ${node.color}" href="./${node.slug}">
    <span class="node-card-icon"><NodeIcon type="${node.type}" icon="${node.icon}" color="${node.color}" :size="30" /></span>
    <span class="node-card-copy">
      <strong>${escapeHtml(node.title)}</strong>
      <small>${escapeHtml(node.summary)}</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>`;
}

function renderNodePage(node) {
  const category = categoryByKey.get(node.category);
  const relatedNodes = nodesByCategory[node.category].filter((item) => item.type !== node.type).slice(0, 4);
  const fields = node.fields
    .map(([label, description]) => `| **${escapeMarkdownCell(label)}** | ${escapeMarkdownCell(description)} |`)
    .join('\n');
  const exampleItems = node.example
    .map((step) => `    <li>${escapeHtml(step)}</li>`)
    .join('\n');
  const rules = node.rules.map((rule) => `- ${rule}`).join('\n');
  const related = relatedNodes
    .map((item) => `- [${item.title}](./${item.slug}) — ${item.summary}`)
    .join('\n');

  return `---
title: ${JSON.stringify(node.title)}
description: ${JSON.stringify(node.summary)}
---

<div class="node-page-kicker" style="--node-page-color: ${node.color}">
  <span class="node-page-meta">
    <span class="node-kind">${node.kind}</span>
    <span class="node-category-name">${escapeHtml(category.label)}</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: ${node.color}">
  <span class="node-title-icon"><NodeIcon type="${node.type}" icon="${node.icon}" color="${node.color}" :size="26" /></span>
  <span>${escapeHtml(node.title)}</span>
</h1>

<p class="node-purpose">${escapeHtml(node.summary)}</p>

## Para que serve

${node.purpose}

## Campos

| Campo | O que configurar |
| --- | --- |
${fields}

## Exemplo

<div class="node-example" style="--node-page-color: ${node.color}">
  <ol>
${exampleItems}
  </ol>
  <p class="node-result"><strong>Resultado:</strong> ${escapeHtml(node.result)}</p>
</div>

## Regras

${rules}

## Nós relacionados

${related || '- Nenhum nó relacionado nesta categoria.'}

<a class="node-back-link" href="./">← Ver todos os nós</a>
`;
}

function renderIndex() {
  const sections = nodeCategories.map((category) => {
    const cards = nodesByCategory[category.key].map(renderCard).join('\n');
    return `## ${category.label}

<p class="node-category-copy">${escapeHtml(category.description)}</p>

<div class="node-grid">
${cards}
</div>`;
  }).join('\n\n');

  return `---
title: Todos os nós
description: Lista completa dos nós disponíveis no editor da Continue.
---

# Todos os nós

Esta página segue as mesmas categorias, nomes, cores e ícones mostrados no seletor de nós do editor. Toque em um nó para abrir sua explicação completa.

<div class="nodes-intro">
  <strong>${nodes.length}</strong>
  <span>nós documentados individualmente, cada um com campos, exemplo e regras de uso.</span>
</div>

${sections}
`;
}

const nodeTypes = new Set(nodes.map((node) => node.type));
const nodeSlugs = new Set(nodes.map((node) => node.slug));

if (nodeTypes.size !== nodes.length || nodeSlugs.size !== nodes.length) {
  throw new Error('Os tipos e endereços dos nós precisam ser únicos.');
}

await mkdir(nodesDirectory, { recursive: true });
await Promise.all([
  writeFile(join(nodesDirectory, 'index.md'), renderIndex(), 'utf8'),
  ...nodes.map((node) => writeFile(join(nodesDirectory, `${node.slug}.md`), renderNodePage(node), 'utf8')),
]);

console.log(`${nodes.length} páginas de nós geradas.`);
