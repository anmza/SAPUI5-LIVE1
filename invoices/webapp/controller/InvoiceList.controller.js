sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "invoices/model/InvoicesFormater",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function (
    Controller,
    JSONModel,
    InvoicesFormater,
    Filter,
    FilterOperator
) {
    "use strict";

    return Controller.extend("invoices.controller.InvoiceList", {

        formater: InvoicesFormater,

        onInit: function () {

            let oViewModel = new JSONModel({

                usd: "USD",
                eur: "EUR"
            });
            this.getView().setModel(oViewModel, "currency");

        },

        onFilter: function (oEvent) {

            let sValue = oEvent.getParameter("newValue")
            let aFilter = [];

            if (sValue) {

                aFilter.push(new Filter({

                    filters:[

                        new Filter("ProductName", FilterOperator.Contains, sValue),
                        new Filter("ShipperName", FilterOperator.Contains, sValue)
                    ],
                    and: false
                }));
            }

            let oList = this.getView().byId("invoicesList");
            let oBinding = oList.getBinding("items");

            oBinding.filter(aFilter);


        }
    });
});