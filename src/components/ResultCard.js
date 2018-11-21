import React, {useEffect} from 'react'
import delay from 'delay'
import '../styles/ResultCard.sass'

const resultsData = [
  {
    minScore: 80,
    emo: 'trophy',
    description: 'Вау! Перед вами настоящий чемпион!'
  },
  {
    minScore: 60,
    emo: 'cool',
    description: 'Отличный резльтат, на который могут расчитывать адвансы и оллстары'
  },
  {
    minScore: 40,
    emo: 'ok',
    description: 'Неплохо! Еще немного поработать над бейсиком и будет отлично'
  },
  {
    minScore: 20,
    emo: 'facepalm',
    description: 'Ну такое себе. Полуфинал новисов, если очень повезет'
  },
  {
    minScore: -Infinity,
    emo: 'poo',
    description: 'Здесь свингом не пахнет'
  }
]

async function animateScore(score) {
  const scoreValue = document.getElementById('score-value')
  const d = Math.ceil(1000 / (score + 1))
  for (let i = 0; i <= score; i++) {
    scoreValue.innerText = i.toString()
    await delay(d)
  }
}

export default function ResultCard({capturedImage, score}) {
  const capturedImageStyle = {backgroundImage: `url("${capturedImage}")`}
  let displayScore = (Number(score) || 0).toFixed()
  if ((displayScore) < 0) displayScore = 0
  if ((displayScore) > 100) displayScore = 100
  const result = resultsData.find(result => displayScore > result.minScore)

  useEffect(() => animateScore(displayScore), [])

  return (
    <div className="ResultCard">
      <div className="captured-image" style={capturedImageStyle}/>
      <h1>Результат</h1>
      <h2>
        <span className="score">
          <span id="score-value"/>
          <span className="percent">%</span>
        </span>
        свинг контента
      </h2>
      <div className={'score-emo ' + result.emo}/>
      <p>{result.description}</p>
    </div>
  )
}
