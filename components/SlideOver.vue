<script setup lang="js">
const isOpen = ref(false)
const toast = useToast()


</script>
<template>
  <UButton color="black" variant="outline" size="lg" label="Open ToolBox" @click="isOpen = true" />
  <USlideover v-model="isOpen" prevent-close>
      <UCard class="flex flex-col flex-1" :ui="{ body: { base: 'flex-1' }, ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
             Modding Tools
            </h3>
            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpen = false" />
          </div>
        </template>

        <template #default>
          
          <div class="tools">
            <ul>
                <li>- <LoadECP/></li>
                <li>- <LoadMod/></li>
                <li>- <TestSlide/></li>
            </ul>

          </div>

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
UButton {
  padding: 0px 0px;
  margin: auto;
  position: center;
  top: 5px;
  right: 10px;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
}

.logo {
  text-align: center;
  margin-bottom: 20px;
  width: 50%;
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
