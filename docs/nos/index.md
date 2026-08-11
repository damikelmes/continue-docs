---
title: Todos os nós
description: Lista completa dos nós disponíveis no editor da Continue.
---

# <DocHeadingIcon icon="grid-outline" color="#A78BFA" :size="22" /> Todos os nós

Esta página segue as mesmas categorias, nomes, cores e ícones mostrados no seletor de nós do editor. Toque em um nó para abrir sua explicação completa.

<div class="nodes-intro">
  <strong>49</strong>
  <span>nós documentados individualmente, cada um com campos, exemplo e regras de uso.</span>
</div>

## <DocHeadingIcon icon="navigate-circle-outline" color="#60A5FA" /> Movimento e posição

<p class="node-category-copy">Mover, redimensionar, girar e fazer objetos seguirem outros objetos.</p>

<div class="node-grid">
  <a class="node-card" style="--node-card-color: #A78BFA" href="./transicionar-propriedade">
    <span class="node-card-icon"><NodeIcon type="action-transition-object-property" icon="pulse-outline" color="#A78BFA" :size="30" /></span>
    <span class="node-card-copy">
      <strong>Transicionar propriedade</strong>
      <small>Anima uma propriedade do valor atual até o valor final.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #FB923C" href="./chacoalhar-objeto">
    <span class="node-card-icon"><NodeIcon type="action-shake-object" icon="cube-outline" color="#FB923C" :size="30" /></span>
    <span class="node-card-copy">
      <strong>Chacoalhar objeto</strong>
      <small>Sacode o visual do objeto sem mudar sua posição real.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #38BDF8" href="./orbitar-objeto">
    <span class="node-card-icon"><NodeIcon type="action-orbit-object" icon="planet-outline" color="#38BDF8" :size="30" /></span>
    <span class="node-card-copy">
      <strong>Orbitar objeto</strong>
      <small>Faz um objeto girar continuamente ao redor de outro.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #34D399" href="./seguir-objeto">
    <span class="node-card-icon"><NodeIcon type="action-follow-object" icon="navigate-circle-outline" color="#34D399" :size="30" /></span>
    <span class="node-card-copy">
      <strong>Seguir objeto</strong>
      <small>Move um objeto até outro mantendo uma distância escolhida.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #60A5FA" href="./mudar-posicao-x">
    <span class="node-card-icon"><NodeIcon type="action-set-object-x" icon="swap-horizontal-outline" color="#60A5FA" :size="30" /></span>
    <span class="node-card-copy">
      <strong>Mudar posição X</strong>
      <small>Altera apenas a posição horizontal do objeto.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #38BDF8" href="./mudar-posicao-y">
    <span class="node-card-icon"><NodeIcon type="action-set-object-y" icon="swap-vertical-outline" color="#38BDF8" :size="30" /></span>
    <span class="node-card-copy">
      <strong>Mudar posição Y</strong>
      <small>Altera apenas a posição vertical do objeto.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #A78BFA" href="./mudar-largura">
    <span class="node-card-icon"><NodeIcon type="action-set-object-width" icon="resize-outline" color="#A78BFA" :size="30" /></span>
    <span class="node-card-copy">
      <strong>Mudar largura</strong>
      <small>Muda a largura do objeto durante o jogo.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #C084FC" href="./mudar-altura">
    <span class="node-card-icon"><NodeIcon type="action-set-object-height" icon="resize-outline" color="#C084FC" :size="30" /></span>
    <span class="node-card-copy">
      <strong>Mudar altura</strong>
      <small>Muda a altura do objeto durante o jogo.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #60A5FA" href="./mover-em-x">
    <span class="node-card-icon"><NodeIcon type="action-move-object-x" icon="speedometer-outline" color="#60A5FA" :size="30" /></span>
    <span class="node-card-copy">
      <strong>Mover em X</strong>
      <small>Move o objeto horizontalmente usando velocidade e aceleração.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #38BDF8" href="./mover-em-y">
    <span class="node-card-icon"><NodeIcon type="action-move-object-y" icon="trending-up-outline" color="#38BDF8" :size="30" /></span>
    <span class="node-card-copy">
      <strong>Mover em Y</strong>
      <small>Move o objeto verticalmente usando velocidade e aceleração.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #2DD4BF" href="./mover-em-graus">
    <span class="node-card-icon"><NodeIcon type="action-move-object-angle" icon="compass-outline" color="#2DD4BF" :size="30" /></span>
    <span class="node-card-copy">
      <strong>Mover em graus</strong>
      <small>Move o objeto na direção de um ângulo.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #4ADE80" href="./pular-objeto">
    <span class="node-card-icon"><NodeIcon type="action-jump-object" icon="arrow-up-circle" color="#4ADE80" :size="30" /></span>
    <span class="node-card-copy">
      <strong>Pular objeto</strong>
      <small>Aplica uma força de pulo a um objeto no chão.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #F59E0B" href="./rotacionar-objeto">
    <span class="node-card-icon"><NodeIcon type="action-rotate-object" icon="refresh-outline" color="#F59E0B" :size="30" /></span>
    <span class="node-card-copy">
      <strong>Rotacionar objeto</strong>
      <small>Altera a rotação completa do objeto.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #FB7185" href="./rotacionar-sprite">
    <span class="node-card-icon"><NodeIcon type="action-rotate-sprite" icon="sync-outline" color="#FB7185" :size="30" /></span>
    <span class="node-card-copy">
      <strong>Rotacionar sprite</strong>
      <small>Gira somente o sprite do objeto.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #FB923C" href="./alterar-escala">
    <span class="node-card-icon"><NodeIcon type="action-set-object-scale" icon="expand-outline" color="#FB923C" :size="30" /></span>
    <span class="node-card-copy">
      <strong>Alterar escala</strong>
      <small>Aumenta ou diminui o objeto proporcionalmente.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
</div>

## <DocHeadingIcon icon="color-palette-outline" color="#C084FC" /> Aparência

<p class="node-category-copy">Sprites, animações, cor, transparência e ordem de desenho.</p>

<div class="node-grid">
  <a class="node-card" style="--node-card-color: #C084FC" href="./trocar-sprite">
    <span class="node-card-icon"><NodeIcon type="action-set-object-sprite" icon="images" color="#C084FC" :size="30" /></span>
    <span class="node-card-copy">
      <strong>Trocar sprite</strong>
      <small>Troca a imagem exibida pelo objeto.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #4ADE80" href="./trocar-animacao">
    <span class="node-card-icon"><NodeIcon type="action-set-object-animation" icon="film" color="#4ADE80" :size="30" /></span>
    <span class="node-card-copy">
      <strong>Trocar animação</strong>
      <small>Reproduz uma animação de sprites pelo nome.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #2DD4BF" href="./reproduzir-animacao-de-propriedades">
    <span class="node-card-icon"><NodeIcon type="action-play-property-animation" icon="play-circle-outline" color="#2DD4BF" :size="30" /></span>
    <span class="node-card-copy">
      <strong>Reproduzir animação de propriedades</strong>
      <small>Inicia ou continua uma animação de propriedades.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #38BDF8" href="./recomecar-animacao-de-propriedades">
    <span class="node-card-icon"><NodeIcon type="action-restart-property-animation" icon="refresh-circle-outline" color="#38BDF8" :size="30" /></span>
    <span class="node-card-copy">
      <strong>Recomeçar animação de propriedades</strong>
      <small>Reinicia uma animação de propriedades no primeiro quadro.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #FBBF24" href="./pausar-animacao-de-propriedades">
    <span class="node-card-icon"><NodeIcon type="action-pause-property-animation" icon="pause-circle-outline" color="#FBBF24" :size="30" /></span>
    <span class="node-card-copy">
      <strong>Pausar animação de propriedades</strong>
      <small>Pausa a animação sem perder o progresso.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #2DD4BF" href="./alterar-transparencia">
    <span class="node-card-icon"><NodeIcon type="action-set-object-opacity" icon="water-outline" color="#2DD4BF" :size="30" /></span>
    <span class="node-card-copy">
      <strong>Alterar transparência</strong>
      <small>Muda o quanto o objeto está visível.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #F472B6" href="./alterar-tonalidade">
    <span class="node-card-icon"><NodeIcon type="action-set-object-tint" icon="color-palette-outline" color="#F472B6" :size="30" /></span>
    <span class="node-card-copy">
      <strong>Alterar tonalidade</strong>
      <small>Aplica uma cor sobre o visual do objeto.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #34D399" href="./inverter-objeto">
    <span class="node-card-icon"><NodeIcon type="action-flip-object" icon="swap-horizontal-outline" color="#34D399" :size="30" /></span>
    <span class="node-card-copy">
      <strong>Inverter objeto</strong>
      <small>Espelha o objeto instantaneamente.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #2DD4BF" href="./flipar-objeto">
    <span class="node-card-icon"><NodeIcon type="action-flip-object-animated" icon="swap-horizontal-outline" color="#2DD4BF" :size="30" /></span>
    <span class="node-card-copy">
      <strong>Flipar objeto</strong>
      <small>Espelha o objeto com uma animação de virada.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #818CF8" href="./alterar-ordem-z">
    <span class="node-card-icon"><NodeIcon type="action-set-object-z-index" icon="layers-outline" color="#818CF8" :size="30" /></span>
    <span class="node-card-copy">
      <strong>Alterar ordem Z</strong>
      <small>Muda a ordem em que o objeto é desenhado.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
</div>

## <DocHeadingIcon icon="videocam-outline" color="#22D3EE" /> Câmera

<p class="node-category-copy">Posição, acompanhamento, zoom e tremor da câmera.</p>

<div class="node-grid">
  <a class="node-card" style="--node-card-color: #22D3EE" href="./camera-suave">
    <span class="node-card-icon"><NodeIcon type="action-follow-camera-on-object" icon="navigate-circle-outline" color="#22D3EE" :size="30" /></span>
    <span class="node-card-copy">
      <strong>Câmera suave</strong>
      <small>Faz a câmera acompanhar um objeto com suavidade.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #60A5FA" href="./centralizar-camera">
    <span class="node-card-icon"><NodeIcon type="action-center-camera-on-object" icon="videocam" color="#60A5FA" :size="30" /></span>
    <span class="node-card-copy">
      <strong>Centralizar câmera</strong>
      <small>Coloca o centro da câmera exatamente no centro do objeto.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #60A5FA" href="./mudar-posicao-x-da-camera">
    <span class="node-card-icon"><NodeIcon type="action-set-camera-x" icon="arrow-forward-circle-outline" color="#60A5FA" :size="30" /></span>
    <span class="node-card-copy">
      <strong>Mudar posição X da câmera</strong>
      <small>Altera apenas o centro horizontal da câmera.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #38BDF8" href="./mudar-posicao-y-da-camera">
    <span class="node-card-icon"><NodeIcon type="action-set-camera-y" icon="arrow-down-circle-outline" color="#38BDF8" :size="30" /></span>
    <span class="node-card-copy">
      <strong>Mudar posição Y da câmera</strong>
      <small>Altera apenas o centro vertical da câmera.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #F59E0B" href="./chacoalhar-camera">
    <span class="node-card-icon"><NodeIcon type="action-shake-camera" icon="videocam-outline" color="#F59E0B" :size="30" /></span>
    <span class="node-card-copy">
      <strong>Chacoalhar câmera</strong>
      <small>Sacode a visão da cena sem mudar o centro lógico da câmera.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #A78BFA" href="./dar-zoom-na-camera">
    <span class="node-card-icon"><NodeIcon type="action-set-camera-zoom" icon="search-outline" color="#A78BFA" :size="30" /></span>
    <span class="node-card-copy">
      <strong>Dar zoom na câmera</strong>
      <small>Altera o nível de aproximação da câmera.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
</div>

## <DocHeadingIcon icon="cube-outline" color="#34D399" /> Objetos e instâncias

<p class="node-category-copy">Criar e remover instâncias durante o jogo.</p>

<div class="node-grid">
  <a class="node-card" style="--node-card-color: #4ADE80" href="./criar-objeto">
    <span class="node-card-icon"><NodeIcon type="action-create-object" icon="cube-outline" color="#4ADE80" :size="30" /></span>
    <span class="node-card-copy">
      <strong>Criar objeto</strong>
      <small>Cria novas instâncias durante o jogo.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #FB7185" href="./excluir-objeto">
    <span class="node-card-icon"><NodeIcon type="action-delete-object" icon="trash-outline" color="#FB7185" :size="30" /></span>
    <span class="node-card-copy">
      <strong>Excluir objeto</strong>
      <small>Remove instâncias da cena durante o jogo.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
</div>

## <DocHeadingIcon icon="extension-puzzle-outline" color="#F59E0B" /> Comportamentos

<p class="node-category-copy">Ativar ou desativar comportamentos de um objeto.</p>

<div class="node-grid">
  <a class="node-card" style="--node-card-color: #60A5FA" href="./ativar-comportamento">
    <span class="node-card-icon"><NodeIcon type="action-set-behavior-enabled" icon="power-outline" color="#60A5FA" :size="30" /></span>
    <span class="node-card-copy">
      <strong>Ativar comportamento</strong>
      <small>Ativa ou desativa um comportamento do objeto.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
</div>

## <DocHeadingIcon icon="hand-left-outline" color="#FB7185" /> Interação e toque

<p class="node-category-copy">Detectar clique, pressão e posição do dedo.</p>

<div class="node-grid">
  <a class="node-card" style="--node-card-color: #F472B6" href="./objeto-clicado">
    <span class="node-card-icon"><NodeIcon type="condition-object-clicked" icon="finger-print-outline" color="#F472B6" :size="30" /></span>
    <span class="node-card-copy">
      <strong>Objeto clicado</strong>
      <small>Detecta uma vez cada novo toque no objeto.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #FB923C" href="./objeto-pressionado">
    <span class="node-card-icon"><NodeIcon type="condition-object-pressed" icon="hand-left-outline" color="#FB923C" :size="30" /></span>
    <span class="node-card-copy">
      <strong>Objeto pressionado</strong>
      <small>Permanece verdadeira enquanto o objeto estiver pressionado.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #FACC15" href="./dedo-sobre-o-objeto">
    <span class="node-card-icon"><NodeIcon type="condition-finger-over-object" icon="locate-outline" color="#FACC15" :size="30" /></span>
    <span class="node-card-copy">
      <strong>Dedo sobre o objeto</strong>
      <small>Verifica se a posição atual do dedo está sobre o objeto.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
</div>

## <DocHeadingIcon icon="pulse-outline" color="#4ADE80" /> Estado do objeto

<p class="node-category-copy">Verificar existência, movimento, chão, pulo e outros estados.</p>

<div class="node-grid">
  <a class="node-card" style="--node-card-color: #FACC15" href="./objeto-esta-na-cena">
    <span class="node-card-icon"><NodeIcon type="condition-object-exists" icon="git-branch" color="#FACC15" :size="30" /></span>
    <span class="node-card-copy">
      <strong>Objeto está na cena</strong>
      <small>Verifica se existe uma instância do objeto na cena.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #4ADE80" href="./objeto-esta-no-chao">
    <span class="node-card-icon"><NodeIcon type="condition-object-grounded" icon="remove-circle-outline" color="#4ADE80" :size="30" /></span>
    <span class="node-card-copy">
      <strong>Objeto está no chão</strong>
      <small>Verifica se o objeto está apoiado em uma colisão.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #A78BFA" href="./objeto-esta-pulando">
    <span class="node-card-icon"><NodeIcon type="condition-object-jumping" icon="arrow-up-circle-outline" color="#A78BFA" :size="30" /></span>
    <span class="node-card-copy">
      <strong>Objeto está pulando</strong>
      <small>Verifica se o objeto está na parte ascendente do pulo.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #38BDF8" href="./objeto-esta-caindo">
    <span class="node-card-icon"><NodeIcon type="condition-object-falling" icon="arrow-down-circle-outline" color="#38BDF8" :size="30" /></span>
    <span class="node-card-copy">
      <strong>Objeto está caindo</strong>
      <small>Verifica se o objeto está descendo pela gravidade.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #2DD4BF" href="./objeto-esta-se-movendo">
    <span class="node-card-icon"><NodeIcon type="condition-object-moving" icon="trending-up-outline" color="#2DD4BF" :size="30" /></span>
    <span class="node-card-copy">
      <strong>Objeto está se movendo</strong>
      <small>Verifica movimento em qualquer direção, eixo ou ângulo.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #4ADE80" href="./objeto-foi-criado">
    <span class="node-card-icon"><NodeIcon type="condition-object-created" icon="add-circle-outline" color="#4ADE80" :size="30" /></span>
    <span class="node-card-copy">
      <strong>Objeto foi criado</strong>
      <small>Detecta o momento em que uma instância é criada.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #FB7185" href="./objeto-foi-excluido">
    <span class="node-card-icon"><NodeIcon type="condition-object-deleted" icon="remove-circle-outline" color="#FB7185" :size="30" /></span>
    <span class="node-card-copy">
      <strong>Objeto foi excluído</strong>
      <small>Detecta o momento em que uma instância é removida.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #4ADE80" href="./comportamento-esta-ativado">
    <span class="node-card-icon"><NodeIcon type="condition-behavior-enabled" icon="checkmark-circle-outline" color="#4ADE80" :size="30" /></span>
    <span class="node-card-copy">
      <strong>Comportamento está ativado</strong>
      <small>Verifica o estado de um comportamento.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
</div>

## <DocHeadingIcon icon="git-compare-outline" color="#FACC15" /> Lógica e tempo

<p class="node-category-copy">Comparar valores e controlar quando o fluxo continua.</p>

<div class="node-grid">
  <a class="node-card" style="--node-card-color: #60A5FA" href="./comparar-numeros">
    <span class="node-card-icon"><NodeIcon type="condition-compare-numbers" icon="git-compare-outline" color="#60A5FA" :size="30" /></span>
    <span class="node-card-copy">
      <strong>Comparar números</strong>
      <small>Compara dois números ou expressões.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
  <a class="node-card" style="--node-card-color: #A78BFA" href="./aguardar-segundos">
    <span class="node-card-icon"><NodeIcon type="condition-wait-seconds" icon="timer-outline" color="#A78BFA" :size="30" /></span>
    <span class="node-card-copy">
      <strong>Aguardar segundos</strong>
      <small>Espera um tempo antes de continuar o fluxo.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
</div>

## <DocHeadingIcon icon="repeat-outline" color="#22D3EE" /> Repetições

<p class="node-category-copy">Executar um trecho do fluxo várias vezes.</p>

<div class="node-grid">
  <a class="node-card" style="--node-card-color: #22D3EE" href="./quantidade-de-vezes">
    <span class="node-card-icon"><NodeIcon type="repeat-count" icon="repeat-outline" color="#22D3EE" :size="30" /></span>
    <span class="node-card-copy">
      <strong>Quantidade de vezes</strong>
      <small>Repete os nós conectados pela quantidade escolhida.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
</div>

## <DocHeadingIcon icon="code-slash-outline" color="#A78BFA" /> Scripts da biblioteca

<p class="node-category-copy">Reaproveitar um script visual salvo na biblioteca.</p>

<div class="node-grid">
  <a class="node-card" style="--node-card-color: #4ADE80" href="./executar-script">
    <span class="node-card-icon"><NodeIcon type="run-library-script" icon="code-slash" color="#4ADE80" :size="30" /></span>
    <span class="node-card-copy">
      <strong>Executar script</strong>
      <small>Executa um script visual salvo na biblioteca.</small>
    </span>
    <span class="node-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" /></span>
  </a>
</div>
