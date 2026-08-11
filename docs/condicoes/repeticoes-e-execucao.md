# <DocHeadingIcon icon="repeat-outline" color="#22D3EE" :size="22" /> Repetições e execução

## <DocHeadingIcon icon="sync-outline" color="#22D3EE" /> Quantidade de vezes

O nó de repetição executa os próximos nós pela quantidade escolhida.

A quantidade pode ser:

- Um número fixo.
- A largura de um objeto.
- A altura de um objeto.
- A largura da câmera.
- A quantidade de instâncias de um objeto.

## <DocHeadingIcon icon="repeat-outline" color="#22D3EE" /> Repetição das ações

Cada ação também pode controlar sua própria execução.

### Sempre

A ação continua ativa sem limite de tempo. O campo de tempo não aparece.

### Uma única vez

A ação é executada na primeira ativação e não se repete enquanto o mesmo fluxo continuar ativo.

### Quantidade

Mostra a quantidade de execuções e o intervalo de tempo entre elas.

### Por tempo

Repete ou mantém a ação durante o tempo configurado.

## Quando usar cada modo

| Situação | Modo recomendado |
| --- | --- |
| Seguir um objeto continuamente | Sempre |
| Tocar um som ou criar um objeto uma vez | Uma única vez |
| Piscar três vezes | Quantidade |
| Chacoalhar durante dois segundos | Por tempo |

::: warning Evite criar sem limite
Uma ação **Criar objeto** configurada como **Sempre** pode adicionar muitas instâncias rapidamente. Use uma condição, intervalo ou limite adequado.
:::
