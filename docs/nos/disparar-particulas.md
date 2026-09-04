---
title: "Disparar partículas"
description: "Cria imediatamente a quantidade de partículas escolhida."
---

<div class="node-page-kicker" style="--node-page-color: #F97316">
  <span class="node-page-meta">
    <span class="node-kind">AÇÃO</span>
    <span class="node-category-name">Comportamentos</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #F97316">
  <span class="node-title-icon"><NodeIcon type="action-burst-particles" icon="sparkles" color="#F97316" /></span>
  <span>Disparar partículas</span>
</h1>

<p class="node-purpose">Cria imediatamente a quantidade de partículas escolhida.</p>

## Para que serve

Cria imediatamente a quantidade de partículas escolhida.

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
    <strong>Efeito de partículas</strong>
    <p>Escolha um emissor nomeado ou Todos os efeitos. Em seleção múltipla, os nomes precisam ser compatíveis nos objetos escolhidos.</p>
  </div>
  <div class="doc-field-item">
    <strong>Quantidade de partículas</strong>
    <p>Quantas partículas criar no disparo.</p>
  </div>
  <div class="doc-field-item">
    <strong>Modo de execução</strong>
    <p>Escolha quando a ação deve ser aplicada. Para um comando pontual, evite repetições desnecessárias.</p>
  </div>
</div>

## Exemplo

<div class="node-example" style="--node-page-color: #F97316">
  <ol>
    <li>Crie um emissor Faíscas.</li>
    <li>Ao começar uma colisão, dispare 20 partículas.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> Um grupo de faíscas nasce de uma só vez.</p>
</div>

## Regras

- O objeto precisa ter Emitir partículas e o emissor selecionado.
- O limite de partículas vivas do emissor continua valendo.
- Não use Sempre sem uma condição de momento se a intenção for um único disparo.

## Nós relacionados

- [Ativar comportamento](./ativar-comportamento) — Ativa ou desativa um comportamento do objeto.
- [Iniciar emissor de partículas](./iniciar-emissor-de-particulas) — Inicia ou continua o emissor das instâncias escolhidas.
- [Parar emissor de partículas](./parar-emissor-de-particulas) — Interrompe novas partículas e deixa as atuais terminarem.
- [Pausar emissor de partículas](./pausar-emissor-de-particulas) — Pausa a emissão e o movimento das partículas atuais.

<a class="node-back-link" href="./">← Ver todos os nós</a>
