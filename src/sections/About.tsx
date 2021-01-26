import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';

import { Section } from '../components';
import about from '../data/about.json';

const Name = styled.div`
	font-weight: 500;
	font-size: 18px;
`;
export class About extends React.Component {
	render() {
		return (
			<Section id="about" title="About Me">
				<Row>
					<Col md={2}>
						<Row>
							<Col md={12}>
								<div className="text-center mb-3">
									<img
										src={about.avatar}
										alt="Dmitry Pavluk"
										style={{ width: '80px', borderRadius: '100%' }}
									/>
								</div>
							</Col>
							<Col md={12}>
								<Name className="text-center mb-3">{about.username}</Name>
							</Col>
						</Row>
					</Col>
					<Col md={10} className="triangle-left-md triangle-top-sm">
						<div className="rounded bg-white shadow-dark padding-30">
							<Row>
								<Col md={12}>
									<div dangerouslySetInnerHTML={{ __html: about.objective }} />
									<div className="mt-3 mb-3">
										<a
											href="https://github.com/dmonay"
											className="btn btn-kd bg-info"
											target="_blank"
											rel="noopener noreferrer"
										>
											View on Github
										</a>
									</div>
								</Col>
							</Row>
						</div>
					</Col>
				</Row>
			</Section>
		);
	}
}

export default About;
