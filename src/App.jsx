import { Route, Routes } from "react-router-dom";
import { LayoutWrapper } from "./components/layoutWrapper";
import { useAuth } from "./hooks/useAuth";
import { AboutChannel } from "./pages/aboutChannel";
import { Channel } from "./pages/channel";
import { Login } from "./pages/login";
import { Playlist } from "./pages/playlist/playlist.component";
import { Trending } from "./pages/trending/trending.component";
import { VideoComments } from "./pages/videoComments";
import { VideoInfo } from "./pages/videoInfo/videoInfo.component";
import { VideoRelated } from "./pages/videoRelated";

function App() {
  const [token] = useAuth();

  if (token) {
    return (
      <>
        <LayoutWrapper>
          <Routes>
            <Route path="/" element={<AboutChannel />} />
            <Route path="/channel" element={<Channel />} />
            <Route path="/video-related" element={<VideoRelated />} />
            <Route path="/video-comments" element={<VideoComments />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/video-info" element={<VideoInfo />} />
            <Route path="/playlist" element={<Playlist />} />
          </Routes>
        </LayoutWrapper>
      </>
    );
  } else {
    return (
      <>
        <Login />
      </>
    );
  }
}
export default App;
