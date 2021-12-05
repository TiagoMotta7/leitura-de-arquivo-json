//Biblioteca para leitura de arquivos
const { readFile } = require('fs');
const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Requisição GET para leitura do arquivo JSON com os logs
app.get('/arquivos', (req, res) => {
    const caminhoArquivo = './log.json';

    //Tratamento de erro de leitura do arquivo    
    readFile(caminhoArquivo, (err, data) /* callback */ => {
        if (err) {
            res.status(500).send(err);
            return;
        }

        res
            .set({ 'Content-Type': 'text/plain' })
            .send(data);
    });

}); /* Final do GET /arquivos */

app.listen(3000);