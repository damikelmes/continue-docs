# <DocHeadingIcon icon="rocket-outline" color="#34D399" :size="22" /> Conheça a Continue

A Continue é uma engine para criar jogos pelo celular. O projeto é organizado visualmente: você cria cenas, adiciona objetos e conecta ações e condições para definir o que acontece durante o jogo.

<div class="guide-grid">
  <GuideCard href="/primeiros-passos/criar-projeto" icon="rocket-outline" color="#34d399" title="Criar um projeto" description="Defina o nome, a orientação e o tamanho da tela." />
  <GuideCard href="/editor/visao-geral" icon="construct-outline" color="#60a5fa" title="Conhecer o editor" description="Aprenda a organizar e editar a primeira cena." />
  <GuideCard href="/editor/scripts-visuais" icon="git-branch" color="#a78bfa" title="Montar a lógica" description="Conecte condições e ações no Script da cena." />
  <GuideCard href="/nos/" icon="grid-outline" color="#fb923c" title="Consultar os nós" description="Encontre cada função usando o ícone do editor." />
</div>

## <DocHeadingIcon icon="cube-outline" color="#60A5FA" /> Partes principais

| Parte | Para que serve |
| --- | --- |
| **Projeto** | Guarda as cenas, configurações, objetos e scripts do jogo. |
| **Cena** | Representa uma fase, menu ou tela do jogo. |
| **Camada** | Organiza a ordem e o grupo visual dos objetos. |
| **Objeto** | É o modelo reutilizável, como jogador, inimigo ou plataforma. |
| **Instância** | É uma cópia do objeto colocada dentro da cena. |
| **Comportamento** | Adiciona uma função pronta ao objeto, como gravidade ou colisão. |
| **Script visual** | Liga condições e ações para criar a lógica do jogo. |

## Fluxo recomendado

1. Crie o projeto e defina a resolução base.
2. Crie uma cena.
3. Adicione os objetos que serão usados.
4. Coloque instâncias desses objetos na cena.
5. Configure sprites, colisões e comportamentos.
6. Monte a lógica no **Script da cena**.
7. Teste pelo visualizador.
8. Exporte quando o jogo estiver pronto.

::: info Objeto e instância não são a mesma coisa
Alterar um objeto pode afetar todas as suas instâncias. Alterar uma instância muda somente aquela cópia colocada na cena.
:::
