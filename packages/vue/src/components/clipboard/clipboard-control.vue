<script lang="ts">
import type { HTMLAttributes } from 'vue'
import type { PolymorphicProps } from '../factory'

export interface ClipboardControlProps
  extends PolymorphicProps,
    /**
     * @vue-ignore
     */
    HTMLAttributes {}
</script>

<script setup lang="ts">
import { ark } from '../factory'
import { useClipboardContext } from './use-clipboard-context'

defineProps<ClipboardControlProps>()
const clipboard = useClipboardContext()
</script>

<template>
  <ark.div v-bind="clipboard.controlProps" :as-child="asChild">
    <slot />
  </ark.div>
</template>
