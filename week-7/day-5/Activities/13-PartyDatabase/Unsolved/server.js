var orm = require("./config/orm.js");



// * Console log all the party names.
orm.selectPartyNames("party_name", "parties");
// * Console log all the client names.
orm.selectPartyNames("client_name", "clients");
// * Console log all the parties that have a party-type of grown-up.
orm.selectGrownParties("party_name", "parties", "grown-up")
// * Console log all the clients and their parties.
orm.selectClientsByParty("client_name", "client_id", "party_name", "clients", "parties")