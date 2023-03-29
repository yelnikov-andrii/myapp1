/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery } from '../../redux/goodsSlice';
import { selectQuery } from '../../redux/selectors';

export const Search = () => {
  // const [searchQuery, setSearchQuery] = React.useState('');
  // const goods = useSelector(selectGoods);
  const searchQuery = useSelector(selectQuery);
  const dispatch = useDispatch();
  
  function handleSearch(query: string) {
    // setSearchQuery(query);
    dispatch(setSearchQuery(query));
  };

  // const getFilteredGoods = React.useCallback(() => {
  //   return [...goods].filter((good: any) => good.title.toUpperCase().includes(searchQuery.toUpperCase()) || good.category.toUpperCase().includes(searchQuery.toUpperCase()));
  // }, [searchQuery, goods])

  // React.useEffect(() => {
  //     dispatch(setFilteredGoods(getFilteredGoods()));
  // }, [searchQuery, goods]);

  return (
    <InputGroup className="mb-3">
      <Form.Control
        placeholder="Search the good"
        value={searchQuery}
        onChange={(e) => {
          handleSearch(e.target.value)
        }}
      />
      <Button
        onClick={(e) => {
          e.preventDefault();
          setSearchQuery('')
        }}
      >
        Clear search field
      </Button>
    </InputGroup>
  );
};

