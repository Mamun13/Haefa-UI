import React, { Fragment, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import * as Yup from 'yup';
import './login.css';
import Logo from '../../assets/img/Logo.png';
import ApiLogo from '../../assets/img/apilogo.png';

const Login = () => {
	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
	});

	const initialValues = {
		email: '',
		password: '',
	};

	const handleSubmit = (values, { setSubmitting }) => {
		setTimeout(() => {
			setSubmitting(false);
		}, 400);
		console.log(values);
	};

	const loginSchema = Yup.object().shape({
		password: Yup.string().min(4, 'Too Short!').max(20, 'Too Long!').required('Required'),
		email: Yup.string().email('Invalid email').required('Required'),
	});

	let passRef,
		emailRef = useRef();
	const SubmitLogin = () => {};
	const FaceLogin = () => {};

	return (
		<Fragment>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-md-7 col-lg-6 center-screen">
						<div className="card w-90 p-4 card-width">
							<div className="card-body">
								<div className="app-logo">
									<img src={Logo} alt="" className="img-fluid logo-size " />
									{/* <p className='text-center font-12'>Powered by API</p> */}
								</div>
								<h4 className="Heading font-18 text-center m-0 py-4">SIGN IN</h4>
								<Formik initialValues={initialValues} validationSchema={loginSchema} onSubmit={handleSubmit}>
									{({ isSubmitting }) => {
										return (
											<Form>
												<Field
													placeholder="User Email"
													className="form-control animated fadeInUp box-shadow left-padding"
													type="email"
													name="email"
												/>
												{/* <ErrorMessage name="email" component="div" /> */}
												<ErrorMessage name="email" component="div" className="text-danger text-blue-50" />
												<br />
												<Field
													placeholder="User Password"
													className="form-control animated fadeInUp box-shadow left-padding"
													type="password"
													name="password"
												/>
												<ErrorMessage className="text-danger text-blue-50" name="password" component="div" />
												<br />
												<Link to="/dashboard">
													<button
														type="submit"
														disabled={isSubmitting}
														className="btn w-100 border-0 animated fadeInUp login-btn float-end btn-primary font-16 login-btn-bg"
													>
														Login
													</button>
												</Link>
											</Form>
										);
									}}
								</Formik>
							</div>
						</div>
						<div className="d-flex justify-content-center apilogo-position">
							<p className="text-capitalize pe-2">powered by </p>
							<Link to="https://api.net.bd/" target='_blank'>
								<img src={ApiLogo} alt="" className="api-logo pt-0" />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};
export default Login;
