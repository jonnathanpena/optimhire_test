/*

Hello! Thanks for taking the time to complete this exercise.

To start, clone this project (you need to create an account),
and add your answer in your copy. If you don't feel comfortable
with NodeJS, feel free to create a project with the language
of your choice (please copy over these comments).

Once you finish, share the project to matias@kocomo.com

Go coding!!

-------------------------------------------------------

Hola! Gracias por tu tiempo para completar este ejercicio.

Para empezar, clona este proyecto (necesitas crear una cuenta),
y agrega tu respuesta en tu copia. Si no te sientes cómodo
con NodeJS, puedes crear un proyecto con el lenguage que
prefieras (por favor copia estos comentarios).

Cuando termines, comparte este proyecto con matias@kocomo.com

Go coding!!

=======================================================

Words and letters

Given a 'bag' of words and a 'bag' of letters, write a
function that returns the length of the longest word that
can be written using each of the given letters at most
once.

Indicate time and space complexity.

e.g.
Words:
------------------------------
| 'kellogg' 'go'       |
|'hola' 'lego' 'hug'|
| 'kocomo' 'hello' |
------------------------------

Letters:
-----------------------
| 'a' 'h' 'l' 'e' |
|'l' 'o' 'g' 'k'  |
-----------------------

Answer: 5

Explanation:
* 5 is the length of 'hello', logest one that can be written
* 'kellogg' (7) needs two 'g', and there's only one in the letters bag
* 'kocomo' (6) needs a 'c' that is not present in the letters bag
* All other words are shorter than 'hello'

*/

findLongestWord();

/**
 * Order, foreach and find
 */
function findLongestWord() {
  const words = [ 'kellogg', 'go', 'hola', 'lego', 'hug', 'kocomo', 'hello'];
  /**
   * Order the word array
   */
  words.sort(function(a, b){return b.length - a.length});
  for (let i = 0; i < words.length; i++) {
    if (checkLeeterExists(words[i], [ 'a', 'h', 'l', 'e', 'l', 'o', 'g', 'k'])) {
      console.log( 
        `${words[i]} is the longest word that can be 
        written using each of the given letters at mostonce` 
      );
      break;
    }
  }
};

function checkLeeterExists(word, lettersBag) {
  let result = true;
  for (let i = 0; i < word.length; i++) {
    const letterIndex = lettersBag.findIndex(l => l === word[i]);
    if (letterIndex === -1) {
      result = false;
      break;
    } else {
      lettersBag.splice(letterIndex, 1);
    }
  }

  return result;
}

