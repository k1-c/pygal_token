const PygalToken = artifacts.require("./PygalToken.sol");

contract("PygalToken", accounts => {
    // コントラクトのインスタンスのaccount[0]のトークン残高が1000000000になっているかどうか
    it("...should put 1000000000PGT in the first account.", async () => {
        const pygalTokenInstance = await PygalToken.deployed();
        //account[0]のトークンの残高を取得
        let balance = await pygalTokenInstance.balanceOf(accounts[0]);
        //桁数が大きいのでether単位(10^18)に変換
        balance = web3.utils.fromWei(balance, "ether");

        assert.equal(balance, 1000000000, "First account don't have 1000000000 PGT.");
    });
});