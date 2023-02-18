let site=document.getElementById("Site")
let enterButton=document.getElementById("Enter")
let volumeButton=document.getElementById("Volume")
let spelunk=document.getElementById("Spelunk")
let bttmfooter=document.getElementById("BttmFooter")
let rabbitTheme=document.createElement("audio")
let settings=document.getElementById("Settings")
let controls=document.getElementById("Controls")
function delay(n){return new Promise(function(resolve){setTimeout(resolve,n*500)})}
function togglePlay(){volumeButton.classList.toggle("off")
if(rabbitTheme.paused){rabbitTheme.play()}else{rabbitTheme.pause()}}
function awaken(){site.classList.add("awake")
rabbitTheme.src="./assets/audio/rt.mpeg"
rabbitTheme.volume=0.5
rabbitTheme.loop=true}
function allowEntry(){enterButton.classList.remove("disabled")
enterButton.innerHTML=`Let's Fucking Go!!!`
enterButton.onclick=function(){site.classList.add("loaded")
rabbitTheme.play()
setTimeout(function(){enterButton.remove()},1000);}
volumeButton.onclick=function(){togglePlay()}}
window.addEventListener("load",async()=>{await delay(0)
awaken()
await delay(0)
allowEntry()
psst.onclick=function(){document.getElementById("Family").src="";}})