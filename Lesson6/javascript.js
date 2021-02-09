Unique.Напишите функцию, которая убирает повторяющиеся значения.
/**
 * Описание задачи: Напишите функцию, которая убирает повторяющиеся значения.
 * Ожидаемый результат: [1, 2, 3, 1, 2] => [1, 2, 3]
 * @param {Array<string | number>} array - Массив с примитивными значениями
 * @returns {Array}
 */
const unique = (array) => {
    return array.filter((item, index) => array.indexOf(item) === index);
}


const data = [1, 2, 1, 1, 2, 2, 3, 3, 3];
console.log(unique(data)); // [1, 2, 3]




// 2ая 

IsEqual.Напишите функцию, которая сравнивает два массива и возвращает true, если они идентичны.
/**
 * Описание задачи: Напишите функцию, которая сравнивает два массива и возвращает true, если они идентичны.
 * Ожидаемый результат: ([1, 2, 3], [1, 2, 3]) => true
 * @param {Array} firstArray - Массив с примитивными значениями
 * @param {Array} secondArray - Массив с примитивными значениями
 * @returns {boolean}
 */
const isEqual = (firstArray, secondArray) => {
    let checkArr = [];
    if (firstArray.length === secondArray.length) {
        console.log('Длина совпадает');
    } else {
        return false;
    }
    for (let [key, value] of Object.entries(firstArray)) {
        for (let [key2, value2] of Object.entries(secondArray)) {
            if (key === key2 && value === value2) {
                checkArr.push(true);
            }
        }
    }
    if (checkArr.length === firstArray.length) {
        return true;
    } else {
        return false;
    }
}
const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4];
const arr3 = [1, 2, 3, 5];
const arr4 = [1, 2, 3, 4, 5];
console.log(isEqual(arr1, arr2)); // true
console.log(isEqual(arr1, arr2)); // true
console.log(isEqual(arr1, arr3)); // false
console.log(isEqual(arr1, arr4)); // false


// 3-ая задача 

Reverse.Напишите функцию, которая разворачивает массив в обратном порядке.Пожалуйста, не используйте array.reverse(), чтобы сделать задачу более интересной.
/**
 * Описание задачи: Напишите функцию, которая разворачивает массив в обратном порядке.
 * Ожидаемый результат: [1, 2, 3] => [3, 2, 1]
 * Сложность задачи: 1 of 5
 * @param {Array} array - Массив любых элементов
 * @returns {Array}
 */
const reverse = (array) => {
    let reverseArr = [];
    array.reduceRight((init, item) => reverseArr.push(item), 0);
    return reverseArr;
}
const data = [1, 2, 3];
console.log(reverse(data)); // [3, 2, 1]


//Задачи из презы


//1-ая задача : Написать функцию, которая принимает этот массив и выводит самый дорогой участок определенного типа (он указан в функции, это поле type).



let data = [{
    price: 324,
    type: 2,
    area: 375,
    presence: true,
    name: "Aria",
    id: 41098,
}, {
    price: 660,
    type: 4,
    area: 451,
    presence: true,
    name: "Bayard",
    id: 48467
}, {
    price: 337,
    type: 4,
    area: 525,
    presence: true,
    name: "Bellehurst",
    id: 49340
}, {
    price: 343,
    type: 4,
    area: 538,
    presence: false,
    name: "Brookview",
    id: 52504
}, {
    price: 423,
    type: 2,
    area: 506,
    presence: true,
    name: "Dumont Place",
    id: 41172,
}, {
    price: 257,
    type: 4,
    area: 379,
    presence: false,
    name: "Halstead",
    id: 49952
}, {
    price: 230,
    type: 2,
    area: 468,
    presence: true,
    name: "Hillgrove",
    id: 41166
}, {
    price: 183,
    type: 4,
    area: 451,
    presence: true,
    name: "Kempston Place",
    id: 48471
}, {
    price: 674,
    type: 2,
    area: 522,
    presence: true,
    name: "Overlook at Queen Creek",
    id: 48470
}, {
    price: 450,
    type: 2,
    area: 373,
    presence: true,
    name: "Reserve at Wildwood",
    id: 50316
}, {
    price: 795,
    type: 1,
    area: 366,
    presence: true,
    name: "Reverie on Cumberland",
    id: 48465
}, {
    price: 550,
    type: 4,
    area: 376,
    presence: true,
    name: "Riverside",
    id: 41080
}, {
    price: 190,
    type: 1,
    area: 367,
    presence: true,
    name: "Serenade",
    id: 41168
}, {
    price: 589,
    type: 4,
    area: 368,
    presence: false,
    name: "The Grove",
    id: 40912
}, {
    price: 330,
    type: 2,
    area: 368,
    presence: true,
    name: "Woodwinds at New Providence",
    id: 41086
}, {
    price: 299,
    type: 2,
    area: 455,
    presence: true,
    name: "Canopy at Hudson Bend",
    id: 51105
}, {
    price: 263,
    type: 3,
    area: 481,
    presence: true,
    name: "Carmel",
    id: 41193
}, {
    price: 169,
    type: 1,
    area: 454,
    presence: true,
    name: "Estates of Flintrock",
    id: 41060
}, {
    price: 222,
    type: 1,
    area: 483,
    presence: true,
    name: "Fairview Heights",
    id: 41192
}, {
    price: 385,
    type: 4,
    area: 448,
    presence: false,
    name: "Headwaters",
    id: 53168
}, {
    price: 180,
    type: 2,
    area: 447,
    presence: true,
    name: "Highlands at Mayfield Ranch ",
    id: 50235
}, {
    price: 570,
    type: 4,
    area: 448,
    presence: true,
    name: "Highpointe",
    id: 41154,
}, {
    price: 690,
    type: 3,
    area: 480,
    presence: true,
    name: "Lagos",
    id: 41198
}, {
    price: 280,
    type: 3,
    area: 446,
    presence: false,
    name: "Mockingbird Park",
    id: 51381
}, {
    price: 133,
    type: 1,
    area: 446,
    presence: false,
    name: "Mockingbird Park",
    id: 51381,
}, {
    price: 530,
    type: 1,
    area: 448,
    presence: true,
    name: "Saratoga Hills",
    id: 41019
}, {
    price: 577,
    type: 4,
    area: 455,
    presence: true,
    name: "Summit at Lake Travis",
    id: 41061
}, {
    price: 290,
    type: 4,
    area: 481,
    presence: false,
    name: "Vine Creek",
    id: 51382
}, {
    price: 150,
    type: 1,
    area: 443,
    presence: true,
    name: "Vista Vera",
    id: 49408,
}, {
    price: 453,
    type: 3,
    area: 411,
    presence: true,
    name: "Lake Castleberry",
    id: 49596
}];


let getRegionByType = (array, n) => {
    let res = [];
    let check = 0;
    res = array.filter((item) => item.type === n).filter(item => {
        if (item.price > check) {
            check = item.price;
            return item;
        } else {
            return false;
        }
    }).find(item => item.price === check);
    return res;

}

//2-ая задача : Написать функцию, которая высчитывает самую дорогую по общей денежной стоимости землю (за константу мы уже будем полагать, что есть только четыре type)
//В выводе мы получим общую сумму и type этой земли


let getMostExpensiveRegion = (array) => {
    let res = [];
    let check = 0;
    res = array.filter(item => {
        if (item.price > check) {
            check = item.price;
            return item
        } else {
            return false;
        }
    }).find(item => item.price === check);
    return {
        ['Стоимость земли']: res.price,
        ['тип земли']: res.type
    };

}


// Задание 3.
// Написать функцию, которая принимает минимальную и максимальную денежную стоимость + минимальную и максимальную площадь земельного участка
// Функция должна вывести такую землю, подходящую под данные критерии или написать, что такой нет


const getRegion = (array, minarea, maxarea, minprice, maxprice) => {
    let res = [];
    res = array.filter(obj => {
        if (obj.area >= minarea && obj.area <= maxarea && obj.price >= minprice && obj.price <= maxprice) {
            return obj;
        } else {
            return false;
        }
    })
    if (res.length !== 0) {
        return res;
    } else {
        console.log('По заданным параметрам ничего не найдено')
    };
}