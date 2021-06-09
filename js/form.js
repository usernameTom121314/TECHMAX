// создал три переменных

const form = document.querySelector('.form'),
user = document.querySelector('.name'),
mail = document.querySelector('.mail'),
errorText = document.querySelector('.error');

// отключил обновление странички при сабмите если импут пустой
form.addEventListener('submit', (e)=>{
    let messages = [];
    if(user.value === '' || user.value == null) messages.push('Введи имя чмо блять')
    else if(mail.value === '' || user.value == null || user.value === !NaN ) messages.push("Введи адрес чмо блять") 
    if( messages.length > 0){
        e.preventDefault()
        user.classList.add = 'red'
        errorText.innerText = messages.join(', ')
    }
})