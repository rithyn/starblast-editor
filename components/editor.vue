<template>
  <MonacoEditor lang="javascript" class="editor" ref="editorRef" :options="{ theme: 'vs-dark'}" v-model="value"/>
</template>

<style>
.editor {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0
}

.editorpanel {
    position: absolute;
    top: 0px;
    bottom: 0;
    left: 0;
    width: 75%
}

.insideeditorpanel {
    position: absolute;
    top: 40px;
    bottom: 0px;
    left: 0;
    right: 0;
    background: rgba(0,0,0,.5)
}</style>
<script lang="ts" setup>
import type * as monaco from 'monaco-editor'

const lang = ref<'plaintext' | 'html' | 'css' | 'javascript'>('plaintext')
const options: monaco.editor.IEditorConstructionOptions = {
  automaticLayout: true
}

const val = ref('Hello nuxt-monaco-editor!')
const originalVal = 'Hello nuxt-monaco-editor.'
const modifiedVal = ref('Hello nuxt-monaco-editor!!!')
console.log(lang.value)
watchEffect(() => {
  switch (lang.value) {
    case 'plaintext':
      val.value = 'Hello nuxt-monaco-editor!'
      break
    case 'html':
      val.value = '<!DOCTYPE html>\n<html>\n  <body>\n    <h1>Hello nuxt-monaco-editor!</h1>\n  </body>\n</html>'
      break
    case 'css':
      val.value = '.hello__nuxt-monaco-editor {\n  border: 1px solid black;\n}'
      break
    case 'javascript':
      val.value = "alert('Hello nuxt-monaco-editor!')"
      break
  }
})

</script>
