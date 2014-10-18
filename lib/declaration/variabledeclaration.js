/**
 * Created by ganaraj on 16/10/14.
 */
var types = require("ast-types");
var assert = require("assert");
var _ = require("lodash");
var literal = require('../literal');
var symbols = require('../symbols');

var n = types.namedTypes;

var symbols = [];

function Type(){
    this.name = '';
    this.origin = '';
}

//representing types -> json:schema?
/*
'number'
'bool'
//a type that has property a of type number
'a:number'
'a{b:number}'
fn(a:str,b:num)->bool

A function is represented in the json as a function ! Calling the function will return an array of arguments and a returnValue

*/


/*
*
* var x = a();
* var y = a.b.c;
* var m = ab.c();
* var x = 10;
* var y = 10 + x;
* var y = expression;
* */


function processVariableDeclaration(node){
    var localsymbols = [];
    var symbol = symbols.getSymbol(node.id);
    symbols.push(symbol);
    if(node.init){
        if(n.Literal.check(node.init)){
            symbol.type.name = literal.getType(node.init);
            symbol.type.origin = symbol.name;
        }
        else{
            var initSymbol = symbols.getSymbol(node.init);

        }

        if(n.Identifier.check(node.init)){
            var rightSymbol = new Symbol(node.init.name, node.init.loc.start);
            symbols.push(rightSymbol);
            symbol.type = rightSymbol.type;
        }
    }
    return localsymbols;
}


function infer(node){
    assert.ok(n.VariableDeclaration.check(node));
    var symbols = _.map(node.declarations,processVariableDeclaration);
    console.log(JSON.stringify(symbols));
    return symbols;
}


module.exports = {
    infer : infer
};