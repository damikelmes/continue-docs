---
title: "Limpar partículas"
description: "Remove todas as partículas atuais das instâncias escolhidas."
---

<div class="node-page-kicker" style="--node-page-color: #94A3B8">
  <span class="node-page-meta">
    <span class="node-kind">AÇÃO</span>
    <span class="node-category-name">Comportamentos</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #94A3B8">
  <span class="node-title-icon"><NodeIcon type="action-clear-particles" icon="trash" color="#94A3B8" :size="26" /></span>
  <span>Limpar partículas</span>
</h1>

<p class="node-purpose">Remove todas as partículas atuais das instâncias escolhidas.</p>

## Para que serve

Remove todas as partículas atuais das instâncias escolhidas.

## Campos

<div class="doc-field-list" style="--doc-field-color: #94A3B8">
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

<div class="node-example" style="--node-page-color: #94A3B8">
  <ol>
    <li>Selecione Fumaça.</li>
    <li>Execute Limpar partículas quando quiser remover as partículas existentes.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> As partículas atuais são removidas.</p>
</div>

## Regras

- O objeto precisa ter Emitir partículas e o emissor selecionado.
- Limpar as partículas não equivale a parar a emissão; pare também se não quiser novos nascimentos.

## Nós relacionados

- [Ativar comportamento](./ativar-comportamento) — Ativa ou desativa um comportamento do objeto.
- [Iniciar emissor de partículas](./iniciar-emissor-de-particulas) — Inicia ou continua o emissor das instâncias escolhidas.
- [Parar emissor de partículas](./parar-emissor-de-particulas) — Interrompe novas partículas e deixa as atuais terminarem.
- [Pausar emissor de partículas](./pausar-emissor-de-particulas) — Pausa a emissão e o movimento das partículas atuais.

<a class="node-back-link" href="./">← Ver todos os nós</a>
