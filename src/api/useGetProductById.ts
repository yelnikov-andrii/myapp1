/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import axios from 'axios';
import { baseUrl } from '.';
import { Good } from '../redux/store';

export const useGetProductById = (id: any) => {
  const [good, setGood] = React.useState<Good>();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  React.useEffect(() => {
    setLoading(true);
    axios.get(`${baseUrl}/products/${id}`)
    .then(response => {
      setGood(response.data);
    })
    .catch((e) => {
      setError(e.response.data.message)
    })
    .finally(() => {
      setLoading(false)
    })
  }, []);

  return { good, loading, error }
}