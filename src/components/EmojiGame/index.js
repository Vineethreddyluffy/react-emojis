/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'

import NavBar from '../NavBar'

import GetCard from '../EmojiCard'

import GetWinOrLose from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {present: '', count: 0, isCorrect: true, resultOf: '', top: 0}

  afterShuffle = id => {
    const {present, count} = this.state
    if (id !== present) {
      this.setState(prevState => ({
        count: prevState.count + 1,
        present: id,
        isCorrect: true,
      }))
      if (count === 11) {
        this.setState({isCorrect: false, resultOf: true})
      }
    } else {
      this.setState({isCorrect: false, resultOf: false})
    }
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  onWin = () => {
    const {count, top} = this.state
    if (count > top) {
      this.setState({top: count, count: 0, isCorrect: true})
    } else {
      this.setState({count: 0, isCorrect: true})
    }
  }

  onLose = () => {
    const {count, top} = this.state
    if (count > top) {
      this.setState({top: count, count: 0, isCorrect: true})
    } else {
      this.setState({count: 0, isCorrect: true})
    }
  }

  render() {
    const newList = this.shuffledEmojisList()
    const {count, isCorrect, resultOf, top} = this.state
    return (
      <div className="cont">
        <div className="cont-of">
          <NavBar countOf={count} topper={top} onOrOff={isCorrect} />
          <div className="inner-cont">
            {isCorrect ? (
              <ul className="card-cont">
                {newList.map(each => (
                  <GetCard
                    key={each.id}
                    item={each}
                    afterShuffle={this.afterShuffle}
                  />
                ))}
              </ul>
            ) : (
              <GetWinOrLose
                winOrLose={resultOf}
                total={count}
                onWin={this.onWin}
                onLose={this.onLose}
              />
            )}
          </div>
        </div>
      </div>
    )
  }
}
export default EmojiGame
