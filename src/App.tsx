import { Toaster } from "react-hot-toast";
import { AnimeList } from "./AnimeList/AnimeList";
import "./App.css";
import { ImageInput } from "./ImageInput/ImageInput";

/* TODO: API supports additional types: video/*, application/octet-stream and application/x-www-form-urlencoded
  need to do something with them*/

function App() {
  return (
    <div className="App">
      <Toaster position="top-right" reverseOrder={false} />
      <ImageInput/>
      <AnimeList/>
    </div>
  );
}

export default App;
