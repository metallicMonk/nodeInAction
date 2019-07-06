


console.log('Greeting module');

const a = 5;

module.exports.a = a;
module.exports.currentDate = new Date();

module.exports.getMessage = function(name) {

    const hour = new Date().getHours;

    if (hour > 16) {
        return "Good evening " + name;
    } else if (hour > 10) {
        return "Good day " + name;
    } else {
        return "Good morning " + name;
    }
}
