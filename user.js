

function User(name, age) {

    this.name = name;
    this.age = age;
    this.creationTime = new Date();

    this.setter = function(name, age) {

        this.name = name;
        this.age = age;
    }

    this.getter = function() { return `{ "name":${this.name}, "age":${this.age}`; }

}



User.prototype.getCreationDate = function() {

    return this.creationTime;
}

module.exports = User;
