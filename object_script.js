const productId = [];
const productPicLink = [
    
];
const productLink = [
    
];
const productName = [];
const productType = [];

var jordButton = document.querySelector("#jordansButton")
var dunkButton = document.querySelector("#dunksButton")
var vansButton = document.querySelector("#vansButton")
var forcesButton = document.querySelector("#forcesButton")
var everythingButton = document.querySelector("#everythingButton")
var subNewShoe = document.querySelector("#submitNewShoe")
var openShoeAdder = document.getElementById("openShoeAdder")
var closeShoeAdder = document.getElementById("closeShoeAdder")
var shoeAdderWindow = document.getElementById("shoeAdd")

var shoeLinkInputField = document.getElementById("shoeLink")
var shoeNameInputField = document.getElementById("shoeName")
var shoePicLinkInputField = document.getElementById("shoePic")
var shoeTypeInputField = document.getElementById("shoeType")


function startGradient(target) {
    let startColor = "#ff0000"; // Change this to the starting color you want
    let endColor = "#000000"; // Change this to the ending color you want
    let duration = 2000; // Change this to the duration of the gradient in milliseconds
  
    let startTime = null;
    let step = function(timestamp) {
      if (!startTime) startTime = timestamp;
      let progress = timestamp - startTime;
      let percent = Math.min(progress / duration, 1);
      let color = interpolateColor(startColor, endColor, percent);
      target.style.borderColor = color; // Set the border color of the input element to the interpolated color
      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
  
  
  function interpolateColor(startColor, endColor, percent) {
    let r1 = parseInt(startColor.substring(1, 3), 16);
    let g1 = parseInt(startColor.substring(3, 5), 16);
    let b1 = parseInt(startColor.substring(5, 7), 16);
    let r2 = parseInt(endColor.substring(1, 3), 16);
    let g2 = parseInt(endColor.substring(3, 5), 16);
    let b2 = parseInt(endColor.substring(5, 7), 16);
    let r = Math.round(r1 + (r2 - r1) * percent);
    let g = Math.round(g1 + (g2 - g1) * percent);
    let b = Math.round(b1 + (b2 - b1) * percent);
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
  

//var everythingButton = document.querySelector("#everythingButton")

function fillArrays(){
    for (let i  = 0; i < localStorage.length/4; i++){
        if(productName[i] !== localStorage.getItem(i+ " name")){
            productId.push(i)
            productPicLink.push(localStorage.getItem(i + " picLink"))
            productName.push(localStorage.getItem(i+" name"))
            productType.push(localStorage.getItem(i+ " type"))
            productLink.push(localStorage.getItem(i+" link"))
        }
        
    }
}



var chosenType;

var theProductScreen = document.querySelector("#prodScreen")

function savePosts(){
    for (let i = 0; i< productId.length;i++){
        localStorage.setItem(productId[i]+" name",productName[i])
        localStorage.setItem(productId[i]+" type",productType[i])
        localStorage.setItem(productId[i]+" link",productLink[i])
        localStorage.setItem(productId[i]+" picLink",productPicLink[i])
    }
}

function lookFor(array, value){
    for(let i = 0; i < array.length; i++){
        if(array[i] == value){
            return 1
        }
    }
}

function addNewProduct(link, name, picLink,type){
    if(
        lookFor(productName, name)!=1 && 
        lookFor(productLink, link)!=1 && 
        lookFor(productPicLink, picLink)!=1 && 
        picLink!== null &&
        name!==null && 
        link !== null && 
        link !== "" &&
        name !== "" &&
        picLink !== "" &&
        type.value !== "0"
        )

    {

        productId.push(productId.length)
        productPicLink.push(picLink)
        productName.push(name)
        productLink.push(link)
        productType.push(type.value)
        savePosts()
        
    }  
    else{
        if (picLink == ""){
            startGradient(shoePicLinkInputField)
        }
        if (name == ""){
            startGradient(shoeNameInputField)
        }
        if (link == ""){
            startGradient(shoeLinkInputField)
        }
        if (type == "0"){
            startGradient(shoeTypeInputField)
        }
    }
}

forcesButton.addEventListener("click", () => buildShoePage(1));
jordButton.addEventListener("click", () => buildShoePage(2));
vansButton.addEventListener("click", () => buildShoePage(3));
dunkButton.addEventListener("click", () => buildShoePage(4));
everythingButton.addEventListener("click", () => buildShoePage(5))
subNewShoe.addEventListener("click", () => addNewProduct(document.getElementById("shoeLink").value,document.getElementById("shoeName").value,document.getElementById("shoePic").value,document.getElementById("shoeType").value,))
openShoeAdder.addEventListener("click", () => openShoeAdderWindow())
closeShoeAdder.addEventListener("click", () => closeShoeAdderWindow())
//everythingButton.addEventListener("click", buildShoePage())


function closeShoeAdderWindow(){
    console.log("Window should be closed")
    shoeAdderWindow.style.display = "none";
    openShoeAdder.style.display = "block"; 
}
function openShoeAdderWindow(){
    console.log("Window should be opened")
    shoeAdderWindow.style.display = "block";
    openShoeAdder.style.display = "none"; 
}

function removePreviousElements(){
    while(theProductScreen.firstChild){
        theProductScreen.removeChild(theProductScreen.firstChild)
    }
    
}

function buildShoePage(acceptableType){    
    removePreviousElements();
    fillArrays();
    console.log("obamna")
    
    for(let i = 0; i < productId.length; i++){
        if (productType[i] == acceptableType || acceptableType == 5){
            let prodBox = document.createElement("section")
            let imageInLink = document.createElement("a")
            let image = document.createElement("img")
            let prodName = document.createElement("h3")        
            let prodLink = document.createElement("a")
            let imageContainer = document.createElement("div")
            //const _break = document.createElement("br")
    
            prodName.id = `header${i}`
    
    
            
    
            theProductScreen.appendChild(prodBox)
            prodBox.appendChild(imageInLink)
            prodBox.appendChild(prodName)
            prodBox.appendChild(prodLink)
            imageInLink.appendChild(imageContainer)
            imageContainer.appendChild(image)
            
    
            prodBox.style.padding = "10px 10px 10px 10px"
            prodBox.id = productId[i]
            imageInLink.href = productLink[i]
            image.src = productPicLink[i]
            prodName.innerText = productName[i]
            prodLink.innerText = "Buy it here"
            prodLink.href = productLink[i]  
            imageContainer.style.textAlign = "center"
        }
        else{
            continue; 
        }
        //hello github
    }
}
