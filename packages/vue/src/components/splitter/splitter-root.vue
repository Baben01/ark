<script lang="ts">
import type { HTMLAttributes } from 'vue'
import type { RootEmits, RootProps } from './splitter.types'

export interface SplitterRootProps
  extends RootProps,
    PolymorphicProps,
    /**
     * @vue-ignore
     */
    HTMLAttributes {}
export interface SplitterRootEmits extends RootEmits {}
</script>

<script setup lang="ts">
import { ark, type PolymorphicProps } from '../factory'
import { useSplitter } from './use-splitter'
import { SplitterProvider } from './use-splitter-context'

const props = defineProps<SplitterRootProps>()
const emits = defineEmits<SplitterRootEmits>()

const splitter = useSplitter(props, emits)
SplitterProvider(splitter)
</script>

<template>
  <ark.div v-bind="splitter.rootProps" :as-child="asChild">
    <slot />
  </ark.div>
</template>
