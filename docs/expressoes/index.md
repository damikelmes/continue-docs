# <DocHeadingIcon icon="calculator-outline" color="#FB923C" :size="22" /> Expressões numéricas

Expressões permitem usar informações do jogo no lugar de um número fixo. Com elas, uma ação pode usar a posição de um objeto, o centro da câmera, o tempo da cena, o toque na tela, a velocidade ou o resultado de um cálculo.

<div class="guide-grid">
  <GuideCard href="#objetos-e-instancias" icon="cube-outline" color="#a78bfa" title="Objetos" description="Posição, tamanho, rotação, velocidade e variáveis." />
  <GuideCard href="#camera" icon="videocam-outline" color="#60a5fa" title="Câmera" description="Centro, bordas visíveis, tamanho e zoom." />
  <GuideCard href="#tempo-e-desempenho" icon="timer-outline" color="#2dd4bf" title="Tempo e toque" description="Delta time, tempo da cena, FPS e posição do dedo." />
  <GuideCard href="#funcoes-matematicas" icon="calculator-outline" color="#fb923c" title="Matemática" description="Arredondamento, limites, ângulos e valores aleatórios." />
</div>

## <DocHeadingIcon icon="calculator-outline" color="#2DD4BF" /> Como inserir uma expressão

1. Abra um campo numérico de uma ação, condição ou repetição.
2. Toque no botão de procurar expressão.
3. Escolha o tipo de valor que deseja usar.
4. Quando for uma propriedade de objeto, escolha o objeto e, se necessário, uma instância específica.
5. Combine o valor com outros números ou expressões.

O seletor escreve o nome correto automaticamente. Essa é a maneira mais segura de escolher objetos com nomes grandes ou parecidos.

Por exemplo:

```text
camera.x + 120
```

O resultado é uma posição 120 pixels à direita do centro da câmera.

## <DocHeadingIcon icon="calculator-outline" color="#A78BFA" /> Operações básicas

| Símbolo | Operação | Exemplo |
| --- | --- | --- |
| `+` | Somar | `jogador.x + 32` |
| `-` | Subtrair | `camera.bottom - 48` |
| `*` | Multiplicar | `inimigo.speed * 2` |
| `/` | Dividir | `camera.width / 2` |
| `( )` | Definir a ordem do cálculo | `(camera.width + 100) / 2` |

Multiplicação e divisão são calculadas antes de soma e subtração. Use parênteses quando quiser deixar a intenção clara.

```text
10 + 4 * 2
```

O resultado é `18`.

```text
(10 + 4) * 2
```

O resultado é `28`.

::: warning Divisão por zero
Uma expressão que divide por zero é inválida. Corrija o divisor ou, quando ele sempre deveria ser positivo, use algo como `math.max(divisor, 0.0001)` para manter um valor mínimo seguro.
:::

## <DocHeadingIcon icon="cube-outline" color="#A78BFA" /> Objetos e instâncias

Quando você escolhe uma propriedade de objeto, a expressão usa o nome do objeto seguido da propriedade.

```text
jogador.x
```

Sem indicar uma instância, a expressão lê a primeira instância daquele objeto na cena.

Para ler uma cópia específica, escolha **Instância específica** no seletor:

```text
jogador.instance_2.center_x
```

Esse exemplo lê o centro X da segunda instância de Jogador. A numeração começa em `1`.

Se o objeto ou a instância indicada não existir naquele momento, o valor retornado será `0`.

### <DocHeadingIcon icon="locate-outline" color="#60A5FA" :size="17" /> Posição e limites

| Propriedade | O que retorna |
| --- | --- |
| `.x` | Posição X armazenada pelo objeto. |
| `.y` | Posição Y armazenada pelo objeto. |
| `.center_x` | Centro horizontal real do objeto. |
| `.center_y` | Centro vertical real do objeto. |
| `.left` | Borda esquerda atual. |
| `.right` | Borda direita atual. |
| `.top` | Borda superior atual. |
| `.bottom` | Borda inferior atual. |
| `.width` | Largura atual. |
| `.height` | Altura atual. |

::: tip Para centralizar com precisão
Use `.center_x` e `.center_y` quando o objetivo for alinhar o centro do objeto. Use `.x` e `.y` somente quando precisar da posição armazenada pela própria instância.
:::

Exemplo de alinhamento:

```text
jogador.center_x
```

Use essa expressão como posição X de outro objeto para colocá-lo no mesmo centro horizontal do jogador.

### <DocHeadingIcon icon="color-palette-outline" color="#F472B6" :size="17" /> Aparência e ordem

| Propriedade | O que retorna |
| --- | --- |
| `.rotation` | Rotação atual do objeto e da colisão, em graus. |
| `.sprite_rotation` | Rotação visual adicional do sprite, em graus. |
| `.scale` | Escala atual do objeto. |
| `.transparency` | Transparência entre `0` e `100`. |
| `.z` | Ordem Z usada no desenho. |

### <DocHeadingIcon icon="layers-outline" color="#FACC15" :size="17" /> Quantidade de instâncias

```text
inimigo.instances
```

Retorna quantas instâncias de Inimigo existem na cena. Essa expressão conta o grupo inteiro e, por isso, não usa `.instance_2`.

### <DocHeadingIcon icon="speedometer-outline" color="#2DD4BF" :size="17" /> Velocidade e direção

| Propriedade | O que retorna |
| --- | --- |
| `.velocity_x` | Velocidade horizontal em pixels por segundo. |
| `.velocity_y` | Velocidade vertical em pixels por segundo. |
| `.speed` | Velocidade total, sem separar os eixos. |
| `.movement_angle` | Direção do movimento entre `0` e `360` graus. |

Na direção do movimento:

- `0°` aponta para a direita.
- `90°` aponta para baixo.
- `180°` aponta para a esquerda.
- `270°` aponta para cima.
- Um objeto parado retorna `0°`.

::: info Velocidade medida
A velocidade representa a mudança real de posição concluída na atualização anterior. Assim, ela também reconhece movimentos causados por gravidade, órbita, seguir objeto, toque, transições e outras ações.
:::

### <DocHeadingIcon icon="calculator-outline" color="#60A5FA" :size="17" /> Variáveis numéricas do objeto

Somente variáveis do tipo número aparecem no seletor de expressões.

```text
jogador.variable.vida
```

Para uma instância específica:

```text
jogador.instance_2.variable.vida
```

Se a variável não existir na instância escolhida, o resultado será `0`.

## <DocHeadingIcon icon="videocam-outline" color="#60A5FA" /> Câmera

| Expressão | Valor |
| --- | --- |
| `camera.x` | Posição X do centro da câmera. |
| `camera.y` | Posição Y do centro da câmera. |
| `camera.left` | Borda esquerda visível. |
| `camera.right` | Borda direita visível. |
| `camera.top` | Borda superior visível. |
| `camera.bottom` | Borda inferior visível. |
| `camera.width` | Largura lógica visível considerando o zoom. |
| `camera.height` | Altura lógica visível considerando o zoom. |
| `camera.zoom` | Zoom atual. |

Para colocar o centro de um objeto no centro da câmera, use:

```text
Posição X: camera.x
Posição Y: camera.y
```

Para manter um objeto 24 pixels dentro do canto inferior direito:

```text
Posição X: camera.right - 24
Posição Y: camera.bottom - 24
```

::: info Centro e borda
`camera.x` e `camera.y` sempre representam o centro lógico. Para trabalhar com as extremidades visíveis, use `left`, `right`, `top` e `bottom`.
:::

## <DocHeadingIcon icon="timer-outline" color="#2DD4BF" /> Tempo e desempenho

| Expressão | O que retorna |
| --- | --- |
| `time.delta` | Tempo, em segundos, usado pela atualização atual. |
| `time.elapsed` | Segundos decorridos desde o início da cena. |
| `game.fps` | Quantidade atual de quadros por segundo. |

Use `time.delta` para transformar um valor por segundo em uma mudança por atualização:

```text
120 * time.delta
```

Use `time.elapsed` para criar um valor que muda com o tempo:

```text
math.sin(time.elapsed * 180) * 20
```

Esse exemplo oscila entre `-20` e `20`.

## <DocHeadingIcon icon="hand-left-outline" color="#FB923C" /> Toque

| Expressão | O que retorna |
| --- | --- |
| `touch.x` | Posição X do toque dentro do mundo. |
| `touch.y` | Posição Y do toque dentro do mundo. |
| `touch.screen_x` | Posição X do toque na tela do celular. |
| `touch.screen_y` | Posição Y do toque na tela do celular. |
| `touch.is_down` | `1` enquanto a tela estiver sendo tocada e `0` depois que o dedo for solto. |

`touch.x` e `touch.y` consideram a posição e o zoom da câmera. Use esses valores para mover ou criar objetos no ponto tocado dentro do jogo.

`touch.screen_x` e `touch.screen_y` ignoram a câmera e representam o ponto direto da tela. Eles são mais úteis para interface.

Depois que o dedo é solto, as posições continuam guardando o último ponto tocado. Consulte `touch.is_down` quando precisar saber se o toque ainda está ativo.

## <DocHeadingIcon icon="calculator-outline" color="#FB923C" /> Funções matemáticas

Funções recebem valores entre parênteses. Quando houver mais de um valor, separe-os com vírgulas.

| Função | Resultado | Exemplo |
| --- | --- | --- |
| `math.trunc(valor)` | Remove as casas decimais sem arredondar. | `math.trunc(4.9)` retorna `4`. |
| `math.round(valor)` | Arredonda para o inteiro mais próximo. | `math.round(4.5)` retorna `5`. |
| `math.floor(valor)` | Arredonda sempre para baixo. | `math.floor(4.9)` retorna `4`. |
| `math.ceil(valor)` | Arredonda sempre para cima. | `math.ceil(4.1)` retorna `5`. |
| `math.abs(valor)` | Remove o sinal negativo. | `math.abs(-8)` retorna `8`. |
| `math.min(a, b)` | Retorna o menor valor. | `math.min(7, 3)` retorna `3`. |
| `math.max(a, b)` | Retorna o maior valor. | `math.max(7, 3)` retorna `7`. |
| `math.clamp(valor, mínimo, máximo)` | Mantém o valor dentro dos limites. | `math.clamp(14, 0, 10)` retorna `10`. |
| `math.sqrt(valor)` | Calcula a raiz quadrada. | `math.sqrt(81)` retorna `9`. |
| `math.pow(base, expoente)` | Calcula uma potência. | `math.pow(2, 3)` retorna `8`. |
| `math.mod(a, b)` | Retorna o resto da divisão. | `math.mod(10, 3)` retorna `1`. |
| `math.sin(graus)` | Calcula o seno do ângulo. | `math.sin(90)` retorna `1`. |
| `math.cos(graus)` | Calcula o cosseno do ângulo. | `math.cos(180)` retorna `-1`. |
| `math.tan(graus)` | Calcula a tangente do ângulo. | `math.tan(45)` retorna `1`. |
| `math.lerp(início, fim, progresso)` | Mistura dois valores. | `math.lerp(0, 100, 0.25)` retorna `25`. |

No `math.lerp`, progresso `0` retorna o valor inicial e progresso `1` retorna o valor final.

As funções podem receber propriedades e outras funções:

```text
math.clamp(jogador.speed, 0, 300)
```

```text
math.trunc(math.lerp(jogador.x, camera.x, 0.5))
```

::: warning Casas decimais dentro de funções
Dentro de uma função, a vírgula separa os valores. Use ponto para escrever casas decimais: `math.lerp(0, 10, 0.5)`. Fora de funções, números como `1,5` continuam sendo aceitos.
:::

## <DocHeadingIcon icon="shuffle-outline" color="#A78BFA" /> Valores aleatórios

| Função | Resultado |
| --- | --- |
| `random.int(mínimo, máximo)` | Sorteia um número inteiro, incluindo o mínimo e o máximo. |
| `random.float(mínimo, máximo)` | Sorteia um número com casas decimais entre os limites. |

Exemplos:

```text
random.int(1, 6)
```

Simula o resultado inteiro de um dado.

```text
random.float(-20, 20)
```

Sorteia uma posição decimal entre `-20` e `20`.

Os limites podem ser informados em qualquer ordem. `random.int(10, 1)` funciona como `random.int(1, 10)`.

::: warning Aleatório no modo Sempre
Uma função aleatória é sorteada novamente toda vez que a expressão é calculada. Em uma ação configurada como **Sempre**, o resultado pode mudar a cada atualização. Use **Uma única vez** quando quiser sortear e manter apenas um resultado.
:::

## <DocHeadingIcon icon="git-branch" color="#FACC15" /> Ordem e valores atualizados

A expressão usa o valor disponível no instante em que o nó é executado. Se um fluxo move o personagem e outro centraliza a câmera, deixe o movimento acima para que a câmera leia a posição nova.

Veja a explicação com fluxos completos em [Ordem de execução dos scripts](/editor/scripts-visuais#ordem-de-execucao).

::: tip Regra rápida
Se uma expressão parece estar usando um valor atrasado, procure o nó que atualiza esse valor. Ele deve aparecer antes do nó que contém a expressão.
:::
