import './lateral.css';
import RenderCondicional from './RenderCondicional.jsx'
import Count from './Contador.jsx'
function Lateral(){
    return(
        <div className="contenedor-lateral">
            <div>
                <p className="sumario">Sumario</p>
                <ol className="ol-lateral">
                    <li><a href="#Etimologia">Etimología</a></li>
                    <li><a href="#Historia">Historia</a></li>
                    <li><a href="#Pokemon">¿Qué son los Pokémon?</a></li>
                        <ol>
                            <li><a href="#Vinculo">Vínculo entre humanos y Pokémon</a></li>
                        </ol>
                            <li className="li-lateral"><a href="#Generaciones">Generaciones de Videojuegos</a></li>
                        <ol>
                            <li><a href="#Primera">Primera Generación</a></li>
                            <li><a href="#Segunda">Segunda Generación</a></li>
                            <li><a href="#Tercera">Tercera Generación</a></li>
                            <li><a href="#Cuarta">Cuarta Generación</a></li>
                            <li><a href="#Quinta">Quinta Generación</a></li>
                            <li><a href="#Sexta">Sexta Generación</a></li>
                            <li><a href="#Septima">Septima Generacioón</a></li>
                            <li><a href="#Octava">Octava Generación</a></li>
                            <li><a href="#Novena">Novena Generación</a></li>
                        </ol>
                    <li><a href="#Merchadising">Merchadising de los videojuegos</a></li>
                        <ol>
                            <li><a href="#Anime">Anime</a></li>
                            <li><a href="#Peliculas">Peliculas</a></li>
                            <li><a href="#Manga">Manga</a></li>
                            <li><a href="#Cartas">Juego de Cartas</a></li>
                        </ol>
                </ol>
            </div>
            <RenderCondicional/>
            <Count/>
        </div>);
}

export default Lateral;