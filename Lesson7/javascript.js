function setNumbers(end) {
    let out = [];
    return function (start) {
        for (let i = start; i <= end; i++) {

            if (out.indexOf(i) === -1) {
                out.push(i);
            }
        }
        return console.log(out);
    }
}
let countToHundred = setNumbers(100);