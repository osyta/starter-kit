sap.ui.define([], function () {
    "use-strict";
    return {
        formatName: function (sFirstName, sLastName) {
            if (sFirstName != null && sLastName != null) {
                for (let i = 0; i < sLastName.length; i++)
                    if (sLastName[i] == '-') {
                        sLastName = sLastName.slice(0, i)
                    }

                return sFirstName[0] + ". " + sLastName;
            }
            else {
                return "F. Lastname"
            }
        }
    };
});