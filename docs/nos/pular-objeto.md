---
title: "Pular objeto"
description: "Aplica uma força de pulo a um objeto no chão."
---

<div class="node-page-kicker" style="--node-page-color: #4ADE80">
  <span class="node-page-meta">
    <span class="node-kind">AÇÃO</span>
    <span class="node-category-name">Movimento e posição</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #4ADE80">
  <span class="node-title-icon"><NodeIcon type="action-jump-object" icon="arrow-up-circle" color="#4ADE80" :size="26" /></span>
  <span>Pular objeto</span>
</h1>

<p class="node-purpose">Aplica uma força de pulo a um objeto no chão.</p>

## Para que serve

Faz personagens e outros corpos com gravidade pularem usando a detecção de chão.

## Campos

| Campo | O que configurar |
| --- | --- |
| **Objeto de destino** | Um ou mais objetos que receberão a ação. Quando o campo permitir seleção múltipla, todos os objetos marcados usarão a mesma configuração. |
| **Instâncias** | Escolha todas as instâncias ou uma instância específica, quando essa opção aparecer. |
| **Força do pulo** | Velocidade vertical inicial aplicada ao pulo. |
| **Modo de execução** | Sempre, Uma única vez, Quantidade ou Por tempo. |

## Exemplo

<div class="node-example" style="--node-page-color: #4ADE80">
  <ol>
    <li>Adicione Gravidade e Colisão ao “Jogador”.</li>
    <li>Quando “Objeto está no chão” e o botão de pulo for pressionado, use força 720 px/s.</li>
    <li>Execute Uma única vez.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> O jogador sobe e depois volta a cair pela gravidade.</p>
</div>

## Regras

- O objeto precisa existir na cena quando o fluxo executar este nó.
- O objeto precisa usar o comportamento Gravidade.
- O pulo só começa quando o objeto está no chão.
- Use Uma única vez por toque para não reaplicar a força em todos os quadros.
- Escolha o modo de execução de acordo com a duração desejada. “Uma única vez” não mantém uma ação contínua ativa.

## Nós relacionados

- [Transicionar propriedade](./transicionar-propriedade) — Anima uma propriedade do valor atual até o valor final.
- [Chacoalhar objeto](./chacoalhar-objeto) — Sacode o visual do objeto sem mudar sua posição real.
- [Orbitar objeto](./orbitar-objeto) — Faz um objeto girar continuamente ao redor de outro.
- [Seguir objeto](./seguir-objeto) — Move um objeto até outro mantendo uma distância escolhida.

<a class="node-back-link" href="./">← Ver todos os nós</a>
