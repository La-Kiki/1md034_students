'use strict';
const socket = io();

const vm = new Vue ({
    el: '#content',
    data: {
	orders: {},
	orderTarget: "T",
        order: {
            orderId: 0,
            details: {x: -20,
		      y: -20},
            orderItems: [],
	    customerInfo: "",
        },
        getNext: 0,

	menu: menuItems, //Imported from JSON
	burgerTerms: ["Protein", "Sallad", "Ost" , "Allergener", "Kcal"],
	burger: "",
	burgerAttributes: "",
	allergeneList: ["gluten", "Gluten", "laktos", "Laktos"],
	
	fullName: "", //Try loop of array instead to put in html v-for formresult
	eMail: "",
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

	    for(let allergene of this.allergeneList){
		allergeneHTML = allergeneHTML.replace(allergene, "<span class=\"allergene\"> "+allergene+"</span>");
	    }
	    return allergeneHTML;
	},

	getNextOrderId: function() {
	    /* This function returns the next available key (order number) in
	     * the orders object, it works under the assumptions that all keys
	     * are integers. */
            this.getNext += 1;
	    return this.getNext;
	},
	addOrder: function() {
	    /* When you click in the map, a click event object is sent as parameter
	     * to the function designated in v-on:click (i.e. this one).
	     * The click event object contains among other things different
	     * coordinates that we need when calculating where in the map the click
	     * actually happened. */
	    this.order.customerInfo = [this.fullName,
				       this.eMail,
				       this.paymentChoice,
				       this.genderChoice];
	    socket.emit('addOrder', this.order);

	},
	displayOrder: function(event){

	    let offset = {
		x: event.currentTarget.getBoundingClientRect().left,
		y: event.currentTarget.getBoundingClientRect().top,
	    };
	    this.order.orderId = this.getNextOrderId();
	    
	    this.order.details.x = event.clientX - 10 - offset.x;
	    this.order.details.y = event.clientY - 10 - offset.y;
	    
	    this.order.orderItems = this.hamburgerChoice;

	    // Dispatcher uppdateras inte om man väljer på karta innan kundinfo
	    // Kräver att man trycker på en punkt igen 
        },
    }

});

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
