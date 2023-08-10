import Nav from './components/Nav'
import './globals.css'
import { Poiret_One } from 'next/font/google'

const poiretOne = Poiret_One({ subsets: ['latin'], weight: '400' })

export const metadata = {
  title: 'Aaron Celia',
  description: 'Software Engineer',
}

export default function RootLayout({ children }) {
  return (
		<html lang="en">
			<body className={`bg-white`}>
				<Nav />
					<div id="bg" className={`${poiretOne.className}`}>
						{children}
					</div>
				<script
					type="text/javascript"
					src="https://assets.calendly.com/assets/external/widget.js"></script>
				<script src="/node_modules/animejs/lib/anime.min.js"></script>
			</body>
		</html>
	);
}
