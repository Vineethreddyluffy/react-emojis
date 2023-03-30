// Write your code here.
import './index.css'

const NavBar = props => {
  const {countOf, topper, onOrOff} = props
  return (
    <div className="nav-cont">
      <div className="nav-image-cont">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          className="nav-img"
          alt="emoji logo"
        />
        <h1 className="nav-para">Emoji Game</h1>
      </div>
      {onOrOff ? (
        <div className="nav">
          <p className="nav-para">Score: {countOf}</p>
          <p className="nav-para">Top Score: {topper}</p>
        </div>
      ) : null}
    </div>
  )
}
export default NavBar
