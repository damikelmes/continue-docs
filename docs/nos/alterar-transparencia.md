---
title: "Alterar transparência"
description: "Muda o quanto o objeto está visível."
---

<div class="node-page-kicker" style="--node-page-color: #2DD4BF">
  <span class="node-page-meta">
    <span class="node-kind">AÇÃO</span>
    <span class="node-category-name">Aparência</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #2DD4BF">
  <span class="node-title-icon"><NodeIcon type="action-set-object-opacity" icon="water-outline" color="#2DD4BF" :size="26" /></span>
  <span>Alterar transparência</span>
</h1>

<p class="node-purpose">Muda o quanto o objeto está visível.</p>

## Para que serve

Controla a opacidade do visual para criar desaparecimentos, fantasmas e feedback de dano.

## Campos

| Campo | O que configurar |
| --- | --- |
| **Objeto de destino** | Um ou mais objetos que receberão a ação. Quando o campo permitir seleção múltipla, todos os objetos marcados usarão a mesma configuração. |
| **Instâncias** | Escolha todas as instâncias ou uma instância específica, quando essa opção aparecer. |
| **Transparência** | Porcentagem entre 0% e 100%. |
| **Modo de execução** | Sempre, Uma única vez, Quantidade ou Por tempo. |

## Exemplo

<div class="node-example" style="--node-page-color: #2DD4BF">
  <ol>
    <li>Escolha “Fantasma”.</li>
    <li>Defina a transparência como 35%.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> O fantasma fica parcialmente transparente.</p>
</div>

## Regras

- O objeto precisa existir na cena quando o fluxo executar este nó.
- 0% deixa o objeto invisível; 100% deixa totalmente visível.
- A colisão continua existindo mesmo quando o objeto está invisível.
- Pixels transparentes do sprite não passam a receber luz.
- Escolha o modo de execução de acordo com a duração desejada. “Uma única vez” não mantém uma ação contínua ativa.

## Nós relacionados

- [Trocar sprite](./trocar-sprite) — Troca a imagem exibida pelo objeto.
- [Trocar animação](./trocar-animacao) — Reproduz uma animação de sprites pelo nome.
- [Reproduzir animação de propriedades](./reproduzir-animacao-de-propriedades) — Inicia ou continua uma animação de propriedades.
- [Recomeçar animação de propriedades](./recomecar-animacao-de-propriedades) — Reinicia uma animação de propriedades no primeiro quadro.

<a class="node-back-link" href="./">← Ver todos os nós</a>
