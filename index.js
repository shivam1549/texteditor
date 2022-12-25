let optionsButtons = document.querySelectorAll('.option-button');
let advancedOptionbuttons = document.querySelectorAll('.adv-option-button');
let fontname = document.getElementById("fontname");
let fontsizeRef = document.getElementById("fontsize");
let writingarea = document.getElementById("text-input");
let linkButton = document.getElementById("createLink");
const alignButtons = document.querySelectorAll(".align");
const spacingButtons = document.querySelectorAll(".spacing");
const formatButtons = document.querySelectorAll(".format");
const scriptButtons = document.querySelectorAll(".script");

let fontList = ["Arial", "Verdana", "Times New Roman", "Garamond", "Georgia", "Courier New", "cursive",];

const initializer = () => {


    fontList.map((value)=>{
        let option = document.createElement("option");
        option.value= value;
        option.innerHTML = value;
        fontname.appendChild(option);
    })
    for(let i = 1; i<=7; i++){
        let option = document.createElement("option");
        option.value= i;
        option.innerHTML = i;
        fontsizeRef.appendChild(option);
    }

    fontsizeRef.value = 3;
};

// Main logic here

const modifyText = (command, defaultUi, value) => {
    // execCommand executes command on selected text
    document.execCommand(command, defaultUi, value);
}

optionsButtons.forEach((button) =>{
    button.addEventListener("click", () =>{
        modifyText(button.id, false, null);
    });
});
// For colors and fonts
advancedOptionbuttons.forEach((button) =>{
    button.addEventListener("change", () =>{
        modifyText(button.id, false, button.value);
    });
});

linkButton.addEventListener("click", () => {
    let userLink = prompt("Enter a url");
    // if link has http then pass directoly else add https
    if(/http/i.test(userLink)){
        modifyText(linkButton.id, false, userLink);
    }
    else{
        userLink = "https://" + userLink;
        modifyText(linkButton.id, false, userLink);
    }
})



const highlighterRemover = (className) => {
    className.forEach((button)=>{
        button.classList.remove("active");
    })
}

let alloptions = document.getElementsByClassName("option-button");
for(let i= 0; i < alloptions.length; i++){

alloptions[i].addEventListener("click", function(){
    
    this.classList.toggle("active");
   
});
}

window.onload = initializer();

