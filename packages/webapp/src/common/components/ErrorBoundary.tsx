import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

export interface ErrorBoundaryProps {
	text: string;
	homeAction: () => void;
	children: React.ReactNode;
}

class ErrorBoundary extends React.Component<
	ErrorBoundaryProps,
	{ hasError: boolean }
> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError() {
		return { hasError: true };
	}

	componentDidCatch(error: any, errorInfo: any) {
		console.error(error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			return (
				<Jumbotron>
					<h1 id="error-heading">{this.props.text}</h1>
					<Button
						id="error-action"
						variant="outline-danger"
						onClick={this.props.homeAction}
					>
						Home
					</Button>
				</Jumbotron>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
