let titulo = document.querySelector('.coluna-1')
let cargo = document.querySelector('.coluna-2')
let descricao = document.querySelector('.coluna-4')
let aviso = document.querySelector('.textos')
let ladoDireito = document.querySelector('.conteudo-esquerda')
let numeros = document.querySelector('.coluna-3')





let etapaAtual = 0
let numerosUrna = ''
let votouBranco = false
let votoConfirmado = false
let fim = false

let votos = []

function startEtapa(){
 
  votouBranco = false
  votoConfirmado = false
  numeros.innerHTML = ''
  numerosUrna = ''
  let etapa = etapas[etapaAtual]

  titulo.innerHTML = ''

  cargo.innerHTML = etapa.titulo

  descricao.innerHTML = ''

  aviso.innerHTML =''
  ladoDireito.innerHTML = ''

  for(i=0;i<etapa.numero;i++){

    if(i===0){

      numeros.innerHTML += '<div class="quadradinhos pisca"></div>'
    } else{
      numeros.innerHTML += '<div class="quadradinhos"></div>'
    }

    
    
  }

}



function attInterface(){


console.log(numerosUrna)

let etapa = etapas[etapaAtual]



let candidato = etapa.candidatos.filter((item)=>{

if(item.numero === numerosUrna){

  return true
}else{
  return false  
}


})

  if(candidato.length >0){

    candidato =
    candidato[0];

    titulo.innerHTML = 'SEU VOTO'
    descricao.innerHTML = `nome: ${candidato.name} <br/> Partido: ${candidato.partido}`
    aviso.innerHTML = `CONFIRMAR PARA CONFIMAR este voto <br>
    CORRIGE para REINICIAR este voto`
    


    for(let i in candidato.fotos){

      ladoDireito.innerHTML = `           <div class="d-1-image">
      <img src="${candidato.fotos[i].url}" alt="">
      ${candidato.fotos[i].legenda}
    </div>`
    }

  } else{

    descricao.classList.add('coluna-4-plus')
    titulo.innerHTML = 'SEU VOTO'
    aviso.innerHTML = `CONFIRMAR PARA CONFIMAR este voto <br>
    CORRIGE para REINICIAR este voto`
    descricao.innerHTML = `
    
      <div class="aviso--grande pisca">VOTO NULO</div>`
    
  }



}


function clicou(n){


  let quadradinho = document.querySelector('.quadradinhos.pisca')
  if(quadradinho !==null){
    quadradinho.innerHTML = `${n}`

    numerosUrna += `${n}`

    quadradinho.classList.remove('pisca')

    if(quadradinho.nextElementSibling !== null){

      quadradinho.nextElementSibling.classList.add('pisca')
    } else{
      attInterface()
    }
   


  } 
 
}

function clicouBranco(){
 
  numerosUrna = ''
  titulo.innerHTML = ''
  ladoDireito.innerHTML = ''
  descricao.classList.add('coluna-4-plus')
  descricao.innerHTML = `
    
  <div class="aviso--grande pisca">VOTO BRANCO</div>`

  numeros.innerHTML = ''

  votouBranco = true

 
 
}

function clicouCorrige(){


  startEtapa()
}

function clicouConfirma(){

  let etapa = etapas[etapaAtual]
  



  
  if(votouBranco === true){
    votoConfirmado = true
   
    

  }else if(numerosUrna.length == etapa.numero){
  
    votoConfirmado = true

   

  } 

  if(votoConfirmado){
    etapaAtual++
    
    if(etapas[etapaAtual] !== undefined){
      startEtapa()
    } else{
      
      document.querySelector('.tela').classList.add('tela-final')
      document.querySelector('.tela').innerHTML = `<div class="aviso--grande pisca">FIM</div>`
      
    }
  } 

}


startEtapa()




