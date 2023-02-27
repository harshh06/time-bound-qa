import React from "react";

const Answer = ({ options }) => {
    return (
        <div className="border p-2 m-2 rounded-lg shadow-lg bg-gray-100">
            <h1 className="p-2 m-2 items-center font-semibold">
                {" "}
                Options Selected
            </h1>
            {options.map((option, id) => {
                return (
                    <div key={id} className="p-2 m-2 ">
                        <h1 className="border rounded-lg p-2 bg-slate-50">
                            {/* Checks for which question, option needs to be updated */}
                            {id + 1} : {option === "" ? "Not Selected" : option}
                        </h1>
                    </div>
                );
            })}
        </div>
    );
};

export default Answer;
