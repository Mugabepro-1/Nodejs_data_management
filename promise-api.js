const p1 = new Promise((resolve)=>{
    setTimeout(() => {
        console.log('Solving the 1...')
        resolve(('1'))
    }, 2000);
})

const p2 = new Promise((resolve)=>{
    setTimeout(() => {
        console.log('Solving the 2...')
        resolve(('2'))
    }, 2000);
})

Promise.all([p1,p2])//here if we use the .race method the last promise will return only the first executed promise.
.then(result => console.log(result))