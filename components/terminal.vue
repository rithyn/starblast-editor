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
          > <input id="input-text" type="text" autofocus/>
        </span>
        
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style>
#input-text {
  background: none;
  border: none;
  color: white;
  outline: none;
  font-family: monospace;
  font-size: 16px;
  width: 100%;
}

#input-text::placeholder {
  color: white;
}

#input-text:focus {
  outline: none;
}

#input-text::after {
  content: '█';
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  from, to {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
</style>