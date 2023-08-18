// dao para realizar los test

const mongoose = require('mongoose')
const UserDao = require('../src/Daos/mongo/user.mongo')
const { userService } = require('../src/service/index.service')
const Assert = require('asser t')

mongoose.connect('mongodb://127.0.0.1:27017/ecommerce', { useNewUrlPaser: true })
// mongoose.connect(process.env.MONGO_URL)

const assert = Assert.strict

describe('Testing de User Dao', () => {
  before(function () {
    this.userDao = new UserDao()
  })

  beforeEach(function () {
    this.timeout(2000)
  })

  it('El dao debe traer un usuario correctamente', async function () {
    const result = await this.userDao.get2()
    // const result = await userService.get()
    // console.log('🚀 ~ file: Users.test.js:21 ~ result:', result)
    assert.strictEqual(Array.isArray(result), true)
  }).timeout(10000)

  // it('El dao debe crear un usuario correctamente', async function () {
  //   const userMock = {
  //     first_name: 'Javo2',
  //     last_name: 'Ram2',
  //     email: 'javo2@a.com',
  //     password: 'javo2123'
  //   }
  //   const result = await this.userDao.add(userMock)
  //   const user = await this.userDao.getByMail(result.email)
  //   // console.log('🚀 ~ file: Users.test.js:35 ~ user:', user)
  //   assert.strictEqual(typeof user, 'object')
  // }).timeout(2000)

  it('El dao debe modificar un usuario', async () => {
    const _id = ''
    const userUpdate = {
      first_name: 'Federico'
    }
    const result = await this.userDao.update(_id, userUpdate)
    const user = await this.userDao.getBy({ _id })
    assert.strictEqual(user.first_name, userUpdate.first_name)
  }).timeout(2000)

  it('El dao debe eliminar un usuario', async () => {
    const _id = ''
    const result = await this.userDao.delete({ id })
    assert.strictEqual(result._id, _id)
    console.log(result)
  }).timeout(2000)
})
