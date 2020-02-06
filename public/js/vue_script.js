const vm = new Vue ({ 
    el: '#content',
    data: {
	menu: menuItems, //Imported from JSON
	burgerTerms: ["Protein", "Sallad", "Ost" , "Allergener", "Kcal"],
	burger: "",
	burgerAttributes: "",
	allergeneList: ["gluten", "Gluten", "laktos", "Laktos"],
	
	fullName: "",
	eMail: "",
	streetName: "",
	houseNumber: "",
	paymentChoice: "",
	genderChoice: "",
	hamburgerChoice: [],

	isOrderButtonClicked: false
    },
    
    methods:{
	printTerm: function(){
	    console.log(this.burgerTerms);
	},
	getBurgerAttributes: function(burger){
	    this.burger = burger;
	    this.burgerAttributes = [burger.protein, burger.salad, burger.cheese, burger.allergenes, burger.kcal];
	    
	    return this.burgerAttributes;
	},
	getFormSummary: function(){
	    this.isOrderButtonClicked = true;
	},
	addAllergeneClass: function(index){
	    let allergeneHTML= this.burgerAttributes[index];
	    
	    for(allergene of this.allergeneList){
		allergeneHTML = allergeneHTML.replace(allergene, "<span class=\"allergene\"> "+allergene+"</span>");
	    }
	    return allergeneHTML;
	}
    }
})

/*	findAllergenes: function(burger, burgerTerm){
	    let allergeneList = ["gluten", "laktos"];
	    if(burgerTerm == "Allergener"){
		for(allergene of allergeneList){
		    let listDescription = document.getElementById(burger.variableName+burgerTerm);
		    listDescription.innerHTML.replace(allergene, "<span class='allergene'> "+allergene+"</span>");
		}
	    }
	    }*/

    /*HTML-KOD - EXEMPEL

<h1> {{ headerContent }}</h1>

<p v-for="burger in menu"> {{ burger.calories() }} 
<span v-if="burger.allergenes.search('glutenfri') == -1 || burger.allergenes.search('laktosfri') == -1"> {{burger.allergenes}} </span> 
</p>

</div>

*/
