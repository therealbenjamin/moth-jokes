import MothJokesContract from 0xf8d6e0586b0a20c7

transaction {
  let receiverRef: &{MothJokesContract.NFTReceiver}
  let minterRef: &MothJokesContract.NFTMinter

  prepare(acct: AuthAccount) {
      self.receiverRef = acct.getCapability<&{MothJokesContract.NFTReceiver}>(/public/NFTReceiver)
          .borrow()
          ?? panic("Could not borrow receiver reference")

      self.minterRef = acct.borrow<&MothJokesContract.NFTMinter>(from: /storage/NFTMinter)
          ?? panic("could not borrow minter reference")
  }

  execute {
      let metadata : {String : String} = {
          "name": "A BUNCH OF FILES",
          "uri": "ipfs://QmPZymJ6UQrKui3KbHkRw51iffZmgw6tSKwEQmHw4ULcbt"
      }
      let newNFT <- self.minterRef.mintNFT()

      self.receiverRef.deposit(token: <-newNFT, metadata: metadata)

      log("NFT Minted and deposited to Account 2's Collection")
  }
}
