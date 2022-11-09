sap.ui.define([
    "stk/starterkit/model/formatter"
], function (formatter) {
    "use-strict";

    QUnit.module("Name formatting");

    function nameFormattingTest(oOptions) {
        //Act
        var sName = formatter.formatName(oOptions.firstName, oOptions.lastName);

        //Assert
        oOptions.assert.strictEqual(sName, oOptions.expected, "The name was correctly formated: " + sName);

    }

    QUnit.test("Should format 'Oliwia Syta-Bunia to 'O. Syta'", function (assert) {
        nameFormattingTest.call(this, {
            assert: assert,
            firstName: "Oliwia",
            lastName: "Syta",
            expected: "O. Syta"
        });
    });

    QUnit.test("Should format 'Iza Kopko to 'I. Kopko'", function (assert) {
        nameFormattingTest.call(this, {
            assert: assert,
            firstName: "Iza",
            lastName: "Kopko",
            expected: "I. Kopko"
        });
    });
});
