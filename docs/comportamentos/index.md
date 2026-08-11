# Comportamentos

Comportamentos adicionam funções prontas aos objetos. Cada comportamento tem sua própria página de configuração e pode ser ativado ou desativado pelos scripts.

## Sprite

Adiciona imagens nomeadas ao objeto. Esses sprites podem ser usados diretamente, em animações ou pela ação **Trocar sprite**.

## Animação com sprites

Cria uma sequência usando os sprites do objeto. Escolha os quadros, a ordem, a velocidade e a repetição.

## Animação de propriedades

Permite criar várias animações por nome usando quadros-chave. Pode animar posição X e Y, rotação, escala, largura, altura, transparência, ordem Z e cor.

Cada animação pode usar transições como linear, acelerar, desacelerar, suave, antecipar, ultrapassar, quicar e elástico. Também pode tocar uma vez, repetir ou repetir voltando.

Depois, use as ações **Reproduzir**, **Recomeçar** e **Pausar animação de propriedades**.

## Crescer ao pressionar

Muda temporariamente a escala quando o objeto é pressionado. Valores menores que `1` diminuem e valores maiores que `1` aumentam.

## Corpo com gravidade

Adiciona movimento físico ao objeto.

Configurações principais:

- Escala da gravidade.
- Velocidade máxima de queda.
- Resistência do ar.
- Elasticidade.
- Massa e atrito.
- Rotação física e sua resistência.
- Colisão precisa para objetos pequenos ou rápidos.

## Colisão

Cria uma área física que acompanha o tamanho atual do objeto. Objetos com gravidade param ao tocar em outros objetos com colisão.

## Ignorar colisão

Escolhe objetos que não devem colidir com este. Também pode impedir que instâncias do mesmo objeto colidam entre si.

## Forma

Desenha uma forma sem precisar de sprite. Configure tamanho, cantos, preenchimento e borda.

## Emitir luz

Transforma o objeto em uma luz 2D. Permite configurar cor, intensidade, raio, posição, sombras, suavidade, pulsação e a camada de escuridão compartilhada.

## Barrar luz

Faz a colisão do objeto projetar sombra.

- **Bloqueio da luz:** `100%` bloqueia totalmente; valores menores deixam parte da luz atravessar.
- **Comprimento da sombra:** `0` alcança automaticamente o limite da luz.
- **Receber luz normalmente:** mantém o objeto iluminado enquanto projeta sombra.
- **Luz que entra no objeto:** controla quanto da iluminação aparece sobre ele.

## Arrastar e soltar

Permite pressionar e mover o objeto diretamente com o dedo. O ponto pressionado é mantido, evitando que o objeto se teleporte para o centro do toque.

## Mover até o toque

Move o objeto suavemente até o ponto tocado.

- Velocidade.
- Aceleração.
- Desaceleração.
- Opção para continuar seguindo enquanto o dedo desliza, desativada por padrão.

## Variáveis do objeto

Guarda valores próprios do objeto para serem usados pelas condições, ações e expressões do jogo.

::: tip Use apenas o necessário
Adicionar somente os comportamentos usados pelo objeto deixa a configuração mais simples e evita cálculos desnecessários.
:::
