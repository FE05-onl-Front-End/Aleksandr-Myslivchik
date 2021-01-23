function MakeObj() {
    
    this.name = prompt('Имя короля? ', ''),
    this.ourLost = +prompt('Потери: ', ''),
    this.ourArmy = +prompt('Численность армии: ', ''),
    this.enemiesLost = +prompt('Потери врага: ', ''),
    this.enemiesArmy = +prompt('Численность армии врага: ', '');
    alert(`Король ${this['name']}, мы победили вражескую армию в ${this['enemiesArmy']}! Враг бежит, оставив на поле боя ${this['enemiesLost']} павших воинов. Наши потери король ${this['name']} составили  ${this['ourLost']} героически павших воинов от всей нашей армии в ${this['ourArmy']} солдат! Мы победили, сохранив ${(this['ourArmy'] - this['ourLost'])} воинов. И можем продолжить преследовать остатки вражеской армии в ${(this['enemiesArmy'] - this['enemiesLost'])} солдат. С победой король ${this['name']}!!`);
    console.log('Done');
}

let obj = new MakeObj();