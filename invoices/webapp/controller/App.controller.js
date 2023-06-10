sap.ui.define([

    "sap/ui/core/mvc/Controller",
    
],
/**
 * 
 * @param {typeof sap.ui.core.mvc.Controller} Controller 
 */

function(Controller) {
    'use strict';
    return Controller.extend("invoices.controller.App",{

        onInit: function(){
           
        },

        onOpenDialogHeader: function(){

            this.getOwnerComponent().onOpenHelloDialog()
        }

        
    });
});