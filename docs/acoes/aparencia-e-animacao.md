# Aparência e animação

## Trocar sprite

Troca a imagem do objeto pelo sprite escolhido. Selecione o objeto, as instâncias e o nome do sprite de destino.

## Trocar animação

Inicia uma animação com sprites pelo nome. O objeto precisa ter essa animação cadastrada.

## Animações de propriedades

O comportamento **Animação de propriedades** permite criar várias animações nomeadas usando quadros-chave.

### Reproduzir animação de propriedades

Ativa a animação escolhida. Se ela estiver pausada, continua da posição atual.

### Recomeçar animação de propriedades

Ativa a animação desde o primeiro quadro, mesmo que ela já estivesse em andamento.

### Pausar animação de propriedades

Pausa a animação atual sem apagar seu progresso. Use **Reproduzir** para continuar.

## Alterar transparência

Muda o quanto o objeto fica transparente.

- `0%`: objeto totalmente visível.
- `100%`: objeto totalmente transparente.

Pixels totalmente transparentes do sprite não recebem luz nem aparecem no jogo.

## Alterar tonalidade

Aplica uma cor sobre o visual do objeto. Escolha a cor pelo seletor ou informe os valores de vermelho, verde e azul.

## Inverter objeto

Espelha o objeto instantaneamente na horizontal ou vertical.

## Flipar objeto

Faz o espelhamento com animação. Escolha:

- Direção horizontal ou vertical.
- Lado ou sentido de destino.
- Tempo da animação.

## Alterar ordem Z

Muda a ordem em que o objeto é desenhado. Valores maiores aparecem na frente de valores menores.

::: tip Organização visual
Use camadas para separar grandes grupos, como cenário e interface, e a ordem Z para organizar objetos dentro desses grupos.
:::
