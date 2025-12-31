function outer(){
    let countre =2 ;
    return function(){
        countre++;
        return countre;
    }
}

let increment=outer();
console.log(increment());

//clousure: 

//A closure is a function that "remembers" its outer variables and can access them.
//In JavaScript, closures are created every time a function is created, at function creation time.