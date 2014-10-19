/**
 * Created by ganaraj on 19/10/14.
 */

var types = require("ast-types");

var n = types.namedTypes;

var symbols = require('./symbols');
var literal = require('./literal');


function infer(node){
    var rightType = new symbols.Type();
    if(n.Literal.check(node)){
        rightType.name = literal.getType(node);
    }
    else if(n.Identifier.check(node)){
        rightType.origin = node.name;
    }
    else if(n.BinaryExpression.check(node)){

    }
    return rightType;
}


module.exports = {
    inferType : infer
};