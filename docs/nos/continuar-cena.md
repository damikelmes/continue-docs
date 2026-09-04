---
title: "Continuar cena"
description: "Retoma uma cena pausada exatamente do ponto atual."
---

<div class="node-page-kicker" style="--node-page-color: #4ADE80">
  <span class="node-page-meta">
    <span class="node-kind">AÇÃO</span>
    <span class="node-category-name">Cena</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #4ADE80">
  <span class="node-title-icon"><NodeIcon type="action-resume-scene" icon="play-circle-outline" color="#4ADE80" :size="26" /></span>
  <span>Continuar cena</span>
</h1>

<p class="node-purpose">Retoma uma cena pausada exatamente do ponto atual.</p>

## Para que serve

Retoma uma cena pausada exatamente do ponto atual.

## Campos

<div class="doc-field-list" style="--doc-field-color: #4ADE80">
  <div class="doc-field-item">
    <strong>Modo de execução</strong>
    <p>Escolha quando a ação deve ser aplicada. Para um comando pontual, evite repetições desnecessárias.</p>
  </div>
</div>

## Exemplo

<div class="node-example" style="--node-page-color: #4ADE80">
  <ol>
    <li>Crie uma condição de entrada para continuar.</li>
    <li>Conecte Continuar cena e teste com a cena pausada.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> A simulação retoma do ponto atual.</p>
</div>

## Regras

- Disponível no Script da cena e no Script global, não dentro da biblioteca.
- Continuar não reinicia a cena.

## Nós relacionados

- [Trocar de cena](./trocar-de-cena) — Abre outra cena do projeto usando a transição escolhida.
- [Voltar para a cena anterior](./voltar-para-cena-anterior) — Retorna para a última cena visitada e recupera seu estado.
- [Limpar estado salvo da cena](./limpar-estado-salvo-da-cena) — Apaga o estado guardado para a cena escolhida.
- [Manter objeto entre cenas](./manter-objeto-entre-cenas) — Leva o objeto e seu estado atual para as próximas cenas.

<a class="node-back-link" href="./">← Ver todos os nós</a>
