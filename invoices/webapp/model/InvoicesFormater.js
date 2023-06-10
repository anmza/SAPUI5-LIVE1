sap.ui.define([
	
], function() {


    let oFormater = {

		invoicesStatus: function(sStatus){

			let oResourceBundle = this.getView().getModel("i18n").getResourceBundle();

			switch (sStatus) {
				case "A": return oResourceBundle.getText("invoiceStatusA");
				case "B": return oResourceBundle.getText("invoiceStatusB");
				case "C": return oResourceBundle.getText("invoiceStatusC")
			
			}
		}
	};
	return oFormater;
});