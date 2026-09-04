---
title: Trocar, pausar e retomar cenas
description: Organize menus e fases, escolha transições e entenda o estado de cada cena.
---

# <DocHeadingIcon icon="albums-outline" color="#A78BFA" :size="22" /> Controlar as cenas do jogo

Uma cena pode ser um menu, uma fase ou uma tela de resultado. Além de montá-las no editor, você pode escolher quando mudar de uma para outra usando os nós da categoria **Cena**.

## Trocar de cena

Escolha a cena de destino e como ela será aberta. **Começar do início** recria o estado inicial. **Continuar de onde parou** recupera o último estado guardado daquela cena; sem estado anterior, ela começa normalmente.

A transição pode ser instantânea, desaparecer, aparecer ou desaparecer e aparecer. Nos efeitos suaves, configure a duração e a cor.

**Exemplo:** no Menu, conecte Objeto clicado no botão Jogar a **Trocar de cena**, escolhendo Fase 1 e Começar do início.

## Voltar ou reiniciar

**Voltar para a cena anterior** retorna à última cena visitada e recupera o estado dela. Precisa existir uma cena anterior na navegação da partida.

**Reiniciar cena** começa a cena atual novamente. Use em um botão de tentar de novo. Não coloque a ação em um fluxo que reinicia a cena incondicionalmente a cada atualização.

## Estado salvo da cena

O estado permite retornar a uma cena durante a mesma partida. **Limpar estado salvo da cena** descarta esse estado guardado; não apaga a cena do projeto e não é uma ação para excluir arquivos.

Isso é diferente de salvar o progresso permanentemente no aparelho. O estado de navegação não deve ser tratado como um sistema de salvar e carregar partidas depois de fechar o jogo.

## Levar um objeto para outra cena

Use **Manter objeto entre cenas** nas instâncias que devem acompanhar a mudança. Elas levam seu estado atual. Só ter o objeto na biblioteca não faz as instâncias aparecerem em todas as cenas.

**Exemplo:** marque um personagem que precisa continuar na próxima cena. Revise as instâncias já colocadas no destino para não montar uma segunda cópia sem querer.

## Pausar e continuar

**Pausar cena** congela a simulação, incluindo movimento, física e animações. **Continuar cena** retoma do ponto atual.

Prepare o fluxo de continuar antes de pausar. As verificações de entrada permitem acionar **Continuar cena**, mas não conte com ações comuns de movimento ou de aparência para montar uma interface enquanto a simulação está pausada. Se precisar mostrar algo com uma ação, faça isso antes da pausa.

## Saber quando uma cena começa

**Cena começou** é uma condição para preparar a cena quando ela inicia do começo. Não é uma condição que fica verdadeira durante toda a partida. **Cena está pausada** verifica o estado atual de pausa.

<div class="guide-grid">
  <GuideCard href="/nos/#cena" icon="albums-outline" color="#A78BFA" title="Nós de cena" description="Campos, exemplos e regras para cada operação." />
  <GuideCard href="/editor/tipos-de-script" icon="code-slash-outline" color="#4ADE80" title="Script da cena ou global?" description="Escolha onde colocar suas regras de navegação." />
</div>
