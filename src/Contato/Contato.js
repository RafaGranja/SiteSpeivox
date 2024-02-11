import  image from "./image/Speivox3D.png"
import  instagram from "./image/instagram.svg"
import  linkedin from "./image/linkedin.svg"
import  whatsapp from "./image/whatsapp.svg"
// Componente contendo contato comercial e redes da empresa
function Contato(){

    return (
    <div id="CONTATO" className="contato">
        <div className="direitos">
            <img src={image} alt="Logo"/>
            <p className="montserrat">Copyright © {new Date().getFullYear()} <a>Speivox</a> Todos os direitos reservados</p>
        </div>
        <div className="divider2"></div>
        <div className="redes">
            <li>
                <a target="_blank" rel="noreferrer" href="https://wa.link/q6sfpy" className="socialLink">Contato <img src={whatsapp} alt="whatsapp"></img></a>
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/speivox" className="socialLink">Instagram <img src={instagram} alt="instagram"></img></a>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/speivox-softwares" className="socialLink">Linkedin <img src={linkedin} alt="linkedin"></img></a>
            </li>
        </div>

    </div>
    )
}

export {Contato}