var connection = require("./connection.js");

var orm = {
    selectPartyNames: function (colToSearch, tableInput) {
        var queryString = "SELECT ?? FROM ??";
        connection.query(queryString, [colToSearch, tableInput], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    selectGrownParties: function (colToSearch, tableInput, partyType) {
        var queryString = "SELECT ?? FROM ?? where party_type = ?";
        connection.query(queryString, [colToSearch, tableInput, partyType], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    selectClientsByParty: function (tableOneCol, tableTwoForeignKey, tableTwoCol, tableOne, tableTwo) {
        var queryString = "select ??, ?? from ?? left join ?? on ??.?? = ??.id";
        connection.query(queryString, [tableOneCol, tableTwoCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne],
            function (err, result) {
                if (err) throw err;
                console.log(result);
            });
    }
};



module.exports = orm;