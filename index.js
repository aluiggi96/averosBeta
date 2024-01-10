// Datos multimedia (musicas y videos) en forma de objetos
const DATAMEDIA = {
    musicas: [
        {
            artistas: "Averos Music, AddiSonG",
            nombreCancion: "Ser Un Niño Otra Vez",
            coverURL: "https://i.scdn.co/image/ab67616d00001e023b4a73b8fcce26dd47b1bb16",
            plataformas: [
                { nombre: "Spotify", url: "https://open.spotify.com/track/5ShabTACl2O5tXVFrClNGE" },
                { nombre: "YouTube", url: "https://music.youtube.com/watch?v=83hsamJu_Qk&si=2S1FHXtLfXWB_ROY" },
                { nombre: "Apple Music", url: "https://music.apple.com/us/album/ser-un-ni%C3%B1o-otra-vez-feat-addisong/1708634683?i=1708634685" }
            ]
        },
        {
            artistas: "Averos Music, Fernando Ville",
            nombreCancion: "Primera Vez",
            coverURL: "https://i.scdn.co/image/ab67616d00001e02ff386fdff9996b6ccc21a31c",
            plataformas: [
                { nombre: "Spotify", url: "https://open.spotify.com/track/62JHWhcS2ABNSsve3K7jWg" },
                { nombre: "YouTube", url: "https://music.youtube.com/watch?v=BdHwIT-m1UY&si=QHTelwTnLW9c0MJd" },
                { nombre: "Apple Music", url: "https://music.apple.com/us/album/primera-vez-feat-fernando-ville/1715099089?i=1715099090" }
            ]
        },
        {
            artistas: "Averos Music, AddiSonG",
            nombreCancion: "Sobrenatural",
            coverURL: "https://i.scdn.co/image/ab67616d00001e0239387b3eb60c238a17dc049c",
            plataformas: [
                { nombre: "Spotify", url: "https://open.spotify.com/track/3Q6G1iAlw1Cws3RDE96cDL" },
                { nombre: "YouTube", url: "https://music.youtube.com/watch?v=nqlkZ2DTB_A&si=eD9rs4j5foER_FW_" },
                { nombre: "Apple Music", url: "https://music.apple.com/us/album/sobrenatural-feat-addisong/1717492942?i=1717492943" }
            ]
        },
    ],
    videos: [
        {
            artistas: "Averos Music, AddiSonG",
            nombreCancion: "Ser Un Niño Otra Vez",
            coverURL: 'https://i.scdn.co/image/ab67616d00001e023b4a73b8fcce26dd47b1bb16',
            plataformas: [
                { nombre: "YouTube", url: "https://youtu.be/-xOs7F91hjQ?si=Ra1gkcD5roDwAR9L" },
                { nombre: "Apple Music", url: "https://music.apple.com/us/music-video/ser-un-ni%C3%B1o-otra-vez-feat-addisong/1722866849"}
            ]
        },
    ],
    PROXIMOSLANZAMIENTOS: [
        // {
        //   artistas: "",
        //   nombreCancion: "",
        //   coverURL: "imagenCover"
        // }
    ]
}

// Datos de las próximas canciones en forma de objetos

// funciones para los botones de "Ya disponibles" y "Proximos Lanzamientos"
function mostrarLista(tipo) {
    const disponibles = document.querySelector('.listaDisponibles');
    const proximos = document.querySelector('.listaProximos');
    const botonesDisponibles = document.querySelector('.botones.disponibles');
    const botonesProximos = document.querySelector('.botones.proximos');

    disponibles.style.display = tipo === 'disponibles' ? 'grid' : 'none';
    proximos.style.display = tipo === 'proximos' ? 'grid' : 'none';

    botonesDisponibles.classList.toggle('activo', tipo === 'disponibles');
    botonesProximos.classList.toggle('activo', tipo === 'proximos');
}

// funciones para mostrar tabs
const botonesMostrarOcultar = document.querySelectorAll('.botonMostrarOcultar');
botonesMostrarOcultar.forEach(boton => {
    boton.addEventListener('click', function() {
        const infoDetab = this.parentElement.nextElementSibling;

        if (infoDetab.style.display === 'none' || infoDetab.style.display === '') {
            infoDetab.style.display = 'flex';
            this.classList.remove('fa-chevron-circle-down');
            this.classList.add('fa-chevron-circle-up');
        } else {
            infoDetab.style.display = 'none';
            this.classList.remove('fa-chevron-circle-up');
            this.classList.add('fa-chevron-circle-down');
        }
    });
});



// Funcion del carrousel y sus funciones internas

const carrouseles = document.querySelectorAll('.carrousel');

carrouseles.forEach(carrousel => {
    const prevButton = carrousel.querySelector("#prev");
    const nextButton = carrousel.querySelector("#next");
    const images = carrousel.querySelectorAll('.carrousel img');
    const dotsContainer = carrousel.querySelector('.carrousel > div > div');
    let currentIndex = 0;

    if (!dotsContainer) {
        console.error("No se ha encontrado el contenedor de puntos (dotsContainer). Verifica tu selector.");
        return;
    }

    const createDot = index => {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        dot.addEventListener("click", () => updateCarousel(index));
        dotsContainer.appendChild(dot);
    };

    images.forEach((_, index) => createDot(index));

    const updateCarousel = index => {
        currentIndex = index !== undefined ? index : currentIndex;
        images.forEach((image, i) => image.style.display = i === currentIndex ? "block" : "none");
        dotsContainer.querySelectorAll(".dot").forEach((dot, i) => dot.classList.toggle("active", i === currentIndex));
    };

    updateCarousel();

    const handleButtonClick = increment => updateCarousel((currentIndex + increment + images.length) % images.length);

    nextButton.addEventListener('click', () => handleButtonClick(1));
    prevButton.addEventListener('click', () => handleButtonClick(-1));

    let touchStartX = null;

    carrousel.addEventListener('touchstart', e => touchStartX = e.touches[0].clientX);

    carrousel.addEventListener('touchend', e => {
        if (touchStartX !== null) {
            const deltaX = e.changedTouches[0].clientX - touchStartX;
            handleButtonClick(deltaX > 50 ? -1 : deltaX < -50 ? 1 : 0);
            touchStartX = null;
        }
    });
});


// Función para generar elementos HTML dinámicamente
function generarElementoMultimedia(multimedia) {
    const elementoDiv = document.createElement('div');
    elementoDiv.classList.add(multimedia.tipo);

    const contenido = `
        <img src="${multimedia.coverURL}">
        <div class="mediaData">
            <h4 class="artistas">${multimedia.artistas}</h4>
            <p class="cancionNombre">${multimedia.nombreCancion}</p>
        </div>
        <div class="plataformas">
            ${multimedia.plataformas.map(plataforma => `
                <a href="${plataforma.url}" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-${plataforma.nombre.toLowerCase()}"></i>
                </a>
            `).join('')}
        </div>
    `;

    elementoDiv.innerHTML = contenido;
    return elementoDiv;
}

function generarListaMultimedia() {
    const listaMusica = document.querySelector('#musicasDisponibles');
    const listaVideos = document.querySelector('#videosDisponibles');

    DATAMEDIA.musicas.forEach(cancion => {
        const singleDiv = generarElementoMultimedia({ tipo: 'single', ...cancion });
        listaMusica.appendChild(singleDiv);
    });

    DATAMEDIA.videos.forEach(video => {
        const videoDiv = generarElementoMultimedia({ tipo: 'videos', ...video });
        listaVideos.appendChild(videoDiv);
    });
}

// Llamar a la función para generar la lista de música y videos
generarListaMultimedia();



function generarListaProximos() {
    const listaProximos = document.querySelector('.listaProximos');
    const listaProximosVacia = document.createElement('p');
    listaProximosVacia.classList.add('listaVacia');
    listaProximosVacia.innerHTML = 'Estamos plasmando ideas del alma en música... 🎵<br>Sigan atentos en nuestras redes oficiales';

    if (DATAMEDIA.PROXIMOSLANZAMIENTOS.length === 0) {
        listaProximos.appendChild(listaProximosVacia);
    } else {
        DATAMEDIA.PROXIMOSLANZAMIENTOS.forEach((cancion) => {
            const singleDiv = document.createElement('div');
            singleDiv.classList.add('single');

            const singleContent = `
          <img src="${cancion.coverURL}">
          <div class="musicData">
            <h4 class="artistas">${cancion.artista}</h4>
            <p class="cancionNombre">${cancion.nombreCancion}</p>
          </div>
          <div class="plataformas">
            <p>Próximamente</p>
          </div>
        `;

            singleDiv.innerHTML = singleContent;
            listaProximos.appendChild(singleDiv);
        });
    }
}

generarListaProximos();
