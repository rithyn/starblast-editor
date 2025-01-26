<template>
    <div class="header">
      <div style="float:right">
        <UButton color="black" size="lg" variant="link" icon="i-material-symbols:book-2-rounded" to="https://starblast-api.vercel.app/" target="_blank">Starblast Modding Documentation</UButton>
        <UButton color="black" size="lg" variant="link" icon="i-streamline:interface-setting-wrench-crescent-tool-construction-tools-wrench-setting-edit-adjust" to="https://starblast.io/shipeditor" target="_blank">Ship Editor</UButton>
      </div>
      <img src="https://starblast.data.neuronality.com/logo/starblast_logo2.svg" class="logo">
    </div>
</template>
<script>
definePageMeta({
  colorMode: 'light',
})

</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Lato:400,700');
.header {
  font-family: 'Lato', sans-serif;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding-top: 9px;
  height: 60px;
  text-align: left;
  border-bottom: solid 1px hsl(0, 0%, 80%);
  color: #fff;
  box-shadow: 0 0 20px hsl(0,0%,50%);
}
.header div {
  padding: 0px 0px;
  position: center;
  top: 5px;
  right: 10px;
}
.logo {
    margin: 5px 30px 0 10px;
    height: 40px
}



.header div a {
  padding: 8px 10px;
  margin: 5px;
  font-size: 1.2em;
  font-family: 'Lato', sans-serif;
  background-color: gray;
  border-radius: 5px;
}


.header i {
    font-size: 1.5em
}

</style>
