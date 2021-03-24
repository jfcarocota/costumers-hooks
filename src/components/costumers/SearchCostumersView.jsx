import React, { useState, useEffect } from 'react';
import { Container, Divider, Search } from 'semantic-ui-react';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from "react-redux";
import { costumerSelect, costumerFetchResults } from "../../redux";
import { useHistory } from "react-router-dom";

const SearchCostumersView = ()=> {

  const dispatch = useDispatch();
  const history = useHistory();
  const costumersResults = useSelector(({costumers}) => costumers.costumersResults);

  const [filter, setFilter] = useState('');

  const resultSelect = (e, data) => {
    dispatch(costumerSelect(data.result.id));
    history.push('/costumer');
  }

  const searchChange = (e, {value}) => setFilter(value);

  useEffect(()=> {
    dispatch(costumerFetchResults(filter));
  }, [filter, dispatch]);

  return (
    <Container textAlign='center'>
      <Search
      fluid
      size='massive'
      style={{paddingTop: window.innerHeight / 4 }}
      onSearchChange={searchChange}
      results={costumersResults}
      value={filter}
      //loading={loading}
      placeholder='nombre, correo, teléfono ...'
      onResultSelect={resultSelect}
      />
      <Divider hidden/>
      <Button variant="outlined" color="primary">
        Buscar
      </Button>
    </Container>
  )
}

export default SearchCostumersView;
