---
title: "Trocar animação"
description: "Reproduz uma animação de sprites pelo nome."
---

<div class="node-page-kicker" style="--node-page-color: #4ADE80">
  <span class="node-page-icon"><NodeIcon type="action-set-object-animation" icon="film" color="#4ADE80" :size="38" /></span>
  <span class="node-page-meta">
    <span class="node-kind">AÇÃO</span>
    <span class="node-category-name">Aparência</span>
  </span>
</div>

# Trocar animação

<p class="node-purpose">Reproduz uma animação de sprites pelo nome.</p>

## Para que serve

Muda a animação visual ativa de um objeto, como parado, correndo ou atacando.

## Campos

| Campo | O que configurar |
| --- | --- |
| **Objeto de destino** | Um ou mais objetos que receberão a ação. Quando o campo permitir seleção múltipla, todos os objetos marcados usarão a mesma configuração. |
| **Instâncias** | Escolha todas as instâncias ou uma instância específica, quando essa opção aparecer. |
| **Animação** | Nome da animação de sprites que será reproduzida. |
| **Modo de execução** | Sempre, Uma única vez, Quantidade ou Por tempo. |

## Exemplo

<div class="node-example" style="--node-page-color: #4ADE80">
  <ol>
    <li>Crie a animação “Correndo”.</li>
    <li>Quando o jogador estiver se movendo, selecione “Correndo”.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> O objeto reproduz os quadros da animação Correndo.</p>
</div>

## Regras

- O objeto precisa existir na cena quando o fluxo executar este nó.
- A animação precisa existir no objeto.
- FPS e repetição vêm da configuração da animação escolhida.
- Evite reiniciar a mesma animação em todos os quadros se quiser preservar o progresso.
- Escolha o modo de execução de acordo com a duração desejada. “Uma única vez” não mantém uma ação contínua ativa.

## Nós relacionados

- [Trocar sprite](./trocar-sprite) — Troca a imagem exibida pelo objeto.
- [Reproduzir animação de propriedades](./reproduzir-animacao-de-propriedades) — Inicia ou continua uma animação de propriedades.
- [Recomeçar animação de propriedades](./recomecar-animacao-de-propriedades) — Reinicia uma animação de propriedades no primeiro quadro.
- [Pausar animação de propriedades](./pausar-animacao-de-propriedades) — Pausa a animação sem perder o progresso.

<a class="node-back-link" href="./">← Ver todos os nós</a>
