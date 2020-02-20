import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { createLogEntry } from "./API";

// this is the form component that will appear once users click on the pop-up
const LogEntryForm = ({ location, onClose }) => {
  // destructuring variables from the useForm object
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async data => {
    try {
      setLoading(true);
      data.latitude = location.latitude;
      data.longitude = location.longitude;
      const created = await createLogEntry(data);
      console.log("This is the thing you just created, booiii", "\n", created);
      onClose();
    } catch (error) {
      setError(error.message);
      //if error, then set loading to false
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="entry-form">
      {error ? <h3 className="error">{error}</h3> : null}
      <label htmlFor="title">Title</label>
      <input name="title" required ref={register} />
      <label htmlFor="comment">Comments</label>
      <textarea name="comments" rows={3} ref={register}></textarea>
      <label htmlFor="description">Description</label>
      <textarea name="description" rows={3} ref={register}></textarea>
      <label htmlFor="image">Image</label>
      <input name="image" ref={register} />
      <label htmlFor="visitDate">Visit Date</label>
      <input name="visitDate" type="date" ref={register} />
      <button disabled={loading}>
        {loading ? "Loading...." : "Create Entry"}
      </button>
    </form>
  );
};

export default LogEntryForm;
