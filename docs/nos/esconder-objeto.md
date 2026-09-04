---
title: "Esconder objeto"
description: "Esconde as instâncias escolhidas sem excluí-las da cena."
---

<div class="node-page-kicker" style="--node-page-color: #94A3B8">
  <span class="node-page-meta">
    <span class="node-kind">AÇÃO</span>
    <span class="node-category-name">Aparência</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #94A3B8">
  <span class="node-title-icon"><NodeIcon type="action-hide-object" icon="eye-off" color="#94A3B8" /></span>
  <span>Esconder objeto</span>
</h1>

<p class="node-purpose">Esconde as instâncias escolhidas sem excluí-las da cena.</p>

## Para que serve

Esconde as instâncias escolhidas sem excluí-las da cena.

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
    <strong>Modo de execução</strong>
    <p>Escolha quando a ação deve ser aplicada. Para um comando pontual, evite repetições desnecessárias.</p>
  </div>
</div>

## Exemplo

<div class="node-example" style="--node-page-color: #94A3B8">
  <ol>
    <li>Escolha o objeto Indicador e a instância desejada.</li>
    <li>Conecte Esconder objeto a uma condição do jogo.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> A instância deixa de ser desenhada, mas continua existindo.</p>
</div>

## Regras

- Esconder não exclui a instância nem substitui desativar a colisão ou outros comportamentos.
- A transparência e o restante da aparência ainda influenciam o resultado.

## Nós relacionados

- [Trocar sprite](./trocar-sprite) — Troca a imagem exibida pelo objeto.
- [Trocar animação](./trocar-animacao) — Reproduz uma animação de sprites pelo nome.
- [Reproduzir animação de propriedades](./reproduzir-animacao-de-propriedades) — Inicia ou continua uma animação de propriedades.
- [Recomeçar animação de propriedades](./recomecar-animacao-de-propriedades) — Reinicia uma animação de propriedades no primeiro quadro.

<a class="node-back-link" href="./">← Ver todos os nós</a>
