const container = document.querySelector('.container');
const rgbButton = document.getElementById('rgb')
const clear = document.getElementById('clear')
const input = document.getElementById('no-box')
const sizeText = document.getElementById('size')

const rainbowMode = ()=>{
   return Math.floor(Math.random() * 255)
}


const grid = [];
let x = input.value;
let rgbMode = false;
const squareSize = 100 / x;
for(let i = 0; i<x*x;i++){
       grid[i] = document.createElement('div');
        grid[i].classList.add('grid-block')
        grid[i].style.width = `${squareSize}%`;
        grid[i].style.height = `${squareSize}%`;
       container.appendChild(grid[i]);
    }

const colorFunc = ()=>{
grid.forEach(item => { 
    item.addEventListener('mouseenter',()=>{
            let op = window.getComputedStyle(item).getPropertyValue("opacity");
      if(!item.classList.contains('filled')){
        if(rgbMode === false){
            item.style.backgroundColor = `rgb(0,0,0)`;
            item.classList.add('filled')
        }else{
            item.style.backgroundColor = `rgb(${rainbowMode()},${rainbowMode()},${rainbowMode()})`
            item.classList.add('filled')
        }
    }else{
        op = Number(op) + 0.4;
        item.style.opacity = op;
        console.log(op)
    }
    })
})
}
colorFunc()
rgbButton.addEventListener('click',()=>{
    if(rgbMode ===false){
        rgbMode = true;
    }else{
        rgbMode = false;
    }
})

clear.addEventListener('click',()=>{
    grid.forEach((item)=>{
        item.style.backgroundColor= "white";
        item.style.opacity = 0.1;
        item.classList.remove("filled")
    })
})
input.addEventListener("input",()=>{
    for(let i = 0; i<x*x;i++){
       container.removeChild(grid[i]);
    }
    grid.length = 0;
    x = input.value
    const squareSize = 100 / x; 
    for(let i = 0; i<x*x;i++){
       grid[i] = document.createElement('div');
        grid[i].classList.add('grid-block')
        grid[i].style.width = `${squareSize}%`;
        grid[i].style.height = `${squareSize}%`;
       container.appendChild(grid[i]);
    }
    sizeText.innerText = `${x}-X-${x}`;
    colorFunc();
})