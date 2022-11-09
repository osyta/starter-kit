sap.ui.define([
    "sap/ui/test/opaQunit",
    "./pages/CustomersList",
    "./pages/CreateCustomer"
], function (opaTest) {
    "use strict";

    QUnit.module("Customers List Journey");

    opaTest("Should see the initial page of the app", function (Given, When, Then) {
        // Arrangements
        Given.iStartMyApp();

        // Assertions
        Then.onTheCustomersList.iShouldSeeTheCarousel();
        Then.onTheCustomersList.iShouldSeeTheTable();

        //Cleanup
        Then.iTeardownMyApp();
    }),
    opaTest("Should navigate to create new customer", function(Given, When, Then) {
    
        Given.iStartMyApp();
        Given.onTheCustomersList.iPressCreate();
        Then.onCreateCustomer.iShouldSeeThePage();
        Then.iTeardownMyApp();

    });
});

