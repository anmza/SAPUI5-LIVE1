sap.ui.define([
	"../localService/mockServer",
	"sap/m/MessageBox"
], function(
	mockServer,
	MessageBox,
	
) {
	"use strict";

	var aMockServer =[]

	aMockServer.push(mockServer.init());

	Promise.all(aMockServer).catch(function(oError){
		MessageBox.error(oError.message);
	}).finally(function(){

		sap.ui.require(["sap/ui/core/ComponentSupport"])
	});
});