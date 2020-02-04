const vm = new Vue ({

    el: '#content',
    data: {
	headerContent: 'Välj en burgare',
	finburgare: finburgare.calories(),
	hojdaren: hojdaren.calories(),
	knapertugg: knapertugg.calories(),
	barnburgare: barnburgare.calories(),
	minimalisten: minimalisten.calories()
    }

})
