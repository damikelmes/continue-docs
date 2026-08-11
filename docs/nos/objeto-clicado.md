---
title: "Objeto clicado"
description: "Detecta uma vez cada novo toque no objeto."
---

<div class="node-page-kicker" style="--node-page-color: #F472B6">
  <span class="node-page-icon"><NodeIcon type="condition-object-clicked" icon="finger-print-outline" color="#F472B6" :size="38" /></span>
  <span class="node-page-meta">
    <span class="node-kind">CONDIÇÃO</span>
    <span class="node-category-name">Interação e toque</span>
  </span>
</div>

# Objeto clicado

<p class="node-purpose">Detecta uma vez cada novo toque no objeto.</p>

## Para que serve

Executa um fluxo quando o dedo começa um toque sobre a área do objeto.

## Campos

| Campo | O que configurar |
| --- | --- |
| **Objeto** | Objeto que será verificado. |
| **Instâncias** | Todas as instâncias ou uma instância específica. |
| **Resultado esperado** | Ativado verifica a condição normal; desativado verifica o contrário. |

## Exemplo

<div class="node-example" style="--node-page-color: #F472B6">
  <ol>
    <li>Escolha o objeto “Botão iniciar”.</li>
    <li>Conecte abaixo a ação que troca de cena.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> A ação executa uma vez quando o botão é tocado.</p>
</div>

## Regras

- Se nenhuma instância correspondente existir, a verificação do objeto será falsa, exceto na forma negativa.
- Cada novo toque gera uma ativação.
- Manter o dedo parado não repete o clique.
- Use Objeto pressionado para executar continuamente enquanto o dedo estiver segurando.
- Somente os nós conectados abaixo continuam quando o resultado escolhido é verdadeiro.
- Desative “Resultado esperado” para usar a forma negativa da condição.

## Nós relacionados

- [Objeto pressionado](./objeto-pressionado) — Permanece verdadeira enquanto o objeto estiver pressionado.
- [Dedo sobre o objeto](./dedo-sobre-o-objeto) — Verifica se a posição atual do dedo está sobre o objeto.

<a class="node-back-link" href="./">← Ver todos os nós</a>
