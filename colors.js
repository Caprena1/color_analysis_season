/* const winter = {
    hair: "black",
    hairtone: "warm",
    tan: "yes",
    palms: "peach",
    eyes: "deepbrown",
    jewelry: "gold",
    sunburn: "no",
    veins: "greenish",
    gemstone: "ruby",
    eyelashes: "black",
    inside_lip: "peachy",
    cheeks: "I don't blush, really",
    skintone: "warm"
}; */

/* const summer = {
    hair: "hair1",
    hairtone: "cool",
    tan: "no",
    palms: "pink",
    eyes: "lightblue",
    jewelry: "silver",
    sunburn: "yes",
    veins: "blue_purple",
    gemstone: "light_green_emerald",
    eyelashes: "lightblonde",
    inside_lip: "pinkish",
    cheeks: "rosypink",
    skintone: "cool"
};
  */

const obj = {
    hair1: false,
    hair2: false,
    hair3: false,

}
const button = document.getElementById('submitBtn')
const hair1= document.getElementById('hair1');
function changeHair() {
    hair1 ? console.log(true) : console.log(false);
 }
 button.addEventListener('click', changeHair)
/* button.onclick = function seasonResult() {
    const form = document.getElementById('form'); 
    const hair1= document.getElementById('hair1');
    const hair2 = document.getElementById('hair2');
    const hair3 = document.getElementById('hair3');  
 

    if(obj.hair1 === true) {
        alert("Your season is: SPRING");  
    } else if 
    (hair2.checked === true) {
        alert("Your season is: FALL");
    } else if 
    (hair3.checked === true) {
        alert("Your season is: WINTER");       
        
    } else
        alert("You season must be: SUMMER")
}  
   /*  if(form === winter) {
        alert("Your season is: WINTER")
    }  *//* else if (form === summer) {
        alert("Your season is: SUMMER")
    } */



