---
title: Toque, teclado e colisões
description: Escolha condições contínuas ou de um único momento e selecione quais instâncias verificar.
---

# <DocHeadingIcon icon="hand-left-outline" color="#FB923C" :size="22" /> Toque, teclado e colisões

As condições ajudam o jogo a reagir ao jogador e ao que acontece na cena. Coloque a condição antes das ações e conecte os nós. Estar perto na lista não substitui a conexão.

## Aconteceu agora ou continua acontecendo?

Uma condição de **momento** acontece em uma atualização: começou o toque, a tecla foi solta, uma colisão começou. Use para pular, disparar, abrir uma porta ou contar um evento.

Uma condição de **estado** permanece verdadeira: a tecla está pressionada, os objetos estão colidindo, o objeto está na câmera. Use para uma ação que deve continuar enquanto a situação durar.

**Exemplo:** mover para a direita usa Tecla está pressionada. Iniciar um pulo normalmente usa Tecla foi pressionada, para não tentar pular de novo enquanto a tecla continua abaixada.

## <DocHeadingIcon icon="finger-print-outline" color="#F472B6" /> Toque em objetos e na tela

Use as condições de objeto quando a interação precisa começar ou acontecer naquele elemento. Há opções para clique, pressão, pressão por tempo, vários cliques, soltura, dedo sobre o objeto e deslize.

Use as condições de tela quando o toque pode acontecer em qualquer lugar. **Tela foi tocada** detecta o início; **Tela está pressionada** permanece ativa; **Toque na tela foi solto** detecta a soltura.

As expressões `touch.x` e `touch.y` usam coordenadas do mundo do jogo. Já `touch.screen_x` e `touch.screen_y` usam a tela. Para posicionar um objeto na cena, prefira as coordenadas do mundo.

## <DocHeadingIcon icon="keypad-outline" color="#60A5FA" /> Teclado

As sete condições cobrem tecla mantida, pressionada, solta, qualquer tecla pressionada, combinação, pressão por tempo e pressão X vezes. Abra o campo de tecla para escolher uma tecla compatível. Combinação permite escolher mais de uma; X vezes permite definir quantas pressões devem acontecer e o intervalo máximo.

Elas precisam de uma entrada de teclado: não criam botões de toque na tela. Para um jogo de celular, monte controles com objetos e condições de toque ou use os comportamentos de interação.

## <DocHeadingIcon icon="link-outline" color="#4ADE80" /> Colisões

Configure **Colisão** nos objetos e escolha os dois participantes no nó. Você pode verificar quando encostam, enquanto estão encostados, quando se separam ou o lado do primeiro contato.

O lado é visto a partir do **primeiro objeto**. Se o segundo encosta por cima dele, selecione Cima.

O comportamento de colisão também distingue **Sólida**, **Gatilho** e **Um lado**. Sólida bloqueia conforme a física; gatilho serve para detectar contato sem uma parede sólida; Um lado limita o bloqueio aos lados configurados. Ajuste a área da colisão para representar o que você quer detectar.

## <DocHeadingIcon icon="locate-outline" color="#FACC15" /> Qual instância verificar?

**Qualquer instância** aceita quando pelo menos uma cópia atende à condição. **Todas as instâncias** exige o resultado do grupo. **Instância específica** usa a cópia indicada.

Escolher uma instância em uma condição não substitui a escolha de destino nas ações seguintes. Confira também o campo de instância de cada ação para não alterar todas as cópias sem querer.

## <DocHeadingIcon icon="eye" color="#38BDF8" /> Visível não é a mesma coisa que dentro da câmera

**Objeto está visível** consulta sua visibilidade. As condições **entrou**, **está** e **saiu da câmera** consultam a área vista pela câmera. Um objeto pode estar visível, mas longe, fora da tela.

Nas condições de câmera, escolha se vale qualquer parte, o objeto inteiro ou só o centro. A margem permite ampliar a área da verificação.

<div class="guide-grid">
  <GuideCard href="/nos/" icon="search-outline" color="#A78BFA" title="Consultar as condições" description="Abra a categoria e veja as regras de cada nó." />
  <GuideCard href="/editor/scripts-visuais" type="flow-glyph" icon="git-branch" color="#F472B6" title="Conectar a reação" description="Aprenda a ligar a condição às ações do jogo." />
</div>
