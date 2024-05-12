import { Button } from "./components/ui/button"
import Home from "./pages/home"
import Navbar from "./components/navbar"
import animeList from "./pages/animeList"
import MaxWidthWrapper from './components/maxWidthWrapper'
import { Route, Routes, BrowserRouter as Router} from 'react-router-dom'

function App() {
    return (
        <div className="bg-oasis-gray">
            <Router>
                <Navbar />
                <Home />
                <Routes>
                    <Route path="/AnimeList" element={<animeList />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App
