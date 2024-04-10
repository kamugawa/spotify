document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("myModal");
    var musicList = document.getElementById("musicList");
    var modalContent = document.getElementById("modalContent");
    var youtubeLink = document.getElementById("youtubeLink");
    var albumImage = document.createElement("img"); // Criar elemento de imagem para o álbum
  
    var youtubeVideos = [
        "https://youtu.be/-PlAg8R9TG4?feature=shared", // Música 1 - Insira o link completo do vídeo do YouTube aqui
        "https://www.youtube.com/watch?v=VIDEO_ID2", // Música 2 - Insira o link completo do vídeo do YouTube aqui
        "https://www.youtube.com/watch?v=VIDEO_ID3", // Música 3 - Insira o link completo do vídeo do YouTube aqui
        "https://www.youtube.com/watch?v=VIDEO_ID4", // Música 4 - Insira o link completo do vídeo do YouTube aqui
        "https://www.youtube.com/watch?v=VIDEO_ID5", // Música 5 - Insira o link completo do vídeo do YouTube aqui
        "https://www.youtube.com/watch?v=VIDEO_ID6", // Música 6 - Insira o link completo do vídeo do YouTube aqui
        "https://www.youtube.com/watch?v=VIDEO_ID7", // Música 7 - Insira o link completo do vídeo do YouTube aqui
        "https://www.youtube.com/watch?v=VIDEO_ID8", // Música 8 - Insira o link completo do vídeo do YouTube aqui
        "https://www.youtube.com/watch?v=VIDEO_ID9", // Música 9 - Insira o link completo do vídeo do YouTube aqui
        "https://www.youtube.com/watch?v=VIDEO_ID10" // Música 10 - Insira o link completo do vídeo do YouTube aqui
    ];
  
    musicList.addEventListener("click", function(event) {
      if (event.target.tagName === "LI") {
        var index = event.target.getAttribute("data-index");
        var musicName = "Música " + index;
        var albumSrc = event.target.querySelector("img").getAttribute("src"); // Obter src da imagem do álbum clicado
        var youtubeUrl = youtubeVideos[index - 1]; // Acessar o link correspondente ao índice
        
        modal.style.display = "block";
        modalContent.innerHTML = ""; // Limpar conteúdo anterior
        albumImage.src = albumSrc; // Definir src da imagem do álbum no modal
        modalContent.appendChild(albumImage); // Adicionar imagem ao modal
        modalContent.innerHTML += "<h2>" + musicName + "</h2>"; // Adicionar nome da música ao modal
        youtubeLink.setAttribute("href", youtubeUrl); // Definir link do YouTube
      }
    });
  
    var closeBtn = document.getElementsByClassName("close")[0];
    closeBtn.addEventListener("click", function() {
      modal.style.display = "none";
    });
  
    window.addEventListener("click", function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
});
