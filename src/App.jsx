import { useEffect, useState } from 'react';
import './scss/App.scss';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { dark } from "./themes";
import Font from "./components/Font";
import DateAndTime from './components/DateAndTime';
import Footer from './components/Footer';

function App() {
	const [theme, setTheme] = useState("dark");
	const [os, setOS] = useState("windows10");
	const [size, setSize] = useState("normal");
	const [customColors, setCustomColors] = useState({ text: "#ffffff", background: "#0096ff" });

	useEffect(() => {
		document.documentElement.style.setProperty("--custom-text-color", customColors.text);
		document.documentElement.style.setProperty("--custom-background-color", customColors.background);
	}, [customColors]);

	return (
		<ThemeProvider theme={dark}>
			<CssBaseline/>
			<Font/>

			<header className='header'>
				<h1 className='heading-text'>Click text to edit.</h1>
			</header>

			<main className='main'>
				<DateAndTime 
					theme={theme}
					os={os}
					size={size}
				/>
			</main>

			<div className="container">
				<Footer
					theme={theme}
					setTheme={setTheme}
					os={os}
					setOS={setOS}
					size={size}
					setSize={setSize}
					customColors={customColors}
					setCustomColors={setCustomColors}
				/>
			</div>
		</ThemeProvider>
  	);
}

export default App;