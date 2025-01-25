<script setup lang="js">
const isOpen = ref(false)
if (process.server ? '' : !!localStorage.getItem('userDetails')) {
    const isOpen = ref(true)
}
const toast = useToast()
</script>

<template>
    <div class="editorpanel">
      <div class="iconsbar editoriconsbar flex justify-between">
        <UBadge color="gray" variant="soft" size="md">Mod Code</UBadge>
        <Dropdown/>

      </div>
      <div class="insideeditorpanel">
        <div class="editor" id="editor">
          <Editor></Editor>
        </div>
        <div id="gameframe" class="gameframe"></div>
      </div>
    </div>
  </template>
  
  <script lang="js">
  
  export default {
    name: 'EditorPannel',
  }
  </script>


