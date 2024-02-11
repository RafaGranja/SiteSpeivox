import image from "./image/Speivox3D.png" 
import 'bootstrap/dist/css/bootstrap.css';
import { Fragment } from "react";
import Carousel from 'react-bootstrap/Carousel';

function Depoyment(props){

    return (

        <Fragment>
            <p className="montserrat text">{props.text}</p>
            <p className="montserrat signature">{props.author}</p>
        </Fragment>

    )
}

// componente contendo portifólio e valores da empresa
function Sobre(){

    return (
    <div id="SOBRE" className="sobre">
        <img src={image} alt="Logo"/>
        <div className="flexRow"> 
            <div className="flex-collum">
                <h1 className="montserrat title">Quer conhecer nosso trabalho?</h1>
            </div>
            <div className="flex-collum">
            <span className="material-icons icon-diversity">
            groups_2
            </span>
            </div>
            <Carousel className="carousel">
                <Carousel.Item className="flex-collum" interval={5000}>
                <Depoyment author="Emanuel Joshua - Fundador" text='"A SpeiVox nasceu para suprir a demanda das empresas por sistemas personalizados que se adaptem às necessidades de cada negócio. E também, a necessidade dos empresários e proprietários, desde grandes empresas até pequenos empreendimentos de ter um relacionamento próximo com alguém que entenda seus problemas e saiba como solucioná-los. É pra isso que existimos."'></Depoyment>
                </Carousel.Item>
            </Carousel>
        </div>
        <div className="circle-g1"></div>
        <div className="circle-g2"></div>
        <div className="circle-g3"></div>
        <hr className="divider"></hr>
    </div>
    )

}

export {Sobre}