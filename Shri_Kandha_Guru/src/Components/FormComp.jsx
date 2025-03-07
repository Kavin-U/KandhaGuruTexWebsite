import React, { useState } from "react";

export default function FormComp() {
  const [transferDetails, SetTransferDetails] = useState({
    Invoice_no: "",
    To: "",
    Works: "",
  });
  const [Meters, SetMeters] = useState([]);
  const [meterInput, setMeterInput] = useState(""); // Temporary state for the input value

  const handleChange = (e) => {
    SetTransferDetails((prevDetails) => ({
      ...prevDetails,
      [e.target.name]: e.target.value,
    }));
  };

  const handleAddMeter = () => {

    if (meterInput.trim() !== "") {
      SetMeters((prevMeters) => [...prevMeters, meterInput]);
      setMeterInput(""); // Clear the input field after adding
    }
  };

  const clearTransferDetails = () => {
    SetTransferDetails({
      Invoice_no: "",
      To: "",
      Works: "",
    });
  };

  return (
    <div className="w-[50%] flex flex-col p-3 gap-6">
      {/* First Form */}
      <form
        className="w-[70%] rounded-lg mx-auto border-2 border-gray-500 border-opacity-20 p-3 flex flex-col gap-3"
        onSubmit={(e) => e.preventDefault()}
      >
        <p className="text-xl">Add Invoice</p>
        <div className="flex flex-col">
          <label>Invoice No</label>
          <input
            type="text"
            name="Invoice_no"
            onChange={handleChange}
            value={transferDetails.Invoice_no}
            className="border-2 border-gray-700 rounded-md border-opacity-30 focus:outline-none p-1"
          />
        </div>
        <div className="flex flex-col">
          <label>To</label>
          <input
            type="text"
            name="To"
            onChange={handleChange}
            value={transferDetails.To}
            className="border-2 border-gray-700 rounded-md border-opacity-30 focus:outline-none p-1"
          />
        </div>
        <div className="flex flex-col">
          <label>Works</label>
          <textarea
            name="Works"
            onChange={handleChange}
            value={transferDetails.Works}
            className="border-2 min-h-16 max-h-20 max-w-full border-gray-700 rounded-md border-opacity-30 focus:outline-none p-1"
          ></textarea>
        </div>
        <div className="flex justify-end gap-5">
          <button type="submit" className="px-3 py-1 bg-blue-400 rounded-lg">
            Add
          </button>
          <button
            type="button"
            onClick={clearTransferDetails}
            className="px-3 py-1 bg-gray-400 rounded-lg"
          >
            Clear
          </button>
        </div>
      </form>

      {/* Second Form */}
      <form
        className="w-[70%] rounded-lg mx-auto border-2 border-gray-500 border-opacity-20 p-3 flex flex-col gap-3"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="flex flex-col">
          <label>Meters</label>
          <input
            type="text"
            value={meterInput}
            onChange={(e) => setMeterInput(e.target.value)}
            className="border-2 border-gray-700 rounded-md border-opacity-30 focus:outline-none p-1"
            
          />
        </div>
        <div className="flex justify-end gap-5">
          <button
            type="button"
            onClick={handleAddMeter}
            className="px-3 py-1 bg-blue-400 rounded-lg"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
