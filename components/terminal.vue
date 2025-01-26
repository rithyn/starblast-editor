<template>
  <div id="terminal">
    <pre> __ _             _     _           _   
/ _| |_ __ _ _ __| |__ | | __ _ ___| |_ 
\ \| __/ _` | '__| '_ \| |/ _` / __| __|
_\ | || (_| | |  | |_) | | (_| \__ | |_ 
\__/\__\__,_|_|  |_.__/|_|___,_|___/\__|

  /\/\   ___   __| | __| (_)_ __   __ _ 
 /    \ / _ \ / _` |/ _` | | '_ \ / _` |
/ /\/\ | (_) | (_| | (_| | | | | | (_| |
\/    \/\___/ \__,_|\__,_|_|_| |_|\__, |
                                  |___/ </pre>
                                  
    <br>
    Starblast Modding Console - Alpha 7<br>
    Type "help" for help<br>
    Region set to Europe<br>
    <br>
    Note: Your ECP is not saved, please click on this button :<br>
    <br>
    <LoadECP /><br>
    <br>
    <br>
    <div id="prompt">
      <div id="input">
        <span id="prompt-text">
          >
        </span>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style>
#terminal {
  width: 100%;
  height: 200px;
  text-align: center;
}

pre {
  font-size: xx-small;
  display: inline-block;
  text-align: left;
}
</style>