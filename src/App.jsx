import {
    BrowserRouter as Router,
    Routes,
    Route,
    BrowserRouter,
} from 'react-router-dom';
import './App.css'
import Editor from "./Editor/index.jsx";
import Home from "./Home/index.jsx";

function App() {
  return (
    <Router basename={import.meta.env.DEV ? '/' : '/livecode-tool/'}>
        <Routes>
            <Route exact path="/editor" element={<Editor />} />
            <Route exact path="/" element={<Home />} />
        </Routes>
    </Router>
  )
}

export default App
