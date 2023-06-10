sap.ui.define([
	"sap/ui/base/ManagedObject",
	"sap/ui/core/Fragment"
], function(
	ManagedObject,
	Fragment
) {
	"use strict";

	return ManagedObject.extend("invoices.controller.HelloPrueba", {

		
		constructor: function(oView) {
		
			this._oView = oView;
		
		},
		exit: function(){

			delete this._oView;
		},
		open: function(){

			let oView = this._oView;

			let oFragmentController = {

				onClosePrueba: function(){

					oView.byId("helloPrueba").close();
				}
			};

			if(!this._pPrueba){

				this._pPrueba = Fragment.load({

					id: oView.getId(),
					name: "invoices.fragment.prueba",
					controller: oFragmentController
				})
			}

			this._pPrueba.then(function(oPrueba){

				oView.addDependent(oPrueba);
				oPrueba.open();
			})

		}
	});
});