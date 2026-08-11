# Ações da câmera

A posição X e Y da câmera representa sempre o centro da área visível. Um objeto colocado em `camera.x` e `camera.y` fica centralizado na tela.

## Centralizar câmera

Move a câmera imediatamente para o centro real do objeto escolhido.

Use para trocar o foco sem transição ou para definir a posição inicial da câmera.

## Câmera suave

Faz a câmera seguir o objeto de forma contínua e suave.

- **Velocidade X:** rapidez da câmera no eixo horizontal.
- **Velocidade Y:** rapidez da câmera no eixo vertical.

Valores maiores deixam a câmera chegar mais rápido. Valores menores criam um acompanhamento mais suave.

## Mudar posição X da câmera

Altera somente o centro horizontal da câmera. Aceita um número ou uma expressão.

## Mudar posição Y da câmera

Altera somente o centro vertical da câmera. Aceita um número ou uma expressão.

## Chacoalhar câmera

Aplica um tremor temporário na visualização.

- **Intensidade:** força do tremor em pixels.
- **Tempo do tremor:** duração de cada execução.
- **Sempre:** mantém o tremor enquanto a ação estiver ativa.
- **Quantidade:** usa a quantidade e o intervalo configurados.
- **Por tempo:** continua pelo tempo escolhido.

## Dar zoom na câmera

Altera o nível de aproximação.

- Valor maior que `1`: aproxima.
- Valor `1`: tamanho normal.
- Valor menor que `1`: afasta.

::: warning Zoom muito baixo
Ao afastar muito a câmera, uma área maior da cena precisa ser desenhada. Teste o desempenho no aparelho usado pelo jogador.
:::
