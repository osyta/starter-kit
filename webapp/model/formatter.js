sap.ui.define([], function () {
    "use-strict";
    return {
        formatName: function (sFirstName, sLastName) {
            for (let i = 0; i < sLastName.length; i++)
                if (sLastName[i] == '-')
                {
                    sLastName = sLastName.splice(i, sLastName.length-i)
                }

            return sFirstName[0] + ". " + sLastName;
        }
    };
});