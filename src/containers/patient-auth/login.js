import React from 'react';
import './index.scss';
import { Form, Input, Button, Message } from 'semantic-ui-react';

class PaitentLogin extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<React.Fragment>
				<div className="login-wrapper">
					<div className="form-card">
						<Form>
							<Form.Field>
								<label className="form-label">Email</label>
								<input
									id="email"
									name="email"
									required
									placeholder="Enter email"
									onChange={this.props.handleFieldChange}
								/>
							</Form.Field>
							<Form.Field>
								<label className="form-label">Password</label>
								<input
									id="password"
									name="password"
									required
									type="password"
									placeholder="Enter Password"
									onChange={this.props.handleFieldChange}
								/>
							</Form.Field>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            
                            <span className="button-glow-red btn" onClick={this.props.handleLogin} >  Login </span>
                            <span className="button-glow-blue btn" onClick={this.props.handleGuestLogin} > Guest Login </span>
							
							
							</div>
						</Form>
						<div
							style={{
								marginTop: '10px',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center'
							}}
						>
							{' '}
							new to the platform ?{' '}
							<span
								onClick={() => {
                                    this.props.changeFormType('signup')
                                }}
								className="blue-anchor-link"
							>
								{' '}
								Sign up{' '}
							</span>
						</div>
						
						{this.props.errorMssage && <Message color='red'>{this.props.errorMssage}</Message>}
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default PaitentLogin;
