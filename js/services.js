var operation = function(resultEcran, operateur, bool1){
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
	};

var saveOrUpdate = function(calcul){
	
		getBean("repository").saveOrUpdate(calcul);
	};

var read = function(){
		return getBean("repository").read();
	};

var delete1 = function(calcul){
		getBean("repository").delete1(calcul);
	};

services("operation", operation);
services("saveOrUpdate", saveOrUpdate);
services("read", read);
services("delete", delete1);