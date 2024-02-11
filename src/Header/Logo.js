import { Fragment } from "react"
import logo from "./image/SpeiVoxLogo.png"

function Logo(){
    return (
        <Fragment>
        <a href="#HEADER" className="montserrat"><img src={logo} className="logo" alt="Logo"/></a>
        <nav>
            <a href="#HEADER" className="montserrat">Início</a>
            <a href="#SOBRE" className="montserrat">Sobre nós</a>
            <a href="#CONTATO" className="montserrat">Contato</a>
        </nav>
        </Fragment>
    )
}
export {Logo}