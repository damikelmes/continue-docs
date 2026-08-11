<script setup lang="ts">
import { computed } from 'vue';
import { withBase } from 'vitepress';
import NodeIcon from './NodeIcon.vue';

const props = withDefaults(
  defineProps<{
    color?: string;
    description: string;
    href: string;
    icon: string;
    title: string;
  }>(),
  { color: '#8b5cf6' },
);

const resolvedHref = computed(() => props.href.startsWith('#') ? props.href : withBase(props.href));
</script>

<template>
  <a class="guide-card" :href="resolvedHref" :style="{ '--guide-card-color': color }">
    <span class="guide-card-icon">
      <NodeIcon type="plain" :icon="icon" :color="color" :size="25" />
    </span>
    <span class="guide-card-copy">
      <strong>{{ title }}</strong>
      <small>{{ description }}</small>
    </span>
    <span class="guide-card-arrow">
      <NodeIcon type="plain" icon="chevron-forward" color="#8a8490" :size="17" />
    </span>
  </a>
</template>
