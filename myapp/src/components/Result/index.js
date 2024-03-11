import './index.css'

const Result = () => {

    const renderTimer = () => {
        const minutes = localStorage.getItem("min")
        const seconds = localStorage.getItem("sec")
        return `${minutes}:${seconds}`
    }
    const totalScore = localStorage.getItem("score")

    return <div className="result-main-container">
         <div className="result-container">
         <h1 className="react-tiles-heading">React Tiles</h1>
        <div className="score-time-container">
        <p className="score">Score: {totalScore}</p>
        <p className="time">Time: {renderTimer()}</p>
      </div>
        <div className="result-bottom-container">
            <h1 className="game-finished">Game Finished</h1>
            <h1 className="total-score">Score: {totalScore}</h1>
            <h1 className="time-taken">Time Taken: {renderTimer()}</h1>
        </div>
         </div>
    </div>
}

export default Result