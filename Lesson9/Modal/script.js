window.addEventListener('DOMContentLoaded', function () {

    const modal = document.querySelector('.modal'),
        btn = document.querySelector('.add-user'),
        btnClose = document.querySelector('.close'),
        firstName = document.querySelector('input[name="first-name"]'),
        lastName = document.querySelector('input[name="last-name"]'),
        age = document.querySelector('input[name="age"]'),
        btnOk = document.querySelector('.btn.ok'),
        popapWindow = document.querySelector('.popap'),
        notify = document.createElement('div');


    const table = document.createElement('table');
    thRow = document.createElement('tr'),
        thName = document.createElement('th'),
        thLastName = document.createElement('th'),
        thAge = document.createElement('th');
    thName.innerText = 'Имя',
        thLastName.innerText = 'Фамилия',
        thAge.innerText = 'Возраст';
    table.appendChild(thRow);
    thRow.appendChild(thName);
    thRow.appendChild(thLastName);
    thRow.appendChild(thAge);

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


    //Кнопка

    firstName.addEventListener('change', () => {
        checkInp(firstName)
    })

    lastName.addEventListener('change', () => {
        checkInp(lastName)
    })

    age.addEventListener('change', () => {
        checkAge(age)
    })



    let data = [{
            firstName: 'Ashton',
            lastName: 'Kutcher',
            age: 17
        }, {
            firstName: 'Bradley',
            lastName: 'Pitt',
            age: 40
        }, {
            firstName: 'Hannah',
            lastName: 'Dakota',
            age: 8
        },
        {
            firstName: 'Tim',
            lastName: 'Burton',
            age: 50
        },
        {
            firstName: 'Cat',
            lastName: 'Dog',
            age: 9
        },
    ];

    let box = document.querySelector('div');

    const createTable = dataCheck => {


        dataCheck.forEach((person) => {

            if (person.age >= 18) {
                let tr = document.createElement('tr');
                table.appendChild(tr);
                let tdName = document.createElement('td');
                tdName.innerText = `${person.firstName}`;
                tr.appendChild(tdName);
                let tdLastName = document.createElement('td');
                tdLastName.innerText = `${person.lastName}`;
                tr.appendChild(tdLastName);
                let tdAge = document.createElement('td');
                tdAge.innerText = `${person.age}`;
                tr.appendChild(tdAge);
                tr.style.backgroundColor = 'green';

            } else {

                let tr = document.createElement('tr');
                table.appendChild(tr);
                let tdName = document.createElement('td');
                tdName.innerText = `${person.firstName}`;
                tr.appendChild(tdName);
                let tdLastName = document.createElement('td');
                tdLastName.innerText = `${person.lastName}`;
                tr.appendChild(tdLastName);
                let tdAge = document.createElement('td');
                tdAge.innerText = `${person.age}`;
                tr.appendChild(tdAge);
                tr.style.backgroundColor = 'red';
            }
        })

        let wrapper = document.querySelector('.wrapper');
        wrapper.innerHTML = null;
        wrapper.appendChild(table);

    }


    createTable(data)

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

        if (age['value'] >= 18) {
            let tr = document.createElement('tr');
            table.appendChild(tr);
            let tdName = document.createElement('td');
            tdName.innerText = `${firstName['value']}`;
            tr.appendChild(tdName);
            let tdLastName = document.createElement('td');
            tdLastName.innerText = `${lastName['value']}`;
            tr.appendChild(tdLastName);
            let tdAge = document.createElement('td');
            tdAge.innerText = `${age['value']}`;
            tr.appendChild(tdAge);
            tr.style.backgroundColor = 'green';

        } else {

            let tr = document.createElement('tr');
            table.appendChild(tr);
            let tdName = document.createElement('td');
            tdName.innerText = `${firstName['value']}`;
            tr.appendChild(tdName);
            let tdLastName = document.createElement('td');
            tdLastName.innerText = `${lastName['value']}`;
            tr.appendChild(tdLastName);
            let tdAge = document.createElement('td');
            tdAge.innerText = `${age['value']}`;
            tr.appendChild(tdAge);
            tr.style.backgroundColor = 'red';
        }

        document.querySelectorAll('input').forEach(i => i['value'] = '')
        modal.style.display = 'none';

    })
})