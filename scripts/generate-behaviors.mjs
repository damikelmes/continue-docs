import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import {
  behaviorCategories,
  behaviors,
  behaviorsByCategory,
} from '../docs/.vitepress/behavior-data.mjs';

const projectRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const behaviorsDirectory = join(projectRoot, 'docs', 'comportamentos');
const categoryByKey = new Map(behaviorCategories.map((category) => [category.key, category]));

const escapeMarkdownCell = (value) => value.replaceAll('|', '\\|').replaceAll('\n', ' ');
const escapeHtml = (value) => value
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;');

function renderCard(behavior) {
  return `  <a class="behavior-card" style="--behavior-card-color: ${behavior.color}" href="./${behavior.slug}">
    <span class="behavior-card-icon"><BehaviorIcon type="${behavior.type}" color="${behavior.color}" :size="30" /></span>
    <span class="behavior-card-copy">
      <strong>${escapeHtml(behavior.title)}</strong>
      <small>${escapeHtml(behavior.summary)}</small>
    </span>
    <span class="behavior-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>`;
}

function renderBehaviorPage(behavior) {
  const category = categoryByKey.get(behavior.category);
  const relatedBehaviors = behaviorsByCategory[behavior.category]
    .filter((item) => item.type !== behavior.type)
    .slice(0, 4);
  const fields = behavior.fields
    .map(([label, description]) => `| **${escapeMarkdownCell(label)}** | ${escapeMarkdownCell(description)} |`)
    .join('\n');
  const exampleItems = behavior.example
    .map((step) => `    <li>${escapeHtml(step)}</li>`)
    .join('\n');
  const rules = behavior.rules.map((rule) => `- ${rule}`).join('\n');
  const related = relatedBehaviors
    .map((item) => `- [${item.title}](./${item.slug}) — ${item.summary}`)
    .join('\n');

  return `---
title: ${JSON.stringify(behavior.title)}
description: ${JSON.stringify(behavior.summary)}
---

<div class="behavior-page-kicker" style="--behavior-page-color: ${behavior.color}">
  <span class="behavior-page-meta">
    <span class="behavior-kind">COMPORTAMENTO</span>
    <span class="behavior-category-name">${escapeHtml(category.label)}</span>
  </span>
</div>

<h1 class="behavior-page-title" style="--behavior-page-color: ${behavior.color}">
  <span class="behavior-title-icon"><BehaviorIcon type="${behavior.type}" color="${behavior.color}" :size="26" /></span>
  <span>${escapeHtml(behavior.title)}</span>
</h1>

<p class="behavior-purpose">${escapeHtml(behavior.summary)}</p>

## Para que serve

${behavior.purpose}

## Campos

| Campo | O que configurar |
| --- | --- |
${fields}

## Exemplo

<div class="behavior-example" style="--behavior-page-color: ${behavior.color}">
  <ol>
${exampleItems}
  </ol>
  <p class="behavior-result"><strong>Resultado:</strong> ${escapeHtml(behavior.result)}</p>
</div>

## Regras

${rules}

## Comportamentos relacionados

${related || '- Nenhum outro comportamento nesta categoria.'}

<a class="behavior-back-link" href="./">← Ver todos os comportamentos</a>
`;
}

function renderIndex() {
  const sections = behaviorCategories.map((category) => {
    const cards = behaviorsByCategory[category.key].map(renderCard).join('\n');
    return `## ${category.label}

<p class="behavior-category-copy">${escapeHtml(category.description)}</p>

<div class="behavior-grid">
${cards}
</div>`;
  }).join('\n\n');

  return `---
title: Todos os comportamentos
description: Lista completa dos comportamentos disponíveis para os objetos da Continue.
---

# Todos os comportamentos

Os cards abaixo usam os mesmos nomes, cores e ícones mostrados no editor. Toque em um comportamento para abrir sua página com campos, exemplo e regras.

<div class="behaviors-intro">
  <strong>${behaviors.length}</strong>
  <span>comportamentos documentados individualmente para você encontrar rapidamente o que cada um faz.</span>
</div>

${sections}
`;
}

const behaviorTypes = new Set(behaviors.map((behavior) => behavior.type));
const behaviorSlugs = new Set(behaviors.map((behavior) => behavior.slug));

if (behaviorTypes.size !== behaviors.length || behaviorSlugs.size !== behaviors.length) {
  throw new Error('Os tipos e endereços dos comportamentos precisam ser únicos.');
}

for (const behavior of behaviors) {
  if (!categoryByKey.has(behavior.category)) {
    throw new Error(`Categoria desconhecida no comportamento ${behavior.type}.`);
  }
}

await mkdir(behaviorsDirectory, { recursive: true });
await Promise.all([
  writeFile(join(behaviorsDirectory, 'index.md'), renderIndex(), 'utf8'),
  ...behaviors.map((behavior) => (
    writeFile(join(behaviorsDirectory, `${behavior.slug}.md`), renderBehaviorPage(behavior), 'utf8')
  )),
]);

console.log(`${behaviors.length} páginas de comportamentos geradas.`);
