<script setup lang="ts">
import { computed } from 'vue';
import NodeIcon from './NodeIcon.vue';

type FlowField = {
  chips?: string[];
  label: string;
  value?: string;
};

type FlowNode = {
  color: string;
  condition?: boolean;
  description?: string;
  fields?: FlowField[];
  icon: string;
  kind: 'AÇÃO' | 'CONDIÇÃO';
  newFlow?: boolean;
  title: string;
  type: string;
};

const props = defineProps<{
  variant: 'correct-order' | 'delayed-order' | 'multiple-targets';
}>();

const examples: Record<
  typeof props.variant,
  { label: string; nodes: FlowNode[]; tone: 'good' | 'neutral' | 'warning' }
> = {
  'correct-order': {
    label: 'ORDEM RECOMENDADA',
    tone: 'good',
    nodes: [
      {
        color: '#FB923C',
        condition: true,
        icon: 'hand-left-outline',
        kind: 'CONDIÇÃO',
        newFlow: true,
        title: 'Objeto pressionado',
        type: 'condition-object-pressed',
        fields: [{ label: 'OBJETO', value: 'Botão Direita' }],
      },
      {
        color: '#60A5FA',
        icon: 'speedometer-outline',
        kind: 'AÇÃO',
        title: 'Mover em X',
        type: 'action-move-object-x',
        fields: [
          { label: 'OBJETO', value: 'Jogador' },
          { label: 'EXECUÇÃO', value: 'Sempre' },
        ],
      },
      {
        color: '#60A5FA',
        description: 'Este fluxo lê a posição depois do movimento.',
        icon: 'videocam',
        kind: 'AÇÃO',
        newFlow: true,
        title: 'Centralizar câmera',
        type: 'action-center-camera-on-object',
        fields: [
          { label: 'OBJETO', value: 'Jogador' },
          { label: 'EXECUÇÃO', value: 'Sempre' },
        ],
      },
    ],
  },
  'delayed-order': {
    label: 'PODE CAUSAR ATRASO',
    tone: 'warning',
    nodes: [
      {
        color: '#60A5FA',
        description: 'A câmera lê a posição antes de o jogador se mover.',
        icon: 'videocam',
        kind: 'AÇÃO',
        newFlow: true,
        title: 'Centralizar câmera',
        type: 'action-center-camera-on-object',
        fields: [
          { label: 'OBJETO', value: 'Jogador' },
          { label: 'EXECUÇÃO', value: 'Sempre' },
        ],
      },
      {
        color: '#FB923C',
        condition: true,
        icon: 'hand-left-outline',
        kind: 'CONDIÇÃO',
        newFlow: true,
        title: 'Objeto pressionado',
        type: 'condition-object-pressed',
        fields: [{ label: 'OBJETO', value: 'Botão Direita' }],
      },
      {
        color: '#60A5FA',
        icon: 'speedometer-outline',
        kind: 'AÇÃO',
        title: 'Mover em X',
        type: 'action-move-object-x',
        fields: [
          { label: 'OBJETO', value: 'Jogador' },
          { label: 'EXECUÇÃO', value: 'Sempre' },
        ],
      },
    ],
  },
  'multiple-targets': {
    label: 'UM NÓ, VÁRIOS OBJETOS',
    tone: 'neutral',
    nodes: [
      {
        color: '#2DD4BF',
        description: 'A mesma ação será aplicada a todos os objetos marcados.',
        icon: 'water-outline',
        kind: 'AÇÃO',
        newFlow: true,
        title: 'Alterar transparência',
        type: 'action-set-object-opacity',
        fields: [
          {
            chips: ['Jogador', 'Inimigo', 'Caixa'],
            label: 'OBJETOS',
          },
          { label: 'INSTÂNCIAS', value: 'Todas' },
          { label: 'TRANSPARÊNCIA', value: '50%' },
        ],
      },
    ],
  },
};

const example = computed(() => examples[props.variant]);
</script>

<template>
  <section class="flow-example" :class="`flow-example-${example.tone}`">
    <header class="flow-example-bar">
      <span class="flow-example-mark"><i /></span>
      <strong>SCRIPT DA CENA</strong>
      <span class="flow-example-status">{{ example.label }}</span>
    </header>

    <div class="flow-example-canvas">
      <template v-for="(node, index) in example.nodes" :key="`${variant}-${node.title}-${index}`">
        <div v-if="node.newFlow" class="flow-example-break">
          <i />
          <span>NOVO FLUXO</span>
          <i />
        </div>
        <div v-else class="flow-example-connector" :style="{ '--flow-node-color': node.color }">
          <i />
          <span>+</span>
          <i />
        </div>

        <article class="flow-example-node" :style="{ '--flow-node-color': node.color }">
          <div class="flow-example-node-header">
            <span v-if="node.newFlow" class="flow-example-toggle">⌄</span>
            <span class="flow-example-icon">
              <NodeIcon :type="node.type" :icon="node.icon" :color="node.color" :size="25" />
            </span>
            <span class="flow-example-copy">
              <small>{{ node.kind }}</small>
              <strong>{{ node.title }}</strong>
              <em v-if="node.condition">Executa o próximo nó</em>
            </span>
            <span v-if="node.condition" class="flow-example-true">True ↔</span>
          </div>

          <p v-if="node.description" class="flow-example-description">
            {{ node.description }}
          </p>

          <div v-if="node.fields?.length" class="flow-example-fields">
            <div v-for="field in node.fields" :key="field.label" class="flow-example-field">
              <small>{{ field.label }}</small>
              <div v-if="field.chips" class="flow-example-chips">
                <span v-for="chip in field.chips" :key="chip">{{ chip }}</span>
              </div>
              <strong v-else>{{ field.value }}</strong>
            </div>
          </div>
        </article>
      </template>
    </div>
  </section>
</template>

<style scoped>
.flow-example {
  overflow: hidden;
  margin: 20px 0 28px;
  border: 1px solid #2d2931;
  border-radius: 22px;
  background: #09090a;
  box-shadow: 0 22px 52px rgba(0, 0, 0, 0.2);
}

.flow-example-bar {
  display: flex;
  min-height: 48px;
  gap: 10px;
  align-items: center;
  border-bottom: 1px solid #29262d;
  background: #121214;
  padding: 0 15px;
}

.flow-example-bar > strong {
  color: #9b949f;
  font-size: 10px;
  letter-spacing: 0.12em;
}

.flow-example-mark {
  position: relative;
  width: 25px;
  height: 25px;
  border: 2px solid #d8d3db;
  border-radius: 7px;
}

.flow-example-mark i {
  position: absolute;
  right: -3px;
  bottom: -3px;
  width: 9px;
  height: 9px;
  border: 2px solid #121214;
  border-radius: 3px;
  background: #8b5cf6;
}

.flow-example-status {
  margin-left: auto;
  border-radius: 999px;
  background: #252228;
  color: #aaa3ae;
  padding: 5px 8px;
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 0.08em;
}

.flow-example-good .flow-example-status {
  background: rgba(52, 211, 153, 0.12);
  color: #6ee7b7;
}

.flow-example-warning .flow-example-status {
  background: rgba(251, 113, 133, 0.12);
  color: #fda4af;
}

.flow-example-canvas {
  max-width: 480px;
  margin: 0 auto;
  padding: 18px 18px 26px;
}

.flow-example-break {
  display: flex;
  height: 34px;
  gap: 9px;
  align-items: center;
}

.flow-example-break i {
  height: 1px;
  background: #302c32;
  flex: 1;
}

.flow-example-break span {
  color: #605a63;
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 0.12em;
}

.flow-example-connector {
  display: flex;
  height: 52px;
  align-items: center;
  flex-direction: column;
  margin: -10px 0;
}

.flow-example-connector i {
  width: 3px;
  min-height: 12px;
  border-radius: 2px;
  background: var(--flow-node-color);
  flex: 1;
}

.flow-example-connector span {
  display: flex;
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--flow-node-color);
  border-radius: 50%;
  background: #111113;
  color: var(--flow-node-color);
  font-size: 19px;
  font-weight: 700;
  line-height: 1;
}

.flow-example-node {
  position: relative;
  z-index: 1;
  border: 2px solid transparent;
  border-radius: 18px;
  background: #151517;
  padding: 12px;
}

.flow-example-node-header {
  display: flex;
  min-width: 0;
  gap: 12px;
  align-items: center;
}

.flow-example-toggle {
  width: 18px;
  margin-left: -2px;
  margin-right: -6px;
  color: #9b939f;
  font-size: 20px;
  line-height: 1;
  text-align: center;
}

.flow-example-icon {
  display: flex;
  width: 42px;
  height: 42px;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
}

.flow-example-copy {
  display: block;
  min-width: 0;
  flex: 1;
}

.flow-example-copy small,
.flow-example-copy strong,
.flow-example-copy em {
  display: block;
}

.flow-example-copy small {
  color: var(--flow-node-color);
  font-size: 9px;
  font-weight: 900;
  letter-spacing: 0.12em;
  line-height: 13px;
}

.flow-example-copy strong {
  margin-top: 2px;
  color: #fff;
  font-size: 15px;
  font-weight: 900;
  line-height: 20px;
}

.flow-example-copy em {
  margin-top: 2px;
  color: #77717c;
  font-size: 9px;
  font-style: normal;
  font-weight: 700;
  line-height: 13px;
}

.flow-example-true {
  color: #86efac;
  font-size: 10px;
  font-weight: 900;
}

.flow-example-description {
  margin: 12px 0 0;
  color: #8d8790;
  font-size: 11px;
  font-weight: 600;
  line-height: 17px;
}

.flow-example-fields {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;
  margin-top: 12px;
}

.flow-example-field {
  min-width: 0;
  border-radius: 12px;
  background: #0d0d0f;
  padding: 9px 10px;
}

.flow-example-field:first-child:last-child,
.flow-example-field:has(.flow-example-chips) {
  grid-column: 1 / -1;
}

.flow-example-field > small,
.flow-example-field > strong {
  display: block;
}

.flow-example-field > small {
  color: #69636d;
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 0.1em;
}

.flow-example-field > strong {
  overflow: hidden;
  margin-top: 3px;
  color: #d8d3db;
  font-size: 12px;
  font-weight: 800;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.flow-example-chips {
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  margin-top: 7px;
}

.flow-example-chips span {
  border: 1px solid color-mix(in srgb, var(--flow-node-color) 34%, transparent);
  border-radius: 999px;
  background: color-mix(in srgb, var(--flow-node-color) 10%, transparent);
  color: #e5e1e7;
  padding: 4px 8px;
  font-size: 10px;
  font-weight: 800;
}

@media (max-width: 520px) {
  .flow-example-bar {
    padding: 0 12px;
  }

  .flow-example-bar > strong {
    display: none;
  }

  .flow-example-canvas {
    padding: 14px 10px 20px;
  }

  .flow-example-node-header {
    gap: 8px;
  }

  .flow-example-fields {
    grid-template-columns: 1fr;
  }

  .flow-example-field,
  .flow-example-field:has(.flow-example-chips) {
    grid-column: auto;
  }
}
</style>
