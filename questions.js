//new Array() -> crée un tableau
//array.unshift("1","2") -> insert un pu plusieurs éléments dans le début du tableau et retourne le nombre d'éléments dans le tableau, pareil que push sauf qu'il ajoute les éléments à la fin du tableau
var CreationTableauLangages = function () {
var array = new Array();
var add = array.unshift("Html","CSS","Java","PHP");
  return array;
}

var CreationTableauNombres = function () {
  var array = new Array();
  var add = array.unshift(0,1,2,3,4,5);
    return array;
}
//langages.splice(2,1,"Javascript") -> permet de supprimer un élément, et même d'en rajoute un autre en le passant en 3ème paramètre
var RemplacementElement = function (langages) {
var element = langages.splice(2, 1, "Javascript");
  return langages;
}

var AjoutElementLangages = function (langages) {
var push = langages.push("Ruby", "Python");
  return langages;
}
//parseFloat() -> convertit une chaine en en valeur numérique
var AjoutElementNombres = function (nombres) {
var unshift = nombres.unshift(parseFloat("-2"), parseFloat("-1"));
  return nombres;
}
//langages.shift() -> supprime un élément
var SuppressionPremierElement = function (langages) {
  var langage = langages.shift()
  return langages;
}
//langage.pop() -> supprime le dernier élement
var SuppressionDernierElement = function (langages) {
  var langage = langages.pop()
  return langages;
}
//reseaux_sociaux_chaine.split() ->
var ConversionChaineTableau = function (reseaux_sociaux_chaine) {
var reseau = reseaux_sociaux_chaine.split(',');
  return reseau;
}
//langages.toString() -> convertis le tableau en chaine
var ConversionTableauChaine = function (langages) {
  return langages.toString();
}
//langages.sort() -> tri dans l'ordre alphabétique (ou numérique) les éléments
var TriTableau = function (reseaux_sociaux) {
  return reseaux_sociaux.sort();
}
//reverse() -> inverse l'ordre des éléments
var InversionTableau = function (reseaux_sociaux){
  return reseaux_sociaux.reverse();
}
