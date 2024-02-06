let box_1=document.querySelector('#box_1');
let box_2=document.querySelector('#box_2');
let btn_answers=document.querySelector('#box_3');
let btn_restart=document.querySelector('#icon_power');
let wrapper = document.querySelector('#wrapper');

box_1.addEventListener('click', ()=>{
    box_1.classList.add('fade-out')
    btn_restart.classList.remove('d-none')
})
box_2.addEventListener('click', ()=>{
    box_2.classList.add('fade-out')
    btn_restart.classList.remove('d-none')
})

btn_answers.addEventListener('click', ()=>{
    wrapper.innerHTML=''
    let div = document.createElement('div')
    div.classList.add('fade-in-2','row','flex-row','row-custom','justify-content-evenly','align-items-center')
    div.innerHTML = `
            <div id="answer_1" style="transition: 4s" class="col-7 col-md-7 col-lg-3 rounded-pill bg-warning">
                <h1 class="h1-1 text-center text-light">I'm ok</h1>
            </div>
            <div id="answer_2" style="transition: 3s" class="col-7 col-md-7 col-lg-3 box-2">
                <h1 class="h1-2 text-center ">could be better...</h1>
            </div>
    `;
    wrapper.appendChild(div);
    btn_restart.classList.remove('no-view')

    let btn_answer_2 = document.querySelector('#answer_2')
    let lets = document.querySelector('#lets')
    function scrollFunction() {
        let element = document.getElementById("content");
        element.scrollIntoView({ behavior: 'smooth'});
      }
      
    btn_answer_2.addEventListener('click',()=>{
        scrollFunction()
        lets.classList.add('bounce-in-right')
    })
});

btn_restart.addEventListener('click',()=>{
        window.location.reload();
})

