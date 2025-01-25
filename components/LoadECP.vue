<script setup lang="js">
const isOpen = ref(false)
if (process.server ? '' : !!localStorage.getItem('userDetails')) {
    const isOpen = ref(true)
}
const toast = useToast()
</script>
<template>
  <UButton color="black" label="Enter your ECP Key" @click="isOpen = true" />

  <UModal v-model="isOpen" prevent-close>
    <UCard
      :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }"
    >
      <template #header>
        <div class="flex items-center justify-between">
          <h3
            class="text-base font-semibold leading-6 text-gray-900 dark:text-white"
          >
            Enter your ECP Key
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
          <UInput
            icon="i-material-symbols-light:key"
            placeholder="Enter your ECP Key"
          />
          <USelect
            color="gray"
            icon="i-mdi:earth-arrow-up"
            variant="outline"
            :options="['America', 'Europe', 'Asia']"
            placeholder="Select a region"
          />

          <div class="flex justify-end">
            <UButton
              color="black"
              label="Save"
              @click="isOpen = false, toast.add({ title: 'Saved', description: 'Your ECP Key has been saved.', color: 'green', icon: 'i-heroicons-check-circle' })"
            />
          </div>
        </div>
      </template>
      <template #footer>
        Your ECP Key is stricly confidential and should not be shared with
        anyone. If you have any questions, please contact our support team.
      </template>
    </UCard>
  </UModal>
</template>
<script lang="js">
export default {
    name: 'LoadECP'
}
</script>
