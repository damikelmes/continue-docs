# <DocHeadingIcon icon="code-slash-outline" color="#4ADE80" :size="22" /> Scripts visuais

Os scripts visuais são formados por nós. Cada nó pode verificar uma condição, executar uma ação, repetir uma parte do script ou chamar outro script. As conexões mostram quais nós pertencem ao mesmo fluxo.

Pense em uma regra simples: **quando o botão for clicado, mova a porta**. A condição pergunta se houve o clique; a ação diz o que fazer. Você monta essa regra escolhendo nós e preenchendo seus campos.

## <DocHeadingIcon icon="add" color="#60A5FA" /> Seu primeiro fluxo

1. Crie os objetos Botão e Porta e coloque uma instância de cada na cena.
2. Abra o **Script da cena** e adicione a condição **Objeto clicado**.
3. No campo de objeto da condição, escolha Botão.
4. Abaixo dela, adicione um nó **Conectado** e escolha **Mudar posição Y**.
5. Na ação, escolha Porta, confira as instâncias de destino e defina o Y final.
6. Use **Play** para testar: ao tocar no botão, a porta muda de posição.

<FlowExample variant="first-flow" />

Para uma abertura gradual, troque a ação por **Transicionar propriedade**, escolha Posição Y e configure o destino e a animação. O primeiro exemplo muda a posição diretamente; a transição leva tempo para chegar.

::: tip Leia cada card como uma frase
Veja o nome do nó, o objeto escolhido e os valores. Uma ação ainda precisa de um destino e uma configuração coerentes, mesmo quando já está conectada.
:::

<div class="guide-grid">
  <GuideCard href="#ordem-de-execucao" icon="git-branch" color="#a78bfa" title="Ordem de execução" description="Entenda qual fluxo começa primeiro e qual valor cada nó lê." />
  <GuideCard href="/nos/" icon="grid-outline" color="#60a5fa" title="Todos os nós" description="Consulte os mesmos nomes, cores e ícones do editor." />
  <GuideCard href="/expressoes/" icon="calculator-outline" color="#2dd4bf" title="Expressões" description="Use posições, tempo, toque, velocidade e cálculos." />
  <GuideCard href="/condicoes/repeticoes-e-execucao" icon="repeat-outline" color="#fb923c" title="Execução" description="Escolha entre Sempre, Uma única vez, Quantidade e Por tempo." />
</div>

## <DocHeadingIcon icon="git-branch" color="#A78BFA" /> Como ler um fluxo

### <DocHeadingIcon icon="git-branch" color="#A78BFA" :size="17" /> Nó conectado

Um nó conectado continua a sequência iniciada pelo nó anterior. A linha colorida entre os cards mostra essa ligação.

Se o primeiro nó for uma condição, os nós conectados abaixo somente serão executados quando ela tiver o resultado esperado. Quando a condição for falsa, a engine pula aquela continuação e procura o próximo fluxo independente.

### <DocHeadingIcon icon="add-circle-outline" color="#34D399" :size="17" /> Novo fluxo

O texto **Novo fluxo** marca o começo de outra sequência. Esse fluxo não depende do fluxo que aparece acima, mas sua posição na lista ainda define quando ele será processado.

Ao adicionar um nó acima ou abaixo, escolha primeiro entre **Conectado** e **Novo fluxo** quando as duas opções estiverem disponíveis. A opção de novo fluxo aparece somente onde uma sequência independente pode ser criada sem quebrar uma conexão existente.

## <DocHeadingIcon icon="play-forward-outline" color="#A78BFA" /> Ordem de execução

A engine lê primeiro o **Script global** e depois o **Script da cena**, ambos de cima para baixo. Na cena, a sequência é:

1. Ela encontra o primeiro fluxo no alto da página.
2. Executa o nó inicial e percorre os nós conectados daquele fluxo.
3. Depois começa o próximo fluxo independente que estiver abaixo.
4. Continua assim até chegar ao final do Script da cena.

::: info Os nós não são executados todos ao mesmo tempo
Na tela tudo acontece muito rápido e pode parecer simultâneo, mas existe uma ordem dentro de cada atualização. Um nó abaixo pode enxergar uma alteração feita por um nó acima. Um nó acima não consegue enxergar uma alteração que ainda será feita abaixo.
:::

### Ordem recomendada: mover antes de acompanhar

Neste exemplo, o fluxo de movimento está acima do fluxo da câmera. Primeiro o jogador muda de posição; depois a câmera lê essa posição já atualizada.

<FlowExample variant="correct-order" />

O resultado é um acompanhamento direto: a câmera recebe a posição mais recente disponível naquela atualização.

### Ordem que pode deixar um valor atrasado

Agora a câmera está acima do movimento. Ela lê a posição do jogador e somente depois o outro fluxo move o personagem.

<FlowExample variant="delayed-order" />

Na atualização seguinte, a câmera encontra a nova posição, mas o jogador se move novamente logo depois. Isso pode fazer a câmera parecer um passo atrás, criar uma pequena sensação de arrasto ou até uma tremida quando a direção muda rapidamente.

Para corrigir, coloque primeiro o fluxo que **produz ou altera o valor** e depois o fluxo que **usa esse valor**.

### Mover o jogador e depois centralizar a câmera

O movimento do jogador

### Alterar uma variável e depois compará-la

A ação que altera a variável

### Redimensionar um objeto e depois usar sua largura

A ação que muda o tamanho

### Atualizar uma posição e depois copiar essa posição

A ação que atualiza a posição

## <DocHeadingIcon icon="calculator-outline" color="#2DD4BF" /> Quando uma expressão lê o valor

Uma expressão é calculada no momento em que o nó é executado. Ela não fica ligada permanentemente à propriedade usada.

Imagine estes dois nós:

1. **Mudar posição X** coloca o jogador em `camera.x`.
2. **Mudar posição X da câmera** usa `jogador.center_x`.

O segundo nó recebe a posição já alterada porque está abaixo do primeiro. Se a ordem for invertida, a câmera receberá a posição que o jogador tinha antes daquela mudança.

::: warning Velocidade representa movimento concluído
Expressões como `jogador.velocity_x`, `jogador.velocity_y` e `jogador.speed` representam o movimento medido na atualização concluída anteriormente. Elas são ideais para saber como o objeto realmente estava se movendo, mas não representam uma mudança de posição que ainda será executada mais abaixo no mesmo fluxo.
:::

## <DocHeadingIcon icon="options-outline" color="#60A5FA" /> Quantas vezes a ação acontece?

**Sempre** mantém a ação sendo aplicada enquanto o fluxo permite. É comum em movimento e acompanhamento de câmera.

**Uma única vez** serve para uma execução pontual quando o fluxo é ativado. Uma condição de momento, como um novo clique, ajuda a indicar quando essa ativação acontece.

**Quantidade** limita o número de execuções. **Por tempo** mantém a ação durante o período configurado. Já o nó **Quantidade de vezes** repete um trecho conectado, não apenas uma propriedade isolada.

Para uma ação que deve acontecer a cada intervalo, use **A cada X segundos**. Para atrasar a continuação de uma sequência, use **Aguardar segundos**. Os dois não significam a mesma coisa.

## <DocHeadingIcon icon="cube-outline" color="#34D399" /> Mais de um objeto e mais de uma instância

Nas ações com seleção múltipla, você pode marcar vários objetos e usar a mesma configuração para todos. Depois, confira se a ação afeta **todas as instâncias** ou uma **instância específica**. Isso também vale para ações como criar objetos, quando a seleção múltipla estiver disponível.

Uma condição pode verificar qualquer instância, todas ou uma específica. O destino das ações seguintes ainda precisa ser configurado: verificar uma cópia não significa automaticamente selecionar essa mesma cópia para todos os próximos nós.

<FlowExample variant="multiple-targets" />

## <DocHeadingIcon icon="grid-outline" color="#60A5FA" /> Tipos de nó

- **Ação:** altera o jogo, um ou mais objetos ou a câmera.
- **Condição:** permite que os nós conectados continuem somente quando algo for verdadeiro.
- **Repetição:** executa os próximos nós mais de uma vez.
- **Script:** chama um script salvo na biblioteca.

## <DocHeadingIcon icon="layers-outline" color="#FACC15" /> Organize a lógica

- Coloque ações de entrada e movimento antes dos fluxos que acompanham esses valores.
- Mantenha condições e suas ações conectadas no mesmo fluxo.
- Use novos fluxos para lógicas independentes, como movimento, câmera, interface e inimigos.
- Dê nomes claros aos scripts reutilizáveis, como `Movimento do jogador`, `Dano do inimigo` e `Abrir porta`.
- Quando algo parecer atrasado, confira primeiro se o nó que lê o valor está acima do nó que o atualiza.

::: tip Regra fácil de lembrar
Primeiro altere. Depois leia. Se um fluxo depende do resultado de outro, deixe o fluxo que cria o resultado acima.
:::

## Próximo passo

Entenda [a diferença entre Script da cena, global e biblioteca](/editor/tipos-de-script). Para consultar uma opção específica, abra [Todos os nós](/nos/).
