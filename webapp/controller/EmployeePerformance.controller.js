sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/ui/model/json/JSONModel'
],
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("stk.StarterKit.controller.EmployeePerformance", {
            onInit: function () {
                // var oData = this.getView().getModel().getData();
                // debugger
                // var employeeID = this.getView().getModel("Employees").getProperty("EmployeeID");
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
            }

        });
    });
