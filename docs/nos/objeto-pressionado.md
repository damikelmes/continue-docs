---
title: "Objeto pressionado"
description: "Permanece verdadeira enquanto o objeto estiver pressionado."
---

<div class="node-page-kicker" style="--node-page-color: #FB923C">
  <span class="node-page-icon"><NodeIcon type="condition-object-pressed" icon="hand-left-outline" color="#FB923C" :size="38" /></span>
  <span class="node-page-meta">
    <span class="node-kind">CONDIÇÃO</span>
    <span class="node-category-name">Interação e toque</span>
  </span>
</div>

# Objeto pressionado

<p class="node-purpose">Permanece verdadeira enquanto o objeto estiver pressionado.</p>

## Para que serve

Mantém um fluxo ativo durante todo o tempo em que o dedo segura o objeto.

## Campos

| Campo | O que configurar |
| --- | --- |
| **Objeto** | Objeto que será verificado. |
| **Instâncias** | Todas as instâncias ou uma instância específica. |
| **Resultado esperado** | Ativado verifica a condição normal; desativado verifica o contrário. |

## Exemplo

<div class="node-example" style="--node-page-color: #FB923C">
  <ol>
    <li>Escolha o botão “Direita”.</li>
    <li>Conecte Mover em X abaixo e use o modo Sempre.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> O jogador continua andando enquanto o botão estiver pressionado.</p>
</div>

## Regras

- Se nenhuma instância correspondente existir, a verificação do objeto será falsa, exceto na forma negativa.
- A condição deixa de ser verdadeira quando o dedo é solto ou sai da interação.
- Pode executar os nós conectados em vários quadros.
- Use Objeto clicado para uma ação única por toque.
- Somente os nós conectados abaixo continuam quando o resultado escolhido é verdadeiro.
- Desative “Resultado esperado” para usar a forma negativa da condição.

## Nós relacionados

- [Objeto clicado](./objeto-clicado) — Detecta uma vez cada novo toque no objeto.
- [Dedo sobre o objeto](./dedo-sobre-o-objeto) — Verifica se a posição atual do dedo está sobre o objeto.

<a class="node-back-link" href="./">← Ver todos os nós</a>
