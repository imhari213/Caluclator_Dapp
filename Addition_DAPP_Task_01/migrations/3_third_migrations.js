
var Demo = artifacts.require("./Addition.sol");

module.exports = function(deployer) {
  deployer.deploy(Demo);
};
