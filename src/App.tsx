import React, { DragEvent, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import "./App.css";

function App() {
  const [image, setImage] = useState("");

  const dropHandler = (ev: DragEvent) => {
    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();

    if (ev.dataTransfer.items) {
      if (ev.dataTransfer.items.length > 1) {
        toast.error("Can't handle multiple files");
      } else {
        /* TODO: API supports additional types: video/*, application/octet-stream and application/x-www-form-urlencoded
        need to do something with them*/
        if (ev.dataTransfer.items[0].type.includes("image/")) {
          const file = ev.dataTransfer.items[0].getAsFile();
          file && setImage(URL.createObjectURL(file));
        } else {
          toast.error("Dropped file is not an image");
        }
      }
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
      <div
        className="dropzone"
        onDrop={dropHandler}
        onDragOver={dragOverHandler}
      >
        <p>Drop frame from anime</p>
      </div>
    </div>
  );
}

export default App;
