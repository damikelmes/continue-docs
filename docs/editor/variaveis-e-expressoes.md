---
title: Variáveis e expressões
description: Guarde informações do jogo e use valores calculados no lugar de números fixos.
---

# <DocHeadingIcon icon="calculator-outline" color="#2DD4BF" :size="22" /> Variáveis e expressões

Uma **variável guarda um valor**. Uma **expressão consulta ou calcula um valor**. Por exemplo, Vida pode guardar 100, enquanto uma expressão calcula quanto sobra depois de receber 10 de dano.

## <DocHeadingIcon icon="cube-outline" color="#60A5FA" /> Variáveis do objeto

Adicione o comportamento **Variáveis do objeto**. Crie uma variável com nome, tipo e valor inicial. Cada instância guarda sua própria cópia desse valor.

**Exemplo:** dois inimigos começam com Vida igual a 30. Tirar 10 de uma instância não precisa alterar a vida da outra. Na ação **Alterar variável do objeto**, escolha o objeto, as instâncias e a variável.

## <DocHeadingIcon icon="globe-outline" color="#F4C54B" /> Variáveis globais

Abra **Variáveis globais** na página de cenas do projeto. Esses valores são compartilhados pelo jogo, em vez de pertencerem a uma instância.

**Exemplo:** Pontos pode guardar a pontuação que deve ser usada em várias cenas. Use **Alterar variável global** para somar uma recompensa. Não confunda uma variável global com o Script global: um guarda dados, o outro executa regras.

::: info Durante a partida
Compartilhar valores entre cenas não equivale a salvar uma partida no aparelho. Não conte com uma variável de execução para guardar progresso depois que o jogo for fechado.
:::

## Tipos de valor

### Número

Para vida, pontos, velocidade e contadores. Pode definir, somar, subtrair, multiplicar, dividir ou restaurar o valor inicial. Não divida por zero.

### Texto

Para nomes e outras informações escritas. Pode substituir o texto, adicionar no começo ou no final e restaurar o texto inicial.

### Verdadeiro ou falso

Para uma informação com dois estados, como uma chave ativada. Pode definir verdadeiro, definir falso, inverter ou restaurar o valor inicial.

## <DocHeadingIcon icon="search-outline" color="#A78BFA" /> Usar uma expressão

1. Abra um campo numérico no nó.
2. Toque no botão de procurar expressão.
3. Escolha a informação: objeto, câmera, variável, tempo, toque ou cálculo.
4. Para um objeto, escolha também a instância quando necessário.
5. Complete o cálculo e confirme.

O seletor escreve o identificador correto. Prefira usá-lo para evitar erros de nome. Expressões numéricas usam variáveis do tipo Número; texto e verdadeiro/falso não são números para esses cálculos.

**Posição:** `camera.x` coloca o alvo no centro horizontal da câmera. `camera.x + 100` usa um ponto 100 pixels à direita.

**Vida:** `math.max(0, jogador.variable.vida - 10)` calcula a vida após o dano sem deixar o resultado negativo. Para guardar esse resultado, aplique-o na ação que altera a variável.

**Pontuação:** `global.variable.pontos + 50` lê a pontuação global e calcula mais 50. Só consultar a expressão não muda Pontos.

## Expressão não fica ligada para sempre

O valor é lido quando o nó executa. Se você define o X de um objeto como `camera.x` uma única vez, ele não passa a seguir a câmera para sempre. Para acompanhar, a regra precisa continuar sendo aplicada.

Movimentos com campo de velocidade já usam o tempo entre atualizações. Não multiplique essa velocidade por `time.delta` de novo. Delta time é útil quando você mesmo calcula um deslocamento que será somado a cada atualização.

<div class="guide-grid">
  <GuideCard href="/expressoes/" icon="calculator-outline" color="#2DD4BF" title="Todas as expressões" description="Veja a escrita correta e exemplos de cada cálculo." />
  <GuideCard href="/editor/scripts-visuais#ordem-de-execucao" icon="play-forward-outline" color="#A78BFA" title="Quando o valor é lido" description="Entenda por que a ordem dos nós importa." />
</div>
