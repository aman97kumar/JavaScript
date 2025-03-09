
const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#'
    for(let i=0; i<6; i++){
        color+= hex[Math.floor(Math.random()*16)]
    }
    return color;
};
// console.log(randomColor())

let IntervalId
const startChangingColor = function(){
    function changeBgColor(){
        document.body.style.backgroundColor=randomColor();
    }

    if(!IntervalId){
        IntervalId = setInterval(changeBgColor, 1000)
    }
    
  
}
document.querySelector('#start').addEventListener('click', startChangingColor)

const stopChangingColor = function() {
    clearInterval(IntervalId)
    IntervalId = null
}
document.querySelector('#stop').addEventListener('click', stopChangingColor)