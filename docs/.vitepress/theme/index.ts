import DefaultTheme from 'vitepress/theme';
import type { Theme } from 'vitepress';
import BehaviorIcon from './BehaviorIcon.vue';
import FlowExample from './FlowExample.vue';
import GuideCard from './GuideCard.vue';
import NodeIcon from './NodeIcon.vue';
import './custom.css';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('BehaviorIcon', BehaviorIcon);
    app.component('FlowExample', FlowExample);
    app.component('GuideCard', GuideCard);
    app.component('NodeIcon', NodeIcon);
  },
} satisfies Theme;
