const knex = require("../db/knex.js");

module.exports = {
  index: function(req, res) {
    let page = 1;
    if(req.query.page){
      page = Number(req.query.page);
    }
    console.log(process.env);
    knex('transactions').orderBy('id', 'asc').offset((page-1) * 50).limit(50).then((results)=>{
      res.json(results);
    }).catch((err)=>{
      res.status(400).send({message: err})
    })
  },

  getOne: function(req, res){
    knex('transactions').where('id', req.params.id).first()
      .then((result)=>{
        res.json(result);
      }).catch((err)=>{
        res.status(400).send({message: err})
      })
  },

  create: function(req, res){
    knex('transactions').insert({
      amount: req.body.amount,
      user_id: req.decoded.id,
      type: req.body.type,
      business_name: req.body.business_name
    }, '*').then((results)=>{
      res.json(results[0]);
    }).catch((err)=>{
      res.status(422).send({message: err})
    })
  },

  update: function(req, res){
    knex('transactions').where('id', req.params.id).update({
      amount: req.body.amount,
      type: req.body.type,
      business_name: req.body.business_name
    }, '*').then((results)=>{
      res.json(results[0]);
    }).catch((err)=>{
      res.status(422).send({message: err})
    })
  },

  delete: function(req, res){
    knex('transactions').del().where('id', req.params.id).then(()=>{
      res.status(200).send({message: "Successfully deleted transaction"})
    }).catch((err)=>{
      res.status(422).send({message: err})
    })
  }
}
