const Lands = artifacts.require('./Lands.sol')

const acct1 = '0x627306090abab3a6e1400e9345bc60c78a8bef57'
const acct2 = '0xf17f52151ebef6c7334fad080c5704d77216b732'
const acct3 = '0xc5fdf4076b8f3a5357c5e395ab970b5b54098fef'

contract(`Lands initialized`, accounts => {
  let instance

  before(async () => {
    instance = await Lands.deployed()
  })

  it('should have NO users', async () => {
    const counts = await instance.getUserCount.call()
    const actual = counts.toNumber()
    const expected = 0

    assert.equal(actual, expected)
  })
})

contract(`Lands with one user from account #2`, accounts => {
  let instance
  let createUserTx

  before(async () => {
    instance = await Lands.deployed()
    createUserTx = await instance.createUser('hello Smith', { from: acct2 })
  })

  it('should have one user', async () => {
    const counts = await instance.getUserCount.call()
    const actual = counts.toNumber()
    const expected = 1

    assert.equal(actual, expected)
  })

  it('should get the index of the one user', async () => {
    const { userIndex } = createUserTx.logs[0].args

    const actual = userIndex.toNumber()
    const expected = 1

    assert.equal(actual, expected)
  })

  it('should get the address of the user from its index', async () => {
    const user = await instance.getUserAddress(0)

    const actual = user
    const expected = '0xf17f52151ebef6c7334fad080c5704d77216b732'

    assert.equal(actual, expected)
  })
})
