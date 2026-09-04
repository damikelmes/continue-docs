# <DocHeadingIcon icon="color-palette-outline" color="#C084FC" /> Aparência e animação

## <DocHeadingIcon icon="images" color="#C084FC" /> Trocar sprite

Troca a imagem do objeto pelo sprite escolhido. Selecione o objeto, as instâncias e o nome do sprite de destino.

## <DocHeadingIcon icon="film" color="#4ADE80" /> Trocar animação

Inicia uma animação com sprites pelo nome. O objeto precisa ter essa animação cadastrada.

## <DocHeadingIcon icon="analytics" color="#2DD4BF" /> Animações de propriedades

O comportamento **Animação de propriedades** permite criar várias animações nomeadas usando quadros-chave.

### <DocHeadingIcon icon="play-circle-outline" color="#2DD4BF" /> Reproduzir animação de propriedades

Ativa a animação escolhida. Se ela estiver pausada, continua da posição atual.

### <DocHeadingIcon icon="refresh-circle-outline" color="#38BDF8" /> Recomeçar animação de propriedades

Ativa a animação desde o primeiro quadro, mesmo que ela já estivesse em andamento.

### <DocHeadingIcon icon="pause-circle-outline" color="#FBBF24" /> Pausar animação de propriedades

Pausa a animação atual sem apagar seu progresso. Use **Reproduzir** para continuar.

## <DocHeadingIcon icon="contrast-outline" color="#2DD4BF" /> Alterar transparência

Muda o quanto o objeto fica transparente.

- `0%`: objeto totalmente visível.
- `100%`: objeto totalmente transparente.

Pixels totalmente transparentes do sprite não recebem luz nem aparecem no jogo.

## <DocHeadingIcon icon="color-palette-outline" color="#F472B6" /> Alterar tonalidade

Aplica uma cor sobre o visual do objeto. Escolha a cor pelo seletor ou informe os valores de vermelho, verde e azul.

## <DocHeadingIcon type="action-flip-object" icon="swap-horizontal-outline" color="#34D399" /> Inverter objeto

Espelha o objeto instantaneamente na horizontal ou vertical.

## <DocHeadingIcon type="action-flip-object-animated" icon="swap-horizontal-outline" color="#2DD4BF" /> Flipar objeto

Faz o espelhamento com animação. Escolha:

- Direção horizontal ou vertical.
- Lado ou sentido de destino.
- Tempo da animação.

## <DocHeadingIcon icon="layers-outline" color="#818CF8" /> Alterar ordem Z

Muda a ordem em que o objeto é desenhado. Valores maiores aparecem na frente de valores menores.

::: tip Organização visual
Use camadas para separar grandes grupos, como cenário e interface, e a ordem Z para organizar objetos dentro desses grupos.
:::
