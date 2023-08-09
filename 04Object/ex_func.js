/*
var p1 = {x:1, y:2};
var p2 = {x:3, y:4};

function dist(p, q){
    var dx = p.x - q.x;
    var dy = p.x - q.x;
    return Math.sqrt(dx*dx+dy*dy);
}

var fun1 = dist;

console.log(fun1(p1, p2));

console.log(square1(3));
var square1 = function(x){return x*x;};
// TypeError: square1 is not a function

console.log(sq2(4));
var square2 = function sq2(x){return x*x;};
// ReferenceError: sq2 is not defined
*/

console.log(sq3(4));
function sq3(x){return x*x;};