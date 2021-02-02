function makeTree(n) {    
    let obj = {},
        i=0,
        value = '*',
        step = ' ';

    for(;i<n;i++) {


        if(i == 0) {
            obj[i] = value;
        } else {
            obj[i] = obj[i-1] + value;
        }


        console.log(obj[i]);

    } 
i--;
    for(;;i--) {
        console.log(obj[i]);

        if(i == 0) break;
    }

}



function divide(n) {

    for(var i = 1;n >= 50;i++) {

        n = Math.round(n/2);
    }

    console.log(`Число делений: ${i}, частное: ${n}`);

}



    function makeFullTree(n) {    

        for (let i = 1; i <= n; i += 2) {
            console.log(' '.repeat((n - i) / 2)+'*'.repeat(i));
          }
    
    }

    