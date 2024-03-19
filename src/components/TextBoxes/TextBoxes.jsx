import { useState } from "react";
import { Button, TextInput } from "flowbite-react";
import { RiDeleteBin6Line } from "react-icons/ri";

const TextBoxes = () => {
  const [textboxes, setTextboxes] = useState([]);
  const [sum, setSum] = useState(0);
  const [warnings, setWarnings] = useState({});

  const addTextbox = () => {
    setTextboxes([...textboxes, ""]);
  };

  const deleteTextbox = (index) => {
    const newTextboxes = textboxes.filter((_, i) => i !== index);
    setTextboxes(newTextboxes);

    const newWarnings = { ...warnings };
    delete newWarnings[index];
    setWarnings(newWarnings);

    updateSum(newTextboxes);
  };

  const updateSum = (values) => {
    const newSum = values.reduce((acc, value) => acc + (Number(value) || 0), 0);
    setSum(newSum);
  };

  const handleTextboxChange = (value, index) => {
    const newTextboxes = textboxes.map((tb, i) => (i === index ? value : tb));
    setTextboxes(newTextboxes);

    const newWarnings = { ...warnings };
    if (isNaN(value) || value === "") {
      newWarnings[index] = "Please enter a number";
    } else {
      delete newWarnings[index];
    }
    setWarnings(newWarnings);
    updateSum(newTextboxes);
  };

  return (
    <div className="mt-4 mb-4 border-4 p-8 flex flex-col gap-4 items-center">
      <Button color="success" className="w-fit" onClick={addTextbox}>
        Add Text Box To Sum Numbers
      </Button>
      {textboxes.map((value, index) => (
        <div key={index} className="flex lg:flex-row flex-col gap-4 items-center justify-center">
          <TextInput
            type="text"
            
            placeholder="Enter a number"
            value={value}
            onChange={(e) => handleTextboxChange(e.target.value, index)}
          />
          <Button color="failure" onClick={() => deleteTextbox(index)}>
          <RiDeleteBin6Line className="mr-2" /> Delete
          </Button>
          {warnings[index] && <div className="warning text-white text-xl">{warnings[index]}</div>}
        </div>
      ))}
      <div className="px-5 py-3 rounded-lg bg-gray-700 text-white text-xl w-fit">Sum: {sum}</div>
    </div>
  );
};

export default TextBoxes;
