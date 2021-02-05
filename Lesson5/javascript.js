// function MakeObj() {
    
//     this.name = prompt('Имя короля? ', ''),
//     this.ourLost = +prompt('Потери: ', ''),
//     this.ourArmy = +prompt('Численность армии: ', ''),
//     this.enemiesLost = +prompt('Потери врага: ', ''),
//     this.enemiesArmy = +prompt('Численность армии врага: ', '');
//     alert(`Король ${this['name']}, мы победили вражескую армию в ${this['enemiesArmy']}! Враг бежит, оставив на поле боя ${this['enemiesLost']} павших воинов. Наши потери король ${this['name']} составили  ${this['ourLost']} героически павших воинов от всей нашей армии в ${this['ourArmy']} солдат! Мы победили, сохранив ${(this['ourArmy'] - this['ourLost'])} воинов. И можем продолжить преследовать остатки вражеской армии в ${(this['enemiesArmy'] - this['enemiesLost'])} солдат. С победой король ${this['name']}!!`);
//     console.log('Done');
// }

// let obj = new MakeObj();






//    //2-ая задача
//    /**
//   * Описание задачи: Напишите функцию, которая очищает массив от нежелательных значений, таких как false, undefined, пустые строки, ноль, null.
//   * Ожидаемый результат: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]
//   * @param {Array} array - Массив любых элементов
//   * @returns {Array}
// */


// const compact = (array) => {

//      array.forEach((item,index) => {
//         if ( item == false || item == undefined ) {
//             array.splice(index, 1);
//         } 

//      })
//      array.forEach((item,index) => {

// if (item == false) {
//     array.splice(index, 1);

//         }
//    })
// }
   
//    const data = [0, 1, false, 2, undefined, '', 3, null];
//    console.log(compact(data)); // [1, 2, 3]



//   * Описание задачи: Напишите функцию, которая заполняет новый массив предоставленным значением.
//   * Ожидаемый результат: (3, 'a') => ['a', 'a', 'a']
//   * @param {number} arraySize - размер массива
//   * @param {?} value - значение для массива
//   * @returns {Array}
// */

const fill = (arraySize, value) => {
   
    let i=0;
    let array = [];
    while (i<arraySize) {
        array.push(value);
        i++;
    }
    return array;
    
    }
   
   const data = 3;
   const valueToFill = 'a';
   console.log(fill(data, valueToFill)) // ['a', 'a', 'a']


   const compact = (array) => {

    let newar = array.filter((item) =>  item );
    return newar;
}
  
  const data2 = [0, 1, false, 2, undefined, '', 3, null];
  console.log(compact(data2));