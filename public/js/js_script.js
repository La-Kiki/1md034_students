
/*let orderButton = document.getElementById("orderButton");

orderButton.addEventListener("click", buttonClicked);

function buttonClicked() {
    console.log("Button clicked!");
    console.log(getFormAnswers);
}
*/
function getFormAnswers() {
    let fullName = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let streetName = document.getElementById("streetname").value;
    let houseNumber = document.getElementById("housenumber").value;
    let paymentChoice = document.getElementById("payment").value;
    let genderChoice = document.getElementById("genderButtons").value;

    let formAnswers = [fullName, email, streetName, houseNumber, paymentChoice, genderChoice];

    return formAnswers;
}

/*
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
/*
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
*/
