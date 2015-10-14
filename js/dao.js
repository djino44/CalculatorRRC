"use strict";
var saveOrUpdate = function(calcul){
		getBean("plugins").storage().setItem("calcul", JSON.stringify(calcul));
	};

var read = function(){
		return JSON.parse(getBean("plugins").storage().getItem("calcul"));
	};

var delete1 = function(calcul){
		getBean("plugins").storage().removeItem("calcul", JSON.stringify(calcul));
	};

repository("saveOrUpdate",saveOrUpdate);
repository("read",read);
repository("delete",delete1);