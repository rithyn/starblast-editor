<script setup lang="ts">
import type { ISelection } from 'monaco-editor'
import ModdingGame from '../../s/API.cjs'
const items = [
  [{
    label: 'Start',
    icon: 'i-material-symbols:arrow-upload-ready-rounded',
        click: () => {
      console.log('Start')
    }
  }, {
    label: 'Stop',
    icon: 'i-material-symbols:stop-circle-rounded',
    disabled: true
  }], [{
    label: 'Download',
    icon: 'i-mdi:file-download',
    click: () => {
      console.log('Download')  }
    }], [{
    label: 'Delete',
    icon: 'i-heroicons-trash-20-solid',
  }]
]
</script>

<template>
  <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
    <UButton color="gray" label="Options" variant="outline" size="xs" trailing-icon="i-heroicons-chevron-down-20-solid" />
  </UDropdown>
</template>

