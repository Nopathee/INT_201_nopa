function sum(n1, n2){
    return n1 + n2;
}

//arrow funtion
const sum1 = (n1,n2) => n1+n2;
const sum2 = (n1,n2) => {
    return n1+n2;
}
const sum3 = (n1,n2) => {
    let result = 0
    result = n1+n2
    return result
}

const echo = m => m
console.log(echo('INT201'))