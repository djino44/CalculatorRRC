"use strict";
var execute = function(pAction, pTarget, pParams){
		pAction.apply(pTarget, pParams);
	};

var methodPourCalculer = function(event){
	var formule =  getBean("plugins").$("formule")[0];
	var resultEcran =  getBean("plugins").$("resultat")[0];
	var bool1 = false;
	var content = event.target.innerText;

	params = [];
	params.push(resultEcran);
	params.push(operateur);
	params.push(bool1);


	if (content != "=" && content != "Memory") {
		formule.textContent += content;
		calcul["concat"] = formule.textContent;
	}
		switch(content){
			case "Memory":
					var oldCalc = getBean("services").read();
					formule.textContent = oldCalc["concat"];
					resultEcran.textContent = oldCalc["valeurPrec"];
				break;
			case "C":
					formule.innerHTML = "";
					resultEcran.innerHTML = "";
					operateur = "";
					calcul = new getBean("pojo").Calcul();
					//getBean("services").delete1(calcul);
				break;
			case "+":
			case "-":
			case "/":
			case "*":
					operateur = content;
					getBean("controller").execute(getBean("services").operation, calcul, params);
				break;
			case "=":
					params[2] = true;
					getBean("controller").execute(getBean("services").operation, calcul, params);
					calcul["valeurEnCours"] = calcul["valeurPrec"];
					calcul["valeurPrec"] = "";
				break;
			default:
				calcul["valeurEnCours"] += content;
				//calcul["concat"] = calcul["valeurPrec"] + operateur + calcul["valeurEnCours"];
				break;
		}
	};

controller("execute", execute);
controller("methodPourCalculer",methodPourCalculer);