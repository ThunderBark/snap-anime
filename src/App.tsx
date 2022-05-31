import React, { ChangeEvent, DragEvent, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import "./App.css";

/* TODO: API supports additional types: video/*, application/octet-stream and application/x-www-form-urlencoded
  need to do something with them*/

function App() {
  const [image, setImage] = useState("");

  const dropHandler = (ev: DragEvent) => {
    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();

    if (ev.dataTransfer.items) {
      if (ev.dataTransfer.items.length > 1) {
        toast.error("Can't handle multiple files");
      } else {
        if (ev.dataTransfer.items[0].type.includes("image/")) {
          const file = ev.dataTransfer.items[0].getAsFile();
          file && setImage(URL.createObjectURL(file));
        } else {
          toast.error("Dropped file is not an image");
        }
      }
    }
  };

  const fileChangeHandler = (ev: ChangeEvent<HTMLInputElement>) => {
    const files = ev.currentTarget.files;
    if (files && files.length > 0) {
      setImage(URL.createObjectURL(files[0]));
    }
  };

  const dragOverHandler = (ev: DragEvent) => {
    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
  };

  return (
    <div className="App">
      <Toaster position="top-right" reverseOrder={false} />
      <img src={image} alt=""></img>
      <br />
      <label
        className="dropzone"
        onDrop={dropHandler}
        onDragOver={dragOverHandler}
        htmlFor="fileInput"
      >
        Drop frame from anime here
      </label>
      <input
        type="file"
        accept="image/*"
        id="fileInput"
        style={{ display: "none" }}
        onChange={fileChangeHandler}
      />
      <div>or</div>
      <input placeholder="Enter image URL"></input>
      <button>Submit</button>
      <br />
      <div>then</div>
      <button>Snap!</button>
    </div>
  );
}

export default App;
