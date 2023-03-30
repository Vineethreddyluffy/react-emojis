import './index.css'

const GetCard = props => {
  const {item, afterShuffle} = props
  const {emojiUrl, emojiName, id} = item
  const onClickEmoji = () => {
    afterShuffle(id)
  }
  return (
    <li className="list-item">
      <button type="button" className="card-button">
        <img
          src={emojiUrl}
          alt={emojiName}
          className="image1"
          onClick={onClickEmoji}
        />
      </button>
    </li>
  )
}
export default GetCard
