---
title: Aparência e animação
description: Entenda a diferença entre imagem, objeto, rotação, animação com sprites e animação de propriedades.
---

# <DocHeadingIcon icon="images" color="#A78BFA" /> Aparência e animação

A imagem de um objeto e o corpo dele não precisam fazer exatamente a mesma coisa. Você pode trocar o desenho, girar só o sprite, espelhar, mudar a cor ou animar propriedades.

## <DocHeadingIcon icon="cube-outline" color="#60A5FA" /> Objeto, sprite e colisão

O **objeto** tem posição, tamanho, escala e rotação. O **sprite** é a imagem usada para representá-lo. A **colisão** é a área configurada para detectar contato com outros objetos.

Use **Forma** quando quiser desenhar o objeto sem importar uma imagem. Use **Sprite** para cadastrar imagens por nome e poder trocá-las nos scripts.

## <DocHeadingIcon icon="sync-outline" color="#FB7185" /> Girar só o sprite

Use **Rotacionar sprite** para girar a imagem sem alterar a rotação do objeto nem a rotação de sua colisão.

**Exemplo:** uma bola pode rolar visualmente enquanto seu corpo continua com a mesma orientação. Uma caixa pode balançar no desenho sem inclinar a área física.

A rotação do sprite é **adicional** à do objeto. Se o objeto está a 30° e o sprite a 15°, a imagem aparece a 45°. Definir a rotação do sprite como 0° volta a imagem à orientação do objeto, não necessariamente à orientação da tela.

Use **Rotacionar objeto** quando quiser girar o conjunto. Para consultar cada valor, existem as expressões de [rotação do objeto](/expressoes/objeto-rotacao) e [rotação do sprite](/expressoes/objeto-rotacao-do-sprite).

## <DocHeadingIcon icon="swap-horizontal-outline" color="#34D399" /> Inverter ou flipar

**Inverter objeto** espelha imediatamente na horizontal ou vertical. É útil para um personagem olhar para o outro lado.

**Flipar objeto** faz a virada com animação, usando a duração e o tipo de animação escolhidos. É útil para uma carta ou uma mudança visual que precisa ser percebida.

Espelhar não é girar 180°: na horizontal, a imagem troca esquerda e direita sem ficar de cabeça para baixo.

## <DocHeadingIcon icon="film" color="#4ADE80" /> Animação com sprites

Reproduz uma sequência de imagens. Cadastre os sprites e monte animações com nomes como Parado, Andando e Ataque. Escolha os quadros, o FPS e se deve repetir.

O FPS aqui é a velocidade da **sequência de imagens**, não uma configuração de desempenho do jogo. Uma animação com 8 quadros a 8 FPS leva cerca de um segundo por ciclo.

Use **Trocar animação** para escolher a sequência durante o jogo. A [página do comportamento](/comportamentos/animacao-com-sprites) explica os campos.

## <DocHeadingIcon icon="pulse-outline" color="#2DD4BF" /> Animação de propriedades

Usa **keyframes**, pontos que dizem qual valor uma propriedade deve ter em determinado tempo. A engine calcula os valores intermediários.

**Exemplo:** em uma animação de 1 segundo, coloque a escala em 1 no início, 1,2 no meio e 1 no final. O objeto cresce e volta ao tamanho original. Você também pode animar X, Y, largura, altura, rotação, rotação do sprite, transparência, cor e ordem Z.

É possível guardar várias animações por nome. Configure a repetição, inclusive o movimento de ida e volta, e escolha a suavidade entre os pontos. A animação pode ficar sem reprodução inicial até um script ativá-la.

**Reproduzir** ativa ou continua; **Recomeçar** volta ao início; **Pausar** interrompe no ponto atual. Veja [Animação de propriedades](/comportamentos/animacao-de-propriedades).

## <DocHeadingIcon icon="trending-up-outline" color="#A78BFA" /> Quando usar uma transição

Use **Transicionar propriedade** quando só precisar ir do valor atual até um destino. Por exemplo: levar uma porta ao Y final ou deixar um objeto transparente.

Use keyframes quando precisar de vários momentos, várias propriedades ou uma sequência nomeada para reutilizar. Evite deixar a transição e os keyframes disputando a mesma propriedade.

## <DocHeadingIcon icon="eye" color="#4ADE80" /> Visibilidade, transparência e cor

**Esconder objeto** retira seu desenho; **Mostrar objeto** volta a exibi-lo. Esconder não é excluir: a instância continua existindo. Não use isso como substituto para desativar a colisão ou outros comportamentos.

**Alterar transparência** permite uma mudança gradual: 0% é totalmente visível e 100% é transparente. **Alterar tonalidade** aplica uma cor ao visual. A **ordem Z** ajuda a escolher o que aparece na frente dentro da organização da cena.

## <DocHeadingIcon icon="sparkles" color="#F97316" /> Partículas e iluminação

Partículas criam efeitos como fumaça, chuva e faíscas sem montar cada elemento como uma instância separada. Luzes e sombras dão iluminação à cena. Os dois podem ser combinados com imagens e animações.

<div class="guide-grid">
  <GuideCard href="/comportamentos/emitir-particulas" icon="sparkles" color="#F97316" title="Emitir partículas" description="Configure emissão, aparência, movimento e tempo de vida." />
  <GuideCard href="/comportamentos/#iluminacao" icon="bulb" color="#FDE047" title="Luz e sombra" description="Veja como emitir e barrar luz." />
</div>
