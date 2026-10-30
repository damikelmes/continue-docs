# Continue Docs

Esta pasta contém apenas o novo site de documentação da Continue. A engine atual está em Continue-Native, fora daqui.

- Explique o uso para usuários, não a implementação da engine.
- Consulte a engine atual antes de descrever um recurso. A documentação antiga pode servir de referência de tipografia, organização e linguagem, como pedido pelo usuário, mas não é fonte para afirmar que um recurso está disponível.
- Preserve a barra lateral nova. No conteúdo, mantenha as proporções de leitura da documentação antiga: Inter, parágrafos de 16 px, campos de 14 px e ícones pequenos alinhados ao título. Use os vetores e cores atuais do app, não as fontes antigas de ícones.
- Preserve nomes, categorias, cores e vetores atuais. Componentes visuais e navegação são compartilhados no site.
- Use português simples, exemplos práticos e frases curtas. Evite tabelas quando parágrafos curtos forem suficientes.
- Não prometa FPS, compatibilidade ou exportações sem verificar.
- Apenas dist/ é público. Nenhum arquivo desta pasta deve ser incluído no APK.
- Não altere a engine, não publique e não execute builds Android sem um pedido do usuário.
- Não adicione publicação automática ou dependências de execução sem necessidade.
- Rode npm run check e confira visualmente celular e computador após alterações de interface.
- sync-reference.mjs regenera somente reference.js e icons.js. Guias e exemplos são editados separadamente.
