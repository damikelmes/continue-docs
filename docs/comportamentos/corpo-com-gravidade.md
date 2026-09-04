---
title: "Corpo com gravidade"
description: "Aplica queda, peso, atrito, impulso e resposta física ao objeto."
---

<div class="behavior-page-kicker" style="--behavior-page-color: #60A5FA">
  <span class="behavior-page-meta">
    <span class="behavior-kind">COMPORTAMENTO</span>
    <span class="behavior-category-name">Física e colisão</span>
  </span>
</div>

<h1 class="behavior-page-title" style="--behavior-page-color: #60A5FA">
  <span class="behavior-title-icon"><BehaviorIcon type="gravity-body" color="#60A5FA" :size="26" /></span>
  <span>Corpo com gravidade</span>
</h1>

<p class="behavior-purpose">Aplica queda, peso, atrito, impulso e resposta física ao objeto.</p>

## Para que serve

Cria personagens e objetos que caem e reagem a superfícies. Pode controlar aceleração da gravidade, velocidade máxima, massa, atrito, quique e rotação física.

## Campos

<div class="doc-field-list" style="--doc-field-color: #60A5FA">
  <div class="doc-field-item">
    <strong>Escala da gravidade</strong>
    <p>Multiplica a força de queda aplicada ao corpo.</p>
  </div>
  <div class="doc-field-item">
    <strong>Velocidade máxima de queda</strong>
    <p>Limita a velocidade vertical durante a queda.</p>
  </div>
  <div class="doc-field-item">
    <strong>Resistência do ar</strong>
    <p>Reduz o movimento com o passar do tempo.</p>
  </div>
  <div class="doc-field-item">
    <strong>Restituição</strong>
    <p>Controla quanto o objeto quica ao colidir.</p>
  </div>
  <div class="doc-field-item">
    <strong>Massa</strong>
    <p>Peso usado nos cálculos físicos.</p>
  </div>
  <div class="doc-field-item">
    <strong>Atrito</strong>
    <p>Resistência ao deslizar sobre superfícies.</p>
  </div>
  <div class="doc-field-item">
    <strong>Permitir rotação</strong>
    <p>Deixa impactos e movimento girarem o corpo.</p>
  </div>
  <div class="doc-field-item">
    <strong>Resistência angular</strong>
    <p>Reduz a velocidade da rotação.</p>
  </div>
  <div class="doc-field-item">
    <strong>Colisão precisa</strong>
    <p>Usa verificações mais detalhadas quando necessário.</p>
  </div>
</div>

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

- [Colisão](./colisao) — Define a área de contato, os bloqueios e os gatilhos do objeto.
- [Ignorar colisão](./ignorar-colisao) — Escolhe objetos que não devem colidir com este objeto.

<a class="behavior-back-link" href="./">← Ver todos os comportamentos</a>
