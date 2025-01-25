<script setup lang="js">
const isOpen = ref(false)
if (process.server ? '' : !!localStorage.getItem('userDetails')) {
    const isOpen = ref(true)
}
const toast = useToast()

</script>
<template>
  <UButton color="black" label="Load Mod" @click="isOpen = true" />

  <UModal v-model="isOpen" prevent-close>
    <UCard
      :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }"
    >
      <template #header>
        <div class="flex items-center justify-between">
          <h3
            class="text-base font-semibold leading-6 text-gray-900 dark:text-white"
          >
            Load your Mod
          </h3>
          <UButton
            color="gray"
            variant="ghost"
            icon="i-heroicons-x-mark-20-solid"
            class="-my-1"
            @click="isOpen = false"
          />
        </div>
      </template>

      <template #default>
        <div class="space-y-4">
            <p>Load a mod file here :</p>
            <UInput type="file" size="sm" icon="i-heroicons-folder" placeholder="Load your Mod File" required="false" />
            <UDivider label="OR" />
          <USelect
          disabled
            color="gray"
            variant="outline"
            :options="[]"
            placeholder="Sesame Search is not available yet"
          />

          <div class="flex justify-end">
            <UButton
              color="black"
              label="Load"
              :loading="isLoading"
              @click="isOpen = false, toast.add({ title: 'Saved', description: 'Your Mod has been saved.', color: 'green', icon: 'i-heroicons-check-circle' })"
            />
          </div>
        </div>
      </template>
      <template #footer>
        Loading a mod file will overwrite your current mod code. Also be aware that loading a mod file can be dangerous and can lead to security issues.
    </template>
    </UCard>
  </UModal>
</template>
<script lang="js">
export default {
    name: 'LoadMod'
}
</script>
