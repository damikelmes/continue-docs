---
title: "Emitir luz"
description: "Faz o objeto iluminar a cena e projetar sombras."
---

<div class="behavior-page-kicker" style="--behavior-page-color: #FDE047">
  <span class="behavior-page-meta">
    <span class="behavior-kind">COMPORTAMENTO</span>
    <span class="behavior-category-name">Iluminação</span>
  </span>
</div>

<h1 class="behavior-page-title" style="--behavior-page-color: #FDE047">
  <span class="behavior-title-icon"><BehaviorIcon type="light-emitter" color="#FDE047" :size="26" /></span>
  <span>Emitir luz</span>
</h1>

<p class="behavior-purpose">Faz o objeto iluminar a cena e projetar sombras.</p>

## Para que serve

Adiciona uma luz 2D configurável ao objeto. A luz acompanha a instância e pode usar suavidade, pulso, ordem de desenho e sombras.

## Campos

<div class="doc-field-list" style="--doc-field-color: #FDE047">
  <div class="doc-field-item">
    <strong>Raio</strong>
    <p>Alcance total da iluminação.</p>
  </div>
  <div class="doc-field-item">
    <strong>Raio interno</strong>
    <p>Área central que mantém a luz mais intensa.</p>
  </div>
  <div class="doc-field-item">
    <strong>Cor, intensidade e opacidade</strong>
    <p>Aparência e força da luz.</p>
  </div>
  <div class="doc-field-item">
    <strong>Suavidade</strong>
    <p>Transição entre a área iluminada e a escuridão.</p>
  </div>
  <div class="doc-field-item">
    <strong>Posição da luz</strong>
    <p>Desenha a iluminação por baixo ou por cima dos objetos.</p>
  </div>
  <div class="doc-field-item">
    <strong>Projetar sombras</strong>
    <p>Ativa as sombras criadas por objetos com Barrar luz.</p>
  </div>
  <div class="doc-field-item">
    <strong>Qualidade e suavidade da sombra</strong>
    <p>Equilíbrio entre detalhe visual e desempenho.</p>
  </div>
  <div class="doc-field-item">
    <strong>Pulso</strong>
    <p>Varia o tamanho da luz usando escala e velocidade.</p>
  </div>
  <div class="doc-field-item">
    <strong>Cor da escuridão</strong>
    <p>Cor ambiente compartilhada pelas luzes do projeto.</p>
  </div>
  <div class="doc-field-item">
    <strong>Escuridão</strong>
    <p>0% mantém a camada clara; 100% deixa a camada totalmente escura fora da iluminação.</p>
  </div>
</div>

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
