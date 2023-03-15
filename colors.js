//INPUTS
const submitButton = document.getElementById('submitBtn');
const hairBlonde = document.getElementById('blonde');
const hairAuburn = document.getElementById('auburn');
const hairBlack = document.getElementById('black');  
const hairToneWarm = document.getElementById('warm');  
const hairToneCool = document.getElementById('cool');  
const tanYes = document.getElementById('yes');  
const tanNo = document.getElementById('no');  
const palmsPeach = document.getElementById('peach');  
const palmsPink = document.getElementById('pink');  
const eyesHazel = document.getElementById('hazel');  
const eyesLightblue = document.getElementById('lightblue');  
const eyesDarkgreen = document.getElementById('darkgreen');  
const eyesDeepbrown = document.getElementById('deepbrown');  
const jewelryGold = document.getElementById('gold')
const jewelrySilver = document.getElementById('silver')
const sunburnYes = document.getElementById('yes')
const sunburnNo = document.getElementById('no')
const veinsGreen = document.getElementById('greenish')
const veinsBluePurple = document.getElementById('blue_purple')
const gemstoneEmerald = document.getElementById('light_green_emerald')
const gemstoneTopaz = document.getElementById('blue_topaz')
const gemstoneRuby = document.getElementById('ruby')
const gemstoneSapphire = document.getElementById('sapphire')
const lashesBlonde = document.getElementById('lightblonde')
const lashesLbrown = document.getElementById('lightbrown')
const lashesDbrown = document.getElementById('darkbrown')
const lashesBlack = document.getElementById('black')
const lipPeachy = document.getElementById('peachy')
const lipPink = document.getElementById('peach')
const cheekPeach = document.getElementById('pinkish')
const cheekPink = document.getElementById('rosypink')
const cheekNoColor = document.getElementById('nocolor')
const skintoneWarm = document.getElementById('warm')
const skintoneCool = document.getElementById('cool')


const quizResult = {
    hair: "",
    hairtone: "",
    tan: "",
    palms: "",
    eyes: "",
    jewelry: "",
    sunburn: "",
    veins: "",
    gemstone: "",
    eyelashes: "",
    inside_lip: "",
    cheeks: "",
    skintone: ""
}; 


function handleChange(e, boxChecked) {
    console.log(e.target.value)
    if(boxChecked === 'hair') {
        quizResult['hair'] = e.target.value;
        console.log(quizResult);  
    } else if(boxChecked === 'hairtone') {
        quizResult['hairtone'] = e.target.value;
        console.log(quizResult);  
    } else if(boxChecked === 'tan') {
        quizResult['tan'] = e.target.value;
        console.log(quizResult);  
    } else if(boxChecked === 'palms') {
        quizResult['palms'] = e.target.value;
        console.log(quizResult);  
    } else if(boxChecked === 'eyes') {
        quizResult['eyes'] = e.target.value;
        console.log(quizResult);  
    } else if(boxChecked === 'jewelry') {
        quizResult['jewelry'] = e.target.value;
        console.log(quizResult);  
    } else if(boxChecked === 'sunburn') {
        quizResult['sunburn'] = e.target.value;
        console.log(quizResult);  
    } else if(boxChecked === 'hair_tone') {
        quizResult['hair_tone'] = e.target.value;
        console.log(quizResult);  
    } else if(boxChecked === 'veins') {
        quizResult['veins'] = e.target.value;
        console.log(quizResult);  
    } else if(boxChecked === 'gemstone') {
        quizResult['gemstone'] = e.target.value;
        console.log(quizResult);  
    } else if(boxChecked === 'eyelashes') {
        quizResult['eyelashes'] = e.target.value;
        console.log(quizResult);  
    } else if(boxChecked === 'inside_lip') {
        quizResult['inside_lip'] = e.target.value;
        console.log(quizResult);  
    } else if(boxChecked === 'cheeks') {
        quizResult['cheeks'] = e.target.value;
        console.log(quizResult);  
    } else if(boxChecked === 'skintone') {
        quizResult['skintone'] = e.target.value;
        console.log(quizResult);  
    }
    
}  
   
 //EVENTLISTENERS
 hairBlonde.addEventListener('change', (e) => handleChange(e, 'hair'));
 hairAuburn.addEventListener('change', (e) => handleChange(e, 'hair')); 
 hairBlack.addEventListener('change', (e) => handleChange(e, 'hair'));  
 hairToneWarm.addEventListener('change', (e) => handleChange(e, 'hairtone'));
 hairToneCool.addEventListener('change', (e) => handleChange(e, 'hairtone'));  
 tanYes.addEventListener('change', (e) => handleChange(e, 'tan'));
 tanNo.addEventListener('change', (e) => handleChange(e, 'tan'));
 palmsPeach.addEventListener('change', (e) => handleChange(e, 'palm'));
 palmsPink.addEventListener('change', (e) => handleChange(e, 'palm'));
 eyesHazel.addEventListener('change', (e) => handleChange(e, 'eyes'));
 eyesLightblue.addEventListener('change', (e) => handleChange(e, 'eyes'));
 eyesDarkgreen.addEventListener('change', (e) => handleChange(e, 'eyes')); 
 eyesDeepbrown.addEventListener('change', (e) => handleChange(e, 'eyes'));
 jewelryGold.addEventListener('change', (e) => handleChange(e, 'jewelry'));
 jewelrySilver.addEventListener('change', (e) => handleChange(e, 'jewelry'));
 sunburnYes.addEventListener('change', (e) => handleChange(e, 'sunburn'));
 sunburnNo.addEventListener('change', (e) => handleChange(e, 'sunburn'));
 veinsGreen.addEventListener('change', (e) => handleChange(e, 'veins'));
 veinsBluePurple.addEventListener('change', (e) => handleChange(e, 'veins'));
 gemstoneEmerald.addEventListener('change', (e) => handleChange(e, 'gemstone'));
 gemstoneTopaz.addEventListener('change', (e) => handleChange(e, 'gemstone'));
 gemstoneRuby.addEventListener('change', (e) => handleChange(e, 'gemstone'));
 gemstoneSapphire.addEventListener('change', (e) => handleChange(e, 'gemstone'));
 lashesBlonde.addEventListener('change', (e) => handleChange(e, 'eyelashes'));
 lashesLbrown.addEventListener('change', (e) => handleChange(e, 'eyelashes'));
 lashesDbrown.addEventListener('change', (e) => handleChange(e, 'eyelashes'));
 lashesBlack.addEventListener('change', (e) => handleChange(e, 'eyelashes'));
 lipPeachy.addEventListener('change', (e) => handleChange(e, 'inside_lip'));
 lipPink.addEventListener('change', (e) => handleChange(e, 'inside_lip'));
 cheekPeach.addEventListener('change', (e) => handleChange(e, 'cheeks'));
 cheekPink.addEventListener('change', (e) => handleChange(e, 'cheeks'));
 cheekNoColor.addEventListener('change', (e) => handleChange(e, 'cheeks'));
 skintoneWarm.addEventListener('change', (e) => handleChange(e, 'skintone'));
 skintoneCool.addEventListener('change', (e) => handleChange(e, 'skintone'));

 //FUNCTION TO DETERMINE COLORS
 function checkAnswers() {
    if (
      quizResult.hair === 'hair1' &&
      quizResult.hairtone === 'warm' &&
      quizResult.tan === 'yes' &&
      quizResult.palms === 'yes' &&
      quizResult.eyes === 'yes' &&
      quizResult.jewelry === 'yes' &&
      quizResult.sunburn === 'yes' &&
      quizResult.veins === 'yes' &&
      quizResult.gemstone === 'yes' &&
      quizResult.eyelashes === 'yes' &&
      quizResult.inside_lip === 'yes' &&
      quizResult.cheeks === 'yes' &&
      quizResult.skintone === 'yes' 
    ); {
      alert('You are summer');
    }
  }
  







/* const obj = {
    hair1: false,
    hair2: false,
    hair3: false,

} */
/* const button = document.getElementById('submitBtn')
const hair1= document.getElementById('hair1');
function changeHair() {
    hair1 ? console.log(true) : console.log(false);
 }
 button.addEventListener('click', changeHair) */
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



