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
        type!= null &&
        link !== "" &&
        name !== "" &&
        picLink !== "" &&
        type !== ""
        )

    {

        productId.push(productId.length)
        productPicLink.push(picLink)
        productName.push(name)
        productLink.push(link)
        productType.push(type)
        savePosts()
        
    }  
}

forcesButton.addEventListener("click", () => buildShoePage(1));
jordButton.addEventListener("click", () => buildShoePage(2));
vansButton.addEventListener("click", () => buildShoePage(3));
dunkButton.addEventListener("click", () => buildShoePage(4));
everythingButton.addEventListener("click", () => buildShoePage(5))
subNewShoe.addEventListener("click", () => addNewProduct(document.getElementById("shoeLink").value,document.getElementById("shoeName").value,document.getElementById("shoePic").value,document.getElementById("shoeType").value,))
//everythingButton.addEventListener("click", buildShoePage())

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
            //const _break = document.createElement("br")
    
            prodName.id = `header${i}`
    
    
            
    
            theProductScreen.appendChild(prodBox)
            prodBox.appendChild(imageInLink)
            prodBox.appendChild(prodName)
            prodBox.appendChild(prodLink)
            imageInLink.appendChild(image)
            
    
    
            prodBox.id = productId[i]
            imageInLink.href = productLink[i]
            image.src = productPicLink[i]
            prodName.innerText = productName[i]
            prodLink.innerText = "Buy it here"
            prodLink.href = productLink[i]  
        }
        else{
            continue; 
        }
        //hello github
    }
}
