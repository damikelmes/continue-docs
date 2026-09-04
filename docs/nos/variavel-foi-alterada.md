---
title: "Variável foi alterada"
description: "Dispara uma vez quando a variável escolhida muda de valor."
---

<div class="node-page-kicker" style="--node-page-color: #FBBF24">
  <span class="node-page-meta">
    <span class="node-kind">CONDIÇÃO</span>
    <span class="node-category-name">Lógica e tempo</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #FBBF24">
  <span class="node-title-icon"><NodeIcon type="condition-variable-changed" icon="pulse" color="#FBBF24" :size="26" /></span>
  <span>Variável foi alterada</span>
</h1>

<p class="node-purpose">Dispara uma vez quando a variável escolhida muda de valor.</p>

## Para que serve

Dispara uma vez quando a variável escolhida muda de valor.

## Campos

<div class="doc-field-list" style="--doc-field-color: #FBBF24">
  <div class="doc-field-item">
    <strong>Origem</strong>
    <p>Variável do objeto ou global.</p>
  </div>
  <div class="doc-field-item">
    <strong>Variável</strong>
    <p>Valor cujo estado deve ser acompanhado.</p>
  </div>
  <div class="doc-field-item">
    <strong>Objeto e instâncias</strong>
    <p>Aparecem quando a variável pertence a um objeto.</p>
  </div>
  <div class="doc-field-item">
    <strong>Resultado esperado</strong>
    <p>Use a condição normal ou inverta o resultado.</p>
  </div>
</div>

## Exemplo

<div class="node-example" style="--node-page-color: #FBBF24">
  <ol>
    <li>Escolha a variável global Pontos.</li>
    <li>Conecte uma reação visual à mudança.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> O fluxo reage quando o valor escolhido muda.</p>
</div>

## Regras

- Não é uma comparação com um valor fixo.
- Para verificar se um número passou de um limite, use Comparar valores.
- Conecte as ações abaixo desta condição. Uma condição falsa impede somente a continuação do seu fluxo.

## Nós relacionados

- [Comparar números](./comparar-numeros) — Compara dois números ou expressões.
- [Aguardar segundos](./aguardar-segundos) — Espera um tempo antes de continuar o fluxo.
- [A cada X segundos](./a-cada-x-segundos) — Executa novamente sempre que o intervalo escolhido é completado.
- [Chance aleatória](./chance-aleatoria) — Executa de acordo com a porcentagem de chance escolhida.

<a class="node-back-link" href="./">← Ver todos os nós</a>
