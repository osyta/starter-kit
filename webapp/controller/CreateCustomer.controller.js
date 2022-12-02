sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History"
],
    function (Controller, History) {
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
            },

            onNavBack: function () {
                var oHistory, sPreviousHash;

                oHistory = History.getInstance();
                sPreviousHash = oHistory.getPreviousHash();

                if (sPreviousHash !== undefined) {
                    window.history.go(-1);
                } else {
                    this.getRouter().navTo("appHome", {}, true /*no history*/);
                }
            }

        });
    });