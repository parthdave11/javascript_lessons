// Events excute on some activity.

// example

// not prefered approch
// document.getElementById('owl').onclick = function(){
//     alert("owl clicked")
// }

//write event name in the string.
//'e' is the varaible name in which you get the event object (you can name anything other then 'e' also).
// events to study ==> type, timestamp, default prevented, target, toElement, srcElement, currentTarget.
// interview releted question ==> clientX, clientY, screenX, screenY
// altkey, ctrlkey, shiftkey
// false ==> false is for capturing or bubling (by default it is false so we do not write it).
//           If we make it false then bubling will happen when we click the owl and then it will print the outside element event and if it is true then
//           capturing will happen and outside tag event will print first then inside event will be printed.


document.getElementById('images').addEventListener('click',function(e){
    alert('clicked inside the ul')
},false)

document.getElementById('owl').addEventListener('click',function(e){
    alert('owl clicked') // and to stop the propogation or stop the bubling or capturing we use stopPropagation
    e.stopPropagation()
},false)