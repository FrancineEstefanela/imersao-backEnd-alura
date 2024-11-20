// Alura Imersão back-end Aula 1 - Desvendando APIs e Servidores

import express from "express"; // Importa o Express, um framework para criar servidores web no Node.js.

const app = express(); // Cria uma instância do servidor usando o Express.

app.listen(3000, () => { // Configura o servidor para "escutar" na porta 3000.
    console.log("Servidor escutando"); // Exibe uma mensagem no console indicando que o servidor está ativo.
});

app.get("/api", (req, res) => { // Define uma rota HTTP GET para o caminho "/api".
    res.status(200).send("Ola Fran, esse é seu primeiro servidor."); 
    // Envia uma resposta com status 200 (OK) e uma mensagem de texto.
});

// Criamos um servidor web básico usando o Express, que escuta na porta 3000, uma porta comum para servidores locais em desenvolvimento. 
// Configuramos uma rota GET no caminho /api, que retorna uma resposta com o texto "Ola Fran, ..." e o código de status 200, indicando que a requisição foi bem-sucedida.
// O código 200 é um status HTTP que indica que a requisição foi bem-sucedida e o servidor respondeu corretamente ao cliente.