const example = (title, code, description) => ({ title, code, description });

export const expressionCategories = [
  { key: 'globais', label: 'Variáveis globais', icon: 'globe-outline', color: '#F4C54B', description: 'Consulte números compartilhados entre as cenas durante a partida.' },
  { key: 'objetos', label: 'Objetos e instâncias', icon: 'cube-outline', color: '#A78BFA', description: 'Leia posição, tamanho, aparência, velocidade, quantidade e variáveis numéricas.' },
  { key: 'camera', label: 'Câmera', icon: 'videocam-outline', color: '#60A5FA', description: 'Use o centro, as bordas, o tamanho visível e o zoom atual da câmera.' },
  { key: 'tempo', label: 'Tempo e desempenho', icon: 'timer-outline', color: '#2DD4BF', description: 'Consulte o tempo da atualização, o tempo da cena e os quadros por segundo.' },
  { key: 'toque', label: 'Toque', icon: 'hand-left-outline', color: '#FB923C', description: 'Leia o toque no mundo, o toque direto na tela e o estado do dedo.' },
  { key: 'matematica', label: 'Matemática', icon: 'calculator-outline', color: '#FB923C', description: 'Arredonde, limite, compare e transforme valores numéricos.' },
  { key: 'aleatorio', label: 'Valores aleatórios', icon: 'shuffle-outline', color: '#A78BFA', description: 'Sorteie números inteiros ou valores com casas decimais.' },
];

const objectExpression = ({ property, slug, title, icon, type = 'plain', summary, uses, rules = [] }) => ({
  key: `object-${property.replaceAll('_', '-')}`,
  slug,
  category: 'objetos',
  title,
  icon,
  type,
  color: '#A78BFA',
  token: `jogador.${property}`,
  summary,
  returns: summary,
  examples: [
    example(`Ler ${title.toLowerCase()}`, `jogador.${property}`, `Lê ${title.toLowerCase()} da primeira instância de Jogador que existe na cena.`),
    ...uses,
  ],
  rules: [
    'Troque `jogador` pelo identificador do objeto escolhido no seletor de expressões.',
    `Use \`jogador.instance_2.${property}\` para ler a segunda instância. A numeração começa em 1.`,
    'Se o objeto ou a instância não existir naquele momento, o valor retornado será `0`.',
    ...rules,
  ],
});

const objectExpressions = [
  objectExpression({ property: 'x', slug: 'objeto-posicao-x', title: 'Posição X do objeto', icon: 'remove-outline', type: 'expression-object-x', summary: 'Retorna a posição X armazenada pela instância.', uses: [
    example('Criar algo ao lado do objeto', 'bola.x + 48', 'Use como X de criação para colocar a nova instância 48 pixels à direita de Bola.'),
    example('Ler uma instância específica', 'inimigo.instance_2.x', 'Lê a posição X armazenada pela segunda instância de Inimigo.'),
  ], rules: ['Para alinhar pelo centro visual do objeto, prefira `.center_x`.'] }),
  objectExpression({ property: 'y', slug: 'objeto-posicao-y', title: 'Posição Y do objeto', icon: 'remove-outline', type: 'expression-object-y', summary: 'Retorna a posição Y armazenada pela instância.', uses: [
    example('Criar algo abaixo do objeto', 'jogador.y + 32', 'Use como Y de criação para colocar a nova instância 32 pixels abaixo de Jogador.'),
    example('Ler uma instância específica', 'inimigo.instance_3.y', 'Lê a posição Y armazenada pela terceira instância de Inimigo.'),
  ], rules: ['Para alinhar pelo centro visual do objeto, prefira `.center_y`.'] }),
  objectExpression({ property: 'center_x', slug: 'objeto-centro-x', title: 'Centro X do objeto', icon: 'contract-outline', type: 'expression-object-x', summary: 'Retorna o centro horizontal real da instância, considerando seu tamanho.', uses: [
    example('Centralizar a câmera no objeto', 'jogador.center_x', 'Use no campo X de Mudar posição X da câmera para levar o centro horizontal da câmera até Jogador.'),
    example('Centralizar na câmera', 'camera.x - jogador.center_x', 'Mostra a diferença horizontal entre o centro da câmera e o centro do jogador.'),
  ], rules: ['É a escolha mais segura quando você quer centralizar objetos de larguras diferentes.'] }),
  objectExpression({ property: 'center_y', slug: 'objeto-centro-y', title: 'Centro Y do objeto', icon: 'contract-outline', type: 'expression-object-y', summary: 'Retorna o centro vertical real da instância, considerando sua altura.', uses: [
    example('Centralizar a câmera no objeto', 'jogador.center_y', 'Use no campo Y de Mudar posição Y da câmera para levar o centro vertical da câmera até Jogador.'),
    example('Medir distância até a câmera', 'camera.y - jogador.center_y', 'Mostra a diferença vertical entre o centro da câmera e o centro do jogador.'),
  ], rules: ['É a escolha mais segura quando você quer centralizar objetos de alturas diferentes.'] }),
  objectExpression({ property: 'left', slug: 'objeto-borda-esquerda', title: 'Borda esquerda do objeto', icon: 'arrow-back-outline', summary: 'Retorna a coordenada da extremidade esquerda atual da instância.', uses: [
    example('Criar antes da borda', 'plataforma.left - 16', 'Coloca algo 16 pixels antes da borda esquerda de Plataforma.'),
    example('Comparar com a câmera', 'inimigo.left', 'No nó Comparar valores, compare esta expressão com camera.left usando a opção Menor que.'),
  ], rules: ['A rotação não altera esse valor; a borda acompanha a posição e a largura do objeto.'] }),
  objectExpression({ property: 'right', slug: 'objeto-borda-direita', title: 'Borda direita do objeto', icon: 'arrow-forward-outline', summary: 'Retorna a coordenada da extremidade direita atual da instância.', uses: [
    example('Criar depois da borda', 'plataforma.right + 16', 'Coloca algo 16 pixels depois da borda direita de Plataforma.'),
    example('Comparar com a câmera', 'inimigo.right', 'No nó Comparar valores, compare esta expressão com camera.right usando a opção Maior que.'),
  ], rules: ['A rotação não altera esse valor; a borda acompanha a posição e a largura do objeto.'] }),
  objectExpression({ property: 'top', slug: 'objeto-borda-superior', title: 'Borda superior do objeto', icon: 'arrow-up-outline', summary: 'Retorna a coordenada da extremidade superior atual da instância.', uses: [
    example('Colocar uma barra acima', 'jogador.top - 12', 'Use como Y para manter uma barra 12 pixels acima de Jogador.'),
    example('Comparar com a câmera', 'inimigo.top', 'No nó Comparar valores, compare esta expressão com camera.top usando a opção Menor que.'),
  ], rules: ['A rotação não altera esse valor; a borda acompanha a posição e a altura do objeto.'] }),
  objectExpression({ property: 'bottom', slug: 'objeto-borda-inferior', title: 'Borda inferior do objeto', icon: 'arrow-down-outline', summary: 'Retorna a coordenada da extremidade inferior atual da instância.', uses: [
    example('Colocar um efeito abaixo', 'jogador.bottom + 8', 'Use como Y para posicionar um efeito 8 pixels abaixo de Jogador.'),
    example('Comparar com a câmera', 'inimigo.bottom', 'No nó Comparar valores, compare esta expressão com camera.bottom usando a opção Maior que.'),
  ], rules: ['A rotação não altera esse valor; a borda acompanha a posição e a altura do objeto.'] }),
  objectExpression({ property: 'rotation', slug: 'objeto-rotacao', title: 'Rotação do objeto', icon: 'refresh-outline', summary: 'Retorna a rotação atual do objeto e da colisão, em graus.', uses: [
    example('Copiar a direção visual', 'nave.rotation', 'Use como rotação de um projétil para lançá-lo com o mesmo ângulo de Nave.'),
    example('Somar um ajuste', 'ponte.rotation + 90', 'Gera um ângulo perpendicular à rotação atual de Ponte.'),
  ] }),
  objectExpression({ property: 'sprite_rotation', slug: 'objeto-rotacao-do-sprite', title: 'Rotação do sprite', icon: 'sync-outline', summary: 'Retorna a rotação visual adicional aplicada somente ao sprite, em graus.', uses: [
    example('Copiar a rotação visual', 'jogador.sprite_rotation', 'Use para deixar outro sprite com a mesma rotação visual de Jogador.'),
    example('Combinar rotações', 'jogador.rotation + jogador.sprite_rotation', 'Soma a rotação física do objeto e a rotação adicional do sprite.'),
  ] }),
  objectExpression({ property: 'scale', slug: 'objeto-escala', title: 'Escala do objeto', icon: 'expand-outline', summary: 'Retorna o multiplicador de escala atual da instância.', uses: [
    example('Copiar a escala', 'jogador.scale', 'Use como valor final para deixar outro objeto do mesmo tamanho proporcional de Jogador.'),
    example('Criar um efeito maior', 'explosao.scale * 1.5', 'Calcula uma escala 50% maior que a escala atual de Explosão.'),
  ] }),
  objectExpression({ property: 'transparency', slug: 'objeto-transparencia', title: 'Transparência do objeto', icon: 'contrast-outline', summary: 'Retorna a transparência atual da instância, de 0 a 100.', uses: [
    example('Copiar a transparência', 'fantasma.transparency', 'Use para deixar outro objeto com a mesma transparência de Fantasma.'),
    example('Aumentar sem passar do limite', 'math.clamp(fantasma.transparency + 10, 0, 100)', 'Soma 10 e mantém o resultado dentro do intervalo permitido.'),
  ], rules: ['`0` significa totalmente visível e `100` significa totalmente transparente.'] }),
  objectExpression({ property: 'width', slug: 'objeto-largura', title: 'Largura do objeto', icon: 'resize-outline', summary: 'Retorna a largura atual da instância em pixels.', uses: [
    example('Encontrar metade da largura', 'plataforma.width / 2', 'Calcula a metade da largura atual de Plataforma.'),
    example('Criar com uma margem', 'parede.width + 32', 'Gera um valor 32 pixels maior que a largura de Parede.'),
  ] }),
  objectExpression({ property: 'height', slug: 'objeto-altura', title: 'Altura do objeto', icon: 'swap-vertical-outline', summary: 'Retorna a altura atual da instância em pixels.', uses: [
    example('Encontrar metade da altura', 'porta.height / 2', 'Calcula a metade da altura atual de Porta.'),
    example('Posicionar acima pelo tamanho', 'jogador.center_y - jogador.height / 2', 'Calcula a borda superior a partir do centro e da altura de Jogador.'),
  ] }),
  {
    key: 'object-instances', slug: 'quantidade-de-instancias', category: 'objetos', title: 'Quantidade de instâncias', icon: 'layers-outline', type: 'plain', color: '#A78BFA', token: 'inimigo.instances',
    summary: 'Retorna quantas instâncias de um objeto existem na cena.', returns: 'Um número inteiro com a quantidade atual de instâncias do objeto escolhido.',
    examples: [
      example('Contar inimigos', 'inimigo.instances', 'Retorna o total de instâncias de Inimigo existentes neste momento.'),
      example('Verificar se todos foram derrotados', 'inimigo.instances', 'No nó Comparar valores, compare esta expressão com 0 usando a opção Igual a.'),
      example('Calcular quantos ainda podem nascer', 'math.max(0, 10 - inimigo.instances)', 'Retorna quantas vagas faltam para alcançar um limite de 10 inimigos.'),
    ],
    rules: ['Troque `inimigo` pelo identificador do objeto escolhido.', 'Essa expressão conta o grupo inteiro e não aceita `.instance_2`.', 'A contagem muda quando instâncias são criadas ou excluídas.'],
  },
  objectExpression({ property: 'z', slug: 'objeto-ordem-z', title: 'Ordem Z do objeto', icon: 'reorder-three-outline', summary: 'Retorna a ordem de desenho atual da instância.', uses: [
    example('Desenhar um efeito logo acima', 'jogador.z + 1', 'Use como ordem Z para deixar o efeito imediatamente à frente de Jogador.'),
    example('Copiar a ordem de outro objeto', 'cenario.z', 'Use para colocar outra instância na mesma ordem Z de Cenário.'),
  ] }),
  objectExpression({ property: 'velocity_x', slug: 'objeto-velocidade-x', title: 'Velocidade X do objeto', icon: 'speedometer-outline', type: 'expression-object-x', summary: 'Retorna a velocidade horizontal medida, em pixels por segundo.', uses: [
    example('Copiar o impulso horizontal', 'jogador.velocity_x', 'Use para dar a outro objeto a mesma velocidade horizontal de Jogador.'),
    example('Limitar a velocidade', 'math.clamp(jogador.velocity_x, -300, 300)', 'Mantém o valor horizontal entre -300 e 300 pixels por segundo.'),
  ], rules: ['Valor positivo indica movimento para a direita; negativo indica movimento para a esquerda.'] }),
  objectExpression({ property: 'velocity_y', slug: 'objeto-velocidade-y', title: 'Velocidade Y do objeto', icon: 'speedometer-outline', type: 'expression-object-y', summary: 'Retorna a velocidade vertical medida, em pixels por segundo.', uses: [
    example('Copiar o impulso vertical', 'jogador.velocity_y', 'Use para dar a outro objeto a mesma velocidade vertical de Jogador.'),
    example('Detectar queda rápida', 'jogador.velocity_y', 'No nó Comparar valores, compare esta expressão com 500 usando a opção Maior que.'),
  ], rules: ['No sistema de coordenadas da cena, valor positivo normalmente indica movimento para baixo.'] }),
  objectExpression({ property: 'speed', slug: 'objeto-velocidade-total', title: 'Velocidade total do objeto', icon: 'speedometer-outline', summary: 'Retorna a velocidade total medida, sem separar os eixos, em pixels por segundo.', uses: [
    example('Controlar uma animação', 'jogador.speed', 'Use para escolher uma animação ou intensidade de efeito conforme a velocidade real.'),
    example('Limitar um valor visual', 'math.clamp(jogador.speed / 300, 0, 1)', 'Converte velocidades de 0 a 300 em um progresso entre 0 e 1.'),
  ], rules: ['A velocidade total nunca é negativa.'] }),
  objectExpression({ property: 'movement_angle', slug: 'objeto-angulo-do-movimento', title: 'Ângulo do movimento', icon: 'navigate-outline', summary: 'Retorna a direção do movimento atual entre 0 e 360 graus.', uses: [
    example('Apontar um sprite para o movimento', 'jogador.movement_angle', 'Use como rotação para orientar o sprite na mesma direção em que Jogador se move.'),
    example('Lançar algo na direção oposta', 'jogador.movement_angle + 180', 'Calcula o ângulo contrário ao movimento atual.'),
  ], rules: ['`0°` aponta para a direita, `90°` para baixo, `180°` para a esquerda e `270°` para cima.', 'Um objeto parado retorna `0`.'] }),
  {
    key: 'object-variable', slug: 'variavel-numerica-do-objeto', category: 'objetos', title: 'Variável numérica do objeto', icon: 'calculator-outline', type: 'plain', color: '#A78BFA', token: 'jogador.variable.vida',
    summary: 'Retorna o valor atual de uma variável numérica da instância.', returns: 'O número guardado na variável escolhida da instância.',
    examples: [
      example('Ler a vida', 'jogador.variable.vida', 'Lê a variável numérica Vida da primeira instância de Jogador.'),
      example('Impedir vida negativa', 'math.clamp(jogador.variable.vida - 10, 0, 100)', 'Calcula a vida depois de 10 de dano e limita o resultado entre 0 e 100.'),
      example('Ler uma cópia específica', 'jogador.instance_2.variable.vida', 'Lê a variável Vida da segunda instância de Jogador.'),
    ],
    rules: ['Somente variáveis do tipo número aparecem no seletor de expressões.', 'Troque `jogador` e `vida` pelos identificadores escolhidos no editor.', 'Se o objeto, a instância ou a variável não existir, o valor retornado será `0`.'],
  },
];

const cameraExpression = ({ property, slug, title, icon, summary, examples, rules = [] }) => ({
  key: `camera-${property}`, slug, category: 'camera', title, icon, type: 'plain', color: '#60A5FA', token: `camera.${property}`, summary, returns: summary,
  examples: [example(`Ler ${title.toLowerCase()}`, `camera.${property}`, `Usa o valor atual de ${title.toLowerCase()} no momento em que o nó é executado.`), ...examples],
  rules: ['A expressão usa a câmera atual da cena.', 'O valor considera o zoom quando isso altera a área visível.', ...(['left', 'right', 'top', 'bottom'].includes(property) ? ['Com a câmera girada, estes valores são os extremos da área visível nos eixos do mundo. Um ponto perto de um extremo não está necessariamente dentro do retângulo girado; use as condições de câmera para testar a visibilidade do objeto.'] : []), ...rules],
});

const cameraExpressions = [
  cameraExpression({ property: 'x', slug: 'camera-centro-x', title: 'Centro X da câmera', icon: 'swap-horizontal-outline', summary: 'Retorna a posição X do centro lógico da câmera.', examples: [
    example('Centralizar um objeto', 'camera.x', 'Use como posição X para colocar o centro do objeto no centro horizontal da câmera.'),
    example('Criar à direita do centro', 'camera.x + 120', 'Cria ou move algo 120 pixels à direita do centro da câmera.'),
  ], rules: ['O tremor visual não altera esse centro lógico.'] }),
  cameraExpression({ property: 'y', slug: 'camera-centro-y', title: 'Centro Y da câmera', icon: 'swap-vertical-outline', summary: 'Retorna a posição Y do centro lógico da câmera.', examples: [
    example('Centralizar um objeto', 'camera.y', 'Use como posição Y para colocar o centro do objeto no centro vertical da câmera.'),
    example('Criar acima do centro', 'camera.y - 80', 'Cria ou move algo 80 pixels acima do centro da câmera.'),
  ], rules: ['O tremor visual não altera esse centro lógico.'] }),
  cameraExpression({ property: 'left', slug: 'camera-borda-esquerda', title: 'Borda esquerda da câmera', icon: 'arrow-back-outline', summary: 'Retorna a coordenada da extremidade esquerda visível.', examples: [
    example('Manter uma margem', 'camera.left + 24', 'Posiciona algo 24 pixels para dentro da borda esquerda.'),
    example('Detectar saída da tela', 'camera.left', 'No nó Comparar valores, compare inimigo.right com esta expressão usando a opção Menor que.'),
  ] }),
  cameraExpression({ property: 'right', slug: 'camera-borda-direita', title: 'Borda direita da câmera', icon: 'arrow-forward-outline', summary: 'Retorna a coordenada da extremidade direita visível.', examples: [
    example('Manter uma margem', 'camera.right - 24', 'Posiciona algo 24 pixels para dentro da borda direita.'),
    example('Detectar saída da tela', 'camera.right', 'No nó Comparar valores, compare inimigo.left com esta expressão usando a opção Maior que.'),
  ] }),
  cameraExpression({ property: 'top', slug: 'camera-borda-superior', title: 'Borda superior da câmera', icon: 'arrow-up-outline', summary: 'Retorna a coordenada da extremidade superior visível.', examples: [
    example('Fixar uma margem superior', 'camera.top + 20', 'Posiciona algo 20 pixels abaixo da borda superior.'),
    example('Criar acima da tela', 'camera.top - 32', 'Cria algo 32 pixels acima da área que está visível.'),
  ] }),
  cameraExpression({ property: 'bottom', slug: 'camera-borda-inferior', title: 'Borda inferior da câmera', icon: 'arrow-down-outline', summary: 'Retorna a coordenada da extremidade inferior visível.', examples: [
    example('Fixar uma margem inferior', 'camera.bottom - 20', 'Posiciona algo 20 pixels acima da borda inferior.'),
    example('Detectar uma queda para fora', 'camera.bottom', 'No nó Comparar valores, compare jogador.top com esta expressão usando a opção Maior que.'),
  ] }),
  cameraExpression({ property: 'width', slug: 'camera-largura-visivel', title: 'Largura visível da câmera', icon: 'videocam-outline', summary: 'Retorna a largura lógica visível da câmera em pixels.', examples: [
    example('Encontrar metade da tela', 'camera.width / 2', 'Calcula metade da largura visível atual.'),
    example('Espalhar dez itens', 'camera.width / 10', 'Calcula um espaçamento horizontal que divide a largura visível em dez partes.'),
  ] }),
  cameraExpression({ property: 'height', slug: 'camera-altura-visivel', title: 'Altura visível da câmera', icon: 'videocam-outline', summary: 'Retorna a altura lógica visível da câmera em pixels.', examples: [
    example('Encontrar metade da tela', 'camera.height / 2', 'Calcula metade da altura visível atual.'),
    example('Espalhar cinco itens', 'camera.height / 5', 'Calcula um espaçamento vertical que divide a altura visível em cinco partes.'),
  ] }),
  cameraExpression({ property: 'zoom', slug: 'camera-zoom', title: 'Zoom da câmera', icon: 'expand-outline', summary: 'Retorna o multiplicador de zoom atual da câmera.', examples: [
    example('Ajustar algo pelo zoom', '16 / camera.zoom', 'Compensa o zoom para calcular um tamanho lógico inversamente proporcional.'),
    example('Limitar um efeito', 'math.clamp(camera.zoom, 0.5, 2)', 'Mantém o valor usado pelo efeito entre zoom 0,5 e 2.'),
  ], rules: ['Zoom `1` é o tamanho normal; acima de 1 aproxima e abaixo de 1 afasta.', 'Use valores maiores que zero ao dividir pelo zoom.'] }),
];

const plain = (data) => ({ type: 'plain', ...data });

const timeExpressions = [
  plain({ key: 'time-delta', slug: 'tempo-delta', category: 'tempo', title: 'Delta time', icon: 'time-outline', color: '#2DD4BF', token: 'time.delta', summary: 'Retorna o tempo, em segundos, usado pela atualização atual.', returns: 'Uma pequena fração de segundo que acompanha o tempo real entre atualizações.', examples: [
    example('Mover por segundo', '120 * time.delta', 'Transforma 120 pixels por segundo na distância correta para esta atualização.'),
    example('Girar por segundo', '90 * time.delta', 'Transforma 90 graus por segundo no giro correto para esta atualização.'),
    example('Contador independente do FPS', 'relogio.variable.tempo + time.delta', 'Soma o tempo real da atualização à variável numérica Tempo do objeto Relógio.'),
  ], rules: ['Use em mudanças executadas continuamente para que a velocidade não dependa do FPS.', 'Não multiplique novamente por delta quando a ação ou comportamento já informa que trabalha em pixels por segundo.'] }),
  plain({ key: 'time-elapsed', slug: 'tempo-decorrido', category: 'tempo', title: 'Tempo decorrido da cena', icon: 'stopwatch-outline', color: '#2DD4BF', token: 'time.elapsed', summary: 'Retorna os segundos decorridos desde o início da cena.', returns: 'Um número crescente, em segundos, contado desde que a cena começou.', examples: [
    example('Aumentar dificuldade com o tempo', '1 + time.elapsed / 60', 'Cria um multiplicador que aumenta 1 ponto a cada 60 segundos.'),
    example('Fazer uma oscilação', 'math.sin(time.elapsed * 180) * 20', 'Produz um valor que oscila suavemente entre -20 e 20.'),
    example('Mostrar segundos inteiros', 'math.floor(time.elapsed)', 'Remove as casas decimais para exibir apenas os segundos completos.'),
  ], rules: ['O valor volta ao início quando a cena é reiniciada.', 'Use `time.delta` para somar uma mudança por atualização; use `time.elapsed` quando precisar do relógio total da cena.'] }),
  plain({ key: 'game-fps', slug: 'quadros-por-segundo', category: 'tempo', title: 'Quadros por segundo', icon: 'speedometer-outline', color: '#2DD4BF', token: 'game.fps', summary: 'Retorna a quantidade atual de quadros por segundo do jogo.', returns: 'Uma estimativa numérica do FPS medido durante a execução.', examples: [
    example('Mostrar o FPS inteiro', 'math.round(game.fps)', 'Arredonda a medição para exibir um número fácil de ler.'),
    example('Ativar um modo leve', 'game.fps', 'No nó Comparar valores, compare esta expressão com 30 usando a opção Menor que.'),
    example('Limitar o valor exibido', 'math.clamp(game.fps, 0, 120)', 'Mantém a informação usada pela interface entre 0 e 120.'),
  ], rules: ['O valor pode variar de uma atualização para outra.', 'FPS mede desempenho; não use esse valor para controlar velocidade. Para isso, use `time.delta`.'] }),
];

const touchExpressions = [
  plain({ key: 'touch-x', slug: 'toque-x-no-mundo', category: 'toque', title: 'Toque X no mundo', icon: 'hand-left-outline', type: 'expression-touch-x', color: '#FB923C', token: 'touch.x', summary: 'Retorna a posição X do último toque dentro do mundo do jogo.', returns: 'A coordenada X convertida pela posição e pelo zoom da câmera.', examples: [
    example('Usar o toque como destino', 'touch.x', 'Use como destino X de uma ação para levar a posição horizontal do objeto ao ponto tocado no mundo.'),
    example('Criar na posição tocada', 'touch.x', 'Use como X da ação Criar objeto para definir a posição horizontal da nova instância pelo toque.'),
    example('Manter uma margem', 'touch.x + 24', 'Posiciona algo 24 pixels à direita do ponto tocado.'),
  ], rules: ['Depois que o dedo é solto, a expressão mantém a última posição.', 'Consulte `touch.is_down` quando precisar confirmar que o toque continua ativo.'] }),
  plain({ key: 'touch-y', slug: 'toque-y-no-mundo', category: 'toque', title: 'Toque Y no mundo', icon: 'hand-left-outline', type: 'expression-touch-y', color: '#FB923C', token: 'touch.y', summary: 'Retorna a posição Y do último toque dentro do mundo do jogo.', returns: 'A coordenada Y convertida pela posição e pelo zoom da câmera.', examples: [
    example('Usar o toque como destino', 'touch.y', 'Use como destino Y de uma ação para levar a posição vertical do objeto ao ponto tocado no mundo.'),
    example('Criar na posição tocada', 'touch.y', 'Use como Y da ação Criar objeto para definir a posição vertical da nova instância pelo toque.'),
    example('Criar acima do dedo', 'touch.y - 24', 'Posiciona algo 24 pixels acima do ponto tocado.'),
  ], rules: ['Depois que o dedo é solto, a expressão mantém a última posição.', 'Consulte `touch.is_down` quando precisar confirmar que o toque continua ativo.'] }),
  plain({ key: 'touch-screen-x', slug: 'toque-x-na-tela', category: 'toque', title: 'Toque X na tela', icon: 'phone-portrait-outline', type: 'expression-touch-x', color: '#FB923C', token: 'touch.screen_x', summary: 'Retorna a posição X direta do toque na tela do aparelho.', returns: 'A coordenada X da tela, sem aplicar a posição nem o zoom da câmera.', examples: [
    example('Ler a posição horizontal na tela', 'touch.screen_x', 'Retorna a distância horizontal entre o toque e a borda esquerda da tela.'),
    example('Comparar uma região da tela', 'touch.screen_x', 'No nó Comparar valores, compare esta expressão com uma posição X fixa da tela.'),
    example('Calcular uma margem', 'touch.screen_x + 12', 'Calcula uma posição de tela 12 pixels à direita do dedo.'),
  ], rules: ['Use `touch.x` para objetos do mundo e `touch.screen_x` para interface ligada diretamente à tela.'] }),
  plain({ key: 'touch-screen-y', slug: 'toque-y-na-tela', category: 'toque', title: 'Toque Y na tela', icon: 'phone-portrait-outline', type: 'expression-touch-y', color: '#FB923C', token: 'touch.screen_y', summary: 'Retorna a posição Y direta do toque na tela do aparelho.', returns: 'A coordenada Y da tela, sem aplicar a posição nem o zoom da câmera.', examples: [
    example('Ler a posição vertical na tela', 'touch.screen_y', 'Retorna a distância vertical entre o toque e a borda superior da tela.'),
    example('Comparar uma região da tela', 'touch.screen_y', 'No nó Comparar valores, compare esta expressão com uma posição Y fixa da tela.'),
    example('Calcular uma margem', 'touch.screen_y - 20', 'Calcula uma posição de tela 20 pixels acima do dedo.'),
  ], rules: ['Use `touch.y` para objetos do mundo e `touch.screen_y` para interface ligada diretamente à tela.'] }),
  plain({ key: 'touch-is-down', slug: 'toque-esta-pressionado', category: 'toque', title: 'Toque está pressionado', icon: 'finger-print-outline', color: '#FB923C', token: 'touch.is_down', summary: 'Retorna 1 enquanto o dedo está na tela e 0 depois que ele é solto.', returns: 'O número `1` para toque ativo ou `0` para toque solto.', examples: [
    example('Verificar o toque', 'touch.is_down', 'No nó Comparar valores, compare esta expressão com 1 para executar enquanto o dedo estiver pressionando.'),
    example('Bloquear quando soltar', 'touch.is_down', 'No nó Comparar valores, compare esta expressão com 0 para reconhecer quando não há toque ativo.'),
    example('Controlar uma intensidade', 'touch.is_down * 100', 'Retorna 100 enquanto o toque está ativo e 0 quando está solto.'),
  ], rules: ['A expressão é numérica: use `1` para ativo e `0` para inativo.', 'As coordenadas do último toque continuam guardadas mesmo quando esta expressão retorna `0`.'] }),
];

const mathExpression = ({ key, slug, title, icon, token, summary, examples, rules = [] }) => plain({
  key, slug, category: 'matematica', title, icon, color: '#FB923C', token, summary, returns: summary, examples,
  rules: ['Dentro de funções, separe os argumentos com vírgulas e use ponto nas casas decimais.', 'Os argumentos podem ser números, propriedades ou outras funções.', ...rules],
});

const mathExpressions = [
  mathExpression({ key: 'math-trunc', slug: 'matematica-truncar', title: 'Truncar', icon: 'cut-outline', token: 'math.trunc(valor)', summary: 'Remove as casas decimais sem arredondar.', examples: [example('Truncar positivo', 'math.trunc(4.9)', 'Retorna 4.'), example('Truncar negativo', 'math.trunc(-4.9)', 'Retorna -4, aproximando o valor de zero.'), example('Truncar uma posição', 'math.trunc(jogador.x)', 'Remove as casas decimais da posição X atual.')]}),
  mathExpression({ key: 'math-round', slug: 'matematica-arredondar', title: 'Arredondar', icon: 'ellipse-outline', token: 'math.round(valor)', summary: 'Arredonda para o número inteiro mais próximo.', examples: [example('Arredondar para cima', 'math.round(4.5)', 'Retorna 5.'), example('Arredondar para baixo', 'math.round(4.4)', 'Retorna 4.'), example('Exibir FPS', 'math.round(game.fps)', 'Transforma a medição do FPS em um número inteiro fácil de ler.')]}),
  mathExpression({ key: 'math-floor', slug: 'matematica-arredondar-para-baixo', title: 'Arredondar para baixo', icon: 'arrow-down-outline', token: 'math.floor(valor)', summary: 'Arredonda sempre para o menor número inteiro.', examples: [example('Positivo', 'math.floor(4.9)', 'Retorna 4.'), example('Negativo', 'math.floor(-4.1)', 'Retorna -5.'), example('Segundos completos', 'math.floor(time.elapsed)', 'Retorna apenas os segundos completos da cena.')]}),
  mathExpression({ key: 'math-ceil', slug: 'matematica-arredondar-para-cima', title: 'Arredondar para cima', icon: 'arrow-up-outline', token: 'math.ceil(valor)', summary: 'Arredonda sempre para o maior número inteiro.', examples: [example('Positivo', 'math.ceil(4.1)', 'Retorna 5.'), example('Negativo', 'math.ceil(-4.9)', 'Retorna -4.'), example('Páginas necessárias', 'math.ceil(inimigo.instances / 10)', 'Calcula quantos grupos de até dez inimigos são necessários.')]}),
  mathExpression({ key: 'math-abs', slug: 'matematica-valor-absoluto', title: 'Valor absoluto', icon: 'remove-outline', token: 'math.abs(valor)', summary: 'Remove o sinal negativo e retorna a distância até zero.', examples: [example('Número negativo', 'math.abs(-8)', 'Retorna 8.'), example('Número positivo', 'math.abs(8)', 'Continua retornando 8.'), example('Distância horizontal', 'math.abs(jogador.center_x - inimigo.center_x)', 'Retorna a distância horizontal entre os centros, sem direção.')]}),
  mathExpression({ key: 'math-min', slug: 'matematica-menor-valor', title: 'Menor valor', icon: 'chevron-down-outline', token: 'math.min(a, b)', summary: 'Retorna o menor entre dois valores.', examples: [example('Comparar números', 'math.min(7, 3)', 'Retorna 3.'), example('Limitar pelo máximo atual', 'math.min(jogador.variable.vida, 100)', 'Nunca deixa o resultado usado passar de 100.'), example('Escolher a borda mais próxima', 'math.min(jogador.left, inimigo.left)', 'Retorna a coordenada que estiver mais à esquerda.')]}),
  mathExpression({ key: 'math-max', slug: 'matematica-maior-valor', title: 'Maior valor', icon: 'chevron-up-outline', token: 'math.max(a, b)', summary: 'Retorna o maior entre dois valores.', examples: [example('Comparar números', 'math.max(7, 3)', 'Retorna 7.'), example('Impedir valor negativo', 'math.max(0, jogador.variable.vida - 10)', 'Garante que a vida calculada nunca fique abaixo de zero.'), example('Escolher a borda mais distante', 'math.max(jogador.right, inimigo.right)', 'Retorna a coordenada que estiver mais à direita.')]}),
  mathExpression({ key: 'math-clamp', slug: 'matematica-limitar', title: 'Limitar valor', icon: 'contract-outline', token: 'math.clamp(valor, mínimo, máximo)', summary: 'Mantém um valor dentro de um intervalo.', examples: [example('Limitar entre 0 e 10', 'math.clamp(14, 0, 10)', 'Retorna 10.'), example('Limitar vida', 'math.clamp(jogador.variable.vida, 0, 100)', 'Mantém a vida entre 0 e 100.'), example('Limitar posição à câmera', 'math.clamp(jogador.x, camera.left, camera.right)', 'Mantém a posição usada entre as bordas horizontais visíveis.')], rules: ['Os dois limites podem ser informados em qualquer ordem; a função reconhece automaticamente o menor e o maior.'] }),
  mathExpression({ key: 'math-sqrt', slug: 'matematica-raiz-quadrada', title: 'Raiz quadrada', icon: 'calculator-outline', token: 'math.sqrt(valor)', summary: 'Calcula a raiz quadrada de um valor.', examples: [example('Raiz exata', 'math.sqrt(81)', 'Retorna 9.'), example('Raiz decimal', 'math.sqrt(2)', 'Retorna aproximadamente 1,414.'), example('Distância em dois eixos', 'math.sqrt(math.pow(jogador.x - inimigo.x, 2) + math.pow(jogador.y - inimigo.y, 2))', 'Calcula a distância direta entre dois pontos.')], rules: ['O valor não pode ser negativo.'] }),
  mathExpression({ key: 'math-pow', slug: 'matematica-potencia', title: 'Potência', icon: 'trending-up-outline', token: 'math.pow(base, expoente)', summary: 'Eleva uma base ao expoente informado.', examples: [example('Ao cubo', 'math.pow(2, 3)', 'Retorna 8.'), example('Ao quadrado', 'math.pow(5, 2)', 'Retorna 25.'), example('Distância ao quadrado', 'math.pow(jogador.x - inimigo.x, 2)', 'Calcula o quadrado da diferença horizontal.')]}),
  mathExpression({ key: 'math-mod', slug: 'matematica-resto-da-divisao', title: 'Resto da divisão', icon: 'repeat-outline', token: 'math.mod(a, b)', summary: 'Retorna o resto da divisão entre dois valores.', examples: [example('Resto simples', 'math.mod(10, 3)', 'Retorna 1.'), example('Alternar par e ímpar', 'math.mod(contador.variable.indice, 2)', 'Retorna 0 para índices pares e 1 para índices ímpares.'), example('Repetir um ângulo', 'math.mod(time.elapsed * 90, 360)', 'Mantém um ângulo crescente no intervalo de uma volta.')], rules: ['O divisor não pode ser zero.'] }),
  mathExpression({ key: 'math-sin', slug: 'matematica-seno', title: 'Seno', icon: 'analytics-outline', token: 'math.sin(graus)', summary: 'Calcula o seno de um ângulo informado em graus.', examples: [example('Ângulo de 90°', 'math.sin(90)', 'Retorna 1.'), example('Oscilação com o tempo', 'math.sin(time.elapsed * 180) * 20', 'Oscila suavemente entre -20 e 20.'), example('Componente vertical', 'math.sin(jogador.rotation) * 200', 'Calcula a parte vertical de uma velocidade de 200 na rotação do jogador.')], rules: ['Os ângulos usam graus, não radianos.'] }),
  mathExpression({ key: 'math-cos', slug: 'matematica-cosseno', title: 'Cosseno', icon: 'analytics-outline', token: 'math.cos(graus)', summary: 'Calcula o cosseno de um ângulo informado em graus.', examples: [example('Ângulo de 180°', 'math.cos(180)', 'Retorna -1.'), example('Oscilação com o tempo', 'math.cos(time.elapsed * 180) * 20', 'Oscila suavemente e começa no valor 20.'), example('Componente horizontal', 'math.cos(jogador.rotation) * 200', 'Calcula a parte horizontal de uma velocidade de 200 na rotação do jogador.')], rules: ['Os ângulos usam graus, não radianos.'] }),
  mathExpression({ key: 'math-tan', slug: 'matematica-tangente', title: 'Tangente', icon: 'analytics-outline', token: 'math.tan(graus)', summary: 'Calcula a tangente de um ângulo informado em graus.', examples: [example('Ângulo de 45°', 'math.tan(45)', 'Retorna aproximadamente 1.'), example('Inclinação de 30°', 'math.tan(30)', 'Retorna aproximadamente 0,577.'), example('Calcular subida por distância', 'math.tan(rampa.variable.angulo) * rampa.variable.distancia_x', 'Calcula a variação vertical usando as variáveis numéricas Ângulo e Distância X de Rampa.')], rules: ['Os ângulos usam graus, não radianos.', 'Perto de 90° e 270°, o resultado cresce muito; limite o valor quando necessário.'] }),
  mathExpression({ key: 'math-lerp', slug: 'matematica-interpolar', title: 'Interpolar valores', icon: 'swap-horizontal-outline', token: 'math.lerp(início, fim, progresso)', summary: 'Mistura dois valores usando um progresso.', examples: [example('Um quarto do caminho', 'math.lerp(0, 100, 0.25)', 'Retorna 25.'), example('Metade entre objeto e câmera', 'math.lerp(jogador.x, camera.x, 0.5)', 'Retorna o ponto no meio entre as duas posições X.'), example('Aproximação suave', 'math.lerp(objeto.x, alvo.x, 0.1)', 'Retorna uma posição 10% mais próxima da posição X de Alvo.')], rules: ['Progresso `0` retorna o início e progresso `1` retorna o fim.', 'Valores entre 0 e 1 percorrem o intervalo; valores fora dele ultrapassam as pontas.'] }),
];

const randomExpressions = [
  plain({ key: 'random-int', slug: 'aleatorio-inteiro', category: 'aleatorio', title: 'Número inteiro aleatório', icon: 'dice-outline', color: '#A78BFA', token: 'random.int(mínimo, máximo)', summary: 'Sorteia um número inteiro incluindo os dois limites.', returns: 'Um número inteiro sorteado entre o mínimo e o máximo, com os dois incluídos.', examples: [
    example('Simular um dado', 'random.int(1, 6)', 'Sorteia um dos números inteiros de 1 a 6.'),
    example('Escolher um lado', 'random.int(0, 1)', 'Sorteia 0 ou 1 para tomar uma decisão simples.'),
    example('Escolher uma animação numerada', 'random.int(1, 4)', 'Sorteia um número inteiro para escolher uma entre quatro opções.'),
  ], rules: ['Os limites podem ser informados em qualquer ordem.', 'A função sorteia novamente toda vez que é calculada.', 'Use Uma única vez quando quiser manter um único resultado.'] }),
  plain({ key: 'random-float', slug: 'aleatorio-decimal', category: 'aleatorio', title: 'Número decimal aleatório', icon: 'dice-outline', color: '#A78BFA', token: 'random.float(mínimo, máximo)', summary: 'Sorteia um número com casas decimais entre os limites.', returns: 'Um número decimal sorteado entre o mínimo e o máximo.', examples: [
    example('Variar uma posição', 'random.float(-20, 20)', 'Sorteia um deslocamento decimal entre -20 e 20 pixels.'),
    example('Variar uma escala', 'random.float(0.8, 1.2)', 'Sorteia uma escala entre 80% e 120% do tamanho normal.'),
    example('Variar um tempo', 'random.float(0.5, 1.5)', 'Sorteia uma duração entre meio segundo e um segundo e meio.'),
  ], rules: ['Os limites podem ser informados em qualquer ordem.', 'A função sorteia novamente toda vez que é calculada.', 'Use Uma única vez quando quiser manter um único resultado.'] }),
];

const additionalExpressions = [
  {
    key: 'global-variable', slug: 'variavel-numerica-global', category: 'globais', title: 'Variável numérica global', icon: 'globe-outline', color: '#F4C54B', token: 'global.variable.pontos',
    summary: 'Lê uma variável numérica compartilhada entre as cenas do jogo.',
    returns: 'O número atual da variável global escolhida. Crie a variável no projeto antes de usá-la.',
    examples: [example('Consultar pontos', 'global.variable.pontos', 'Lê a variável Pontos. Use em Comparar valores para verificar uma meta.'), example('Calcular recompensa', 'global.variable.pontos + 50', 'Calcula a pontuação com mais 50. Para guardar, use Alterar variável global.'), example('Calcular uma porcentagem', 'global.variable.moedas / 100 * 100', 'Calcula a porcentagem de uma meta de 100 moedas.')],
    rules: ['Use o seletor para inserir o nome correto.', 'Só variáveis do tipo Número entram em expressões numéricas.', 'Ler não altera a variável nem salva a partida no aparelho.'],
  },
  {
    key: 'object-animation-frame', slug: 'quadro-atual-da-animacao', category: 'objetos', title: 'Quadro atual da animação', icon: 'film', color: '#4ADE80', token: 'jogador.animation_frame',
    summary: 'Retorna o quadro atual da animação com sprites.', returns: 'O primeiro quadro é 1. Sem quadros de animação, retorna 0.',
    examples: [example('Consultar o quadro', 'jogador.animation_frame', 'Em Comparar valores, compare com 3 para reconhecer o terceiro quadro.'), example('Outra instância', 'inimigo.instance_2.animation_frame', 'Consulta a segunda instância de Inimigo.'), example('Índice começando em zero', 'math.max(0, jogador.animation_frame - 1)', 'Calcula um índice a partir de zero sem ficar negativo.')],
    rules: ['Não é a contagem de quadros do jogo; é o quadro da animação do objeto.', 'Um quadro pode permanecer ativo por várias atualizações. Controle a repetição da ação se precisar reagir uma única vez.'],
  },
  {
    key: 'object-property-animation-progress', slug: 'progresso-da-animacao-de-propriedades', category: 'objetos', title: 'Progresso da animação de propriedades', icon: 'play-forward-outline', color: '#2DD4BF', token: 'porta.property_animation_progress',
    summary: 'Consulta o progresso da animação de propriedades entre 0 e 100.', returns: 'Uma porcentagem do trecho atual da animação. Quando não há animação ativa, retorna 0.',
    examples: [example('Consultar progresso', 'porta.property_animation_progress', 'Compare com 50 para verificar a metade da animação.'), example('Converter para 0 a 1', 'porta.property_animation_progress / 100', 'Usa o progresso como um fator de interpolação.'), example('Arredondar progresso', 'math.round(porta.property_animation_progress)', 'Retorna uma porcentagem inteira.')],
    rules: ['Pausar mantém o ponto da animação.', 'Repetição e ida e volta afetam o progresso; não é um contador permanente de ciclos concluídos.'],
  },
  {
    key: 'camera-rotation', slug: 'rotacao-da-camera', category: 'camera', title: 'Rotação atual da câmera', icon: 'camera-reverse-outline', color: '#60A5FA', token: 'camera.rotation',
    summary: 'Lê o ângulo atual da câmera em graus.', returns: 'Um ângulo normalizado de 0 até antes de 360 graus.',
    examples: [example('Copiar o ângulo', 'camera.rotation', 'Use na rotação de um objeto para aplicar o mesmo ângulo.'), example('Somar um quarto de volta', 'camera.rotation + 90', 'Calcula um ângulo 90 graus à frente.'), example('Arredondar o ângulo', 'math.round(camera.rotation)', 'Arredonda a rotação atual para graus inteiros.')],
    rules: ['A rotação da câmera não altera a rotação física dos objetos.', 'As expressões das bordas da câmera consideram a rotação.'],
  },
  ...[
    ['start_x', 'inicio-do-toque-x', 'Início do toque X', 'Posição horizontal do mundo onde o toque começou.', [['Origem do gesto', 'touch.start_x', 'Use para posicionar um marcador no X inicial.'], ['Margem à direita', 'touch.start_x + 20', 'Calcula um ponto 20 pixels à direita da origem.'], ['Meio do gesto', '(touch.start_x + touch.x) / 2', 'Calcula o meio horizontal entre a origem e a posição atual.']]],
    ['start_y', 'inicio-do-toque-y', 'Início do toque Y', 'Posição vertical do mundo onde o toque começou.', [['Origem do gesto', 'touch.start_y', 'Use para posicionar um marcador no Y inicial.'], ['Margem acima', 'touch.start_y - 20', 'Calcula um ponto 20 pixels acima da origem.'], ['Meio do gesto', '(touch.start_y + touch.y) / 2', 'Calcula o meio vertical entre a origem e a posição atual.']]],
    ['delta_x', 'deslocamento-do-toque-x', 'Deslocamento do toque X', 'Diferença horizontal entre o ponto atual e o início do toque.', [['Sentido do gesto', 'touch.delta_x', 'Positivo indica direita; negativo indica esquerda.'], ['Distância sem sinal', 'math.abs(touch.delta_x)', 'Mede apenas o deslocamento horizontal, sem direção.'], ['Limitar a resposta', 'math.clamp(touch.delta_x, -100, 100)', 'Limita um controle horizontal entre -100 e 100.']]],
    ['delta_y', 'deslocamento-do-toque-y', 'Deslocamento do toque Y', 'Diferença vertical entre o ponto atual e o início do toque.', [['Sentido do gesto', 'touch.delta_y', 'Positivo indica baixo; negativo indica cima.'], ['Distância sem sinal', 'math.abs(touch.delta_y)', 'Mede apenas o deslocamento vertical.'], ['Limitar a resposta', 'math.clamp(touch.delta_y, -100, 100)', 'Limita um controle vertical entre -100 e 100.']]],
    ['distance', 'distancia-do-deslize', 'Distância do deslize', 'Distância em linha reta entre o início e o ponto atual do toque.', [['Gesto mínimo', 'touch.distance', 'Compare com 40 para reconhecer um afastamento de pelo menos 40 pixels.'], ['Limitar intensidade', 'math.min(touch.distance, 100)', 'Limita a intensidade calculada em 100.'], ['Converter em escala', '1 + touch.distance / 200', 'Calcula uma escala que cresce conforme o dedo se afasta da origem.']]],
    ['angle', 'angulo-do-deslize', 'Ângulo do deslize', 'Direção do início até o ponto atual, em graus de 0 até antes de 360.', [['Direção de lançamento', 'touch.angle', 'Use no campo Ângulo de Mover em graus.'], ['Sentido oposto', 'touch.angle + 180', 'Calcula a direção contrária ao gesto.'], ['Direções em passos', 'math.round(touch.angle / 45) * 45', 'Aproxima o ângulo de um múltiplo de 45 graus.']]],
    ['duration', 'tempo-do-toque', 'Tempo do toque', 'Segundos decorridos desde o início do toque atual ou mais recente.', [['Pressão longa', 'touch.duration', 'Compare com 1 para verificar um segundo. Combine com touch.is_down se precisar que o dedo ainda esteja na tela.'], ['Progresso de carga', 'math.clamp(touch.duration / 2, 0, 1)', 'Calcula uma carga de zero a um em dois segundos.'], ['Milissegundos', 'touch.duration * 1000', 'Converte segundos para milissegundos.']]],
    ['count', 'quantidade-de-toques', 'Quantidade de toques', 'Quantidade de dedos tocando a tela agora.', [['Dois dedos', 'touch.count', 'Compare com 2 para verificar dois toques simultâneos.'], ['Quantidade inteira', 'math.min(touch.count, 2)', 'Limita a resposta usada a no máximo dois dedos.'], ['Nenhum toque', 'touch.count', 'Compare com 0 para verificar que todos os dedos foram levantados.']]],
  ].map(([property, slug, title, summary, uses]) => ({
    key: `touch-${property}`, slug, category: 'toque', title, icon: 'hand-left-outline', color: '#FB923C', token: `touch.${property}`, summary, returns: summary,
    examples: uses.map(([title, code, description]) => example(title, code, description)),
    rules: ['Combine com uma condição de toque para decidir quando usar a leitura.', ...(property === 'distance' ? ['Mede a distância entre os extremos, não a soma de todo o caminho percorrido pelo dedo.'] : []), ...(property === 'angle' ? ['Sem deslocamento, retorna 0. No mundo do jogo, 0° aponta para a direita e 90° para baixo.'] : []), ...(property.startsWith('delta') ? ['É o deslocamento desde o início, não apenas desde a atualização anterior.'] : [])],
  })),
].map((item) => ({ type: 'plain', ...item }));

export const expressions = [
  ...additionalExpressions,
  ...objectExpressions,
  ...cameraExpressions,
  ...timeExpressions,
  ...touchExpressions,
  ...mathExpressions,
  ...randomExpressions,
];

export const expressionsByCategory = Object.fromEntries(
  expressionCategories.map((category) => [
    category.key,
    expressions.filter((expression) => expression.category === category.key),
  ]),
);
