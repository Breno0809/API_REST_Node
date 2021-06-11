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
    res.status(200).send({
        mensagem: 'O pedido foi criado'
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