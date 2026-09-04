---
title: Script da cena, global e biblioteca
description: Entenda onde colocar cada regra e quando cada tipo de script é executado.
---

# <DocHeadingIcon icon="code-slash-outline" color="#4ADE80" :size="22" /> Onde colocar seu script

Os três usam a mesma edição visual de nós. A diferença é **quando são executados**, **onde você quer usar aquela lógica** e quais nós estão disponíveis. Você não precisa usar todos no primeiro projeto.

## <DocHeadingIcon icon="document-text" color="#A78BFA" /> Script da cena

É a lógica da cena que está aberta no jogo. Você acessa pelo botão **Script da cena**, no editor. Use para as regras daquela fase ou tela: abrir uma porta, mover um inimigo ou fazer um botão do menu funcionar.

Quando outra cena é aberta, passa a valer o Script da cena de destino. O script da fase anterior não fica controlando a nova cena em paralelo.

**Exemplo:** na cena Menu, conecte a condição de clique no botão Jogar à ação Trocar de cena. Na cena Fase 1, coloque os fluxos de movimento e câmera.

## <DocHeadingIcon icon="globe-outline" color="#F4C54B" /> Script global

Fica na página que reúne as cenas do projeto. Ele é executado **antes do Script da cena atual**. Use para regras que precisam estar disponíveis em diferentes cenas, sem copiar os mesmos nós para cada uma.

**Exemplo:** coloque nele uma regra de teclado para pausar e continuar o jogo. Assim, a mesma regra pode ser usada nas cenas do projeto.

::: info Global não significa que todos os objetos existem em todas as cenas
Se um nó global usa o objeto Jogador, esse objeto precisa ter uma instância na cena atual para receber a ação. O Script global não cria nem transporta objetos automaticamente. Para levar uma instância de uma cena a outra, existe a ação **Manter objeto entre cenas**.
:::

## <DocHeadingIcon type="flow-glyph" icon="git-branch" color="#F472B6" /> Scripts da biblioteca

A biblioteca guarda scripts com nome próprio. Abra a aba **Script** do editor, crie um script e monte seus nós. Criar ou salvar um script na biblioteca **não faz ele rodar sozinho**.

Para executá-lo, adicione o nó **Executar script** a um fluxo do **Script da cena** ou do **Script global** e escolha o script salvo.

**Exemplo:** crie um script chamado Receber dano com os nós que diminuem a vida e chacoalham o objeto. Chame esse script quando uma colisão com o inimigo começar. Você reaproveita a rotina sem remontá-la.

Organize rotinas por nome, cor e pasta. O nome ajuda você a reconhecer a chamada; a pasta apenas organiza a biblioteca, não muda a ordem de execução.

::: info O que fica fora da biblioteca
Um script da biblioteca não pode chamar outro script da biblioteca. Os nós de controle de cena também ficam no Script da cena ou no global. Use a biblioteca para as rotinas reutilizáveis; deixe a navegação entre cenas no fluxo que chama essas rotinas.
:::

## <DocHeadingIcon icon="play-forward-outline" color="#60A5FA" /> Qual roda primeiro?

1. O Script global é lido de cima para baixo.
2. Depois, o Script da cena atual é lido de cima para baixo.
3. Quando um deles encontra **Executar script**, a rotina da biblioteca participa naquele ponto do fluxo.

Dentro de cada script, as conexões e as condições definem o que pode continuar. Um script da biblioteca não ganha prioridade só por estar salvo primeiro na lista.

**Na prática:** se a câmera está no global e o movimento no Script da cena, a câmera pode ler a posição antes do movimento. Coloque a leitura depois da alteração quando uma regra depender do resultado da outra.

## Qual escolher agora?

Comece no **Script da cena**. Quando uma sequência precisar ser chamada em vários lugares, mova essa responsabilidade para um **script da biblioteca**. Use o **global** quando a regra realmente precisar acontecer nas diferentes cenas.

<div class="guide-grid">
  <GuideCard href="/editor/scripts-visuais" type="flow-glyph" icon="git-branch" color="#F472B6" title="Entender nós e fluxos" description="Veja conexões, condições e ordem de execução." />
  <GuideCard href="/nos/executar-script" icon="code-slash-outline" color="#4ADE80" title="Executar script" description="Consulte a chamada de uma rotina da biblioteca." />
</div>
