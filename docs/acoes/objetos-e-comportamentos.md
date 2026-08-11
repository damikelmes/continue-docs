# <DocHeadingIcon icon="cube-outline" color="#34D399" :size="22" /> Objetos e comportamentos

## <DocHeadingIcon icon="cube" color="#4ADE80" /> Criar objeto

Cria uma nova instância durante o jogo.

Escolha:

- O objeto que será criado.
- A camada de destino.
- A posição X e Y.

Você pode usar valores fixos ou expressões, como a posição da câmera ou de outro objeto.

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
