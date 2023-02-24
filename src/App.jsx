import React from "react";
import Navbar from "./Nav";
import Card from "./Card";
import data from "./data";

function App() {
    const cards = data.map((item) => {
        return <Card key={item.id} item={item} />;
    });
    return (
        <div className="container">
            <Navbar />
            {cards}
        </div>
    );
}

export default App;
