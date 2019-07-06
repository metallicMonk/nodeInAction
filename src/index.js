
const ru = require('./lang/ru/messages');
const uk = require('./lang/uk/messages')

module.exports = {

    "getLocalizenValue": function(variable, language) {

        return eval(language + "." + variable);
    }
}
