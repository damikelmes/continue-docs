import { defineConfig } from 'vitepress';
import { behaviorCategories, behaviorsByCategory } from './behavior-data.mjs';
import { expressionCategories, expressionsByCategory } from './expression-data.mjs';
import { nodeCategories, nodesByCategory } from './node-data.mjs';

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const isAccountSite = repositoryName?.toLowerCase().endsWith('.github.io');
const base = process.env.GITHUB_ACTIONS === 'true' && repositoryName && !isAccountSite
  ? `/${repositoryName}/`
  : '/';

const nodeSidebarItems = nodeCategories.map((category) => ({
  text: category.label,
  collapsed: true,
  items: nodesByCategory[category.key].map((node) => ({
    text: node.title,
    link: `/nos/${node.slug}`,
  })),
}));

const behaviorSidebarItems = behaviorCategories.map((category) => ({
  text: category.label,
  collapsed: true,
  items: behaviorsByCategory[category.key].map((behavior) => ({
    text: behavior.title,
    link: `/comportamentos/${behavior.slug}`,
  })),
}));

const expressionSidebarItems = expressionCategories.map((category) => ({
  text: category.label,
  collapsed: true,
  items: expressionsByCategory[category.key].map((expression) => ({
    text: expression.title,
    link: `/expressoes/${expression.slug}`,
  })),
}));

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
      { text: 'Início', link: '/' },
      { text: 'Todos os nós', link: '/nos/' },
      { text: 'Expressões', link: '/expressoes/' },
      { text: 'Editor', link: '/editor/visao-geral' },
      { text: 'Comportamentos', link: '/comportamentos/' },
      { text: 'Exportar', link: '/exportacao/' },
    ],
    sidebar: [
      {
        text: 'Primeiros passos',
        collapsed: true,
        items: [
          { text: 'Conheça a Continue', link: '/primeiros-passos/conheca-a-engine' },
          { text: 'Criar um projeto', link: '/primeiros-passos/criar-projeto' },
        ],
      },
      {
        text: 'Editor',
        collapsed: true,
        items: [
          { text: 'Visão geral', link: '/editor/visao-geral' },
          { text: 'Cenas, camadas e objetos', link: '/editor/cenas-camadas-objetos' },
          { text: 'Scripts visuais', link: '/editor/scripts-visuais' },
        ],
      },
      {
        text: 'Nós do script',
        collapsed: true,
        items: [
          { text: 'Todos os nós', link: '/nos/' },
          ...nodeSidebarItems,
        ],
      },
      {
        text: 'Lógica',
        collapsed: true,
        items: [
          { text: 'Condições', link: '/condicoes/' },
          { text: 'Repetições e execução', link: '/condicoes/repeticoes-e-execucao' },
          { text: 'Todas as expressões', link: '/expressoes/' },
          ...expressionSidebarItems,
        ],
      },
      {
        text: 'Comportamentos',
        collapsed: true,
        items: [
          { text: 'Todos os comportamentos', link: '/comportamentos/' },
          ...behaviorSidebarItems,
        ],
      },
      {
        text: 'Exportação',
        collapsed: true,
        items: [
          { text: 'Como exportar', link: '/exportacao/' },
          { text: 'Android', link: '/exportacao/android' },
          { text: 'Windows', link: '/exportacao/windows' },
          { text: 'Web (HTML5)', link: '/exportacao/web' },
        ],
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
