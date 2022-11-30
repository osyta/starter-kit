sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    function (Controller) {
        "use strict";

        return Controller.extend("stk.StarterKit.controller.CreateCustomer", {
            onInit: function () {

            },
            onCreatePress: function (oEvent) {
                var sID = this.byId("CustomerID").getValue();
                var sName = this.byId("CustomerName").getValue();
                this.getView().getModel().create("/Customers", {
                    CustomerID: sID,
                    CompanyName: sName
                });
            }

        });
    });