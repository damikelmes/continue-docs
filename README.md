# Continue Docs

Documentação pública de uso da engine Continue. Este projeto contém somente guias para usuários, referências de ações, condições, comportamentos e expressões. O código-fonte da engine não faz parte deste repositório.

## Trabalhar na documentação

```bash
npm install
npm run docs:dev
```

Os textos ficam na pasta `docs` e usam Markdown.

## Gerar o site

```bash
npm run docs:build
```

## Publicar manualmente no GitHub Pages

1. Crie um repositório público no GitHub.
2. Envie apenas o conteúdo desta pasta para o repositório.
3. Em **Settings → Pages**, escolha **GitHub Actions** como fonte.
4. Quando quiser publicar, abra **Actions → Publicar documentação → Run workflow**.

Atualizar os textos não publica o site sozinho. Uma nova versão só entra no ar quando você executar a ação manualmente.

O endereço será semelhante a `https://seu-usuario.github.io/nome-do-repositorio/`. O caminho é detectado automaticamente durante a publicação.
