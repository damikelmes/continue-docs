---
title: "Objeto foi criado"
description: "Detecta o momento em que uma instância é criada."
---

<div class="node-page-kicker" style="--node-page-color: #4ADE80">
  <span class="node-page-icon"><NodeIcon type="condition-object-created" icon="add-circle-outline" color="#4ADE80" :size="38" /></span>
  <span class="node-page-meta">
    <span class="node-kind">CONDIÇÃO</span>
    <span class="node-category-name">Estado do objeto</span>
  </span>
</div>

# Objeto foi criado

<p class="node-purpose">Detecta o momento em que uma instância é criada.</p>

## Para que serve

Executa uma inicialização uma vez para cada nova instância.

## Campos

| Campo | O que configurar |
| --- | --- |
| **Objeto** | Objeto que será verificado. |
| **Instâncias** | Todas as instâncias ou uma instância específica. |
| **Resultado esperado** | Ativado verifica a condição normal; desativado verifica o contrário. |

## Exemplo

<div class="node-example" style="--node-page-color: #4ADE80">
  <ol>
    <li>Escolha “Inimigo”.</li>
    <li>Conecte abaixo uma ação para iniciar sua animação de entrada.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> Cada inimigo novo inicia a animação assim que nasce.</p>
</div>

## Regras

- Se nenhuma instância correspondente existir, a verificação do objeto será falsa, exceto na forma negativa.
- O evento acontece somente no momento da criação.
- A condição não permanece verdadeira durante toda a vida do objeto.
- Use Objeto está na cena para uma verificação contínua.
- Somente os nós conectados abaixo continuam quando o resultado escolhido é verdadeiro.
- Desative “Resultado esperado” para usar a forma negativa da condição.

## Nós relacionados

- [Objeto está na cena](./objeto-esta-na-cena) — Verifica se existe uma instância do objeto na cena.
- [Objeto está no chão](./objeto-esta-no-chao) — Verifica se o objeto está apoiado em uma colisão.
- [Objeto está pulando](./objeto-esta-pulando) — Verifica se o objeto está na parte ascendente do pulo.
- [Objeto está caindo](./objeto-esta-caindo) — Verifica se o objeto está descendo pela gravidade.

<a class="node-back-link" href="./">← Ver todos os nós</a>
