import React, { useEffect, useRef } from 'react';
import SectionBanner from '../SectionBannerDemo/SectionBanner';
import GlobalButton from '../GlobalBtn/GlobalButton';
import './TakePicture.css';

const TakePicture = () => {
	let videoref = useRef(null);
	let photoref = useRef(null);

	const getUserCamera = () => {
		navigator.mediaDevices
			.getUserMedia({
				video: true,
			})
			.then((stream) => {
				let video = videoref.current;
				video.srcObject = stream;

				video.play();
			})
			.catch((error) => {
				console.error(error);
			});
	};
	// take picture
	const takePicture = () => {
    const width = 400
    const height = width / (16 / 9)
    
    let video = videoRef.current
 
    let photo = photoRef.current
 
    photo.width = width
 
    photo.height = height
 
    let ctx = photo.getContext('2d')
 
    ctx.drawImage(video, 0, 0, width, height)
    
  }

	useEffect(() => {
		getUserCamera();
	}, [videoref]);

	return (
		<>
			<section>
				<SectionBanner title="Patient Photo" />
				<div className="container">
					<div className="camera">
						<video ref={videoref}></video>
						<button onClick={takePicture} className="text-capitalize border-0 py-2 px-3 button-color text-white rounded camera-btn">
							take picture
						</button>
						
					</div>
				</div>

				<GlobalButton />
			</section>
		</>
	);
};

export default TakePicture;
