---
title: "Corpo com gravidade"
description: "Aplica queda, peso, atrito, impulso e resposta física ao objeto."
---

<div class="behavior-page-kicker" style="--behavior-page-color: #60A5FA">
  <span class="behavior-page-icon"><BehaviorIcon type="gravity-body" color="#60A5FA" :size="38" /></span>
  <span class="behavior-page-meta">
    <span class="behavior-kind">COMPORTAMENTO</span>
    <span class="behavior-category-name">Física e colisão</span>
  </span>
</div>

# Corpo com gravidade

<p class="behavior-purpose">Aplica queda, peso, atrito, impulso e resposta física ao objeto.</p>

## Para que serve

Cria personagens e objetos que caem e reagem a superfícies. Pode controlar aceleração da gravidade, velocidade máxima, massa, atrito, quique e rotação física.

## Campos

| Campo | O que configurar |
| --- | --- |
| **Escala da gravidade** | Multiplica a força de queda aplicada ao corpo. |
| **Velocidade máxima de queda** | Limita a velocidade vertical durante a queda. |
| **Resistência do ar** | Reduz o movimento com o passar do tempo. |
| **Restituição** | Controla quanto o objeto quica ao colidir. |
| **Massa** | Peso usado nos cálculos físicos. |
| **Atrito** | Resistência ao deslizar sobre superfícies. |
| **Permitir rotação** | Deixa impactos e movimento girarem o corpo. |
| **Resistência angular** | Reduz a velocidade da rotação. |
| **Colisão precisa** | Usa verificações mais detalhadas quando necessário. |

## Exemplo

<div class="behavior-example" style="--behavior-page-color: #60A5FA">
  <ol>
    <li>Adicione Corpo com gravidade e Colisão ao objeto “Caixa”.</li>
    <li>Use gravidade 1, restituição 0,1 e atrito 0,6.</li>
    <li>Coloque uma plataforma com Colisão abaixo dela.</li>
  </ol>
  <p class="behavior-result"><strong>Resultado:</strong> A caixa cai, para sobre a plataforma e desliza pouco por causa do atrito.</p>
</div>

## Regras

- Adicione Colisão ao corpo e às superfícies que devem pará-lo.
- Colisão precisa pode consumir mais processamento e deve ser ativada somente quando trouxer benefício visível.
- Desativar rotação é útil para personagens que precisam permanecer sempre em pé.

## Comportamentos relacionados

- [Colisão](./colisao) — Cria a área sólida usada para contatos e bloqueios.
- [Ignorar colisão](./ignorar-colisao) — Escolhe objetos que não devem colidir com este objeto.

<a class="behavior-back-link" href="./">← Ver todos os comportamentos</a>
