import { useEffect, useState } from 'react';
import { searchGithub } from '../api/API';
// import axios from 'axios';
import Candidate from '../interfaces/Candidate.interface';

function CandidateSearch() {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [savedCandidates, setSavedCandidates] =useState<Candidate[]>(()=>{
    const saved = localStorage.getItem('savedCandidates');
    return saved ? JSON.parse(saved):[];
  });

  
  useEffect(() => {
    async function fetchCandidates() {
      try{
      const response = await searchGithub();
      console.log({response});
      if (Array.isArray(response)){
        setCandidates(response);//Ensure it's an array before setting
      }
      else{
        console.error('Expected an array of candidates');
      }
    }catch(error){
      console.error('Error fetching candidates', error);
    }
    };
    fetchCandidates();
  }, []);

  const saveCandidate = () =>{
    const newSavedCandidates = [...savedCandidates, candidates[currentIndex]];
    setSavedCandidates(newSavedCandidates);
    localStorage.setItem('savedCandidates', JSON.stringify(newSavedCandidates));
    nextCandidate();
  };
  const nextCandidate = () =>{
    if(currentIndex < candidates.length -1){
      setCurrentIndex(currentIndex + 1);
    }
    else{
      alert('No more candidates available');
    }
  };
   if (candidates.length === 0){
    return<p>Loading candidates...</p>
   }

   const currentCandidate = candidates[currentIndex];
   console.log(currentCandidate);
  return (
    <div>
      <main>
        <div className="search-container">
          <h1>Candidate Search</h1>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={currentCandidate.avatar_url} alt="Candidate Avatar" style={{ width: '100px', height: '100px' }} />
            <p>Id: {currentCandidate.id}</p>
            <p>Name: {currentCandidate.login}</p>
            <p>Location: {currentCandidate.location}</p>
            <p>Email: {currentCandidate.email}</p>
            <p>Company: {currentCandidate.organizations_url}</p>
            <a href={currentCandidate.html_url} target="_blank" rel="noopener noreferrer">GitHub Profile</a>
            </div>
          <button onClick={nextCandidate}>-</button>
          <button onClick={saveCandidate}>+</button>
        </div>
      </main>
    </div>
  );
}

export default CandidateSearch;
