const Lands = artifacts.require('./Lands.sol')
const Shoelace = artifacts.require('./Shoelace.sol')

module.exports = function(deployer) {
  deployer.deploy(Lands)
  deployer.deploy(Shoelace)
}
