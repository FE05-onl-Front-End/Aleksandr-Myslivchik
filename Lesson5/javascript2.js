
// const compact = (array) => {    // 1-ая готово

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

const compacts = (array) => {  // 1-ая готово

  let newar = array.filter((item) =>  !!item );
  return newar;
}

const data2 = [0, 1, false, 2, undefined, '', 3, null];
console.log(compacts(data2));


const fill = (arraySize, value) => {  // 2-ая готово 
   
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


 

 // Из презы задачка

let usersAge = {

  ivanov: '19',
  petrov: '17',
  sidorov: '21'
}



let minors = [];
let majors = [];
let checkAge = (obj) => {

  for(let [key,value] of Object.entries(obj)){
      value >= 18  ? majors.push(({name:key, age:+value})) : minors.push(({name:key, age:+value}))

  }

};

checkAge(usersAge);


// Со звездочкой 

let studentAge = {

  ivanov: '1',
  petrov: '7',
  sidorov: '10',
  kravchuk: '6',
  dekkers: '9',
  saenchai: '8'
}


let studentsRate=[];

let checkAge = (obj) => {

  for(let [key,value] of Object.entries(obj)){
      (value >= 9 && value <=10 )  ? studentsRate.push(({name:key, grade:+value, level: 'Отличник'})) : 
      (value >= 7 && value <=8 )   ? studentsRate.push(({name:key, grade:+value, level: 'Хорошист'})) :
      (value >= 5 && value <=6 )   ? studentsRate.push(({name:key, grade:+value, level: 'Среднячок'})) : 
      studentsRate.push(({name:key, grade:+value, level: 'Двоечник'}))
  }
};


checkAge(studentAge);