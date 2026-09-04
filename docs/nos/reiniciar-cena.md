---
title: "Reiniciar cena"
description: "Recarrega a cena atual desde o começo."
---

<div class="node-page-kicker" style="--node-page-color: #60A5FA">
  <span class="node-page-meta">
    <span class="node-kind">AÇÃO</span>
    <span class="node-category-name">Cena</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #60A5FA">
  <span class="node-title-icon"><NodeIcon type="action-restart-scene" icon="refresh-circle-outline" color="#60A5FA" :size="26" /></span>
  <span>Reiniciar cena</span>
</h1>

<p class="node-purpose">Recarrega a cena atual desde o começo.</p>

## Para que serve

Recarrega a cena atual desde o começo.

## Campos

<div class="doc-field-list" style="--doc-field-color: #60A5FA">
  <div class="doc-field-item">
    <strong>Modo de execução</strong>
    <p>Escolha quando a ação deve ser aplicada. Para um comando pontual, evite repetições desnecessárias.</p>
  </div>
</div>

## Exemplo

<div class="node-example" style="--node-page-color: #60A5FA">
  <ol>
    <li>Adicione um botão Tentar novamente.</li>
    <li>Conecte a condição de clique a Reiniciar cena.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> A cena atual recomeça.</p>
</div>

## Regras

- Disponível no Script da cena e no Script global, não dentro da biblioteca.
- A ação recria a cena; não a deixe executando incondicionalmente em todas as atualizações.

## Nós relacionados

- [Trocar de cena](./trocar-de-cena) — Abre outra cena do projeto usando a transição escolhida.
- [Voltar para a cena anterior](./voltar-para-cena-anterior) — Retorna para a última cena visitada e recupera seu estado.
- [Limpar estado salvo da cena](./limpar-estado-salvo-da-cena) — Apaga o estado guardado para a cena escolhida.
- [Manter objeto entre cenas](./manter-objeto-entre-cenas) — Leva o objeto e seu estado atual para as próximas cenas.

<a class="node-back-link" href="./">← Ver todos os nós</a>
