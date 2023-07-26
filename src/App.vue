<template>
  <div id="app">
    <div class="i-icon:pacman uno-text-(pink 36)" />

    <BaseTable>
      <div>CONTENT</div>
    </BaseTable>

    <!--布局-->
    <div class="uno-p16 uno-flex" uno-border="1px solid blue-200">
      <BasicTableA />
    </div>
  </div>
</template>

<script setup lang="ts">
import { BaseTable } from './@table/base-table'
import BasicTableA from './components/BasicTableA.vue'

console.clear()
</script>
