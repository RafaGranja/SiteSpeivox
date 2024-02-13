import  image from "./image/SpeiVoxCinza.png"

// Componente contendo contato comercial e redes da empresa
function Rodape(){

    return (
    <div id="RODAPE" className="rodape">
        <div className="direitos">
            <img src={image} alt="Logo"/>
            <p className="montserrat">Copyright © {new Date().getFullYear()} <a>Speivox</a> Todos os direitos reservados</p>
        </div>
    </div>
    )
}

export {Rodape}