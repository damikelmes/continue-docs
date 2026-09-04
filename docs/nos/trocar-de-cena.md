---
title: "Trocar de cena"
description: "Abre outra cena do projeto usando a transição escolhida."
---

<div class="node-page-kicker" style="--node-page-color: #A78BFA">
  <span class="node-page-meta">
    <span class="node-kind">AÇÃO</span>
    <span class="node-category-name">Cena</span>
  </span>
</div>

<h1 class="node-page-title" style="--node-page-color: #A78BFA">
  <span class="node-title-icon"><NodeIcon type="action-change-scene" icon="albums-outline" color="#A78BFA" /></span>
  <span>Trocar de cena</span>
</h1>

<p class="node-purpose">Abre outra cena do projeto usando a transição escolhida.</p>

## Para que serve

Abre outra cena do projeto usando a transição escolhida.

## Campos

<div class="doc-field-list" style="--doc-field-color: #A78BFA">
  <div class="doc-field-item">
    <strong>Cena</strong>
    <p>Cena que será aberta.</p>
  </div>
  <div class="doc-field-item">
    <strong>Ao abrir</strong>
    <p>Começar do início recria a cena; Continuar de onde parou recupera seu estado guardado.</p>
  </div>
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

<div class="node-example" style="--node-page-color: #A78BFA">
  <ol>
    <li>Na cena Menu, adicione Objeto clicado para o botão Jogar.</li>
    <li>Conecte Trocar de cena, selecione Fase 1 e Começar do início.</li>
  </ol>
  <p class="node-result"><strong>Resultado:</strong> O botão abre a fase escolhida.</p>
</div>

## Regras

- Disponível no Script da cena e no Script global, não dentro da biblioteca.
- Se não existir estado guardado, a cena começa do início.
- Não deixe uma troca incondicional se repetindo a cada atualização.

## Nós relacionados

- [Voltar para a cena anterior](./voltar-para-cena-anterior) — Retorna para a última cena visitada e recupera seu estado.
- [Limpar estado salvo da cena](./limpar-estado-salvo-da-cena) — Apaga o estado guardado para a cena escolhida.
- [Manter objeto entre cenas](./manter-objeto-entre-cenas) — Leva o objeto e seu estado atual para as próximas cenas.
- [Reiniciar cena](./reiniciar-cena) — Recarrega a cena atual desde o começo.

<a class="node-back-link" href="./">← Ver todos os nós</a>
