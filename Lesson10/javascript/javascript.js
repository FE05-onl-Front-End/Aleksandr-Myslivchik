window.addEventListener('DOMContentLoaded', function () {
    'use strict';
    let tabItem = document.getElementsByClassName('tab-item'),
        card = document.querySelector('.tab-item-card'),
        tabContent = document.getElementsByClassName('main-content-wrapper-flex'),
        closes = document.getElementsByClassName('close-btn'),
        cursor = document.getElementsByClassName('cursor')[0];

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
            tabItem[i].classList.remove('show-item');
            tabItem[i].classList.add('hide-item');


        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.add('show');
            tabContent[b].classList.remove('hide');
            tabItem[b].classList.remove('hide-item');
            tabItem[b].classList.add('show-item');
        }
    }

    card.addEventListener('click', function (event) {
        let target = event.target;
        if (target && event.target.matches('.tab-item') || event.target.matches('.close-btn')) {
            for (let i = 0; i < tabItem.length; i++) {
                if (target == tabItem[i] || event.target.matches('.close-btn')) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    })

    card.addEventListener('click', (e) => {

        let target = e.target;
        if (target.matches('.close-btn')) {
            for (let i = 0; i < closes.length; i++) {
                if (closes.length == 1) break;
                if (target == closes[i]) {
                    hideTabContent(0);
                    tabContent[i].remove();
                    tabItem[i].remove();
                    showTabContent(closes.length - 1);
                    tabItem[closes.length - 1].classList.remove('hide-item');
                    tabItem[closes.length - 1].classList.add('show-item');
                    break;
                }
            }
        }
    })

    document.addEventListener('mousemove', e => {
        cursor.style.cssText = `
            display: block;
            top:  ${e.pageY+8}px  ;
            left: ${e.pageX+8}px   ;
        `;
    })
});