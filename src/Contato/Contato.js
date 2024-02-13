import  instagram from "./image/instagram.svg"
import  linkedin from "./image/linkedin.svg"
import  whatsapp from "./image/whatsapp.svg"

// componente com a descrição do negócio da empresa e áreas de atuação
function ContactItem(props){


    return (

        <a className="ContactItem"target="_blank" href={props.link}>
            <div className="content">
                <h3 className="montserrat">{props.title}</h3>
                <img src={props.image} alt=""></img>
            </div>
        </a>

    )
   
    
}

// Componente contendo contato comercial e redes da empresa
function Contato(){

    return (
        <div id="CONTATO" className="Contact">
            <hr className="divider"></hr>
            <h1 className="montserrat title">Contato</h1>
            <div className="ContactList">
                <ContactItem index={1} icon="language" image={whatsapp} 
                title="Whatsapp" link={"https://wa.link/q6sfpy"} />
                <ContactItem index={2} icon="terminal" image={instagram}  
                title="Instagram" link={"https://www.instagram.com/speivox"}/>
                <ContactItem index={3} icon="engineering" image={linkedin}  
                title="Linkedin" link={"https://www.linkedin.com/company/speivox-softwares"}/>
            </div>
        </div>
    )

}

export {Contato}