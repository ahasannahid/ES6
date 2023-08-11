// class inheritance er somoy use hoy. child class er moddhe parent class er kono method ke direct call kora jay.

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
   demo(){
    super.hello1();
   }
}

var obj1 = new Child();
obj1.demo();