const express = require('express');
const router = express.Router();


// RETORNA TODOS OS PEDIDOS
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Retorna os pedidos'
    })
})

// INSERE UM PEDIDOS
router.post('/', (req, res, next) => {
    const pedido = {
        id_pedido: req.body.id_pedido,
        quantidade: req.body.quantidade
    }
    res.status(200).send({
        mensagem: 'O pedido foi criado',
        pedidoCriado: pedido
    })
})

// RETORNA OS DADOS DE UM PEDIDOS
router.get('/:id_pedido', (req, res, next) => {
    const id = req.params.id_produto
    res.status(200).send({
        mensagem: 'Detalhes do pedido',
        id_pedido: id
    })
})

// EXCLUI UM PEDIDOS
router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Pedido excluido'
    })
})

module.exports = router;