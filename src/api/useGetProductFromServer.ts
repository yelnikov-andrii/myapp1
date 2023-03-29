/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import axios from 'axios';
import { baseUrl } from '.';
import { useDispatch } from 'react-redux';
import { getGoods, setError, setLoading } from '../redux/goodsSlice';

export const useGetProductFromServer = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setLoading(true));
    axios.get(`${baseUrl}/products?limit=100`)
    .then(response => {
      dispatch(getGoods(response.data.products));
    })
    .catch((e) => {
      dispatch(setError(e.response.data.message));
    })
    .finally(() => {
      dispatch(setLoading(false));
    })
  }, []);
}