<script setup lang="js">
const isOpen = ref(false)
const toast = useToast()


</script>
<template>
  <UButton color="black" variant="outline" size="lg" label="Play Starblast" @click="isOpen = true" />
  <UModal v-model="isOpen" fullscreen>
      <UCard
        :ui="{
          base: 'h-full flex flex-col',
          rounded: '',
          divide: 'divide-y divide-gray-100 dark:divide-gray-800',
          body: {
            base: 'grow'
          }
        }"
      >
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
              Starblast
            </h3>
            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpen = false" />
    
          </div>
        </template>
        <template #default>
          <iframe class="container" src="https://starblast.io/" frameborder="0"></iframe>
        </template>
        <template #footer>
            <div class="flex justify-end">
                <UButton color="gray" variant="ghost" @click="isOpen = false">Close</UButton>

            </div>
        </template>
      </UCard>
    </UModal>

</template>
<script lang="js">
export default {
    name: 'TestGame'
}
</script>
<style scoped>
iframe {
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
}

.logo {
  text-align: center;
  margin-bottom: 20px;
  width: 100%;
  height: 100%;
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
<style scoped>
.iframe-container {
  display: flex;
  flex-grow: 1;
}

.iframe-full {
  flex-grow: 1;
  width: 100%;
  height: 100%;
}
</style>