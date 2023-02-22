import React from 'react';
import './SectionYouTube.scss'
function SectionYouTube(props) {
    return (
        <div className='section-youtube' >
            <h4>ADAM STORE</h4>
            <iframe width="1140" height="641"
                src="https://www.youtube.com/embed/7euAFwjg0-Q"
                title="ADAM STORE I THE BEAT OF SEOUL"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
        </div>
    );
}

export default SectionYouTube;