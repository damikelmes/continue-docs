# Ações

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

## Escolha do objeto e da instância

As ações que afetam objetos pedem um objeto de destino. Quando disponível, você também pode escolher:

- **Todas as instâncias:** aplica a ação em todas as cópias do objeto na cena.
- **Instância específica:** aplica somente na instância informada.

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
