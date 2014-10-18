/**
 * Created by ganaraj on 15/10/14.
 */
var varDecl = require('./lib/declaration/variabledeclaration');

function inferFromDeclaration(node){
    return varDecl.infer(node);
}

function inferFromStatement(node){

}



module.exports = {
    inferFromDeclaration : inferFromDeclaration,
    inferFromStatement : inferFromStatement
};