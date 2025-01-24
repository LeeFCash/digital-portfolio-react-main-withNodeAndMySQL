import { Link } from "react-router-dom";
import Home from './Places/home.js';
import AboutMe from './Places/aboutMe.js';
import Skills from './Places/skills.js';
import ContactMe from './Places/contactMe.js';
import NotFound from './Places/notFound.js';
import { Route, Routes } from 'react-router-dom';
import './App.css';
function App() {
	return (
	<>
	<header>
                <nav><ul>
                        <li><button type="button"><Link to="/aboutMe">About me</Link></button></li>
                        <li><button type="button"><Link to="/skills">skills</Link></button></li>
                        <li><button type="button"><Link to="/contactMe">contact me</Link></button></li>
                </ul>
		<ul>
                        <li><button type="button"><Link to="/">homePage</Link></button></li>
		</ul></nav>
        </header>
	<Routes>
		<Route path='/' element={<Home />} />
		<Route path='/aboutMe' element={<AboutMe />} />
		<Route path='/skills' element={<Skills />} />
		<Route path='/contactMe' element={<ContactMe />} />
		<Route path='*' element={<NotFound />} />
	</Routes>
	</>
	)
}

export default App;
