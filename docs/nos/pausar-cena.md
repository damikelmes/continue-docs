---
title: "Pausar cena"
description: "Congela objetos, física, comportamentos e animações da cena."
---

<div class="node-page-kicker" style="--node-page-color: #FBBF24">
  <span class="node-page-meta">
    <span class="node-kind">AÇÃO</span>
    <span class="node-category-name">Cena</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #FBBF24">
  <span class="node-title-icon"><NodeIcon type="action-pause-scene" icon="pause-circle-outline" color="#FBBF24" /></span>
  <span>Pausar cena</span>
</h1>

<p class="node-purpose">Congela objetos, física, comportamentos e animações da cena.</p>

## Para que serve

Congela objetos, física, comportamentos e animações da cena.

## Campos

<div class="doc-field-list" style="--doc-field-color: #FBBF24">
  <div class="doc-field-item">
    <strong>Modo de execução</strong>
    <p>Escolha quando a ação deve ser aplicada. Para um comando pontual, evite repetições desnecessárias.</p>
  </div>
</div>

## Exemplo

<div class="node-example" style="--node-page-color: #FBBF24">
  <ol>
    <li>Prepare um fluxo para continuar usando outra entrada.</li>
    <li>Conecte uma condição de tecla ou toque a Pausar cena.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> Movimentos, física e animações da cena são congelados.</p>
</div>

## Regras

- Disponível no Script da cena e no Script global, não dentro da biblioteca.
- Prepare o caminho para Continuar cena antes de pausar.
- Ações comuns de movimento e aparência não devem ser usadas para atualizar a cena enquanto ela está pausada.

## Nós relacionados

- [Trocar de cena](./trocar-de-cena) — Abre outra cena do projeto usando a transição escolhida.
- [Voltar para a cena anterior](./voltar-para-cena-anterior) — Retorna para a última cena visitada e recupera seu estado.
- [Limpar estado salvo da cena](./limpar-estado-salvo-da-cena) — Apaga o estado guardado para a cena escolhida.
- [Manter objeto entre cenas](./manter-objeto-entre-cenas) — Leva o objeto e seu estado atual para as próximas cenas.

<a class="node-back-link" href="./">← Ver todos os nós</a>
