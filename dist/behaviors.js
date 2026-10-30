window.CONTINUE_BEHAVIOR_DETAILS = {
  "sprite":{intro:"Mostre uma imagem no objeto. Escolha a imagem inicial e ajuste o desenho sem precisar mudar os outros comportamentos.",fields:[
    ["Imagem","Escolha uma imagem da biblioteca Imagens do projeto.","behavior/sprite"],
    ["Deslocamento X e Y","Move a imagem em relação ao objeto, sem mover sua posição principal.","property/x"],
    ["Rotação e inversão","Gira ou espelha somente o sprite. Ações com alvo Objeto afetam a transformação principal.","property/rotation"],
    ["Suavização","Escolhe como a imagem é amostrada. Confira o resultado principalmente em pixel art.","behavior/sprite"],
    ["Ordem Z","Define se o sprite aparece antes ou depois dos outros desenhos do mesmo objeto.","property/z-index"]],example:"Crie um Personagem e escolha sua imagem inicial. Use uma ação Trocar sprite quando quiser mostrar outra imagem durante o jogo.",rules:["A imagem inicial fica na página de Sprite. Não há uma biblioteca de sprites separada em cada objeto.","Para uma sequência de quadros, combine com Animação com sprites.","Sprite e Forma podem aparecer juntos, cada um com suas dimensões e ordem interna."],related:["recursos","propriedades-visuais"]},
  "shape":{intro:"Desenhe um fundo, botão ou elemento do jogo usando uma forma com cor e borda.",fields:[
    ["Formato e tamanho","Escolha a forma. Largura, altura e raio aparecem conforme o formato.","shape/rectangle"],
    ["Preenchimento","Ajuste a cor e a opacidade da parte interna.","property/tint-color"],
    ["Borda e arredondamento","Mostre uma borda e ajuste sua aparência. As opções disponíveis dependem do formato.","shape/rectangle"],
    ["Deslocamento e rotação","Mude a posição local e o ângulo apenas da forma.","property/rotation"],
    ["Ordem Z","Organiza a forma em relação ao sprite e ao texto do mesmo objeto.","property/z-index"]],example:"Use uma forma arredondada como fundo de um botão. Adicione Texto para mostrar o nome e Crescer ao clicar para dar uma resposta ao toque.",rules:["A forma tem tamanho próprio e usa a escala do objeto.","Uma forma visível não cria uma colisão física sozinha. Adicione Colisão quando precisar bloquear ou detectar contato."],related:["propriedades-visuais","objetos-instancias"]},
  "text":{intro:"Mostre uma palavra, uma mensagem ou um valor usando uma fonte. O texto é um desenho próprio do objeto.",fields:[
    ["Texto e fonte","Digite o conteúdo e escolha uma fonte integrada ou das Fontes do projeto.","behavior/text"],
    ["Tamanho e aparência","Ajuste tamanho, cor, opacidade e estilo da fonte.","text-setting/font-size"],
    ["Área e quebra de linha","Use uma área personalizada ou o tamanho de outro desenho como limite para o texto.","property/width"],
    ["Diminuir para caber","Reduz a fonte quando necessário, respeitando o tamanho mínimo escolhido.","property/scale"],
    ["Renderização","Nítida na tela preserva a definição; Seguir resolução do jogo acompanha os pixels do desenho do jogo.","behavior/text"]],example:"Crie um objeto Pontuação com o texto “0”. Coloque-o em uma camada fixa na tela e use os nós de Texto para atualizar o conteúdo.",rules:["Usar os limites de Sprite, Forma ou Colisão não muda o tamanho desses comportamentos.","O tamanho máximo é o tamanho normal configurado para a fonte. O mínimo limita a redução para caber.","A cor da camada e do objeto também pode afetar a aparência do texto."],related:["variaveis","recursos","camadas"]},
  "animation":{intro:"Reproduza uma sequência de imagens no sprite do objeto.",fields:[
    ["Animações com nome","Crie animações e organize-as em pastas.","behavior/animation"],
    ["Quadros","Escolha as imagens da sequência e a ordem em que aparecem.","behavior/sprite"],
    ["Reprodução","Ajuste a velocidade e a repetição conforme a animação.","execution/duration"]],example:"Crie as animações Parado e Andando. Use o nó Trocar animação para escolher qual delas deve aparecer conforme o movimento do personagem.",rules:["Os quadros usam as imagens do projeto.","Animar os quadros não substitui mover o objeto. São mudanças diferentes.","Use as condições de animação para consultar a reprodução."],related:["recursos","fluxos"]},
  "property-animation":{intro:"Crie animações com keyframes para mudar várias propriedades ao longo do tempo.",fields:[
    ["Animações e pastas","Dê um nome a cada animação para poder escolhê-la nos nós.","behavior/property-animation"],
    ["Trilhas de propriedades","Cada propriedade tem sua própria seção e seus keyframes.","property/x"],
    ["Keyframes","Escolha o tempo e o valor que a propriedade deve ter naquele ponto.","property-animation/keyframe"],
    ["Tipo de animação","Escolha como o valor muda entre os pontos, como linear, suave ou elástico.","easing/smooth"],
    ["Reprodução e progresso","Defina a repetição e use o preview com a barra de progresso para conferir.","execution/duration"]],example:"Crie uma animação Abrir. Em uma trilha, aumente a escala; em outra, aumente a opacidade. Reproduza a animação com o nó de animação de propriedades.",rules:["Uma animação pode mudar mais de uma propriedade.","Constante mantém o valor até o próximo keyframe.","Use os nós próprios para reproduzir, recomeçar e pausar uma animação."],related:["propriedades-visuais","fluxos"]},
  "particle-emitter":{intro:"Crie efeitos formados por partículas, como fogo, fumaça, chuva e rajadas.",fields:[
    ["Efeitos com nome","Um objeto pode ter vários efeitos, organizados em uma biblioteca própria.","behavior/particle-emitter"],
    ["Emissão e duração","Escolha quantas partículas são emitidas, a duração e o tempo de vida.","common/quantity"],
    ["Movimento e variação","Ajuste direção, velocidade e diferenças entre partículas.","property/speed"],
    ["Tamanho, cor e opacidade","Escolha como as partículas aparecem e mudam ao longo da vida.","property/tint-color"]],example:"Crie um efeito Fogo para uma tocha. Use outra configuração no mesmo objeto para uma pequena rajada de faíscas.",rules:["As partículas têm tempo de vida e são descartadas quando terminam.","Os nós podem controlar um efeito pelo nome.","A quantidade e o tamanho dos desenhos influenciam o custo do efeito. Confira a cena no aparelho de destino."],related:["testar","objetos-instancias"]},
  "press-scale":{intro:"Mude o tamanho do objeto como resposta a um clique ou toque.",fields:[
    ["Como o toque funciona","Escolha o modo de resposta ao pressionar e soltar.","press-scale/tap"],
    ["Multiplicador","Define quanto o objeto cresce ou diminui em relação ao tamanho normal.","property/scale"],
    ["Animação e velocidade","Escolha a forma e a rapidez da mudança.","easing/smooth"]],example:"Use em um botão para aumentar um pouco o tamanho enquanto ele está pressionado. Combine com Forma e Texto para mostrar a resposta visual completa.",rules:["A área que responde ao toque é configurada em Propriedades do objeto.","O comportamento muda a escala de resposta ao toque. Os outros desenhos do objeto acompanham essa transformação.","Quando usar Âncora, confira a opção que mantém o ponto ancorado durante a mudança de tamanho."],related:["objetos-instancias","propriedades-visuais"]},
  "anchor":{intro:"Prenda cada instância a um ponto da tela ou de outro objeto.",fields:[
    ["Destino da âncora","Escolha a tela ou um objeto de referência.","behavior/anchor"],
    ["Referências X e Y","Escolha centro ou bordas para posicionar o ponto de referência.","property/x"],
    ["Deslocamento","Some uma distância em X e Y a partir desse ponto.","property/y"],
    ["Ponto do objeto e área segura","Escolha qual ponto do próprio objeto fica ancorado e se a área segura deve ser respeitada.","category/camera"]],example:"Ancore um botão no canto superior direito da tela. Ajuste um deslocamento para deixar uma margem em relação à borda.",rules:["Cada instância tem sua própria âncora.","O destino em outro objeto usa a área desse objeto como referência.","A opção de manter o ponto durante o redimensionamento permite que o objeto cresça para dentro sem soltar a posição ancorada."],related:["camadas","camera"]},
  "drag-drop":{intro:"Permita mover o objeto com o dedo ou com o botão de toque do jogo.",fields:[
    ["Eixo permitido","Deixe livre ou permita somente X ou somente Y.","axis/free"],
    ["Trazer para frente","Mantém à frente dos objetos da mesma camada durante o arrasto e restaura a ordem ao soltar.","property/z-index"],
    ["Ponto do toque","Mantenha o ponto onde o dedo encostou ou centralize o objeto no dedo.","drag-touch/touch"],
    ["Suavidade","Controla o acompanhamento da posição durante o arrasto.","behavior-setting/motion-smoothing"]],example:"Em uma peça de quebra-cabeça, permita arrasto livre e preserve o ponto do toque. Para um controle deslizante, permita apenas o eixo X.",rules:["A área do toque vem de Propriedades do objeto e pode usar colisão, forma, sprite ou pixels visíveis.","As condições de arrastar distinguem começar, estar arrastando e soltar após arrastar.","A área do toque não precisa ser igual à colisão física."],related:["instancias","objetos-instancias"]},
  "move-to-touch":{intro:"Leve o objeto até a posição tocada na cena.",fields:[
    ["Velocidade","Define a rapidez do deslocamento.","property/speed"],
    ["Aceleração e desaceleração","Ajustam como o objeto ganha e perde velocidade.","property/acceleration"],
    ["Seguir o dedo","Quando ativado, o destino continua acompanhando o dedo enquanto ele desliza.","behavior-setting/follow-finger"]],example:"Adicione ao personagem para que ele caminhe até o local tocado. Ajuste a desaceleração para mudar a forma como ele chega ao destino.",rules:["Seguir o dedo começa desativado por padrão.","As coordenadas do toque no mundo são diferentes das coordenadas físicas da tela.","Use o preview interativo para conferir a resposta antes de testar a cena."],related:["camera","testar"]},
  "gravity-body":{intro:"Faça o objeto responder à gravidade e às interações físicas.",fields:[
    ["Gravidade e direção","Escolha para onde a gravidade aponta e ajuste sua intensidade.","direction/down"],
    ["Massa e resistências","Ajuste como o corpo responde às forças e ao movimento.","behavior-setting/mass"],
    ["Atrito e resposta ao contato","Ajuste o comportamento ao encostar em outros corpos e superfícies.","behavior-setting/friction"],
    ["Travas","Impeça movimento em X, em Y ou rotação conforme precisar.","axis/free"]],example:"Use Colisão e Objeto com física em uma caixa. Coloque um chão com colisão sólida abaixo dela e inicie o jogo para ver a queda e o contato.",rules:["Colisão define o contorno; Objeto com física controla o movimento físico.","Força, impulso e torque são ações físicas diferentes de definir uma posição diretamente.","A direção também pode ser alterada por nó durante o jogo."],related:["testar","propriedades-visuais"]},
  "collision":{intro:"Defina o contorno usado para detectar contato e bloquear outros objetos.",fields:[
    ["Formato","Use Quadrado, Círculo ou Polígono. O polígono permite editar os pontos.","behavior/collision"],
    ["Tamanho e deslocamento","Ajuste a área e sua posição em relação ao objeto.","property/width"],
    ["Tipo de colisão","Sólida bloqueia; Gatilho detecta sem bloquear; Um lado usa os lados ativados.","collision-mode/solid"],
    ["Margem e opções de contato","Ajuste o encontro entre os contornos conforme a necessidade do jogo.","behavior-setting/contact-margin"]],example:"Use um gatilho em uma porta para detectar a passagem do personagem. Use uma colisão sólida em uma parede para impedir que ele atravesse.",rules:["O contorno pode ser diferente da aparência do sprite.","Ative o debug no visualizador para conferir o formato e os contatos.","Um comportamento de colisão não significa, sozinho, que o objeto terá gravidade."],related:["testar","objetos-instancias"]},
  "ignore-collision":{intro:"Escolha quais modelos de objeto não devem bloquear este objeto.",fields:[["Objetos ignorados","Selecione os objetos cujas colisões devem ser ignoradas.","common/object"]],example:"Faça os inimigos atravessarem outros inimigos, mas continuarem colidindo com o chão e as paredes.",rules:["Use junto com Colisão quando precisar de contorno e bloqueio para os outros contatos.","Confira a lista de objetos escolhidos antes de testar. Uma seleção diferente pode mudar quais contatos são resolvidos."],related:["objetos-instancias","testar"]},
  "raycast":{intro:"Lance um raio para consultar a primeira colisão encontrada em uma direção.",fields:[
    ["Raios com nome","Crie mais de um raio no objeto e organize-os em pastas.","behavior/raycast"],
    ["Posição, direção e comprimento","Escolha de onde o raio sai e até onde procura.","property/rotation"],
    ["Objetos detectados","Use todos ou escolha modelos específicos.","common/object"],
    ["Ignorar a própria instância e detectar por dentro","Defina como tratar a origem e o próprio objeto.","behavior/raycast"]],example:"Crie um raio curto voltado para baixo no personagem. Use a condição do raio para saber quando há uma superfície nessa direção.",rules:["Os nós escolhem o raio pelo nome.","O debug do visualizador mostra a linha e o ponto detectado.","Mover ou espelhar o objeto muda a referência usada pelo raio."],related:["testar","fluxos"]},
  "light-emitter":{intro:"Ilumine a cena com uma luz 2D e escolha como ela desaparece nas bordas.",fields:[
    ["Cor e intensidade","Escolha a cor da luz e sua força visual.","light-setting/intensity"],
    ["Alcance e área central","Defina a extensão da luz e a região central.","light-setting/range"],
    ["Deslocamento X e Y","Move o ponto da luz em relação ao objeto.","property/x"],
    ["Sombras e suavidade","Ative sombras e ajuste a suavidade e o desaparecimento.","light-setting/shadows"],
    ["Pulsação e ambiente","Ajuste a variação da luz e o ambiente compartilhado da cena.","light-setting/pulse"]],example:"Adicione uma luz a uma tocha. Coloque um objeto com Barrar luz ao lado e use o preview para observar a projeção da sombra.",rules:["Cada luz tem sua própria contribuição. Outra luz pode iluminar uma região bloqueada para a primeira.","O ambiente da cena é compartilhado. Não é uma escuridão diferente para cada objeto.","Camadas acima da iluminação podem ser usadas para a interface do jogo."],related:["camadas","testar"]},
  "light-blocker":{intro:"Bloqueie a contribuição de uma luz e projete uma sombra com o contorno escolhido.",fields:[
    ["Bloqueio da luz","Escolha quanto da luz é bloqueado.","behavior-setting/light-block"],
    ["Formato da sombra","Use Automático, Colisão, Forma ou Contorno do sprite.","light-shadow/automatic"],
    ["Comprimento da sombra","Ajuste o alcance da projeção.","behavior-setting/shadow-length"],
    ["Receber luz e sombras","Escolha como o próprio objeto participa da iluminação.","light-shadow/shape"]],example:"Use Forma para desenhar uma parede e Barrar luz para impedir a passagem da luz. Escolha o formato da sombra de acordo com o desenho que deseja usar.",rules:["Automático usa a colisão ativa ou o visual do objeto.","A opção Colisão depende do contorno de colisão ativo.","Contorno do sprite usa os pixels visíveis da imagem atual."],related:["camadas","propriedades-visuais"]},
  "object-variables":{intro:"Guarde informações próprias de cada instância do objeto.",fields:[
    ["Variáveis e pastas","Organize os valores por nome e abra uma variável para editar.","expression/object-variable"],
    ["Tipo e formato","Use número, texto ou lógico, em valor único, lista ou matriz.","expression/object-variable-list"],
    ["Valor inicial","Define o valor que cada nova instância recebe ao ser criada.","common/edit"]],example:"Crie a variável Vida com valor inicial 3 no Inimigo. Ao atingir uma instância, altere apenas a Vida daquela cópia.",rules:["Variáveis do objeto não são variáveis globais.","As ações e expressões permitem escolher a instância a que o valor pertence.","Mudar um valor durante o jogo não é o mesmo que editar o valor inicial do modelo."],related:["variaveis","instancias","expressoes"]}
};
