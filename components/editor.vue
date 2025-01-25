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
<script lang="js" setup>
const value = ref('this.options = {\n  // see documentation for options reference\n  root_mode: "survival",\n  map_size: 30\n};\n\nthis.tick = function(game) {\n  // do mod stuff here ; see documentation\n}');


</script>
