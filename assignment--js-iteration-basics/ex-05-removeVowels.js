/**
 * removeVowels()
 *
 * Write a function called `removeVowels()`.
 * It should accept a string as input,
 * and it should return a new string without the vowels.
 *
*/ 
// ++ Write YOUR CODE Below
function removeVowels(palabra){
	var regresa=""
	var soloConsonante= palabra.split("");
	
	//console.log(soloConsonante);

		//for (var i =0; i<list.length; i++) {
	for( var i=0; i<palabra.length; i++){
		//console.log(soloConsonante[i]);

	if ( soloConsonante[i]!=="a" && soloConsonante[i]!=="e" && soloConsonante[i]!=="i"&&
			soloConsonante[i]!=="o" && soloConsonante[i]!=="u" && soloConsonante[i]!=="A"
			&& soloConsonante[i]!=="E" && soloConsonante[i]!=="I" && soloConsonante[i]!=="O" && soloConsonante[i]!=="U" )
		{regresa= regresa + soloConsonante[i]
		//console.log(regresa);
		}
	}
	console.log(regresa);
	return regresa;
}


/*
function removeVowels(wrd) {

	var newWord= "";

	for (var i = 0; i < wrd.length; i++) {
		console.log(wrd[i]);
		if (wrd[i] !== "a" && wrd[i] !== "A" && wrd[i] !== "e" && wrd[i] !== "E" && wrd[i] !== "i" && wrd[i] !== "I"
		&& wrd[i] !== "o" && wrd[i] !== "O" && wrd[i] !== "u" && wrd[i] !== "U") {

			newWord = newWord + wrd[i];
		}
	}
	console.log(newWord);
	return newWord;
}*/

//*~*~*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*

/*-------------------TEST-1-------------------------*/
//  function accepts string as arguments and
//    should return string without vowels
/*--------------------------------------------------*/
console.log("==== ex-05-removeVowels : TEST 1 ====");

console.assert( removeVowels('milk') === 'mlk' );
console.assert( removeVowels('christmas') === 'chrstms' )
console.assert( removeVowels('moo shoo pork') === 'm sh prk' )
console.assert( removeVowels('good job girls') === 'gd jb grls' )

/*-------------------TEST-2-------------------------*/
//  function should not return capital letters
/*--------------------------------------------------*/
console.log("==== ex-05-removeVowels : TEST 2 ====");

console.assert( removeVowels('Out of Order') === 't f rdr' )
console.assert( removeVowels('Estados Unidos') === 'stds nds' )
console.assert( removeVowels('GOOD JOB GIRLS') === 'GD JB GRLS' )

/*--------------------------------------------------*/
/*-------------------END----------------------------*/
console.log('\n\n');
