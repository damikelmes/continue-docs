---
title: "Colisão"
description: "Define a área de contato, os bloqueios e os gatilhos do objeto."
---

<div class="behavior-page-kicker" style="--behavior-page-color: #FBBF24">
  <span class="behavior-page-meta">
    <span class="behavior-kind">COMPORTAMENTO</span>
    <span class="behavior-category-name">Física e colisão</span>
  </span>
</div>

<h1 class="behavior-page-title" style="--behavior-page-color: #FBBF24">
  <span class="behavior-title-icon"><BehaviorIcon type="collision" color="#FBBF24" /></span>
  <span>Colisão</span>
</h1>

<p class="behavior-purpose">Define a área de contato, os bloqueios e os gatilhos do objeto.</p>

## Para que serve

Permite configurar uma área de colisão separada da imagem. Ela acompanha a instância e pode ter tamanho, deslocamento e rotação próprios. Use para paredes, plataformas, personagens e regiões que detectam passagem.

## Campos

<div class="doc-field-list" style="--doc-field-color: #FBBF24">
  <div class="doc-field-item">
    <strong>Formato</strong>
    <p>Retângulo, círculo ou polígono. O polígono permite editar os pontos e gerar um contorno a partir dos pixels visíveis do sprite.</p>
  </div>
  <div class="doc-field-item">
    <strong>Tamanho</strong>
    <p>Largura, altura e arredondamento para o retângulo; raio para o círculo; pontos para o polígono.</p>
  </div>
  <div class="doc-field-item">
    <strong>Posição X e Y</strong>
    <p>Deslocamento da colisão em relação ao objeto.</p>
  </div>
  <div class="doc-field-item">
    <strong>Rotação da colisão</strong>
    <p>Gira somente a área de colisão, sem girar a imagem do objeto.</p>
  </div>
  <div class="doc-field-item">
    <strong>Tipo</strong>
    <p>Sólida, Gatilho ou Um lado. O gatilho detecta contato sem atuar como uma parede.</p>
  </div>
  <div class="doc-field-item">
    <strong>Lados de bloqueio</strong>
    <p>No modo Um lado, escolha os lados que impedem a passagem.</p>
  </div>
  <div class="doc-field-item">
    <strong>Ativa ao iniciar</strong>
    <p>Define se a colisão começa ligada.</p>
  </div>
  <div class="doc-field-item">
    <strong>Colisão precisa</strong>
    <p>Ajuda a evitar atravessar áreas finas em movimentos rápidos.</p>
  </div>
  <div class="doc-field-item">
    <strong>Margem de contato</strong>
    <p>Pequena folga ao redor da área para estabilizar contatos.</p>
  </div>
  <div class="doc-field-item">
    <strong>Mostrar no debug</strong>
    <p>Permite ver o contorno quando o debug estiver ligado.</p>
  </div>
</div>

## Exemplo

<div class="behavior-example" style="--behavior-page-color: #FBBF24">
  <ol>
    <li>Adicione Colisão ao “Jogador” e à “Parede”.</li>
    <li>Adicione Corpo com gravidade ao jogador se quiser uma resposta física automática.</li>
    <li>Use uma condição de contato no script quando precisar executar uma ação.</li>
  </ol>
  <p class="behavior-result"><strong>Resultado:</strong> A engine reconhece quando as áreas dos dois objetos se encontram e pode impedir que o corpo atravesse a parede.</p>
</div>

## Regras

- Com deslocamento zero, a área fica centralizada no objeto; os campos de posição da colisão permitem afastá-la desse centro.
- Alterar largura, altura ou rotação atualiza a área usada nas próximas verificações.
- Use Ignorar colisão quando pares específicos não devem se bloquear.

## Comportamentos relacionados

- [Corpo com gravidade](./corpo-com-gravidade) — Aplica queda, peso, atrito, impulso e resposta física ao objeto.
- [Ignorar colisão](./ignorar-colisao) — Escolhe objetos que não devem colidir com este objeto.

<a class="behavior-back-link" href="./">← Ver todos os comportamentos</a>
