import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MovieDetail from "./pages/MovieDetail";
import VideoPlayer from "./pages/videoPlayer";



function App() {

  return (
    <div className="min-h-screen bg-black text-white">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie-detail" element={<MovieDetail />} />
          <Route path="/video" element={<VideoPlayer />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

