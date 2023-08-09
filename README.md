# JS_Study

## 2.4.3 토큰과 공백문자

* 토큰 : 프로그램을 구성하는 최소 단위
* 어휘 분석 : 자바스크립트 인터프리터는 프로그램을 실행하기 앞서 프로그램을 토큰으로 분해하는데 이 동작을 어휘 분석이라고 함

## 2.4.4 문장

- 문장 여러개를 중괄호({})로 감싼 코드를 복함문 또는 블록문이라고 함

## 3.1.2 변수 선언

* C나 Java 등에는 변수 타입이 다양하지만 자바스크립트에는 변수 타입이 없으므로 변수 선언자는 var 하나뿐 \
 ECMAScript 6부터는 var 외에도 let과 const라는 선언자가 추가되었으나, 이 선언자들도 var와 마찬가지로 타입이 없음

## 3.1.3 변수 선언 생략

* 변수를 선언하지 않은 상태에서 값을 대입하면 자바스크립트 엔진은 그 변수를 자동으로 전역 변수로 선언함

```javascript
x = 2; // 전역변수 x
console(x); // -> 2
```
* ECMAScript 5 부터 추가된 Strict모드를 활용하면   선언하지 않은 변수에 값을 대입했을 때 오류가 발생

## 3.1.4 변수 끌어올림(hoisting)과 변수 중복 선언

* 프로그램 중간에서 변수를 선언하더라도 변수가 프로그램 첫머리에 선언된 것처럼 다른 문장 앞에 생성됨 \
이를 번수 선언의 끌어올림(호이스팅, hoisting)이라고 함
```javascript
console.log(x); // -> undefined
var x;
```

* 단, 선언과 동시에 대입하는 코드는 끌어올리지 않음
```javascript
console.log(x); // -> undefined
var x = 5;
console.log(x); // -> 5
```

## 3.1.5 변수 명명 규칙
### 사용할 수 없는 문자
    1. 첫글자가 숫자
    2. 하이픈(-)은 사용 불가
    3. 예약어는 변수로 사용 불가

    ex.
    1st sum-all new

## 일반적으로 사용되는 표기법
* 상수는 대문자로 표현한다.
* 논리값을 표현하는 변수에는 이름 앞에 is를 붙인다.
* 생성자 이름을 붙일 때는 파스칼 표기법을 사용한다.

### 캐멀 표기법
    newName myObj

### 파스칼 표기법
    NewName MyObj
    
### 스네이크 표기법
    new_name my_obj

## 3.2.1 데이터 타입과 변수의 동적 타이핑
자바스크립트는 동적 타입 언어
```javascript
var pi = 3.14;
console.log(pi); // -> 3.14
pi = "원주율";
console.log(pi); // -> 원주율
```

## 3.2.3 숫자
대다수의 프로그래밍 언어에서는 정수 타임과 부동소수점 타입이 따로 있지만

자바스크립트에는 타입이 없으므로 숫자를 모두 64비트 부동소수점으로 표현한다. \
이는 C나 Java에서 사용하는 double 타입에 해당

## 3.2.5 특수한 값
값이 없음을 표현하기 위한 특수한 값에는 null 과 undefined가 있음

### undefined
어떤 변수의 값이 undefined가 되는 것은 '값을 할당하지 않은 결과'
* 값을 아직 할당하지 않은 변수의 값
* 없는 객체의 프로퍼티를 읽으려고 시도했을 때의 값
* 없는 배열의 요소를 읽으려고 시도했을 때의 값
* 아무것도 반환하지 않는 함수가 반환하는 값
* 함수를 호출했을 때 전달받지 못한 인수 값

### null
주로 프로그램에서 무언가를 검색했지만 찾지 못했을 때 아무것도 없음을 전달하기 위한 값을 사용됨

## 3.3.2 템플릿 리터럴
### 템플릿 리터럴
   템플릿 리터럴이란 역 따옴표(`)로 묶은 문자열

문자열에서 리터럴에서 줄 바꿈 문자를 표현할 때는 이스케이프 시퀀스(\n)을 사용했지만, 템플릿 리터럴을 사용하면 일반적인 줄 바꿈 문자를 사용할 수 있음

```javascript
var t = `Man errs as long as
he strives`;
``` 


이스케이프 시퀀스 문자를 그대로 출력하려면 템플릿 리터럴 앞에 String.raw를 붙인다.
    
```javascript
var t = String.raw`Man errs as\nlong as he strives`;
``` 

### 보간 표현식
템플릿 리터럴 안에는 플레이스 홀더를 넣을 수 있음
플레이스 홀더는 ${...}로 표기\
자바스크립트 엔진은 플레이스 홀더 안에 든 ... 부분을 표현식으로 간주한다. \
이를 활용하여 문자열 안에 변수나 표현식의 결과값을 삽입할 수 있음

```javascript
var a = 2, b = 3;
console.log(`${a} + ${b} = ${a+b}`); // 2 + 3 = 5

var now = new Date();
console.log(`오늘은 ${now.getMonth()+1} 월 ${now.getDate()} 일입니다.`);
```