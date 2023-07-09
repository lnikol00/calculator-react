import { useState } from "react"
import "./home.scss"

type Props = {
    value: string;
}

function Home() {


    return (
        <div className="main-container">
            <div className="calculator-container">
                <div className="screen-container">
                    <span>0</span>
                </div>

                <div className="button-container">
                    <button>C</button>
                    <button>+/-</button>
                    <button>%</button>
                    <button>/</button>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button>x</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>-</button>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>+</button>
                    <button>0</button>
                    <button>,</button>
                    <button>=</button>
                </div>
            </div>
        </div>
    )
}

export default Home
