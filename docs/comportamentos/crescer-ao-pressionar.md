---
title: "Crescer ao pressionar"
description: "Muda a escala do objeto quando ele recebe um toque."
---

<div class="behavior-page-kicker" style="--behavior-page-color: #F472B6">
  <span class="behavior-page-meta">
    <span class="behavior-kind">COMPORTAMENTO</span>
    <span class="behavior-category-name">Visual e animação</span>
  </span>
</div>

<h1 class="behavior-page-title" style="--behavior-page-color: #F472B6">
  <span class="behavior-title-icon"><BehaviorIcon type="press-scale" color="#F472B6" :size="26" /></span>
  <span>Crescer ao pressionar</span>
</h1>

<p class="behavior-purpose">Muda a escala do objeto quando ele recebe um toque.</p>

## Para que serve

Adiciona uma resposta visual pronta para botões e objetos interativos, sem precisar montar o efeito manualmente no script.

## Campos

| Campo | O que configurar |
| --- | --- |
| **Multiplicador de escala** | Valor aplicado ao tamanho: abaixo de 1 diminui e acima de 1 aumenta. |
| **Um toque** | Faz um pulso e volta sozinho; outro toque reproduz o efeito novamente. |
| **Alternar ao tocar** | Um toque aplica a escala e o próximo volta ao tamanho normal. |
| **Enquanto pressionado** | Aplica a escala ao encostar e volta ao soltar. |

## Exemplo

<div class="behavior-example" style="--behavior-page-color: #F472B6">
  <ol>
    <li>Adicione o comportamento ao botão “Jogar”.</li>
    <li>Use multiplicador 0,92 e escolha “Enquanto pressionado”.</li>
    <li>Pressione e solte o botão no visualizador.</li>
  </ol>
  <p class="behavior-result"><strong>Resultado:</strong> O botão encolhe levemente enquanto está pressionado e volta ao tamanho normal quando o dedo é solto.</p>
</div>

## Regras

- O multiplicador 1 mantém o tamanho original e não produz mudança visível.
- Valores muito distantes de 1 podem fazer o objeto parecer saltar de tamanho.
- A área interativa continua associada ao próprio objeto.

## Comportamentos relacionados

- [Sprite](./sprite) — Adiciona imagens nomeadas para representar o objeto.
- [Animação com sprites](./animacao-com-sprites) — Reproduz uma sequência de sprites como uma animação.
- [Animação de propriedades](./animacao-de-propriedades) — Anima valores do objeto com keyframes organizados por nome.
- [Forma](./forma) — Desenha um retângulo configurável sem precisar de sprite.

<a class="behavior-back-link" href="./">← Ver todos os comportamentos</a>
