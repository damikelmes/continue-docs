---
title: "Pausar emissor de partículas"
description: "Pausa a emissão e o movimento das partículas atuais."
---

<div class="node-page-kicker" style="--node-page-color: #FBBF24">
  <span class="node-page-meta">
    <span class="node-kind">AÇÃO</span>
    <span class="node-category-name">Comportamentos</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #FBBF24">
  <span class="node-title-icon"><NodeIcon type="action-pause-particle-emitter" icon="pause" color="#FBBF24" /></span>
  <span>Pausar emissor de partículas</span>
</h1>

<p class="node-purpose">Pausa a emissão e o movimento das partículas atuais.</p>

## Para que serve

Pausa a emissão e o movimento das partículas atuais.

## Campos

<div class="doc-field-list" style="--doc-field-color: #FBBF24">
  <div class="doc-field-item">
    <strong>Objeto</strong>
    <p>Escolha o objeto de destino. Nas ações com seleção múltipla, os objetos marcados recebem a mesma configuração.</p>
  </div>
  <div class="doc-field-item">
    <strong>Instâncias</strong>
    <p>Nas ações, escolha todas ou uma específica. Nas condições, escolha qualquer, todas ou uma específica.</p>
  </div>
  <div class="doc-field-item">
    <strong>Efeito de partículas</strong>
    <p>Escolha um emissor nomeado ou Todos os efeitos. Em seleção múltipla, os nomes precisam ser compatíveis nos objetos escolhidos.</p>
  </div>
  <div class="doc-field-item">
    <strong>Modo de execução</strong>
    <p>Escolha quando a ação deve ser aplicada. Para um comando pontual, evite repetições desnecessárias.</p>
  </div>
</div>

## Exemplo

<div class="node-example" style="--node-page-color: #FBBF24">
  <ol>
    <li>Selecione o emissor Fumaça.</li>
    <li>Execute Pausar emissor de partículas.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> A emissão e as partículas atuais ficam pausadas.</p>
</div>

## Regras

- O objeto precisa ter Emitir partículas e o emissor selecionado.
- Use Iniciar emissor de partículas para continuar.

## Nós relacionados

- [Ativar comportamento](./ativar-comportamento) — Ativa ou desativa um comportamento do objeto.
- [Iniciar emissor de partículas](./iniciar-emissor-de-particulas) — Inicia ou continua o emissor das instâncias escolhidas.
- [Parar emissor de partículas](./parar-emissor-de-particulas) — Interrompe novas partículas e deixa as atuais terminarem.
- [Disparar partículas](./disparar-particulas) — Cria imediatamente a quantidade de partículas escolhida.

<a class="node-back-link" href="./">← Ver todos os nós</a>
