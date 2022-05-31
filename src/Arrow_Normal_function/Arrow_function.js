

//Arguments Objects are not available in Arrow Functions,
//	Regular function created using function declaration or 
//Expression are “constructable” and 
//“Scallable”.
//	Arrow function do not have their own this.
//	Implicitly returned by the arrow function


/*
export default function Arrow(a,b){
    return(a+b)

}
console.log(Arrow(4,5))

 */

/*
export default function Arrow(a,b){
    console.log(arguments)
    return(a+b)

}
console.log(Arrow(4,5))
 */
const Add = (a, b) => {
    console.log(arguments)
    return (a + b);
}
console.log(Add(4, 5));