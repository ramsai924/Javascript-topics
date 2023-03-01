const debounce = document.getElementById('search_debouncing')
const throtling = document.getElementById('search_throttling')

function debounceFun(delay){
    let timer;
    return function(e){
        clearTimeout(timer)
        timer = setTimeout(() => {
            console.log('debounce search', e.target.value)
        }, delay) 
    }
}

debounce.addEventListener('keyup', debounceFun(300))


function throttlefun(delay){
    let flag = true;
    return function(e){
        if(flag){
            console.log('throtling search', e.target.value)
            flag = false;
            setTimeout(() => {
                flag = true
            }, delay)
        }
    }
}

throtling.addEventListener('keyup', throttlefun(1000))