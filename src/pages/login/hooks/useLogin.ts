import {useState} from 'react';

const useLogin = () => {
	const [mobileOrEmail, setMobileOrEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	return {mobileOrEmail, setMobileOrEmail, password, setPassword};
};

export default useLogin;
