---
title: "Cena começou"
description: "Dispara uma vez quando a cena começa desde o início."
---

<div class="node-page-kicker" style="--node-page-color: #FBBF24">
  <span class="node-page-meta">
    <span class="node-kind">CONDIÇÃO</span>
    <span class="node-category-name">Cena</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #FBBF24">
  <span class="node-title-icon"><NodeIcon type="condition-scene-started" icon="flag-outline" color="#FBBF24" /></span>
  <span>Cena começou</span>
</h1>

<p class="node-purpose">Dispara uma vez quando a cena começa desde o início.</p>

## Para que serve

Dispara uma vez quando a cena começa desde o início.

## Campos

<div class="doc-field-list" style="--doc-field-color: #FBBF24">
  <div class="doc-field-item">
    <strong>Resultado esperado</strong>
    <p>Use a condição normal ou inverta o resultado.</p>
  </div>
</div>

## Exemplo

<div class="node-example" style="--node-page-color: #FBBF24">
  <ol>
    <li>Coloque Cena começou no início de um fluxo.</li>
    <li>Conecte a configuração inicial da câmera.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> A preparação acontece quando a cena começa do início.</p>
</div>

## Regras

- Disponível no Script da cena e no Script global, não dentro da biblioteca.
- É uma condição de momento, não um estado verdadeiro durante toda a cena.
- Retomar um estado guardado não é começar do início.
- Conecte as ações abaixo desta condição. Uma condição falsa impede somente a continuação do seu fluxo.

## Nós relacionados

- [Trocar de cena](./trocar-de-cena) — Abre outra cena do projeto usando a transição escolhida.
- [Voltar para a cena anterior](./voltar-para-cena-anterior) — Retorna para a última cena visitada e recupera seu estado.
- [Limpar estado salvo da cena](./limpar-estado-salvo-da-cena) — Apaga o estado guardado para a cena escolhida.
- [Manter objeto entre cenas](./manter-objeto-entre-cenas) — Leva o objeto e seu estado atual para as próximas cenas.

<a class="node-back-link" href="./">← Ver todos os nós</a>
