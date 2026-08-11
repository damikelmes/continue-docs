---
title: "Pausar animação de propriedades"
description: "Pausa a animação sem perder o progresso."
---

<div class="node-page-kicker" style="--node-page-color: #FBBF24">
  <span class="node-page-icon"><NodeIcon type="action-pause-property-animation" icon="pause-circle-outline" color="#FBBF24" :size="38" /></span>
  <span class="node-page-meta">
    <span class="node-kind">AÇÃO</span>
    <span class="node-category-name">Aparência</span>
  </span>
</div>

# Pausar animação de propriedades

<p class="node-purpose">Pausa a animação sem perder o progresso.</p>

## Para que serve

Interrompe temporariamente a animação de propriedades ativa e preserva o instante atual.

## Campos

| Campo | O que configurar |
| --- | --- |
| **Objeto de destino** | Um ou mais objetos que receberão a ação. Quando o campo permitir seleção múltipla, todos os objetos marcados usarão a mesma configuração. |
| **Instâncias** | Escolha todas as instâncias ou uma instância específica, quando essa opção aparecer. |
| **Animação** | Nome da animação de propriedades que será pausada. |
| **Modo de execução** | Sempre, Uma única vez, Quantidade ou Por tempo. |

## Exemplo

<div class="node-example" style="--node-page-color: #FBBF24">
  <ol>
    <li>Pause “Flutuar” quando o jogo entrar em pausa.</li>
    <li>Use Reproduzir animação de propriedades ao continuar o jogo.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> O objeto para no quadro atual e depois continua do mesmo ponto.</p>
</div>

## Regras

- O objeto precisa existir na cena quando o fluxo executar este nó.
- A pausa não volta ao primeiro quadro.
- Use Recomeçar se quiser descartar o progresso.
- A animação precisa estar associada ao objeto.
- Escolha o modo de execução de acordo com a duração desejada. “Uma única vez” não mantém uma ação contínua ativa.

## Nós relacionados

- [Trocar sprite](./trocar-sprite) — Troca a imagem exibida pelo objeto.
- [Trocar animação](./trocar-animacao) — Reproduz uma animação de sprites pelo nome.
- [Reproduzir animação de propriedades](./reproduzir-animacao-de-propriedades) — Inicia ou continua uma animação de propriedades.
- [Recomeçar animação de propriedades](./recomecar-animacao-de-propriedades) — Reinicia uma animação de propriedades no primeiro quadro.

<a class="node-back-link" href="./">← Ver todos os nós</a>
