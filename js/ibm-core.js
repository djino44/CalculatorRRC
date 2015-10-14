function getBean(param){
	if(param == 'repository') param='dao';
	if (com.ibm.calculatrice[param] == undefined) {
		com.ibm.calculatrice[param] = {};
	}
	return com.ibm.calculatrice[param];
}

var services = function(id,impl){
	getBean("services")[id] = impl;
}

var controller = function(id, impl){
	getBean("controller")[id] = impl;
}

var repository = function(id, impl){
	getBean("dao")[id] = impl;
}

var component = function(id, impl){
	getBean("component")[id] = impl;
}