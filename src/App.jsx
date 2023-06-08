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
     <BrowserRouter basename={import.meta.env.DEV ? '/' : '/livecode-tool/'}>
        <Router>
            <Routes>
                <Route exact path="/editor" element={<Editor />} />
                <Route exact path="/" element={<Home />} />
            </Routes>
        </Router>
     </BrowserRouter>
  )
}

export default App
