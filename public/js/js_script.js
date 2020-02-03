class menuItem {

    constructor(name, protein, salad, cheese, allergenes, kcal, image) {

        this.name = name;
        this.protein = protein;
        this.salad = salad;
        this.cheese = cheese;
        this.allergenes = allergenes;
        this.kcal = kcal;

        this.image = image;
    }

    calories(){
        return "Name: " + this.name + "\n" + "Kcal: " + this.kcal;
    }
    
}

let finburgare = new menuItem("Finburgare", "Finns med kyckling, jackfruit, eller nöt.", "Serveras med antingen isbergssallad, machésallad, eller romansallad.", "Monterey-infusionerad mozzarella eller cheddar.", "Innehåller gluten och laktos.", 300, "img/hamburgare_2019.png");

let hojdaren = new menuItem("Höjdaren", "Finns med tonfisk eller nötkött.", "Serveras med antingen isbergssallad eller romansallad.", "Cheddar eller laktosfri cheddar.", "Kan innehålla laktos.", 350, "img/hamburger.png");

let knapertugg = new menuItem("Knapertugg", "Nötkött med antingen gris- eller kalkonbacon.", "Inget nyttigt här.", "Amerikansk cheddar eller laktosfri kanadensisk cheddar", "Brödet finns i glutenfri version.", 490, "img/BACON KING.PNG");

let barnburgare = new menuItem("Barnburgare", "Finns med antingen nötkött eller kyckling", "Enkel isbergssallad", "Hushållsost", "Finns i glutenfria och laktosfria varianter", 210, "img/ADD IMAGE");

let minimalisten = new menuItem("Minimalisten", "Finns i nötkött", "Tomater eller isbergssallad eller utan", "Med eller utan cheddar", "Gluten och laktos kan tas bort", 190, "img/ ADD IMAGE!!");


//Document appendings - Ask for better formatting
let pFin = document.createElement("p");
let finText = document.createTextNode("Finburgare");
pFin.appendChild(finText);
document.body.appendChild(pFin);

let pHojd = document.createElement("p");
let hojdText = document.createTextNode("Höjdaren");
pHojd.appendChild(hojdText);
document.body.appendChild(pHojd);

let pKnaper = document.createElement("p");
let knaperText = document.createTextNode("Knapertugg");
pKnaper.appendChild(knaperText);
document.body.appendChild(pKnaper);

let pBarn = document.createElement("p");
let barnText = document.createTextNode("Barnburgare");
pBarn.appendChild(barnText);
document.body.appendChild(pBarn);

let pMini = document.createElement("p");
let miniText = document.createTextNode("Minimalist");
pMini.appendChild(miniText);
  document.body.appendChild(pMini);


/*Fråga om dessa format är vad som menas

const vm = new Vue({
  el: '#myID',
  data: {
  burgerIntro: 'Välj en burgare',
    burgerNames: 'Finburgaren Höjdaren Knapertugg Barnburgare Minimalist'
  }
  })*/
