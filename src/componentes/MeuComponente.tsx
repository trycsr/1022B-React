
import './MeuComponente.css'
//Criar nosso primeiro componente.
//Esse componente será o componente do nosso HEADER.
//No header temos 300px de altura ele é do tamanho da tela
//Ele tem uma borda amarela de 2px solida.
//Dentro da tag header nos temos uma div com texto "logo"de tamanho 200 x 200px centralizada na vertical a 300px da lateral esquerda


function MeuComponente() {
    let textologo = "logo"
    return (
        <>
        <header className= 'titulo'>
            <div className= 'div-titulo'>{textologo}</div>
        </header>
        </>
    )
}

export default MeuComponente;
