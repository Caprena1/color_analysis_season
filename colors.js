//INPUTS
const submitButton = document.getElementById('submitBtn');
const hairBlonde = document.getElementById('hairblonde');
const hairAuburn = document.getElementById('hairauburn');
const hairBlack = document.getElementById('hairblack');  
const hairToneWarm = document.getElementById('hairwarm');  
const hairToneCool = document.getElementById('haircool');  
const tanYes = document.getElementById('tanyes');  
const tanNo = document.getElementById('tanno');  
const palmsPeach = document.getElementById('palmspeach');  
const palmsPink = document.getElementById('palmspink');  
const eyesHazel = document.getElementById('hazel');  
const eyesLightblue = document.getElementById('lightblue');  
const eyesDarkgreen = document.getElementById('darkgreen');  
const eyesDeepbrown = document.getElementById('deepbrown');  
const jewelryGold = document.getElementById('gold');
const jewelrySilver = document.getElementById('silver');
const sunburnYes = document.getElementById('sunburnyes');
const sunburnNo = document.getElementById('sunburnno');
const veinsGreen = document.getElementById('greenish');
const veinsBluePurple = document.getElementById('blue_purple');
const gemstoneEmerald = document.getElementById('light_green_emerald');
const gemstoneTopaz = document.getElementById('blue_topaz');
const gemstoneRuby = document.getElementById('ruby');
const gemstoneSapphire = document.getElementById('sapphire');
const lashesBlonde = document.getElementById('lightblonde');
const lashesLbrown = document.getElementById('lightbrown');
const lashesDbrown = document.getElementById('darkbrown');
const lashesBlack = document.getElementById('lashesblack');
const lipPeachy = document.getElementById('lippeachy');
const lipPink = document.getElementById('pinkish');
const cheekPeach = document.getElementById('peach');
const cheekPink = document.getElementById('rosypink');
const cheekNoColor = document.getElementById('nocolor')
const skintoneWarm = document.getElementById('skinwarm');
const skintoneCool = document.getElementById('skincool');
const form = document.getElementById('form');
//hamburger
/* const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")
 */


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
 palmsPeach.addEventListener('change', (e) => handleChange(e, 'palms'));
 palmsPink.addEventListener('change', (e) => handleChange(e, 'palms'));
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
    const name = document.getElementById('name').value
    if (
      quizResult.hair === 'hairblonde' &&
      quizResult.hairtone === 'haircool' &&
      quizResult.tan === 'tanno' &&
      quizResult.palms === 'palmspink' &&
      quizResult.eyes === 'lightblue' &&
      quizResult.jewelry === 'silver' &&
      quizResult.sunburn === 'sunburnyes' &&
      quizResult.veins === 'blue_purple' &&
      quizResult.gemstone === 'light_green_emerald' || 'blue topaz' &&
      quizResult.eyelashes === 'lightblonde' &&
      quizResult.inside_lip === 'pinkish' &&
      quizResult.cheeks === 'rosypink' &&
      quizResult.skintone === 'skincool' 
    ) {
      if(window.confirm(`Hello ${name}! You are a SUMMER. Pastels look great on you!🌸`)) {
        form.reset();
      };
      } else if (
      quizResult.hair === 'hairauburn' &&
      quizResult.hairtone === 'hairwarm' &&
      quizResult.tan === 'tanyes' &&
      quizResult.palms === 'palmspink' &&
      quizResult.eyes === 'darkgreen' &&
      quizResult.jewelry === 'gold' &&
      quizResult.sunburn === 'sunburnyes' &&
      quizResult.veins === 'greenish' &&
      quizResult.gemstone === 'sapphire' || 'ruby' &&
      quizResult.eyelashes === 'lightbrown' || 'dark brown' &&
      quizResult.inside_lip === 'pinkish' &&
      quizResult.cheeks === 'rosypink' &&
      quizResult.skintone === 'skinwarm' 
    ) {
      if(window.confirm(`Hello, ${name}! You are an AUTUMN. Fall and Earthtone colors look great on you!`)) {
        form.reset();
      };
    } else if (
      quizResult.hair === 'hairauburn' &&
      quizResult.hairtone === 'hairwarm' &&
      quizResult.tan === 'tanyes' &&
      quizResult.palms === 'palmspeach' &&
      quizResult.eyes === 'lightblue' &&
      quizResult.jewelry === 'gold' &&
      quizResult.sunburn === 'sunburnyes' &&
      quizResult.veins === 'greenish' &&
      quizResult.gemstone === 'blue_topaz' &&
      quizResult.eyelashes === 'lightbrown' &&
      quizResult.inside_lip === 'pinkish' &&
      quizResult.cheeks === 'rosypink' &&
      quizResult.skintone === 'skincool' 
    ) {
      if(window.confirm(`Hello, ${name}! You are a SPRING. Your wardrobe should be full of warm and bright colors.`)) {
        form.reset();
      };
    } else if (
      quizResult.hair === 'hairblack' &&
      quizResult.hairtone === 'haircool' &&
      quizResult.tan === 'tanyes' &&
      quizResult.palms === 'palmspeach' &&
      quizResult.eyes === 'deepbrown' &&
      quizResult.jewelry === 'gold' &&
      quizResult.sunburn === 'sunburnno' &&
      quizResult.veins === 'greenish' &&
      quizResult.gemstone === 'ruby' &&
      quizResult.eyelashes === 'lashesblack' &&
      quizResult.inside_lip === 'pinkish' &&
      quizResult.cheeks === 'rosypink' &&
      quizResult.skintone === 'skincool' 
     )  {
        if(window.confirm(`Hello, ${name}! You are a WINTER! You look great in bright, bold, jewel-tone colors.🟣 🔵 🔴 🟢`)) {
            form.reset();
        };
    } else {
        if(window.confirm("Your season is inconclusive-try again.")) {
            form.reset();
        }
    }
  };

  submitButton.addEventListener('click', checkAnswers)
  
  /* hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  })

  document.querySelector(".nav-link").forEach(n => 
    n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    })) */
  



  







