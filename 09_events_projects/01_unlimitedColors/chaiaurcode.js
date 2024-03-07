// Generate a random color using hex value

const randomColor = function (){
    const hex = "0123456789ABCDEF"
    let color = "#"
    for(let i = 0; i < 6; i++){
      color += hex[Math.floor(Math.random() * 16)]
    }
    return color
  }
  
  // console.log(Math.floor(Math.random() * 16))
  // console.log(randomColor())
  
  let changeColor
  
  // changing color every second
  document.querySelector('#start').addEventListener('click',function(){
    changeColor = setInterval(function(){
      document.querySelector('body').style.backgroundColor = randomColor()
    },1000)
  })
  
  // stoping the color
  document.querySelector('#stop').addEventListener('click',function(){
    clearInterval(changeColor)
  })