document.addEventListener("DOMContentLoaded", function () {
    // Função para ordenar os links alfabeticamente
    function sortLinksAlphabetically() {
        const socialContainer = document.querySelector(".social-icons"); // Alterei para querySelector
        const socialIcons = socialContainer.getElementsByClassName("zocial");

        // Converte a coleção HTML para um array e ordena alfabeticamente
        const sortedLinks = Array.from(socialIcons).sort((a, b) => a.textContent.localeCompare(b.textContent));

        // Limpa o contêiner e adiciona os links ordenados
        socialContainer.innerHTML = '';
        sortedLinks.forEach(link => socialContainer.appendChild(link));
    }

    // Chama a função para ordenar os links assim que o conteúdo é carregado
    sortLinksAlphabetically();
});

