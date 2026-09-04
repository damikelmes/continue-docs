---
title: Todos os nós
description: Lista completa dos nós disponíveis no editor da Continue.
---

# <DocHeadingIcon icon="grid-outline" color="#A78BFA" :size="22" /> Todos os nós

Um nó é uma peça do script visual. **Ações** mudam o jogo; **condições** verificam se o fluxo pode continuar; **repetições** executam uma sequência mais de uma vez. A biblioteca permite chamar uma rotina já montada.

Está começando? Leia [Nós e fluxos: o básico](/editor/scripts-visuais) e [onde colocar o script](/editor/tipos-de-script). Para consultar uma opção, escolha uma categoria abaixo e abra o nó pelo nome usado no editor.

<div class="nodes-intro">
  <strong>97</strong>
  <span>nós documentados individualmente, cada um com campos, exemplo e regras de uso.</span>
</div>

<CatalogNav :groups='[{"key":"cena","label":"Cena","icon":"albums-outline","color":"#A78BFA","count":9},{"key":"movimento-e-posicao","label":"Movimento e posição","icon":"navigate-circle-outline","color":"#60A5FA","count":15},{"key":"aparencia","label":"Aparência","icon":"color-palette-outline","color":"#C084FC","count":12},{"key":"camera","label":"Câmera","icon":"videocam-outline","color":"#22D3EE","count":7},{"key":"objetos-e-instancias","label":"Objetos e instâncias","icon":"cube-outline","color":"#34D399","count":2},{"key":"comportamentos","label":"Comportamentos","icon":"extension-puzzle-outline","color":"#F59E0B","count":6},{"key":"interacao-e-toque","label":"Interação e toque","icon":"hand-left-outline","color":"#FB7185","count":10},{"key":"variaveis","label":"Variáveis","icon":"server-outline","color":"#FBBF24","count":2},{"key":"camera-e-tela","label":"Câmera e tela","icon":"eye","color":"#38BDF8","count":3},{"key":"colisoes","label":"Colisões","icon":"link-outline","color":"#4ADE80","count":4},{"key":"teclado","label":"Teclado","icon":"keypad-outline","color":"#60A5FA","count":7},{"key":"estado-do-objeto","label":"Estado do objeto","icon":"pulse-outline","color":"#4ADE80","count":13},{"key":"logica-e-tempo","label":"Lógica e tempo","icon":"git-compare-outline","color":"#FACC15","count":5},{"key":"repeticoes","label":"Repetições","icon":"repeat-outline","color":"#22D3EE","count":1},{"key":"scripts-da-biblioteca","label":"Scripts da biblioteca","icon":"code-slash-outline","color":"#A78BFA","count":1}]' />

## <DocHeadingIcon icon="albums-outline" color="#A78BFA" /> Cena {#cena}

<p class="node-category-copy">Trocar, retomar, reiniciar e pausar cenas, além de manter objetos entre elas.</p>

<div class="node-grid">
  <a class="node-card" style="--node-card-color: #A78BFA" href="./trocar-de-cena">
    <span class="node-card-icon"><NodeIcon type="action-change-scene" icon="albums-outline" color="#A78BFA" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">AÇÃO</span>
      <strong>Trocar de cena</strong>
      <small>Abre outra cena do projeto usando a transição escolhida.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #C4B5FD" href="./voltar-para-cena-anterior">
    <span class="node-card-icon"><NodeIcon type="action-go-back-scene" icon="return-up-back-outline" color="#C4B5FD" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">AÇÃO</span>
      <strong>Voltar para a cena anterior</strong>
      <small>Retorna para a última cena visitada e recupera seu estado.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #FB7185" href="./limpar-estado-salvo-da-cena">
    <span class="node-card-icon"><NodeIcon type="action-clear-scene-state" icon="trash-bin-outline" color="#FB7185" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">AÇÃO</span>
      <strong>Limpar estado salvo da cena</strong>
      <small>Apaga o estado guardado para a cena escolhida.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #34D399" href="./manter-objeto-entre-cenas">
    <span class="node-card-icon"><NodeIcon type="action-persist-object" icon="link-outline" color="#34D399" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">AÇÃO</span>
      <strong>Manter objeto entre cenas</strong>
      <small>Leva o objeto e seu estado atual para as próximas cenas.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #60A5FA" href="./reiniciar-cena">
    <span class="node-card-icon"><NodeIcon type="action-restart-scene" icon="refresh-circle-outline" color="#60A5FA" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">AÇÃO</span>
      <strong>Reiniciar cena</strong>
      <small>Recarrega a cena atual desde o começo.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #FBBF24" href="./pausar-cena">
    <span class="node-card-icon"><NodeIcon type="action-pause-scene" icon="pause-circle-outline" color="#FBBF24" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">AÇÃO</span>
      <strong>Pausar cena</strong>
      <small>Congela objetos, física, comportamentos e animações da cena.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #4ADE80" href="./continuar-cena">
    <span class="node-card-icon"><NodeIcon type="action-resume-scene" icon="play-circle-outline" color="#4ADE80" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">AÇÃO</span>
      <strong>Continuar cena</strong>
      <small>Retoma uma cena pausada exatamente do ponto atual.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #FBBF24" href="./cena-comecou">
    <span class="node-card-icon"><NodeIcon type="condition-scene-started" icon="flag-outline" color="#FBBF24" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">CONDIÇÃO</span>
      <strong>Cena começou</strong>
      <small>Dispara uma vez quando a cena começa desde o início.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #F59E0B" href="./cena-esta-pausada">
    <span class="node-card-icon"><NodeIcon type="condition-scene-paused" icon="pause-circle-outline" color="#F59E0B" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">CONDIÇÃO</span>
      <strong>Cena está pausada</strong>
      <small>Continua verdadeira enquanto a cena estiver pausada.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
</div>

## <DocHeadingIcon icon="navigate-circle-outline" color="#60A5FA" /> Movimento e posição {#movimento-e-posicao}

<p class="node-category-copy">Mover, redimensionar, girar e fazer objetos seguirem outros objetos.</p>

<div class="node-grid">
  <a class="node-card" style="--node-card-color: #A78BFA" href="./transicionar-propriedade">
    <span class="node-card-icon"><NodeIcon type="action-transition-object-property" icon="pulse-outline" color="#A78BFA" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">AÇÃO</span>
      <strong>Transicionar propriedade</strong>
      <small>Anima uma propriedade do valor atual até o valor final.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #FB923C" href="./chacoalhar-objeto">
    <span class="node-card-icon"><NodeIcon type="action-shake-object" icon="cube-outline" color="#FB923C" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">AÇÃO</span>
      <strong>Chacoalhar objeto</strong>
      <small>Sacode o visual do objeto sem mudar sua posição real.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #38BDF8" href="./orbitar-objeto">
    <span class="node-card-icon"><NodeIcon type="action-orbit-object" icon="planet-outline" color="#38BDF8" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">AÇÃO</span>
      <strong>Orbitar objeto</strong>
      <small>Faz um objeto girar continuamente ao redor de outro.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #34D399" href="./seguir-objeto">
    <span class="node-card-icon"><NodeIcon type="action-follow-object" icon="navigate-circle-outline" color="#34D399" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">AÇÃO</span>
      <strong>Seguir objeto</strong>
      <small>Move um objeto até outro mantendo uma distância escolhida.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #60A5FA" href="./mudar-posicao-x">
    <span class="node-card-icon"><NodeIcon type="action-set-object-x" icon="swap-horizontal-outline" color="#60A5FA" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">AÇÃO</span>
      <strong>Mudar posição X</strong>
      <small>Altera apenas a posição horizontal do objeto.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #38BDF8" href="./mudar-posicao-y">
    <span class="node-card-icon"><NodeIcon type="action-set-object-y" icon="swap-vertical-outline" color="#38BDF8" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">AÇÃO</span>
      <strong>Mudar posição Y</strong>
      <small>Altera apenas a posição vertical do objeto.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #A78BFA" href="./mudar-largura">
    <span class="node-card-icon"><NodeIcon type="action-set-object-width" icon="resize-outline" color="#A78BFA" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">AÇÃO</span>
      <strong>Mudar largura</strong>
      <small>Muda a largura do objeto durante o jogo.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #C084FC" href="./mudar-altura">
    <span class="node-card-icon"><NodeIcon type="action-set-object-height" icon="resize-outline" color="#C084FC" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">AÇÃO</span>
      <strong>Mudar altura</strong>
      <small>Muda a altura do objeto durante o jogo.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #60A5FA" href="./mover-em-x">
    <span class="node-card-icon"><NodeIcon type="action-move-object-x" icon="speedometer-outline" color="#60A5FA" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">AÇÃO</span>
      <strong>Mover em X</strong>
      <small>Move o objeto horizontalmente usando velocidade e aceleração.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #38BDF8" href="./mover-em-y">
    <span class="node-card-icon"><NodeIcon type="action-move-object-y" icon="trending-up-outline" color="#38BDF8" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">AÇÃO</span>
      <strong>Mover em Y</strong>
      <small>Move o objeto verticalmente usando velocidade e aceleração.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #2DD4BF" href="./mover-em-graus">
    <span class="node-card-icon"><NodeIcon type="action-move-object-angle" icon="compass-outline" color="#2DD4BF" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">AÇÃO</span>
      <strong>Mover em graus</strong>
      <small>Move o objeto na direção de um ângulo.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #4ADE80" href="./pular-objeto">
    <span class="node-card-icon"><NodeIcon type="action-jump-object" icon="arrow-up-circle" color="#4ADE80" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">AÇÃO</span>
      <strong>Pular objeto</strong>
      <small>Aplica uma força de pulo a um objeto no chão.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #F59E0B" href="./rotacionar-objeto">
    <span class="node-card-icon"><NodeIcon type="action-rotate-object" icon="refresh-outline" color="#F59E0B" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">AÇÃO</span>
      <strong>Rotacionar objeto</strong>
      <small>Altera a rotação completa do objeto.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #FB7185" href="./rotacionar-sprite">
    <span class="node-card-icon"><NodeIcon type="action-rotate-sprite" icon="sync-outline" color="#FB7185" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">AÇÃO</span>
      <strong>Rotacionar sprite</strong>
      <small>Gira somente o sprite do objeto.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #FB923C" href="./alterar-escala">
    <span class="node-card-icon"><NodeIcon type="action-set-object-scale" icon="expand-outline" color="#FB923C" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">AÇÃO</span>
      <strong>Alterar escala</strong>
      <small>Aumenta ou diminui o objeto proporcionalmente.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
</div>

## <DocHeadingIcon icon="color-palette-outline" color="#C084FC" /> Aparência {#aparencia}

<p class="node-category-copy">Sprites, animações, cor, transparência e ordem de desenho.</p>

<div class="node-grid">
  <a class="node-card" style="--node-card-color: #C084FC" href="./trocar-sprite">
    <span class="node-card-icon"><NodeIcon type="action-set-object-sprite" icon="images" color="#C084FC" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">AÇÃO</span>
      <strong>Trocar sprite</strong>
      <small>Troca a imagem exibida pelo objeto.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #4ADE80" href="./trocar-animacao">
    <span class="node-card-icon"><NodeIcon type="action-set-object-animation" icon="film" color="#4ADE80" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">AÇÃO</span>
      <strong>Trocar animação</strong>
      <small>Reproduz uma animação de sprites pelo nome.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #2DD4BF" href="./reproduzir-animacao-de-propriedades">
    <span class="node-card-icon"><NodeIcon type="action-play-property-animation" icon="play-circle-outline" color="#2DD4BF" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">AÇÃO</span>
      <strong>Reproduzir animação de propriedades</strong>
      <small>Inicia ou continua uma animação de propriedades.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #38BDF8" href="./recomecar-animacao-de-propriedades">
    <span class="node-card-icon"><NodeIcon type="action-restart-property-animation" icon="refresh-circle-outline" color="#38BDF8" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">AÇÃO</span>
      <strong>Recomeçar animação de propriedades</strong>
      <small>Reinicia uma animação de propriedades no primeiro quadro.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #FBBF24" href="./pausar-animacao-de-propriedades">
    <span class="node-card-icon"><NodeIcon type="action-pause-property-animation" icon="pause-circle-outline" color="#FBBF24" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">AÇÃO</span>
      <strong>Pausar animação de propriedades</strong>
      <small>Pausa a animação sem perder o progresso.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #2DD4BF" href="./alterar-transparencia">
    <span class="node-card-icon"><NodeIcon type="action-set-object-opacity" icon="water-outline" color="#2DD4BF" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">AÇÃO</span>
      <strong>Alterar transparência</strong>
      <small>Muda o quanto o objeto está visível.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #F472B6" href="./alterar-tonalidade">
    <span class="node-card-icon"><NodeIcon type="action-set-object-tint" icon="color-palette-outline" color="#F472B6" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">AÇÃO</span>
      <strong>Alterar tonalidade</strong>
      <small>Aplica uma cor sobre o visual do objeto.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #34D399" href="./inverter-objeto">
    <span class="node-card-icon"><NodeIcon type="action-flip-object" icon="swap-horizontal-outline" color="#34D399" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">AÇÃO</span>
      <strong>Inverter objeto</strong>
      <small>Espelha o objeto instantaneamente.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #2DD4BF" href="./flipar-objeto">
    <span class="node-card-icon"><NodeIcon type="action-flip-object-animated" icon="swap-horizontal-outline" color="#2DD4BF" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">AÇÃO</span>
      <strong>Flipar objeto</strong>
      <small>Espelha o objeto com uma animação de virada.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #818CF8" href="./alterar-ordem-z">
    <span class="node-card-icon"><NodeIcon type="action-set-object-z-index" icon="layers-outline" color="#818CF8" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">AÇÃO</span>
      <strong>Alterar ordem Z</strong>
      <small>Muda a ordem em que o objeto é desenhado.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #4ADE80" href="./mostrar-objeto">
    <span class="node-card-icon"><NodeIcon type="action-show-object" icon="eye" color="#4ADE80" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">AÇÃO</span>
      <strong>Mostrar objeto</strong>
      <small>Torna visíveis as instâncias escolhidas sem recriá-las.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #94A3B8" href="./esconder-objeto">
    <span class="node-card-icon"><NodeIcon type="action-hide-object" icon="eye-off" color="#94A3B8" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">AÇÃO</span>
      <strong>Esconder objeto</strong>
      <small>Esconde as instâncias escolhidas sem excluí-las da cena.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
</div>

## <DocHeadingIcon icon="videocam-outline" color="#22D3EE" /> Câmera {#camera}

<p class="node-category-copy">Posição, acompanhamento, zoom e tremor da câmera.</p>

<div class="node-grid">
  <a class="node-card" style="--node-card-color: #22D3EE" href="./camera-suave">
    <span class="node-card-icon"><NodeIcon type="action-follow-camera-on-object" icon="navigate-circle-outline" color="#22D3EE" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">AÇÃO</span>
      <strong>Câmera suave</strong>
      <small>Faz a câmera acompanhar um objeto com suavidade.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #60A5FA" href="./centralizar-camera">
    <span class="node-card-icon"><NodeIcon type="action-center-camera-on-object" icon="videocam" color="#60A5FA" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">AÇÃO</span>
      <strong>Centralizar câmera</strong>
      <small>Coloca o centro da câmera exatamente no centro do objeto.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #60A5FA" href="./mudar-posicao-x-da-camera">
    <span class="node-card-icon"><NodeIcon type="action-set-camera-x" icon="arrow-forward-circle-outline" color="#60A5FA" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">AÇÃO</span>
      <strong>Mudar posição X da câmera</strong>
      <small>Altera apenas o centro horizontal da câmera.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #38BDF8" href="./mudar-posicao-y-da-camera">
    <span class="node-card-icon"><NodeIcon type="action-set-camera-y" icon="arrow-down-circle-outline" color="#38BDF8" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">AÇÃO</span>
      <strong>Mudar posição Y da câmera</strong>
      <small>Altera apenas o centro vertical da câmera.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #F59E0B" href="./chacoalhar-camera">
    <span class="node-card-icon"><NodeIcon type="action-shake-camera" icon="videocam-outline" color="#F59E0B" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">AÇÃO</span>
      <strong>Chacoalhar câmera</strong>
      <small>Sacode a visão da cena sem mudar o centro lógico da câmera.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #A78BFA" href="./dar-zoom-na-camera">
    <span class="node-card-icon"><NodeIcon type="action-set-camera-zoom" icon="search-outline" color="#A78BFA" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">AÇÃO</span>
      <strong>Dar zoom na câmera</strong>
      <small>Altera o nível de aproximação da câmera.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #38BDF8" href="./rotacionar-camera">
    <span class="node-card-icon"><NodeIcon type="action-rotate-camera" icon="camera-reverse-outline" color="#38BDF8" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">AÇÃO</span>
      <strong>Rotacionar câmera</strong>
      <small>Gira a visão do jogo ao redor do centro da câmera.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
</div>

## <DocHeadingIcon icon="cube-outline" color="#34D399" /> Objetos e instâncias {#objetos-e-instancias}

<p class="node-category-copy">Criar e remover instâncias durante o jogo.</p>

<div class="node-grid">
  <a class="node-card" style="--node-card-color: #4ADE80" href="./criar-objeto">
    <span class="node-card-icon"><NodeIcon type="action-create-object" icon="cube-outline" color="#4ADE80" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">AÇÃO</span>
      <strong>Criar objeto</strong>
      <small>Cria novas instâncias durante o jogo.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #FB7185" href="./excluir-objeto">
    <span class="node-card-icon"><NodeIcon type="action-delete-object" icon="trash-outline" color="#FB7185" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">AÇÃO</span>
      <strong>Excluir objeto</strong>
      <small>Remove instâncias da cena durante o jogo.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
</div>

## <DocHeadingIcon icon="extension-puzzle-outline" color="#F59E0B" /> Comportamentos {#comportamentos}

<p class="node-category-copy">Ativar ou desativar comportamentos de um objeto.</p>

<div class="node-grid">
  <a class="node-card" style="--node-card-color: #60A5FA" href="./ativar-comportamento">
    <span class="node-card-icon"><NodeIcon type="action-set-behavior-enabled" icon="power-outline" color="#60A5FA" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">AÇÃO</span>
      <strong>Ativar comportamento</strong>
      <small>Ativa ou desativa um comportamento do objeto.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #F97316" href="./iniciar-emissor-de-particulas">
    <span class="node-card-icon"><NodeIcon type="action-start-particle-emitter" icon="play" color="#F97316" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">AÇÃO</span>
      <strong>Iniciar emissor de partículas</strong>
      <small>Inicia ou continua o emissor das instâncias escolhidas.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #FB7185" href="./parar-emissor-de-particulas">
    <span class="node-card-icon"><NodeIcon type="action-stop-particle-emitter" icon="stop" color="#FB7185" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">AÇÃO</span>
      <strong>Parar emissor de partículas</strong>
      <small>Interrompe novas partículas e deixa as atuais terminarem.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #FBBF24" href="./pausar-emissor-de-particulas">
    <span class="node-card-icon"><NodeIcon type="action-pause-particle-emitter" icon="pause" color="#FBBF24" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">AÇÃO</span>
      <strong>Pausar emissor de partículas</strong>
      <small>Pausa a emissão e o movimento das partículas atuais.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #F97316" href="./disparar-particulas">
    <span class="node-card-icon"><NodeIcon type="action-burst-particles" icon="sparkles" color="#F97316" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">AÇÃO</span>
      <strong>Disparar partículas</strong>
      <small>Cria imediatamente a quantidade de partículas escolhida.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #94A3B8" href="./limpar-particulas">
    <span class="node-card-icon"><NodeIcon type="action-clear-particles" icon="trash" color="#94A3B8" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">AÇÃO</span>
      <strong>Limpar partículas</strong>
      <small>Remove todas as partículas atuais das instâncias escolhidas.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
</div>

## <DocHeadingIcon icon="hand-left-outline" color="#FB7185" /> Interação e toque {#interacao-e-toque}

<p class="node-category-copy">Detectar clique, pressão e posição do dedo.</p>

<div class="node-grid">
  <a class="node-card" style="--node-card-color: #F472B6" href="./objeto-clicado">
    <span class="node-card-icon"><NodeIcon type="condition-object-clicked" icon="finger-print-outline" color="#F472B6" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">CONDIÇÃO</span>
      <strong>Objeto clicado</strong>
      <small>Detecta uma vez cada novo toque no objeto.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #FB923C" href="./objeto-pressionado">
    <span class="node-card-icon"><NodeIcon type="condition-object-pressed" icon="hand-left-outline" color="#FB923C" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">CONDIÇÃO</span>
      <strong>Objeto pressionado</strong>
      <small>Permanece verdadeira enquanto o objeto estiver pressionado.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #FACC15" href="./dedo-sobre-o-objeto">
    <span class="node-card-icon"><NodeIcon type="condition-finger-over-object" icon="locate-outline" color="#FACC15" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">CONDIÇÃO</span>
      <strong>Dedo sobre o objeto</strong>
      <small>Verifica se a posição atual do dedo está sobre o objeto.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #FB923C" href="./objeto-pressionado-por-um-tempo">
    <span class="node-card-icon"><NodeIcon type="condition-object-held" icon="timer-outline" color="#FB923C" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">CONDIÇÃO</span>
      <strong>Objeto pressionado por um tempo</strong>
      <small>Executa depois que o objeto permanece pressionado pelo tempo escolhido.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #F472B6" href="./objeto-clicado-x-vezes">
    <span class="node-card-icon"><NodeIcon type="condition-object-clicked-times" icon="finger-print-outline" color="#F472B6" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">CONDIÇÃO</span>
      <strong>Objeto clicado X vezes</strong>
      <small>Executa quando o objeto recebe a quantidade de cliques escolhida.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #F472B6" href="./objeto-foi-solto">
    <span class="node-card-icon"><NodeIcon type="condition-object-released" icon="hand-left-outline" color="#F472B6" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">CONDIÇÃO</span>
      <strong>Objeto foi solto</strong>
      <small>Executa uma vez quando o dedo que pressionou o objeto é levantado.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #22D3EE" href="./deslizou-sobre-o-objeto">
    <span class="node-card-icon"><NodeIcon type="condition-object-swiped" icon="swap-horizontal-outline" color="#22D3EE" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">CONDIÇÃO</span>
      <strong>Deslizou sobre o objeto</strong>
      <small>Executa uma vez quando um deslize na direção escolhida começa sobre o objeto.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #F472B6" href="./tela-foi-tocada">
    <span class="node-card-icon"><NodeIcon type="condition-screen-touched" icon="finger-print" color="#F472B6" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">CONDIÇÃO</span>
      <strong>Tela foi tocada</strong>
      <small>Dispara uma vez quando um novo toque começa na tela.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #FB923C" href="./tela-esta-pressionada">
    <span class="node-card-icon"><NodeIcon type="condition-screen-pressed" icon="hand-left" color="#FB923C" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">CONDIÇÃO</span>
      <strong>Tela está pressionada</strong>
      <small>Continua verdadeira enquanto houver um dedo na tela.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #38BDF8" href="./toque-na-tela-foi-solto">
    <span class="node-card-icon"><NodeIcon type="condition-screen-released" icon="hand-left-outline" color="#38BDF8" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">CONDIÇÃO</span>
      <strong>Toque na tela foi solto</strong>
      <small>Dispara uma vez quando um dedo é retirado da tela.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
</div>

## <DocHeadingIcon icon="server-outline" color="#FBBF24" /> Variáveis {#variaveis}

<p class="node-category-copy">Alterar dados de uma instância ou valores globais do jogo.</p>

<div class="node-grid">
  <a class="node-card" style="--node-card-color: #60A5FA" href="./alterar-variavel-do-objeto">
    <span class="node-card-icon"><NodeIcon type="action-change-object-variable" icon="calculator-outline" color="#60A5FA" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">AÇÃO</span>
      <strong>Alterar variável do objeto</strong>
      <small>Muda uma variável separadamente em cada instância escolhida.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #F4C54B" href="./alterar-variavel-global">
    <span class="node-card-icon"><NodeIcon type="action-change-global-variable" icon="globe-outline" color="#F4C54B" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">AÇÃO</span>
      <strong>Alterar variável global</strong>
      <small>Muda um valor compartilhado entre todas as cenas do jogo.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
</div>

## <DocHeadingIcon icon="eye" color="#38BDF8" /> Câmera e tela {#camera-e-tela}

<p class="node-category-copy">Detectar quando um objeto entra, permanece ou sai da área da câmera.</p>

<div class="node-grid">
  <a class="node-card" style="--node-card-color: #38BDF8" href="./objeto-entrou-na-camera">
    <span class="node-card-icon"><NodeIcon type="condition-object-entered-camera" icon="enter-outline" color="#38BDF8" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">CONDIÇÃO</span>
      <strong>Objeto entrou na câmera</strong>
      <small>Executa uma vez quando o objeto começa a aparecer na visão da câmera.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #60A5FA" href="./objeto-esta-na-camera">
    <span class="node-card-icon"><NodeIcon type="condition-object-in-camera" icon="scan-outline" color="#60A5FA" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">CONDIÇÃO</span>
      <strong>Objeto está na câmera</strong>
      <small>Continua verdadeiro enquanto o objeto estiver na visão da câmera.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #A78BFA" href="./objeto-saiu-da-camera">
    <span class="node-card-icon"><NodeIcon type="condition-object-exited-camera" icon="exit-outline" color="#A78BFA" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">CONDIÇÃO</span>
      <strong>Objeto saiu da câmera</strong>
      <small>Executa uma vez quando o objeto deixa a visão da câmera.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
</div>

## <DocHeadingIcon icon="link-outline" color="#4ADE80" /> Colisões {#colisoes}

<p class="node-category-copy">Reconhecer o começo, a duração, o fim e o lado de um contato.</p>

<div class="node-grid">
  <a class="node-card" style="--node-card-color: #FB923C" href="./objeto-comecou-a-colidir">
    <span class="node-card-icon"><NodeIcon type="condition-collision-started" icon="contract-outline" color="#FB923C" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">CONDIÇÃO</span>
      <strong>Objeto começou a colidir</strong>
      <small>Executa uma vez no instante em que os dois objetos encostam.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #4ADE80" href="./objetos-estao-colidindo">
    <span class="node-card-icon"><NodeIcon type="condition-collision-active" icon="link-outline" color="#4ADE80" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">CONDIÇÃO</span>
      <strong>Objetos estão colidindo</strong>
      <small>Continua verdadeiro enquanto os dois objetos permanecem encostados.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #60A5FA" href="./objeto-terminou-a-colisao">
    <span class="node-card-icon"><NodeIcon type="condition-collision-ended" icon="expand-outline" color="#60A5FA" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">CONDIÇÃO</span>
      <strong>Objeto terminou a colisão</strong>
      <small>Executa uma vez quando os dois objetos deixam de encostar.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #FACC15" href="./colidiu-pelo-lado">
    <span class="node-card-icon"><NodeIcon type="condition-collision-side" icon="move-outline" color="#FACC15" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">CONDIÇÃO</span>
      <strong>Colidiu pelo lado</strong>
      <small>Executa uma vez quando o objeto colide pelo lado escolhido.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
</div>

## <DocHeadingIcon icon="keypad-outline" color="#60A5FA" /> Teclado {#teclado}

<p class="node-category-copy">Reconhecer teclas mantidas, novos apertos, solturas, combinações e sequências.</p>

<div class="node-grid">
  <a class="node-card" style="--node-card-color: #60A5FA" href="./tecla-esta-pressionada">
    <span class="node-card-icon"><NodeIcon type="condition-key-down" icon="keypad-outline" color="#60A5FA" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">CONDIÇÃO</span>
      <strong>Tecla está pressionada</strong>
      <small>Executa o próximo nó enquanto a tecla escolhida estiver pressionada.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #A78BFA" href="./tecla-foi-pressionada">
    <span class="node-card-icon"><NodeIcon type="condition-key-pressed" icon="arrow-down-circle-outline" color="#A78BFA" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">CONDIÇÃO</span>
      <strong>Tecla foi pressionada</strong>
      <small>Executa uma vez quando a tecla passa de solta para pressionada.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #38BDF8" href="./tecla-foi-solta">
    <span class="node-card-icon"><NodeIcon type="condition-key-released" icon="arrow-up-circle-outline" color="#38BDF8" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">CONDIÇÃO</span>
      <strong>Tecla foi solta</strong>
      <small>Executa uma vez quando a tecla escolhida é liberada.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #F59E0B" href="./qualquer-tecla-foi-pressionada">
    <span class="node-card-icon"><NodeIcon type="condition-any-key-pressed" icon="apps-outline" color="#F59E0B" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">CONDIÇÃO</span>
      <strong>Qualquer tecla foi pressionada</strong>
      <small>Executa uma vez quando qualquer tecla compatível é pressionada.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #2DD4BF" href="./combinacao-de-teclas">
    <span class="node-card-icon"><NodeIcon type="condition-key-combination" icon="git-merge-outline" color="#2DD4BF" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">CONDIÇÃO</span>
      <strong>Combinação de teclas</strong>
      <small>Executa enquanto todas as teclas escolhidas estiverem pressionadas.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #FB923C" href="./tecla-mantida-por-um-tempo">
    <span class="node-card-icon"><NodeIcon type="condition-key-held" icon="timer-outline" color="#FB923C" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">CONDIÇÃO</span>
      <strong>Tecla mantida por um tempo</strong>
      <small>Executa depois que a tecla permanece pressionada pelo tempo escolhido.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #F472B6" href="./tecla-pressionada-x-vezes">
    <span class="node-card-icon"><NodeIcon type="condition-key-double-pressed" icon="repeat-outline" color="#F472B6" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">CONDIÇÃO</span>
      <strong>Tecla pressionada X vezes</strong>
      <small>Executa quando a tecla é pressionada a quantidade de vezes escolhida.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
</div>

## <DocHeadingIcon icon="pulse-outline" color="#4ADE80" /> Estado do objeto {#estado-do-objeto}

<p class="node-category-copy">Verificar existência, movimento, chão, pulo e outros estados.</p>

<div class="node-grid">
  <a class="node-card" style="--node-card-color: #FACC15" href="./objeto-esta-na-cena">
    <span class="node-card-icon"><NodeIcon type="condition-object-exists" icon="git-branch" color="#FACC15" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">CONDIÇÃO</span>
      <strong>Objeto está na cena</strong>
      <small>Verifica se existe uma instância do objeto na cena.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #4ADE80" href="./objeto-esta-no-chao">
    <span class="node-card-icon"><NodeIcon type="condition-object-grounded" icon="remove-circle-outline" color="#4ADE80" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">CONDIÇÃO</span>
      <strong>Objeto está no chão</strong>
      <small>Verifica se o objeto está apoiado em uma colisão.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #A78BFA" href="./objeto-esta-pulando">
    <span class="node-card-icon"><NodeIcon type="condition-object-jumping" icon="arrow-up-circle-outline" color="#A78BFA" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">CONDIÇÃO</span>
      <strong>Objeto está pulando</strong>
      <small>Verifica se o objeto está na parte ascendente do pulo.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #38BDF8" href="./objeto-esta-caindo">
    <span class="node-card-icon"><NodeIcon type="condition-object-falling" icon="arrow-down-circle-outline" color="#38BDF8" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">CONDIÇÃO</span>
      <strong>Objeto está caindo</strong>
      <small>Verifica se o objeto está descendo pela gravidade.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #2DD4BF" href="./objeto-esta-se-movendo">
    <span class="node-card-icon"><NodeIcon type="condition-object-moving" icon="trending-up-outline" color="#2DD4BF" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">CONDIÇÃO</span>
      <strong>Objeto está se movendo</strong>
      <small>Verifica movimento em qualquer direção, eixo ou ângulo.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #4ADE80" href="./objeto-foi-criado">
    <span class="node-card-icon"><NodeIcon type="condition-object-created" icon="add-circle-outline" color="#4ADE80" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">CONDIÇÃO</span>
      <strong>Objeto foi criado</strong>
      <small>Detecta o momento em que uma instância é criada.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #FB7185" href="./objeto-foi-excluido">
    <span class="node-card-icon"><NodeIcon type="condition-object-deleted" icon="remove-circle-outline" color="#FB7185" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">CONDIÇÃO</span>
      <strong>Objeto foi excluído</strong>
      <small>Detecta o momento em que uma instância é removida.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #4ADE80" href="./comportamento-esta-ativado">
    <span class="node-card-icon"><NodeIcon type="condition-behavior-enabled" icon="checkmark-circle-outline" color="#4ADE80" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">CONDIÇÃO</span>
      <strong>Comportamento está ativado</strong>
      <small>Verifica o estado de um comportamento.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #34D399" href="./objeto-comecou-a-se-mover">
    <span class="node-card-icon"><NodeIcon type="condition-object-started-moving" icon="play-circle" color="#34D399" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">CONDIÇÃO</span>
      <strong>Objeto começou a se mover</strong>
      <small>Dispara uma vez quando o objeto sai do repouso.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #FB7185" href="./objeto-parou-de-se-mover">
    <span class="node-card-icon"><NodeIcon type="condition-object-stopped-moving" icon="stop-circle" color="#FB7185" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">CONDIÇÃO</span>
      <strong>Objeto parou de se mover</strong>
      <small>Dispara uma vez quando o objeto deixa de se mover.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #A78BFA" href="./objeto-esta-visivel">
    <span class="node-card-icon"><NodeIcon type="condition-object-visible" icon="eye" color="#A78BFA" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">CONDIÇÃO</span>
      <strong>Objeto está visível</strong>
      <small>Continua verdadeira enquanto o objeto estiver visível.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #F97316" href="./emissor-de-particulas-esta-ativo">
    <span class="node-card-icon"><NodeIcon type="condition-particle-emitter-active" icon="sparkles" color="#F97316" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">CONDIÇÃO</span>
      <strong>Emissor de partículas está ativo</strong>
      <small>Continua verdadeiro enquanto o emissor estiver produzindo partículas.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #38BDF8" href="./emissao-de-particulas-terminou">
    <span class="node-card-icon"><NodeIcon type="condition-particle-emission-finished" icon="checkmark-circle" color="#38BDF8" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">CONDIÇÃO</span>
      <strong>Emissão de partículas terminou</strong>
      <small>Detecta quando os emissores da instância terminam e não restam partículas.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
</div>

## <DocHeadingIcon icon="git-compare-outline" color="#FACC15" /> Lógica e tempo {#logica-e-tempo}

<p class="node-category-copy">Comparar valores e controlar quando o fluxo continua.</p>

<div class="node-grid">
  <a class="node-card" style="--node-card-color: #60A5FA" href="./comparar-numeros">
    <span class="node-card-icon"><NodeIcon type="condition-compare-numbers" icon="git-compare-outline" color="#60A5FA" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">CONDIÇÃO</span>
      <strong>Comparar números</strong>
      <small>Compara dois números ou expressões.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #A78BFA" href="./aguardar-segundos">
    <span class="node-card-icon"><NodeIcon type="condition-wait-seconds" icon="timer-outline" color="#A78BFA" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">CONDIÇÃO</span>
      <strong>Aguardar segundos</strong>
      <small>Espera um tempo antes de continuar o fluxo.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #FBBF24" href="./variavel-foi-alterada">
    <span class="node-card-icon"><NodeIcon type="condition-variable-changed" icon="pulse" color="#FBBF24" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">CONDIÇÃO</span>
      <strong>Variável foi alterada</strong>
      <small>Dispara uma vez quando a variável escolhida muda de valor.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #22D3EE" href="./a-cada-x-segundos">
    <span class="node-card-icon"><NodeIcon type="condition-every-seconds" icon="timer-outline" color="#22D3EE" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">CONDIÇÃO</span>
      <strong>A cada X segundos</strong>
      <small>Executa novamente sempre que o intervalo escolhido é completado.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #FACC15" href="./chance-aleatoria">
    <span class="node-card-icon"><NodeIcon type="condition-random-chance" icon="dice-outline" color="#FACC15" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">CONDIÇÃO</span>
      <strong>Chance aleatória</strong>
      <small>Executa de acordo com a porcentagem de chance escolhida.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
</div>

## <DocHeadingIcon icon="repeat-outline" color="#22D3EE" /> Repetições {#repeticoes}

<p class="node-category-copy">Executar um trecho do fluxo várias vezes.</p>

<div class="node-grid">
  <a class="node-card" style="--node-card-color: #22D3EE" href="./quantidade-de-vezes">
    <span class="node-card-icon"><NodeIcon type="repeat-count" icon="repeat-outline" color="#22D3EE" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">REPETIÇÃO</span>
      <strong>Quantidade de vezes</strong>
      <small>Repete os nós conectados pela quantidade escolhida.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
</div>

## <DocHeadingIcon icon="code-slash-outline" color="#A78BFA" /> Scripts da biblioteca {#scripts-da-biblioteca}

<p class="node-category-copy">Reaproveitar um script visual salvo na biblioteca.</p>

<div class="node-grid">
  <a class="node-card" style="--node-card-color: #4ADE80" href="./executar-script">
    <span class="node-card-icon"><NodeIcon type="run-library-script" icon="code-slash" color="#4ADE80" :size="30" /></span>
    <span class="node-card-copy">
      <span class="node-card-kind">SCRIPT</span>
      <strong>Executar script</strong>
      <small>Executa um script visual salvo na biblioteca.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
</div>
