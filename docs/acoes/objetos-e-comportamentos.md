# Objetos e comportamentos

## Criar objeto

Cria uma nova instância durante o jogo.

Escolha:

- O objeto que será criado.
- A camada de destino.
- A posição X e Y.

Você pode usar valores fixos ou expressões, como a posição da câmera ou de outro objeto.

## Excluir objeto

Remove as instâncias escolhidas durante o jogo. O objeto continua existindo na lista do projeto e pode ser criado novamente depois.

## Ativar comportamento

Ativa ou desativa um comportamento existente no objeto.

Escolha o objeto, as instâncias, o comportamento e o novo estado. Isso permite, por exemplo:

- Desativar o movimento temporariamente.
- Ligar a gravidade depois de um evento.
- Ativar uma luz.
- Impedir que um objeto seja arrastado durante uma animação.

::: info O comportamento precisa existir
A ação não adiciona um comportamento novo. Primeiro adicione o comportamento ao objeto e depois use a ação para ativá-lo ou desativá-lo.
:::
