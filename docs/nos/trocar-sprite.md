---
title: "Trocar sprite"
description: "Troca a imagem exibida pelo objeto."
---

<div class="node-page-kicker" style="--node-page-color: #C084FC">
  <span class="node-page-icon"><NodeIcon type="action-set-object-sprite" icon="images" color="#C084FC" :size="38" /></span>
  <span class="node-page-meta">
    <span class="node-kind">AÇÃO</span>
    <span class="node-category-name">Aparência</span>
  </span>
</div>

# Trocar sprite

<p class="node-purpose">Troca a imagem exibida pelo objeto.</p>

## Para que serve

Muda o sprite atual por outro sprite já criado no mesmo projeto.

## Campos

| Campo | O que configurar |
| --- | --- |
| **Objeto de destino** | O objeto que receberá a ação. |
| **Instâncias** | Escolha todas as instâncias ou uma instância específica, quando essa opção aparecer. |
| **Sprite** | Nome do sprite que será exibido. |
| **Modo de execução** | Sempre, Uma única vez, Quantidade ou Por tempo. |

## Exemplo

<div class="node-example" style="--node-page-color: #C084FC">
  <ol>
    <li>Crie os sprites “Porta fechada” e “Porta aberta”.</li>
    <li>Escolha “Porta aberta” quando a chave for coletada.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> O objeto passa a mostrar a imagem da porta aberta.</p>
</div>

## Regras

- O objeto precisa existir na cena quando o fluxo executar este nó.
- O sprite precisa existir no projeto.
- A troca não cria uma animação entre as imagens.
- O tamanho configurado da instância é preservado.
- Escolha o modo de execução de acordo com a duração desejada. “Uma única vez” não mantém uma ação contínua ativa.

## Nós relacionados

- [Trocar animação](./trocar-animacao) — Reproduz uma animação de sprites pelo nome.
- [Reproduzir animação de propriedades](./reproduzir-animacao-de-propriedades) — Inicia ou continua uma animação de propriedades.
- [Recomeçar animação de propriedades](./recomecar-animacao-de-propriedades) — Reinicia uma animação de propriedades no primeiro quadro.
- [Pausar animação de propriedades](./pausar-animacao-de-propriedades) — Pausa a animação sem perder o progresso.

<a class="node-back-link" href="./">← Ver todos os nós</a>
