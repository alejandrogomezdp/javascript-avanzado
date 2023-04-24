// const sayHello = (userName)=> {
//     console.log('Hi ' + userName);
// }

// const getUserName = (callback)=> {
//     let userName = prompt("Enter your name")
//     callback(userName)
// }

// getUserName(sayHello)

const countDown = () => {
    console.log("Ready?");
    let start = 0,  
    end = 0;
    for (let index = 5, count = 1; index >= 0; index--, count++) {
        start = new Date().getTime()
        setTimeout(()=>{
            end = new Date().getTime()
            console.log(index==0?'Go!':index);
            console.log(count);
            console.log(end-start, " ms");
        },count*1000)
    }
};

countDown ()
console.log('Steady');

let promise = new Promise(() => ());