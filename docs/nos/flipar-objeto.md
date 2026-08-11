---
title: "Flipar objeto"
description: "Espelha o objeto com uma animação de virada."
---

<div class="node-page-kicker" style="--node-page-color: #2DD4BF">
  <span class="node-page-icon"><NodeIcon type="action-flip-object-animated" icon="swap-horizontal-outline" color="#2DD4BF" :size="38" /></span>
  <span class="node-page-meta">
    <span class="node-kind">AÇÃO</span>
    <span class="node-category-name">Aparência</span>
  </span>
</div>

# Flipar objeto

<p class="node-purpose">Espelha o objeto com uma animação de virada.</p>

## Para que serve

Cria uma transição visual ao virar o objeto na horizontal ou vertical.

## Campos

| Campo | O que configurar |
| --- | --- |
| **Objeto de destino** | O objeto que receberá a ação. |
| **Instâncias** | Escolha todas as instâncias ou uma instância específica, quando essa opção aparecer. |
| **Direção** | Horizontal ou vertical. |
| **Resultado** | Alternar lados ou escolher um lado fixo. |
| **Tempo da animação** | Duração total da virada em segundos. |
| **Modo de execução** | Sempre, Uma única vez, Quantidade ou Por tempo. |

## Exemplo

<div class="node-example" style="--node-page-color: #2DD4BF">
  <ol>
    <li>Escolha “Carta”.</li>
    <li>Use Horizontal, Alternar lados e duração 0,35 s.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> A carta afina, vira e volta à largura normal mostrando o lado oposto.</p>
</div>

## Regras

- O objeto precisa existir na cena quando o fluxo executar este nó.
- Use Inverter objeto quando não quiser animação.
- Uma nova virada pode substituir a animação anterior.
- A posição central permanece fixa.
- Escolha o modo de execução de acordo com a duração desejada. “Uma única vez” não mantém uma ação contínua ativa.

## Nós relacionados

- [Trocar sprite](./trocar-sprite) — Troca a imagem exibida pelo objeto.
- [Trocar animação](./trocar-animacao) — Reproduz uma animação de sprites pelo nome.
- [Reproduzir animação de propriedades](./reproduzir-animacao-de-propriedades) — Inicia ou continua uma animação de propriedades.
- [Recomeçar animação de propriedades](./recomecar-animacao-de-propriedades) — Reinicia uma animação de propriedades no primeiro quadro.

<a class="node-back-link" href="./">← Ver todos os nós</a>
