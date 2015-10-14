"use strict";

var calculatriceSimpleService = (function(){
	var repository = getBean("repository");
	var moi = this;
	return{

		operation : function(resultEcran, operateur, bool1){
			if (this["valeurPrec"] != "") {
				this["valeurPrec"] = eval(parseInt(this["valeurPrec"]) + operateur + parseInt(this["valeurEnCours"]));
				resultEcran.innerHTML = this["valeurPrec"];
			} else {
				this["valeurPrec"] = this["valeurEnCours"];
			}

			this["valeurEnCours"] = "";

			if (bool1) {
				getBean("services").saveOrUpdate(calcul);
			}
		},

		saveOrUpdate : function(calcul){
		
			getBean("repository").saveOrUpdate(calcul);
		},

		read : function(){
			return getBean("repository").read();
		},

		delete1 : function(calcul){
			getBean("repository").delete1(calcul);
		}
	}
})();
services("calculatriceSimpleService", calculatriceSimpleService);
