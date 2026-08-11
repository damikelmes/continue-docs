# Conheça a Continue

A Continue é uma engine para criar jogos pelo celular. O projeto é organizado visualmente: você cria cenas, adiciona objetos e conecta ações e condições para definir o que acontece durante o jogo.

## Partes principais

| Parte | Para que serve |
| --- | --- |
| **Projeto** | Guarda as cenas, configurações, objetos e scripts do jogo. |
| **Cena** | Representa uma fase, menu ou tela do jogo. |
| **Camada** | Organiza a ordem e o grupo visual dos objetos. |
| **Objeto** | É o modelo reutilizável, como jogador, inimigo ou plataforma. |
| **Instância** | É uma cópia do objeto colocada dentro da cena. |
| **Comportamento** | Adiciona uma função pronta ao objeto, como gravidade ou colisão. |
| **Script visual** | Liga condições e ações para criar a lógica do jogo. |

## Fluxo recomendado

1. Crie o projeto e defina a resolução base.
2. Crie uma cena.
3. Adicione os objetos que serão usados.
4. Coloque instâncias desses objetos na cena.
5. Configure sprites, colisões e comportamentos.
6. Monte a lógica no **Script da cena**.
7. Teste pelo visualizador.
8. Exporte quando o jogo estiver pronto.

::: info Objeto e instância não são a mesma coisa
Alterar um objeto pode afetar todas as suas instâncias. Alterar uma instância muda somente aquela cópia colocada na cena.
:::
