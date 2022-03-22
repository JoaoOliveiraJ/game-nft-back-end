const serverUrl = "https://mmwi2xjec6ny.usemoralis.com:2053/server";
const appId = "paEtRjurIT8dDOA3FvpVGRSIlyPRHgK7eB9gqRgD";
Moralis.start({ serverUrl, appId });


let user = Moralis.User.current();

async function showUser () {
    let reciveLogin = await fetch('http://localhost:3000/user' + '/' +user.get("ethAddress"))

    let dataLogin   = await reciveLogin.json()

    let addressFront = document.getElementById('address')
    
    addressFront.innerHTML = dataLogin.showUserDB[0].address
   
}

showUser()

async function addPoints ()
{
    
}