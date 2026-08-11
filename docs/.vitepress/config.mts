import { defineConfig } from 'vitepress';

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const isAccountSite = repositoryName?.toLowerCase().endsWith('.github.io');
const base = process.env.GITHUB_ACTIONS === 'true' && repositoryName && !isAccountSite
  ? `/${repositoryName}/`
  : '/';

export default defineConfig({
  lang: 'pt-BR',
  title: 'Continue Docs',
  description: 'Aprenda a criar jogos com a engine Continue.',
  base,
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ['meta', { name: 'theme-color', content: '#0d0b10' }],
    ['link', { rel: 'icon', type: 'image/png', href: `${base}logo.png` }],
  ],
  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'Continue Docs',
    nav: [
      { text: 'Começar', link: '/primeiros-passos/criar-projeto' },
      { text: 'Editor', link: '/editor/visao-geral' },
      { text: 'Ações', link: '/acoes/' },
      { text: 'Comportamentos', link: '/comportamentos/' },
    ],
    sidebar: [
      {
        text: 'Primeiros passos',
        items: [
          { text: 'Conheça a Continue', link: '/primeiros-passos/conheca-a-engine' },
          { text: 'Criar um projeto', link: '/primeiros-passos/criar-projeto' },
        ],
      },
      {
        text: 'Editor',
        items: [
          { text: 'Visão geral', link: '/editor/visao-geral' },
          { text: 'Cenas, camadas e objetos', link: '/editor/cenas-camadas-objetos' },
          { text: 'Scripts visuais', link: '/editor/scripts-visuais' },
        ],
      },
      {
        text: 'Ações',
        collapsed: false,
        items: [
          { text: 'Visão geral', link: '/acoes/' },
          { text: 'Movimento e posição', link: '/acoes/movimento-e-posicao' },
          { text: 'Aparência e animação', link: '/acoes/aparencia-e-animacao' },
          { text: 'Câmera', link: '/acoes/camera' },
          { text: 'Objetos e comportamentos', link: '/acoes/objetos-e-comportamentos' },
        ],
      },
      {
        text: 'Lógica',
        items: [
          { text: 'Condições', link: '/condicoes/' },
          { text: 'Repetições e execução', link: '/condicoes/repeticoes-e-execucao' },
          { text: 'Expressões numéricas', link: '/expressoes/' },
        ],
      },
      {
        text: 'Comportamentos',
        items: [{ text: 'Todos os comportamentos', link: '/comportamentos/' }],
      },
      {
        text: 'Exportação',
        items: [{ text: 'Jogo para Windows', link: '/exportacao/windows' }],
      },
    ],
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: 'Pesquisar', buttonAriaLabel: 'Pesquisar na documentação' },
          modal: {
            noResultsText: 'Nenhum resultado encontrado',
            resetButtonTitle: 'Limpar pesquisa',
            footer: {
              selectText: 'selecionar',
              navigateText: 'navegar',
              closeText: 'fechar',
            },
          },
        },
      },
    },
    outline: { level: [2, 3], label: 'Nesta página' },
    docFooter: { prev: 'Página anterior', next: 'Próxima página' },
    lastUpdated: { text: 'Atualizado em', formatOptions: { dateStyle: 'short' } },
    returnToTopLabel: 'Voltar ao topo',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Tema',
    lightModeSwitchTitle: 'Usar tema claro',
    darkModeSwitchTitle: 'Usar tema escuro',
    footer: {
      message: 'Documentação de uso da engine Continue.',
      copyright: 'Feito para ajudar você a criar jogos.',
    },
  },
});
