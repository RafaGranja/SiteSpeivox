import { useState } from "react";
import video from "./video/BackgroundNegocio.mp4";
import image1 from "./image/DesenvolvimentoDeSites.png";
import image2 from "./image/DesenvolvimentoDeSoftware.jpg";
import image3 from "./image/ConsultoriaEmTecnologia.jpg";
// componente com a descrição do negócio da empresa e áreas de atuação
function AccordionItem(props){

    const handleClick = () => {
        props.onClick(props.index); // Chamando a função onClick com o índice como argumento
      };

    if(props.open===props.index){
        return (
            <div className="AccordionItem open"  onClick={handleClick}>
                <div className="content">
                    <span className="material-icons">
                    {props.icon}
                    </span>
                    <h3 className="montserrat">{props.title}</h3>
                    <p className="montserrat">{props.text}</p>
                </div>
                <img src={props.image} alt="Imagem"></img>
                <div className="AccordionLight"></div>
            </div>
        )
    }
    else{
        return (
            <div className="AccordionItem close" onClick={handleClick}>
                <div className="content">
                    <span className="material-icons">
                    {props.icon}
                    </span>
                    <h3 className="montserrat">{props.title}</h3>
                    <p className="montserrat">{props.text}</p>
                </div>
                <img src={props.image} alt="Imagem"></img>
                <div className="AccordionLight"></div>
            </div>
        )
    }
    
}

function Atuacao(){

    const [open,setOpen] = useState(1)

    return (
    <div className="Accordion">
        <video autoPlay muted loop disablePictureInPicture >
            <source src={video} type="video/mp4"/>
        </video>
        <h1 className="montserrat title nowrap">Nossos Negócios</h1>
        <div className="AccordionList">
            <AccordionItem index={1} open={open} icon="language" image={image1} onClick={(index) => setOpen(index)} 
            title="Desenvolvimento de Sites" 
            text="Impulsione sua presença na web com nossos designs exclusivos e funcionais, garantindo uma experiência memorável para seus visitantes."/>
            <AccordionItem index={2} open={open} icon="terminal" image={image2}  onClick={(index) => setOpen(index)} 
            title="Desenvolvimento de Software" 
            text="Desenvolvemos soluções customizadas que elevam sua eficiência operacional e impulsionam o crescimento do seu negócio, adaptadas às suas necessidades específicas."/>
            <AccordionItem index={3} open={open} icon="engineering" image={image3}  onClick={(index) => setOpen(index)} 
            title="Consultoria em Tecnologia" 
            text="Nossa equipe de especialistas em tecnologia oferece orientação estratégica e soluções inovadoras para alinhar sua infraestrutura tecnológica com seus objetivos de negócio, garantindo uma vantagem competitiva duradoura."/>
        </div>
        <div className="circle-g4"></div>
        <div className="circle-g5"></div>
        <div className="circle-g6"></div>
    </div>)

}

export {Atuacao};