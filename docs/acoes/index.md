# Ações

::: tip Documentação nova
Agora cada ação, condição, repetição e script possui sua própria página na seção [Todos os nós](/nos/).
:::

As ações alteram alguma parte do jogo quando o fluxo chega até elas. Elas estão separadas por categoria para facilitar a busca.

<div class="action-grid">
  <a class="action-card" href="./movimento-e-posicao">
    <strong>Movimento e posição</strong>
    <span>Mova, siga, orbite, redimensione e rotacione objetos.</span>
  </a>
  <a class="action-card" href="./aparencia-e-animacao">
    <strong>Aparência e animação</strong>
    <span>Troque sprites, anime propriedades, cores e transparência.</span>
  </a>
  <a class="action-card" href="./camera">
    <strong>Câmera</strong>
    <span>Centralize, siga objetos, altere posição, zoom e tremor.</span>
  </a>
  <a class="action-card" href="./objetos-e-comportamentos">
    <strong>Objetos e comportamentos</strong>
    <span>Crie ou exclua instâncias e ative comportamentos.</span>
  </a>
</div>

## Escolha de objetos

Nas ações que oferecem seleção múltipla, o campo **Objeto** permite marcar vários objetos de uma vez. Todos os objetos marcados recebem a mesma ação, com os mesmos valores e o mesmo modo de execução.

Por exemplo, você pode selecionar **Jogador**, **Inimigo** e **Caixa** no nó **Alterar transparência**. Não é necessário criar três nós iguais.

<FlowExample variant="multiple-targets" />

::: tip Quando usar mais de um objeto
Use a seleção múltipla quando todos devem receber exatamente a mesma mudança. Se cada objeto precisar de um valor diferente, crie um nó separado para cada configuração.
:::

Nem toda ação precisa ou permite vários destinos. Quando o seletor mostrar círculos de marcação, você pode escolher mais de um; confirme a seleção depois de marcar todos os objetos desejados.

## Objeto e instância são escolhas diferentes

O campo **Objeto** escolhe o tipo, como Jogador, Inimigo ou Caixa. O campo **Instâncias** escolhe quais cópias desses objetos, já colocadas na cena, serão afetadas.

- **Todas as instâncias:** aplica a ação em todas as cópias dos objetos selecionados que existirem na cena.
- **Instância específica:** aplica somente na cópia indicada, quando essa opção estiver disponível.

Se você selecionar três tipos de objeto e usar **Todas as instâncias**, a ação percorre todas as instâncias existentes dos três tipos.

## Operação numérica

Campos numéricos podem usar uma operação para definir como o valor será aplicado.

| Operação | Resultado |
| --- | --- |
| **Definir como** | Substitui o valor atual. |
| **Somar** | Acrescenta o valor informado. |
| **Subtrair** | Retira o valor informado. |
| **Multiplicar** | Multiplica o valor atual. |
| **Dividir** | Divide o valor atual. |

## Modo de execução

| Modo | Quando a ação funciona |
| --- | --- |
| **Sempre** | Continua sendo aplicada enquanto o fluxo estiver ativo. |
| **Uma única vez** | Executa somente na primeira ativação do fluxo. |
| **Quantidade** | Repete pela quantidade e intervalo configurados. |
| **Por tempo** | Continua durante o tempo informado. |

::: warning Ações contínuas
Movimentos, câmera suave, órbita e outras ações contínuas normalmente devem usar **Sempre** ou outro modo com duração suficiente.
:::
