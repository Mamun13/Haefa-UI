import React from 'react';
import SectionBanner from '../SectionBannerDemo/SectionBanner';
import GlobalButton from '../GlobalBtn/GlobalButton';
import Webcam from 'react-webcam';
import './TakePicture.css';

const videoConstraints = {
	width: 520,
	height: 520,
	facingMode: 'user',
};

const TakePicture = () => {
	const webcamRef = React.useRef(null);
	const capture = React.useCallback(() => {
		const imageSrc = webcamRef.current.getScreenshot();
	}, [webcamRef]);
	return (
		<>
			<section>
				<SectionBanner title="Patient Photo"/>
				<div className="container">
					<div className="camera">
						<Webcam
							audio={false}
							height={400}
							ref={webcamRef}
							screenshotFormat="image/jpeg"
							width={1100}
							videoConstraints={videoConstraints}
              mirrored={true}
						/>
						<button onClick={capture} className="button-color border-0 text-white rounded py-2 px-4 selfie-btn mb-4">
							Capture photo
						</button>
				
					</div>
				</div>
				
				<GlobalButton />
			</section>
		</>
	);
};

export default TakePicture;
