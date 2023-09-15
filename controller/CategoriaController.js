const express = require('express');

const categoria = require('../model/CategoriaModel');

const router = express.Router();

router.post('/categoria/cadastrarCategoria', (req, res)=>{

    let { nome_categoria } = req.body; //destruct - substitui oq vem do body (nome_categoria), tem o mesmo nome na tabela

    categoria.create(
        {nome_categoria} 
    ).then(
        ()=>{
            return res.status(201).json({
                erroStatus:false,
                mensagemStatus:'Categoria inserida com sucesso.'
            });
        }
    ).catch((erro)=>{
        return res.status(400).json({
            erroStatus: true,
            erroMensagem: erro
        });
    });
}
);

router.get('/categoria/listarCategoria', (req, res)=>{
    categoria.findAll()
            .then(
                (categorias)=>{
                    return res.status(200).json(categorias);
                }
            ).catch((erro)=>{
                return res.status(400).json({
                    erroStatus: true,
                    erroMensagem: erro
                });
            });
}
);

router.get('/categoria/listarCategoria/:codigo_categoria', (req, res)=>{

    let {codigo_categoria} = req.params;

    categoria.findByPk(codigo_categoria)
            .then(
                (categoria)=>{
                    return res.status(200).send(categoria);
                }
            ).catch((erro)=>{
                return res.status(400).json({
                    erroStatus: true,
                    erroMensagem: erro
                });
            });
});

router.put('/categoria/alterarCategoria', (req, res)=>{

    let {codigo_categoria, nome_categoria} = req.body;

    categoria.update(
            {nome_categoria},
            {where: {codigo_categoria}}
    ).then(
        ()=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:'Categoria alterada com sucesso.'
            });
        }
    ).catch((erro)=>{
        return res.status(400).json({
            erroStatus: true,
            erroMensagem: erro
        });
    });
}
);

router.delete('/categoria/excluirCategoria/:codigo_categoria', (req, res)=>{

    let {codigo_categoria} = req.params;

    categoria.destroy(
        {where: {codigo_categoria}}
    ).then(
        ()=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:'Categoria excluída com sucesso.'
            });
        }).catch((erro)=>{
        return res.status(400).json({
            erroStatus: true,
            erroMensagem: erro
        });
    });
}
);

module.exports = router;