//@Author: Merliot Geoffrey//
var com = {
	ibm: {
		calculatrice: {

		}
	}
}

com.ibm.calculatrice.plugins = {
	$ : function(selector){
    return document.querySelectorAll(selector);
	},

	storage : function(){
		if (volatile) {
			return sessionStorage;
		} else {
			return localStorage;
		}
	}
}