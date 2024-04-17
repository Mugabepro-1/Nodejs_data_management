async function notifyCustomer(){
    try{
        const customer = await getCustomer(1);
        console.log('Customer', customer)
        if(customer.isGold){
        const topmovies = await getTopMovies(customer);
        console.log('The top movies are', topmovies)
        const email = await sendEmail(customer.email, topmovies)
        console.log('Email sent to the user... ')
        }
    }
 catch(err){
    console.log('Error', err.message)
 }
}
notifyCustomer()


function getCustomer(id){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve({
                id:1,
                name:'MUGABE INEZA Promesse',
                isGold:true,
                email:'email'
            })
        }, 2000);
    })
}

function getTopMovies(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(['movie1, movie2'])
        }, 2000);
    })
}

function sendEmail(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
           resolve() 
        }, 2000);
    })
}


































console.log("Before")
//Callbacks based


// getUser(1,(user)=>{
//     getRepositories(user.gitHubUsername, (repos)=>{
//        getCommits(repos[0],(commits)=>{
//         console.log(commits)
//        } )
//     })
// })

//Promise based

// getUser(1)
//   .then(user => getRepositories(user.gitHubUsername))
//     .then(repos => getCommits(repos[1]))
//       .then(commits => console.log('Commits:' ,commits))
//         .catch(err =>console.log('error:', err.message))

//Async and await based

async function displayCommits(){
    try{
        const user = await getUser(1);
        const repos = await getRepositories(user.gitHubUsername);
        const Commits = await getCommits(repos[0])
        console.log(Commits)
    }
 catch(err){
    console.log('Error', err.message)
 }
}
displayCommits()

function getUser(id){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Reading The user From the db...")
            resolve({id:id, gitHubUsername:'Promesse'})
        }, 2000) 
    })  
}

function getRepositories(username){

    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log('Getting repos from the db...')
            resolve(['repo1','repo2','repo3'])
        }, 2000);
    })
    
}

function getCommits(repo){
   return new Promise((resolve, reject)=>{
    setTimeout(() => {
        console.log('Getting commits from the db...')
        resolve(['commit1'])
    }, 2000);
   })
}
