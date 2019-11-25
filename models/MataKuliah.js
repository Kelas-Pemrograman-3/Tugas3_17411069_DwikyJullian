const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MataKuliahSchema = new Schema({
  NamaMK: {
    type: String
  },
  Jam: {
    type: String
  },
  Ruang: {
    type: String
  },
  IdDosen: {
    type: String
  },
  NamaDosen: {
    type: String
  }
})

module.exports = mongoose.model('MataKuliah', MataKuliahSchema)