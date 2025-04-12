document.addEventListener('DOMContentLoaded', ()=>{
const colours = ["red", "green", "blue", "orange", "purple", "yellow", "BlanchedAlmond", "DarkGrey", "FireBrick"]
const btn = document.getElementById('btn')
const change= document.getElementById('color-box')


btn.addEventListener('click', () =>{
    const changeTo = colours[Math.floor(Math.random()*colours.length)];
    change.style.backgroundColor = changeTo

})
})


