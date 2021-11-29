import React, { useState } from "react";
import Auth from "./Auth";
import TokenData from "./TokenData";
import "./App.css";

function App() {
  const [user, setUser] = useState({ loggedIn: null });

  return (
    <div className="App">
      <Auth user={user} setUser={setUser} />
      <TokenData user={user} />
    </div>
  );
}

export default App;
