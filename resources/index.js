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
                { nombre: "Apple", url: "https://music.apple.com/us/album/sobrenatural-feat-addisong/1717492942?i=1717492943" }
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
                { nombre: "Apple", url: "https://music.apple.com/us/album/primera-vez-feat-fernando-ville/1715099089?i=1715099090" }
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
                { nombre: "Apple", url: "https://music.apple.com/us/album/ser-un-ni%C3%B1o-otra-vez-feat-addisong/1708634683?i=1708634685" }
            ],
            plataformasVideo: [
                { nombre: "YouTube", url: "https://youtu.be/-xOs7F91hjQ?si=Ra1gkcD5roDwAR9L" },
                { nombre: "Apple", url: "https://music.apple.com/us/music-video/ser-un-ni%C3%B1o-otra-vez-feat-addisong/1722866849" }
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

const ICONOS = {
    spotify: {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 496 512",
        d: "M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z",
    },
    youtube: {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 576 512",
        d: "M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z",
    },
    apple: {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 384 512",
        d: "M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
    }
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
                        ${media.plataformasMusica.map(plataforma => {
                    const iconoPlataforma = ICONOS[plataforma.nombre.toLowerCase()];
                    if (iconoPlataforma) {
                        return `
                        <a href="${plataforma.url}" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="${iconoPlataforma.xmlns}" viewBox="${iconoPlataforma.viewBox}">
                                <path d="${iconoPlataforma.d}"/></path>
                            </svg>
                        </a>
                        `;
                    } else {
                        console.error(`La plataforma ${plataforma.nombre.toLowerCase()} no está definida en ICONOS.`);
                        return ''; // Puedes ajustar esto según tus necesidades
                    }}).join('')}
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
                        ${media.plataformasVideo.map(plataforma => {
                    const iconoPlataforma = ICONOS[plataforma.nombre.toLowerCase()];
                    if (iconoPlataforma) {
                        return `
                        <a href="${plataforma.url}" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="${iconoPlataforma.xmlns}" viewBox="${iconoPlataforma.viewBox}">
                                <path d="${iconoPlataforma.d}"/></path>
                            </svg>
                        </a>
                        `;
                    } else {
                        console.error(`La plataforma ${plataforma.nombre.toLowerCase()} no está definida en ICONOS.`);
                        return ''; // Puedes ajustar esto según tus necesidades
                    }}).join('')}
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

const botonDropUpTab = document.querySelector('.botonMostrarOcultar');
const infoTab = document.querySelector('.infoTab');

botonDropUpTab.addEventListener('click', mostrarOcultarInformacion);

function mostrarOcultarInformacion() {
    botonDropUpTab.classList.toggle('fa-chevron-circle-down');
    botonDropUpTab.classList.toggle('fa-chevron-circle-up');
    infoTab.style.display = infoTab.style.display === 'none' ? 'grid' : 'none';
}