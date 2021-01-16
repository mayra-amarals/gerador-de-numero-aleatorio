// Importando o componente React da dependencia react e Hook useState
import React, {useState} from 'react';

// Importando css
import './style.css';

// Exportando componente padrão e criando a função PaginaInicial
export default function PaginaInicial() {
    // Declarando a variavel de estado, a função para alterar o valor da variavel e o valor inicial da variavel
    const [numeroAleatorio, setNumeroAleatorio] = useState(1);
    
    // Função para gerar novo número aleatorio entre 1 e 100 utilizando o objeto Math da linguagem JavaScript
    // Método random gera um número aleatorio
    // Método floor arredonda o número e retorna um inteiro
    function gerarNumero() {
        const novoNumero = Math.floor(Math.random() * (100-1) + 1);
        setNumeroAleatorio(novoNumero);
    }

    // Retorno da função PaginaInicial
    return(
        // Exibindo número aleatório e botão para gerar um novo número
        <div className="conteudo-centralizado">
            <h3>Número Aleatório</h3>
            <h1>{ numeroAleatorio }</h1>

            <div className="area-botao">
                <label>Click no botão abaixo para gerar um número aleatório</label>
                <button onClick={gerarNumero}>Gerar Número</button>
            </div>
        </div>
    );
}