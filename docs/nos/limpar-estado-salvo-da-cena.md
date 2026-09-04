---
title: "Limpar estado salvo da cena"
description: "Apaga o estado guardado para a cena escolhida."
---

<div class="node-page-kicker" style="--node-page-color: #FB7185">
  <span class="node-page-meta">
    <span class="node-kind">AÇÃO</span>
    <span class="node-category-name">Cena</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #FB7185">
  <span class="node-title-icon"><NodeIcon type="action-clear-scene-state" icon="trash-bin-outline" color="#FB7185" :size="26" /></span>
  <span>Limpar estado salvo da cena</span>
</h1>

<p class="node-purpose">Apaga o estado guardado para a cena escolhida.</p>

## Para que serve

Apaga o estado guardado para a cena escolhida.

## Campos

<div class="doc-field-list" style="--doc-field-color: #FB7185">
  <div class="doc-field-item">
    <strong>Cena com estado salvo</strong>
    <p>Cena cujo estado temporário deve ser descartado.</p>
  </div>
  <div class="doc-field-item">
    <strong>Modo de execução</strong>
    <p>Escolha quando a ação deve ser aplicada. Para um comando pontual, evite repetições desnecessárias.</p>
  </div>
</div>

## Exemplo

<div class="node-example" style="--node-page-color: #FB7185">
  <ol>
    <li>Escolha a cena Fase 1.</li>
    <li>Execute ao decidir que a próxima visita não deve recuperar o progresso anterior.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> O estado guardado da fase é descartado.</p>
</div>

## Regras

- Disponível no Script da cena e no Script global, não dentro da biblioteca.
- Não exclui a cena nem arquivos do projeto.
- O estado de navegação não é um salvamento permanente de partida.

## Nós relacionados

- [Trocar de cena](./trocar-de-cena) — Abre outra cena do projeto usando a transição escolhida.
- [Voltar para a cena anterior](./voltar-para-cena-anterior) — Retorna para a última cena visitada e recupera seu estado.
- [Manter objeto entre cenas](./manter-objeto-entre-cenas) — Leva o objeto e seu estado atual para as próximas cenas.
- [Reiniciar cena](./reiniciar-cena) — Recarrega a cena atual desde o começo.

<a class="node-back-link" href="./">← Ver todos os nós</a>
