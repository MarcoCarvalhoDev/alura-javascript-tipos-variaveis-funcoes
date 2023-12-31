function imprimeTexto (palavrasaleatorias) {
    console.log(palavrasaleatorias)
}

imprimeTexto("Olá meu camarada !");
imprimeTexto("");
imprimeTexto("Como vai você ?");

let numUnd = undefined;
let varnull = null;

function multiplica(numero1, numero2) {
    return numero1 * numero2;
  }
  
  function soma(numero1, numero2) {
    return numero1 + numero2;
  } 
  console.log(multiplica(soma(4, 5), soma(2, 3)));
  console.log("");
  console.log(multiplica(soma(4, 5))); // saida NaN, pois so foi fornecido 1 argumento, e na funcao ficou 9 (4+5) * undefined = NaN

  console.log(numUnd * 3);
  console.log(varnull * 2);

  console.log("");
  console.log(soma(3)); // saida NaN -> 3 + undefined = NaN

  console.log("");

  
  function outraSoma(numero1 = 0, numero2 = 0) {
    return numero1 - numero2;
  }

  console.log(outraSoma(4))

  function cumprimentar(){
    console.log('oi gente!')
   }
   
   cumprimentar()


   function cumprimentar(nome){
    console.log(`Olá ${nome}! Tudo bem ?`)
   }
   
   cumprimentar("Fabio");
   //saida: Olá Fabio ! Tudo bem ?

   function comParametro(param) {
    console.log(param)
}
comParametro()

