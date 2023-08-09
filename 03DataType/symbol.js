var sym1 = Symbol();
var sym2 = Symbol();

console.log(sym1 == sym2);

var HEART = Symbol("하트");
/***
Symbol 값은 Symbol 함수를 호출하여 생성한다. 
심볼 값은 자바스크립트 런타임 환경에서 Symbol 함수에 의해 동적으로 생성되며 다른 값과 중복되지 않는 고유한 값이다. 
생성된 심볼 값은 외부로 노출되지 않아 확인할 수 없다.

Symbol 함수에 들어가는 문자열 인자는 심볼 값에 대한 description으로서 선택적으로 넣을 수 있다. 
이 문자열은 디버깅 용도로만 사용되며 심볼 값 생성에 영향을 주지는 않는다.
발췌 : https://another-light.tistory.com/105
***/
console.log(HEART.toString());
console.log(HEART.description+" %s",HEART.toString());

const a = Symbol('a');
const symA = Symbol.for('a');
const symB = Symbol.for('a');

console.log("%s %s", symA == symB, Symbol.keyFor(symA));
