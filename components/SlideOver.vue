<script setup lang="js">
const isOpen = ref(false)
const toast = useToast()
const items = ref([
                { id: 1, name: 'Item 1' },
                { id: 2, name: 'Item 2' },
                { id: 3, name: 'Item 3' }
            ])


</script>
<template>
  <UButton color="gray" variant="ghost" size="md" label="Open ToolBox" @click="isOpen = true" />
  <USlideover v-model="isOpen" prevent-close>
      <UCard class="flex flex-col flex-1" :ui="{ body: { base: 'flex-1' }, ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
              Starblast Modding ToolBox
            </h3>
            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpen = false" />
          </div>
        </template>

        <template #default>
          <div class="logo">
            <img src="https://starblast.data.neuronality.com/img/logo.svg" alt="Starblast Logo" />
          </div class="tools">
            <ul>
                <li>- <LoadECP/></li>
                <li>- <LoadMod/></li>
            </ul>

        </template>
      </UCard>
    </USlideover>

</template>
<script lang="js">
export default {
    name: 'SlideOver'
}
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.logo {
  text-align: center;
  margin-bottom: 20px;
}

.tools {
  padding: 10px;
  margin-top: auto;
}

.tools ul {
  list-style-type: none;
  padding: 0;
}

.tools li {
  margin-bottom: 10px;
}
</style>
