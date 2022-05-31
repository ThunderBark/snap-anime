import React, { DragEvent } from "react";
import "./App.css";

function App() {
  const dropHandler = (ev: DragEvent) => {
    console.log("File(s) dropped");

    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();

    if (ev.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      for (var i = 0; i < ev.dataTransfer.items.length; i++) {
        // If dropped items aren't files, reject them
        if (ev.dataTransfer.items[i].kind === "file") {
          var file = ev.dataTransfer.items[i].getAsFile();
          file && console.log("... file[" + i + "].name = " + file.name);
        }
      }
    } else {
      // Use DataTransfer interface to access the file(s)
      for (var i = 0; i < ev.dataTransfer.files.length; i++) {
        console.log(
          "... file[" + i + "].name = " + ev.dataTransfer.files[i].name
        );
      }
    }
  };

  const dragOverHandler = (ev: DragEvent) => {
    console.log("File(s) in drop zone");

    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
  };

  return (
    <div className="App">
      <div
        className="dropzone"
        onDrop={dropHandler}
        onDragOver={dragOverHandler}
      >
        <p>Drag frame from anime</p>
      </div>
    </div>
  );
}

export default App;
