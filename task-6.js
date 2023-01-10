console.log("person 1 shows the ticket")
console.log("person 2 shows the ticket")


const wifeBringsTickets=new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve(`ticket`)
    }, 3000);
})
const getPopcorn=wifeBringsTickets.then((t) => {
    console.log(`husband :we should go`)
    console.log(`wife :iam hungry`)
    return new Promise((resolve,reject) => resolve(`${t} popcorn`))
})

const getButter=getPopcorn.then((t) => {
    console.log(`husband :here is the popcorn`)
    console.log(`wife :i want butter`)
    return new Promise((resolve,reject) => resolve(`${t}butter`))
})
getButter.then((t) =>{
    console.log(`person 3 shows the ${t}`)

})

console.log("person 4 shows the ticket")
console.log("person 5 shows the ticket")