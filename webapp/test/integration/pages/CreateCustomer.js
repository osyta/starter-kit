sap.ui.define([
    "sap/ui/test/Opa5"
], function (Opa5) {
    "use strict";
    var sViewName = "CreateCustomer";
    Opa5.createPageObjects({
        onCreateCustomer: {
            actions: {},
            assertions: {
                iShouldSeeThePage: function () {
                    return this.waitFor({
                        id: "CreateCustomer",
                        viewName: sViewName,
                        success: function () {
                            Opa5.assert.ok(true, "The page is displayed");
                            errorMessage: "Did not find the page"
                        }
                    });
                },
            }
        }
    });
});