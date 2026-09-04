<h1 class="doc-icon-heading">
  <span class="doc-heading-icon" style="--doc-heading-color: #60A5FA"><NodeIcon type="plain" icon="construct-outline" color="#60A5FA" :size="21" /></span>
  <span>Visão geral do editor</span>
</h1>

O editor da cena é o espaço onde você posiciona e organiza as instâncias do jogo.

<div class="guide-grid">
  <GuideCard href="#botoes-principais" icon="play" color="#4ade80" title="Botões principais" description="Teste a cena, adicione uma instância ou abra o Script da cena." />
  <GuideCard href="#abas-do-editor" icon="apps-outline" color="#facc15" title="Abas do editor" description="Abra Objetos, Instâncias, Script e Camadas." />
  <GuideCard href="#ferramentas-de-edicao" icon="hand-left-outline" color="#a78bfa" title="Ferramentas" description="Mova a cena, edite, duplique ou exclua objetos." />
  <GuideCard href="#zoom" icon="resize-outline" color="#34d399" title="Zoom" description="Veja a cena inteira ou trabalhe perto de um pixel." />
  <GuideCard href="#posicao-da-camera" icon="videocam-outline" color="#60a5fa" title="Posição da câmera" description="Entenda o centro X e Y mostrado no editor." />
  <GuideCard href="/editor/cenas-camadas-objetos" icon="layers-outline" color="#fb923c" title="Cenas e objetos" description="Veja como o conteúdo do jogo é organizado." />
</div>

<h2 id="botoes-principais" class="doc-icon-heading">
  <span class="doc-heading-icon" style="--doc-heading-color: #4ADE80"><NodeIcon type="plain" icon="play" color="#4ADE80" :size="19" /></span>
  <span>Botões principais</span>
</h2>

Esses botões ficam na parte de cima do editor e cuidam das ações mais usadas enquanto você monta a cena.

<h3 id="play" class="doc-icon-heading">
  <span class="doc-heading-icon doc-heading-icon--tool"><NodeIcon type="plain" icon="play" color="#4ADE80" :size="17" /></span>
  <span>Play</span>
</h3>

Abre o visualizador para testar a cena atual e ver o resultado dos objetos, scripts, câmera, colisões e comportamentos.

<h3 id="adicionar-instancia" class="doc-icon-heading">
  <span class="doc-heading-icon doc-heading-icon--tool"><NodeIcon type="plain" icon="add" color="#60A5FA" :size="18" /></span>
  <span>Adicionar instância (+)</span>
</h3>

Coloca uma nova instância de um objeto na cena atual. Primeiro você escolhe um objeto que já existe no projeto e depois posiciona a cópia no editor.

::: info Objeto e instância não são a mesma coisa
**Objeto** é a definição guardada no projeto, como Jogador ou Inimigo. **Instância** é uma cópia desse objeto colocada dentro de uma cena. O botão **+** adiciona uma instância; se ainda não houver nenhum objeto, o editor orienta você a criar o primeiro.
:::

<h3 id="script-da-cena" class="doc-icon-heading">
  <span class="doc-heading-icon doc-heading-icon--tool"><NodeIcon type="plain" icon="document-text" color="#A78BFA" :size="17" /></span>
  <span>Script da cena</span>
</h3>

Abre o script visual principal da cena atual. É nele que você monta os fluxos que começam e controlam essa cena, como mover o personagem, centralizar a câmera, criar inimigos e verificar condições.

<h2 id="abas-do-editor" class="doc-icon-heading">
  <span class="doc-heading-icon" style="--doc-heading-color: #FACC15"><NodeIcon type="plain" icon="apps-outline" color="#FACC15" :size="19" /></span>
  <span>Abas da parte inferior</span>
</h2>

As quatro abas ficam na barra inferior. Cada uma abre uma parte diferente do projeto sem mudar a ferramenta usada na cena.

<h3 id="objetos" class="doc-icon-heading">
  <span class="doc-heading-icon doc-heading-icon--tool"><NodeIcon type="plain" icon="cube-outline" color="#60A5FA" :size="17" /></span>
  <span>Objetos</span>
</h3>

Mostra a biblioteca de objetos do projeto. Aqui você cria e configura o objeto original, incluindo nome, sprite, forma, tamanho e comportamentos. Um mesmo objeto pode ser usado em várias cenas.

<h3 id="instancias" class="doc-icon-heading">
  <span class="doc-heading-icon doc-heading-icon--tool"><NodeIcon type="plain" icon="layers-outline" color="#FACC15" :size="17" /></span>
  <span>Instâncias</span>
</h3>

Mostra as cópias de objetos que foram colocadas na cena atual. Use essa aba para encontrar e selecionar uma instância específica, principalmente quando existem objetos sobrepostos ou fora da área visível.

<h3 id="script" class="doc-icon-heading">
  <span class="doc-heading-icon doc-heading-icon--tool"><NodeIcon type="plain" icon="code-slash-outline" color="#4ADE80" :size="17" /></span>
  <span>Script</span>
</h3>

Abre a biblioteca de scripts reutilizáveis do projeto. Você pode criar um script com nome próprio e chamá-lo onde precisar usando o nó **Executar script**.

::: tip Script da cena e Script
**Script da cena** controla diretamente a cena atual. A aba **Script** guarda rotinas reutilizáveis, que só são executadas quando um fluxo as chama. Existe também o **Script global**, na página de cenas, executado antes do Script da cena. Veja [onde colocar cada regra](/editor/tipos-de-script).
:::

<h3 id="camadas" class="doc-icon-heading">
  <span class="doc-heading-icon doc-heading-icon--tool"><NodeIcon type="plain" icon="layers" color="#A78BFA" :size="17" /></span>
  <span>Camadas</span>
</h3>

Organiza os objetos da cena em grupos de desenho. Camadas ajudam a separar fundo, jogo e interface, além de controlar onde uma instância nova será criada. A ordem Z organiza os objetos dentro da camada escolhida.

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

O indicador próximo às abas mostra o centro da visualização no editor. Durante o jogo, `camera.x` e `camera.y` consultam o centro da câmera em execução, que pode mudar por ações do script. Mover a visualização para editar não é a mesma coisa que executar uma ação de câmera no jogo.

::: tip Centralizar um objeto
Para colocar um objeto exatamente no centro da câmera, use `camera.x` na posição X e `camera.y` na posição Y.
:::
