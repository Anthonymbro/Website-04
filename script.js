
alert("Welcome to Darth Dudes");
 
function purpose() {
    let why = prompt("What are you here for?:");
    if (why ==null || why ==""){
    txt="No name provided. Only a Sith...";
    prompt("Try not. Do.")
} else {
    txt= (`${why} eh? That is a great reason to be here!`);
}

alert(txt)
}
purpose();
 

let name = prompt("What is your name? ");
if (name ==null || name ==""){
    txt="No name provided. Only a Sith...";
    prompt("Try not. Do")
} else {
    txt= (`Welcome ${name}!`);
}

alert(txt);
function checker(){
        let result = confirm("Are you sure?");
        if (result ==false) {
            event.preventDefault();
            alert("Only a Sith...")
        }
    }
