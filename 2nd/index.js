// function myFunc(id) {
//     let target = document.getElementById(id);
//     formValidation(target);

// }

const form = document.getElementsByClassName('js-form')[0];



function formValidation (target) {
    // for basic we are just gonna checks the length
    const value = target.value;
            
    let errorEl = target.nextElementSibling; 
    if(value.length < 2) {
        errorEl.classList.remove('d-none')
    } else {
        errorEl.classList.add('d-none')
    }

}

// // function formChangeEvent(){

// // }

function init() {
    form.addEventListener('change', (e)=>{
        const target = e.target;
        formValidation(target);
    })
    form.addEventListener('submit', async (e)=>{
        // preventing default submit behavior of the form
        e.stopPropagation();
        e.preventDefault();
        
        const formData = new FormData(form);
        for(const [key, value] of formData) {
            console.log(key, value);
        }
        
        // now  task here is the fetch request 
        // https://jsonplaceholder.typicode.com/ api to be used
        // asks hint if needed
        // await fetch('https://jsonplaceholder.typicode.com/todos/1')
        // .then(response => response.json())
        // .then(json => console.log(json))
    })


}
init();

