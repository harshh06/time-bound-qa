import React, { useState } from "react";
import Answer from "./Answer";
import Question from "./Question";
import { questions } from "../helper.js";
import SubmitPage from "./SubmitPage";
import Timer from "./Timer";

const Body = () => {
    let optionsSelectedArr = ["", "", "", ""];
    const [curQuestion, setCurQuestion] = useState(0);
    const [optionsSelected, setOptionsSelected] = useState(optionsSelectedArr);
    const [isSubmit, setIsSubmit] = useState(false);
    const [marksObtained, setMarksObtained] = useState(0);

    const nextQuestion = () => {
        setCurQuestion(
            curQuestion === questions.length - 1 ? curQuestion : curQuestion + 1
        );
    };
    const prevQuestion = () => {
        setCurQuestion(curQuestion === 0 ? curQuestion : curQuestion - 1);
    };

    const submitHandler = () => {
        let marksObtained = 0;
        questions.forEach((question, id) =>
            question.answer == optionsSelected[id]
                ? setMarksObtained((marksObtained += 1))
                : setMarksObtained((marksObtained += 0))
        );
        setIsSubmit(true);
    };

    return (
        <div className="justify-center items-center">
            {isSubmit ? (
                <div className="content-center flex justify-center  ">
                    <SubmitPage
                        marksObtained={marksObtained}
                        total={questions.length}
                    />
                </div>
            ) : (
                <div className="justify-between items-center ">
                    <div className="content-center flex justify-end mr-32 ">
                        <Timer submitHandler={submitHandler} />
                    </div>
                    <div className="flex p-2 m-2 justify-center ">
                        <Answer options={optionsSelected} />
                        <Question
                            curQuestion={questions[curQuestion]}
                            index={curQuestion}
                            setOptionsSelected={setOptionsSelected}
                            optionsSelected={optionsSelected}
                        />
                    </div>
                    <div className="p-2 m-2 flex justify-between px-20">
                        <div>
                            <button
                                className="p-2 mr-10 m-2 border rounded-lg shadow-lg active:bg-green-400 bg-green-300 w-28 "
                                onClick={() => prevQuestion()}>
                                Prev
                            </button>
                            <button
                                className="p-2 m-2 border rounded-lg shadow-lg active:bg-green-400 bg-green-300 w-28 "
                                onClick={() => nextQuestion()}>
                                Next
                            </button>
                        </div>

                        <button
                            className="p-2 m-2 mr-5 border rounded-lg shadow-lg active:bg-green-400 bg-red-400 w-28 "
                            onClick={() => submitHandler()}>
                            Submit
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Body;
