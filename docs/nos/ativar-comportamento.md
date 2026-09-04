---
title: "Ativar comportamento"
description: "Ativa ou desativa um comportamento do objeto."
---

<div class="node-page-kicker" style="--node-page-color: #60A5FA">
  <span class="node-page-meta">
    <span class="node-kind">AÇÃO</span>
    <span class="node-category-name">Comportamentos</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #60A5FA">
  <span class="node-title-icon"><NodeIcon type="action-set-behavior-enabled" icon="power-outline" color="#60A5FA" :size="26" /></span>
  <span>Ativar comportamento</span>
</h1>

<p class="node-purpose">Ativa ou desativa um comportamento do objeto.</p>

## Para que serve

Liga e desliga comportamentos durante o jogo sem removê-los da configuração do objeto.

## Campos

<div class="doc-field-list" style="--doc-field-color: #60A5FA">
  <div class="doc-field-item">
    <strong>Objeto de destino</strong>
    <p>Um ou mais objetos que receberão a ação. Quando o campo permitir seleção múltipla, todos os objetos marcados usarão a mesma configuração.</p>
  </div>
  <div class="doc-field-item">
    <strong>Instâncias</strong>
    <p>Escolha todas as instâncias ou uma instância específica, quando essa opção aparecer.</p>
  </div>
  <div class="doc-field-item">
    <strong>Comportamento</strong>
    <p>Comportamento do objeto que será alterado.</p>
  </div>
  <div class="doc-field-item">
    <strong>Estado</strong>
    <p>Ativado ou desativado.</p>
  </div>
  <div class="doc-field-item">
    <strong>Modo de execução</strong>
    <p>Sempre, Uma única vez, Quantidade ou Por tempo.</p>
  </div>
</div>

## Exemplo

<div class="node-example" style="--node-page-color: #60A5FA">
  <ol>
    <li>Escolha “Jogador” e o comportamento Gravidade.</li>
    <li>Desative ao entrar em uma escada e ative ao sair.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> A gravidade deixa de atuar na escada e volta ao final dela.</p>
</div>

## Regras

- O objeto precisa existir na cena quando o fluxo executar este nó.
- O comportamento precisa estar adicionado ao objeto.
- Desativar não apaga as configurações do comportamento.
- Alguns estados internos podem continuar do ponto anterior quando o comportamento for reativado.
- Escolha o modo de execução de acordo com a duração desejada. “Uma única vez” não mantém uma ação contínua ativa.

## Nós relacionados

- [Iniciar emissor de partículas](./iniciar-emissor-de-particulas) — Inicia ou continua o emissor das instâncias escolhidas.
- [Parar emissor de partículas](./parar-emissor-de-particulas) — Interrompe novas partículas e deixa as atuais terminarem.
- [Pausar emissor de partículas](./pausar-emissor-de-particulas) — Pausa a emissão e o movimento das partículas atuais.
- [Disparar partículas](./disparar-particulas) — Cria imediatamente a quantidade de partículas escolhida.

<a class="node-back-link" href="./">← Ver todos os nós</a>
