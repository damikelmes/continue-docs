---
title: "Emitir partículas"
description: "Cria efeitos como fumaça, fogo, chuva e faíscas."
---

<div class="behavior-page-kicker" style="--behavior-page-color: #F97316">
  <span class="behavior-page-meta">
    <span class="behavior-kind">COMPORTAMENTO</span>
    <span class="behavior-category-name">Visual e animação</span>
  </span>
</div>

<h1 class="behavior-page-title" style="--behavior-page-color: #F97316">
  <span class="behavior-title-icon"><BehaviorIcon type="particle-emitter" color="#F97316" :size="26" /></span>
  <span>Emitir partículas</span>
</h1>

<p class="behavior-purpose">Cria efeitos como fumaça, fogo, chuva e faíscas.</p>

## Para que serve

Guarda emissores nomeados no objeto. Cada emissor cria pequenas partículas com aparência, movimento e tempo de vida próprios. Você pode partir de um efeito pronto e ajustar os campos.

## Campos

<div class="doc-field-list" style="--doc-field-color: #F97316">
  <div class="doc-field-item">
    <strong>Emissores</strong>
    <p>Crie e organize efeitos por nome. Os nós escolhem qual emissor controlar.</p>
  </div>
  <div class="doc-field-item">
    <strong>Emissão</strong>
    <p>Contínuo cria uma quantidade por segundo; Um disparo cria um grupo de uma vez.</p>
  </div>
  <div class="doc-field-item">
    <strong>Limite máximo</strong>
    <p>Quantidade máxima de partículas vivas ao mesmo tempo.</p>
  </div>
  <div class="doc-field-item">
    <strong>Onde nascem</strong>
    <p>Posição X e Y relativas ao centro do objeto; nascimento no centro ou espalhado em um raio.</p>
  </div>
  <div class="doc-field-item">
    <strong>Forma ou imagem</strong>
    <p>Círculo, quadrado, triângulo, linha ou uma imagem já salva no projeto.</p>
  </div>
  <div class="doc-field-item">
    <strong>Tamanho</strong>
    <p>Valores ao nascer, no meio e no final da vida. A linha usa comprimento e largura próprios.</p>
  </div>
  <div class="doc-field-item">
    <strong>Variação do tamanho</strong>
    <p>Diferença entre os tamanhos das partículas, em porcentagem.</p>
  </div>
  <div class="doc-field-item">
    <strong>Cor e opacidade</strong>
    <p>Configure início, meio e final. Opacidade 0 desaparece; 100 mantém totalmente visível.</p>
  </div>
  <div class="doc-field-item">
    <strong>Ordem Z</strong>
    <p>Posição das partículas na ordem de desenho.</p>
  </div>
  <div class="doc-field-item">
    <strong>Direção e velocidade</strong>
    <p>Direção fixa, cone ou qualquer direção; velocidade X/Y e variação mínima/máxima.</p>
  </div>
  <div class="doc-field-item">
    <strong>Rotação</strong>
    <p>Intervalo de ângulo inicial e de velocidade de rotação. Valores negativos invertem o sentido.</p>
  </div>
  <div class="doc-field-item">
    <strong>Quando o objeto se move</strong>
    <p>Ficam na cena deixa as partículas no mundo; Acompanham o objeto leva o efeito junto.</p>
  </div>
  <div class="doc-field-item">
    <strong>Tempo de vida</strong>
    <p>Duração mínima e máxima de cada partícula em segundos.</p>
  </div>
</div>

## Exemplo

<div class="behavior-example" style="--behavior-page-color: #F97316">
  <ol>
    <li>Crie o emissor Fumaça no objeto Chaminé.</li>
    <li>Use emissão contínua, velocidade Y negativa e tamanho crescente.</li>
    <li>Defina a opacidade final como 0 e um limite máximo moderado.</li>
    <li>Teste e ajuste quantidade e tempo de vida para obter a densidade desejada.</li>
  </ol>
  <p class="behavior-result"><strong>Resultado:</strong> A fumaça sobe, aumenta e desaparece gradualmente.</p>
</div>

## Regras

- Partículas não são instâncias comuns de objetos; os nós de objeto não selecionam cada partícula separadamente.
- Ações próprias permitem iniciar, parar, pausar, disparar e limpar o emissor.
- Parar deixa as partículas existentes terminarem; pausar também congela as atuais; limpar remove as partículas existentes.
- Mais partículas vivas e maiores áreas transparentes podem custar mais desempenho. Use o limite máximo e teste no aparelho de destino.
- Opacidade das partículas e transparência do objeto usam sentidos opostos: opacidade 100 é visível; transparência 100 é invisível.

## Comportamentos relacionados

- [Sprite](./sprite) — Adiciona imagens nomeadas para representar o objeto.
- [Animação com sprites](./animacao-com-sprites) — Reproduz uma sequência de sprites como uma animação.
- [Animação de propriedades](./animacao-de-propriedades) — Anima valores do objeto com keyframes organizados por nome.
- [Crescer ao pressionar](./crescer-ao-pressionar) — Muda a escala do objeto quando ele recebe um toque.

<a class="behavior-back-link" href="./">← Ver todos os comportamentos</a>
