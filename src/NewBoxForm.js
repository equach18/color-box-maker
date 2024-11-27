import { useState } from "react";
import { v4 as uuid } from "uuid";
import "./NewBoxForm.css";

function NewBoxForm({ addBox }) {
  const INITIAL_STATE = { width: "", height: "", backgroundColor: "" };
  const [formData, setFormData] = useState(INITIAL_STATE);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox({ ...formData, id: uuid() });
    setFormData(INITIAL_STATE);
  };
  return (
    <div className="NewBoxForm">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="width">Width</label>
          <input
            id="width"
            type="text"
            name="width"
            placeholder="Box Width"
            value={formData.width}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="height">Height</label>
          <input
            id="height"
            type="text"
            name="height"
            placeholder="Box Height"
            value={formData.height}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="backgroundColor">Color</label>
          <input
            id="backgroundColor"
            type="text"
            name="backgroundColor"
            placeholder="Box Color"
            value={formData.backgroundColor}
            onChange={handleChange}
          />
        </div>
        <button>Create Box!</button>
      </form>
    </div>
  );
}

export default NewBoxForm;
