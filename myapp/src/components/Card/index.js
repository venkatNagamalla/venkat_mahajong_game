import "./index.css";

const Card = (props) => {
  const { emojiDetails, getCard, isFlipped } = props;
  const { id, emojiUrl} = emojiDetails;

  const onCardClick = () => {
    getCard(emojiDetails);
  };
  
  const renderFrontImg = () => (
        <div className="front-card">
          <img className="front-img" src={emojiUrl} alt={id} />
       </div>
  )
  
  const renderBackImg = () => (
    <button onClick={onCardClick} className="back-card">
    <img
      className="back-img"
      src="https://cdn-icons-png.flaticon.com/512/5184/5184592.png"
      alt={`emoji${id}`}
    />
  </button>
  )

  return (
    <div className="card-container">
       {isFlipped ? renderFrontImg() : renderBackImg()}
    </div>
  );
};

export default Card;
