import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import LandingPage from "./screens/LandingPage/LandingPage";
// import MyNotes from "./screens/MyNotes/MyNotes";
// import SingleNote from "./screens/SingleNote/SingleNote";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
// import CreateNote from "./screens/SingleNote/CreateNote";
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";
import Board from "./screens/Board/Board";
import CreatePost from "./screens/SinglePost/CreatePost";
import SinglePost from "./screens/SinglePost/SinglePost";
import CovidOccur from "./screens/CovidInfo/CovidOccur";
import CovidGender from "./screens/CovidInfo/CovidGender";
import CovidHospital from "./screens/CovidInfo/CovidHospital";
function App() {
  return (
    <BrowserRouter>
      <main className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<LandingPage></LandingPage>} />
          <Route exact path="/login" element={<LoginScreen></LoginScreen>} />
          <Route
            exact
            path="/register"
            element={<RegisterScreen></RegisterScreen>}
          />
          <Route
            exact
            path="/profile"
            element={<ProfileScreen></ProfileScreen>}
          />
          <Route
            exact
            path="createPost"
            element={<CreatePost></CreatePost>}
          ></Route>
          <Route path="/board" element={<Board></Board>}></Route>
          <Route
            exact
            path="/board/:id"
            element={<SinglePost></SinglePost>}
          ></Route>
          <Route
            exact
            path="/covid-gender"
            element={<CovidGender></CovidGender>}
          ></Route>
          <Route
            exact
            path="/covid-occur"
            element={<CovidOccur></CovidOccur>}
          ></Route>

          <Route
            exact
            path="/covid-hospital"
            element={<CovidHospital></CovidHospital>}
          ></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
