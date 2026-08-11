<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    color: string;
    size?: number;
    type: string;
  }>(),
  { size: 30 },
);

const glyphCodes: Record<string, number> = {
  analytics: 61723,
  body: 61855,
  bulb: 61888,
  image: 62350,
  'hand-left': 62299,
  'play-circle': 62669,
  resize: 62770,
  'scan-outline': 62810,
  'square-outline': 62867,
};

const iconByType: Record<string, string> = {
  sprite: 'image',
  'gravity-body': 'body',
  collision: 'scan-outline',
  animation: 'play-circle',
  'property-animation': 'analytics',
  'press-scale': 'resize',
  shape: 'square-outline',
  'light-emitter': 'bulb',
};

const glyph = (name: string) => String.fromCodePoint(glyphCodes[name] ?? glyphCodes.image);
const style = computed(() => ({
  '--behavior-color': props.color,
  '--behavior-icon-size': `${props.size}px`,
}));
</script>

<template>
  <span class="behavior-glyph" :style="style" aria-hidden="true">
    <span v-if="type === 'ignore-collision'" class="ignore-collision-icon">
      <i class="ignore-box first" />
      <i class="ignore-box second" />
      <i class="ignore-slash" />
    </span>

    <span v-else-if="type === 'light-blocker'" class="light-blocker-icon">
      <span class="ion blocker-bulb">{{ glyph('bulb') }}</span>
    </span>

    <span v-else-if="type === 'drag-drop'" class="drag-drop-icon">
      <span class="drag-lines"><i /><i /></span>
      <span class="drag-object" />
      <span class="ion drag-hand">{{ glyph('hand-left') }}</span>
    </span>

    <span v-else-if="type === 'move-to-touch'" class="move-touch-icon">
      <span class="move-object" />
      <span class="move-path"><i /><i /><i /></span>
      <span class="move-destination"><i /></span>
    </span>

    <span v-else-if="type === 'object-variables'" class="variables-icon">Var</span>

    <span v-else class="ion">{{ glyph(iconByType[type]) }}</span>
  </span>
</template>

<style scoped>
.behavior-glyph {
  display: inline-flex;
  width: var(--behavior-icon-size);
  height: var(--behavior-icon-size);
  align-items: center;
  justify-content: center;
  color: var(--behavior-color);
  flex: 0 0 auto;
  vertical-align: middle;
}

.ion {
  color: var(--behavior-color);
  font-family: 'Continue Ionicons';
  font-size: var(--behavior-icon-size);
  font-style: normal;
  font-weight: normal;
  line-height: 1;
}

.ignore-collision-icon,
.drag-drop-icon,
.move-touch-icon {
  position: relative;
  display: block;
  width: var(--behavior-icon-size);
  height: var(--behavior-icon-size);
}

.ignore-box {
  position: absolute;
  width: 52%;
  height: 52%;
  border: max(1.5px, calc(var(--behavior-icon-size) * 0.08)) solid var(--behavior-color);
  border-radius: max(2px, calc(var(--behavior-icon-size) * 0.1));
}

.ignore-box.first { left: 6%; top: 8%; opacity: 0.55; }
.ignore-box.second { right: 6%; bottom: 8%; }
.ignore-slash {
  position: absolute;
  left: 45%;
  top: 1%;
  width: max(2px, calc(var(--behavior-icon-size) * 0.1));
  height: 98%;
  border-radius: 999px;
  background: var(--behavior-color);
  transform: rotate(45deg);
}

.light-blocker-icon {
  display: inline-flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  border-radius: max(3px, calc(var(--behavior-icon-size) * 0.18));
  background: var(--behavior-color);
}

.light-blocker-icon .blocker-bulb {
  color: #4B5563;
  font-size: calc(var(--behavior-icon-size) * 0.66);
}

.drag-lines {
  position: absolute;
  inset: 0;
}

.drag-lines i {
  position: absolute;
  display: block;
  height: max(1.5px, calc(var(--behavior-icon-size) * 0.075));
  border-radius: 999px;
  background: var(--behavior-color);
}

.drag-lines i:first-child { left: 1%; top: 45%; width: 18%; opacity: 0.42; }
.drag-lines i:last-child { left: 5%; top: 64%; width: 12%; opacity: 0.7; }
.drag-object {
  position: absolute;
  left: 16%;
  top: 36%;
  width: 48%;
  height: 48%;
  border: max(1.5px, calc(var(--behavior-icon-size) * 0.075)) solid var(--behavior-color);
  border-radius: max(2px, calc(var(--behavior-icon-size) * 0.1));
  background: var(--behavior-color);
  opacity: 0.38;
}
.drag-hand {
  position: absolute;
  right: -2%;
  top: -3%;
  font-size: calc(var(--behavior-icon-size) * 0.72);
  transform: rotate(-13deg);
}

.move-object {
  position: absolute;
  left: 2%;
  bottom: 4%;
  width: 34%;
  height: 34%;
  border-radius: max(2px, calc(var(--behavior-icon-size) * 0.075));
  background: var(--behavior-color);
}
.move-path i {
  position: absolute;
  width: max(2px, calc(var(--behavior-icon-size) * 0.095));
  height: max(2px, calc(var(--behavior-icon-size) * 0.095));
  border-radius: 50%;
  background: var(--behavior-color);
}
.move-path i:nth-child(1) { left: 39%; top: 62%; opacity: 0.48; }
.move-path i:nth-child(2) { left: 53%; top: 48%; opacity: 0.62; }
.move-path i:nth-child(3) { left: 65%; top: 33%; opacity: 0.78; }
.move-destination {
  position: absolute;
  right: 1%;
  top: 2%;
  display: inline-flex;
  width: 25%;
  height: 25%;
  align-items: center;
  justify-content: center;
  border: max(1.5px, calc(var(--behavior-icon-size) * 0.07)) solid var(--behavior-color);
  border-radius: 50%;
}
.move-destination i {
  width: 34%;
  height: 34%;
  border-radius: 50%;
  background: var(--behavior-color);
}

.variables-icon {
  color: #60A5FA;
  font-family: ui-rounded, 'Arial Rounded MT Bold', system-ui, sans-serif;
  font-size: max(11px, calc(var(--behavior-icon-size) * 0.54));
  font-weight: 900;
  letter-spacing: -0.7px;
  line-height: 1;
}
</style>
