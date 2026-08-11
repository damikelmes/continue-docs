---
title: Comportamentos
description: Funções prontas que você pode adicionar aos objetos da Continue.
pageClass: guide-page
---

# Comportamentos

Comportamentos adicionam funções prontas aos objetos. Escolha um grupo abaixo para encontrar rapidamente o que precisa configurar.

<div class="guide-grid">
  <GuideCard href="#visual-e-animacao" icon="color-palette-outline" color="#a78bfa" title="Visual e animação" description="Sprites, formas, propriedades animadas e luz." />
  <GuideCard href="#fisica-e-colisao" icon="planet-outline" color="#60a5fa" title="Física e colisão" description="Gravidade, contato e regras de colisão." />
  <GuideCard href="#interacao" icon="finger-print-outline" color="#34d399" title="Interação" description="Toque, arrastar e movimento pelo dedo." />
  <GuideCard href="#dados-do-objeto" icon="code-slash" color="#fb923c" title="Dados do objeto" description="Valores próprios usados pelos scripts." />
</div>

## Visual e animação

### Sprite

Adiciona imagens nomeadas ao objeto. Esses sprites podem ser usados diretamente, em animações ou pela ação **Trocar sprite**.

### Animação com sprites

Cria uma sequência usando os sprites do objeto. Escolha os quadros, a ordem, a velocidade e a repetição.

### Animação de propriedades

Cria várias animações por nome usando quadros-chave. Pode animar posição X e Y, rotação, escala, largura, altura, transparência, ordem Z e cor.

Cada animação pode ser linear, acelerada, desacelerada, suave, antecipada, com ultrapassagem, quique ou efeito elástico. Também pode tocar uma vez, repetir ou repetir voltando. Nos scripts, use as ações **Reproduzir**, **Recomeçar** e **Pausar animação de propriedades**.

### Crescer ao pressionar

Muda temporariamente a escala quando o objeto é pressionado. Valores menores que `1` diminuem e valores maiores que `1` aumentam.

### Forma

Desenha uma forma sem precisar de sprite. Configure tamanho, cantos, preenchimento e borda.

### Emitir luz

Transforma o objeto em uma luz 2D. Permite configurar cor, intensidade, raio, posição, sombras, suavidade, pulsação e a camada de escuridão compartilhada.

### Barrar luz

Faz a colisão do objeto projetar sombra.

- **Bloqueio da luz:** `100%` bloqueia totalmente; valores menores deixam parte da luz atravessar.
- **Comprimento da sombra:** `0` alcança automaticamente o limite da luz.
- **Receber luz normalmente:** mantém o objeto iluminado enquanto projeta sombra.
- **Luz que entra no objeto:** controla quanto da iluminação aparece sobre ele.

## Física e colisão

### Corpo com gravidade

Adiciona movimento físico ao objeto. Configure gravidade, velocidade máxima de queda, resistência do ar, elasticidade, massa, atrito e rotação física. A colisão precisa ajuda objetos pequenos ou rápidos.

### Colisão

Cria uma área física que acompanha o tamanho atual do objeto. Objetos com gravidade param ao tocar em outros objetos com colisão.

### Ignorar colisão

Escolhe objetos que não devem colidir com este. Também pode impedir que instâncias do mesmo objeto colidam entre si.

## Interação

### Arrastar e soltar

Permite pressionar e mover o objeto diretamente com o dedo. O ponto pressionado é mantido, evitando que o objeto se teleporte para o centro do toque.

### Mover até o toque

Move o objeto suavemente até o ponto tocado. Configure velocidade, aceleração e desaceleração. A opção de seguir o dedo durante o deslize começa desativada.

## Dados do objeto

### Variáveis do objeto

Guarda valores próprios do objeto para serem usados pelas condições, ações e expressões do jogo.

::: tip Use apenas o necessário
Adicionar somente os comportamentos usados pelo objeto deixa a configuração mais simples e evita cálculos desnecessários.
:::
