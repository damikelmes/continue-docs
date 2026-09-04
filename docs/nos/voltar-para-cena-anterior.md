---
title: "Voltar para a cena anterior"
description: "Retorna para a última cena visitada e recupera seu estado."
---

<div class="node-page-kicker" style="--node-page-color: #C4B5FD">
  <span class="node-page-meta">
    <span class="node-kind">AÇÃO</span>
    <span class="node-category-name">Cena</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #C4B5FD">
  <span class="node-title-icon"><NodeIcon type="action-go-back-scene" icon="return-up-back-outline" color="#C4B5FD" :size="26" /></span>
  <span>Voltar para a cena anterior</span>
</h1>

<p class="node-purpose">Retorna para a última cena visitada e recupera seu estado.</p>

## Para que serve

Retorna para a última cena visitada e recupera seu estado.

## Campos

<div class="doc-field-list" style="--doc-field-color: #C4B5FD">
  <div class="doc-field-item">
    <strong>Transição</strong>
    <p>Instantânea, Desaparecer, Aparecer ou Desaparecer e aparecer.</p>
  </div>
  <div class="doc-field-item">
    <strong>Duração e cor</strong>
    <p>Configure o tempo e a cor quando houver um efeito de transição.</p>
  </div>
  <div class="doc-field-item">
    <strong>Modo de execução</strong>
    <p>Escolha quando a ação deve ser aplicada. Para um comando pontual, evite repetições desnecessárias.</p>
  </div>
</div>

## Exemplo

<div class="node-example" style="--node-page-color: #C4B5FD">
  <ol>
    <li>Abra outra cena durante a partida.</li>
    <li>No botão Voltar, conecte a condição de clique a esta ação.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> O jogo retorna à última cena visitada e recupera seu estado.</p>
</div>

## Regras

- Disponível no Script da cena e no Script global, não dentro da biblioteca.
- É necessário existir uma cena anterior no histórico da partida.

## Nós relacionados

- [Trocar de cena](./trocar-de-cena) — Abre outra cena do projeto usando a transição escolhida.
- [Limpar estado salvo da cena](./limpar-estado-salvo-da-cena) — Apaga o estado guardado para a cena escolhida.
- [Manter objeto entre cenas](./manter-objeto-entre-cenas) — Leva o objeto e seu estado atual para as próximas cenas.
- [Reiniciar cena](./reiniciar-cena) — Recarrega a cena atual desde o começo.

<a class="node-back-link" href="./">← Ver todos os nós</a>
