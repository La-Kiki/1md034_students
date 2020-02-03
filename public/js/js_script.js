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

let finburgare = new menuItem("Finburgare", "Finns med kyckling, jackfruit, eller n�t.", "Serveras med antingen isbergssallad, mach�sallad, eller romansallad.", "Monterey-infusionerad mozzarella eller cheddar.", "Inneh�ller gluten och laktos.", 300, "img/hamburgare_2019.png");

let hojdaren = new menuItem("H�jdaren", "Finns med tonfisk eller n�tk�tt.", "Serveras med antingen isbergssallad eller romansallad.", "Cheddar eller laktosfri cheddar.", "Kan inneh�lla laktos.", 350, "img/hamburger.png");

let knapertugg = new menuItem("Knapertugg", "N�tk�tt med antingen gris- eller kalkonbacon.", "Inget nyttigt h�r.", "Amerikansk cheddar eller laktosfri kanadensisk cheddar", "Br�det finns i glutenfri version.", 490, "img/BACON KING.PNG");

let barnburgare = new menuItem("Barnburgare", "Finns med antingen n�tk�tt eller kyckling", "Enkel isbergssallad", "Hush�llsost", "Finns i glutenfria och laktosfria varianter", 210, "img/ADD IMAGE");

let minimalisten = new menuItem("Minimalisten", "Finns i n�tk�tt", "Tomater eller isbergssallad eller utan", "Med eller utan cheddar", "Gluten och laktos kan tas bort", 190, "img/ ADD IMAGE!!");

console.log(finburgare.calories());
console.log(hojdaren.calories());
console.log(knapertugg.calories());
console.log(barnburgare.calories());
console.log(minimalisten.calories());
