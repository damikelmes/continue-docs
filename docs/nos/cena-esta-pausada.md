---
title: "Cena está pausada"
description: "Continua verdadeira enquanto a cena estiver pausada."
---

<div class="node-page-kicker" style="--node-page-color: #F59E0B">
  <span class="node-page-meta">
    <span class="node-kind">CONDIÇÃO</span>
    <span class="node-category-name">Cena</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #F59E0B">
  <span class="node-title-icon"><NodeIcon type="condition-scene-paused" icon="pause-circle-outline" color="#F59E0B" :size="26" /></span>
  <span>Cena está pausada</span>
</h1>

<p class="node-purpose">Continua verdadeira enquanto a cena estiver pausada.</p>

## Para que serve

Continua verdadeira enquanto a cena estiver pausada.

## Campos

<div class="doc-field-list" style="--doc-field-color: #F59E0B">
  <div class="doc-field-item">
    <strong>Resultado esperado</strong>
    <p>Use a condição normal ou inverta o resultado.</p>
  </div>
</div>

## Exemplo

<div class="node-example" style="--node-page-color: #F59E0B">
  <ol>
    <li>Use Cena está pausada.</li>
    <li>Conecte uma condição de entrada e Continuar cena.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> A entrada só retoma o jogo quando a cena está pausada.</p>
</div>

## Regras

- Disponível no Script da cena e no Script global, não dentro da biblioteca.
- Permanece verdadeira enquanto a pausa estiver ativa.
- Conecte as ações abaixo desta condição. Uma condição falsa impede somente a continuação do seu fluxo.

## Nós relacionados

- [Trocar de cena](./trocar-de-cena) — Abre outra cena do projeto usando a transição escolhida.
- [Voltar para a cena anterior](./voltar-para-cena-anterior) — Retorna para a última cena visitada e recupera seu estado.
- [Limpar estado salvo da cena](./limpar-estado-salvo-da-cena) — Apaga o estado guardado para a cena escolhida.
- [Manter objeto entre cenas](./manter-objeto-entre-cenas) — Leva o objeto e seu estado atual para as próximas cenas.

<a class="node-back-link" href="./">← Ver todos os nós</a>
