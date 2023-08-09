const NONE = Symbol("none");
console.log(NONE.description);

const symNone = Symbol.for("none");
Symbol.keyFor(symNone); 
// 심볼 값을 인수로 받아서 전역 심볼 레지스트리에 저장된 심볼 값 키를 가져온다. (else, undefined 반환) 

console.log(symNone);
console.log(NONE);

console.log(symNone == NONE);

const NONE1 = Symbol("none");
const NONE2 = Symbol("none");

console.log(NONE1 == NONE2);


var sym1 = Symbol.for("club");
var sym2 = Symbol.for("club");

console.log(sym1 === sym2);



var sym3 = Symbol("club");

console.log("Symbol.keyFor(sym2) : "+Symbol.keyFor(sym2));
console.log("Symbol.keyFor(sym3) : "+Symbol.keyFor(sym3));

console.log(sym2);
console.log(sym3);

var a = 2, b = 3;
console.log(`${a}+${b} = ${a+b}`);