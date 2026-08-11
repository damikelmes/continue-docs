---
title: "Emitir luz"
description: "Faz o objeto iluminar a cena e projetar sombras."
---

<div class="behavior-page-kicker" style="--behavior-page-color: #FDE047">
  <span class="behavior-page-icon"><BehaviorIcon type="light-emitter" color="#FDE047" :size="38" /></span>
  <span class="behavior-page-meta">
    <span class="behavior-kind">COMPORTAMENTO</span>
    <span class="behavior-category-name">Iluminação</span>
  </span>
</div>

# Emitir luz

<p class="behavior-purpose">Faz o objeto iluminar a cena e projetar sombras.</p>

## Para que serve

Adiciona uma luz 2D configurável ao objeto. A luz acompanha a instância e pode usar suavidade, pulso, ordem de desenho e sombras.

## Campos

| Campo | O que configurar |
| --- | --- |
| **Raio** | Alcance total da iluminação. |
| **Raio interno** | Área central que mantém a luz mais intensa. |
| **Cor, intensidade e opacidade** | Aparência e força da luz. |
| **Suavidade** | Transição entre a área iluminada e a escuridão. |
| **Posição da luz** | Desenha a iluminação por baixo ou por cima dos objetos. |
| **Projetar sombras** | Ativa as sombras criadas por objetos com Barrar luz. |
| **Qualidade e suavidade da sombra** | Equilíbrio entre detalhe visual e desempenho. |
| **Pulso** | Varia o tamanho da luz usando escala e velocidade. |

## Exemplo

<div class="behavior-example" style="--behavior-page-color: #FDE047">
  <ol>
    <li>Adicione Emitir luz ao objeto “Tocha”.</li>
    <li>Use raio 220 px, cor laranja, intensidade 100% e borda suave.</li>
    <li>Ative sombras e escolha qualidade média.</li>
  </ol>
  <p class="behavior-result"><strong>Resultado:</strong> A tocha ilumina a área ao redor e os bloqueadores projetam sombras com bordas suaves.</p>
</div>

## Regras

- A cor da luz ambiente e a escuridão pertencem à camada de iluminação e afetam todas as luzes.
- Quanto maior o raio, a qualidade e a quantidade de luzes com sombra, maior pode ser o custo de renderização.
- O pulso usa o tempo do jogo e deve manter a mesma velocidade em diferentes taxas de quadros.

## Comportamentos relacionados

- [Barrar luz](./barrar-luz) — Faz o objeto bloquear luz e projetar sua área de colisão.

<a class="behavior-back-link" href="./">← Ver todos os comportamentos</a>
