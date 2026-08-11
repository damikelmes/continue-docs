# <DocHeadingIcon icon="cube-outline" color="#34D399" :size="22" /> Objetos e comportamentos

## <DocHeadingIcon icon="cube" color="#4ADE80" /> Criar objeto

Cria novas instâncias durante o jogo. Você pode escolher **um ou vários objetos** na mesma ação.

Escolha:

- Os objetos que serão criados.
- A camada de destino.
- A posição X e Y.
- A ordem Z.
- A quantidade.

Você pode usar valores fixos ou expressões, como a posição da câmera ou de outro objeto.

Quando vários objetos são marcados, a ação usa a mesma posição, camada e ordem Z para todos. A quantidade é aplicada **a cada objeto escolhido**.

Por exemplo, se você escolher **Projétil** e **Clarão** com quantidade `1`, a ação cria uma instância de cada um. Se escolher dois objetos com quantidade `3`, serão criadas três instâncias de cada objeto, seis no total.

::: tip Criar no centro de outro objeto
Use `jogador.center_x` na posição X e `jogador.center_y` na posição Y para criar todos os objetos selecionados no centro real do jogador.
:::

## <DocHeadingIcon icon="trash-outline" color="#FB7185" /> Excluir objeto

Remove as instâncias escolhidas durante o jogo. O objeto continua existindo na lista do projeto e pode ser criado novamente depois.

## <DocHeadingIcon icon="power-outline" color="#60A5FA" /> Ativar comportamento

Ativa ou desativa um comportamento existente no objeto.

Escolha o objeto, as instâncias, o comportamento e o novo estado. Isso permite, por exemplo:

- Desativar o movimento temporariamente.
- Ligar a gravidade depois de um evento.
- Ativar uma luz.
- Impedir que um objeto seja arrastado durante uma animação.

::: info O comportamento precisa existir
A ação não adiciona um comportamento novo. Primeiro adicione o comportamento ao objeto e depois use a ação para ativá-lo ou desativá-lo.
:::
