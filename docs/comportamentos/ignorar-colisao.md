---
title: "Ignorar colisão"
description: "Escolhe objetos que não devem colidir com este objeto."
---

<div class="behavior-page-kicker" style="--behavior-page-color: #22D3EE">
  <span class="behavior-page-icon"><BehaviorIcon type="ignore-collision" color="#22D3EE" :size="38" /></span>
  <span class="behavior-page-meta">
    <span class="behavior-kind">COMPORTAMENTO</span>
    <span class="behavior-category-name">Física e colisão</span>
  </span>
</div>

# Ignorar colisão

<p class="behavior-purpose">Escolhe objetos que não devem colidir com este objeto.</p>

## Para que serve

Cria exceções de colisão sem remover o comportamento Colisão. É útil para aliados, projéteis do próprio jogador, plataformas especiais e instâncias do mesmo tipo.

## Campos

| Campo | O que configurar |
| --- | --- |
| **Objetos ignorados** | Um ou mais objetos cujas colisões serão desconsideradas. |

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
- [Colisão](./colisao) — Cria a área sólida usada para contatos e bloqueios.

<a class="behavior-back-link" href="./">← Ver todos os comportamentos</a>
