---
title: "Emissor de partículas está ativo"
description: "Continua verdadeiro enquanto o emissor estiver produzindo partículas."
---

<div class="node-page-kicker" style="--node-page-color: #F97316">
  <span class="node-page-meta">
    <span class="node-kind">CONDIÇÃO</span>
    <span class="node-category-name">Estado do objeto</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #F97316">
  <span class="node-title-icon"><NodeIcon type="condition-particle-emitter-active" icon="sparkles" color="#F97316" :size="26" /></span>
  <span>Emissor de partículas está ativo</span>
</h1>

<p class="node-purpose">Continua verdadeiro enquanto o emissor estiver produzindo partículas.</p>

## Para que serve

Verifica se a instância possui pelo menos um emissor ativo e não pausado.

## Campos

<div class="doc-field-list" style="--doc-field-color: #F97316">
  <div class="doc-field-item">
    <strong>Objeto</strong>
    <p>Escolha o objeto de destino. Nas ações com seleção múltipla, os objetos marcados recebem a mesma configuração.</p>
  </div>
  <div class="doc-field-item">
    <strong>Instâncias</strong>
    <p>Nas ações, escolha todas ou uma específica. Nas condições, escolha qualquer, todas ou uma específica.</p>
  </div>
  <div class="doc-field-item">
    <strong>Resultado esperado</strong>
    <p>Use a condição normal ou inverta o resultado.</p>
  </div>
</div>

## Exemplo

<div class="node-example" style="--node-page-color: #F97316">
  <ol>
    <li>Escolha o objeto Chaminé e as instâncias a verificar.</li>
    <li>Conecte uma regra que depende de algum emissor do objeto estar ativo.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> O fluxo acompanha o estado do emissor.</p>
</div>

## Regras

- Adicione Emitir partículas ao objeto.
- A verificação considera os emissores da instância, não um efeito escolhido por nome.
- Partículas antigas visíveis não bastam: é verificado o estado ativo e não pausado do emissor.
- Conecte as ações abaixo desta condição. Uma condição falsa impede somente a continuação do seu fluxo.

## Nós relacionados

- [Objeto está na cena](./objeto-esta-na-cena) — Verifica se existe uma instância do objeto na cena.
- [Objeto está no chão](./objeto-esta-no-chao) — Verifica se o objeto está apoiado em uma colisão.
- [Objeto está pulando](./objeto-esta-pulando) — Verifica se o objeto está na parte ascendente do pulo.
- [Objeto está caindo](./objeto-esta-caindo) — Verifica se o objeto está descendo pela gravidade.

<a class="node-back-link" href="./">← Ver todos os nós</a>
