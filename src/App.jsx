import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import './App.css'
import Editor from "./Editor/index.jsx";
import Home from "./Home/index.jsx";

function App() {
  return (
    <Router>
        <Routes basename="/livecode-tool">
            <Route exact path="/editor" element={<Editor />} />
            <Route exact path="/" element={<Home />} />
        </Routes>
    </Router>
  )
}

export default App
