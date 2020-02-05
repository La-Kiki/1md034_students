const vm = new Vue ({ 
    el: '#content',
    data: {
	menu: menuItems, //Imported from JSON
	headerContent: 'Välj en burgare',
	burgerTerms: ["Protein", "Sallad", "Ost" , "Allergener", "Kcal"],
	
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
	printTerm: function(){ console.log(this.burgerTerms)},
	getBurgerAttributes: function(burger){ return [burger.protein, burger.salad, burger.cheese, burger.allergenes, burger.kcal];},
	getFormSummary: function(){
	    this.isOrderButtonClicked = true;
	},
	
	//findAllergenes: function() {} - TODO
    },


})

    /*HTML-KOD - EXEMPEL

<h1> {{ headerContent }}</h1>

<p v-for="burger in menu"> {{ burger.calories() }} 
<span v-if="burger.allergenes.search('glutenfri') == -1 || burger.allergenes.search('laktosfri') == -1"> {{burger.allergenes}} </span> 
</p>

</div>

*/
