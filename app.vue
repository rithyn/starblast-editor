<template>
    <div class="wrapper">
      <Header />
      <div class="footer"></div>
      <div class="centerpanel">
        <EditorPannel />
        <div class="runpanelcontainer">
          <div class="runpanel">
            <div class="flex justify-between">
              <div class="iconsbar runiconsbar"></div>
            </div>
            <div class="insiderunpanel" id="insiderunpanel">
              <Terminal />
            </div>
          </div>
          <div id="monitoring">
            <canvas id="fieldview"></canvas>
          </div>
        </div>
      </div>
    </div>
    <UNotifications />
  </template>
  

<style>
* {
    margin: 0;
    padding: 0
}

body,html {
    background: hsl(0,0%,15%);
    color: rgba(255,255,255,.7)
}

.wrapper {
    position: relative;
    width: 100%;
    overflow: hidden
}

.overlay {
    font-family: 'Lato',sans-serif;
    position: fixed;
    z-index: 2;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,20,40,.8);
    display: none
}

.btn {
    display: inline-block;
    padding: 10px;
    background: linear-gradient(135deg,#48585b 0,#28383b 100%);
    border: 2px outset #48585b;
    cursor: pointer
}

.btn:hover {
    border: 2px outset #28383b
}

.btn-return {
    margin-top: 50px;
    font-weight: normal
}

#shipLoader {
    display: none;
    position: fixed;
    z-index: 3;
    width: 95%;
    height: 95%;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    background: linear-gradient(135deg,#48585b 0,#28383b 100%)
}

#wrongECP,#disclaimer {
    font-weight: bold;
    display: none;
    position: fixed;
    z-index: 3;
    width: 50%;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    background: linear-gradient(135deg,#48585b 0,#28383b 100%)
}

#disclaimer ul {
    padding: 0 30px;
    margin: 0
}

#disclaimer .content {
    padding: 20px;
    font-weight: normal
}

#wrongECP .content {
    padding: 10px;
    text-align: center;
    font-size: 1.3em
}

.overlay .title {
    background: #48585b;
    border-bottom: 5px solid #28383b;
    line-height: 30px;
    font-size: 20px;
    padding: 10px
}

.overlay .content {
    overflow: auto
}

#closeModal {
    display: inline-block;
    font-size: 1.3em;
    font-weight: bold;
    padding: 2px 10px;
    background: rgba(255,255,255,.1);
    cursor: pointer
}

#closeModal:hover {
    background: rgba(255,255,255,.2)
}

.overlay table {
    vertical-align: middle;
    width: 100%;
    border-collapse: collapse
}

#shipLoader table thead tr td {
    font-weight: bold
}

#shipLoader table tr td {
    text-align: center;
    width: 14.2857%;
    width: calc(100% / 7)
}

#shipLoader table tr td:nth-child(odd) {
    background: rgba(0,0,0,.3)
}

#shipLoader .shipgroup {
    box-shadow: -1px 2px 5px 1px rgba(0,0,0,0.7);
    padding-bottom: 3px;
    display: inline-block;
    background: linear-gradient(135deg,#45484d 0,#25282d 100%);
    width: 70%;
    font-size: .8em;
    border: 2px solid transparent;
    cursor: pointer;
    transform: scale(.9)
}

#shipLoader .shipgroup:hover {
    border: 2px solid #222;
    transform: scale(1);
    background: linear-gradient(135deg,#25282d 0,#000 100%)
}

#shipLoader .shipgroup.highlighted {
    border: 2px solid #333;
    background: linear-gradient(135deg,#35383d 0,#15181d 100%)
}

.logo {
    margin: 5px 30px 0 10px;
    height: 40px
}

.baseline {
    font-size: .8em
}

.separator {
    display: inline-block;
    width: 20px
}

.loadmod input {
    display: none
}

.footer {
    height: 40px;
    padding: 9px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    font-family: 'Lato',sans-serif;
    display: none
}

#slidercpu {
    width: 200px;
    margin: 4px
}

.left-menu {
    position: absolute;
    top: 40px;
    bottom: 10px;
    left: 10px;
    right: 10px
}

.left-menu * {
    font-family: 'Lato',sans-serif
}

.resourcepanel {
    position: fixed;
    top: 50px;
    bottom: 40px;
    left: 10px;
    width: 300px;
    background: linear-gradient(135deg,hsla(160,50%,50%,.5) 0,hsla(160,50%,50%,.25) 100%);
    border-radius: 5px;
    box-shadow: 0 0 4px rgba(0,0,0,.5);
    display: none
}

.resourcecontent {
    position: absolute;
    top: 40px;
    bottom: 10px;
    left: 10px;
    right: 10px;
    background: rgba(0,0,0,.5)
}

.centerpanel {
    position: fixed;
    top: 60px;
    bottom: 0;
    right: 0;
    left: 0;
    padding: 5px
}

.runpanel {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0
}

.runpanelcontainer {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 25%
}

.gameframe {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 0
}



.insiderunpanel {
    position: absolute;
    top: 40px;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: left;
    background-color: rgba(0,0,0,.4);
    padding: 5px;
    color: #EEE;
    font-family: Monospace;
    font-size: 10pt
}

.insiderunpanel canvas {
    width: 100%
}

#terminal {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 50%;
    text-align: left;
    background-color: #000;
    padding: 20px;
    color: #EEE;
    font-family: Monospace;
    font-size: 10pt;
    background: rgba(0,0,0,.25);
    margin: 5px;
    box-shadow: 0 0 10px 10px hsl(0,0%,50%) inset;
    box-shadow: 0 0 200px 0 hsl(00,0%,20%) inset;
    border-radius: 5px
}

#fieldview {
    position: absolute;
    bottom: 0;
    right: 0
}

.cmd {
    background-color: rgba(0,0,0,.0)
}

.cmd .cursor {
    background: hsl(0,0%,80%)
}

@keyframes terminal-blink {
    0%,to {
        background-color: none;
        color: none
    }

    50% {
        background-color: none;
        color: none
    }
}

#shapecanvas {
    position: absolute;
    top: 40px;
    right: 0;
    background: #000;
    text-align: center;
    z-index: 1;
    opacity: .6
}

.right-menu {
    font-family: 'Lato',sans-serif;
    position: fixed;
    top: 50px;
    bottom: 56px;
    right: 0;
    text-align: center
}

#fast_render {
    border: 1px solid grey;
    margin: 30px auto
}

#accordion {
    margin-top: -2px
}

.iconsbar {
    font-family: 'Lato',sans-serif;
    padding: 5px 10px;
    color: #EEE;
    position: absolute;
    top: 0;
    line-height: 25px;
    left: 0;
    right: 0
}

.iconsbar a,.iconsbar label {
    display: inline-block;
    margin: 0;
    background: rgba(0,0,0,.35);
    padding: 0 5px
}

.iconsbar a:hover,.iconsbar label:hover {
    background: rgba(0,0,0,.7);
    color: #FFF
}

.icon {
    padding: 8px;
    width: 20px
}

.icon:hover {
    background: rgba(0,0,0,.2)
}

.file {
    background: rgba(255,255,255,.1);
    padding: 2px 8px 6px 8px
}

.file:hover {
    background: rgba(255,255,255,.2)
}

.selected {
    background: rgba(0,0,0,.2)
}

a {
    color: #EEE;
    text-decoration: none
}

.ace-monokai,.ui-widget-content {
    background: none !important
}

.ui-widget-content {
    color: #FFF
}

#export {
    position: fixed;
    bottom: 0;
    right: 0;
    width: auto;
    height: auto;
    z-index: 1000
}

.cmd .cursor.blink {
    background: hsl(0,0%,80%)
}

[data-tooltip] {
    position: relative;
    z-index: 2;
    cursor: pointer
}

[data-tooltip]:before,[data-tooltip]:after {
    visibility: hidden;
    opacity: 0;
    pointer-events: none
}

[data-tooltip]:before {
    position: absolute;
    bottom: 150%;
    left: 50%;
    margin-bottom: -11px;
    margin-left: -97px;
    padding: 7px;
    width: 180px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    background-color: #000;
    background-color: hsla(0,0%,30%,0.9);
    color: #fff;
    content: attr(data-tooltip);
    text-align: center;
    font-size: 14px;
    line-height: 1.2
}

.followtools [data-tooltip].fourth:before {
    margin-left: -125px
}

.followtools [data-tooltip]:last-child:before {
    margin-left: -175px
}

[data-tooltip]:after {
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: -5px;
    width: 0;
    border-top: 5px solid #000;
    border-top: 5px solid hsla(0,0%,30%,.9);
    border-right: 5px solid transparent;
    border-left: 5px solid transparent;
    content: " ";
    font-size: 0;
    line-height: 0
}

[data-tooltip]:hover:before,[data-tooltip]:hover:after {
    visibility: visible;
    opacity: 1
}

@font-face {
    font-family: 'SBGlyphs';
    src: url('https://starblast.data.neuronality.com/fonts/starblast-glyphs.ttf?v=modding');
    font-weight: normal;
    font-style: normal
}

.sbg {
    display: inline-block;
    font: normal normal normal 14px/1 SBGlyphs;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale
}

.sbg-fw {
    width: 1.28571429em;
    text-align: center
}

.sbg-wiki:before {
    content: "\0021"
}

.sbg-lock:before {
    content: "\0022"
}

.sbg-tick:before {
    content: "\0023"
}

.sbg-heart:before {
    content: "\0024"
}

.sbg-shield-mid:before {
    content: "\0025"
}

.sbg-lightning:before {
    content: "\0026"
}

.sbg-lightning-mid:before {
    content: "\0027"
}

.sbg-lightning-full:before {
    content: "\0028"
}

.sbg-diamond:before {
    content: "\0029"
}

.sbg-times:before {
    content: "\002a"
}

.sbg-crosshair:before {
    content: "\002b"
}

.sbg-fullscreen:before {
    content: "\002c"
}

.sbg-trophy:before {
    content: "\002d"
}

.sbg-trophy-full:before {
    content: "\002e"
}

.sbg-asteroid:before {
    content: "\002f"
}

.sbg-alien:before {
    content: "\0030"
}

.sbg-team:before {
    content: "\0031"
}

.sbg-world:before {
    content: "\0032"
}

.sbg-station:before {
    content: "\0033"
}

.sbg-station-full:before {
    content: "\0034"
}

.sbg-station-inverted:before {
    content: "\0035"
}

.sbg-plus:before {
    content: "\0036"
}

.sbg-plus-full:before {
    content: "\0037"
}

.sbg-plus-inverted:before {
    content: "\0038"
}

.sbg-coins:before {
    content: "\0039"
}

.sbg-vulcan:before {
    content: "\003a"
}

.sbg-wait:before {
    content: "\003b"
}

.sbg-yes:before {
    content: "\003c"
}

.sbg-no:before {
    content: "\003d"
}

.sbg-you:before {
    content: "\003e"
}

.sbg-me:before {
    content: "\003f"
}

.sbg-follow:before {
    content: "\0040"
}

.sbg-happy:before {
    content: "\0041"
}

.sbg-menu:before {
    content: "\0042"
}

.sbg-infinity:before {
    content: "\0043"
}

.sbg-diamond-full:before {
    content: "\0044"
}

.sbg-vulkan-full:before {
    content: "\0045"
}

.sbg-bye-full:before {
    content: "\0046"
}

.sbg-np-full:before {
    content: "\0047"
}

.sbg-wait-full:before {
    content: "\0048"
}

.sbg-attack-full:before {
    content: "\0049"
}

.sbg-help-full:before {
    content: "\004a"
}

.sbg-question-full:before {
    content: "\004b"
}

.sbg-yes-full:before {
    content: "\004c"
}

.sbg-no-full:before {
    content: "\004d"
}

.sbg-you-full:before {
    content: "\004e"
}

.sbg-me-full:before {
    content: "\004f"
}

.sbg-follow-full:before {
    content: "\0050"
}

.sbg-fire-full:before {
    content: "\0060"
}

.sbg-fly-mid:before {
    content: "\0061"
}

.sbg-shield-capacity:before {
    content: "\0062"
}

.sbg-shield-regen:before {
    content: "\0063"
}

.sbg-generator-capacity:before {
    content: "\0064"
}

.sbg-generator-regen:before {
    content: "\0065"
}

.sbg-fire-damage:before {
    content: "\0066"
}

.sbg-fire-speed:before {
    content: "\0067"
}

.sbg-ship-speed:before {
    content: "\0068"
}

.sbg-ship-agility:before {
    content: "\0069"
}

.sbg-torpedo:before {
    content: "\006a"
}

.sbg-missile:before {
    content: "\006b"
}

.sbg-rocket:before {
    content: "\006c"
}

.sbg-mine:before {
    content: "\006d"
}

.sbg-heavy-mine:before {
    content: "\006e"
}

.sbg-mining-pod:before {
    content: "\006f"
}

.sbg-attack-pod:before {
    content: "\0070"
}

.sbg-defense-pod:before {
    content: "\0071"
}

.sbg-thrust:before {
    content: "\0072"
}

.sbg-fly:before {
    content: "\0073"
}

.sbg-fire:before {
    content: "\0074"
}

.sbg-shop:before {
    content: "\0075"
}

.sbg-rcs-on:before {
    content: "\0076"
}

.sbg-rcs-off:before {
    content: "\0077"
}

.sbg-gears:before {
    content: "\0078"
}

.sbg-user:before {
    content: "\0079"
}

.sbg-info:before {
    content: "\007a"
}

.sbg-discord:before {
    content: "\007b"
}

.sbg-facebook:before {
    content: "\007c"
}

.sbg-twitter:before {
    content: "\007d"
}

.sbg-reddit:before {
    content: "\007e"
}

.sbg-skull-full:before {
    content: "\007f"
}

.sbg-sorry:before {
    content: "\00a1"
}

.sbg-np:before {
    content: "\00a2"
}

.sbg-gg:before {
    content: "\00a3"
}

.sbg-bye:before {
    content: "\00a4"
}

.sbg-help:before {
    content: "\00a5"
}

.sbg-skull:before {
    content: "\00a6"
}

.sbg-question:before {
    content: "\00a7"
}

.sbg-attack:before {
    content: "\00a8"
}

.sbg-caret-up:before {
    content: "\00a9"
}

.sbg-caret-down:before {
    content: "\00aa"
}

.sbg-sb-caret-up:before {
    content: "\00ab"
}

.sbg-sb-caret-down:before {
    content: "\00ac"
}

.sbg-fly-full:before {
    content: "\00ae"
}

.sbg-thrust-full:before {
    content: "\00af"
}

.sbg-money-change:before {
    content: "\00b0"
}

.sbg-rounds:before {
    content: "\00b1"
}

.sbg-customgame:before {
    content: "\00c0"
}

.sbg-modding:before {
    content: "\00c1"
}
</style>

