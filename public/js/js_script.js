

//Document appendings - Ask for better formatting
/*let pFin = document.createElement("p");
let finText = document.createTextNode(finburgare.calories());
pFin.appendChild(finText);
document.body.appendChild(pFin);

let pHojd = document.createElement("p");
let hojdText = document.createTextNode(hojdaren.calories());
pHojd.appendChild(hojdText);
document.body.appendChild(pHojd);

let pKnaper = document.createElement("p");
let knaperText = document.createTextNode(knapertugg.calories());
pKnaper.appendChild(knaperText);
document.body.appendChild(pKnaper);

let pBarn = document.createElement("p");
let barnText = document.createTextNode(barnburgare.calories());
pBarn.appendChild(barnText);
document.body.appendChild(pBarn);

let pMini = document.createElement("p");
let miniText = document.createTextNode(minimalisten.calories());
pMini.appendChild(miniText);
document.body.appendChild(pMini);*/


// LOOPING VERSION OF ABOVE - CHANGED TO REPLACE DIVS IN HTML
/*let menu = [finburgare, hojdaren, knapertugg, barnburgare, minimalisten];

let hamburgerwrapper = document.getElementById("hamburgerwrapper");

//FIRST LOOP TO CREATE NAME DIVS
for (let burger of menu){
    let burgerName = document.createTextNode(burger.name);
    let burgerHeader = document.createElement("h3");
    burgerHeader.appendChild(burgerName);
    burgerHeader.classList.add("burgerName");

    
    let burgerImg = document.createElement("img");
    burgerImg.setAttribute("src", burger.image);
    burgerImg.classList.add("burgerImg");

    let burgerDesc =  burgerDescription(burger);
    
    let burgerDiv = document.createElement("div");
    burgerDiv.appendChild(burgerHeader);
    burgerDiv.appendChild(burgerImg);
    burgerDiv.appendChild(burgerDesc);

    hamburgerwrapper.appendChild(burgerDiv);
}


// FOR DESCRIPTION LIST DT-DD - FUNCTION
function burgerDescription(burger){
    let listDl = document.createElement("dl");

    let burgerAttributes = [burger.protein, burger.salad, burger.cheese, burger.allergenes, burger.kcal];
    let burgerTerms = ["Protein", "Sallad", "Ost", "Allergener", "Kcal"];

    let i = 0;
    for(let burgerTerm of burgerTerms){
	let listTerm = document.createElement("dt");
	let listDescription = document.createElement("dd");
	
	let term = document.createTextNode(burgerTerms[i]);
	listTerm.appendChild(term);
	
	let desc = document.createTextNode(burgerAttributes[i]);
	listDescription.appendChild(desc);

	//LINE TO SERCH FOR ALLERGENES
	if (i == 3){
	    findAllergenes(burger);
	    
	}
	
	listDl.appendChild(listTerm);
	listDl.appendChild(listDescription);

	i += 1;
    }

    return listDl;
}
*/

// FUNCTION TO FIND ALLERGY MENTIONS - TODO
function findAllergenes(burger){
    if( burger.allergenes.search("glutenfri") == -1 || burger.allergenes.search("laktosfri") == -1) {
	let allergyList = ["gluten", "laktos"];
	let i = 0;
	
	for(let allergy of allergyList){	    
	    let allergyIndex = burger.allergenes.search(allergy);
	    if(allergyIndex != -1){
		let spanElement = document.createElement("span");
		//let allergyStart = document.createTextNode(burger.allergenes[allergyIndex]);
		//MUST END AT CORRECT POINT. HOW?
		//burger
		
		//spanElement.appendChild(allergyStart);
		spanElement.classList.add("allergene");
		i += 1;
	    }
	}
    }
}
