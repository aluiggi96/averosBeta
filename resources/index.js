import { getIconoSVG } from './logos/logosIconos.js';

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
                { nombre: "YTMusic", url: "https://music.youtube.com/watch?v=nqlkZ2DTB_A&si=eD9rs4j5foER_FW_" },
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
                { nombre: "YTMusic", url: "https://music.youtube.com/watch?v=BdHwIT-m1UY&si=QHTelwTnLW9c0MJd" },
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
                { nombre: "YTMusic", url: "https://music.youtube.com/watch?v=83hsamJu_Qk&si=2S1FHXtLfXWB_ROY" },
                { nombre: "Apple", url: "https://music.apple.com/us/album/ser-un-ni%C3%B1o-otra-vez-feat-addisong/1708634683?i=1708634685" }
            ],
            plataformasVideo: [
                { nombre: "YouTube", url: "https://youtu.be/-xOs7F91hjQ?si=Ra1gkcD5roDwAR9L" },
                { nombre: "Apple", url: "https://music.apple.com/us/music-video/ser-un-ni%C3%B1o-otra-vez-feat-addisong/1722866849" },
                { nombre: "Tidal", url: "https://tidal.com/browse/video/336982814" }
            ]
        },
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

const MERCANCIAS = [
    {
        nombreArticulo: `Gorra Oficial Averos<br>(Nombre Personalizado)`,
        imagenesArticulo: [
            "https://i.etsystatic.com/45506732/r/il/3cd38f/5381809884/il_794xN.5381809884_rkwx.jpg",
            "https://i.etsystatic.com/45506732/r/il/27aa4e/5429970779/il_794xN.5429970779_n4t0.jpg",
            "https://i.etsystatic.com/45506732/r/il/a92b91/5429970479/il_794xN.5429970479_e36c.jpg",
            "https://i.etsystatic.com/45506732/r/il/fea35f/5381809840/il_794xN.5381809840_dre5.jpg",
            "https://i.etsystatic.com/45506732/r/il/93046c/5429970409/il_794xN.5429970409_e2my.jpg",
            "https://i.etsystatic.com/45506732/r/il/9bd999/5381809698/il_794xN.5381809698_dvqn.jpg",
        ],
        enlaceComprar: 'https://www.etsy.com/listing/1584866763/official-averos-project-cap',
    },
    {
        nombreArticulo: `Sudaderas Cuello Redondo<br>Camaleon Averos`,
        imagenesArticulo: [
            "https://i.etsystatic.com/45506732/r/il/3e952a/5413760051/il_794xN.5413760051_e1ij.jpg",
            "https://i.etsystatic.com/45506732/r/il/4301a1/5365593994/il_794xN.5365593994_pj67.jpg",
            "https://i.etsystatic.com/45506732/r/il/459933/5413757173/il_794xN.5413757173_ppyh.jpg",
            "https://i.etsystatic.com/45506732/r/il/f2f2c8/5413756861/il_794xN.5413756861_p248.jpg",
            "https://i.etsystatic.com/45506732/r/il/e86a7d/5413757279/il_794xN.5413757279_no20.jpg",
            "https://i.etsystatic.com/45506732/r/il/023327/5365590538/il_794xN.5365590538_fpid.jpg",
            "https://i.etsystatic.com/45506732/r/il/c8543f/5413758231/il_794xN.5413758231_hqxu.jpg",
        ],
        enlaceComprar: 'https://www.etsy.com/listing/1567541386/chameleon-crewneck-sweatshirt-stylish',
    },
    {
        nombreArticulo: `Project Averos Official Hoodie<br>LIMITED EDITION`,
        imagenesArticulo: [
            "https://i.etsystatic.com/45506732/r/il/289ebc/5653578961/il_1588xN.5653578961_80h3.jpg",
            "https://i.etsystatic.com/45506732/r/il/259b18/5605315088/il_1588xN.5605315088_qxxg.jpg",
            "https://i.etsystatic.com/45506732/r/il/e89abd/5605321642/il_1588xN.5605321642_olzw.jpg",
            "https://i.etsystatic.com/45506732/r/il/31dd45/5653578095/il_1588xN.5653578095_7bbc.jpg",
            "https://i.etsystatic.com/45506732/r/il/c01b8e/5605501568/il_794xN.5605501568_jg07.jpg",
        ],
        enlaceComprar: 'https://www.etsy.com/listing/1638805997/project-averos-official-hoodie-limited',
    },
];

const botonDisponibles = document.querySelector(".botonDisponibles")
const botonProximos = document.querySelector(".botonProximos")
const listaDisponibles = document.querySelector('.listaDisponibles')
const listaProximos = document.querySelector('.listaProximos')

// Funciones para cambiar entre el listado de multimedia disponible y de proximos
// Asignar eventos a los botones
botonDisponibles.addEventListener('click', () => mostrarLista('disponibles'));
botonProximos.addEventListener('click', () => mostrarLista('proximos'));

// Función genérica para mostrar la lista
function mostrarLista(tipo) {
    const listaMostrar = tipo === 'disponibles' ? listaDisponibles : listaProximos;
    const listaOcultar = tipo === 'disponibles' ? listaProximos : listaDisponibles;

    // Agregar clase activa al botón clickeado y removerla del otro
    botonDisponibles.classList.toggle('botonActivo', tipo === 'disponibles');
    botonProximos.classList.toggle('botonActivo', tipo === 'proximos');

    // Mostrar la lista correspondiente y ocultar la otra
    listaMostrar.style.display = 'grid';
    listaOcultar.style.display = 'none';
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
        function crearListaMediaDisponible(tipoMedia, tituloArea, claseTitulo, claseAreaMedia, claseMedia, clasePlataformas) {
            var listaDeMediaDisponibles = document.createElement('div');
            listaDeMediaDisponibles.classList.add(claseAreaMedia);

            if (contadorTipoMediaDisponible(tipoMedia).length > 0) {
                var titleArea = document.createElement('h2');
                titleArea.classList.add(claseTitulo);
                titleArea.innerHTML = tituloArea;

                var mediaDisponibles = document.createElement('div');
                mediaDisponibles.classList.add(claseMedia);

                listaDeMediaDisponibles.appendChild(titleArea);
                listaDeMediaDisponibles.appendChild(mediaDisponibles);
                listaDisponibles.appendChild(listaDeMediaDisponibles);

                contadorTipoMediaDisponible(tipoMedia).forEach(media => {
                    var single = document.createElement('div');
                    single.classList.add('single');

                    var img = document.createElement('img');
                    img.src = media.coverURL;

                    var infoContainer = document.createElement('div');
                    var h3 = document.createElement('h3');
                    h3.innerHTML = media.artistas;
                    var p = document.createElement('p');
                    p.innerHTML = media.nombreCancion;
                    infoContainer.appendChild(h3);
                    infoContainer.appendChild(p);

                    var plataformasContainer = document.createElement('div');
                    plataformasContainer.classList.add(clasePlataformas);

                    media[clasePlataformas].forEach(plataforma => {
                        var a = document.createElement('a');
                        a.href = plataforma.url;
                        a.target = '_blank';
                        a.rel = 'noopener noreferrer';

                        var iconoSVG = document.createElement('div');
                        iconoSVG.innerHTML = getIconoSVG(plataforma.nombre);
                        a.appendChild(iconoSVG);

                        plataformasContainer.appendChild(a);
                    });

                    single.appendChild(img);
                    single.appendChild(infoContainer);
                    single.appendChild(plataformasContainer);

                    mediaDisponibles.appendChild(single);
                });
            }
        }

        crearListaMediaDisponible('musica', 'Música', 'titleAreaMusica', 'musicaArea', 'musicasDisponibles', 'plataformasMusica');
        crearListaMediaDisponible('video', 'Video', 'titleAreaVideo', 'videoArea', 'videosDisponibles', 'plataformasVideo');



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

////////////////////////////////////////////////////////////////////////////////////

// funcion del boton drop para las tabs

const botonDropUpTab = document.querySelector('.botonMostrarOcultar');
const infoTab = document.querySelector('.infoTab');
const infoTabMerch = document.querySelector('.infoTabMerch');

botonDropUpTab.addEventListener('click', mostrarOcultarInformacion);

function mostrarOcultarInformacion() {
    botonDropUpTab.classList.toggle('fa-chevron-circle-down');
    botonDropUpTab.classList.toggle('fa-chevron-circle-up');
    infoTab.style.display = infoTab.style.display === 'none' ? 'grid' : 'none';
}

// Solo si los articulos de mercaderia es un numero impar, el ultimo articulo tomara dos columnas en su lugar

function ajustedeColumnas(i) {
    if (i.childNodes.length % 2 === 1) {
        i.childNodes[i.childNodes.length - 1].classList.add("ultimoImpar")
    }
}

// Carrouseles en Merch

function crearCarrouselesMercaderia() {

    MERCANCIAS.forEach(mercancia => {
        var imagenIndex = 0;

        const carrouselDiv = document.createElement("div");
        carrouselDiv.classList.add("carrousel");

        const h2Element = document.createElement("h2");
        h2Element.innerHTML = mercancia.nombreArticulo;

        const slidesDiv = document.createElement("div");
        slidesDiv.classList.add("slides");

        const imgElement = document.createElement("img");
        imgElement.src = mercancia.imagenesArticulo[imagenIndex];

        const prevButton = document.createElement("a");
        prevButton.classList.add("prevImagen");
        prevButton.textContent = "❮";

        const nextButton = document.createElement("a");
        nextButton.classList.add("nextImagen");
        nextButton.textContent = "❯";

        const boxDotIndexDiv = document.createElement("div");
        boxDotIndexDiv.classList.add("boxDotIndex");

        slidesDiv.appendChild(imgElement);
        slidesDiv.appendChild(prevButton);
        slidesDiv.appendChild(nextButton);
        slidesDiv.appendChild(boxDotIndexDiv);

        const comprarButton = document.createElement("a");
        comprarButton.classList.add("botonComprar");
        comprarButton.href = mercancia.enlaceComprar;
        comprarButton.textContent = "Comprar/Buy";

        carrouselDiv.appendChild(h2Element);
        carrouselDiv.appendChild(slidesDiv);
        carrouselDiv.appendChild(comprarButton);

        infoTabMerch.appendChild(carrouselDiv);
    });

    ajustedeColumnas(infoTabMerch)


    // Obtén todas las instancias de carrousel después de agregarlos al DOM
    var carrousels = document.querySelectorAll('.carrousel');


    carrousels.forEach((carrousel, index) => {
        var imagenIndex = 0;
        var prevImagen = carrousel.querySelector('.prevImagen');
        var nextImagen = carrousel.querySelector('.nextImagen');
        var slidesImg = carrousel.querySelector('.slides img');
        var boxDotIndex = carrousel.querySelector('.boxDotIndex');

        MERCANCIAS[index].imagenesArticulo.forEach((imagen, i) => {
            var dot = document.createElement('div');
            dot.className = 'dotIndex' + (i === 0 ? ' dotActivo' : '');
            dot.addEventListener('click', function () {
                imagenIndex = i;
                actualizarImagen();
            });
            boxDotIndex.appendChild(dot);
        });


        prevImagen.addEventListener('click', function () {
            imagenIndex--;
            actualizarImagen();
        });

        nextImagen.addEventListener('click', function () {
            imagenIndex++;
            actualizarImagen();
        });

        // Función para actualizar la imagen actual
        function actualizarImagen() {
            var mercancia = MERCANCIAS[index];
            if (imagenIndex < 0) {
                imagenIndex = mercancia.imagenesArticulo.length - 1;
            } else if (imagenIndex >= mercancia.imagenesArticulo.length) {
                imagenIndex = 0;
            }
            slidesImg.src = mercancia.imagenesArticulo[imagenIndex];

            boxDotIndex.querySelectorAll('.dotIndex').forEach((dot, i) => {
                dot.classList.toggle('dotActivo', i === imagenIndex);
            });
        }
    });
}

crearCarrouselesMercaderia();