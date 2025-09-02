import react, { useState } from "react"
import './Star.css';

const Star = () => {
    const [ColerIndex, setColorIndex] = useState(0)
    const [Hover,setHover]=useState(0);
    console.log(ColerIndex);

    return (
        <>
            <div className="main_container">
                <div>
                    {
                        Array(10).fill(0).map((_, i) => {
                            return (
                                <span className={`star ${Hover==0 && i < ColerIndex||i<Hover ? "gold" : ""}`}
                                    key={i}
                                    onClick={() => setColorIndex(i + 1)}
                                    onMouseEnter={() => setHover(i + 1)}
                                    onMouseLeave={() => setHover(0)}
                                >&#9733;</span>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default Star;