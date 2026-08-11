# Expressões numéricas

Expressões permitem usar valores do jogo no lugar de um número fixo. Elas são úteis para posicionar, comparar e movimentar objetos de forma dinâmica.

## Câmera

| Expressão | Valor |
| --- | --- |
| `camera.x` | Posição X do centro da câmera. |
| `camera.y` | Posição Y do centro da câmera. |
| `camera.left` | Borda esquerda visível. |
| `camera.right` | Borda direita visível. |
| `camera.top` | Borda superior visível. |
| `camera.bottom` | Borda inferior visível. |
| `camera.width` | Largura lógica atual da câmera. |
| `camera.height` | Altura lógica atual da câmera. |
| `camera.zoom` | Zoom atual. |

### Centralizar no eixo X

Use `camera.x` como posição X do objeto.

### Centralizar no eixo Y

Use `camera.y` como posição Y do objeto.

## Propriedades dos objetos

O seletor de expressões permite escolher o objeto e, quando necessário, a instância.

- Posição X e Y.
- Rotação do objeto.
- Rotação do sprite.
- Escala.
- Transparência.
- Largura e altura.
- Quantidade de instâncias.
- Ordem Z.

## Cálculos

Você pode combinar valores com operações matemáticas. Por exemplo:

```text
camera.x + 120
```

Posiciona o objeto 120 pixels à direita do centro da câmera.

```text
camera.bottom - 48
```

Posiciona o objeto 48 pixels acima da borda inferior visível.

::: info Centro real
`camera.x` e `camera.y` representam o centro real da câmera, não a borda da tela. Para trabalhar com as bordas, use `camera.left`, `camera.right`, `camera.top` e `camera.bottom`.
:::
