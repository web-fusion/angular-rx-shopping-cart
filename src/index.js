"use strict";
exports.__esModule = true;
var _ = require("lodash");
exports.getMessage = function () {
    _.map(_.range(10), function (i) { return console.log(i); });
    return "Hello World";
};
exports.getMessage();
