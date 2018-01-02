const Lands = artifacts.require('./Lands.sol')

module.exports = function(deployer) {
  deployer.deploy(Lands)
}
