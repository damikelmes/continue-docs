---
title: "Alterar escala"
description: "Aumenta ou diminui o objeto proporcionalmente."
---

<div class="node-page-kicker" style="--node-page-color: #FB923C">
  <span class="node-page-meta">
    <span class="node-kind">AÇÃO</span>
    <span class="node-category-name">Movimento e posição</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #FB923C">
  <span class="node-title-icon"><NodeIcon type="action-set-object-scale" icon="expand-outline" color="#FB923C" :size="26" /></span>
  <span>Alterar escala</span>
</h1>

<p class="node-purpose">Aumenta ou diminui o objeto proporcionalmente.</p>

## Para que serve

Redimensiona largura e altura juntas mantendo a proporção original.

## Campos

| Campo | O que configurar |
| --- | --- |
| **Objeto de destino** | Um ou mais objetos que receberão a ação. Quando o campo permitir seleção múltipla, todos os objetos marcados usarão a mesma configuração. |
| **Instâncias** | Escolha todas as instâncias ou uma instância específica, quando essa opção aparecer. |
| **Escala** | Multiplicador do tamanho: 1 é o tamanho normal, 2 é o dobro e 0,5 é a metade. |
| **Modo de execução** | Sempre, Uma única vez, Quantidade ou Por tempo. |

## Exemplo

<div class="node-example" style="--node-page-color: #FB923C">
  <ol>
    <li>Escolha “Moeda”.</li>
    <li>Defina a escala como 1,5.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> A moeda fica 50% maior nos dois eixos.</p>
</div>

## Regras

- O objeto precisa existir na cena quando o fluxo executar este nó.
- A escala deve ser maior que zero.
- O centro do objeto permanece na mesma posição.
- Use largura ou altura quando precisar alterar apenas um eixo.
- Escolha o modo de execução de acordo com a duração desejada. “Uma única vez” não mantém uma ação contínua ativa.

## Nós relacionados

- [Transicionar propriedade](./transicionar-propriedade) — Anima uma propriedade do valor atual até o valor final.
- [Chacoalhar objeto](./chacoalhar-objeto) — Sacode o visual do objeto sem mudar sua posição real.
- [Orbitar objeto](./orbitar-objeto) — Faz um objeto girar continuamente ao redor de outro.
- [Seguir objeto](./seguir-objeto) — Move um objeto até outro mantendo uma distância escolhida.

<a class="node-back-link" href="./">← Ver todos os nós</a>
