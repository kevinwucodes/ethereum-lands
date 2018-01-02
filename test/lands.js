const Lands = artifacts.require('./Lands.sol')

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

contract(`Lands with one user`, accounts => {
  let instance
  let createUserTx

  before(async () => {
    instance = await Lands.deployed()
    createUserTx = await instance.createUser('hello Smith')
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
})
