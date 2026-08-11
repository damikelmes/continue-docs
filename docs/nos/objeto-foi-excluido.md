---
title: "Objeto foi excluído"
description: "Detecta o momento em que uma instância é removida."
---

<div class="node-page-kicker" style="--node-page-color: #FB7185">
  <span class="node-page-meta">
    <span class="node-kind">CONDIÇÃO</span>
    <span class="node-category-name">Estado do objeto</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #FB7185">
  <span class="node-title-icon"><NodeIcon type="condition-object-deleted" icon="remove-circle-outline" color="#FB7185" :size="26" /></span>
  <span>Objeto foi excluído</span>
</h1>

<p class="node-purpose">Detecta o momento em que uma instância é removida.</p>

## Para que serve

Executa efeitos, pontuação ou outras ações quando uma instância é excluída.

## Campos

| Campo | O que configurar |
| --- | --- |
| **Objeto** | Objeto que será verificado. |
| **Instâncias** | Todas as instâncias ou uma instância específica. |
| **Resultado esperado** | Ativado verifica a condição normal; desativado verifica o contrário. |

## Exemplo

<div class="node-example" style="--node-page-color: #FB7185">
  <ol>
    <li>Escolha “Inimigo”.</li>
    <li>Ao ser excluído, some 100 pontos ao placar.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> Cada inimigo removido concede 100 pontos.</p>
</div>

## Regras

- Se nenhuma instância correspondente existir, a verificação do objeto será falsa, exceto na forma negativa.
- O evento acontece uma vez por exclusão.
- A instância já não pode receber novas ações depois de removida.
- Excluir várias instâncias pode gerar o evento para cada uma.
- Somente os nós conectados abaixo continuam quando o resultado escolhido é verdadeiro.
- Desative “Resultado esperado” para usar a forma negativa da condição.

## Nós relacionados

- [Objeto está na cena](./objeto-esta-na-cena) — Verifica se existe uma instância do objeto na cena.
- [Objeto está no chão](./objeto-esta-no-chao) — Verifica se o objeto está apoiado em uma colisão.
- [Objeto está pulando](./objeto-esta-pulando) — Verifica se o objeto está na parte ascendente do pulo.
- [Objeto está caindo](./objeto-esta-caindo) — Verifica se o objeto está descendo pela gravidade.

<a class="node-back-link" href="./">← Ver todos os nós</a>
