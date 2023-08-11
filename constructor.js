// constructor return korena.
class MyClass {
    constructor() {
        console.log('Hello from constructor');
    }
}

// constructor with parameter
class MyClass1 {
    constructor(a, b) {
        this.firstNum = a
        this.secondNum = b
        // console.log('Hello from constructor', a + b);
    }
    add(){
       let result =  this.firstNum + this.secondNum;
       console.log(result);
    }
}
// constructor with parameter
var obj = new MyClass1(10, 20);
// obj.add();

// static keyword
class MyClass2{
   static hello(){
        console.log(('hello world'))
    }
}
MyClass2.hello();

