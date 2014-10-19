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
            //is a string if left or right is a string
            //is a string if left or right is an array;
            //is a number if both are numbers
            //is a number if left is a number and right is a bool
            //is a string if right is {}
            //is a number if left is {} and right number or bool
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