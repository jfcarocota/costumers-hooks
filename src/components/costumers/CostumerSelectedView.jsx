import React, {useEffect} from 'react'
import { useSelector } from "react-redux";

const CostumerSelectedView = ()=> {

  const costumerSelected = useSelector(({costumers}) => costumers.costumerSelected);

  useEffect(()=>{
    console.log(costumerSelected);
  }, [costumerSelected]);

  return (
    <div>
      <h1>costumer</h1>
    </div>
  )
}

export default CostumerSelectedView;
