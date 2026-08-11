import DefaultTheme from 'vitepress/theme';
import type { Theme } from 'vitepress';
import GuideCard from './GuideCard.vue';
import NodeIcon from './NodeIcon.vue';
import './custom.css';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('GuideCard', GuideCard);
    app.component('NodeIcon', NodeIcon);
  },
} satisfies Theme;
