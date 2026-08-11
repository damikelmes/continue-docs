# Scripts visuais

Os scripts visuais são formados por nós conectados. Cada nó pode executar uma ação, verificar uma condição, repetir um fluxo ou chamar outro script.

## Fluxo conectado

Um nó conectado continua a sequência iniciada pelo nó anterior. Ele só é executado quando o fluxo chega até ele.

## Novo fluxo

Um novo fluxo começa de forma independente. Essa opção aparece somente quando a posição escolhida permite iniciar outra sequência sem quebrar uma conexão existente.

## Adicionar nós

Ao adicionar um nó acima ou abaixo, escolha primeiro entre **Conectado** e **Novo fluxo** quando as duas opções estiverem disponíveis. Depois escolha o tipo do nó pela categoria.

## Tipos de nó

- **Ação:** altera o jogo, um objeto ou a câmera.
- **Condição:** permite que o fluxo continue somente quando algo for verdadeiro.
- **Repetição:** executa os próximos nós mais de uma vez.
- **Script:** chama um script salvo na biblioteca.

## Organize a lógica

Use scripts separados e nomes claros para lógicas reutilizáveis. Por exemplo: `Movimento do jogador`, `Dano do inimigo` e `Abrir porta`.

::: tip Leia de cima para baixo
Monte cada fluxo na ordem em que os acontecimentos devem ser verificados e executados. Isso deixa o comportamento mais fácil de entender e ajustar.
:::
