import { useState } from 'react';

const useRegistration = () => {
  const [email, setEmail] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const handleFormSubmit = () => {
    console.log('Hello World');
  };

  return {
    confirmPassword,
    email,
    firstName,
    handleFormSubmit,
    lastName,
    password,
    setConfirmPassword,
    setEmail,
    setFirstName,
    setLastName,
    setPassword,
  };
};

export default useRegistration;
