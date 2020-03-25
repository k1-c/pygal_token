const PygalToken = artifacts.require("./PygalToken.sol");

module.exports = function(deployer, network, accounts) {
    const name = "PygalToken";
    const symbol = "PGT";
    const decimals = 18;
    const initSupply = web3.utils.toBN('1000000000'+'000000000000000000');
    
    return deployer.then(()=>{
        return deployer.deploy(
            PygalToken,
            name,
            symbol,
            decimals,
            initSupply
        );
    });
}