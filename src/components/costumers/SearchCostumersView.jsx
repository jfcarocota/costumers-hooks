import React, { useState, useEffect } from 'react';
import { Container, Search } from 'semantic-ui-react';
import { GET_COSTUMERS_OPTIONS } from "../../graphql/queries";
import Button from '@material-ui/core/Button';
import { useLazyQuery } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import { tryCostumersResults } from "../../redux";

const SearchCostumersView = ()=> {

  const dispath = useDispatch();

  const costumersResults = useSelector(({costumers}) => costumers.costumersResults);
  const [fullName, setFullName] = useState('');

  const resultSelect = (e, data) => {

  }

  const searchChange = (e, {value}) => {
    setFullName(value);
  }

  const [searchCostumer, { loading, data, error }] = useLazyQuery(GET_COSTUMERS_OPTIONS, {
		variables: { fullName },
		onCompleted: () => {
      console.log(data);
			if (data?.costumersSearch) {
        dispath(tryCostumersResults(data.costumersSearch.map(costumer => {
          return {title: costumer.fullName, id: costumer.id}
        })));
				//setToken(data.login.token);
				//dispatch(tryLogin(data.login.token));
			}
		},
    onError: ()=> {
      console.log(error);
    }
	});

  //useEffect(()=> searchCostumer(), [searchCostumer]);

  useEffect(()=> {
    console.log(fullName);
    searchCostumer();
    console.log(costumersResults);
  }, [fullName, costumersResults, searchCostumer]);

  return (
    <Container textAlign='center'>
      <Search
      size='massive'
      style={{paddingTop: window.innerHeight / 4 }}
      onSearchChange={searchChange}
      results={costumersResults}
      value={fullName}
      loading={loading}
        /*loadingfullName={loading}
        onResultSelect={(e, data) =>
          dispatch({ type: 'UPDATE_SELECTION', selection: data.result.title })
        }
        onSearchChange={handleSearchChange}
        results={results}
        value={value}*/
      />
      <Button variant="outlined" color="primary">
        Buscar
      </Button>
    </Container>
  )
}

export default SearchCostumersView;
