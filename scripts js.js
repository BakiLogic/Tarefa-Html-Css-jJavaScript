var listaComentarios = document.getElementById("listaComentarios");
var listaTab = [];

function enviaComentario(){
    var entraTitulo = document.getElementById("tituloInput");
    var entraConteudo = document.getElementById("conteudoInput");
    var entraImagem = document.getElementById("imagemInput");

    var titulo = entraTitulo.value;
    var conteudo = entraConteudo.value;
    var imagem = entraImagem.value;

     
    if (titulo == ''){
        alert("ERRO, insira o título");
    } else {
        if (conteudo == ''){
            alert("ERRO, insira conteudo");

        } else {  
            if (imagem == ""){
                alert("erro ao inserir link");
            } else {


            var conCom = document.createElement('div');
            conCom.className = 'conCom';
            var ct = document.createElement('h3');
            ct.className = 'ct';                                       
            var cc = document.createElement('p');
            cc.className = 'cc';       
            var img = document.createElement('img');
            img.className = 'img';
            ct.innerHTML = titulo;
            cc.innerHTML = conteudo;
            img.src = imagem;
            listaComentarios.appendChild(conCom);
            conCom.appendChild(ct);
            conCom.appendChild(cc);
            conCom.appendChild(img);

            var btnAlterar = document.createElement("button");
            btnAlterar.textContent = "Alterar";
            btnAlterar.className = 'btnAlterar';
            conCom.appendChild(btnAlterar);
            btnAlterar.addEventListener("click", function () {
                var comentarios = document.getElementById('comentarios');
                var editarCmnt = document.createElement('div');
                editarCmnt.className = 'editarCmnt';
                var editarLabel = document.createElement('h3')
                editarLabel.className = 'editarLabel';
                editarLabel.innerHTML = 'Editar Comentario';
                var tituloEdit = document.createElement('input');
                tituloEdit.className = 'tituloEdit';
                var conteudoEdit = document.createElement('textarea');
                conteudoEdit.className = 'conteudoEdit';
                var confirmBtn = document.createElement('button');
                confirmBtn.className = 'confirmBtn';
                confirmBtn.innerHTML = 'confimar';
                
                 comentarios.appendChild(editarCmnt);
                 editarCmnt.appendChild(editarLabel);
                 editarCmnt.appendChild(tituloEdit);
                 editarCmnt.appendChild(conteudoEdit);
                 editarCmnt.appendChild(confirmBtn);

                confirmBtn.addEventListener('click', function() { 

                var titulo2 = tituloEdit.value;
                var conteudo2 = conteudoEdit.value;

  
                if (titulo2 !== null)
                    titulo = titulo2;
                if(conteudo2 !== null) {                       
                    conteudo = conteudo2;
                }
                salvarStorage('','','');
                
                salvarLista();
                
                carregarLS();

                editarCmnt.remove();

                });
            });
                  
            var btnApagar = document.createElement("button");
            btnApagar.textContent = "X";
            btnApagar.className = 'btnApagar';
            conCom.appendChild(btnApagar);
            btnApagar.addEventListener("click", function () {
                
                delComment(titulo, conteudo);
                salvarLista();
                carregarLS();
               
            });
            salvarStorage(entraTitulo.value, entraConteudo.value, entraImagem.value);
        }   
    }
}
    carregarLS();   
    salvarLista();
    entraTitulo.value = '';
    entraConteudo.value = '';
    entraImagem.value = '';
   
}







function delComment(titulo, conteudo) {      

    var indice = -1;
    for (var i = 0; i < listaTab.length; i++) {
        if (listaTab[i].titulo === titulo && listaTab[i].conteudo === conteudo) {
            indice = i;
            break;
        }
    }

    if (indice !== -1) {
        listaTab.splice(indice, 1);
        salvarStorage('','','');
    
        
    }
    salvarLista();
    carregarLS();
    

}

function salvarLista() {
    localStorage.setItem("comentario", listaTab.innerHTML);
}


function settarLista() {
    listaTab.innerHTML = localStorage.getItem("comentario");
}
settarLista();


function salvarStorage(titulo, conteudo, imagem){
    var novoComentario = {titulo: titulo, conteudo: conteudo,imagem: imagem };
    listaTab.push(novoComentario);
    localStorage.setItem('listaTab', JSON.stringify(listaTab));
}

function resetStorage(){

    var lista2 = JSON.parse(localStorage.getItem('listaTab'));
    listaTab = lista2 || [];
   
    
}
resetStorage();

function carregarLS(){

    
    
    listaComentarios.innerHTML = ""; 
    
    listaTab.forEach(function (listaTab){
        
   
        var conCom = document.createElement('div');
        conCom.className = 'conCom';
        var ct = document.createElement('h3');
        ct.className = 'ct';                                       
        var cc = document.createElement('p');
        cc.className = 'cc';       
        var img = document.createElement('img');
        img.className = 'img';
        ct.innerHTML = listaTab.titulo;
        cc.innerHTML = listaTab.conteudo;
        img.src = listaTab.imagem;


       if (listaTab.titulo !== ''){
        
        listaComentarios.appendChild(conCom);
        conCom.appendChild(ct);
        conCom.appendChild(cc);
        conCom.appendChild(img);

        


            var btnAlterar = document.createElement("button");
            btnAlterar.textContent = "Alterar";
            btnAlterar.className = 'btnAlterar';
            conCom.appendChild(btnAlterar);
            btnAlterar.addEventListener("click", function () {
                var comentarios = document.getElementById('comentarios');
            
               var editarCmnt = document.createElement('div');
               editarCmnt.className = 'editarCmnt';
               var editarLabel = document.createElement('h3')
               editarLabel.className = 'editarLabel';
               editarLabel.innerHTML = 'Editar Comentario';
               var tituloEdit = document.createElement('input');
               tituloEdit.className = 'tituloEdit';
               var conteudoEdit = document.createElement('textarea');
               conteudoEdit.className = 'conteudoEdit';
               var confirmBtn = document.createElement('button');
               confirmBtn.className = 'confirmBtn';
               confirmBtn.innerHTML = 'confimar';
               
                comentarios.appendChild(editarCmnt);
                editarCmnt.appendChild(editarLabel);
                editarCmnt.appendChild(tituloEdit);
                editarCmnt.appendChild(conteudoEdit);
                editarCmnt.appendChild(confirmBtn);

             


                confirmBtn.addEventListener('click', function() { 

                var titulo2 = tituloEdit.value;
                var conteudo2 = conteudoEdit.value;

  
                if (titulo2 !== null)
                    listaTab.titulo = titulo2;
                if(conteudo2 !== null) {                       
                    listaTab.conteudo = conteudo2;
                }
                salvarStorage('','','');
                
                salvarLista();
                
                carregarLS();

                editarCmnt.remove();

                });
            });
                  
            var btnApagar = document.createElement("button");
            btnApagar.textContent = "X";
            btnApagar.className = 'btnApagar';
            conCom.appendChild(btnApagar);
            btnApagar.addEventListener("click", function () {
                delComment(listaTab.titulo, listaTab.conteudo);
                salvarLista();
                carregarLS();
            });
       }
    });

}

var barra = document.getElementById('pesquisaInput');
barra.addEventListener('input', function(){
    listaComentarios.innerHTML = ""; 
    var chave = barra.value;

    var resto = listaTab.filter(function (listaTab) {
    var tituloSearch = listaTab.titulo.toLowerCase().includes(chave.toLowerCase());
    var conteudoSearch = listaTab.conteudo.toLowerCase().includes(chave.toLowerCase());
        return tituloSearch||conteudoSearch;
   
    });

    resto.forEach(function (listaTab){
        var conCom = document.createElement('div');
        conCom.className = 'conCom';
        var ct = document.createElement('h3');
        ct.className = 'ct';                                       
        var cc = document.createElement('p');
        cc.className = 'cc';       
        var img = document.createElement('img');
        img.className = 'img';
        ct.innerHTML = listaTab.titulo;
        cc.innerHTML = listaTab.conteudo;
        img.src = listaTab.imagem;

        if (listaTab.titulo !== ''){
        listaComentarios.appendChild(conCom);
        conCom.appendChild(ct);
        conCom.appendChild(cc);
        conCom.appendChild(img);


            var btnAlterar = document.createElement("button");
            btnAlterar.textContent = "Alterar";
            btnAlterar.className = 'btnAlterar';
            conCom.appendChild(btnAlterar);
            btnAlterar.addEventListener("click", function () {
                var comentarios = document.getElementById('comentarios');
                var editarCmnt = document.createElement('div');
                editarCmnt.className = 'editarCmnt';
                var editarLabel = document.createElement('h3')
                editarLabel.className = 'editarLabel';
                editarLabel.innerHTML = 'Editar Comentario';
                var tituloEdit = document.createElement('input');
                tituloEdit.className = 'tituloEdit';
                var conteudoEdit = document.createElement('textarea');
                conteudoEdit.className = 'conteudoEdit';
                var confirmBtn = document.createElement('button');
                confirmBtn.className = 'confirmBtn';
                confirmBtn.innerHTML = 'confimar';
                
                 comentarios.appendChild(editarCmnt);
                 editarCmnt.appendChild(editarLabel);
                 editarCmnt.appendChild(tituloEdit);
                 editarCmnt.appendChild(conteudoEdit);
                 editarCmnt.appendChild(confirmBtn);

                confirmBtn.addEventListener('click', function() { 

                var titulo2 = tituloEdit.value;
                var conteudo2 = conteudoEdit.value;

  
                if (titulo2 !== null)
                    listaTab.titulo = titulo2;
                if(conteudo2 !== null) {                       
                    listaTab.conteudo = conteudo2;
                }
                salvarStorage('','','');
               
                salvarLista();
                
                carregarLS();

                editarCmnt.remove();

                });
            });
                  
            var btnApagar = document.createElement("button");
            btnApagar.textContent = "X";
            btnApagar.className = 'btnApagar';
            conCom.appendChild(btnApagar);
            btnApagar.addEventListener("click", function () {
                delComment(listaTab.titulo, listaTab.conteudo);
                salvarLista();
                carregarLS();
                
            });
        }

    });

});

carregarLS();
