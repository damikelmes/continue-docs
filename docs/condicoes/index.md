---
title: Condições
description: Nós que verificam uma situação antes de continuar o fluxo.
pageClass: guide-page
---

# <DocHeadingIcon icon="git-branch" color="#FACC15" :size="22" /> Condições

Uma condição deixa os próximos nós continuarem somente quando o resultado for verdadeiro. Escolha um grupo para abrir os nós correspondentes.

<div class="guide-grid">
  <GuideCard href="/nos/#interacao-e-toque" icon="finger-print-outline" color="#34d399" title="Interação e toque" description="Clique, pressão e posição do dedo." />
  <GuideCard href="/nos/#estado-do-objeto" icon="cube-outline" color="#60a5fa" title="Estado do objeto" description="Existência, movimento, chão, pulo e criação." />
  <GuideCard href="/nos/#logica-e-tempo" icon="git-compare-outline" color="#fb923c" title="Lógica e tempo" description="Comparações, comportamentos e espera." />
  <GuideCard href="/nos/" icon="grid-outline" color="#a78bfa" title="Ver todos os nós" description="Abra a lista completa igual à do editor." />
</div>

## <DocHeadingIcon icon="git-compare-outline" color="#FACC15" /> Como uma condição funciona

Coloque a condição antes das ações que ela deve controlar. Quando a condição for verdadeira, o fluxo segue; quando for falsa, as ações conectadas abaixo não são executadas.

### Resultado invertido

Você pode inverter o resultado esperado. Assim, **Objeto está na cena** também pode verificar **Objeto não está na cena** sem precisar de outro tipo de condição.

### Condição contínua ou de um único momento

- **Objeto pressionado** permanece verdadeiro enquanto o dedo estiver pressionando.
- **Objeto clicado** fica verdadeiro uma vez para cada novo toque.
- **Objeto foi criado** e **Objeto foi excluído** verificam exatamente o momento do acontecimento.

::: tip Abra a página do nó
Cada condição possui uma página própria com campos, exemplo prático e regras de uso.
:::
