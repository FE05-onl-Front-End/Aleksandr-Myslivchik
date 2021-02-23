const output = document.querySelector('.paint-output-element'),
    select = document.getElementById('select'),
    options = document.querySelectorAll('select option'),
    figures = document.querySelectorAll('.paint-output-element div'),
    colors = document.querySelectorAll('.color'),
    triangle = document.getElementById('triangle2'),
    clearButton = document.querySelector('#clear'),
    colorsWrapper = document.querySelector('.paint-input-block');
let currentfigure;

const clearOutput = () => {
    figures.forEach(i => {
        i.hidden = true;
    })
}

const showFigure = e => {
    let val = e.target.value;
    switch (val) {
        case 'triangle':
            document.getElementById(val).hidden = false;
            triangle.hidden = false;
            break;
        case 'ellipse':
            document.getElementById(val).hidden = false;
            break;
        case 'circle':
            document.getElementById(val).hidden = false;
            break;
        case 'rectangle':
            document.getElementById(val).hidden = false;
            break;
        case 'square':
            document.getElementById(val).hidden = false;
            break;
    }
    if (currentfigure) currentfigure.style.backgroundColor = '';
    currentfigure = document.getElementById(val);
}

select.addEventListener('click', e => {
    clearOutput()
    showFigure(e)
})

clearButton.addEventListener('click', () => {

    if (currentfigure.id === 'triangle') {
        currentfigure.style.borderBottomColor = 'black';
        triangle.style.borderBottomColor = 'white';
        return;
    }
    currentfigure.style.backgroundColor = 'white';
})

colorsWrapper.addEventListener('click', e => {

    let target = e.target;
    let color = target.dataset.color;
    if (currentfigure.id === 'triangle') {
        currentfigure.style.borderBottomColor = color;
        triangle.style.borderBottomColor = color;
        return;
    }
    currentfigure.style.backgroundColor = color;
})