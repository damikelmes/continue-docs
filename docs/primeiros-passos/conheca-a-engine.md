# <DocHeadingIcon icon="rocket-outline" color="#34D399" :size="22" /> Conheça a Continue

A Continue é uma engine para criar jogos pelo celular. Você monta o projeto visualmente: cria cenas, coloca objetos, adiciona comportamentos e conecta ações e condições para definir o que acontece durante o jogo.

<div class="guide-grid">
  <GuideCard href="/primeiros-passos/criar-projeto" icon="game-controller-outline" color="#34d399" title="Criar um projeto" description="Defina o nome, a orientação e o tamanho da tela." />
  <GuideCard href="/editor/visao-geral" icon="construct-outline" color="#60a5fa" title="Conhecer o editor" description="Organize e edite a primeira cena." />
  <GuideCard href="/editor/scripts-visuais" icon="git-branch" color="#a78bfa" title="Montar a lógica" description="Conecte condições e ações no Script da cena." />
  <GuideCard href="/exportacao/" icon="share-outline" color="#67e8f9" title="Exportar o jogo" description="Gere versões para Android, Windows e Web." />
</div>

## <DocHeadingIcon icon="folder-outline" color="#A78BFA" /> Projeto

O projeto reúne as cenas, configurações, objetos e scripts do jogo. Nome, ícone, versão, orientação e resolução também são definidos nele.

## <DocHeadingIcon icon="images-outline" color="#60A5FA" /> Cena e camada

Uma **cena** pode representar uma fase, um menu ou qualquer tela do jogo. As **camadas** ajudam a organizar grupos de elementos e a ordem em que aparecem.

## <DocHeadingIcon icon="cube-outline" color="#FB923C" /> Objeto e instância

O **objeto** é o modelo reutilizável, como jogador, inimigo ou plataforma. A **instância** é uma cópia desse objeto colocada dentro de uma cena.

::: info Objeto e instância não são a mesma coisa
Alterar um objeto pode afetar todas as suas instâncias. Alterar uma instância muda somente aquela cópia colocada na cena.
:::

## <DocHeadingIcon icon="extension-puzzle-outline" color="#34D399" /> Comportamento

Um comportamento adiciona ao objeto uma função já preparada, como colisão, gravidade, movimento, animação ou iluminação. Você escolhe os valores e pode ativar ou desativar o comportamento durante o jogo.

## <DocHeadingIcon type="flow-glyph" icon="git-branch" color="#F472B6" /> Script visual

O **Script da cena** liga condições e ações em fluxos. Ele controla regras como mover o personagem, trocar uma animação, criar objetos ou mudar a câmera.

## <DocHeadingIcon icon="map-outline" color="#C4B5FD" /> Caminho recomendado

1. Crie o projeto e defina a resolução base.
2. Crie uma cena.
3. Adicione os objetos que serão usados.
4. Coloque instâncias desses objetos na cena.
5. Configure aparência, colisões e comportamentos.
6. Monte a lógica no **Script da cena**.
7. Teste pelo visualizador e faça os ajustes necessários.
8. Exporte para Android, Windows ou Web.

Quando precisar entender uma opção, use a busca da documentação ou consulte as páginas de nós, comportamentos e expressões. Elas seguem os nomes e ícones mostrados no editor.
