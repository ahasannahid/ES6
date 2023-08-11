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
// MyClass2.hello();

// class inheritance
// parent class and child class
class Parent{
    hello1(params){
        console.log("Hello 1 Function");
    }
    hello2(params){
        console.log("Hello 2 Function");
    }
    hello3(params){
        console.log("Hello 3 Function");
    }
}

class Child extends Parent{

}

var obj1 = new Child();
obj1.hello1();

