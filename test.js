/**
 * Created by ganaraj on 15/10/14.
 */
var parse = require('acorn/acorn_loose').parse_dammit;

var types = require("ast-types");

var n = types.namedTypes;

var acorn_options = {
    ecmaVersion: 6,
    allowReturnOutsideFunction: true,
    locations: true
};

var inference = require('./index');


var testString = 'var a = 10;var b=a;var c = a+b';


var ast = parse(testString, acorn_options);


/**
 *
 * Everything is either a statement or a declaration!
 * */
types.visit(ast,{
    visitStatement : function(path){
        inference.inferFromStatement(path.node);
        this.traverse(path);
    },
    visitDeclaration : function(path){
        inference.inferFromDeclaration(path.node);
        this.traverse(path);
    }
});


//