---
title: "Ignorar colisão"
description: "Escolhe objetos que não devem colidir com este objeto."
---

<div class="behavior-page-kicker" style="--behavior-page-color: #22D3EE">
  <span class="behavior-page-meta">
    <span class="behavior-kind">COMPORTAMENTO</span>
    <span class="behavior-category-name">Física e colisão</span>
  </span>
</div>

<h1 class="behavior-page-title" style="--behavior-page-color: #22D3EE">
  <span class="behavior-title-icon"><BehaviorIcon type="ignore-collision" color="#22D3EE" :size="26" /></span>
  <span>Ignorar colisão</span>
</h1>

<p class="behavior-purpose">Escolhe objetos que não devem colidir com este objeto.</p>

## Para que serve

Cria exceções de colisão sem remover o comportamento Colisão. É útil para aliados, projéteis do próprio jogador, plataformas especiais e instâncias do mesmo tipo.

## Campos

<div class="doc-field-list" style="--doc-field-color: #22D3EE">
  <div class="doc-field-item">
    <strong>Objetos ignorados</strong>
    <p>Um ou mais objetos cujas colisões serão desconsideradas.</p>
  </div>
</div>

## Exemplo

<div class="behavior-example" style="--behavior-page-color: #22D3EE">
  <ol>
    <li>No objeto “Projétil do jogador”, adicione Ignorar colisão.</li>
    <li>Marque o objeto “Jogador”.</li>
    <li>Mantenha inimigos e paredes fora da lista.</li>
  </ol>
  <p class="behavior-result"><strong>Resultado:</strong> O projétil atravessa o jogador, mas continua colidindo com inimigos e paredes.</p>
</div>

## Regras

- O comportamento altera somente os pares marcados na lista.
- Você pode selecionar o próprio tipo de objeto para impedir colisões entre suas instâncias.
- Os objetos ainda precisam usar Colisão para participar das outras verificações.

## Comportamentos relacionados

- [Corpo com gravidade](./corpo-com-gravidade) — Aplica queda, peso, atrito, impulso e resposta física ao objeto.
- [Colisão](./colisao) — Define a área de contato, os bloqueios e os gatilhos do objeto.

<a class="behavior-back-link" href="./">← Ver todos os comportamentos</a>
