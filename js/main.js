//@Author: Merliot Geoffrey//
var calcul = new (getBean("pojo").Calcul)();
var operateur = "";
var params = [];
var volatile = true;

getBean("events").bind("num", "click", "methodPourCalculer");
getBean("events").bind("op", "click", "methodPourCalculer");