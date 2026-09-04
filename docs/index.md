---
layout: page
sidebar: false
aside: false
title: Documentação
description: Aprenda o básico da Continue, encontre um recurso e veja como exportar seu jogo.
pageClass: continue-home
---

<main class="home-shell">
  <section class="home-hero-simple" aria-labelledby="home-title">
    <span class="home-eyebrow">DOCUMENTAÇÃO DA CONTINUE</span>
    <h1 id="home-title">Sua ideia começa aqui.</h1>
    <p>Crie jogos conectando nós, combinando comportamentos e montando cenas. Aprenda no seu ritmo, do primeiro objeto à exportação.</p>
    <div class="home-actions">
      <a class="home-primary-action" href="./primeiros-passos/conheca-a-engine"><NodeIcon type="plain" icon="book-outline" color="#fff" /> Aprender o básico <span aria-hidden="true">→</span></a>
      <a class="home-secondary-action" href="./primeiros-passos/criar-projeto"><NodeIcon type="plain" icon="add" color="#7c3aed" /> Criar meu primeiro projeto</a>
    </div>
    <p class="home-search-tip">Já sabe o que procura? Use a busca no topo pelo nome do recurso.</p>
  </section>

  <section aria-labelledby="explore-title">
    <div class="home-section-heading"><h2 id="explore-title">O que você quer fazer?</h2><p>Escolha um assunto. Cada guia explica por onde começar e o que vem depois.</p></div>
    <div class="guide-grid home-guide-grid home-topic-grid">
      <GuideCard href="/editor/visao-geral" icon="hand-left-outline" color="#A78BFA" title="Usar o editor" description="Entenda os botões, as abas e as ferramentas da cena." />
      <GuideCard href="/editor/cenas-camadas-objetos" icon="cube-outline" color="#60A5FA" title="Montar objetos e cenas" description="Saiba o que é um objeto, uma instância e uma camada." />
      <GuideCard href="/editor/scripts-visuais" type="flow-glyph" icon="git-branch" color="#F472B6" title="Criar a lógica com nós" description="Conecte ações e condições e entenda a ordem dos fluxos." />
      <GuideCard href="/editor/tipos-de-script" icon="code-slash-outline" color="#4ADE80" title="Escolher onde fica o script" description="Compare Script da cena, Script global e biblioteca." />
      <GuideCard href="/editor/combinar-comportamentos" icon="extension-puzzle-outline" color="#FB923C" title="Combinar comportamentos" description="Junte imagem, movimento, colisão, animação e efeitos." />
      <GuideCard href="/editor/aparencia-e-animacao" icon="images" color="#C084FC" title="Dar vida ao visual" description="Gire só o sprite, anime propriedades e crie efeitos." />
    </div>
  </section>

  <section class="home-reference" aria-labelledby="reference-title">
    <div class="home-section-heading"><h2 id="reference-title">Encontre um recurso</h2><p>Consulte o que ele faz, os campos, as regras e exemplos de uso.</p></div>
    <div class="guide-grid home-reference-grid">
      <GuideCard href="/nos/" icon="search-outline" color="#A78BFA" title="Nós" description="Ações, condições e repetições, separadas por categoria." />
      <GuideCard href="/comportamentos/" icon="extension-puzzle-outline" color="#FB923C" title="Comportamentos" description="As funções que você adiciona aos objetos." />
      <GuideCard href="/expressoes/" icon="calculator-outline" color="#2DD4BF" title="Expressões" description="Posições, variáveis, tempo e cálculos nos campos." />
    </div>
  </section>

  <section class="home-export" aria-labelledby="export-title">
    <div class="home-section-heading"><h2 id="export-title">Seu jogo pronto para compartilhar</h2><p>Escolha o destino para entender a configuração e o arquivo que será gerado.</p></div>
    <div class="guide-grid home-reference-grid">
      <GuideCard href="/exportacao/android" icon="logo-android" color="#63D98B" title="Android" description="APK para instalar. AAB para a Google Play." />
      <GuideCard href="/exportacao/windows" icon="desktop-outline" color="#69A7FF" title="Windows" description="ZIP com o executável e os arquivos do jogo." />
      <GuideCard href="/exportacao/web" icon="globe-outline" color="#67E8F9" title="Web" description="Um jogo de navegador para publicar no itch.io e outros sites." />
    </div>
  </section>
</main>
