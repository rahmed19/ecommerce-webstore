import React from 'react'
import Footer from './Footer'

export default function FooterContainer() {
    return (
        <>
        <div className="flex-container">
            <div className="title">
                <p>This demo ReactJS project was built largely based on &nbsp;
                    <a href="https://www.youtube.com/watch?v=vUe91uOx7R0" target="new">this Youtube tutorial.</a>
                </p>
            </div >
            <div>
            &nbsp;
            </div>
            <div className="title">
                <p>My additions include: 
                
                <br />Controlling image scrolling using left and right arrow keys.
                <br />Closing the modal by pressing the escape key.
                <br />Automated removal of user uploaded images and data from backend after 7 seconds and restoring the app to its original form.
             </p>
             <p>
                 More about me and my work @ <a href="https://linktr.ee/rahmed19" target="new">Link Tree</a>
             </p>
            </div>
        </div>
        </>
    )
}
