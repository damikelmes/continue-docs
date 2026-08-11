# Visão geral do editor

O editor da cena é o espaço onde você posiciona e organiza as instâncias do jogo.

<div class="guide-grid">
  <GuideCard href="#ferramentas-de-edicao" icon="hand-left-outline" color="#a78bfa" title="Ferramentas" description="Mova a cena, edite, duplique ou exclua objetos." />
  <GuideCard href="#zoom" icon="resize-outline" color="#34d399" title="Zoom" description="Veja a cena inteira ou trabalhe perto de um pixel." />
  <GuideCard href="#posicao-da-camera" icon="videocam-outline" color="#60a5fa" title="Posição da câmera" description="Entenda o centro X e Y mostrado no editor." />
  <GuideCard href="/editor/cenas-camadas-objetos" icon="layers-outline" color="#fb923c" title="Cenas e objetos" description="Veja como o conteúdo do jogo é organizado." />
</div>

## Ferramentas de edição

### Mão

Move a visualização da cena sem alterar nenhum objeto. É a ferramenta ativada por padrão.

### Mover objeto

Seleciona uma instância e permite mudar sua posição. As setas do objeto ajudam a mover somente no eixo X ou somente no eixo Y.

### Editar

Abre as configurações da instância selecionada, como posição, tamanho, rotação e outras propriedades.

### Duplicar

Cria uma nova instância com as mesmas configurações da selecionada.

### Excluir

Remove a instância selecionada da cena.

## Zoom

Use o gesto de pinça para aproximar ou afastar. O zoom pode ser reduzido até **5%** para visualizar uma área grande e aumentado o suficiente para trabalhar com detalhes próximos de um pixel.

## Posição da câmera

O indicador discreto próximo às abas mostra a posição X e Y do centro da câmera no editor. Essas posições podem ser usadas nas expressões `camera.x` e `camera.y`.

::: tip Centralizar um objeto
Para colocar um objeto exatamente no centro da câmera, use `camera.x` na posição X e `camera.y` na posição Y.
:::
