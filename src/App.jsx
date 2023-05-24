import { Route, Routes } from "react-router-dom";
import { LayoutWrapper } from "./components/layoutWrapper";
import { useAuth } from "./hooks/useAuth";
import { AboutChannel } from "./pages/aboutChannel";
import { Login } from "./pages/login";
import { Playlist } from "./pages/playlist/playlist.component";
import { Trending } from "./pages/trending/trending.component";
import { VideoComments } from "./pages/videoComments";
import { Video } from "./pages/video";
import { VideoInfo } from "./pages/videoInfo/videoInfo.component";
import { lazy, Suspense } from "react";

const Channel = lazy(() =>
  import("./pages/channel").then((component) => ({
    default: component.Channel,
  }))
);

const VideoRelated = lazy(() =>
  import("./pages/videoRelated").then((component) => ({
    default: component.VideoRelated,
  }))
);

function App() {
  const [token] = useAuth();

  if (token) {
    return (
      <>
        <LayoutWrapper>
          <Suspense fallback={"loading..."}>
            <Routes>
              <Route path="/" element={<AboutChannel />} />
              <Route path="/channel" element={<Channel />} />
              <Route path="/video-related" element={<VideoRelated />} />
              <Route path="/video-comments" element={<VideoComments />} />
              <Route path="/trending" element={<Trending />} />
              <Route path="/video-info" element={<VideoInfo />} />
              <Route path="/playlist" element={<Playlist />} />
              <Route path="/video/:id" element={<Video />} />
            </Routes>
          </Suspense>
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
