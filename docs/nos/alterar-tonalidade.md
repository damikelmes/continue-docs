---
title: "Alterar tonalidade"
description: "Aplica uma cor sobre o visual do objeto."
---

<div class="node-page-kicker" style="--node-page-color: #F472B6">
  <span class="node-page-meta">
    <span class="node-kind">AÇÃO</span>
    <span class="node-category-name">Aparência</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #F472B6">
  <span class="node-title-icon"><NodeIcon type="action-set-object-tint" icon="color-palette-outline" color="#F472B6" :size="26" /></span>
  <span>Alterar tonalidade</span>
</h1>

<p class="node-purpose">Aplica uma cor sobre o visual do objeto.</p>

## Para que serve

Tinge o sprite ou a forma sem trocar sua imagem, útil para dano, equipes e estados especiais.

## Campos

| Campo | O que configurar |
| --- | --- |
| **Objeto de destino** | Um ou mais objetos que receberão a ação. Quando o campo permitir seleção múltipla, todos os objetos marcados usarão a mesma configuração. |
| **Instâncias** | Escolha todas as instâncias ou uma instância específica, quando essa opção aparecer. |
| **Cor** | Cor escolhida no seletor de tonalidade. |
| **Modo de execução** | Sempre, Uma única vez, Quantidade ou Por tempo. |

## Exemplo

<div class="node-example" style="--node-page-color: #F472B6">
  <ol>
    <li>Escolha “Jogador”.</li>
    <li>Aplique vermelho ao receber dano e volte para branco depois.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> O visual do jogador recebe uma tonalidade vermelha temporária.</p>
</div>

## Regras

- O objeto precisa existir na cena quando o fluxo executar este nó.
- A tonalidade multiplica a cor original do visual.
- Branco preserva as cores originais.
- A transparência original dos pixels é preservada.
- Escolha o modo de execução de acordo com a duração desejada. “Uma única vez” não mantém uma ação contínua ativa.

## Nós relacionados

- [Trocar sprite](./trocar-sprite) — Troca a imagem exibida pelo objeto.
- [Trocar animação](./trocar-animacao) — Reproduz uma animação de sprites pelo nome.
- [Reproduzir animação de propriedades](./reproduzir-animacao-de-propriedades) — Inicia ou continua uma animação de propriedades.
- [Recomeçar animação de propriedades](./recomecar-animacao-de-propriedades) — Reinicia uma animação de propriedades no primeiro quadro.

<a class="node-back-link" href="./">← Ver todos os nós</a>
