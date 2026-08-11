---
title: "Excluir objeto"
description: "Remove instâncias da cena durante o jogo."
---

<div class="node-page-kicker" style="--node-page-color: #FB7185">
  <span class="node-page-meta">
    <span class="node-kind">AÇÃO</span>
    <span class="node-category-name">Objetos e instâncias</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #FB7185">
  <span class="node-title-icon"><NodeIcon type="action-delete-object" icon="trash-outline" color="#FB7185" :size="26" /></span>
  <span>Excluir objeto</span>
</h1>

<p class="node-purpose">Remove instâncias da cena durante o jogo.</p>

## Para que serve

Apaga todas as instâncias selecionadas ou uma instância específica.

## Campos

| Campo | O que configurar |
| --- | --- |
| **Objeto** | Objeto cujas instâncias serão removidas. |
| **Instâncias** | Todas as instâncias ou uma instância específica. |
| **Modo de execução** | Sempre, Uma única vez, Quantidade ou Por tempo. |

## Exemplo

<div class="node-example" style="--node-page-color: #FB7185">
  <ol>
    <li>Escolha “Projétil”.</li>
    <li>Quando ele tocar uma parede, exclua a instância específica.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> Somente o projétil que colidiu desaparece.</p>
</div>

## Regras

- A instância deixa de participar de desenho, colisão e ações após ser excluída.
- Excluir todas as instâncias afeta todas as cópias daquele objeto.
- O evento Objeto foi excluído pode detectar a remoção.
- Escolha o modo de execução de acordo com a duração desejada. “Uma única vez” não mantém uma ação contínua ativa.

## Nós relacionados

- [Criar objeto](./criar-objeto) — Cria novas instâncias durante o jogo.

<a class="node-back-link" href="./">← Ver todos os nós</a>
