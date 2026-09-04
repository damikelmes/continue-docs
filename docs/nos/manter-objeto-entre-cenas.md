---
title: "Manter objeto entre cenas"
description: "Leva o objeto e seu estado atual para as próximas cenas."
---

<div class="node-page-kicker" style="--node-page-color: #34D399">
  <span class="node-page-meta">
    <span class="node-kind">AÇÃO</span>
    <span class="node-category-name">Cena</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #34D399">
  <span class="node-title-icon"><NodeIcon type="action-persist-object" icon="link-outline" color="#34D399" :size="26" /></span>
  <span>Manter objeto entre cenas</span>
</h1>

<p class="node-purpose">Leva o objeto e seu estado atual para as próximas cenas.</p>

## Para que serve

Leva o objeto e seu estado atual para as próximas cenas.

## Campos

<div class="doc-field-list" style="--doc-field-color: #34D399">
  <div class="doc-field-item">
    <strong>Objeto</strong>
    <p>Escolha o objeto de destino. Nas ações com seleção múltipla, os objetos marcados recebem a mesma configuração.</p>
  </div>
  <div class="doc-field-item">
    <strong>Instâncias</strong>
    <p>Nas ações, escolha todas ou uma específica. Nas condições, escolha qualquer, todas ou uma específica.</p>
  </div>
  <div class="doc-field-item">
    <strong>Modo de execução</strong>
    <p>Escolha quando a ação deve ser aplicada. Para um comando pontual, evite repetições desnecessárias.</p>
  </div>
</div>

## Exemplo

<div class="node-example" style="--node-page-color: #34D399">
  <ol>
    <li>Selecione Jogador e a instância que deve continuar.</li>
    <li>Execute antes de trocar de cena.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> O personagem acompanha as próximas mudanças de cena com seu estado atual.</p>
</div>

## Regras

- Disponível no Script da cena e no Script global, não dentro da biblioteca.
- Confira se o destino já possui uma cópia do mesmo objeto para evitar duplicações indesejadas.

## Nós relacionados

- [Trocar de cena](./trocar-de-cena) — Abre outra cena do projeto usando a transição escolhida.
- [Voltar para a cena anterior](./voltar-para-cena-anterior) — Retorna para a última cena visitada e recupera seu estado.
- [Limpar estado salvo da cena](./limpar-estado-salvo-da-cena) — Apaga o estado guardado para a cena escolhida.
- [Reiniciar cena](./reiniciar-cena) — Recarrega a cena atual desde o começo.

<a class="node-back-link" href="./">← Ver todos os nós</a>
