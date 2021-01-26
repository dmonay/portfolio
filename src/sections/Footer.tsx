import React from 'react';
import { Container } from 'react-bootstrap';
import about from '../data/about.json';

export class Footer extends React.Component {
	render() {
		return (
			<footer className="footer">
				<Container>
					<span className="copyright">
						© {new Date().getFullYear()} {about.username}
					</span>
				</Container>
			</footer>
		);
	}
}

export default Footer;
