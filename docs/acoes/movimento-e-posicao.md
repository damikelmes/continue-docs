# <DocHeadingIcon icon="navigate-circle-outline" color="#60A5FA" /> Movimento e posição

Estas ações mudam a posição, o tamanho, a rotação ou o movimento de um objeto.

## <DocHeadingIcon icon="analytics-outline" color="#A78BFA" /> Transicionar propriedade

Anima uma propriedade partindo do valor atual até o valor final escolhido.

**Propriedades disponíveis:** posição X, posição Y, rotação do objeto, rotação do sprite, escala, largura, altura, transparência, ordem Z e cor.

**Campos principais:**

- Objeto e instância.
- Propriedade.
- Valor final.
- Tipo de animação.
- Velocidade.
- Aceleração.

### Linear

Mantém velocidade constante.

### Acelerar

Começa devagar e termina rápido.

### Desacelerar

Começa rápido e termina devagar.

### Suave

Começa devagar, acelera e desacelera no final.

### Antecipar

Recua um pouco antes de ir ao destino.

### Ultrapassar

Passa do destino e volta.

### Quicar

Chega ao destino com pequenas quicadas.

### Elástico

Oscila como uma mola antes de parar.

## <DocHeadingIcon type="action-shake-object" icon="cube-outline" color="#FB923C" /> Chacoalhar objeto

Sacode o objeto visualmente sem alterar sua posição real. Isso permite centralizar a câmera no objeto sem fazer o centro da câmera tremer junto.

- **Intensidade:** distância máxima do tremor em pixels.
- **Tempo do tremor:** duração de cada execução.
- **Modo de execução:** controla se o efeito acontece uma vez, sempre, por quantidade ou por tempo.

## <DocHeadingIcon icon="planet-outline" color="#38BDF8" /> Orbitar objeto

Faz o objeto escolhido girar continuamente ao redor de outro.

- **Objeto central:** objeto ao redor do qual será feita a órbita.
- **Instância central:** cópia usada como centro.
- **Raio:** distância mantida do centro.
- **Velocidade angular:** velocidade da órbita em graus por segundo.
- **Direção:** horário ou anti-horário.

## <DocHeadingIcon icon="navigate-circle-outline" color="#34D399" /> Seguir objeto

Move um objeto em direção a outro mantendo a distância escolhida.

- **Objeto seguido** e sua instância.
- **Direção:** qualquer direção, somente X ou somente Y.
- **Manter distância:** espaço que deve permanecer entre os objetos.
- **Velocidade:** limite do movimento.
- **Aceleração:** rapidez com que começa a se mover.
- **Desaceleração:** suavidade ao chegar perto do destino.

## <DocHeadingIcon icon="move-outline" color="#60A5FA" /> Mudar posição X e Y

- **Mudar posição X:** altera apenas a posição horizontal.
- **Mudar posição Y:** altera apenas a posição vertical.

Essas ações aceitam valores fixos ou expressões, além das operações definir, somar, subtrair, multiplicar e dividir.

## <DocHeadingIcon icon="resize-outline" color="#A78BFA" /> Mudar largura e altura

- **Mudar largura:** altera somente a largura em pixels.
- **Mudar altura:** altera somente a altura em pixels.

Use as duas quando quiser redimensionar cada eixo de forma independente.

## <DocHeadingIcon icon="speedometer-outline" color="#60A5FA" /> Mover em X e Y

Movem o objeto continuamente em um único eixo.

- **Velocidade:** direção e velocidade máxima em pixels por segundo.
- **Aceleração:** velocidade de ganho de movimento.
- **Desaceleração:** velocidade de redução do movimento.

Valores positivos e negativos mudam o sentido do deslocamento.

## <DocHeadingIcon icon="compass-outline" color="#2DD4BF" /> Mover em graus

Move o objeto na direção do ângulo informado, usando velocidade, aceleração e desaceleração.

Exemplos comuns:

- `0°`: direita.
- `90°`: baixo.
- `180°`: esquerda.
- `270°`: cima.

## <DocHeadingIcon icon="arrow-up-circle-outline" color="#4ADE80" /> Pular objeto

Aplica uma força de pulo em um objeto que usa gravidade e colisão. O pulo funciona quando o objeto está no chão.

## <DocHeadingIcon icon="refresh-outline" color="#F59E0B" /> Rotacionar objeto

Altera a rotação do objeto e da colisão usando graus.

## <DocHeadingIcon icon="sync-outline" color="#FB7185" /> Rotacionar sprite

Gira somente a parte visual. A rotação principal do objeto e da colisão não é substituída.

## <DocHeadingIcon icon="expand-outline" color="#FB923C" /> Alterar escala

Aumenta ou diminui o objeto proporcionalmente nos dois eixos. Para alterar os eixos separadamente, use **Mudar largura** e **Mudar altura**.
