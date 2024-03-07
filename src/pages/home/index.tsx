import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import httpClient from '../../services/httpClient';

const HomePage = () => {
  const [results, setResults] = useState('');

  const renderApi = async () => {
    const response = await httpClient.get('/entries');
    setResults(response.data.entries);
  };

  useEffect(() => {
    renderApi();
  }, []);

  return <Text>There are {results.length} results.</Text>;
};

export default HomePage;
