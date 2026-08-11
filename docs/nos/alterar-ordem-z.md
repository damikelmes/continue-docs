---
title: "Alterar ordem Z"
description: "Muda a ordem em que o objeto é desenhado."
---

<div class="node-page-kicker" style="--node-page-color: #818CF8">
  <span class="node-page-icon"><NodeIcon type="action-set-object-z-index" icon="layers-outline" color="#818CF8" :size="38" /></span>
  <span class="node-page-meta">
    <span class="node-kind">AÇÃO</span>
    <span class="node-category-name">Aparência</span>
  </span>
</div>

# Alterar ordem Z

<p class="node-purpose">Muda a ordem em que o objeto é desenhado.</p>

## Para que serve

Coloca um objeto na frente ou atrás de outros objetos da mesma cena.

## Campos

| Campo | O que configurar |
| --- | --- |
| **Objeto de destino** | Um ou mais objetos que receberão a ação. Quando o campo permitir seleção múltipla, todos os objetos marcados usarão a mesma configuração. |
| **Instâncias** | Escolha todas as instâncias ou uma instância específica, quando essa opção aparecer. |
| **Ordem Z** | Número usado para ordenar o desenho. |
| **Modo de execução** | Sempre, Uma única vez, Quantidade ou Por tempo. |

## Exemplo

<div class="node-example" style="--node-page-color: #818CF8">
  <ol>
    <li>Escolha “Jogador”.</li>
    <li>Defina a ordem Z como 20 ao entrar em uma ponte.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> O jogador passa a ser desenhado sobre objetos com ordem Z menor.</p>
</div>

## Regras

- O objeto precisa existir na cena quando o fluxo executar este nó.
- Valores maiores são desenhados na frente de valores menores.
- A ordem Z não altera a posição X ou Y.
- Objetos com o mesmo valor mantêm a ordem interna de desenho.
- Escolha o modo de execução de acordo com a duração desejada. “Uma única vez” não mantém uma ação contínua ativa.

## Nós relacionados

- [Trocar sprite](./trocar-sprite) — Troca a imagem exibida pelo objeto.
- [Trocar animação](./trocar-animacao) — Reproduz uma animação de sprites pelo nome.
- [Reproduzir animação de propriedades](./reproduzir-animacao-de-propriedades) — Inicia ou continua uma animação de propriedades.
- [Recomeçar animação de propriedades](./recomecar-animacao-de-propriedades) — Reinicia uma animação de propriedades no primeiro quadro.

<a class="node-back-link" href="./">← Ver todos os nós</a>
