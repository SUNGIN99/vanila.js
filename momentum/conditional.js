const age = parseInt(prompt("how old are you?"));

if (isNaN(age)){
    console.log("put in an age of Number");
}

else {
    if( age >= 20)
        console.log("You are Adult");
    else
        console.log("You are Young Age");
}
