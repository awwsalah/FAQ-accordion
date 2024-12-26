const btn_show = document.querySelectorAll('.btn');
const btn_show1 = document.querySelectorAll('.btn1');
const btn_show2= document.querySelectorAll('.btn2');
const btn_show3 = document.querySelectorAll('.btn3');
const p_text = document.querySelectorAll('.text')
const p_text1 = document.querySelectorAll('.text1')
const p_text2 = document.querySelectorAll('.text2')
const p_text3 = document.querySelectorAll('.text3')


btn_show.forEach((show) => {
    show.addEventListener(('click'), () => {
        console.log('it been clicked')
        text_fn()
            show.classList.add('show')
            console.log('it worked')
    })
})


btn_show1.forEach((show1) => {
    show1.addEventListener(('click'), () => {
        console.log('it been clicked')
        text_fn1()
        p_text1.forEach((ptext1) => {
            
            ptext1.classList.add('show')
            console.log('it worked')
        })
    })
})


btn_show2.forEach((show2) => {
    show2.addEventListener(('click'), () => {
        console.log('it been clicked')
        text_fn2()
        p_text2.forEach((ptext2) => {
            
            ptext2.classList.add('show')
            console.log('it worked')
        })
    })
})


btn_show3.forEach((show3) => {
    show3.addEventListener(('click'), () => {
        text_fn3()
        p_text3.forEach((ptext3) => {
            
            ptext3.classList.add('show')
            console.log('it worked')
        })
    })
})


function text_fn(){
    p_text.forEach((text) => {
        text.classList.remove('text')
    })
}

function text_fn1(){
    p_text1.forEach((text1) => {
        text1.classList.remove('text1')
    })
}

function text_fn2(){
    p_text2.forEach((text2) => {
        text2.classList.remove('text2')
    })
}

function text_fn3(){
    p_text3.forEach((text3) => {
        text3.classList.remove('text3')
    })
}