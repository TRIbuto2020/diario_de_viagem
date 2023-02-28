import React from "react"
import data from "./data"
import Card from "./components/Card"
import Header from "./components/Header"

export default function App() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                {...item}
            />    
        )
    })        
    
    return (
        <div>
            <Header/>
            {cards}
        </div>
    )
}