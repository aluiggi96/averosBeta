// Datos multimedia (musicas y videos) en forma de objetos
const MULTIMEDIA = {
    DISPONIBLES: [
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
        }
    ],
    PROXIMOSLANZAMIENTOS: [
        // {
        //   musica: false
        //   video: false
        //   artistas: "Averos Music, AddiSonG",
        //   nombreCancion: "Sobrenatural",
        //   coverURL: "https://i.scdn.co/image/ab67616d00001e0239387b3eb60c238a17dc049c",
        // }
    ]
}

const MERCANCIAS = {
    ARTICULOS: [
        {
            nombreArticulo: 'Gorra Oficial Averos (Nombre Personalizado)',
            imagenesArticulo: [
                "https://i.etsystatic.com/45506732/r/il/3e952a/5413760051/il_794xN.5413760051_e1ij.jpg",
                "https://i.etsystatic.com/45506732/r/il/27aa4e/5429970779/il_794xN.5429970779_n4t0.jpg",
                "https://i.etsystatic.com/45506732/r/il/a92b91/5429970479/il_794xN.5429970479_e36c.jpg",
                "https://i.etsystatic.com/45506732/r/il/fea35f/5381809840/il_794xN.5381809840_dre5.jpg",
            ],
            enlaceComprar: 'https://www.etsy.com/listing/1584866763/official-averos-project-cap',
        }
    ]
}

const botonDisponibles = document.querySelector(".botonDisponibles")
const botonProximos = document.querySelector(".botonProximos")
const listaDisponibles = document.querySelector('.listaDisponibles')
const listaProximos = document.querySelector('.listaProximos')

// Funciones para cambiar entre el listado de multimedia disponible y de proximos
botonDisponibles.addEventListener('click', mostraListaDisponibles);
botonProximos.addEventListener('click', mostrarListaProximos)

// Funciones de cada boton y sus acciones respectivas
function mostraListaDisponibles() {
    if (!botonDisponibles.classList.contains('botonActivo')) {
        botonDisponibles.classList.add('botonActivo')
        botonProximos.classList.remove('botonActivo')
        listaDisponibles.style.display = 'grid'
        listaProximos.style.display = 'none'
    }
}

function mostrarListaProximos() {
    if (!botonProximos.classList.contains('botonActivo')) {
        botonProximos.classList.add('botonActivo')
        botonDisponibles.classList.remove('botonActivo')
        listaDisponibles.style.display = 'none'
        listaProximos.style.display = 'grid'
    }
}

// Verificar cuantos tipo de ('musica' o 'video') existen
function contadorTipoMediaDisponible(tipo) {
    const filtro = MULTIMEDIA.DISPONIBLES.filter(cancion => cancion[tipo] === true)
    return filtro
}

// Ajuste al area disponible
function ajusteAUnaSolaAreaDisponible(listaAAjustar) {
    if (listaAAjustar.childNodes.length < 2) {
        listaAAjustar.classList.replace('listaDisponibles', 'soloUnaAreaDisponible')
        listaAAjustar.childNodes[0].style.maxHeight = '36.250rem'
    }
}

// Generador de media en Disponible y Proximos Lanzamientos
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
        listaDisponibles.classList.replace('listaDisponibles', 'listaNoDisponibles')
        listaDisponibles.appendChild(mensajeListaVaciaDisponibles)
    } else {
        if (contadorTipoMediaDisponible('musica').length > 0) {
            var titleAreaMusica = document.createElement('h2')
            titleAreaMusica.classList.add('titleAreaMusica')
            titleAreaMusica.innerHTML = 'Música'
            listaDeMusicaDisponibles.appendChild(titleAreaMusica)
            var musicasDisponibles = document.createElement('div')
            musicasDisponibles.classList.add('musicasDisponibles')
            listaDeMusicaDisponibles.appendChild(musicasDisponibles)
            listaDisponibles.appendChild(listaDeMusicaDisponibles);

            contadorTipoMediaDisponible('musica').forEach(media => {
                var single = document.createElement('div')
                single.classList.add('single')

                const contenido = `
                        <img src="${media.coverURL}">
                        <div>
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
            })
        }

        if (contadorTipoMediaDisponible('video').length > 0) {
            var titleAreaVideo = document.createElement('h2')
            titleAreaVideo.classList.add('titleAreaVideo')
            titleAreaVideo.innerHTML = 'Video'
            listaDeVideoDisponibles.appendChild(titleAreaVideo)
            var videosDisponibles = document.createElement('div')
            videosDisponibles.classList.add('videosDisponibles')
            listaDeVideoDisponibles.appendChild(videosDisponibles)
            listaDisponibles.appendChild(listaDeVideoDisponibles);

            contadorTipoMediaDisponible('video').forEach(media => {
                var singleVid = document.createElement('div')
                singleVid.classList.add('singleVid')

                const contenidoVid = `
                        <img src="${media.coverURL}">
                        <div>
                        <h3>${media.artistas}</h3>
                        <p>${media.nombreCancion}</p>
                        </div>
                        <div class="plataformas">
                        ${media.plataformasVideo.map(plataforma => `
                        <a href="${plataforma.url}" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-${plataforma.nombre.toLowerCase()}"></i>
                        </a>
                        `).join('')}
                        </div>
                        `
                singleVid.innerHTML = contenidoVid

                videosDisponibles.appendChild(singleVid)
            })
        }

        ajusteAUnaSolaAreaDisponible(listaDisponibles)

        var cards = document.querySelectorAll('.card');
        cards.forEach(function (card) {
            card.classList.add('cardDisponible');
        });
    }

    if (MULTIMEDIA.PROXIMOSLANZAMIENTOS.length === 0) {
        listaProximos.appendChild(mensajeListaVaciaProximos)
    } else {
        listaProximos.appendChild(listaDeMusicaProximos);
        listaProximos.appendChild(listaDeVideoProximos);
    }
}

generarListado();

// funcion del boton drop y creacion de carroules 

const botonDropUpTab = document.querySelector('.botonMostrarOcultar')
const infoTab = document.querySelector('.infoTab')

botonDropUpTab.addEventListener('click', mostrarOcultarInformacion)

function mostrarOcultarInformacion() {
    if (infoTab.style.display === 'none') {
        botonDropUpTab.classList.replace('fa-chevron-circle-down', 'fa-chevron-circle-up')
        infoTab.style.display = 'grid'
    } else {
        botonDropUpTab.classList.replace('fa-chevron-circle-up', 'fa-chevron-circle-down')
        infoTab.style.display = 'none'
    }
}