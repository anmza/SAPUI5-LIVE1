sap.ui.define([

    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
/**
 * 
 * @param {typeof sap.ui.core.mvc.Controller} Controller 
 * @param {typeof sap.ui.core.Fragment} Fragment 
 */

function(Controller, MessageToast) {
    'use strict';
    return Controller.extend("invoices.controller.HelloPanel",{

        showHello: function(){

            let oBundle =  this.getView().getModel("i18n").getResourceBundle();
            let sMessage = this.getView().getModel().getProperty("/recipient/name");

            MessageToast.show(oBundle.getText("helloMsg",[sMessage]));
        },

        onOpenDialog: function(){
            this.getOwnerComponent().onOpenHelloDialog()
        },

        onOpenPrueba: function(){

            this.getOwnerComponent().onOpenPrueba()
        
        }

        
    });
});