// dao para realizar los test

const mongoose = require('mongoose')
const UserDao = require('../src/Daos/mongo/user.mongo')
const chai = require('chai')

mongoose.connect('mongodb://127.0.0.1:27017/ecommerce', { useNewUrlPaser: true })
const expect = chai.expect

describe('Set de test User en Chai', () => {
  before(function () {
    this.userDao = new UserDao()
  })

  beforeEach(function () {
    this.timeout(2000)
  })

  it('Prueba para obtener los usuarios en un array', async () => {
    // const result = await this.userDao.get()
    const result = await this.userDao.get2()
    // console.log("🚀 ~ file: chai.test.js:23 ~ it ~ result:", result)
    expect(result).to.be.deep.equal([])
  }).timeout(10000)
})
