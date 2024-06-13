import React, { useState } from "react";

import initialData from "../JsonFile/Data.json";

const ExampleJson = () => {
  const [data, setData] = useState(initialData);
  const [formData, setFormData] = useState({ id: "", name: "", email: "" });
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      setData(data.map((item) => (item.id === formData.id ? formData : item)));
      setIsEditing(false);
    } else {
      setFormData({ ...formData, id: Date.now() });
      setData([...data, { ...formData, id: Date.now() }]);
    }
    setFormData({ id: "", name: "", email: "" });
  };

  const handleEdit = (id) => {
    const user = data.find((item) => item.id === id);
    setFormData(user);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  return (
    <>
      <div className="App">
        <h1>User Data</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <button type="submit">{isEditing ? "Update" : "Add"} User</button>
        </form>
        <ul>
          {data.map((user) => (
            <li key={user.id}>
              <h2>{user.name}</h2>
              <p>{user.email}</p>
              <button onClick={() => handleEdit(user.id)}>Edit</button>
              <button onClick={() => handleDelete(user.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ExampleJson;
