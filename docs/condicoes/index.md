# Condições

Uma condição permite que os próximos nós sejam executados somente quando o resultado for verdadeiro. As condições também podem ser invertidas para verificar o contrário.

## Objeto está na cena

Verdadeiro enquanto existe pelo menos uma instância do objeto escolhido na cena.

## Objeto pressionado

Verdadeiro enquanto o dedo continua pressionando o objeto.

## Objeto clicado

Verdadeiro uma vez a cada novo toque. Use para botões, seleção e interações que devem acontecer apenas uma vez.

## Dedo sobre o objeto

Verdadeiro enquanto a posição do dedo estiver dentro da área do objeto.

## Estado de movimento

- **Objeto está caindo:** verifica se o objeto está descendo com gravidade.
- **Objeto está no chão:** verifica o contato com uma superfície de colisão.
- **Objeto está pulando:** verifica o movimento de pulo.
- **Objeto está se movendo:** permite verificar qualquer direção, X, Y ou um ângulo específico.

## Criação e exclusão

- **Objeto foi criado:** ativa quando uma nova instância aparece.
- **Objeto foi excluído:** ativa quando uma instância é removida.

Essas condições são úteis para executar uma lógica exatamente no momento do acontecimento.

## Comportamento está ativado

Verifica o estado de um comportamento existente no objeto. A condição invertida verifica se ele está desativado.

## Comparar números

Compara dois valores fixos ou expressões.

| Comparação | Símbolo |
| --- | --- |
| Igual | `=` |
| Maior | `>` |
| Menor | `<` |
| Igual ou maior | `≥` |
| Igual ou menor | `≤` |
| Diferente | `≠` |

## Aguardar segundos

Espera o tempo informado antes de liberar o próximo nó do fluxo.

::: tip Condição invertida
Use a opção de resultado esperado para transformar, por exemplo, **Objeto está na cena** em **Objeto não está na cena** sem precisar criar outra condição.
:::
