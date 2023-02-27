import React from "react";

const SubmitPage = ({ marksObtained, total }) => {
    return (
        <div className=" justify-center  p-10 m-10 w-1/2 text-center h-full  rounded-lg shadow-lg bg-green-300">
            <h1 className="p-2 m-2 font-semibold text-gray-700">
                Marks Obtained : {marksObtained}
            </h1>
            <h1 className="p-2 m-2 font-semibold text-gray-700">
                Total Marks : {total}
            </h1>
            <h1 className="p-2 m-2 font-semibold text-gray-700">
                Precentage: {(marksObtained / total) * 100} %
            </h1>
        </div>
    );
};

export default SubmitPage;
