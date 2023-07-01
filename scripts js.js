//Aluno: Thiago Vinicius Akiyoshi Tagami
//RA: a2453401

var tituloInput = document.querySelector("tituloInput");
var conteudoInput = document.querySelector("conteudoInput");
var imagemInput = document.querySelector("imageInput");
var listaComentarios = document.getElementById("listaComentarios")
var comentar = document.getElementById("comentar");


atualizaTabela();
function addComentario(titulo, conteudo, imagem){

    if (tituloInput.value == ''){
        alert("ERRO, insira o título");
    } else {
        if (conteudoInput.value == ''){
            alert("ERRO, insira conteudo");
        } else {
            var comentarioNovo = {titulo: titulo, conteudo: conteudo, imagem: imagem};
        }
    }
    comentarios.push(comentarioNovo);
    saveLS();
    atualizaTabela();
}
function editComment(comentario) {
    var titulo2 = prompt("Titulo novo:", comentario.titulo);
    var conteudo2 = prompt("Novo Corpo", comentario.conteudo);
  
    if (titulo2 !== null)
        comentario.titulo = titulo2;
    if(newText !== null) {       
        comentario.conteudo = conteudo2;
        saveCommentLS();
        atualizaTabela();
    }
  }
function delComment(comentario) {      
    var confirmacao = confirm("Deseja apagar o Comentário?");
    if (confirmacao) {
        var index = comentarios.indexOf(comentario);
        comentarios.splice(index, 1);
        saveCommentLS();
        atualizaTabela();
      }
    }

var comentarios = getCommentsLS();

function atualizaTabela() {  
    listaComentarios.innerHTML = ""; 

    comentarios.forEach(function (comentario){
        //atributos do objeto
  
        var comentarioTitulo = document.createElement("a");      
        var conteudoComentario = document.createElement("p");
        var imagemComment = document.createElement("img");


        comentarioTitulo.textContent = comentario.titulo;
        conteudoComentario.textContent = comentario.conteudo;
        imagemComment.src = comentario.imagem;

        //Objeto que cria os botões de deletar e editar
        var btnAlterar = document.createElement("button");


            btnAlterar.textContent = "Alterar";
            btnAlterar.className = "bTtnAlt";
            btnAlterar.addEventListener("click", function () {
            editComment(comentario);
        });

        var btnApagar = document.createElement("button");


            btnApagar.textContent = "Apagar";
            btnApagar.className = "btnApagar";
            btnApagar.addEventListener("click", function () {
            delComment(comment);            
    }); 
    
    //contrução do objeto resultado
    listaComentarios.appendChild(imagemComment);
    listaComentarios.appendChild(comentarioTitulo);
    listaComentarios.appendChild(conteudoComentario);
    listaComentarios.appendChild(btnAlterar);
    listaComentarios.appendChild(btnApagar);
    
    });



}

comentar.addEventListener("submit", function (event) { 
    var conteudo3 = conteudoInput.value;
    var titulo3 = tituloInput.value;  
    var imagem3 = imagemInput.files[0]
    var entryFile = new FileReader();
  

    entryFile.addEventListener("load", function () {
      var urlInput = entryFile.result;
      addComentario(titulo3, conteudo3, urlInput);
    }); 
    if (imagem3) {
        reader.readAsDataURL(imagem3);
    } else {
      addComentario(titulo3, conteudo3, "");
    }
  
    comentar.reset();
  });

function saveCommentLS() {
    localStorage.setItem("comentarios", JSON.stringify(comentarios));
}



function getCommentsLS() {
    var comentarioLS = localStorage.getItem("comentarios");
    if (comentarioLS) {
      return JSON.parse(comentarioLS);
    } else {
      return [];
    }
}

function saveLS(){
    localStorage.setItem("comentario", listaComentarios.innerHTML);
}

function loadLS(){
    listaComentarios.innerHTML = localStorage.getItem("comentario");
}
loadLS();