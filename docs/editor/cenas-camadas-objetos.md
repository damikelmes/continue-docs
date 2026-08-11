# <DocHeadingIcon icon="apps-outline" color="#A78BFA" :size="22" /> Cenas, camadas e objetos

## <DocHeadingIcon icon="images" color="#A78BFA" /> Cenas

Cada cena representa uma parte separada do jogo, como uma fase, um menu ou uma tela de vitória. O **Script da cena** controla a lógica que funciona dentro dela.

## <DocHeadingIcon icon="layers-outline" color="#A78BFA" /> Camadas

As camadas ajudam a organizar os elementos da cena. Você pode separar, por exemplo:

- Fundo.
- Cenário.
- Personagens.
- Efeitos.
- Interface.

A ordem Z dos objetos ainda pode ser usada para controlar qual objeto aparece na frente de outro dentro da cena.

## <DocHeadingIcon icon="cube-outline" color="#60A5FA" /> Objetos

Um objeto guarda as configurações reutilizáveis. Você pode definir largura, altura, sprite, animações, colisão e comportamentos.

## <DocHeadingIcon icon="locate-outline" color="#FACC15" /> Instâncias

Uma instância é o objeto colocado na cena. Instâncias do mesmo objeto podem ter posições, tamanhos e outras configurações diferentes.

## <DocHeadingIcon icon="resize-outline" color="#34D399" /> Largura e altura

Use largura e altura para esticar ou reduzir o objeto de forma independente. A seleção do editor e o visualizador acompanham o tamanho atual da instância.

::: info Sprite e forma
Um objeto pode usar uma imagem ou uma forma sem sprite. Os comportamentos de colisão e luz usam o tamanho e a forma configurados para o objeto.
:::
