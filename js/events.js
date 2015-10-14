com.ibm.calculatrice.events = {
	bind : function(selector, events, callback){ 
    var selectTab = getBean("plugins").$(selector);

    for (var i = selectTab.length - 1; i >= 0; i--) {
        selectTab[i].addEventListener(events, getBean("controller")[callback], false)
    	}
	}
}