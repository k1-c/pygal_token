const PygalToken = artifacts.require("./PygalToken.sol");

module.exports = function(deployer, network, accounts) {
    const name = "PygalToken";
    const symbol = "PGT";
    const decimals = 18;
    const value = 1000000000;
    const initSupply = web3.utils.toBN(String(BigInt(value)*BigInt(10**decimals)));
    
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