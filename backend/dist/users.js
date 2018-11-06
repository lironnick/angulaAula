"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
    User.prototype.matches = function (another) {
        return another !== undefined &&
            another.email === this.email &&
            another.password === this.password;
    };
    return User;
}());
exports.User = User;
exports.users = {
    'lironnick@gmail.com': new User('lironnick@gmail.com', 'tiago', '123'),
    'sabrina@gmail.com': new User('sabrina@gmail.com', 'sabrina', '1234')
};
