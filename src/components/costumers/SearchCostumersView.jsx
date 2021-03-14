import React, { useState, useEffect } from 'react';
import { Container, Divider, Search } from 'semantic-ui-react';
import { GET_COSTUMERS_OPTIONS } from "../../graphql/queries";
import Button from '@material-ui/core/Button';
import { useLazyQuery } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import { tryCostumersResults, costumerSelect, fetchCostumersSearch } from "../../redux";
import { useHistory } from "react-router-dom";

const SearchCostumersView = ()=> {

  const dispatch = useDispatch();
  const history = useHistory();
  const costumersResults = useSelector(({costumers}) => costumers.costumersResults);
  //const costumerSelected = useSelector(({costumers}) => costumers.costumerSelected);

  const [filter, setFilter] = useState('');

  const resultSelect = (e, data) => {
    dispatch(costumerSelect(data.result.id));
    history.push('/costumer');
  }

  const searchChange = (e, {value}) => setFilter(value);

  /*const [searchCostumer, { loading, data, error }] = useLazyQuery(GET_COSTUMERS_OPTIONS, {
		variables: { filter },
		onCompleted: () => {
      //console.log(data);
			if (data?.costumersSearch) {
        dispatch(fetchCostumersSearch(filter));
        dispatch(tryCostumersResults(data.costumersSearch.map(costumer => {
          const {fullName, id, phonNumber, email, packages} = costumer;
          const accounts = packages.map(element => `${element.parcel.name}: ${element.account}`);
          return {
            title: fullName,
            description: `${email}, ${phonNumber}, (${accounts.join()})`,
            id: id
          }
        })));
			}
		},
    onError: ()=> {
      //console.log(error);
    }
	});*/

  useEffect(()=> {
    dispatch(fetchCostumersSearch(filter));
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
