import React from 'react';

//@import in stylesheet doesn't load the font for some reason, so the font needs to be loaded into the html.
export default function Font() {
    return (
        <>
            <link 
                href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" 
                rel="stylesheet"
            />
        </>
    );
}