---
title: Todos os comportamentos
description: Lista completa dos comportamentos disponíveis para os objetos da Continue.
---

# <DocHeadingIcon icon="extension-puzzle-outline" color="#F59E0B" /> Todos os comportamentos

Comportamentos são funções prontas que você adiciona a um objeto. Um mesmo objeto pode combinar imagem, animação, colisão, movimento e efeitos. Eles não substituem os nós: os scripts podem controlar quando essas funções atuam.

Leia [como combinar comportamentos](/editor/combinar-comportamentos) para montar seu primeiro objeto. Abaixo, escolha uma função para conhecer seus campos, exemplos e regras.

<div class="behaviors-intro">
  <strong>14</strong>
  <span>comportamentos documentados individualmente para você encontrar rapidamente o que cada um faz.</span>
</div>

<CatalogNav :groups='[{"key":"visual-e-animacao","label":"Visual e animação","icon":"images","color":"#A78BFA","count":6},{"key":"iluminacao","label":"Iluminação","icon":"bulb","color":"#FDE047","count":2},{"key":"fisica-e-colisao","label":"Física e colisão","icon":"shapes-outline","color":"#60A5FA","count":3},{"key":"interacao","label":"Interação","icon":"hand-left-outline","color":"#38BDF8","count":2},{"key":"dados-do-objeto","label":"Dados do objeto","icon":"server-outline","color":"#60A5FA","count":1}]' />

## <DocHeadingIcon icon="images" color="#A78BFA" /> Visual e animação {#visual-e-animacao}

<p class="behavior-category-copy">Imagem, forma, resposta visual e animações do objeto.</p>

<div class="behavior-grid">
  <a class="behavior-card" style="--behavior-card-color: #F97316" href="./emitir-particulas">
    <span class="behavior-card-icon"><BehaviorIcon type="particle-emitter" color="#F97316" /></span>
    <span class="behavior-card-copy">
      <strong>Emitir partículas</strong>
      <small>Cria efeitos como fumaça, fogo, chuva e faíscas.</small>
    </span>
    <span class="behavior-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" /></span>
  </a>
  <a class="behavior-card" style="--behavior-card-color: #A78BFA" href="./sprite">
    <span class="behavior-card-icon"><BehaviorIcon type="sprite" color="#A78BFA" /></span>
    <span class="behavior-card-copy">
      <strong>Sprite</strong>
      <small>Adiciona imagens nomeadas para representar o objeto.</small>
    </span>
    <span class="behavior-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" /></span>
  </a>
  <a class="behavior-card" style="--behavior-card-color: #4ADE80" href="./animacao-com-sprites">
    <span class="behavior-card-icon"><BehaviorIcon type="animation" color="#4ADE80" /></span>
    <span class="behavior-card-copy">
      <strong>Animação com sprites</strong>
      <small>Reproduz uma sequência de sprites como uma animação.</small>
    </span>
    <span class="behavior-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" /></span>
  </a>
  <a class="behavior-card" style="--behavior-card-color: #2DD4BF" href="./animacao-de-propriedades">
    <span class="behavior-card-icon"><BehaviorIcon type="property-animation" color="#2DD4BF" /></span>
    <span class="behavior-card-copy">
      <strong>Animação de propriedades</strong>
      <small>Anima valores do objeto com keyframes organizados por nome.</small>
    </span>
    <span class="behavior-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" /></span>
  </a>
  <a class="behavior-card" style="--behavior-card-color: #F472B6" href="./crescer-ao-pressionar">
    <span class="behavior-card-icon"><BehaviorIcon type="press-scale" color="#F472B6" /></span>
    <span class="behavior-card-copy">
      <strong>Crescer ao pressionar</strong>
      <small>Muda a escala do objeto quando ele recebe um toque.</small>
    </span>
    <span class="behavior-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" /></span>
  </a>
  <a class="behavior-card" style="--behavior-card-color: #FB923C" href="./forma">
    <span class="behavior-card-icon"><BehaviorIcon type="shape" color="#FB923C" /></span>
    <span class="behavior-card-copy">
      <strong>Forma</strong>
      <small>Desenha formas configuráveis sem precisar de sprite.</small>
    </span>
    <span class="behavior-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" /></span>
  </a>
</div>

## <DocHeadingIcon icon="bulb" color="#FDE047" /> Iluminação {#iluminacao}

<p class="behavior-category-copy">Luzes, sombras e objetos que bloqueiam ou recebem luz.</p>

<div class="behavior-grid">
  <a class="behavior-card" style="--behavior-card-color: #FDE047" href="./emitir-luz">
    <span class="behavior-card-icon"><BehaviorIcon type="light-emitter" color="#FDE047" /></span>
    <span class="behavior-card-copy">
      <strong>Emitir luz</strong>
      <small>Faz o objeto iluminar a cena e projetar sombras.</small>
    </span>
    <span class="behavior-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" /></span>
  </a>
  <a class="behavior-card" style="--behavior-card-color: #94A3B8" href="./barrar-luz">
    <span class="behavior-card-icon"><BehaviorIcon type="light-blocker" color="#94A3B8" /></span>
    <span class="behavior-card-copy">
      <strong>Barrar luz</strong>
      <small>Faz o objeto bloquear luz e projetar sua área de colisão.</small>
    </span>
    <span class="behavior-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" /></span>
  </a>
</div>

## <DocHeadingIcon icon="shapes-outline" color="#60A5FA" /> Física e colisão {#fisica-e-colisao}

<p class="behavior-category-copy">Gravidade, áreas de colisão e exceções entre objetos.</p>

<div class="behavior-grid">
  <a class="behavior-card" style="--behavior-card-color: #60A5FA" href="./corpo-com-gravidade">
    <span class="behavior-card-icon"><BehaviorIcon type="gravity-body" color="#60A5FA" /></span>
    <span class="behavior-card-copy">
      <strong>Corpo com gravidade</strong>
      <small>Aplica queda, peso, atrito, impulso e resposta física ao objeto.</small>
    </span>
    <span class="behavior-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" /></span>
  </a>
  <a class="behavior-card" style="--behavior-card-color: #FBBF24" href="./colisao">
    <span class="behavior-card-icon"><BehaviorIcon type="collision" color="#FBBF24" /></span>
    <span class="behavior-card-copy">
      <strong>Colisão</strong>
      <small>Define a área de contato, os bloqueios e os gatilhos do objeto.</small>
    </span>
    <span class="behavior-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" /></span>
  </a>
  <a class="behavior-card" style="--behavior-card-color: #22D3EE" href="./ignorar-colisao">
    <span class="behavior-card-icon"><BehaviorIcon type="ignore-collision" color="#22D3EE" /></span>
    <span class="behavior-card-copy">
      <strong>Ignorar colisão</strong>
      <small>Escolhe objetos que não devem colidir com este objeto.</small>
    </span>
    <span class="behavior-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" /></span>
  </a>
</div>

## <DocHeadingIcon icon="hand-left-outline" color="#38BDF8" /> Interação {#interacao}

<p class="behavior-category-copy">Movimento controlado diretamente pelo toque da pessoa.</p>

<div class="behavior-grid">
  <a class="behavior-card" style="--behavior-card-color: #38BDF8" href="./arrastar-e-soltar">
    <span class="behavior-card-icon"><BehaviorIcon type="drag-drop" color="#38BDF8" /></span>
    <span class="behavior-card-copy">
      <strong>Arrastar e soltar</strong>
      <small>Permite mover o objeto diretamente com o dedo.</small>
    </span>
    <span class="behavior-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" /></span>
  </a>
  <a class="behavior-card" style="--behavior-card-color: #34D399" href="./mover-ate-o-toque">
    <span class="behavior-card-icon"><BehaviorIcon type="move-to-touch" color="#34D399" /></span>
    <span class="behavior-card-copy">
      <strong>Mover até o toque</strong>
      <small>Move o objeto suavemente até a posição tocada.</small>
    </span>
    <span class="behavior-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" /></span>
  </a>
</div>

## <DocHeadingIcon icon="server-outline" color="#60A5FA" /> Dados do objeto {#dados-do-objeto}

<p class="behavior-category-copy">Valores próprios guardados separadamente em cada instância.</p>

<div class="behavior-grid">
  <a class="behavior-card" style="--behavior-card-color: #60A5FA" href="./variaveis-do-objeto">
    <span class="behavior-card-icon"><BehaviorIcon type="object-variables" color="#60A5FA" /></span>
    <span class="behavior-card-copy">
      <strong>Variáveis do objeto</strong>
      <small>Guarda valores separados em cada instância do objeto.</small>
    </span>
    <span class="behavior-card-arrow"><NodeIcon type="plain" icon="chevron-forward" color="#8a8490" /></span>
  </a>
</div>
