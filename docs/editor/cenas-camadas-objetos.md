# <DocHeadingIcon icon="apps-outline" color="#A78BFA" :size="22" /> Cenas, camadas e objetos

O projeto reúne tudo. Dentro dele, as cenas organizam as telas do jogo. Você cria objetos como modelos e coloca instâncias desses modelos nas cenas. As camadas ajudam a organizar o desenho.

**Exemplo:** o objeto Moeda é criado uma vez. Uma fase pode ter dez instâncias dele e outra fase pode ter vinte. Você não precisa cadastrar trinta objetos diferentes.

## <DocHeadingIcon icon="images" color="#A78BFA" /> Cenas

Cada cena representa uma parte separada do jogo, como uma fase, um menu ou uma tela de vitória. O **Script da cena** controla a lógica que funciona dentro dela.

## <DocHeadingIcon icon="layers-outline" color="#A78BFA" /> Camadas

As camadas ajudam a organizar os elementos da cena. Você pode separar, por exemplo:

- Fundo.
- Cenário.
- Personagens.
- Efeitos.
- Interface.

A ordem Z dos objetos ainda pode ser usada para controlar qual objeto aparece na frente de outro dentro da cena.

Escolha a camada certa antes de adicionar uma instância. Nomeie pelo uso, como Fundo, Cenário e Personagens. Uma camada organiza a cena; ela não é outro projeto nem outra fase.

## <DocHeadingIcon icon="cube-outline" color="#60A5FA" /> Objetos

Um objeto guarda as configurações reutilizáveis. Você pode definir largura, altura, sprite, animações, colisão e comportamentos.

Na aba **Objetos**, crie ou edite o modelo. Use pastas para organizar a biblioteca por assunto, como Personagens, Cenário e Interface. Mudar a pasta não coloca o objeto na cena: use **+** para adicionar uma instância.

## <DocHeadingIcon icon="locate-outline" color="#FACC15" /> Instâncias

Uma instância é o objeto colocado na cena. Instâncias do mesmo objeto podem ter posições, tamanhos e outras configurações diferentes.

Selecione a cópia na cena ou na aba **Instâncias** e use **Editar**. Use **Duplicar** quando quiser outra cópia com as configurações da selecionada.

As instâncias usam as configurações do modelo quando não possuem um valor próprio. Se você personalizou uma propriedade na instância, confira esse valor ao modificar o objeto original. Excluir uma instância remove aquela cópia da cena, não é a mesma coisa que apagar o modelo na biblioteca.

## <DocHeadingIcon icon="resize-outline" color="#34D399" /> Largura e altura

Use largura e altura para esticar ou reduzir o objeto de forma independente. A seleção do editor e o visualizador acompanham o tamanho atual da instância.

**Largura** altera o tamanho horizontal; **altura** altera o vertical. **Escala** é um multiplicador de tamanho: 1 mantém, 2 dobra e 0,5 reduz à metade. Confira a escala antes de concluir que um valor de largura ou altura está errado.

## <DocHeadingIcon icon="move-outline" color="#60A5FA" /> Posição e rotação

X aumenta para a direita e Y aumenta para baixo. As posições do objeto usam seu centro; você não precisa somar metade da largura para usar o centro da câmera.

Rotação muda a orientação do objeto. A rotação do sprite e a rotação própria da colisão são ajustes separados: [entenda aparência e animação](/editor/aparencia-e-animacao).

::: info Sprite e forma
Um objeto pode usar uma imagem ou uma forma sem sprite. Os comportamentos de colisão e luz usam o tamanho e a forma configurados para o objeto.
:::

## Próximo passo

Adicione [comportamentos que se complementam](/editor/combinar-comportamentos). Depois monte os [nós e fluxos](/editor/scripts-visuais) que controlam essas instâncias.
