sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/ui/model/json/JSONModel',
    'sap/ui/core/routing/History'
],
    function (Controller, JSONModel, History) {
        "use strict";

        return Controller.extend("stk.StarterKit.controller.EmployeePerformance", {
            onInit: function () {
            },
            onMotivate: function (oEvent) {
                var oEmployee = oEvent.getSource().getBindingContext().getObject();
                var sEmail = oEmployee.FirstName + "." + oEmployee.LastName + "@company.com";
                var sSubject = "Good job!";
                var sBody = "You are doing well, thank you!";
                sap.m.URLHelper.triggerEmail(sEmail, sSubject, sBody);
            },
            onFire: function (oEvent) {
                var oEmployee = oEvent.getSource().getBindingContext().getObject();
                var sEmail = oEmployee.FirstName + "." + oEmployee.LastName + "@company.com";
                var sSubject = "Horrible job!";
                $.ajax({
                    url: "/generate_insult.php",
                    data: {
                        lang: "en",
                        type: "json"
                    },
                    success: function (oResponse) {
                        var sBody = oResponse.insult;
                        sap.m.URLHelper.triggerEmail(sEmail, sSubject, sBody);
                    }
                })
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
