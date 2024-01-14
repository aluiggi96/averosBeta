// Datos multimedia (musicas y videos) en forma de objetos
const MULTIMEDIA = {
    DISPONIBLES: [
        {
            musica: true,
            video: true,
            artistas: "Averos Music, AddiSonG",
            nombreCancion: "Ser Un Niño Otra Vez",
            coverURL: "https://i.scdn.co/image/ab67616d00001e023b4a73b8fcce26dd47b1bb16",
            plataformasMusica: [
                { nombre: "Spotify", url: "https://open.spotify.com/track/5ShabTACl2O5tXVFrClNGE" },
                { nombre: "YouTube", url: "https://music.youtube.com/watch?v=83hsamJu_Qk&si=2S1FHXtLfXWB_ROY" },
                { nombre: "Apple Music", url: "https://music.apple.com/us/album/ser-un-ni%C3%B1o-otra-vez-feat-addisong/1708634683?i=1708634685" }
            ],
            plataformasVideo: [
                { nombre: "YouTube", url: "https://youtu.be/-xOs7F91hjQ?si=Ra1gkcD5roDwAR9L" },
                { nombre: "Apple Music", url: "https://music.apple.com/us/music-video/ser-un-ni%C3%B1o-otra-vez-feat-addisong/1722866849" }
            ]
        },
        {
            musica: true,
            video: false,
            artistas: "Averos Music, Fernando Ville",
            nombreCancion: "Primera Vez",
            coverURL: "https://i.scdn.co/image/ab67616d00001e02ff386fdff9996b6ccc21a31c",
            plataformasMusica: [
                { nombre: "Spotify", url: "https://open.spotify.com/track/62JHWhcS2ABNSsve3K7jWg" },
                { nombre: "YouTube", url: "https://music.youtube.com/watch?v=BdHwIT-m1UY&si=QHTelwTnLW9c0MJd" },
                { nombre: "Apple Music", url: "https://music.apple.com/us/album/primera-vez-feat-fernando-ville/1715099089?i=1715099090" }
            ],
            plataformasVideo: [],
        },
        {
            musica: true,
            video: false,
            artistas: "Averos Music, AddiSonG",
            nombreCancion: "Sobrenatural",
            coverURL: "https://i.scdn.co/image/ab67616d00001e0239387b3eb60c238a17dc049c",
            plataformasMusica: [
                { nombre: "Spotify", url: "https://open.spotify.com/track/3Q6G1iAlw1Cws3RDE96cDL" },
                { nombre: "YouTube", url: "https://music.youtube.com/watch?v=nqlkZ2DTB_A&si=eD9rs4j5foER_FW_" },
                { nombre: "Apple Music", url: "https://music.apple.com/us/album/sobrenatural-feat-addisong/1717492942?i=1717492943" }
            ],
            plataformasVideo: [],
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



// Funciones para cambiar entre el listado de multimedia disponible y de proximos
const botonDisponibles = document.querySelector(".botonDisponibles")
const botonProximos = document.querySelector(".botonProximos")
const listaDisponibles = document.querySelector('.listaDisponibles')
const listaProximos = document.querySelector('.listaProximos')

botonDisponibles.addEventListener('click', mostraListaDisponibles)
botonProximos.addEventListener('click', mostrarListaProximos)

function mostraListaDisponibles() {
    botonDisponibles.classList.add('botonActivo')
    botonProximos.classList.remove('botonActivo')
    listaDisponibles.style.display = 'grid'
    listaProximos.style.display = 'none'
}

function mostrarListaProximos() {
    botonProximos.classList.add('botonActivo')
    botonDisponibles.classList.remove('botonActivo')
    listaDisponibles.style.display = 'none'
    listaProximos.style.display = 'grid'
}

function generarListado() {
    var listaDeMusicaDisponibles = document.createElement('div');
    var listaDeVideoDisponibles = document.createElement('div');
    var listaDeMusicaProximos = document.createElement('div');
    var listaDeVideoProximos = document.createElement('div');
    var mensajeListaVaciaDisponibles = document.createElement('p')
    var mensajeListaVaciaProximos = document.createElement('p')

    mensajeListaVaciaProximos.innerHTML = 'Estamos plasmando ideas del alma en música... 🎵<br>Sigan atentos en nuestras redes oficiales'
    mensajeListaVaciaDisponibles.innerHTML = "No hay nada disponible por el momento... 😔<br>Vuelve mas tarde 😊"

    mensajeListaVaciaDisponibles.classList.add('mensajeListaVacia')
    mensajeListaVaciaProximos.classList.add('mensajeListaVacia')
    listaDeMusicaDisponibles.classList.add('musicaArea');
    listaDeVideoDisponibles.classList.add('videoArea');
    listaDeMusicaProximos.classList.add('musicaArea');
    listaDeVideoProximos.classList.add('videoArea');

    if (MULTIMEDIA.DISPONIBLES.length === 0) {
        listaDisponibles.classList.add("listaNoDisponibles")
        listaDisponibles.classList.remove('listaDisponibles')
        listaDisponibles.appendChild(mensajeListaVaciaDisponibles)
    } else {
        var titleAreaMusica = document.createElement('h2')
        titleAreaMusica.classList.add('titleAreaMusica')
        titleAreaMusica.innerHTML = 'Música'
        listaDeMusicaDisponibles.appendChild(titleAreaMusica)
        var musicasDisponibles = document.createElement('div')
        musicasDisponibles.classList.add('musicasDisponibles')
        listaDeMusicaDisponibles.appendChild(musicasDisponibles)
        var cards = document.querySelectorAll('.card');

        cards.forEach(function (card) {
            card.classList.add('cardDisponible');
        });


        MULTIMEDIA.DISPONIBLES.forEach(media => {
            if (media.musica === true) {
                var single = document.createElement('div')
                single.classList.add('single')

                const contenido = `
                <img src="${media.coverURL}">
                <div class="metadata">
                <h3>${media.artistas}</h3>
                <p>${media.nombreCancion}</p>
                </div>
                <div class="plataformas">
                ${media.plataformasMusica.map(plataforma => `
                <a href="${plataforma.url}" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-${plataforma.nombre.toLowerCase()}"></i>
                </a>
                `).join('')}
                </div>
                `
                single.innerHTML = contenido

                musicasDisponibles.appendChild(single)
            }
            listaDisponibles.appendChild(listaDeMusicaDisponibles);
            listaDisponibles.appendChild(listaDeVideoDisponibles);
        })
    }

    if (MULTIMEDIA.PROXIMOSLANZAMIENTOS.length === 0) {
        listaProximos.appendChild(mensajeListaVaciaProximos)
    } else {
        listaProximos.appendChild(listaDeMusicaProximos);
        listaProximos.appendChild(listaDeVideoProximos);
    }

}

generarListado();

