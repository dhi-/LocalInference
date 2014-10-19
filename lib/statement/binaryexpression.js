/**
 * Created by ganaraj on 19/10/14.
 */

var types = require("ast-types");

var n = types.namedTypes;

var symbols = require('./symbols');
var literal = require('./literal');


function infer(node){

}


module.exports = {
    inferType : infer
};