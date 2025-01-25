<template>
    <div class="iconsbar editoriconsbar">
        <UBadge color="gray" variant="soft" size="md">Mod Code</UBadge>
        <a href="#" data-tooltip="Save Mod" id="savemod">
            <i class="fa fa-fw fa-save"></i>
          </a>
          <label href="#" data-tooltip="Load Mod" class="loadmod">
            <input type="file" id="loadmod" name="loadmod" accept=".txt, .js, text/plain"/>
            <i class="fa fa-fw fa-folder-open"></i>
          </label>
          <span class="separator"></span>
          <a href="#" data-tooltip="Run Mod" id="runmod">
            <i class="fa fa-fw fa-play"></i>
          </a>
        </div>
</template>
<script>
export default {
    name: 'ActionBar'
}
</script>