    let startButton = document.querySelector('.startButton');
    const animals = [
        {
          name: "lyon",
          weight: 45,
          isHealthy: true,
          isAche: false,
          warden: {
           name: "Petr",
           age: 72
          }
        },
        {
            name: "monkey",
            weight: 30,
            isHealthy: true,
            isAche: false,
            warden: {
             name: "Ivan",
             age: 55
            }
          },
          {
            name: "tiger",
            weight: 45,
            isHealthy: true,
            isAche: false,
            warden: {
             name: "Karl",
             age: 48
            }
          }
       ];
    
    
   
    function addAnimal(){
        let newItem = {name: prompt('Какое животное добавить?'), 
                        weight: +prompt('Его вес? '),
                        isHealthy: Boolean(+prompt('Оно здорово?\n1.Да\n0.Нет')),
                        isAche: Boolean(+prompt('Плохо себя чувствует?\n1.Да\n0.Нет')),
                        warden: {name: prompt('Имя смотрителя:'),age: +prompt('Его возраст:')}          
                    
                    }; // Задаем объект
        let check = animals.find(item => item.name == newItem['name']); // Проверка на существования имени

        while (check !== undefined) { // Проверка на совпадения
            alert('Такой зверь уже есть. Больше не надо!');
            newItem = {name: prompt('Какое животное доавбить?'), 
            weight: +prompt('Его вес? '),
            isHealthy: Boolean(+prompt('Оно здорово?\n1.Да\n0.Нет')),
            isAche: Boolean(+prompt('Плохо себя чувствует?\n1.Да\n0.Нет')),
            warden: {name: prompt('Имя смотрителя:'),age: +prompt('Его возраст:')}          
        
        };  //если есть совпадения - задаем еще раз
        check = animals.find(item => item.name == newItem['name']); // Проверка на сопадение
                    }
                    animals.push(newItem); // добавляем в массив
            console.log(check);   // 

}
    
    
    
    function changeValue(){
                  let names = [];
                for(let itter = 0;itter<1;itter++) {
    
                  let getAction = +prompt('Что будем менять?\n1.Получить список животных\n2. Жми 2, чтобы ввести животное, которое будем менять ');
    
          if (getAction == 1) {
            for(key of animals) {
              for(j in key) {
     if (j === 'name'){names.push(key[j]);}      // перебор ключей name - если тру - в массив
    }
    }
    alert(names);  // даем список
    names.splice(0); // чистим список
    itter--; // к началу
    }

     else if(getAction == 2) {
      let newName = prompt('Какое животное добавить : ','').toLocaleLowerCase();
      let oldName = prompt('Вместо какого животного?');
      let check = animals.find(item => item.name == oldName);
    
    
            while (check == undefined) { // Если такого нет, то повтор!
             alert('Такого зверя нет! Ввести другого !');
              oldName = prompt('Какое животное заменить?');
              check = animals.find(item => item.name = oldName);
    
    }
    
        for(key of animals) {
            for(j in key) {
    
                if(oldName === key[j]) {  key['name'] = newName; alert('Готово!'); break;}
    
    
                    }
                }
       
    
            }
    
    
       }
    
    }
    
    





    
    function delId(){ 

        let names = [];
        for(let itter = 0;itter<1;itter++) {

          let getAction = +prompt('Какое животное убираем?\n1.Получить список животных\n2. Жми 2, чтобы приступить к удалению ');

  if (getAction == 1) {
    for(key of animals) {
      for(j in key) {
if (j === 'name'){names.push(key[j]);}      // перебор ключей name - если тру - в массив
}
}
alert(names);  // даем список
names.splice(0); // чистим список
itter--; // к началу
}



if (getAction == 2) {



        let newName = prompt('Какое животное убрать : ','').toLocaleLowerCase();
        let check = animals.find(item => item.name == newName);
      
      
              while (check == undefined) { // Если такого нет, то повтор!
               alert('Такого зверя нет! Ввести другого !');
               newName = prompt('Какое животное убрать : ','').toLocaleLowerCase();
                check = animals.find(item => item.name = newName);
      
      }
      
          for(key of animals) {
              for(j in key) {
      
                  if(newName === key[j]) {  animals.splice([key],1); alert('Готово!'); break;}
      
      
                      }
                  }
        }

    }
}

function getAnimalList() {

    let names = [];
for(key of animals) {
  for(j in key) {
if (j === 'name'){names.push(key[j]);}      // перебор ключей name - если тру - в массив
}
}
let list = names.join(`
`);
alert(list);  // даем список
}



  
  
    startButton.addEventListener('click', function(){

        do   {
            var ans = +prompt('What to do?\n1.Press 1 to add an animal\n2.Press 2 to change name\n3.Presse 3 to delete an animal\n4.Get animals names\n5.Stop!', ''); // выбираем функцию
            }
            while (ans == null || ans == undefined || ans == '' || isNaN(ans)); // проверка на пустую строку или отмену
            
            if (ans === 1) {addAnimal();} else if (ans === 2) {changeValue();} else if (ans === 3) {delId();} else if (ans === 4) {getAnimalList();} else if (ans === 5) {alert('Давай досвидания!');};
            
            
            
        })   
           
      