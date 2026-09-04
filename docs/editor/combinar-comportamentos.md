---
title: Combinar comportamentos
description: Monte objetos com várias funções e saiba como evitar que dois movimentos disputem a mesma propriedade.
---

# <DocHeadingIcon icon="extension-puzzle-outline" color="#FB923C" :size="22" /> Combinar comportamentos

Um comportamento adiciona uma função pronta ao objeto. Você pode usar **vários comportamentos diferentes no mesmo objeto**: um cuida da imagem, outro da colisão, outro da animação. Não é necessário escolher apenas um.

## Como adicionar

1. Abra **Objetos** e edite o objeto original.
2. Entre na lista de comportamentos e adicione a função desejada.
3. Abra o comportamento para configurar seus campos.
4. Adicione outras funções e teste uma mudança por vez no visualizador.

Os comportamentos pertencem ao modelo do objeto. Durante o jogo, cada instância tem seu próprio estado: duas cópias podem estar em posições, animações ou momentos diferentes.

## <DocHeadingIcon icon="game-controller-outline" color="#4ADE80" /> Personagem de plataforma

Use **Sprite** para as imagens e **Animação com sprites** para a caminhada. Adicione **Corpo com gravidade** para cair e **Colisão** para definir o corpo que encosta no cenário. O chão também precisa de colisão.

Nos scripts, use as ações de movimento e **Pular objeto**. As condições de chão, pulo e movimento ajudam a decidir qual animação reproduzir.

**O que cada parte faz:** o sprite desenha; a animação troca os quadros; a gravidade move para baixo; a colisão define onde encosta. A imagem sozinha não substitui a colisão.

## <DocHeadingIcon icon="hand-left-outline" color="#38BDF8" /> Peça que pode ser arrastada

Combine **Sprite** ou **Forma** com **Arrastar e soltar**. Adicione **Crescer ao pressionar** para dar uma resposta visual ao toque.

Se quiser que a peça vá até um destino gradualmente, use **Mover até o toque**. Ele é diferente de arrastar: o objeto viaja até o ponto escolhido. A opção de seguir o dedo permite atualizar esse destino enquanto você desliza.

## <DocHeadingIcon icon="bulb" color="#FDE047" /> Tocha com luz e partículas

Combine **Sprite**, **Emitir luz** e **Emitir partículas**. A imagem representa a tocha, a luz ilumina e as partículas fazem as faíscas ou a fumaça.

Os obstáculos que devem projetar sombra usam **Barrar luz**. Configure a forma da colisão e o tamanho de cada obstáculo para corresponder ao resultado desejado.

## <DocHeadingIcon icon="play-circle-outline" color="#2DD4BF" /> Porta animada

Combine **Forma** ou **Sprite**, **Colisão** e **Animação de propriedades**. Crie uma animação de abertura e deixe sem reprodução inicial se a porta deve esperar uma interação.

Depois, uma condição no script pode chamar **Reproduzir animação de propriedades**. Se a porta deve deixar de bloquear a passagem, use **Ativar comportamento** para desativar a colisão no momento apropriado.

## <DocHeadingIcon icon="options-outline" color="#60A5FA" /> Quando dois recursos tentam mover a mesma coisa

Combinar funções diferentes costuma ser simples. O cuidado aparece quando duas delas alteram **a mesma propriedade ao mesmo tempo**.

Por exemplo, **Arrastar e soltar**, **Mover até o toque**, uma ação **Seguir objeto** e uma animação de posição podem tentar decidir o X e Y da mesma instância. Isso pode causar saltos, arrasto ou movimento inesperado.

Escolha quem controla a posição em cada momento. Você pode desativar um comportamento, pausar uma animação ou colocar uma condição no fluxo de movimento. Animar a cor enquanto outro recurso move o objeto não disputa a posição.

## Ativar não é adicionar

O nó **Ativar comportamento** liga ou desliga um comportamento que já foi adicionado ao objeto. Ele não cria uma configuração nova durante o jogo. Emissores e animações também têm ações próprias para iniciar, pausar ou recomeçar.

<div class="guide-grid">
  <GuideCard href="/comportamentos/" icon="extension-puzzle-outline" color="#FB923C" title="Todos os comportamentos" description="Veja campos, exemplos e regras de cada função." />
  <GuideCard href="/editor/aparencia-e-animacao" icon="images" color="#A78BFA" title="Aparência e animação" description="Entenda sprite, rotação visual e keyframes." />
</div>
