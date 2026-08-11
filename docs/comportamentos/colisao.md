---
title: "Colisão"
description: "Cria a área sólida usada para contatos e bloqueios."
---

<div class="behavior-page-kicker" style="--behavior-page-color: #FBBF24">
  <span class="behavior-page-icon"><BehaviorIcon type="collision" color="#FBBF24" :size="38" /></span>
  <span class="behavior-page-meta">
    <span class="behavior-kind">COMPORTAMENTO</span>
    <span class="behavior-category-name">Física e colisão</span>
  </span>
</div>

# Colisão

<p class="behavior-purpose">Cria a área sólida usada para contatos e bloqueios.</p>

## Para que serve

Permite que o objeto participe das verificações de colisão e das respostas físicas. A área acompanha o centro, o tamanho e a rotação atuais da instância.

## Campos

| Campo | O que configurar |
| --- | --- |
| **Configuração** | Não possui campos próprios; usa a largura, a altura, o centro e a rotação da instância. |

## Exemplo

<div class="behavior-example" style="--behavior-page-color: #FBBF24">
  <ol>
    <li>Adicione Colisão ao “Jogador” e à “Parede”.</li>
    <li>Adicione Corpo com gravidade ao jogador se quiser uma resposta física automática.</li>
    <li>Use uma condição de contato no script quando precisar executar uma ação.</li>
  </ol>
  <p class="behavior-result"><strong>Resultado:</strong> A engine reconhece quando as áreas dos dois objetos se encontram e pode impedir que o corpo atravesse a parede.</p>
</div>

## Regras

- A posição X e Y representa o centro real da área de colisão.
- Alterar largura, altura ou rotação atualiza a área usada nas próximas verificações.
- Use Ignorar colisão quando pares específicos não devem se bloquear.

## Comportamentos relacionados

- [Corpo com gravidade](./corpo-com-gravidade) — Aplica queda, peso, atrito, impulso e resposta física ao objeto.
- [Ignorar colisão](./ignorar-colisao) — Escolhe objetos que não devem colidir com este objeto.

<a class="behavior-back-link" href="./">← Ver todos os comportamentos</a>
