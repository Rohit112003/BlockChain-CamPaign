import {React, useState, useEffect} from 'react'
import { useStateContext } from '../context'
import { DisplayCampaign } from '../components';
// import DisplayCampaign from '../components';

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);


  const {address, contract,getCampaigns} =  useStateContext();
  const fetchCamapigns = async()=>{
    setIsLoading(true);
    const data = await getCampaigns();
    setCampaigns(data);
    console.log(data)
    setIsLoading(false);
  }
  useEffect(()=>{
      if(contract) fetchCamapigns();
  },[address,contract]);
  return (
    <DisplayCampaign
    title = "All Campaigns"
    isLoading = {isLoading}
    campaigns = {campaigns}
    
    />
  )
}

export default Home