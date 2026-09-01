const str = "vinayak"
const arr = [...str];
console.log(arr);


const space = arr.join(' ');
console.log(space);


const outer = () => {
    let count = 0;
    return function inner() {
        count++;
        console.log(count);
    };
}

const secret = outer();
secret()
secret()
secret()

