// Conteúdo de uso dos recursos acrescentados ao editor mobile.
export const additionalNodes = [
  {
    "type": "action-change-scene",
    "color": "#A78BFA",
    "icon": "albums-outline",
    "kind": "AÇÃO",
    "title": "Trocar de cena",
    "summary": "Abre outra cena do projeto usando a transição escolhida.",
    "slug": "trocar-de-cena",
    "category": "cena",
    "purpose": "Abre outra cena do projeto usando a transição escolhida.",
    "fields": [
      [
        "Cena",
        "Cena que será aberta."
      ],
      [
        "Ao abrir",
        "Começar do início recria a cena; Continuar de onde parou recupera seu estado guardado."
      ],
      [
        "Transição",
        "Instantânea, Desaparecer, Aparecer ou Desaparecer e aparecer."
      ],
      [
        "Duração e cor",
        "Configure o tempo e a cor quando houver um efeito de transição."
      ],
      [
        "Modo de execução",
        "Escolha quando a ação deve ser aplicada. Para um comando pontual, evite repetições desnecessárias."
      ]
    ],
    "example": [
      "Na cena Menu, adicione Objeto clicado para o botão Jogar.",
      "Conecte Trocar de cena, selecione Fase 1 e Começar do início."
    ],
    "result": "O botão abre a fase escolhida.",
    "rules": [
      "Disponível no Script da cena e no Script global, não dentro da biblioteca.",
      "Se não existir estado guardado, a cena começa do início.",
      "Não deixe uma troca incondicional se repetindo a cada atualização."
    ]
  },
  {
    "type": "action-go-back-scene",
    "color": "#C4B5FD",
    "icon": "return-up-back-outline",
    "kind": "AÇÃO",
    "title": "Voltar para a cena anterior",
    "summary": "Retorna para a última cena visitada e recupera seu estado.",
    "slug": "voltar-para-cena-anterior",
    "category": "cena",
    "purpose": "Retorna para a última cena visitada e recupera seu estado.",
    "fields": [
      [
        "Transição",
        "Instantânea, Desaparecer, Aparecer ou Desaparecer e aparecer."
      ],
      [
        "Duração e cor",
        "Configure o tempo e a cor quando houver um efeito de transição."
      ],
      [
        "Modo de execução",
        "Escolha quando a ação deve ser aplicada. Para um comando pontual, evite repetições desnecessárias."
      ]
    ],
    "example": [
      "Abra outra cena durante a partida.",
      "No botão Voltar, conecte a condição de clique a esta ação."
    ],
    "result": "O jogo retorna à última cena visitada e recupera seu estado.",
    "rules": [
      "Disponível no Script da cena e no Script global, não dentro da biblioteca.",
      "É necessário existir uma cena anterior no histórico da partida."
    ]
  },
  {
    "type": "action-clear-scene-state",
    "color": "#FB7185",
    "icon": "trash-bin-outline",
    "kind": "AÇÃO",
    "title": "Limpar estado salvo da cena",
    "summary": "Apaga o estado guardado para a cena escolhida.",
    "slug": "limpar-estado-salvo-da-cena",
    "category": "cena",
    "purpose": "Apaga o estado guardado para a cena escolhida.",
    "fields": [
      [
        "Cena com estado salvo",
        "Cena cujo estado temporário deve ser descartado."
      ],
      [
        "Modo de execução",
        "Escolha quando a ação deve ser aplicada. Para um comando pontual, evite repetições desnecessárias."
      ]
    ],
    "example": [
      "Escolha a cena Fase 1.",
      "Execute ao decidir que a próxima visita não deve recuperar o progresso anterior."
    ],
    "result": "O estado guardado da fase é descartado.",
    "rules": [
      "Disponível no Script da cena e no Script global, não dentro da biblioteca.",
      "Não exclui a cena nem arquivos do projeto.",
      "O estado de navegação não é um salvamento permanente de partida."
    ]
  },
  {
    "type": "action-persist-object",
    "color": "#34D399",
    "icon": "link-outline",
    "kind": "AÇÃO",
    "title": "Manter objeto entre cenas",
    "summary": "Leva o objeto e seu estado atual para as próximas cenas.",
    "slug": "manter-objeto-entre-cenas",
    "category": "cena",
    "purpose": "Leva o objeto e seu estado atual para as próximas cenas.",
    "fields": [
      [
        "Objeto",
        "Escolha o objeto de destino. Nas ações com seleção múltipla, os objetos marcados recebem a mesma configuração."
      ],
      [
        "Instâncias",
        "Nas ações, escolha todas ou uma específica. Nas condições, escolha qualquer, todas ou uma específica."
      ],
      [
        "Modo de execução",
        "Escolha quando a ação deve ser aplicada. Para um comando pontual, evite repetições desnecessárias."
      ]
    ],
    "example": [
      "Selecione Jogador e a instância que deve continuar.",
      "Execute antes de trocar de cena."
    ],
    "result": "O personagem acompanha as próximas mudanças de cena com seu estado atual.",
    "rules": [
      "Disponível no Script da cena e no Script global, não dentro da biblioteca.",
      "Confira se o destino já possui uma cópia do mesmo objeto para evitar duplicações indesejadas."
    ]
  },
  {
    "type": "action-restart-scene",
    "color": "#60A5FA",
    "icon": "refresh-circle-outline",
    "kind": "AÇÃO",
    "title": "Reiniciar cena",
    "summary": "Recarrega a cena atual desde o começo.",
    "slug": "reiniciar-cena",
    "category": "cena",
    "purpose": "Recarrega a cena atual desde o começo.",
    "fields": [
      [
        "Modo de execução",
        "Escolha quando a ação deve ser aplicada. Para um comando pontual, evite repetições desnecessárias."
      ]
    ],
    "example": [
      "Adicione um botão Tentar novamente.",
      "Conecte a condição de clique a Reiniciar cena."
    ],
    "result": "A cena atual recomeça.",
    "rules": [
      "Disponível no Script da cena e no Script global, não dentro da biblioteca.",
      "A ação recria a cena; não a deixe executando incondicionalmente em todas as atualizações."
    ]
  },
  {
    "type": "action-pause-scene",
    "color": "#FBBF24",
    "icon": "pause-circle-outline",
    "kind": "AÇÃO",
    "title": "Pausar cena",
    "summary": "Congela objetos, física, comportamentos e animações da cena.",
    "slug": "pausar-cena",
    "category": "cena",
    "purpose": "Congela objetos, física, comportamentos e animações da cena.",
    "fields": [
      [
        "Modo de execução",
        "Escolha quando a ação deve ser aplicada. Para um comando pontual, evite repetições desnecessárias."
      ]
    ],
    "example": [
      "Prepare um fluxo para continuar usando outra entrada.",
      "Conecte uma condição de tecla ou toque a Pausar cena."
    ],
    "result": "Movimentos, física e animações da cena são congelados.",
    "rules": [
      "Disponível no Script da cena e no Script global, não dentro da biblioteca.",
      "Prepare o caminho para Continuar cena antes de pausar.",
      "Ações comuns de movimento e aparência não devem ser usadas para atualizar a cena enquanto ela está pausada."
    ]
  },
  {
    "type": "action-resume-scene",
    "color": "#4ADE80",
    "icon": "play-circle-outline",
    "kind": "AÇÃO",
    "title": "Continuar cena",
    "summary": "Retoma uma cena pausada exatamente do ponto atual.",
    "slug": "continuar-cena",
    "category": "cena",
    "purpose": "Retoma uma cena pausada exatamente do ponto atual.",
    "fields": [
      [
        "Modo de execução",
        "Escolha quando a ação deve ser aplicada. Para um comando pontual, evite repetições desnecessárias."
      ]
    ],
    "example": [
      "Crie uma condição de entrada para continuar.",
      "Conecte Continuar cena e teste com a cena pausada."
    ],
    "result": "A simulação retoma do ponto atual.",
    "rules": [
      "Disponível no Script da cena e no Script global, não dentro da biblioteca.",
      "Continuar não reinicia a cena."
    ]
  },
  {
    "type": "condition-scene-started",
    "color": "#FBBF24",
    "icon": "flag-outline",
    "kind": "CONDIÇÃO",
    "title": "Cena começou",
    "summary": "Dispara uma vez quando a cena começa desde o início.",
    "slug": "cena-comecou",
    "category": "cena",
    "purpose": "Dispara uma vez quando a cena começa desde o início.",
    "fields": [
      [
        "Resultado esperado",
        "Use a condição normal ou inverta o resultado."
      ]
    ],
    "example": [
      "Coloque Cena começou no início de um fluxo.",
      "Conecte a configuração inicial da câmera."
    ],
    "result": "A preparação acontece quando a cena começa do início.",
    "rules": [
      "Disponível no Script da cena e no Script global, não dentro da biblioteca.",
      "É uma condição de momento, não um estado verdadeiro durante toda a cena.",
      "Retomar um estado guardado não é começar do início.",
      "Conecte as ações abaixo desta condição. Uma condição falsa impede somente a continuação do seu fluxo."
    ]
  },
  {
    "type": "condition-scene-paused",
    "color": "#F59E0B",
    "icon": "pause-circle-outline",
    "kind": "CONDIÇÃO",
    "title": "Cena está pausada",
    "summary": "Continua verdadeira enquanto a cena estiver pausada.",
    "slug": "cena-esta-pausada",
    "category": "cena",
    "purpose": "Continua verdadeira enquanto a cena estiver pausada.",
    "fields": [
      [
        "Resultado esperado",
        "Use a condição normal ou inverta o resultado."
      ]
    ],
    "example": [
      "Use Cena está pausada.",
      "Conecte uma condição de entrada e Continuar cena."
    ],
    "result": "A entrada só retoma o jogo quando a cena está pausada.",
    "rules": [
      "Disponível no Script da cena e no Script global, não dentro da biblioteca.",
      "Permanece verdadeira enquanto a pausa estiver ativa.",
      "Conecte as ações abaixo desta condição. Uma condição falsa impede somente a continuação do seu fluxo."
    ]
  },
  {
    "type": "action-rotate-camera",
    "color": "#38BDF8",
    "icon": "camera-reverse-outline",
    "kind": "AÇÃO",
    "title": "Rotacionar câmera",
    "summary": "Gira a visão do jogo ao redor do centro da câmera.",
    "slug": "rotacionar-camera",
    "category": "camera",
    "purpose": "Gira a visão do jogo ao redor do centro da câmera.",
    "fields": [
      [
        "Rotação",
        "Ângulo em graus."
      ],
      [
        "Operação",
        "Definir, somar, subtrair, multiplicar ou dividir, conforme o efeito desejado."
      ],
      [
        "Modo de execução",
        "Escolha quando a ação deve ser aplicada. Para um comando pontual, evite repetições desnecessárias."
      ]
    ],
    "example": [
      "Escolha Definir como e rotação 15.",
      "Execute uma vez para inclinar a visão."
    ],
    "result": "A câmera gira 15° ao redor do seu centro.",
    "rules": [
      "Não muda a rotação dos objetos nem de suas colisões.",
      "Os limites visíveis mudam com a rotação; confira as expressões das bordas da câmera."
    ]
  },
  {
    "type": "action-show-object",
    "color": "#4ADE80",
    "icon": "eye",
    "kind": "AÇÃO",
    "title": "Mostrar objeto",
    "summary": "Torna visíveis as instâncias escolhidas sem recriá-las.",
    "slug": "mostrar-objeto",
    "category": "aparencia",
    "purpose": "Torna visíveis as instâncias escolhidas sem recriá-las.",
    "fields": [
      [
        "Objeto",
        "Escolha o objeto de destino. Nas ações com seleção múltipla, os objetos marcados recebem a mesma configuração."
      ],
      [
        "Instâncias",
        "Nas ações, escolha todas ou uma específica. Nas condições, escolha qualquer, todas ou uma específica."
      ],
      [
        "Modo de execução",
        "Escolha quando a ação deve ser aplicada. Para um comando pontual, evite repetições desnecessárias."
      ]
    ],
    "example": [
      "Escolha o objeto Indicador e a instância desejada.",
      "Conecte Mostrar objeto a uma condição do jogo."
    ],
    "result": "A instância volta a ser desenhada.",
    "rules": [
      "Esconder não exclui a instância nem substitui desativar a colisão ou outros comportamentos.",
      "A transparência e o restante da aparência ainda influenciam o resultado."
    ]
  },
  {
    "type": "action-hide-object",
    "color": "#94A3B8",
    "icon": "eye-off",
    "kind": "AÇÃO",
    "title": "Esconder objeto",
    "summary": "Esconde as instâncias escolhidas sem excluí-las da cena.",
    "slug": "esconder-objeto",
    "category": "aparencia",
    "purpose": "Esconde as instâncias escolhidas sem excluí-las da cena.",
    "fields": [
      [
        "Objeto",
        "Escolha o objeto de destino. Nas ações com seleção múltipla, os objetos marcados recebem a mesma configuração."
      ],
      [
        "Instâncias",
        "Nas ações, escolha todas ou uma específica. Nas condições, escolha qualquer, todas ou uma específica."
      ],
      [
        "Modo de execução",
        "Escolha quando a ação deve ser aplicada. Para um comando pontual, evite repetições desnecessárias."
      ]
    ],
    "example": [
      "Escolha o objeto Indicador e a instância desejada.",
      "Conecte Esconder objeto a uma condição do jogo."
    ],
    "result": "A instância deixa de ser desenhada, mas continua existindo.",
    "rules": [
      "Esconder não exclui a instância nem substitui desativar a colisão ou outros comportamentos.",
      "A transparência e o restante da aparência ainda influenciam o resultado."
    ]
  },
  {
    "type": "action-start-particle-emitter",
    "color": "#F97316",
    "icon": "play",
    "kind": "AÇÃO",
    "title": "Iniciar emissor de partículas",
    "summary": "Inicia ou continua o emissor das instâncias escolhidas.",
    "slug": "iniciar-emissor-de-particulas",
    "category": "comportamentos",
    "purpose": "Inicia ou continua o emissor das instâncias escolhidas.",
    "fields": [
      [
        "Objeto",
        "Escolha o objeto de destino. Nas ações com seleção múltipla, os objetos marcados recebem a mesma configuração."
      ],
      [
        "Instâncias",
        "Nas ações, escolha todas ou uma específica. Nas condições, escolha qualquer, todas ou uma específica."
      ],
      [
        "Efeito de partículas",
        "Escolha um emissor nomeado ou Todos os efeitos. Em seleção múltipla, os nomes precisam ser compatíveis nos objetos escolhidos."
      ],
      [
        "Modo de execução",
        "Escolha quando a ação deve ser aplicada. Para um comando pontual, evite repetições desnecessárias."
      ]
    ],
    "example": [
      "Crie o emissor Fumaça no objeto Chaminé.",
      "Selecione Fumaça neste nó e execute."
    ],
    "result": "O emissor começa ou continua a funcionar.",
    "rules": [
      "O objeto precisa ter Emitir partículas e o emissor selecionado.",
      "O modo e a quantidade vêm da configuração do emissor."
    ]
  },
  {
    "type": "action-stop-particle-emitter",
    "color": "#FB7185",
    "icon": "stop",
    "kind": "AÇÃO",
    "title": "Parar emissor de partículas",
    "summary": "Interrompe novas partículas e deixa as atuais terminarem.",
    "slug": "parar-emissor-de-particulas",
    "category": "comportamentos",
    "purpose": "Interrompe novas partículas e deixa as atuais terminarem.",
    "fields": [
      [
        "Objeto",
        "Escolha o objeto de destino. Nas ações com seleção múltipla, os objetos marcados recebem a mesma configuração."
      ],
      [
        "Instâncias",
        "Nas ações, escolha todas ou uma específica. Nas condições, escolha qualquer, todas ou uma específica."
      ],
      [
        "Efeito de partículas",
        "Escolha um emissor nomeado ou Todos os efeitos. Em seleção múltipla, os nomes precisam ser compatíveis nos objetos escolhidos."
      ],
      [
        "Modo de execução",
        "Escolha quando a ação deve ser aplicada. Para um comando pontual, evite repetições desnecessárias."
      ]
    ],
    "example": [
      "Com Fumaça emitindo, selecione o emissor neste nó.",
      "Execute quando a fonte de fumaça for desligada."
    ],
    "result": "Não nascem novas partículas; as que já existem terminam sua vida.",
    "rules": [
      "O objeto precisa ter Emitir partículas e o emissor selecionado.",
      "Parar a emissão não apaga imediatamente as partículas. Use Limpar partículas para removê-las."
    ]
  },
  {
    "type": "action-pause-particle-emitter",
    "color": "#FBBF24",
    "icon": "pause",
    "kind": "AÇÃO",
    "title": "Pausar emissor de partículas",
    "summary": "Pausa a emissão e o movimento das partículas atuais.",
    "slug": "pausar-emissor-de-particulas",
    "category": "comportamentos",
    "purpose": "Pausa a emissão e o movimento das partículas atuais.",
    "fields": [
      [
        "Objeto",
        "Escolha o objeto de destino. Nas ações com seleção múltipla, os objetos marcados recebem a mesma configuração."
      ],
      [
        "Instâncias",
        "Nas ações, escolha todas ou uma específica. Nas condições, escolha qualquer, todas ou uma específica."
      ],
      [
        "Efeito de partículas",
        "Escolha um emissor nomeado ou Todos os efeitos. Em seleção múltipla, os nomes precisam ser compatíveis nos objetos escolhidos."
      ],
      [
        "Modo de execução",
        "Escolha quando a ação deve ser aplicada. Para um comando pontual, evite repetições desnecessárias."
      ]
    ],
    "example": [
      "Selecione o emissor Fumaça.",
      "Execute Pausar emissor de partículas."
    ],
    "result": "A emissão e as partículas atuais ficam pausadas.",
    "rules": [
      "O objeto precisa ter Emitir partículas e o emissor selecionado.",
      "Use Iniciar emissor de partículas para continuar."
    ]
  },
  {
    "type": "action-burst-particles",
    "color": "#F97316",
    "icon": "sparkles",
    "kind": "AÇÃO",
    "title": "Disparar partículas",
    "summary": "Cria imediatamente a quantidade de partículas escolhida.",
    "slug": "disparar-particulas",
    "category": "comportamentos",
    "purpose": "Cria imediatamente a quantidade de partículas escolhida.",
    "fields": [
      [
        "Objeto",
        "Escolha o objeto de destino. Nas ações com seleção múltipla, os objetos marcados recebem a mesma configuração."
      ],
      [
        "Instâncias",
        "Nas ações, escolha todas ou uma específica. Nas condições, escolha qualquer, todas ou uma específica."
      ],
      [
        "Efeito de partículas",
        "Escolha um emissor nomeado ou Todos os efeitos. Em seleção múltipla, os nomes precisam ser compatíveis nos objetos escolhidos."
      ],
      [
        "Quantidade de partículas",
        "Quantas partículas criar no disparo."
      ],
      [
        "Modo de execução",
        "Escolha quando a ação deve ser aplicada. Para um comando pontual, evite repetições desnecessárias."
      ]
    ],
    "example": [
      "Crie um emissor Faíscas.",
      "Ao começar uma colisão, dispare 20 partículas."
    ],
    "result": "Um grupo de faíscas nasce de uma só vez.",
    "rules": [
      "O objeto precisa ter Emitir partículas e o emissor selecionado.",
      "O limite de partículas vivas do emissor continua valendo.",
      "Não use Sempre sem uma condição de momento se a intenção for um único disparo."
    ]
  },
  {
    "type": "action-clear-particles",
    "color": "#94A3B8",
    "icon": "trash",
    "kind": "AÇÃO",
    "title": "Limpar partículas",
    "summary": "Remove todas as partículas atuais das instâncias escolhidas.",
    "slug": "limpar-particulas",
    "category": "comportamentos",
    "purpose": "Remove todas as partículas atuais das instâncias escolhidas.",
    "fields": [
      [
        "Objeto",
        "Escolha o objeto de destino. Nas ações com seleção múltipla, os objetos marcados recebem a mesma configuração."
      ],
      [
        "Instâncias",
        "Nas ações, escolha todas ou uma específica. Nas condições, escolha qualquer, todas ou uma específica."
      ],
      [
        "Efeito de partículas",
        "Escolha um emissor nomeado ou Todos os efeitos. Em seleção múltipla, os nomes precisam ser compatíveis nos objetos escolhidos."
      ],
      [
        "Modo de execução",
        "Escolha quando a ação deve ser aplicada. Para um comando pontual, evite repetições desnecessárias."
      ]
    ],
    "example": [
      "Selecione Fumaça.",
      "Execute Limpar partículas quando quiser remover as partículas existentes."
    ],
    "result": "As partículas atuais são removidas.",
    "rules": [
      "O objeto precisa ter Emitir partículas e o emissor selecionado.",
      "Limpar as partículas não equivale a parar a emissão; pare também se não quiser novos nascimentos."
    ]
  },
  {
    "type": "action-change-object-variable",
    "color": "#60A5FA",
    "icon": "calculator-outline",
    "kind": "AÇÃO",
    "title": "Alterar variável do objeto",
    "summary": "Muda uma variável separadamente em cada instância escolhida.",
    "slug": "alterar-variavel-do-objeto",
    "category": "variaveis",
    "purpose": "Muda uma variável separadamente em cada instância escolhida.",
    "fields": [
      [
        "Objeto",
        "Escolha o objeto de destino. Nas ações com seleção múltipla, os objetos marcados recebem a mesma configuração."
      ],
      [
        "Instâncias",
        "Nas ações, escolha todas ou uma específica. Nas condições, escolha qualquer, todas ou uma específica."
      ],
      [
        "Variável",
        "Escolha uma variável já cadastrada."
      ],
      [
        "Operação",
        "Depende do tipo: operações numéricas, edição de texto ou verdadeiro/falso. Restaurar volta ao valor inicial."
      ],
      [
        "Valor",
        "Número, expressão ou texto, quando a operação precisar de um valor."
      ],
      [
        "Modo de execução",
        "Escolha quando a ação deve ser aplicada. Para um comando pontual, evite repetições desnecessárias."
      ]
    ],
    "example": [
      "Crie Vida do tipo Número com valor 100 em Variáveis do objeto.",
      "Escolha a instância de Jogador, Vida, Subtrair e 10."
    ],
    "result": "Só as instâncias selecionadas perdem 10 de vida.",
    "rules": [
      "Adicione antes o comportamento Variáveis do objeto.",
      "Na seleção de vários objetos, a variável precisa ter nome e tipo compatíveis em todos.",
      "Não divida por zero."
    ]
  },
  {
    "type": "action-change-global-variable",
    "color": "#F4C54B",
    "icon": "globe-outline",
    "kind": "AÇÃO",
    "title": "Alterar variável global",
    "summary": "Muda um valor compartilhado entre todas as cenas do jogo.",
    "slug": "alterar-variavel-global",
    "category": "variaveis",
    "purpose": "Muda um valor compartilhado entre todas as cenas do jogo.",
    "fields": [
      [
        "Variável",
        "Escolha uma variável já cadastrada."
      ],
      [
        "Operação",
        "Depende do tipo: operações numéricas, edição de texto ou verdadeiro/falso. Restaurar volta ao valor inicial."
      ],
      [
        "Valor",
        "Número, expressão ou texto, quando a operação precisar de um valor."
      ],
      [
        "Modo de execução",
        "Escolha quando a ação deve ser aplicada. Para um comando pontual, evite repetições desnecessárias."
      ]
    ],
    "example": [
      "Crie Pontos do tipo Número nas Variáveis globais.",
      "Escolha Pontos, Somar e 50 ao coletar uma moeda."
    ],
    "result": "A pontuação compartilhada recebe mais 50.",
    "rules": [
      "A variável deve existir no projeto.",
      "Global compartilha dados entre cenas durante o jogo; não é um salvamento permanente no aparelho."
    ]
  },
  {
    "type": "condition-object-held",
    "color": "#FB923C",
    "icon": "timer-outline",
    "kind": "CONDIÇÃO",
    "title": "Objeto pressionado por um tempo",
    "summary": "Executa depois que o objeto permanece pressionado pelo tempo escolhido.",
    "slug": "objeto-pressionado-por-um-tempo",
    "category": "interacao-e-toque",
    "purpose": "Executa depois que o objeto permanece pressionado pelo tempo escolhido.",
    "fields": [
      [
        "Objeto",
        "Escolha o objeto de destino. Nas ações com seleção múltipla, os objetos marcados recebem a mesma configuração."
      ],
      [
        "Instâncias",
        "Nas ações, escolha todas ou uma específica. Nas condições, escolha qualquer, todas ou uma específica."
      ],
      [
        "Tempo pressionando",
        "Tempo mínimo em segundos."
      ],
      [
        "Opções do toque",
        "Configure se aceita outros toques e se exige o dedo sobre o objeto."
      ],
      [
        "Resultado esperado",
        "Use a condição normal ou inverta o resultado."
      ]
    ],
    "example": [
      "Escolha o botão Carregar e tempo de 1 segundo.",
      "Conecte a ação desejada depois da condição."
    ],
    "result": "O fluxo passa quando a pressão atinge o tempo configurado.",
    "rules": [
      "Soltar antes de completar o tempo não atende à condição.",
      "Confira as opções de manter o dedo sobre o objeto ao testar um deslize.",
      "Conecte as ações abaixo desta condição. Uma condição falsa impede somente a continuação do seu fluxo."
    ]
  },
  {
    "type": "condition-object-clicked-times",
    "color": "#F472B6",
    "icon": "finger-print-outline",
    "kind": "CONDIÇÃO",
    "title": "Objeto clicado X vezes",
    "summary": "Executa quando o objeto recebe a quantidade de cliques escolhida.",
    "slug": "objeto-clicado-x-vezes",
    "category": "interacao-e-toque",
    "purpose": "Executa quando o objeto recebe a quantidade de cliques escolhida.",
    "fields": [
      [
        "Objeto",
        "Escolha o objeto de destino. Nas ações com seleção múltipla, os objetos marcados recebem a mesma configuração."
      ],
      [
        "Instâncias",
        "Nas ações, escolha todas ou uma específica. Nas condições, escolha qualquer, todas ou uma específica."
      ],
      [
        "Quantidade de vezes",
        "Número de pressões/cliques necessários."
      ],
      [
        "Intervalo máximo",
        "Tempo máximo entre as pressões da sequência, em segundos."
      ],
      [
        "Resultado esperado",
        "Use a condição normal ou inverta o resultado."
      ]
    ],
    "example": [
      "Escolha uma carta, quantidade 2 e intervalo de 0,3 segundo.",
      "Conecte Flipar objeto."
    ],
    "result": "A carta vira após dois cliques próximos.",
    "rules": [
      "Segurar não substitui vários cliques.",
      "Intervalos longos demais quebram a sequência.",
      "Conecte as ações abaixo desta condição. Uma condição falsa impede somente a continuação do seu fluxo."
    ]
  },
  {
    "type": "condition-object-released",
    "color": "#F472B6",
    "icon": "hand-left-outline",
    "kind": "CONDIÇÃO",
    "title": "Objeto foi solto",
    "summary": "Executa uma vez quando o dedo que pressionou o objeto é levantado.",
    "slug": "objeto-foi-solto",
    "category": "interacao-e-toque",
    "purpose": "Executa uma vez quando o dedo que pressionou o objeto é levantado.",
    "fields": [
      [
        "Objeto",
        "Escolha o objeto de destino. Nas ações com seleção múltipla, os objetos marcados recebem a mesma configuração."
      ],
      [
        "Instâncias",
        "Nas ações, escolha todas ou uma específica. Nas condições, escolha qualquer, todas ou uma específica."
      ],
      [
        "Resultado esperado",
        "Use a condição normal ou inverta o resultado."
      ]
    ],
    "example": [
      "Escolha o botão de uma interação.",
      "Conecte a ação que deve acontecer ao levantar o dedo."
    ],
    "result": "A ação é disparada na soltura.",
    "rules": [
      "O toque precisa estar associado ao objeto; não é apenas a ausência de um dedo sobre ele.",
      "Conecte as ações abaixo desta condição. Uma condição falsa impede somente a continuação do seu fluxo."
    ]
  },
  {
    "type": "condition-object-swiped",
    "color": "#22D3EE",
    "icon": "swap-horizontal-outline",
    "kind": "CONDIÇÃO",
    "title": "Deslizou sobre o objeto",
    "summary": "Executa uma vez quando um deslize na direção escolhida começa sobre o objeto.",
    "slug": "deslizou-sobre-o-objeto",
    "category": "interacao-e-toque",
    "purpose": "Executa uma vez quando um deslize na direção escolhida começa sobre o objeto.",
    "fields": [
      [
        "Objeto",
        "Escolha o objeto de destino. Nas ações com seleção múltipla, os objetos marcados recebem a mesma configuração."
      ],
      [
        "Instâncias",
        "Nas ações, escolha todas ou uma específica. Nas condições, escolha qualquer, todas ou uma específica."
      ],
      [
        "Direção",
        "Direção do deslize que deve ser reconhecido."
      ],
      [
        "Resultado esperado",
        "Use a condição normal ou inverta o resultado."
      ]
    ],
    "example": [
      "Escolha uma carta e a direção direita.",
      "Conecte uma ação para mover ou virar a carta."
    ],
    "result": "O gesto que começa sobre a carta aciona o fluxo.",
    "rules": [
      "O deslize precisa começar sobre o objeto.",
      "Use as expressões de toque para consultar deslocamento e direção.",
      "Conecte as ações abaixo desta condição. Uma condição falsa impede somente a continuação do seu fluxo."
    ]
  },
  {
    "type": "condition-object-entered-camera",
    "color": "#38BDF8",
    "icon": "enter-outline",
    "kind": "CONDIÇÃO",
    "title": "Objeto entrou na câmera",
    "summary": "Executa uma vez quando o objeto começa a aparecer na visão da câmera.",
    "slug": "objeto-entrou-na-camera",
    "category": "camera-e-tela",
    "purpose": "Executa uma vez quando o objeto começa a aparecer na visão da câmera.",
    "fields": [
      [
        "Objeto",
        "Escolha o objeto de destino. Nas ações com seleção múltipla, os objetos marcados recebem a mesma configuração."
      ],
      [
        "Instâncias",
        "Nas ações, escolha todas ou uma específica. Nas condições, escolha qualquer, todas ou uma específica."
      ],
      [
        "Verificação",
        "Qualquer parte, Objeto inteiro ou Centro do objeto."
      ],
      [
        "Margem da câmera",
        "Amplia a área considerada, em pixels."
      ],
      [
        "Resultado esperado",
        "Use a condição normal ou inverta o resultado."
      ]
    ],
    "example": [
      "Escolha o objeto e a forma de verificar a área visível.",
      "Conecte uma animação de entrada."
    ],
    "result": "A ação acontece quando o objeto passa a atender à verificação da câmera.",
    "rules": [
      "Dispara na entrada, não a cada atualização em que permanece na câmera.",
      "Estar dentro da câmera é diferente de ter a visibilidade ativada.",
      "Conecte as ações abaixo desta condição. Uma condição falsa impede somente a continuação do seu fluxo."
    ]
  },
  {
    "type": "condition-object-in-camera",
    "color": "#60A5FA",
    "icon": "scan-outline",
    "kind": "CONDIÇÃO",
    "title": "Objeto está na câmera",
    "summary": "Continua verdadeiro enquanto o objeto estiver na visão da câmera.",
    "slug": "objeto-esta-na-camera",
    "category": "camera-e-tela",
    "purpose": "Continua verdadeiro enquanto o objeto estiver na visão da câmera.",
    "fields": [
      [
        "Objeto",
        "Escolha o objeto de destino. Nas ações com seleção múltipla, os objetos marcados recebem a mesma configuração."
      ],
      [
        "Instâncias",
        "Nas ações, escolha todas ou uma específica. Nas condições, escolha qualquer, todas ou uma específica."
      ],
      [
        "Verificação",
        "Qualquer parte, Objeto inteiro ou Centro do objeto."
      ],
      [
        "Margem da câmera",
        "Amplia a área considerada, em pixels."
      ],
      [
        "Resultado esperado",
        "Use a condição normal ou inverta o resultado."
      ]
    ],
    "example": [
      "Escolha o objeto e a forma de verificar a área visível.",
      "Conecte um fluxo que só deve funcionar perto da tela."
    ],
    "result": "O fluxo continua enquanto o objeto atende à verificação da câmera.",
    "rules": [
      "É uma condição contínua.",
      "Estar dentro da câmera é diferente de ter a visibilidade ativada.",
      "Conecte as ações abaixo desta condição. Uma condição falsa impede somente a continuação do seu fluxo."
    ]
  },
  {
    "type": "condition-object-exited-camera",
    "color": "#A78BFA",
    "icon": "exit-outline",
    "kind": "CONDIÇÃO",
    "title": "Objeto saiu da câmera",
    "summary": "Executa uma vez quando o objeto deixa a visão da câmera.",
    "slug": "objeto-saiu-da-camera",
    "category": "camera-e-tela",
    "purpose": "Executa uma vez quando o objeto deixa a visão da câmera.",
    "fields": [
      [
        "Objeto",
        "Escolha o objeto de destino. Nas ações com seleção múltipla, os objetos marcados recebem a mesma configuração."
      ],
      [
        "Instâncias",
        "Nas ações, escolha todas ou uma específica. Nas condições, escolha qualquer, todas ou uma específica."
      ],
      [
        "Verificação",
        "Qualquer parte, Objeto inteiro ou Centro do objeto."
      ],
      [
        "Margem da câmera",
        "Amplia a área considerada, em pixels."
      ],
      [
        "Resultado esperado",
        "Use a condição normal ou inverta o resultado."
      ]
    ],
    "example": [
      "Escolha o objeto e a forma de verificar a área visível.",
      "Conecte Excluir objeto para um projétil descartável."
    ],
    "result": "O projétil pode ser removido quando deixa a área verificada.",
    "rules": [
      "Dispara na saída; começar fora da câmera não é o mesmo que sair dela.",
      "Estar dentro da câmera é diferente de ter a visibilidade ativada.",
      "Conecte as ações abaixo desta condição. Uma condição falsa impede somente a continuação do seu fluxo."
    ]
  },
  {
    "type": "condition-collision-started",
    "color": "#FB923C",
    "icon": "contract-outline",
    "kind": "CONDIÇÃO",
    "title": "Objeto começou a colidir",
    "summary": "Executa uma vez no instante em que os dois objetos encostam.",
    "slug": "objeto-comecou-a-colidir",
    "category": "colisoes",
    "purpose": "Executa uma vez no instante em que os dois objetos encostam.",
    "fields": [
      [
        "Objeto",
        "Escolha o objeto de destino. Nas ações com seleção múltipla, os objetos marcados recebem a mesma configuração."
      ],
      [
        "Instâncias",
        "Nas ações, escolha todas ou uma específica. Nas condições, escolha qualquer, todas ou uma específica."
      ],
      [
        "Segundo objeto",
        "Outro participante do contato."
      ],
      [
        "Resultado esperado",
        "Use a condição normal ou inverta o resultado."
      ]
    ],
    "example": [
      "Configure a colisão nos dois objetos e selecione os participantes.",
      "Conecte uma reação de dano."
    ],
    "result": "A reação acontece no começo do contato.",
    "rules": [
      "Não permanece verdadeira durante todo o contato.",
      "Revise os formatos de colisão e as exceções de Ignorar colisão.",
      "Conecte as ações abaixo desta condição. Uma condição falsa impede somente a continuação do seu fluxo."
    ]
  },
  {
    "type": "condition-collision-active",
    "color": "#4ADE80",
    "icon": "link-outline",
    "kind": "CONDIÇÃO",
    "title": "Objetos estão colidindo",
    "summary": "Continua verdadeiro enquanto os dois objetos permanecem encostados.",
    "slug": "objetos-estao-colidindo",
    "category": "colisoes",
    "purpose": "Continua verdadeiro enquanto os dois objetos permanecem encostados.",
    "fields": [
      [
        "Objeto",
        "Escolha o objeto de destino. Nas ações com seleção múltipla, os objetos marcados recebem a mesma configuração."
      ],
      [
        "Instâncias",
        "Nas ações, escolha todas ou uma específica. Nas condições, escolha qualquer, todas ou uma específica."
      ],
      [
        "Segundo objeto",
        "Outro participante do contato."
      ],
      [
        "Resultado esperado",
        "Use a condição normal ou inverta o resultado."
      ]
    ],
    "example": [
      "Configure a colisão nos dois objetos e selecione os participantes.",
      "Conecte uma regra que depende do contato mantido."
    ],
    "result": "A regra fica ativa enquanto as áreas continuam em contato.",
    "rules": [
      "É uma condição contínua.",
      "Revise os formatos de colisão e as exceções de Ignorar colisão.",
      "Conecte as ações abaixo desta condição. Uma condição falsa impede somente a continuação do seu fluxo."
    ]
  },
  {
    "type": "condition-collision-ended",
    "color": "#60A5FA",
    "icon": "expand-outline",
    "kind": "CONDIÇÃO",
    "title": "Objeto terminou a colisão",
    "summary": "Executa uma vez quando os dois objetos deixam de encostar.",
    "slug": "objeto-terminou-a-colisao",
    "category": "colisoes",
    "purpose": "Executa uma vez quando os dois objetos deixam de encostar.",
    "fields": [
      [
        "Objeto",
        "Escolha o objeto de destino. Nas ações com seleção múltipla, os objetos marcados recebem a mesma configuração."
      ],
      [
        "Instâncias",
        "Nas ações, escolha todas ou uma específica. Nas condições, escolha qualquer, todas ou uma específica."
      ],
      [
        "Segundo objeto",
        "Outro participante do contato."
      ],
      [
        "Resultado esperado",
        "Use a condição normal ou inverta o resultado."
      ]
    ],
    "example": [
      "Configure a colisão nos dois objetos e selecione os participantes.",
      "Conecte uma reação para quando o jogador sai da região."
    ],
    "result": "O fluxo detecta a separação.",
    "rules": [
      "Dispara quando um contato existente termina.",
      "Revise os formatos de colisão e as exceções de Ignorar colisão.",
      "Conecte as ações abaixo desta condição. Uma condição falsa impede somente a continuação do seu fluxo."
    ]
  },
  {
    "type": "condition-collision-side",
    "color": "#FACC15",
    "icon": "move-outline",
    "kind": "CONDIÇÃO",
    "title": "Colidiu pelo lado",
    "summary": "Executa uma vez quando o objeto colide pelo lado escolhido.",
    "slug": "colidiu-pelo-lado",
    "category": "colisoes",
    "purpose": "Executa uma vez quando o objeto colide pelo lado escolhido.",
    "fields": [
      [
        "Objeto",
        "Escolha o objeto de destino. Nas ações com seleção múltipla, os objetos marcados recebem a mesma configuração."
      ],
      [
        "Instâncias",
        "Nas ações, escolha todas ou uma específica. Nas condições, escolha qualquer, todas ou uma específica."
      ],
      [
        "Segundo objeto",
        "Outro participante do contato."
      ],
      [
        "Lado",
        "Qualquer lado, Cima, Baixo, Esquerda ou Direita."
      ],
      [
        "Resultado esperado",
        "Use a condição normal ou inverta o resultado."
      ]
    ],
    "example": [
      "Configure a colisão nos dois objetos e selecione os participantes.",
      "Escolha Cima para detectar contato na parte superior do primeiro objeto."
    ],
    "result": "O fluxo reage ao início do contato pelo lado escolhido.",
    "rules": [
      "O lado é relativo ao primeiro objeto, não ao segundo.",
      "Revise os formatos de colisão e as exceções de Ignorar colisão.",
      "Conecte as ações abaixo desta condição. Uma condição falsa impede somente a continuação do seu fluxo."
    ]
  },
  {
    "type": "condition-object-started-moving",
    "color": "#34D399",
    "icon": "play-circle",
    "kind": "CONDIÇÃO",
    "title": "Objeto começou a se mover",
    "summary": "Dispara uma vez quando o objeto sai do repouso.",
    "slug": "objeto-comecou-a-se-mover",
    "category": "estado-do-objeto",
    "purpose": "Dispara uma vez quando o objeto sai do repouso.",
    "fields": [
      [
        "Objeto",
        "Escolha o objeto de destino. Nas ações com seleção múltipla, os objetos marcados recebem a mesma configuração."
      ],
      [
        "Instâncias",
        "Nas ações, escolha todas ou uma específica. Nas condições, escolha qualquer, todas ou uma específica."
      ],
      [
        "Resultado esperado",
        "Use a condição normal ou inverta o resultado."
      ]
    ],
    "example": [
      "Selecione Jogador e as instâncias desejadas.",
      "Conecte a animação Andando."
    ],
    "result": "A ação dispara quando a instância sai do repouso.",
    "rules": [
      "Detecta a mudança de estado, não cada atualização do movimento.",
      "O movimento é medido a partir das posições da instância.",
      "Conecte as ações abaixo desta condição. Uma condição falsa impede somente a continuação do seu fluxo."
    ]
  },
  {
    "type": "condition-object-stopped-moving",
    "color": "#FB7185",
    "icon": "stop-circle",
    "kind": "CONDIÇÃO",
    "title": "Objeto parou de se mover",
    "summary": "Dispara uma vez quando o objeto deixa de se mover.",
    "slug": "objeto-parou-de-se-mover",
    "category": "estado-do-objeto",
    "purpose": "Dispara uma vez quando o objeto deixa de se mover.",
    "fields": [
      [
        "Objeto",
        "Escolha o objeto de destino. Nas ações com seleção múltipla, os objetos marcados recebem a mesma configuração."
      ],
      [
        "Instâncias",
        "Nas ações, escolha todas ou uma específica. Nas condições, escolha qualquer, todas ou uma específica."
      ],
      [
        "Resultado esperado",
        "Use a condição normal ou inverta o resultado."
      ]
    ],
    "example": [
      "Selecione Jogador e as instâncias desejadas.",
      "Conecte a animação Parado."
    ],
    "result": "A ação dispara quando a instância deixa de se mover.",
    "rules": [
      "Detecta a mudança de estado, não cada atualização do movimento.",
      "O movimento é medido a partir das posições da instância.",
      "Conecte as ações abaixo desta condição. Uma condição falsa impede somente a continuação do seu fluxo."
    ]
  },
  {
    "type": "condition-object-visible",
    "color": "#A78BFA",
    "icon": "eye",
    "kind": "CONDIÇÃO",
    "title": "Objeto está visível",
    "summary": "Continua verdadeira enquanto o objeto estiver visível.",
    "slug": "objeto-esta-visivel",
    "category": "estado-do-objeto",
    "purpose": "Continua verdadeira enquanto o objeto estiver visível.",
    "fields": [
      [
        "Objeto",
        "Escolha o objeto de destino. Nas ações com seleção múltipla, os objetos marcados recebem a mesma configuração."
      ],
      [
        "Instâncias",
        "Nas ações, escolha todas ou uma específica. Nas condições, escolha qualquer, todas ou uma específica."
      ],
      [
        "Resultado esperado",
        "Use a condição normal ou inverta o resultado."
      ]
    ],
    "example": [
      "Selecione o objeto Indicador.",
      "Conecte uma regra que só deve continuar quando sua visibilidade está ligada."
    ],
    "result": "O fluxo respeita o estado de visibilidade do objeto.",
    "rules": [
      "Um objeto visível pode estar fora da câmera. Use as condições de câmera para verificar a área vista.",
      "Conecte as ações abaixo desta condição. Uma condição falsa impede somente a continuação do seu fluxo."
    ]
  },
  {
    "type": "condition-variable-changed",
    "color": "#FBBF24",
    "icon": "pulse",
    "kind": "CONDIÇÃO",
    "title": "Variável foi alterada",
    "summary": "Dispara uma vez quando a variável escolhida muda de valor.",
    "slug": "variavel-foi-alterada",
    "category": "logica-e-tempo",
    "purpose": "Dispara uma vez quando a variável escolhida muda de valor.",
    "fields": [
      [
        "Origem",
        "Variável do objeto ou global."
      ],
      [
        "Variável",
        "Valor cujo estado deve ser acompanhado."
      ],
      [
        "Objeto e instâncias",
        "Aparecem quando a variável pertence a um objeto."
      ],
      [
        "Resultado esperado",
        "Use a condição normal ou inverta o resultado."
      ]
    ],
    "example": [
      "Escolha a variável global Pontos.",
      "Conecte uma reação visual à mudança."
    ],
    "result": "O fluxo reage quando o valor escolhido muda.",
    "rules": [
      "Não é uma comparação com um valor fixo.",
      "Para verificar se um número passou de um limite, use Comparar valores.",
      "Conecte as ações abaixo desta condição. Uma condição falsa impede somente a continuação do seu fluxo."
    ]
  },
  {
    "type": "condition-screen-touched",
    "color": "#F472B6",
    "icon": "finger-print",
    "kind": "CONDIÇÃO",
    "title": "Tela foi tocada",
    "summary": "Dispara uma vez quando um novo toque começa na tela.",
    "slug": "tela-foi-tocada",
    "category": "interacao-e-toque",
    "purpose": "Dispara uma vez quando um novo toque começa na tela.",
    "fields": [
      [
        "Resultado esperado",
        "Use a condição normal ou inverta o resultado."
      ]
    ],
    "example": [
      "Adicione a condição no início de um fluxo.",
      "Conecte uma ação para reagir à interação na tela."
    ],
    "result": "A ação responde ao início de um novo toque.",
    "rules": [
      "Condição de momento: não se mantém ativa só por segurar.",
      "Não exige selecionar um objeto; use condições de objeto para limitar a área da interação.",
      "Conecte as ações abaixo desta condição. Uma condição falsa impede somente a continuação do seu fluxo."
    ]
  },
  {
    "type": "condition-screen-pressed",
    "color": "#FB923C",
    "icon": "hand-left",
    "kind": "CONDIÇÃO",
    "title": "Tela está pressionada",
    "summary": "Continua verdadeira enquanto houver um dedo na tela.",
    "slug": "tela-esta-pressionada",
    "category": "interacao-e-toque",
    "purpose": "Continua verdadeira enquanto houver um dedo na tela.",
    "fields": [
      [
        "Resultado esperado",
        "Use a condição normal ou inverta o resultado."
      ]
    ],
    "example": [
      "Adicione a condição no início de um fluxo.",
      "Conecte uma ação para reagir à interação na tela."
    ],
    "result": "A ação pode continuar enquanto existir um dedo na tela.",
    "rules": [
      "Condição contínua: deixa de ser verdadeira quando não há toque ativo.",
      "Não exige selecionar um objeto; use condições de objeto para limitar a área da interação.",
      "Conecte as ações abaixo desta condição. Uma condição falsa impede somente a continuação do seu fluxo."
    ]
  },
  {
    "type": "condition-screen-released",
    "color": "#38BDF8",
    "icon": "hand-left-outline",
    "kind": "CONDIÇÃO",
    "title": "Toque na tela foi solto",
    "summary": "Dispara uma vez quando um dedo é retirado da tela.",
    "slug": "toque-na-tela-foi-solto",
    "category": "interacao-e-toque",
    "purpose": "Dispara uma vez quando um dedo é retirado da tela.",
    "fields": [
      [
        "Resultado esperado",
        "Use a condição normal ou inverta o resultado."
      ]
    ],
    "example": [
      "Adicione a condição no início de um fluxo.",
      "Conecte uma ação para reagir à interação na tela."
    ],
    "result": "A ação responde quando um dedo é retirado.",
    "rules": [
      "Condição de momento: ausência de toques por si só não é uma nova soltura.",
      "Não exige selecionar um objeto; use condições de objeto para limitar a área da interação.",
      "Conecte as ações abaixo desta condição. Uma condição falsa impede somente a continuação do seu fluxo."
    ]
  },
  {
    "type": "condition-particle-emitter-active",
    "color": "#F97316",
    "icon": "sparkles",
    "kind": "CONDIÇÃO",
    "title": "Emissor de partículas está ativo",
    "summary": "Continua verdadeiro enquanto o emissor estiver produzindo partículas.",
    "slug": "emissor-de-particulas-esta-ativo",
    "category": "estado-do-objeto",
    "purpose": "Verifica se a instância possui pelo menos um emissor ativo e não pausado.",
    "fields": [
      [
        "Objeto",
        "Escolha o objeto de destino. Nas ações com seleção múltipla, os objetos marcados recebem a mesma configuração."
      ],
      [
        "Instâncias",
        "Nas ações, escolha todas ou uma específica. Nas condições, escolha qualquer, todas ou uma específica."
      ],
      [
        "Resultado esperado",
        "Use a condição normal ou inverta o resultado."
      ]
    ],
    "example": [
      "Escolha o objeto Chaminé e as instâncias a verificar.",
      "Conecte uma regra que depende de algum emissor do objeto estar ativo."
    ],
    "result": "O fluxo acompanha o estado do emissor.",
    "rules": [
      "Adicione Emitir partículas ao objeto.",
      "A verificação considera os emissores da instância, não um efeito escolhido por nome.",
      "Partículas antigas visíveis não bastam: é verificado o estado ativo e não pausado do emissor.",
      "Conecte as ações abaixo desta condição. Uma condição falsa impede somente a continuação do seu fluxo."
    ]
  },
  {
    "type": "condition-particle-emission-finished",
    "color": "#38BDF8",
    "icon": "checkmark-circle",
    "kind": "CONDIÇÃO",
    "title": "Emissão de partículas terminou",
    "summary": "Detecta quando os emissores da instância terminam e não restam partículas.",
    "slug": "emissao-de-particulas-terminou",
    "category": "estado-do-objeto",
    "purpose": "Reconhece o fim completo dos efeitos da instância: sem emissão ativa, sem disparos pendentes e sem partículas vivas. É útil para remover um objeto de efeito depois que ele desaparece.",
    "fields": [
      [
        "Objeto",
        "Escolha o objeto de destino. Nas ações com seleção múltipla, os objetos marcados recebem a mesma configuração."
      ],
      [
        "Instâncias",
        "Nas ações, escolha todas ou uma específica. Nas condições, escolha qualquer, todas ou uma específica."
      ],
      [
        "Resultado esperado",
        "Use a condição normal ou inverta o resultado."
      ]
    ],
    "example": [
      "Configure um efeito finito no objeto Explosão.",
      "Escolha Explosão nesta condição e conecte Excluir objeto."
    ],
    "result": "A instância pode ser removida depois que seus efeitos terminam por completo.",
    "rules": [
      "Todos os emissores da instância precisam ter terminado.",
      "Parar novas partículas não conclui imediatamente a condição se ainda houver partículas vivas.",
      "Um emissor contínuo mantido ativo impede esse término.",
      "Conecte as ações abaixo desta condição. Uma condição falsa impede somente a continuação do seu fluxo."
    ]
  },
  {
    "type": "condition-key-down",
    "color": "#60A5FA",
    "icon": "keypad-outline",
    "kind": "CONDIÇÃO",
    "title": "Tecla está pressionada",
    "summary": "Executa o próximo nó enquanto a tecla escolhida estiver pressionada.",
    "slug": "tecla-esta-pressionada",
    "category": "teclado",
    "purpose": "Executa o próximo nó enquanto a tecla escolhida estiver pressionada.",
    "fields": [
      [
        "Tecla",
        "Abra o seletor e escolha uma tecla compatível."
      ],
      [
        "Resultado esperado",
        "Use a condição normal ou inverta o resultado."
      ]
    ],
    "example": [
      "Escolha Seta para direita.",
      "Conecte Mover em X com velocidade positiva."
    ],
    "result": "O movimento continua enquanto a tecla está abaixada.",
    "rules": [
      "Precisa de entrada de teclado; não cria um botão de toque na tela.",
      "Para uma ação de uma só vez por aperto, use Tecla foi pressionada.",
      "Conecte as ações abaixo desta condição. Uma condição falsa impede somente a continuação do seu fluxo."
    ]
  },
  {
    "type": "condition-key-pressed",
    "color": "#A78BFA",
    "icon": "arrow-down-circle-outline",
    "kind": "CONDIÇÃO",
    "title": "Tecla foi pressionada",
    "summary": "Executa uma vez quando a tecla passa de solta para pressionada.",
    "slug": "tecla-foi-pressionada",
    "category": "teclado",
    "purpose": "Executa uma vez quando a tecla passa de solta para pressionada.",
    "fields": [
      [
        "Tecla",
        "Abra o seletor e escolha uma tecla compatível."
      ],
      [
        "Resultado esperado",
        "Use a condição normal ou inverta o resultado."
      ]
    ],
    "example": [
      "Escolha Espaço.",
      "Conecte Pular objeto em um personagem com gravidade e colisão."
    ],
    "result": "Cada novo aperto pode iniciar um pulo quando as regras do pulo permitirem.",
    "rules": [
      "Precisa de entrada de teclado; não cria um botão de toque na tela.",
      "Manter a tecla abaixada não equivale a novos apertos.",
      "Conecte as ações abaixo desta condição. Uma condição falsa impede somente a continuação do seu fluxo."
    ]
  },
  {
    "type": "condition-key-released",
    "color": "#38BDF8",
    "icon": "arrow-up-circle-outline",
    "kind": "CONDIÇÃO",
    "title": "Tecla foi solta",
    "summary": "Executa uma vez quando a tecla escolhida é liberada.",
    "slug": "tecla-foi-solta",
    "category": "teclado",
    "purpose": "Executa uma vez quando a tecla escolhida é liberada.",
    "fields": [
      [
        "Tecla",
        "Abra o seletor e escolha uma tecla compatível."
      ],
      [
        "Resultado esperado",
        "Use a condição normal ou inverta o resultado."
      ]
    ],
    "example": [
      "Escolha Espaço.",
      "Conecte uma ação que deve acontecer na soltura."
    ],
    "result": "O fluxo dispara ao soltar a tecla.",
    "rules": [
      "Precisa de entrada de teclado; não cria um botão de toque na tela.",
      "Não é uma condição que permanece verdadeira enquanto a tecla está solta.",
      "Conecte as ações abaixo desta condição. Uma condição falsa impede somente a continuação do seu fluxo."
    ]
  },
  {
    "type": "condition-any-key-pressed",
    "color": "#F59E0B",
    "icon": "apps-outline",
    "kind": "CONDIÇÃO",
    "title": "Qualquer tecla foi pressionada",
    "summary": "Executa uma vez quando qualquer tecla compatível é pressionada.",
    "slug": "qualquer-tecla-foi-pressionada",
    "category": "teclado",
    "purpose": "Executa uma vez quando qualquer tecla compatível é pressionada.",
    "fields": [
      [
        "Resultado esperado",
        "Use a condição normal ou inverta o resultado."
      ]
    ],
    "example": [
      "Adicione a condição na tela inicial do jogo.",
      "Conecte a ação de iniciar a partida."
    ],
    "result": "Um novo aperto de qualquer tecla compatível ativa o fluxo.",
    "rules": [
      "Precisa de entrada de teclado; não cria um botão de toque na tela.",
      "Não possui campo para escolher uma tecla específica.",
      "Conecte as ações abaixo desta condição. Uma condição falsa impede somente a continuação do seu fluxo."
    ]
  },
  {
    "type": "condition-key-combination",
    "color": "#2DD4BF",
    "icon": "git-merge-outline",
    "kind": "CONDIÇÃO",
    "title": "Combinação de teclas",
    "summary": "Executa enquanto todas as teclas escolhidas estiverem pressionadas.",
    "slug": "combinacao-de-teclas",
    "category": "teclado",
    "purpose": "Executa enquanto todas as teclas escolhidas estiverem pressionadas.",
    "fields": [
      [
        "Teclas",
        "Selecione as teclas que devem estar pressionadas juntas."
      ],
      [
        "Resultado esperado",
        "Use a condição normal ou inverta o resultado."
      ]
    ],
    "example": [
      "Selecione Shift e Seta para direita.",
      "Conecte um movimento mais rápido."
    ],
    "result": "A regra funciona enquanto as teclas escolhidas estão abaixadas juntas.",
    "rules": [
      "Precisa de entrada de teclado; não cria um botão de toque na tela.",
      "Combinação é simultânea, não uma sequência de apertos.",
      "Evite manter outro fluxo de movimento conflitante ativo ao mesmo tempo.",
      "Conecte as ações abaixo desta condição. Uma condição falsa impede somente a continuação do seu fluxo."
    ]
  },
  {
    "type": "condition-key-held",
    "color": "#FB923C",
    "icon": "timer-outline",
    "kind": "CONDIÇÃO",
    "title": "Tecla mantida por um tempo",
    "summary": "Executa depois que a tecla permanece pressionada pelo tempo escolhido.",
    "slug": "tecla-mantida-por-um-tempo",
    "category": "teclado",
    "purpose": "Executa depois que a tecla permanece pressionada pelo tempo escolhido.",
    "fields": [
      [
        "Tecla",
        "Abra o seletor e escolha uma tecla compatível."
      ],
      [
        "Tempo segurando",
        "Duração mínima em segundos."
      ],
      [
        "Resultado esperado",
        "Use a condição normal ou inverta o resultado."
      ]
    ],
    "example": [
      "Escolha Espaço e tempo de 1 segundo.",
      "Conecte a ação de um ataque carregado."
    ],
    "result": "O fluxo reconhece a tecla mantida pelo tempo configurado.",
    "rules": [
      "Precisa de entrada de teclado; não cria um botão de toque na tela.",
      "Soltar antes de completar o tempo não conclui a pressão longa.",
      "Conecte as ações abaixo desta condição. Uma condição falsa impede somente a continuação do seu fluxo."
    ]
  },
  {
    "type": "condition-key-double-pressed",
    "color": "#F472B6",
    "icon": "repeat-outline",
    "kind": "CONDIÇÃO",
    "title": "Tecla pressionada X vezes",
    "summary": "Executa quando a tecla é pressionada a quantidade de vezes escolhida.",
    "slug": "tecla-pressionada-x-vezes",
    "category": "teclado",
    "purpose": "Executa quando a tecla é pressionada a quantidade de vezes escolhida.",
    "fields": [
      [
        "Tecla",
        "Abra o seletor e escolha uma tecla compatível."
      ],
      [
        "Quantidade de vezes",
        "Número de pressões/cliques necessários."
      ],
      [
        "Intervalo máximo",
        "Tempo máximo entre as pressões da sequência, em segundos."
      ],
      [
        "Resultado esperado",
        "Use a condição normal ou inverta o resultado."
      ]
    ],
    "example": [
      "Escolha Seta para direita, quantidade 2 e intervalo de 0,3 segundo.",
      "Conecte a ação de um avanço rápido."
    ],
    "result": "Dois apertos próximos ativam o avanço.",
    "rules": [
      "Precisa de entrada de teclado; não cria um botão de toque na tela.",
      "A quantidade é configurável; não está limitada a dois apertos.",
      "É preciso soltar e pressionar novamente; segurar não completa a sequência.",
      "Conecte as ações abaixo desta condição. Uma condição falsa impede somente a continuação do seu fluxo."
    ]
  },
  {
    "type": "condition-every-seconds",
    "color": "#22D3EE",
    "icon": "timer-outline",
    "kind": "CONDIÇÃO",
    "title": "A cada X segundos",
    "summary": "Executa novamente sempre que o intervalo escolhido é completado.",
    "slug": "a-cada-x-segundos",
    "category": "logica-e-tempo",
    "purpose": "Executa novamente sempre que o intervalo escolhido é completado.",
    "fields": [
      [
        "Intervalo",
        "Tempo em segundos entre ativações."
      ]
    ],
    "example": [
      "Defina intervalo de 2 segundos.",
      "Conecte Criar objeto para um inimigo."
    ],
    "result": "O fluxo cria um inimigo a cada intervalo concluído.",
    "rules": [
      "Use intervalo maior que zero.",
      "Diferente de Aguardar segundos, esta condição representa um ritmo periódico.",
      "Conecte as ações abaixo desta condição. Uma condição falsa impede somente a continuação do seu fluxo."
    ]
  },
  {
    "type": "condition-random-chance",
    "color": "#FACC15",
    "icon": "dice-outline",
    "kind": "CONDIÇÃO",
    "title": "Chance aleatória",
    "summary": "Executa de acordo com a porcentagem de chance escolhida.",
    "slug": "chance-aleatoria",
    "category": "logica-e-tempo",
    "purpose": "Executa de acordo com a porcentagem de chance escolhida.",
    "fields": [
      [
        "Chance",
        "Porcentagem de sucesso entre 0 e 100."
      ],
      [
        "Resultado esperado",
        "Use a condição normal ou inverta o resultado."
      ]
    ],
    "example": [
      "Depois de um evento de coleta, configure chance de 25%.",
      "Conecte a criação de um bônus."
    ],
    "result": "Cada verificação tem uma chance de conceder o bônus.",
    "rules": [
      "25% não garante exatamente um acerto a cada quatro tentativas.",
      "Não deixe o sorteio sendo repetido a cada atualização se queria só uma tentativa por evento.",
      "Conecte as ações abaixo desta condição. Uma condição falsa impede somente a continuação do seu fluxo."
    ]
  }
];
