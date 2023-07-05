import "./home.scss"
import { Buttons } from "./ButtonData"

function Home() {
    return (
        <div className="main-container">
            <div className="calculator-container">
                <div className="screen-container">
                    <input />
                </div>

                <div className="button-container">
                    {Buttons.map((data) => {
                        return (
                            <button key={data.id}>{data.button}</button>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Home
