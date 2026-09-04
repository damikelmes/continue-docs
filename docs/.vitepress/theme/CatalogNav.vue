<script setup lang="ts">
import NodeIcon from './NodeIcon.vue';

defineProps<{ groups: { key: string; label: string; icon: string; color: string; count: number }[] }>();
</script>

<template>
  <p id="categorias" class="catalog-nav-label">Ir direto para uma categoria</p>
  <nav class="catalog-nav" aria-labelledby="categorias">
    <a v-for="group in groups" :key="group.key" :href="`#${group.key}`">
      <NodeIcon type="plain" :icon="group.icon" :color="group.color" :size="20" />
      <span>{{ group.label }}</span><small>{{ group.count }}</small>
    </a>
  </nav>
</template>
