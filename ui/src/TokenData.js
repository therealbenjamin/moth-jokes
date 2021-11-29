import React, { useState } from "react";
import * as fcl from "@onflow/fcl";

const TokenData = ({ user }) => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const encoded = await fcl.send([
      fcl.script`
        import MothJokesContract from 0xf8d6e0586b0a20c7

        pub fun main() : {String: String} {
          let owner = getAccount(0xf8d6e0586b0a20c7)
          let capability = owner.getCapability<&{MothJokesContract.NFTReceiver}>(/public/NFTReceiver)
          let receiverRef = capability.borrow() ?? panic("Could not borrow reference")

          return receiverRef.getMetadata(id: 1)
        }
      `,
    ]);

    const decoded = await fcl.decode(encoded);
    setData(decoded);
  };

  return (
    user?.loggedIn && (
      <div className="token-data">
        <div className="center">
          <button className="btn-primary" onClick={fetchData}>
            Fetch Data
          </button>
        </div>
        {data && (
          <div>
            {Object.keys(data).map((k, idx) => {
              return (
                <div className="data-wrapper" key={idx}>
                  {k === "name" && (
                    <p>
                      {k}: {data[k]}
                    </p>
                  )}
                  {k === "uri" && (
                    <>
                      <img
                        className="img"
                        src={`https://ipfs.io/ipfs/${data[k].split("://")[1]}`}
                        alt={data[k]}
                      />
                      <button
                        className="btn-secondary clear"
                        onClick={() => setData(null)}
                      >
                        Clear Data
                      </button>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    )
  );
};

export default TokenData;
