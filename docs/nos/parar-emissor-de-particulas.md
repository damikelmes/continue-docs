---
title: "Parar emissor de partículas"
description: "Interrompe novas partículas e deixa as atuais terminarem."
---

<div class="node-page-kicker" style="--node-page-color: #FB7185">
  <span class="node-page-meta">
    <span class="node-kind">AÇÃO</span>
    <span class="node-category-name">Comportamentos</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #FB7185">
  <span class="node-title-icon"><NodeIcon type="action-stop-particle-emitter" icon="stop" color="#FB7185" /></span>
  <span>Parar emissor de partículas</span>
</h1>

<p class="node-purpose">Interrompe novas partículas e deixa as atuais terminarem.</p>

## Para que serve

Interrompe novas partículas e deixa as atuais terminarem.

## Campos

<div class="doc-field-list" style="--doc-field-color: #FB7185">
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

<div class="node-example" style="--node-page-color: #FB7185">
  <ol>
    <li>Com Fumaça emitindo, selecione o emissor neste nó.</li>
    <li>Execute quando a fonte de fumaça for desligada.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> Não nascem novas partículas; as que já existem terminam sua vida.</p>
</div>

## Regras

- O objeto precisa ter Emitir partículas e o emissor selecionado.
- Parar a emissão não apaga imediatamente as partículas. Use Limpar partículas para removê-las.

## Nós relacionados

- [Ativar comportamento](./ativar-comportamento) — Ativa ou desativa um comportamento do objeto.
- [Iniciar emissor de partículas](./iniciar-emissor-de-particulas) — Inicia ou continua o emissor das instâncias escolhidas.
- [Pausar emissor de partículas](./pausar-emissor-de-particulas) — Pausa a emissão e o movimento das partículas atuais.
- [Disparar partículas](./disparar-particulas) — Cria imediatamente a quantidade de partículas escolhida.

<a class="node-back-link" href="./">← Ver todos os nós</a>
