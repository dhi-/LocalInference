/**
 * Created by ganaraj on 16/10/14.
 */

var types = require("ast-types");

var n = types.namedTypes;


function Symbol(name,location){
    this.name = name;
    this.type = new Type();
    this.members = [];//this is an array of symbols
    this.location = location;

}

function getSymbol(node){
    if(n.Identifier.check(node)){
        return new Symbol(node.name,node.loc.start);
    }

}

function Type(){
    this.name = '';
    this.origin = '';
}


module.exports = {
    getSymbol : getSymbol,
    Type : Type
};