let item = document.getElementsByClassName('item')
let slidItem = document.getElementById('slide-item')
let next = document.getElementById('next')
let prev = document.getElementById('prev')
let close = document.getElementById('close')

let clinic = item.length
for(let i=0 ;i<item.length;i++){
    item[i].addEventListener('click',function(e){
        console.log(e)
    })
}