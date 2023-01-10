console.log("person 1 shows the ticket");
console.log("person 2 shows the ticket");

const preMovie = async () => {
  const wifeBringsTickets = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`ticket`);
    }, 3000);
  });

  const getPopcorn= new Promise((resolve,reject) => resolve(` popcorn`))

  const getButter=new Promise((resolve,reject) => resolve(`butter`))

  const getcoldDrink=new Promise((resolve,reject) => resolve(`Coke`))

  let ticket = await wifeBringsTickets
    console.log(`husband :we should go`)
    console.log(`wife :iam hungry`)
    let popcorn = await getPopcorn
    console.log(`husband :here is the ${popcorn}`)
    console.log(`wife :i want butter`)
    let Butter = await getButter   
    console.log(`husband :here is the ${Butter}`)
    console.log(`wife :i want coldDrink`)

    let coldDrink = await getcoldDrink
 console.log(`husband :here is the ${coldDrink}`)
 
    return ticket
};
 
preMovie().then((t) => console.log(`person 3 shows the ${t}`))

console.log("person 4 shows the ticket");
console.log("person 5 shows the ticket");
