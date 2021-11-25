
import MothJokesContract from 0xf8d6e0586b0a20c7
 pub fun main() : {String : String} {
    let nftOwner = getAccount(0xf8d6e0586b0a20c7)
    let capability = nftOwner.getCapability<&{MothJokesContract.NFTReceiver}>(/public/NFTReceiver)

    let receiverRef = capability.borrow()
        ?? panic("Could not borrow the receiver reference")

    return receiverRef.getMetadata(id: 1)
}
