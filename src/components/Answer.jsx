import React from 'react';

    const Answer = ({handleAnswerButtonClick,questions,currentQuestion}) =>{
        return(
            <>
                <h1>3択クイズ</h1>
        <h2><span>第{currentQuestion+1}問</span><br></br>問題:{questions[currentQuestion].questionText}</h2>
                <ul> 
                {
                    questions[currentQuestion].answerOptions.map((answerOption,key)=>(
                        <li 
                            key={key}
                            onClick={()=>handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}
                        </li>)
                    )
                }
                </ul>
            </>
        );
    };

export default Answer;