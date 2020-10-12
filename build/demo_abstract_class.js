"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Common = (function () {
    function Common() {
    }
    return Common;
}());
var Boy = (function (_super) {
    __extends(Boy, _super);
    function Boy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Boy.prototype.skill = function () {
        console.log("我以小哥哥的身份实现了抽象类中的skill抽象方法");
    };
    return Boy;
}(Common));
var Girl = (function (_super) {
    __extends(Girl, _super);
    function Girl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Girl.prototype.skill = function () {
        console.log("我以小姐姐的身份实现了抽象类中的skill抽象方法");
    };
    return Girl;
}(Common));
