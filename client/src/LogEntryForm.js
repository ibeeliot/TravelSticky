import React from "react";

// this is the form component that will appear once users click on the pop-up
const LogEntryForm = () => {
  return (
    <form className="entry-form">
      <div>
        <label for="title">Title</label>
        <input name="title" />
      </div>
      <div>
        <label for="comment">Comments</label>
        <textarea name="title" rows={3}></textarea>
      </div>
      <div>
        <label for="description">Description</label>
        <textarea name="description" rows={3}></textarea>
      </div>
      <div>
        <label for="image">Image</label>
        <input name="image" />
      </div>
      <div>
        <label for="visitDate">Visit Date</label>
        <input name="visitDate" type="date" />
      </div>
    </form>
  );
};

export default LogEntryForm;
