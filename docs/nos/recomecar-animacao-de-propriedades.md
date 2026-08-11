---
title: "Recomeçar animação de propriedades"
description: "Reinicia uma animação de propriedades no primeiro quadro."
---

<div class="node-page-kicker" style="--node-page-color: #38BDF8">
  <span class="node-page-icon"><NodeIcon type="action-restart-property-animation" icon="refresh-circle-outline" color="#38BDF8" :size="38" /></span>
  <span class="node-page-meta">
    <span class="node-kind">AÇÃO</span>
    <span class="node-category-name">Aparência</span>
  </span>
</div>

# Recomeçar animação de propriedades

<p class="node-purpose">Reinicia uma animação de propriedades no primeiro quadro.</p>

## Para que serve

Volta a animação escolhida para o início e começa sua reprodução novamente.

## Campos

| Campo | O que configurar |
| --- | --- |
| **Objeto de destino** | O objeto que receberá a ação. |
| **Instâncias** | Escolha todas as instâncias ou uma instância específica, quando essa opção aparecer. |
| **Animação** | Nome da animação de propriedades que será reiniciada. |
| **Modo de execução** | Sempre, Uma única vez, Quantidade ou Por tempo. |

## Exemplo

<div class="node-example" style="--node-page-color: #38BDF8">
  <ol>
    <li>Escolha a animação “Piscar”.</li>
    <li>Execute quando o objeto receber dano.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> Toda vez que o dano ocorrer, a animação Piscar começa desde o primeiro keyframe.</p>
</div>

## Regras

- O objeto precisa existir na cena quando o fluxo executar este nó.
- A animação precisa existir no comportamento Animação de propriedades.
- O progresso atual é descartado.
- Use Uma única vez por evento para evitar reiniciar em todos os quadros.
- Escolha o modo de execução de acordo com a duração desejada. “Uma única vez” não mantém uma ação contínua ativa.

## Nós relacionados

- [Trocar sprite](./trocar-sprite) — Troca a imagem exibida pelo objeto.
- [Trocar animação](./trocar-animacao) — Reproduz uma animação de sprites pelo nome.
- [Reproduzir animação de propriedades](./reproduzir-animacao-de-propriedades) — Inicia ou continua uma animação de propriedades.
- [Pausar animação de propriedades](./pausar-animacao-de-propriedades) — Pausa a animação sem perder o progresso.

<a class="node-back-link" href="./">← Ver todos os nós</a>
