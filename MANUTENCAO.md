# Manutenção do site

Esta pasta é separada de Continue-Native. Nada daqui entra no APK da engine ou dos jogos.

## Abrir e conferir

```sh
npm run preview
```

Abra http://127.0.0.1:4173 e encerre com Ctrl+C. Não é preciso instalar pacotes. Também é possível abrir dist/index.html diretamente.

```sh
npm run check
```

A verificação cobre o catálogo, os arquivos públicos, os links, os ícones e a renderização das rotas. Depois de mudar o visual, confira também celular e computador.

## Conteúdo

- dist/guides.js: guias para usuários.
- dist/behaviors.js: explicações dos comportamentos.
- dist/examples.js: exemplos de nós e expressões.
- dist/app.js e dist/app.css: navegação e visual compartilhados.
- dist/reference.js e dist/icons.js: catálogo e vetores da engine atual.
- dist/assets/inter-latin.woff2: fonte Inter local. Sua licença acompanha o arquivo.

Para atualizar apenas o catálogo, com Continue-Native na pasta ao lado:

```sh
npm run sync
```

Os guias e exemplos são revisados separadamente. A sincronização não copia implementações da engine e não altera a engine.

## Publicação manual

Repositório: https://github.com/damikelmes/continue-docs

Site: https://damikelmes.github.io/continue-docs/

O fluxo Publicar documentação continua sendo manual, por workflow_dispatch. Ele verifica os arquivos e publica somente dist/. Não instala dependências, não compila Android e não publica a cada commit.

O repositório contém apenas o site e suas ferramentas. Nunca envie o código ou os arquivos particulares de Continue-Native. A fonte Inter é usada apenas pelo site e não altera os APKs.

## Padrão visual

Preserve a barra lateral nova. A fonte e as proporções de leitura seguem a documentação anterior; os ícones e as cores vêm do aplicativo atual. Não use as antigas fontes de ícones.

O tema fica somente no topo. Não recrie o rodapé lateral com frases nem o índice Nesta página.
