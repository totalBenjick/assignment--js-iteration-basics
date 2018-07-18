
/**
 * countWordInArray()
 *
 * Write a function called `countWordInArray` that takes 2 inputs: a string, and an array.
 * The function should return a number that is equal to the number of times the string-argument
 * is found in the array.
 *se mete un string y un array, y debe retornar un numero que es iggual al numero de veces que el argumento string esta 
 presente en el array
**/


// ++ Write YOUR CODE Below
// igualar inp con el list[i], si son iguales, guardar un 1, y al final sumar todas los 1 si existen

function countWordInArray(inp,list){

var numi = 0;

			for (var i =0; i<list.length; i++) {
				var queRevisa= list[i]

				if (queRevisa===inp) {
					numi = numi+1
				}
			}
			console.log(numi);
			return numi
}
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*

/*------------------Sample-Data-------------------------*/

var wordsArray_1 = ['i', 'saw', 'my', 'brother', 'who', 'supposedly', 'saw', 'my', 'sister', 'take', 'a', 'saw']
var wordsArray_2 = ["sister", "nancy", "take", 'the', 'first', 'right', 'and', 'take', 'the', 'third', 'left', 'on', 'sister', 'street']

/*-------------------TEST-1-------------------------*/
//  function accepts string, and array as arguments and
//    should return boolean if string value is in array
/*--------------------------------------------------*/
console.log("==== ex-04-countWordInArray : TEST 1 ====");

// Expected Output: words array - 1
console.assert( countWordInArray('saw', wordsArray_1) === 3)
console.assert( countWordInArray('take', wordsArray_1) === 1)
console.assert( countWordInArray('brother', wordsArray_1) === 1)
console.assert( countWordInArray('sister', wordsArray_1) === 1)

// Expected Output: words array - 2
console.assert( countWordInArray('take', wordsArray_2) === 2)
console.assert( countWordInArray('brother', wordsArray_2) === 0)
console.assert( countWordInArray('sister', wordsArray_2) === 2)

/*--------------------------------------------------*/
/*-------------------END----------------------------*/
console.log('\n\n');
