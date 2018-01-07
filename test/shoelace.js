const Shoelace = artifacts.require('./Shoelace.sol')

contract('Shoelace Theorem', account => {
  let instance

  before(async () => {
    instance = await Shoelace.deployed()
  })

  it('should fail calculating shoelace theorem with less than 6 coords', async () => {
    const coords = [3, 4, 7, 5]

    try {
      const result = await instance.shoelace(coords)
      throw Error('not suppose to be here')
    } catch (err) {
      const actual = err.message
      const expected = 'VM Exception while processing transaction: revert'

      assert.equal(actual, expected)
    }
  })

  it('should fail calculating shoelace theorem with coords[] with length count that is not divisible by two', async () => {
    const coords = [3, 4, 7, 5, 2, 1, 8]

    try {
      const result = await instance.shoelace(coords)
      throw Error('not suppose to be here')
    } catch (err) {
      const actual = err.message
      const expected = 'VM Exception while processing transaction: revert'

      assert.equal(actual, expected)
    }
  })

  it('should be good with 6 coordinates', async () => {
    const coords = [1, 2, 3, 4, 5, 6]

    try {
      const result = await instance.shoelace(coords)

      const actual = result
      const expected = true

      assert.equal(actual, expected)
    } catch (e) {
      throw Error('not suppose to be here')
    }
  })
})
