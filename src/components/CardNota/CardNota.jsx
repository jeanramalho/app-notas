import React, { Component } from 'react'
import "./CardNota.css"

class CardNota extends Component {
    render() {
        return (
            <section className='card-nota'>
                <header>
                    <h3>Título</h3>
                </header>
                <p>Escreva sua Nota</p>
            </section>
        )
    }
}

export default CardNota