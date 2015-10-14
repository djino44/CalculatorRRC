"use strict";
com.ibm.calculatrice.pojo = {
	Calculatrice : function (pSize, pColor, pOperations){
	this.size = pSize;
	this.color = pColor;
	this.operations = pOperations;

	this.prototype.getSize = function(){
		return this.size;
		}
	},
		
	Operations : function(pNum1, pNum2, pOpe){
	this.num1 = pNum1;
	this.num2 = pNum2;
	this.ope = pOpe;

	this.prototype.getOperateur = function(){
		return this.ope;
		}
	},

	Calcul : function (){
	this.valeurPrec = "";
	this.valeurEnCours = "";
	this.concat = "";
	}
}