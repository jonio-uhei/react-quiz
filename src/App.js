import React,{useState} from 'react';
import Answer from './components/Answer';

function App() {

  const questions =[
    {
      questionText:'数学Ⅲで一番難しい分野は',
      answerOptions:[
        {answerText:'微分積分',isCorrect:true},
        {answerText:'ベクトル',isCorrect:false},
        {answerText:'2次曲線',isCorrect:false},
      ],
    },
    {
      questionText:'この中で難易度が低いプログラミング言語は',
      answerOptions:[
        {answerText:'React.js',isCorrect:false},
        {answerText:'Angular.js',isCorrect:false},
        {answerText:'HTML',isCorrect:true},
      ],
    },
    {
      questionText:'この中でYouTuberのゲーム実況者は',
      answerOptions:[
        {answerText:'Taiman',isCorrect:false},
        {answerText:'ガッチマン',isCorrect:true},
        {answerText:'ハクア',isCorrect:false},
      ],
    },
  ];

  const [currentQuestion,setCurrentQuestion] = useState(0);

  const [showScore,setShowScore] = useState(false);

  const [score,setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {

    if(isCorrect === true){
      alert('正解です');
      setScore(score+1);
    }else{
      alert('不正解です');
    }

    const nextQuestion = currentQuestion + 1;

    if(nextQuestion < questions.length){
      setCurrentQuestion(nextQuestion);
    }else{
      setShowScore(true);

    }
  }

  return (

    <div className="App">
      {
        showScore ? (
          <p>お疲れ様でした!<br></br><span class="correct">3問中{score}問</span>正解です</p>
        )
        :
        (
          <Answer
            handleAnswerButtonClick={handleAnswerButtonClick}
            questions={questions}
            currentQuestion={currentQuestion}
          />
        )
      }
    </div>
  );
}

export default App;
