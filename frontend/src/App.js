import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/auth/login";
// import Register from "./components/auth/register";
import Homepage from "./components/home";
import PodcastPlay from "./components/PodcastPlay";
import AudioPlayer from "./components/audio-player/AudioPlayer.js";
import UploadForm from "./components/uploadForm";
function App() {
  return (
    <div>
      {/* <UserAuthContextProvider> */}
      <Router>
        <Routes>
          <Route path="/upload" element={<UploadForm />} />
          <Route path="/" element={<Homepage />} />
          {/* <Route path="register" element={<Register />} /> */}
          <Route path="login" element={<Login />} />
          <Route path="playPodcast" element={<PodcastPlay />} />
          {/* </Route> */}
        </Routes>
      </Router>
      {/* </UserAuthContextProvider> */}
    </div>
  );
}

export default App;
