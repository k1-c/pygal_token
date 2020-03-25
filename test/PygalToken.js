const PygalToken = artifacts.require("./PygalToken.sol");

contract("PygalToken", accounts => {
    it("...should put 1000000000ST in the first account.", async () => {
        //コントラクトのインスタンスを取得
        const pygalTokenInstance = await PygalToken.deployed();

        //account[0]のトークンの残高を取得
        let balance = await pygalTokenInstance.balanceOf(accounts[0]);

        console.log(balance)

        //桁数が大きいのでether単位(10^18)に変換
        balance = web3.utils.fromWei(balance, "ether");

        console.log(balance);

        //残高数と数字100を比較
        //同じであれば合格
        assert.equal(balance, 1000000000, "First account don't have 1000000000 PGT.");
    });
});