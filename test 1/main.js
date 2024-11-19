const text = document.querySelector('.text');
const moin = document.querySelector('#moin');
const reset = document.querySelector('#reset');
const plus = document.querySelector('#plus');

let count = 0 ;

moin.onclick = function(){
    if(count >0){
        count--;
        text.textContent = count;
    }
    else{
        let win = window.prompt('write your name for can we give you 100$ becouse you are smart');
        if(win === 'ismail baoud'){
            alert('you are smart than that we need to give you all the world bro 🤣')
        }
        else{
            alert('oh you are not smart we are sorry you can try againe later 😔')
        }
    }
}
plus.onclick = function(){
    count++;
    text.textContent = count;
}
reset.onclick = function(){
    count = 0;
    text.textContent = count;
}