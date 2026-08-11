<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    color: string;
    icon: string;
    size?: number;
    type: string;
  }>(),
  { size: 30 },
);

const glyphCodes: Record<string, number> = {
  'add-circle-outline': 61701,
  analytics: 61723,
  'analytics-outline': 61724,
  'apps-outline': 61730,
  'archive-outline': 61733,
  'arrow-down-circle-outline': 61743,
  'arrow-forward-circle-outline': 61749,
  'arrow-up-circle': 61766,
  'arrow-up-circle-outline': 61767,
  body: 61855,
  bulb: 61888,
  'calculator-outline': 61901,
  'checkmark-circle-outline': 61983,
  'chevron-forward': 62011,
  'code-slash': 62062,
  'code-slash-outline': 62063,
  'color-filter-outline': 62075,
  'color-palette-outline': 62078,
  'compass-outline': 62084,
  'construct-outline': 62087,
  'contrast-outline': 62093,
  'copy-outline': 62096,
  'create-outline': 62099,
  cube: 62104,
  'cube-outline': 62105,
  'desktop-outline': 62111,
  'document-text-outline': 62132,
  'expand-outline': 62177,
  'extension-puzzle-outline': 62180,
  film: 62206,
  'finger-print-outline': 62216,
  'git-branch': 62266,
  'game-controller': 62260,
  'git-compare-outline': 62273,
  'grid-outline': 62294,
  'hand-left-outline': 62300,
  'help-circle-outline': 62334,
  images: 62353,
  'information-circle-outline': 62361,
  'layers-outline': 62384,
  'locate-outline': 62402,
  'move-outline': 62564,
  'navigate-circle-outline': 62574,
  'options-outline': 62603,
  'pause-circle-outline': 62613,
  'phone-landscape-outline': 62642,
  'phone-portrait-outline': 62645,
  'play-forward-outline': 62676,
  'play-outline': 62678,
  'planet-outline': 62660,
  'play-circle-outline': 62670,
  'power-outline': 62696,
  'pulse-outline': 62711,
  'refresh-circle-outline': 62742,
  'refresh-outline': 62744,
  'remove-circle-outline': 62754,
  'repeat-outline': 62768,
  'resize-outline': 62771,
  'rocket-outline': 62792,
  'scan-outline': 62810,
  'search-outline': 62819,
  'server-outline': 62825,
  'shapes-outline': 62831,
  'shuffle-outline': 62852,
  'save-outline': 62801,
  'speedometer-outline': 62864,
  'swap-horizontal-outline': 62897,
  'swap-vertical-outline': 62900,
  'sync-outline': 62906,
  'timer-outline': 62945,
  'trash-outline': 62966,
  'trending-up-outline': 62972,
  videocam: 62989,
  'videocam-outline': 62993,
  'water-outline': 63023,
  add: 61699,
  'arrow-down': 61741,
  'arrow-up': 61765,
  trash: 62962,
};

const glyph = (name: string) => String.fromCodePoint(glyphCodes[name] ?? glyphCodes['cube-outline']);

const axis = computed(() => {
  if (props.type.endsWith('-x')) return 'X';
  if (props.type.endsWith('-y')) return 'Y';
  return '';
});

const movementLabel = computed(() => {
  if (props.type === 'action-move-object-x') return 'X';
  if (props.type === 'action-move-object-y') return 'Y';
  return '∠';
});

const style = computed(() => ({
  '--node-color': props.color,
  '--node-icon-size': `${props.size}px`,
}));
</script>

<template>
  <span class="node-glyph" :style="style" aria-hidden="true">
    <span v-if="type === 'condition-object-exists'" class="scene-object">
      <span class="ion scan" :data-glyph="glyph('scan-outline')" />
      <span class="ion scene-cube" :data-glyph="glyph('cube')" />
    </span>

    <span
      v-else-if="type === 'condition-object-created' || type === 'condition-object-deleted'"
      class="icon-pair compact">
      <span class="ion" :data-glyph="glyph('cube-outline')" />
      <span class="ion secondary" :data-glyph="glyph(type === 'condition-object-created' ? 'add' : 'trash')" />
    </span>

    <span v-else-if="type === 'condition-object-grounded'" class="grounded">
      <span class="ion" :data-glyph="glyph('cube-outline')" />
      <span class="ground-line" />
    </span>

    <span
      v-else-if="type === 'condition-object-jumping' || type === 'condition-object-falling'"
      class="icon-pair compact">
      <span class="ion" :data-glyph="glyph('cube-outline')" />
      <span class="ion secondary" :data-glyph="glyph(type === 'condition-object-jumping' ? 'arrow-up' : 'arrow-down')" />
    </span>

    <span v-else-if="type === 'condition-object-moving'" class="icon-pair">
      <span class="ion" :data-glyph="glyph('trending-up-outline')" />
      <span class="ion" :data-glyph="glyph('cube-outline')" />
    </span>

    <span v-else-if="type === 'repeat-count'" class="repeat-count">
      <span class="ion" :data-glyph="glyph('sync-outline')" />
      <b>3×</b>
    </span>

    <span
      v-else-if="type === 'action-flip-object' || type === 'action-flip-object-animated'"
      class="flip-horizontal">
      <span class="flip-left" />
      <span class="flip-divider" />
      <span class="flip-right" />
    </span>

    <span
      v-else-if="type === 'action-set-object-x' || type === 'action-set-object-y'"
      class="icon-axis">
      <span class="ion" :data-glyph="glyph('cube-outline')" />
      <b>{{ axis }}</b>
    </span>

    <span
      v-else-if="type === 'action-set-camera-x' || type === 'action-set-camera-y'"
      class="icon-axis">
      <span class="ion" :data-glyph="glyph('videocam-outline')" />
      <b>{{ axis }}</b>
    </span>

    <span
      v-else-if="type === 'action-move-object-x' || type === 'action-move-object-y' || type === 'action-move-object-angle'"
      class="icon-axis movement">
      <span class="ion" :data-glyph="glyph('trending-up-outline')" />
      <b>{{ movementLabel }}</b>
    </span>

    <span v-else-if="type === 'action-follow-camera-on-object'" class="moving-camera">
      <span class="camera-trails"><i /><i /><i /></span>
      <span class="ion" :data-glyph="glyph('videocam')" />
    </span>

    <span
      v-else-if="type === 'action-shake-camera' || type === 'action-shake-object'"
      class="shaking">
      <span class="shake-lines left"><i /><i /><i /></span>
      <span class="ion" :data-glyph="glyph(type === 'action-shake-camera' ? 'videocam' : 'cube')" />
      <span class="shake-lines right"><i /><i /><i /></span>
    </span>

    <span v-else-if="type === 'action-set-object-z-index'" class="axis-only">Z</span>

    <span v-else-if="type === 'doc-game-resolution'" class="resolution-icon" />

    <span v-else-if="type === 'doc-screen-orientation'" class="orientation-icon" />

    <span v-else class="ion" :data-glyph="glyph(icon)" />
  </span>
</template>

<style scoped>
.node-glyph {
  display: inline-flex;
  width: calc(var(--node-icon-size) + 10px);
  height: var(--node-icon-size);
  align-items: center;
  justify-content: center;
  color: var(--node-color);
  flex: 0 0 auto;
  vertical-align: middle;
}

.ion {
  color: var(--node-color);
  font-family: 'Continue Ionicons';
  font-size: var(--node-icon-size);
  font-style: normal;
  font-weight: normal;
  line-height: 1;
}

.ion::before {
  content: attr(data-glyph);
}

.icon-pair,
.icon-axis,
.shaking,
.moving-camera {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.icon-pair .ion,
.icon-axis .ion {
  font-size: calc(var(--node-icon-size) * 0.66);
}

.icon-pair.compact { gap: 1px; }
.icon-pair:not(.compact) { gap: 2px; }
.icon-pair .secondary { font-size: calc(var(--node-icon-size) * 0.58); }

.icon-axis { gap: 3px; }
.icon-axis b,
.axis-only {
  color: var(--node-color);
  font-size: calc(var(--node-icon-size) * 0.56);
  font-weight: 900;
  line-height: 1;
}
.icon-axis.movement .ion { font-size: calc(var(--node-icon-size) * 0.68); }
.axis-only { font-size: calc(var(--node-icon-size) * 0.88); }

.scene-object,
.repeat-count {
  position: relative;
  width: var(--node-icon-size);
  height: var(--node-icon-size);
}
.scene-object .scan,
.repeat-count > .ion { position: absolute; inset: 0; }
.scene-object .scene-cube {
  position: absolute;
  left: 50%;
  top: 50%;
  font-size: calc(var(--node-icon-size) * 0.42);
  transform: translate(-50%, -50%);
}
.repeat-count b {
  position: absolute;
  right: -4px;
  bottom: -1px;
  color: var(--node-color);
  font-size: calc(var(--node-icon-size) * 0.29);
  line-height: 1;
}

.grounded {
  display: inline-flex;
  width: calc(var(--node-icon-size) + 6px);
  height: var(--node-icon-size);
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
}
.grounded .ion { font-size: calc(var(--node-icon-size) * 0.7); }
.ground-line {
  width: 94%;
  height: max(2px, calc(var(--node-icon-size) * 0.09));
  border-radius: 999px;
  background: var(--node-color);
}

.flip-horizontal {
  position: relative;
  width: var(--node-icon-size);
  height: var(--node-icon-size);
}
.flip-divider {
  position: absolute;
  left: 50%;
  top: 6%;
  width: 2px;
  height: 88%;
  border-radius: 2px;
  background: var(--node-color);
  transform: translateX(-50%);
}
.flip-left,
.flip-right {
  position: absolute;
  top: 22%;
  width: 0;
  height: 0;
  border-top: calc(var(--node-icon-size) * 0.28) solid transparent;
  border-bottom: calc(var(--node-icon-size) * 0.28) solid transparent;
}
.flip-left {
  left: 5%;
  border-right: calc(var(--node-icon-size) * 0.28) solid var(--node-color);
  opacity: 0.55;
}
.flip-right {
  right: 5%;
  border-left: calc(var(--node-icon-size) * 0.28) solid var(--node-color);
}

.moving-camera { transform: rotate(-13deg); }
.moving-camera .ion { font-size: calc(var(--node-icon-size) * 0.92); }
.camera-trails,
.shake-lines {
  display: inline-flex;
  flex-direction: column;
  gap: calc(var(--node-icon-size) * 0.1);
}
.camera-trails i,
.shake-lines i {
  display: block;
  height: max(2px, calc(var(--node-icon-size) * 0.075));
  border-radius: 999px;
  background: var(--node-color);
}
.camera-trails i:nth-child(1),
.camera-trails i:nth-child(3) { width: calc(var(--node-icon-size) * 0.28); opacity: 0.45; }
.camera-trails i:nth-child(2) { width: calc(var(--node-icon-size) * 0.48); }

.shaking { gap: 2px; }
.shaking > .ion { font-size: calc(var(--node-icon-size) * 0.76); transform: rotate(-6deg); }
.shake-lines { gap: calc(var(--node-icon-size) * 0.12); }
.shake-lines i { width: calc(var(--node-icon-size) * 0.19); opacity: 0.7; }
.shake-lines i:nth-child(2) { width: calc(var(--node-icon-size) * 0.27); opacity: 1; }
.shake-lines.left { align-items: flex-end; transform: rotate(7deg); }
.shake-lines.right { align-items: flex-start; transform: rotate(-7deg); }

.resolution-icon {
  position: relative;
  width: calc(var(--node-icon-size) * 0.94);
  height: calc(var(--node-icon-size) * 0.7);
  border: max(1.5px, calc(var(--node-icon-size) * 0.09)) solid var(--node-color);
  border-radius: calc(var(--node-icon-size) * 0.12);
}

.resolution-icon::after {
  position: absolute;
  inset: 50% auto auto 50%;
  color: var(--node-color);
  content: 'px';
  font-family: Arial, sans-serif;
  font-size: calc(var(--node-icon-size) * 0.34);
  font-weight: 900;
  letter-spacing: -0.04em;
  line-height: 1;
  transform: translate(-50%, -50%);
}

.orientation-icon {
  position: relative;
  width: var(--node-icon-size);
  height: var(--node-icon-size);
}

.orientation-icon::before,
.orientation-icon::after {
  position: absolute;
  border: max(1.5px, calc(var(--node-icon-size) * 0.085)) solid var(--node-color);
  border-radius: calc(var(--node-icon-size) * 0.12);
  content: '';
}

.orientation-icon::before {
  top: 3%;
  left: 4%;
  width: 38%;
  height: 78%;
}

.orientation-icon::after {
  right: 1%;
  bottom: 3%;
  width: 57%;
  height: 42%;
  background: color-mix(in srgb, var(--node-color) 8%, #0b0a0d);
}
</style>
