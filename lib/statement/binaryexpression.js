/**
 * Created by ganaraj on 19/10/14.
 */

var types = require("ast-types");

var n = types.namedTypes;

var symbols = require('../symbols');


/*

var BinaryOperators = or(
    "==", "!=", "===", "!==",
    "<", "<=", ">", ">=",
    "<<", ">>", ">>>",
    "+", "-", "*", "/", "%",
    "&",
    "|", "^", "in",
    "instanceof", "..");
*/

function infer(node){
    var symbolType = new symbols.Type();
    switch (node.operator){
        case '==':
        case '!=':
        case '===':
        case '!==':
        case '<':
        case '<=':
        case '>':
        case '>=':
            symbolType.name = typeof true;
        break;
        case '+':
            //special case
        break;
        case '-':
        case '*':
        case '/':
        case '%':
            symbolType.name = typeof 1;
        break;
        case 'instanceof':
            symbolType.name = typeof '';
        break;
        case '&':
        case '|':
        case '^':
            symbolType.name = typeof 1;
        break;
        case '..':
        break;
        case 'in':

        break;


    }
    return symbolType;
}


module.exports = {
    inferType : infer
};