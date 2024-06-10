import * as React from 'react';
import {SvgCss} from 'react-native-svg/css';

export default ({...props}: any) => {
	const xml = `
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M12 0C5.364 0 0 5.364 0 12C0 18.636 5.364 24 12 24C18.636 24 24 18.636 24 12C24 5.364 18.636 0 12 0ZM15.72 6.084C15.888 6.084 16.056 6.144 16.2 6.276L17.724 7.8C18 8.064 18 8.484 17.724 8.736L16.524 9.936L14.064 7.476L15.264 6.276C15.384 6.144 15.552 6.084 15.72 6.084ZM13.356 8.172L15.828 10.644L8.556 17.916H6.084V15.444L13.356 8.172Z"
            fill="#212121"
        />
    </svg>`;
	return <SvgCss xml={xml} width="100%" height="100%" {...props} />;
};
