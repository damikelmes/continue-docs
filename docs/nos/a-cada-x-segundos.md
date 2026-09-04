---
title: "A cada X segundos"
description: "Executa novamente sempre que o intervalo escolhido é completado."
---

<div class="node-page-kicker" style="--node-page-color: #22D3EE">
  <span class="node-page-meta">
    <span class="node-kind">CONDIÇÃO</span>
    <span class="node-category-name">Lógica e tempo</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #22D3EE">
  <span class="node-title-icon"><NodeIcon type="condition-every-seconds" icon="timer-outline" color="#22D3EE" /></span>
  <span>A cada X segundos</span>
</h1>

<p class="node-purpose">Executa novamente sempre que o intervalo escolhido é completado.</p>

## Para que serve

Executa novamente sempre que o intervalo escolhido é completado.

## Campos

<div class="doc-field-list" style="--doc-field-color: #22D3EE">
  <div class="doc-field-item">
    <strong>Intervalo</strong>
    <p>Tempo em segundos entre ativações.</p>
  </div>
</div>

## Exemplo

<div class="node-example" style="--node-page-color: #22D3EE">
  <ol>
    <li>Defina intervalo de 2 segundos.</li>
    <li>Conecte Criar objeto para um inimigo.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> O fluxo cria um inimigo a cada intervalo concluído.</p>
</div>

## Regras

- Use intervalo maior que zero.
- Diferente de Aguardar segundos, esta condição representa um ritmo periódico.
- Conecte as ações abaixo desta condição. Uma condição falsa impede somente a continuação do seu fluxo.

## Nós relacionados

- [Comparar números](./comparar-numeros) — Compara dois números ou expressões.
- [Aguardar segundos](./aguardar-segundos) — Espera um tempo antes de continuar o fluxo.
- [Variável foi alterada](./variavel-foi-alterada) — Dispara uma vez quando a variável escolhida muda de valor.
- [Chance aleatória](./chance-aleatoria) — Executa de acordo com a porcentagem de chance escolhida.

<a class="node-back-link" href="./">← Ver todos os nós</a>
