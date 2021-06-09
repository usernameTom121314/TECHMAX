// создал три переменных

const form = document.querySelector('.form'),
user = document.querySelector('.name'),
mail = document.querySelector('.mail'),
errorText = document.querySelector('.error');

// отключил обновление странички при сабмите если импут пустой
form.addEventListener('submit', (e)=>{
    let messages = [];
    if(user.value === '' || user.value == null) messages.push('Требован имя') 
    if(messages.length > 0){
        e.preventDefault()
        errorText.innerText = messages.join(', ')
    }
})