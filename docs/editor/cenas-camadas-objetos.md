# Cenas, camadas e objetos

## Cenas

Cada cena representa uma parte separada do jogo, como uma fase, um menu ou uma tela de vitória. O **Script da cena** controla a lógica que funciona dentro dela.

## Camadas

As camadas ajudam a organizar os elementos da cena. Você pode separar, por exemplo:

- Fundo.
- Cenário.
- Personagens.
- Efeitos.
- Interface.

A ordem Z dos objetos ainda pode ser usada para controlar qual objeto aparece na frente de outro dentro da cena.

## Objetos

Um objeto guarda as configurações reutilizáveis. Você pode definir largura, altura, sprite, animações, colisão e comportamentos.

## Instâncias

Uma instância é o objeto colocado na cena. Instâncias do mesmo objeto podem ter posições, tamanhos e outras configurações diferentes.

## Largura e altura

Use largura e altura para esticar ou reduzir o objeto de forma independente. A seleção do editor e o visualizador acompanham o tamanho atual da instância.

::: info Sprite e forma
Um objeto pode usar uma imagem ou uma forma sem sprite. Os comportamentos de colisão e luz usam o tamanho e a forma configurados para o objeto.
:::
