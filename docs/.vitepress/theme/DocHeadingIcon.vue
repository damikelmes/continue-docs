<script setup lang="ts">
import NodeIcon from './NodeIcon.vue';

withDefaults(
  defineProps<{
    color: string;
    icon: string;
    type?: string;
  }>(),
  {
    type: 'plain',
  },
);
</script>

<template>
  <span class="doc-heading-icon" :style="{ '--doc-heading-color': color }">
    <NodeIcon :type="type" :icon="icon" :color="color" />
  </span>
</template>
