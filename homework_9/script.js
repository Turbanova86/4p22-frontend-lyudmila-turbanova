'use strict';

    function makeFibonacciFunction() {

        let a = 0;
        console.log(a);

        let b = 1;
        console.log(b);

        return function () {
            
            let c = a + b;
            a = b;
            b = c;
        
            console.log(c);
        }
        
    }

    const fibonacci = makeFibonacciFunction();

    fibonacci(); // вывод в консоль :0
    fibonacci(); // вывод в консоль :1
    fibonacci(); // вывод в консоль :1
    fibonacci(); // вывод в консоль :2
    fibonacci(); // вывод в консоль :3
    fibonacci(); // вывод в консоль :5
    fibonacci(); // вывод в консоль :8
    fibonacci(); // вывод в консоль :13
    fibonacci(); // вывод в консоль :21
    fibonacci(); // вывод в консоль :34






//========== со звездочкой ===========//
            // const fibonacci = function () {
                            
            //                 for (let i = 0; i < n; i++) {
            //                     let n = 1;
            //                     fibonacci(n) = fibonacci(i-1) + fibonacci(i-2);
            //                     console.log(n);
            //                     return fibonacci(n);
            //                 }
                            
            // };

            const fibonacci2 = (() => {
                let last = -1,
                    next = 1;
            
                return () => {
                    const result = last + next;
                    last = next;
                    next = result;
                    console.log(result);
                    return result;
                };
            })();
              
            fibonacci2(); // вывод в консоль :0
            fibonacci2(); // вывод в консоль :1
            fibonacci2(); // вывод в консоль :1
            fibonacci2(); // вывод в консоль :2
            fibonacci2(); // вывод в консоль :3
            fibonacci2(); // вывод в консоль :5
            fibonacci2(); 
            fibonacci2(); 
            fibonacci2(); 


        


    
        