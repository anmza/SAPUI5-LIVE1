sap.ui.define([
    "sap/ui/core/UIComponent",
    "invoices/model/Model",
    "invoices/controller/HelloDialog",
    "invoices/controller/HelloPrueba"
], function(UIComponent,
	Model,
	HelloDialog,
	HelloPrueba) {

    'use strict';
    
    return UIComponent.extend("invoices.Component",{

        metadata: {
            manifest: "json"
            
        },

        init: function(){
            UIComponent.prototype.init.apply(this, arguments);

            this.setModel(Model.createRecipient());

            // open Dialog

            this._helloDialog = new HelloDialog(this.getRootControl());
            this._helloPrueba = new HelloPrueba(this.getRootControl())
        },

        exit: function() {
            
            this._helloDialog.destroy();
            delete this._helloDialog();
            this._helloPrueba.destroy();
            delete this._helloPrueba()
        },

        onOpenHelloDialog: function(){

            this._helloDialog.open();
        },

        onOpenPrueba: function(){

            this._helloPrueba.open();
        }
    });
});