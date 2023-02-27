import React from "react";

const Question = ({
    curQuestion,
    index,
    setOptionsSelected,
    optionsSelected,
}) => {
    const [...options] = curQuestion.options; // destructuring the options array
    // console.log(options);
    return (
        <div className="border p-2 m-2 w-3/4 h-full justify-center rounded-lg shadow-lg bg-gray-100">
            <h1 className="p-2 m-2 text-center font-semibold">
                Question: {index + 1}
            </h1>
            <p className="p-2 m-2 ">{curQuestion.question}</p>

            {/* Mapping to display options  */}

            {Object.entries(options).map(([key, value]) => {
                return (
                    <form key={key} className="flex p-2 ">
                        <button
                            className="flex p-2 m-2 border w-1/2 focus:bg-green-400 rounded-lg shadow-lg bg-slate-50 hover:bg-green-200"
                            onClick={(e) => {
                                e.preventDefault();
                                const newOptionsSelected = optionsSelected.map(
                                    (option, id) => {
                                        console.log(id, " ", key);
                                        if (id == index) {
                                            option = value;
                                        }
                                        return option;
                                    }
                                );
                                setOptionsSelected(newOptionsSelected);
                            }}>
                            <h1 className="pr-2">{Number(key) + 1}. </h1>
                            <h1>{value}</h1>
                        </button>
                    </form>
                );
            })}
        </div>
    );
};

export default Question;
