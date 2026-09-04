---
title: Todas as expressões
description: Lista completa das expressões numéricas disponíveis na Continue.
---

# <DocHeadingIcon icon="calculator-outline" color="#FB923C" /> Todas as expressões

Expressões usam informações do jogo no lugar de um número fixo. Elas podem ler uma posição, consultar uma variável ou calcular um resultado. Consultar um valor não altera o jogo por si só: o nó usa esse resultado no campo escolhido.

Se este assunto é novo, comece por [Variáveis e expressões](/editor/variaveis-e-expressoes). Aqui você encontra a escrita, as regras e vários exemplos de cada expressão.

<div class="nodes-intro expressions-intro">
  <strong>67</strong>
  <span>expressões documentadas individualmente, cada uma com pelo menos três exemplos de uso.</span>
</div>

<CatalogNav :groups='[{"key":"globais","label":"Variáveis globais","icon":"globe-outline","color":"#F4C54B","count":1},{"key":"objetos","label":"Objetos e instâncias","icon":"cube-outline","color":"#A78BFA","count":23},{"key":"camera","label":"Câmera","icon":"videocam-outline","color":"#60A5FA","count":10},{"key":"tempo","label":"Tempo e desempenho","icon":"timer-outline","color":"#2DD4BF","count":3},{"key":"toque","label":"Toque","icon":"hand-left-outline","color":"#FB923C","count":13},{"key":"matematica","label":"Matemática","icon":"calculator-outline","color":"#FB923C","count":15},{"key":"aleatorio","label":"Valores aleatórios","icon":"shuffle-outline","color":"#A78BFA","count":2}]' />

## <DocHeadingIcon icon="search-outline" color="#60A5FA" /> Como inserir uma expressão

1. Abra um campo numérico de uma ação, condição ou repetição.
2. Toque no botão de procurar expressão.
3. Escolha a categoria e a informação que deseja usar.
4. Para propriedades de objetos, escolha o objeto e, se precisar, uma instância específica.
5. Combine o valor com números, operações ou outras expressões.

O seletor escreve o identificador correto. Por exemplo, `camera.x + 120` representa uma posição 120 pixels à direita do centro da câmera.

## <DocHeadingIcon icon="calculator-outline" color="#A78BFA" /> Operações básicas

- `+` soma valores.
- `-` subtrai valores.
- `*` multiplica valores.
- `/` divide valores.
- `( )` define a ordem do cálculo.

Multiplicação e divisão são calculadas antes de soma e subtração. Use parênteses quando quiser deixar a ordem clara: `(10 + 4) * 2` retorna `28`.

::: info Comparações ficam no nó de condição
Não escreva `<`, `>` ou `==` dentro de uma expressão numérica. No nó **Comparar valores**, coloque uma expressão em cada campo e escolha separadamente **Igual a**, **Menor que** ou **Maior que**.
:::

::: warning Divisão por zero
Uma expressão que divide por zero é inválida. Corrija o divisor ou use um valor mínimo seguro, como `math.max(jogador.variable.divisor, 0.0001)`.
:::

## <DocHeadingIcon icon="play-forward-outline" color="#FACC15" /> Ordem e valores atualizados

A expressão lê o valor disponível no instante em que seu nó é executado. Se um fluxo move o personagem e outro centraliza a câmera, deixe o movimento acima para a câmera usar a posição nova.

Veja [Ordem de execução dos scripts](/editor/scripts-visuais#ordem-de-execucao) para entender os fluxos completos.

## <DocHeadingIcon icon="globe-outline" color="#F4C54B" /> Variáveis globais {#globais}

<p class="node-category-copy">Consulte números compartilhados entre as cenas durante a partida.</p>

<div class="node-grid expression-grid">
  <a class="node-card expression-card" style="--node-card-color: #F4C54B" href="./variavel-numerica-global">
    <span class="node-card-icon"><NodeIcon type="plain" icon="globe-outline" color="#F4C54B" /></span>
    <span class="node-card-copy">
      <strong>Variável numérica global</strong>
      <small><code>global.variable.pontos</code></small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" /></span>
  </a>
</div>

## <DocHeadingIcon icon="cube-outline" color="#A78BFA" /> Objetos e instâncias {#objetos}

<p class="node-category-copy">Leia posição, tamanho, aparência, velocidade, quantidade e variáveis numéricas.</p>

<div class="node-grid expression-grid">
  <a class="node-card expression-card" style="--node-card-color: #4ADE80" href="./quadro-atual-da-animacao">
    <span class="node-card-icon"><NodeIcon type="plain" icon="film" color="#4ADE80" /></span>
    <span class="node-card-copy">
      <strong>Quadro atual da animação</strong>
      <small><code>jogador.animation_frame</code></small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" /></span>
  </a>
  <a class="node-card expression-card" style="--node-card-color: #2DD4BF" href="./progresso-da-animacao-de-propriedades">
    <span class="node-card-icon"><NodeIcon type="plain" icon="play-forward-outline" color="#2DD4BF" /></span>
    <span class="node-card-copy">
      <strong>Progresso da animação de propriedades</strong>
      <small><code>porta.property_animation_progress</code></small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" /></span>
  </a>
  <a class="node-card expression-card" style="--node-card-color: #A78BFA" href="./objeto-posicao-x">
    <span class="node-card-icon"><NodeIcon type="expression-object-x" icon="remove-outline" color="#A78BFA" /></span>
    <span class="node-card-copy">
      <strong>Posição X do objeto</strong>
      <small><code>jogador.x</code></small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" /></span>
  </a>
  <a class="node-card expression-card" style="--node-card-color: #A78BFA" href="./objeto-posicao-y">
    <span class="node-card-icon"><NodeIcon type="expression-object-y" icon="remove-outline" color="#A78BFA" /></span>
    <span class="node-card-copy">
      <strong>Posição Y do objeto</strong>
      <small><code>jogador.y</code></small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" /></span>
  </a>
  <a class="node-card expression-card" style="--node-card-color: #A78BFA" href="./objeto-centro-x">
    <span class="node-card-icon"><NodeIcon type="expression-object-x" icon="contract-outline" color="#A78BFA" /></span>
    <span class="node-card-copy">
      <strong>Centro X do objeto</strong>
      <small><code>jogador.center_x</code></small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" /></span>
  </a>
  <a class="node-card expression-card" style="--node-card-color: #A78BFA" href="./objeto-centro-y">
    <span class="node-card-icon"><NodeIcon type="expression-object-y" icon="contract-outline" color="#A78BFA" /></span>
    <span class="node-card-copy">
      <strong>Centro Y do objeto</strong>
      <small><code>jogador.center_y</code></small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" /></span>
  </a>
  <a class="node-card expression-card" style="--node-card-color: #A78BFA" href="./objeto-borda-esquerda">
    <span class="node-card-icon"><NodeIcon type="plain" icon="arrow-back-outline" color="#A78BFA" /></span>
    <span class="node-card-copy">
      <strong>Borda esquerda do objeto</strong>
      <small><code>jogador.left</code></small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" /></span>
  </a>
  <a class="node-card expression-card" style="--node-card-color: #A78BFA" href="./objeto-borda-direita">
    <span class="node-card-icon"><NodeIcon type="plain" icon="arrow-forward-outline" color="#A78BFA" /></span>
    <span class="node-card-copy">
      <strong>Borda direita do objeto</strong>
      <small><code>jogador.right</code></small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" /></span>
  </a>
  <a class="node-card expression-card" style="--node-card-color: #A78BFA" href="./objeto-borda-superior">
    <span class="node-card-icon"><NodeIcon type="plain" icon="arrow-up-outline" color="#A78BFA" /></span>
    <span class="node-card-copy">
      <strong>Borda superior do objeto</strong>
      <small><code>jogador.top</code></small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" /></span>
  </a>
  <a class="node-card expression-card" style="--node-card-color: #A78BFA" href="./objeto-borda-inferior">
    <span class="node-card-icon"><NodeIcon type="plain" icon="arrow-down-outline" color="#A78BFA" /></span>
    <span class="node-card-copy">
      <strong>Borda inferior do objeto</strong>
      <small><code>jogador.bottom</code></small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" /></span>
  </a>
  <a class="node-card expression-card" style="--node-card-color: #A78BFA" href="./objeto-rotacao">
    <span class="node-card-icon"><NodeIcon type="plain" icon="refresh-outline" color="#A78BFA" /></span>
    <span class="node-card-copy">
      <strong>Rotação do objeto</strong>
      <small><code>jogador.rotation</code></small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" /></span>
  </a>
  <a class="node-card expression-card" style="--node-card-color: #A78BFA" href="./objeto-rotacao-do-sprite">
    <span class="node-card-icon"><NodeIcon type="plain" icon="sync-outline" color="#A78BFA" /></span>
    <span class="node-card-copy">
      <strong>Rotação do sprite</strong>
      <small><code>jogador.sprite_rotation</code></small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" /></span>
  </a>
  <a class="node-card expression-card" style="--node-card-color: #A78BFA" href="./objeto-escala">
    <span class="node-card-icon"><NodeIcon type="plain" icon="expand-outline" color="#A78BFA" /></span>
    <span class="node-card-copy">
      <strong>Escala do objeto</strong>
      <small><code>jogador.scale</code></small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" /></span>
  </a>
  <a class="node-card expression-card" style="--node-card-color: #A78BFA" href="./objeto-transparencia">
    <span class="node-card-icon"><NodeIcon type="plain" icon="contrast-outline" color="#A78BFA" /></span>
    <span class="node-card-copy">
      <strong>Transparência do objeto</strong>
      <small><code>jogador.transparency</code></small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" /></span>
  </a>
  <a class="node-card expression-card" style="--node-card-color: #A78BFA" href="./objeto-largura">
    <span class="node-card-icon"><NodeIcon type="plain" icon="resize-outline" color="#A78BFA" /></span>
    <span class="node-card-copy">
      <strong>Largura do objeto</strong>
      <small><code>jogador.width</code></small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" /></span>
  </a>
  <a class="node-card expression-card" style="--node-card-color: #A78BFA" href="./objeto-altura">
    <span class="node-card-icon"><NodeIcon type="plain" icon="swap-vertical-outline" color="#A78BFA" /></span>
    <span class="node-card-copy">
      <strong>Altura do objeto</strong>
      <small><code>jogador.height</code></small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" /></span>
  </a>
  <a class="node-card expression-card" style="--node-card-color: #A78BFA" href="./quantidade-de-instancias">
    <span class="node-card-icon"><NodeIcon type="plain" icon="layers-outline" color="#A78BFA" /></span>
    <span class="node-card-copy">
      <strong>Quantidade de instâncias</strong>
      <small><code>inimigo.instances</code></small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" /></span>
  </a>
  <a class="node-card expression-card" style="--node-card-color: #A78BFA" href="./objeto-ordem-z">
    <span class="node-card-icon"><NodeIcon type="plain" icon="reorder-three-outline" color="#A78BFA" /></span>
    <span class="node-card-copy">
      <strong>Ordem Z do objeto</strong>
      <small><code>jogador.z</code></small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" /></span>
  </a>
  <a class="node-card expression-card" style="--node-card-color: #A78BFA" href="./objeto-velocidade-x">
    <span class="node-card-icon"><NodeIcon type="expression-object-x" icon="speedometer-outline" color="#A78BFA" /></span>
    <span class="node-card-copy">
      <strong>Velocidade X do objeto</strong>
      <small><code>jogador.velocity_x</code></small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" /></span>
  </a>
  <a class="node-card expression-card" style="--node-card-color: #A78BFA" href="./objeto-velocidade-y">
    <span class="node-card-icon"><NodeIcon type="expression-object-y" icon="speedometer-outline" color="#A78BFA" /></span>
    <span class="node-card-copy">
      <strong>Velocidade Y do objeto</strong>
      <small><code>jogador.velocity_y</code></small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" /></span>
  </a>
  <a class="node-card expression-card" style="--node-card-color: #A78BFA" href="./objeto-velocidade-total">
    <span class="node-card-icon"><NodeIcon type="plain" icon="speedometer-outline" color="#A78BFA" /></span>
    <span class="node-card-copy">
      <strong>Velocidade total do objeto</strong>
      <small><code>jogador.speed</code></small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" /></span>
  </a>
  <a class="node-card expression-card" style="--node-card-color: #A78BFA" href="./objeto-angulo-do-movimento">
    <span class="node-card-icon"><NodeIcon type="plain" icon="navigate-outline" color="#A78BFA" /></span>
    <span class="node-card-copy">
      <strong>Ângulo do movimento</strong>
      <small><code>jogador.movement_angle</code></small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" /></span>
  </a>
  <a class="node-card expression-card" style="--node-card-color: #A78BFA" href="./variavel-numerica-do-objeto">
    <span class="node-card-icon"><NodeIcon type="plain" icon="calculator-outline" color="#A78BFA" /></span>
    <span class="node-card-copy">
      <strong>Variável numérica do objeto</strong>
      <small><code>jogador.variable.vida</code></small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" /></span>
  </a>
</div>

## <DocHeadingIcon icon="videocam-outline" color="#60A5FA" /> Câmera {#camera}

<p class="node-category-copy">Use o centro, as bordas, o tamanho visível e o zoom atual da câmera.</p>

<div class="node-grid expression-grid">
  <a class="node-card expression-card" style="--node-card-color: #60A5FA" href="./rotacao-da-camera">
    <span class="node-card-icon"><NodeIcon type="plain" icon="camera-reverse-outline" color="#60A5FA" /></span>
    <span class="node-card-copy">
      <strong>Rotação atual da câmera</strong>
      <small><code>camera.rotation</code></small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" /></span>
  </a>
  <a class="node-card expression-card" style="--node-card-color: #60A5FA" href="./camera-centro-x">
    <span class="node-card-icon"><NodeIcon type="plain" icon="swap-horizontal-outline" color="#60A5FA" /></span>
    <span class="node-card-copy">
      <strong>Centro X da câmera</strong>
      <small><code>camera.x</code></small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" /></span>
  </a>
  <a class="node-card expression-card" style="--node-card-color: #60A5FA" href="./camera-centro-y">
    <span class="node-card-icon"><NodeIcon type="plain" icon="swap-vertical-outline" color="#60A5FA" /></span>
    <span class="node-card-copy">
      <strong>Centro Y da câmera</strong>
      <small><code>camera.y</code></small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" /></span>
  </a>
  <a class="node-card expression-card" style="--node-card-color: #60A5FA" href="./camera-borda-esquerda">
    <span class="node-card-icon"><NodeIcon type="plain" icon="arrow-back-outline" color="#60A5FA" /></span>
    <span class="node-card-copy">
      <strong>Borda esquerda da câmera</strong>
      <small><code>camera.left</code></small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" /></span>
  </a>
  <a class="node-card expression-card" style="--node-card-color: #60A5FA" href="./camera-borda-direita">
    <span class="node-card-icon"><NodeIcon type="plain" icon="arrow-forward-outline" color="#60A5FA" /></span>
    <span class="node-card-copy">
      <strong>Borda direita da câmera</strong>
      <small><code>camera.right</code></small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" /></span>
  </a>
  <a class="node-card expression-card" style="--node-card-color: #60A5FA" href="./camera-borda-superior">
    <span class="node-card-icon"><NodeIcon type="plain" icon="arrow-up-outline" color="#60A5FA" /></span>
    <span class="node-card-copy">
      <strong>Borda superior da câmera</strong>
      <small><code>camera.top</code></small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" /></span>
  </a>
  <a class="node-card expression-card" style="--node-card-color: #60A5FA" href="./camera-borda-inferior">
    <span class="node-card-icon"><NodeIcon type="plain" icon="arrow-down-outline" color="#60A5FA" /></span>
    <span class="node-card-copy">
      <strong>Borda inferior da câmera</strong>
      <small><code>camera.bottom</code></small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" /></span>
  </a>
  <a class="node-card expression-card" style="--node-card-color: #60A5FA" href="./camera-largura-visivel">
    <span class="node-card-icon"><NodeIcon type="plain" icon="videocam-outline" color="#60A5FA" /></span>
    <span class="node-card-copy">
      <strong>Largura visível da câmera</strong>
      <small><code>camera.width</code></small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" /></span>
  </a>
  <a class="node-card expression-card" style="--node-card-color: #60A5FA" href="./camera-altura-visivel">
    <span class="node-card-icon"><NodeIcon type="plain" icon="videocam-outline" color="#60A5FA" /></span>
    <span class="node-card-copy">
      <strong>Altura visível da câmera</strong>
      <small><code>camera.height</code></small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" /></span>
  </a>
  <a class="node-card expression-card" style="--node-card-color: #60A5FA" href="./camera-zoom">
    <span class="node-card-icon"><NodeIcon type="plain" icon="expand-outline" color="#60A5FA" /></span>
    <span class="node-card-copy">
      <strong>Zoom da câmera</strong>
      <small><code>camera.zoom</code></small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" /></span>
  </a>
</div>

## <DocHeadingIcon icon="timer-outline" color="#2DD4BF" /> Tempo e desempenho {#tempo}

<p class="node-category-copy">Consulte o tempo da atualização, o tempo da cena e os quadros por segundo.</p>

<div class="node-grid expression-grid">
  <a class="node-card expression-card" style="--node-card-color: #2DD4BF" href="./tempo-delta">
    <span class="node-card-icon"><NodeIcon type="plain" icon="time-outline" color="#2DD4BF" /></span>
    <span class="node-card-copy">
      <strong>Delta time</strong>
      <small><code>time.delta</code></small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" /></span>
  </a>
  <a class="node-card expression-card" style="--node-card-color: #2DD4BF" href="./tempo-decorrido">
    <span class="node-card-icon"><NodeIcon type="plain" icon="stopwatch-outline" color="#2DD4BF" /></span>
    <span class="node-card-copy">
      <strong>Tempo decorrido da cena</strong>
      <small><code>time.elapsed</code></small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" /></span>
  </a>
  <a class="node-card expression-card" style="--node-card-color: #2DD4BF" href="./quadros-por-segundo">
    <span class="node-card-icon"><NodeIcon type="plain" icon="speedometer-outline" color="#2DD4BF" /></span>
    <span class="node-card-copy">
      <strong>Quadros por segundo</strong>
      <small><code>game.fps</code></small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" /></span>
  </a>
</div>

## <DocHeadingIcon icon="hand-left-outline" color="#FB923C" /> Toque {#toque}

<p class="node-category-copy">Leia o toque no mundo, o toque direto na tela e o estado do dedo.</p>

<div class="node-grid expression-grid">
  <a class="node-card expression-card" style="--node-card-color: #FB923C" href="./inicio-do-toque-x">
    <span class="node-card-icon"><NodeIcon type="plain" icon="hand-left-outline" color="#FB923C" /></span>
    <span class="node-card-copy">
      <strong>Início do toque X</strong>
      <small><code>touch.start_x</code></small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" /></span>
  </a>
  <a class="node-card expression-card" style="--node-card-color: #FB923C" href="./inicio-do-toque-y">
    <span class="node-card-icon"><NodeIcon type="plain" icon="hand-left-outline" color="#FB923C" /></span>
    <span class="node-card-copy">
      <strong>Início do toque Y</strong>
      <small><code>touch.start_y</code></small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" /></span>
  </a>
  <a class="node-card expression-card" style="--node-card-color: #FB923C" href="./deslocamento-do-toque-x">
    <span class="node-card-icon"><NodeIcon type="plain" icon="hand-left-outline" color="#FB923C" /></span>
    <span class="node-card-copy">
      <strong>Deslocamento do toque X</strong>
      <small><code>touch.delta_x</code></small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" /></span>
  </a>
  <a class="node-card expression-card" style="--node-card-color: #FB923C" href="./deslocamento-do-toque-y">
    <span class="node-card-icon"><NodeIcon type="plain" icon="hand-left-outline" color="#FB923C" /></span>
    <span class="node-card-copy">
      <strong>Deslocamento do toque Y</strong>
      <small><code>touch.delta_y</code></small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" /></span>
  </a>
  <a class="node-card expression-card" style="--node-card-color: #FB923C" href="./distancia-do-deslize">
    <span class="node-card-icon"><NodeIcon type="plain" icon="hand-left-outline" color="#FB923C" /></span>
    <span class="node-card-copy">
      <strong>Distância do deslize</strong>
      <small><code>touch.distance</code></small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" /></span>
  </a>
  <a class="node-card expression-card" style="--node-card-color: #FB923C" href="./angulo-do-deslize">
    <span class="node-card-icon"><NodeIcon type="plain" icon="hand-left-outline" color="#FB923C" /></span>
    <span class="node-card-copy">
      <strong>Ângulo do deslize</strong>
      <small><code>touch.angle</code></small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" /></span>
  </a>
  <a class="node-card expression-card" style="--node-card-color: #FB923C" href="./tempo-do-toque">
    <span class="node-card-icon"><NodeIcon type="plain" icon="hand-left-outline" color="#FB923C" /></span>
    <span class="node-card-copy">
      <strong>Tempo do toque</strong>
      <small><code>touch.duration</code></small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" /></span>
  </a>
  <a class="node-card expression-card" style="--node-card-color: #FB923C" href="./quantidade-de-toques">
    <span class="node-card-icon"><NodeIcon type="plain" icon="hand-left-outline" color="#FB923C" /></span>
    <span class="node-card-copy">
      <strong>Quantidade de toques</strong>
      <small><code>touch.count</code></small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" /></span>
  </a>
  <a class="node-card expression-card" style="--node-card-color: #FB923C" href="./toque-x-no-mundo">
    <span class="node-card-icon"><NodeIcon type="expression-touch-x" icon="hand-left-outline" color="#FB923C" /></span>
    <span class="node-card-copy">
      <strong>Toque X no mundo</strong>
      <small><code>touch.x</code></small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" /></span>
  </a>
  <a class="node-card expression-card" style="--node-card-color: #FB923C" href="./toque-y-no-mundo">
    <span class="node-card-icon"><NodeIcon type="expression-touch-y" icon="hand-left-outline" color="#FB923C" /></span>
    <span class="node-card-copy">
      <strong>Toque Y no mundo</strong>
      <small><code>touch.y</code></small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" /></span>
  </a>
  <a class="node-card expression-card" style="--node-card-color: #FB923C" href="./toque-x-na-tela">
    <span class="node-card-icon"><NodeIcon type="expression-touch-x" icon="phone-portrait-outline" color="#FB923C" /></span>
    <span class="node-card-copy">
      <strong>Toque X na tela</strong>
      <small><code>touch.screen_x</code></small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" /></span>
  </a>
  <a class="node-card expression-card" style="--node-card-color: #FB923C" href="./toque-y-na-tela">
    <span class="node-card-icon"><NodeIcon type="expression-touch-y" icon="phone-portrait-outline" color="#FB923C" /></span>
    <span class="node-card-copy">
      <strong>Toque Y na tela</strong>
      <small><code>touch.screen_y</code></small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" /></span>
  </a>
  <a class="node-card expression-card" style="--node-card-color: #FB923C" href="./toque-esta-pressionado">
    <span class="node-card-icon"><NodeIcon type="plain" icon="finger-print-outline" color="#FB923C" /></span>
    <span class="node-card-copy">
      <strong>Toque está pressionado</strong>
      <small><code>touch.is_down</code></small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" /></span>
  </a>
</div>

## <DocHeadingIcon icon="calculator-outline" color="#FB923C" /> Matemática {#matematica}

<p class="node-category-copy">Arredonde, limite, compare e transforme valores numéricos.</p>

<div class="node-grid expression-grid">
  <a class="node-card expression-card" style="--node-card-color: #FB923C" href="./matematica-truncar">
    <span class="node-card-icon"><NodeIcon type="plain" icon="cut-outline" color="#FB923C" /></span>
    <span class="node-card-copy">
      <strong>Truncar</strong>
      <small><code>math.trunc(valor)</code></small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" /></span>
  </a>
  <a class="node-card expression-card" style="--node-card-color: #FB923C" href="./matematica-arredondar">
    <span class="node-card-icon"><NodeIcon type="plain" icon="ellipse-outline" color="#FB923C" /></span>
    <span class="node-card-copy">
      <strong>Arredondar</strong>
      <small><code>math.round(valor)</code></small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" /></span>
  </a>
  <a class="node-card expression-card" style="--node-card-color: #FB923C" href="./matematica-arredondar-para-baixo">
    <span class="node-card-icon"><NodeIcon type="plain" icon="arrow-down-outline" color="#FB923C" /></span>
    <span class="node-card-copy">
      <strong>Arredondar para baixo</strong>
      <small><code>math.floor(valor)</code></small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" /></span>
  </a>
  <a class="node-card expression-card" style="--node-card-color: #FB923C" href="./matematica-arredondar-para-cima">
    <span class="node-card-icon"><NodeIcon type="plain" icon="arrow-up-outline" color="#FB923C" /></span>
    <span class="node-card-copy">
      <strong>Arredondar para cima</strong>
      <small><code>math.ceil(valor)</code></small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" /></span>
  </a>
  <a class="node-card expression-card" style="--node-card-color: #FB923C" href="./matematica-valor-absoluto">
    <span class="node-card-icon"><NodeIcon type="plain" icon="remove-outline" color="#FB923C" /></span>
    <span class="node-card-copy">
      <strong>Valor absoluto</strong>
      <small><code>math.abs(valor)</code></small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" /></span>
  </a>
  <a class="node-card expression-card" style="--node-card-color: #FB923C" href="./matematica-menor-valor">
    <span class="node-card-icon"><NodeIcon type="plain" icon="chevron-down-outline" color="#FB923C" /></span>
    <span class="node-card-copy">
      <strong>Menor valor</strong>
      <small><code>math.min(a, b)</code></small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" /></span>
  </a>
  <a class="node-card expression-card" style="--node-card-color: #FB923C" href="./matematica-maior-valor">
    <span class="node-card-icon"><NodeIcon type="plain" icon="chevron-up-outline" color="#FB923C" /></span>
    <span class="node-card-copy">
      <strong>Maior valor</strong>
      <small><code>math.max(a, b)</code></small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" /></span>
  </a>
  <a class="node-card expression-card" style="--node-card-color: #FB923C" href="./matematica-limitar">
    <span class="node-card-icon"><NodeIcon type="plain" icon="contract-outline" color="#FB923C" /></span>
    <span class="node-card-copy">
      <strong>Limitar valor</strong>
      <small><code>math.clamp(valor, mínimo, máximo)</code></small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" /></span>
  </a>
  <a class="node-card expression-card" style="--node-card-color: #FB923C" href="./matematica-raiz-quadrada">
    <span class="node-card-icon"><NodeIcon type="plain" icon="calculator-outline" color="#FB923C" /></span>
    <span class="node-card-copy">
      <strong>Raiz quadrada</strong>
      <small><code>math.sqrt(valor)</code></small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" /></span>
  </a>
  <a class="node-card expression-card" style="--node-card-color: #FB923C" href="./matematica-potencia">
    <span class="node-card-icon"><NodeIcon type="plain" icon="trending-up-outline" color="#FB923C" /></span>
    <span class="node-card-copy">
      <strong>Potência</strong>
      <small><code>math.pow(base, expoente)</code></small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" /></span>
  </a>
  <a class="node-card expression-card" style="--node-card-color: #FB923C" href="./matematica-resto-da-divisao">
    <span class="node-card-icon"><NodeIcon type="plain" icon="repeat-outline" color="#FB923C" /></span>
    <span class="node-card-copy">
      <strong>Resto da divisão</strong>
      <small><code>math.mod(a, b)</code></small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" /></span>
  </a>
  <a class="node-card expression-card" style="--node-card-color: #FB923C" href="./matematica-seno">
    <span class="node-card-icon"><NodeIcon type="plain" icon="analytics-outline" color="#FB923C" /></span>
    <span class="node-card-copy">
      <strong>Seno</strong>
      <small><code>math.sin(graus)</code></small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" /></span>
  </a>
  <a class="node-card expression-card" style="--node-card-color: #FB923C" href="./matematica-cosseno">
    <span class="node-card-icon"><NodeIcon type="plain" icon="analytics-outline" color="#FB923C" /></span>
    <span class="node-card-copy">
      <strong>Cosseno</strong>
      <small><code>math.cos(graus)</code></small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" /></span>
  </a>
  <a class="node-card expression-card" style="--node-card-color: #FB923C" href="./matematica-tangente">
    <span class="node-card-icon"><NodeIcon type="plain" icon="analytics-outline" color="#FB923C" /></span>
    <span class="node-card-copy">
      <strong>Tangente</strong>
      <small><code>math.tan(graus)</code></small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" /></span>
  </a>
  <a class="node-card expression-card" style="--node-card-color: #FB923C" href="./matematica-interpolar">
    <span class="node-card-icon"><NodeIcon type="plain" icon="swap-horizontal-outline" color="#FB923C" /></span>
    <span class="node-card-copy">
      <strong>Interpolar valores</strong>
      <small><code>math.lerp(início, fim, progresso)</code></small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" /></span>
  </a>
</div>

## <DocHeadingIcon icon="shuffle-outline" color="#A78BFA" /> Valores aleatórios {#aleatorio}

<p class="node-category-copy">Sorteie números inteiros ou valores com casas decimais.</p>

<div class="node-grid expression-grid">
  <a class="node-card expression-card" style="--node-card-color: #A78BFA" href="./aleatorio-inteiro">
    <span class="node-card-icon"><NodeIcon type="plain" icon="dice-outline" color="#A78BFA" /></span>
    <span class="node-card-copy">
      <strong>Número inteiro aleatório</strong>
      <small><code>random.int(mínimo, máximo)</code></small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" /></span>
  </a>
  <a class="node-card expression-card" style="--node-card-color: #A78BFA" href="./aleatorio-decimal">
    <span class="node-card-icon"><NodeIcon type="plain" icon="dice-outline" color="#A78BFA" /></span>
    <span class="node-card-copy">
      <strong>Número decimal aleatório</strong>
      <small><code>random.float(mínimo, máximo)</code></small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" /></span>
  </a>
</div>
