sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/m/MessageToast'
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast) {
        "use strict";

        return Controller.extend("stk.starterkit.controller.CustomersList", {
            onInit: function () {

            },
            handleMessageToastPress: function (oEvent) {
                var msg = 'This app runs with mock data';
                MessageToast.show(msg);
            },
            onCustomerPress: function (oEvent) {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("CustomerDetails", {
                    CustomerID: oEvent.getSource().getBindingContext().getObject().CustomerID,
                });
            },
            onCreate: function (oEvent) {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("CreateCustomer", {})
            },
            onPerformance: function (oEvent) {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("EmployeePerformance", {})
            }

        });
    });
