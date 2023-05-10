import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../FourCuserInput.css';

function MyVerticallyCenteredModal(props) {
	return (
		<Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
			<Modal.Header className="modal-header" closeButton>
				<Modal.Title id="contained-modal-title-vcenter" className="text-light font-18">
					Referral Section 
				</Modal.Title>
			</Modal.Header>
			<Modal.Body className="px-3 ">
				<form action="">
					<div className="mb-3 pb-0 m-0 input-shadow rounded-pill">
						<input type="text" id="" className="form-control input-padding rounded-pill py-2 border-0" placeholder="Enter Referral" />
					</div>
				
					<div className="mb-3 input-shadow rounded-pill">
						<select id="Select" className="form-select input-padding rounded-pill select-form-padding">
							<option>Select Referral </option>
							<option>Neck Pain Radiate </option>
							<option>Neck Ache</option>
							<option>Neck Pain</option>
						</select>
					</div>
					<div className="mb-3 pb-0 m-0 input-shadow rounded-pill">
						<input type="text" id="" className="form-control input-padding rounded-pill py-2 border-0" placeholder="Enter Health Center" />
					</div>
					
				</form>
			</Modal.Body>
			<Modal.Footer className="d-flex justify-content-center border-0 pt-0">
				{/* <div > */}
				<Button className="border-0 text-capitalize add-button font-16">done</Button>
				<Button onClick={props.onHide} className=" border-0 add-button text-capitalize font-16">
					cancel
				</Button>
				{/* </div> */}
			</Modal.Footer>
		</Modal>
	);
}

const TPuserInputModal = () => {
	const [modalShow, setModalShow] = React.useState(false);
	return (
		<>
			<Button variant="" onClick={() => setModalShow(true)} className="add-button">
				Add
			</Button>

			<MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
		</>
	);
};

export default TPuserInputModal;
