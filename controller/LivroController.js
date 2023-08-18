const express = require('express');

const app = express();
const router = express.Router();

const livro = require('../model/LivroModel');

router.post('/livro/cadastrarLivro' ,(req, res)=>{

    const { titulo, preco, imagen_peq, imagen_grd, detalhes, tblCategoriaumId } = req.body;

    livro.create(
        {
            titulo,
            preco,
            imagen_peq,
            imagen_grd,
            detalhes,
            tblCategoriaumId

        }
    ).then(
        ()=>{
            return res.status(201).json({
                erroStatus:false,
                mensagemStatus:'Livro inserido com sucesso.'
            });      
        }
    ).catch((erro)=>{
        return res.status(400).json({
            erroStatus: true,
            erroMensagem: erro
        });
    });

});

router.get('/livro/listarLivro', (req, res)=>{

    livro.findAll()
        .then((livros)=>{
            return res.status(200).json(livros)
        }).catch((erro)=>{
            return res.status(400).json({
                erroStatus: true,
                erroMensagem: erro
            });
        });
});

router.get('/livro/listarLivroCodigo/:id', (req, res)=>{

    const { id } = req.params

    livro.findByPk(id)
        .then((livro)=>{
            return res.status(200).json(livro)
        }).catch((erro)=>{
            return res.status(400).json({
                erroStatus: true,
                erroMensagem: erro
            });
        });
});

router.delete('/livro/excluirLivro/:codigo_livro', (req, res)=>{

    const { codigo_livro } = req.params;

    livro.destroy({
        where:{codigo_livro}
    }).then(
        ()=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:'Livro excluído com sucesso.'
            });

        }).catch((erro)=>{
            return res.status(400).json({
                erroStatus: true,
                erroMensagem: erro
            });
        });

});

router.put('/livro/editarLivro', (req, res)=>{

    const { titulo, preco, imagen_peq, imagen_grd, detalhes, tblCategoriaumId, codigo_livro } = req.body;
    console.log(req.body)
    /** ATUALIZAÇÃO DOS DADOS DE LIVRO **/
    livro.update(
        {
            titulo,
            preco,
            imagen_peq,
            imagen_grd,
            detalhes,
            tblCategoriaumId
        },{where: {codigo_livro}}
    ).then(
        ()=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:'Livro alterado com sucesso.'
            });
        }).catch((erro)=>{
            return res.status(400).json({
                erroStatus: true,
                erroMensagem: erro
            });
        });

});

module.exports = router;