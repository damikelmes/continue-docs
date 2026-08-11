<h1 class="doc-icon-heading">
  <span class="doc-heading-icon" style="--doc-heading-color: #60A5FA"><NodeIcon type="plain" icon="construct-outline" color="#60A5FA" :size="21" /></span>
  <span>Visão geral do editor</span>
</h1>

O editor da cena é o espaço onde você posiciona e organiza as instâncias do jogo.

<div class="guide-grid">
  <GuideCard href="#ferramentas-de-edicao" icon="hand-left-outline" color="#a78bfa" title="Ferramentas" description="Mova a cena, edite, duplique ou exclua objetos." />
  <GuideCard href="#zoom" icon="resize-outline" color="#34d399" title="Zoom" description="Veja a cena inteira ou trabalhe perto de um pixel." />
  <GuideCard href="#posicao-da-camera" icon="videocam-outline" color="#60a5fa" title="Posição da câmera" description="Entenda o centro X e Y mostrado no editor." />
  <GuideCard href="/editor/cenas-camadas-objetos" icon="layers-outline" color="#fb923c" title="Cenas e objetos" description="Veja como o conteúdo do jogo é organizado." />
</div>

<h2 id="ferramentas-de-edicao" class="doc-icon-heading">
  <span class="doc-heading-icon" style="--doc-heading-color: #A78BFA"><NodeIcon type="plain" icon="hand-left-outline" color="#A78BFA" :size="19" /></span>
  <span>Ferramentas de edição</span>
</h2>

<h3 id="mao" class="doc-icon-heading">
  <span class="doc-heading-icon doc-heading-icon--tool doc-heading-icon--active"><NodeIcon type="plain" icon="hand-left-outline" color="#FFFFFF" :size="17" /></span>
  <span>Mão</span>
</h3>

Move a visualização da cena sem alterar nenhum objeto. É a ferramenta ativada por padrão.

<h3 id="mover-objeto" class="doc-icon-heading">
  <span class="doc-heading-icon doc-heading-icon--tool doc-heading-icon--active"><NodeIcon type="plain" icon="move-outline" color="#FFFFFF" :size="17" /></span>
  <span>Mover objeto</span>
</h3>

Seleciona uma instância e permite mudar sua posição. As setas do objeto ajudam a mover somente no eixo X ou somente no eixo Y.

<h3 id="editar" class="doc-icon-heading">
  <span class="doc-heading-icon doc-heading-icon--tool"><NodeIcon type="plain" icon="create-outline" color="#FACC15" :size="17" /></span>
  <span>Editar</span>
</h3>

Abre as configurações da instância selecionada, como posição, tamanho, rotação e outras propriedades.

<h3 id="duplicar" class="doc-icon-heading">
  <span class="doc-heading-icon doc-heading-icon--tool"><NodeIcon type="plain" icon="copy-outline" color="#60A5FA" :size="17" /></span>
  <span>Duplicar</span>
</h3>

Cria uma nova instância com as mesmas configurações da selecionada.

<h3 id="excluir" class="doc-icon-heading">
  <span class="doc-heading-icon doc-heading-icon--tool"><NodeIcon type="plain" icon="trash-outline" color="#FB7185" :size="17" /></span>
  <span>Excluir</span>
</h3>

Remove a instância selecionada da cena.

<h2 id="zoom" class="doc-icon-heading">
  <span class="doc-heading-icon" style="--doc-heading-color: #34D399"><NodeIcon type="plain" icon="resize-outline" color="#34D399" :size="19" /></span>
  <span>Zoom</span>
</h2>

Use o gesto de pinça para aproximar ou afastar. O zoom pode ser reduzido até **5%** para visualizar uma área grande e aumentado o suficiente para trabalhar com detalhes próximos de um pixel.

<h2 id="posicao-da-camera" class="doc-icon-heading">
  <span class="doc-heading-icon" style="--doc-heading-color: #60A5FA"><NodeIcon type="plain" icon="videocam-outline" color="#60A5FA" :size="19" /></span>
  <span>Posição da câmera</span>
</h2>

O indicador discreto próximo às abas mostra a posição X e Y do centro da câmera no editor. Essas posições podem ser usadas nas expressões `camera.x` e `camera.y`.

::: tip Centralizar um objeto
Para colocar um objeto exatamente no centro da câmera, use `camera.x` na posição X e `camera.y` na posição Y.
:::
