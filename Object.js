"use strict";

/**             OBJECT
 * 
 * Declarer un Objet student avec name , favoriteFood et city 
 * 
 * Recuperer le nombre de caracteres dans chaques proprietées puis les additionner pour obtenir un nombre 
 * 
 * Si le nombre pair afficher dans la console "pair"
 * Si le nombre est impair afficher dans la console "impaire"
 * 
 * Plusieurs solutions possibles 
 * Object.keys()=> recuperer les proprietées
 * Object.values() => recuperer les valeurs
 */

// créer un objet/dictionnaire avec key + value
let student = {
    name: "Elsa",
    favoriteFood: "Chicken",
    city: "Paris"
}

//recupère uniquement les valeurs de l'objet "student" et les met dans une var
let objectValue = Object.values(student);
// set un compteur
let count = 0
console.log(objectValue);

// pour chaque valeur dans la list objectValue on compte le nombre de caractères
// value ici est un paramètre/var unique a la boucle .forEach
// recupère indépendament chaque valeur et compte avec le .length
objectValue.forEach((Value)=> {
    count += Value.length;
})

console.log(count)
