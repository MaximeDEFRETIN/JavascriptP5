var CreationTableauLangages = function () {
var array = ["Html","CSS","Java","PHP"];
  return array;
}

var CreationTableauNombres = function () {
  var array = [0,1,2,3,4,5];
    return array;
}
//langages.splice(2,1,"Javascript") -> permet de supprimer un élément, et même d'en rajoute un autre en le passant en 3ème paramètre
var RemplacementElement = function (langages) {
var element = langages.splice(2, 1, "Javascript");
  return langages;
  /*Meilleur solution car plus simple et demande moins de ressource
  langages[2] = 'Javascript';
  return langages;*/
}
//push() -> ajoute les éléments à la fin du tableau et retourne les éléments du tableau
var AjoutElementLangages = function (langages) {
var push = langages.push("Ruby", "Python");
  return langages;
}
//new Array() -> crée un tableau
//array.unshift("1","2") -> insert un pu plusieurs éléments dans le début du tableau et retourne les éléments du tableau
//parseFloat() -> convertit une chaine en en valeur numérique
var AjoutElementNombres = function (nombres) {
var unshift = nombres.unshift(-2, -1);
  return nombres;
}
//langages.shift() -> supprime le 1er élément
var SuppressionPremierElement = function (langages) {
  var langage = langages.shift()
  return langages;
}
//langage.pop() -> supprime le dernier élement
var SuppressionDernierElement = function (langages) {
  var langage = langages.pop()
  return langages;
}
//reseaux_sociaux_chaine.split(',') -> permet de séparer la chaine en élément distinct et en faire un tableau
var ConversionChaineTableau = function (reseaux_sociaux_chaine) {
var reseau = reseaux_sociaux_chaine.split(',');
  return reseau;
}
//langages.join() -> convertis le tableau en chaine
var ConversionTableauChaine = function (langages) {
  return langages.join();
}
//langages.sort() -> tri dans l'ordre alphabétique (ou numérique) les éléments
var TriTableau = function (reseaux_sociaux) {
  return reseaux_sociaux.sort();
}
//reverse() -> inverse l'ordre des éléments
var InversionTableau = function (reseaux_sociaux){
  return reseaux_sociaux.reverse();
}
