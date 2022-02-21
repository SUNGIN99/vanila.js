 const a = 5;

 console.log(a + 1);
 console.log(a * 2);
 console.log(a / 3);


 function sayHello(name, age){
    console.log("hello my name is " + name + " and I'm " + age);
 }
 
 sayHello("kim", 24)
 sayHello("park", 2)

 const calculator = {
   add : function(a, b){
       return a + b;
   },

   sub : function(a, b){
       return a - b;
   },

   mul : function(a, b){
       return a * b;
   },

   div : function(a, b){
       return a / b;
   },

   pow : function(a, b){
       return a ** b;
   }
}

const x = calculator.pow(2,4);
console.log(x);