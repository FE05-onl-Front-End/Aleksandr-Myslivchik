function setNumbers(end) {
    let out = [];
    return function (start) {
        let n = start;
        while (out.length < end) {
            if (out.includes(n) === false) {
                out.push(n);
            }
            n = Math.round((start + Math.random() * (end - start)))
        }
        return out.sort((a, b) => a - b);
    }
}


let countToTen = setNumbers(10);
countToTen(1)





