const vm = new Vue ({

    el: '#content',
    data: {
	headerContent: 'V�lj en burgare',
	finburgare: finburgare.calories(),
	hojdaren: hojdaren.calories(),
	knapertugg: knapertugg.calories(),
	barnburgare: barnburgare.calories(),
	minimalisten: minimalisten.calories()
    }

})
