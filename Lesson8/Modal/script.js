const modal = document.querySelector('.modal'),
    btn = document.querySelector('.add-user'),
    btnClose = document.querySelector('.close'),
    firstName = document.querySelector('input[name="first-name"]'),
    lastName = document.querySelector('input[name="last-name"]'),
    age = document.querySelector('input[name="age"]'),
    btnOk = document.querySelector('.btn.ok'),
    popapWindow = document.querySelector('.popap'),
    notify = document.createElement('div');

const checkInp = (inp) => {
    isInval = false;
    notify.style.display = 'none';
    if (inp.value.length > 10) {
        // isInval = true;
        notify.classList.add('notifying');
        notify.innerText = 'Не должно превышать 10 символов и должно быть строкой';
        inp.closest('label').append(notify);
        notify.style.display = 'block';
        inp.focus();   
        inp.value = '';
    }
}

const checkAge = (age) => {
    isInval = false;
    let value = Number(age.value);
    notify.style.display = 'none';
    notify.classList.add('notifying');
    notify.innerText = 'Возраст должен быть числом от 0 до 135';
    if (isNaN(value) || value < 0 || value > 135) {
        // isInval = true;
        age.closest('label').append(notify);
        notify.style.display = 'block';
        age.focus();
        age.value = '';
    }
}

btn.addEventListener('click', e => {

    modal.style.display = 'block';

})

btnClose.addEventListener('click', e => {

    modal.style.display = 'none';

})

modal.addEventListener('click', e => {
    if (!e.target.matches('.modal')) return
    modal.style.display = 'none';
    document.querySelectorAll('input').forEach(i => i['value'] = '')
})


btnOk.addEventListener('click', () => {
    let unchecked = '';
    document.querySelectorAll('input').forEach(i => {
        if (i['value'] === '') unchecked += i.previousElementSibling.innerText + '\n';
    })
    if (unchecked) {
        alert(`некоторые поля не заполнены: ${unchecked}`);
        return;
    }
    alert(`First Name: ${firstName['value']}\nLast Name: ${lastName['value']}\nAge: ${age['value']}`);
    document.querySelectorAll('input').forEach(i => i['value'] = '')
    modal.style.display = 'none';
})

firstName.addEventListener('change', () => {
    checkInp(firstName)
})

lastName.addEventListener('change', () => {
    checkInp(lastName)
})

age.addEventListener('change', () => {
    checkAge(age)
})
