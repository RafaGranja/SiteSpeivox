// componente com a descrição do negócio da empresa e áreas de atuação
function Valores(){

    return (
    <div className="cards">
        <h1 className="montserrat title">Nossos Valores</h1>
        <div className="cardList">
            <div className="cardItem">
                {/* <div className="cardLight red"></div>
                <div className="cardLight2 red"></div> */}
                <span className="material-icons">
                workspace_premium
                </span>
                <h4 className="montserrat">Qualidade</h4>
                <p>Produtos e serviços que encantam os clientes, garantindo desempenho, confiabilidade e experiência</p>
            </div>
            <div className="cardItem">
                {/* <div className="cardLight green"></div>
                <div className="cardLight2 green"></div> */}
                <span className="material-icons">
                currency_exchange
                </span>
                <h4 className="montserrat">Acessibilidade</h4>
                <p>Produtos e serviços acessíveis a todos os públicos, permitindo alta qualidade sem comprometer o orçamento</p>
            </div>
            <div className="cardItem">
                {/* <div className="cardLight yellow"></div>
                <div className="cardLight2 yellow"></div> */}
                <span className="material-icons">
                new_releases
                </span>
                <h4 className="montserrat">Inovação</h4>
                <p>Capacidade de desenvolver novos produtos ou processos que proporcionem vantagens e crescimento</p>
            </div>
            <div className="cardItem">
                {/* <div className="cardLight blue"></div>
                <div className="cardLight2 blue"></div> */}
                <span className="material-icons">
                developer_board
                </span>
                <h4 className="montserrat">Tecnologia</h4>
                <p>Conhecimentos, técnicas, métodos e dispositivos utilizados para criar, desenvolver e aplicar soluções inovadoras</p>
            </div>
        </div>
        <div className="circle-g4"></div>
        <div className="circle-g5"></div>
        <div className="circle-g6"></div>
        <hr className="divider"></hr>
    </div>)

}

export {Valores};