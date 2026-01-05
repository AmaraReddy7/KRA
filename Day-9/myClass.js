var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(email, name) {
        this.city = "";
        this.email = email;
        this.name = name;
    }
    return User;
}());
var hitesh = new User("h@h.com", "hitesh");
hitesh.city = "jaipur";
//access modifiers
var person = /** @class */ (function () {
    function person(email, name) {
        this.city = "jaipur";
        this.email = email;
        this.name = name;
    }
    return person;
}());
var himans = new person("h@h.com", "hitesh");
//simpler syntax
var Users = /** @class */ (function () {
    function Users(email, name //private city:string
    ) {
        this.email = email;
        this.name = name;
        this.city = "jaipur";
    }
    return Users;
}());
var hite = new Users("h@h.com", "hitesh");
//getters and setters in classes
var Users1 = /** @class */ (function () {
    function Users1(email, name //private city:string
    ) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "jaipur";
    }
    Users1.prototype.deleteToken = function () {
        console.log("Token deleted");
    };
    Object.defineProperty(Users1.prototype, "getAppleEmail", {
        get: function () {
            return "apple".concat(this.email);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Users1.prototype, "courseCount", {
        get: function () {
            return this._courseCount;
        },
        set: function (courseNum) {
            if (courseNum <= 1) {
                throw new Error("Course count should be more than 1");
            }
            this._courseCount = courseNum;
        },
        enumerable: false,
        configurable: true
    });
    return Users1;
}());
var SubUser = /** @class */ (function (_super) {
    __extends(SubUser, _super);
    function SubUser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isFamily = true;
        return _this;
    }
    SubUser.prototype.changeCourseCount = function () {
        this.courseCount = 4;
    };
    return SubUser;
}(Users1));
var hit3 = new Users1("h@h.com", "hitw");
