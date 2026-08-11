---
title: "Chacoalhar câmera"
description: "Sacode a visão da cena sem mudar o centro lógico da câmera."
---

<div class="node-page-kicker" style="--node-page-color: #F59E0B">
  <span class="node-page-icon"><NodeIcon type="action-shake-camera" icon="videocam-outline" color="#F59E0B" :size="38" /></span>
  <span class="node-page-meta">
    <span class="node-kind">AÇÃO</span>
    <span class="node-category-name">Câmera</span>
  </span>
</div>

# Chacoalhar câmera

<p class="node-purpose">Sacode a visão da cena sem mudar o centro lógico da câmera.</p>

## Para que serve

Cria impacto visual para explosões, dano, quedas e eventos importantes.

## Campos

| Campo | O que configurar |
| --- | --- |
| **Intensidade** | Distância máxima do tremor em pixels. |
| **Tempo do tremor** | Duração quando o modo é Uma única vez. |
| **Modo de execução** | Sempre, Uma única vez, Quantidade ou Por tempo. |

## Exemplo

<div class="node-example" style="--node-page-color: #F59E0B">
  <ol>
    <li>Use intensidade 10 px e duração 0,4 s quando uma explosão acontecer.</li>
    <li>Execute Uma única vez.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> Toda a cena treme por 0,4 segundo.</p>
</div>

## Regras

- O tremor é visual e não altera CameraCenterX() ou CameraCenterY().
- No modo Sempre, o campo de duração some e o tremor continua enquanto o fluxo estiver ativo.
- Intensidades altas podem dificultar a leitura da cena.
- Escolha o modo de execução de acordo com a duração desejada. “Uma única vez” não mantém uma ação contínua ativa.

## Nós relacionados

- [Câmera suave](./camera-suave) — Faz a câmera acompanhar um objeto com suavidade.
- [Centralizar câmera](./centralizar-camera) — Coloca o centro da câmera exatamente no centro do objeto.
- [Mudar posição X da câmera](./mudar-posicao-x-da-camera) — Altera apenas o centro horizontal da câmera.
- [Mudar posição Y da câmera](./mudar-posicao-y-da-camera) — Altera apenas o centro vertical da câmera.

<a class="node-back-link" href="./">← Ver todos os nós</a>
