import { useEffect, useState } from 'react'; //useState,
import { searchGithub } from '../api/API';//searchGithubUser
import Candidate from '../interfaces/Candidate.interface';


  function CandidateSearch() {
    const [list, setList] = useState<Candidate[]>([]);
    const [current, setCurrent]= useState(0);
    setCurrent(0);
   useEffect(()=>{
    async function getCandidates(){
      const candidates = await searchGithub();
      //console.log(candidates);
      setList(candidates)
    }
    getCandidates();
   },[])
  return(
    <body>
    <div>
      <a href='/home'>Home</a>
      <a href='/SavedCandidates'>Potential Candidates</a>
    </div>
    <main>
      <div className="search-container">
      <h1>CandidateSearch</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src="/candidate_avatar.png" alt="Candidate Avatar" style={{ width: '100px', height: '100px' }} />
      </div>
      {/* <p>Name:{list[current]?.login}</p> */}
      <p>Location:</p>
      <p>Email:</p>
      <p>html_url:</p>
      <p>Company:</p>
   </div>
   </main>
   </body>
  )
};

export default CandidateSearch;
