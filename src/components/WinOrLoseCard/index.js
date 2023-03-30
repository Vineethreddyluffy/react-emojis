import './index.css'

const GetWinOrLose = props => {
  const {winOrLose, total, onWin, onLose} = props

  const winButton = () => {
    onWin()
  }
  const loseButton = () => {
    onLose()
  }
  return winOrLose ? (
    <div className="lose-cont">
      <div className="text-cont">
        <h1 className="res-para1">You Won</h1>
        <p className="res-para2">Best Score</p>
        <p className="res-para3">{total}/12</p>
        <button type="button" className="button" onClick={winButton}>
          Play Again
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
        alt="win or lose"
        className="lose-image"
      />
    </div>
  ) : (
    <div className="lose-cont">
      <div className="text-cont">
        <h1 className="res-para1">You Lose</h1>
        <p className="res-para2">Score</p>
        <p className="res-para3">{total}/12</p>
        <button type="button" className="button" onClick={loseButton}>
          Play Again
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
        alt="win or lose"
        className="lose-image"
      />
    </div>
  )
}
export default GetWinOrLose
