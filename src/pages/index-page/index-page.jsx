import React from 'react';
import { connect } from 'react-redux';

class Component extends React.Component {

	render() {
		return (
			<React.Fragment>
				Hello World!
			</React.Fragment>
		);
	}

}

const Redux = connect(store => ({}))(Component);

export const IndexPage = Redux;
