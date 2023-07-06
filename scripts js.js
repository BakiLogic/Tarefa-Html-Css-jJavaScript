
var listaComentarios = document.getElementById("listaComentarios")

function enviaComentario(){
    var entraTitulo = document.getElementById("tituloInput");
    var entraConteudo = document.getElementById("conteudoInput");
    var entraImagem = document.getElementById("imagemInput");

            var titulo = entraTitulo.value;
            var conteudo = entraConteudo.value;
            var imagem = entraImagem.files[0];

            var entryFile = new FileReader();
            
            if (titulo == ''){
                alert("ERRO, insira o título");
            } else {
                if (conteudo == ''){
                    alert("ERRO, insira conteudo");

                } else {  


            entryFile.addEventListener("load", function () {
            var urlInput = entryFile.result;
                addComentario(titulo, conteudo, urlInput);
            }); 
            if (imagem) {
                entryFile.readAsDataURL(imagem);

            } else {
                addComentario(titulo, conteudo, "");
            }   
            }
            }
        entraTitulo.innerHTML = '';
        entraConteudo.innerHTML = '';
        entraImagem.innerHTML = '';
        carregarLS();
}

function addComentario(titulo, conteudo, imagem){
    var comentarioNovo = {titulo: titulo,conteudo: conteudo,imagem: imagem};
    comentario.push(comentarioNovo);
    salvarLS();
    carregarLS();
      
}
function editComment(comentario) {
    var titulo2 = prompt("Titulo novo:", comentario.titulo);
    var conteudo2 = prompt("Novo Corpo", comentario.conteudo);
  
    if (titulo2 !== null)
        comentario.titulo = titulo2;
    if(newText !== null) {       
        comentario.conteudo = conteudo2;
        salvarLS();
        atualizaTabela();
    }
  }
function delComment(comentario) {      
    var confirmacao = confirm("Deseja apagar o Comentario?");
    if (confirmacao) {
        var indice = comentario.indexOf(comentario);
        comentario.splice(indice, 1);
        salvarLS();
        atualizaTabela();
    }
}


function salvarLS(){  
    localStorage.setItem('comentario', JSON.stringify(comentario));
}

function getComentarios() {
    var comentarioLS = localStorage.getItem('comentario');
    if (comentarioLS) {
      return JSON.parse(comentarioLS);
    } else {
      return [];
    }
}
var comentario = getComentarios();
function carregarLS(){
    
    listaComentarios.innerHTML = ""; 

    comentario.forEach(function (comentarios){
                                             
            var conCom = document.createElement('div');
            conCom.className = 'conCom';
            var ct = document.createElement('h3');
            ct.className = 'ct';                                       
            var cc = document.createElement('p');
            cc.className = 'cc';       
            var img = document.createElement('img');
            img.className = 'img';
            ct.innerHTML = comentarios.titulo;
            cc.innerHTML = comentarios.conteudo;
            img.src = comentarios.imagem;
            listaComentarios.appendChild(conCom);
            conCom.appendChild(ct);
            conCom.appendChild(cc);
            conCom.appendChild(img);


            var btnAlterar = document.createElement("button");
            btnAlterar.textContent = "Alterar";
            btnAlterar.className = "btnAlt";
            btnAlterar.addEventListener("click", function () {
                editComment(comentarios);
            });      
            var btnApagar = document.createElement("button");
            btnApagar.textContent = "Apagar";
            btnApagar.className = "btnApagar";
            btnApagar.addEventListener("click", function () {
                delComment(comentarios);
            });
    });

}

var barra = document.getElementById('pesquisaInput');
barra.addEventListener('input', function(){
    var chave = barra.value;

    var resto = comentario.filter(function (comentarios) {
    var tituloSearch = comentarios.title.toLowerCase().includes(chave.toLowerCase());
    var conteudoSearch = comentarios.text.toLowerCase().includes(chave.toLowerCase());
        return tituloSearch||conteudoSearch;
   
    });

    resto.forEach(function (comentarios){
    var conCom = document.createElement('div');
            conCom.className = 'conCom';
            var ct = document.createElement('h3');
            ct.className = 'ct';                                       
            var cc = document.createElement('p');
            cc.className = 'cc';       
            var img = document.createElement('img');
            img.className = 'img';
            ct.innerHTML = comentarios.titulo;
            cc.innerHTML = comentarios.conteudo;
            img.src = comentarios.imagem;
            listaComentarios.appendChild(conCom);
            conCom.appendChild(ct);
            conCom.appendChild(cc);
            conCom.appendChild(img);


            var btnAlterar = document.createElement("button");
            btnAlterar.textContent = "Alterar";
            btnAlterar.className = "btnAlt";
            btnAlterar.addEventListener("click", function () {
                editComment(comentarios);
            });      
            var btnApagar = document.createElement("button");
            btnApagar.textContent = "Apagar";
            btnApagar.className = "btnApagar";
            btnApagar.addEventListener("click", function () {
                delComment(comentarios);
            });
        });         


});






  
    











carregarLS();
