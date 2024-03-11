import { useNavigate } from "react-router-dom";
import { useEffect ,useState} from "react";
import Card from "../Card";
import "./index.css";

const emojisList = [
  {
    id: 0,
    matched:false,
    emojiUrl:
      "https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-img.png",
  },
  {
    id: 1,
    matched:false,
    emojiUrl:
      "https://assets.ccbp.in/frontend/react-js/face-with-head-bandage-img.png",
  },
  {
    id: 2,
    matched:false,
    emojiUrl: "https://assets.ccbp.in/frontend/react-js/face-with-hugs-img.png",
  },
  {
    id: 3,
    matched:false,
    emojiUrl:
      "https://assets.ccbp.in/frontend/react-js/face-with-laughing-img.png",
  },
  {
    id: 4,
    matched:false,
    emojiUrl:
      "https://assets.ccbp.in/frontend/react-js/face-with-laughing-with-hand-infront-mouth-img.png",
  },
  {
    id: 5,
    matched:false,
    emojiUrl: "https://assets.ccbp.in/frontend/react-js/face-with-mask-img.png",
  },
  {
    id: 6,
    matched:false,
    emojiUrl:
      "https://assets.ccbp.in/frontend/react-js/face-with-silence-img.png",
  },
  {
    id: 7,
    matched:false,
    emojiUrl:
      "https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-and-winking-eye-img.png",
  },
  {
    id: 8,
    matched:false,
    emojiUrl:
      "https://assets.ccbp.in/frontend/react-js/grinning-face-with-sweat-img.png",
  },
  {
    id: 9,
    matched:false,
    emojiUrl:
      "https://assets.ccbp.in/frontend/react-js/smiling-face-with-heart-eyes-img.png",
  },
  {
    id: 10,
    matched:false,
    emojiUrl: "https://assets.ccbp.in/frontend/react-js/grinning-face-img.png",
  },
  {
    id: 11,
    matched:false,
    emojiUrl:
      "https://assets.ccbp.in/frontend/react-js/smiling-face-with-star-eyes-img.png",
  },
  {
    id: 12,
    matched:false,
    emojiUrl:
      "https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-img.png",
  },
  {
    id: 13,
    matched:false,
    emojiUrl:
      "https://assets.ccbp.in/frontend/react-js/face-with-head-bandage-img.png",
  },
  {
    id: 14,
    matched:false,
    emojiUrl: "https://assets.ccbp.in/frontend/react-js/face-with-hugs-img.png",
  },
  {
    id: 15,
    matched:false,
    emojiUrl:
      "https://assets.ccbp.in/frontend/react-js/face-with-laughing-img.png",
  },
  {
    id: 16,
    matched:false,
    emojiUrl:
      "https://assets.ccbp.in/frontend/react-js/face-with-laughing-with-hand-infront-mouth-img.png",
  },
  {
    id: 17,
    matched:false,
    emojiUrl: "https://assets.ccbp.in/frontend/react-js/face-with-mask-img.png",
  },
  {
    id: 18,
    matched:false,
    emojiUrl:
      "https://assets.ccbp.in/frontend/react-js/face-with-silence-img.png",
  },
  {
    id: 19,
    matched:false,
    emojiUrl:
      "https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-and-winking-eye-img.png",
  },
  {
    id: 20,
    matched:false,
    emojiUrl:
      "https://assets.ccbp.in/frontend/react-js/grinning-face-with-sweat-img.png",
  },
  {
    id: 21,
    matched:false,
    emojiUrl:
      "https://assets.ccbp.in/frontend/react-js/smiling-face-with-heart-eyes-img.png",
  },
  {
    id: 22,
    matched:false,
    emojiUrl: "https://assets.ccbp.in/frontend/react-js/grinning-face-img.png",
  },
  {
    id: 23,
    matched:false,
    emojiUrl:
      "https://assets.ccbp.in/frontend/react-js/smiling-face-with-star-eyes-img.png",
  },
];

const Board = () => {
    const [tiles,setTiles] = useState([])
    const [firstCard,setFirstCard] = useState(null)
    const [secondCard,setSecondCard] = useState(null)
    const [score,setScore] = useState(0)
    const [time,setTime] = useState(0)
    const navigate = useNavigate()
    
    useEffect(()=> {
         const userName = JSON.parse(localStorage.getItem('name'))
        if(userName === ""){
            navigate('/')
        }
        else{
            shuffledEmojisList()
        }
    },[navigate])

    const shuffledEmojisList = () => {
        const shuffledList =  emojisList.sort(() => Math.random() - 0.5)
        setTiles(shuffledList)
    }

   const renderUserName = ()=>{
      const user = JSON.parse(localStorage.getItem('name'))
      return `Welcome ${user}`
   }
   
   const getCard = (card) => {
     firstCard === null ? setFirstCard(card) : setSecondCard(card)
   }

   useEffect(() => {
      if(score === 12){
         navigate("/result")
      }
   }, score);
   
   useEffect(() => {
      const timerId =  setInterval(() => {
          setTime(prevTime => prevTime + 1)
       }, 1000);

       return () => clearInterval(timerId)
   },[]);

   useEffect(() => {
       if(firstCard && secondCard){
        if(firstCard.emojiUrl === secondCard.emojiUrl){
            setTiles(prevTiles => {
                return prevTiles.map((eachTile) => {
                    if(eachTile.emojiUrl === firstCard.emojiUrl){
                        return {...eachTile,matched:true}
                    }
                    else{
                        return eachTile
                    }
                })
            }) 
            setScore(prevScore => prevScore+1)
            resetActiveCards()
         }
         else{
            if(score > 0){
              setScore(prevScore => prevScore-1)
            }
            setTimeout(() => {
                resetActiveCards()
            }, 1000);
         }
       }
   }, [firstCard,secondCard]);
   
   const renderTimer = ()=>{
      const min = Math.floor(time/60)
      const sec = Math.floor(time%60)

      const minutes = min < 10 ? `0${min}` : min 
      const seconds = sec < 10 ? `0${sec}` : sec 
      localStorage.setItem("min",minutes)
      localStorage.setItem("sec",seconds)
      return `${minutes}:${seconds}`
   }

   const resetActiveCards = () => {
      setFirstCard(null)
      setSecondCard(null)
   }
   
   localStorage.setItem('score',score)

  return (
    <div className="game-container">
      <h1 className="game-heading">Mahajong Game</h1>
      <div className="score-time-container">
        <p className="score">Score: {score}</p>
        <p className="time">Time: {renderTimer()}</p>
      </div>
      <div className="game-board-container">
        <h1 className="name">{renderUserName()}</h1>
        <div className="tiles-container">
        {emojisList.map((eachEmoji) => (
          <Card isFlipped={eachEmoji === firstCard || eachEmoji === secondCard || eachEmoji.matched} getCard={getCard} key={eachEmoji.id} emojiDetails={eachEmoji} />
        ))}
        </div>
      </div>
    </div>
  );
};

export default Board;
