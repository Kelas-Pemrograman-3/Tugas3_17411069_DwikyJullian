const MataKuliah = require('express') ()
const MataKuliahController = require('../controller/MataKuliahc')

MataKuliah.post('/insert', (req, res) => {
  MataKuliahController.insertMataKuliah(req.body)
    .then(result => {
      res.json(result)
    }).catch(err => {
      res.json(err)
    })
})

module.exports = MataKuliah