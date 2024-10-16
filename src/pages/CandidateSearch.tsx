import { useEffect, useState } from 'react';
import { searchGithub } from '../api/API';
import Candidate from '../interfaces/Candidate.interface';

function CandidateSearch() {
  const [list, setList] = useState<Candidate[]>([]);
  const [current, setCurrent] = useState(0);

  const saveCandidate = () => {
    setCurrent((prev) => (prev + 1) % list.length);
  };

  const dropCandidate = () => {
    setCurrent((prev) => (prev - 1 + list.length) % list.length);
  };

  useEffect(() => {
    async function getCandidates() {
      const candidates = await searchGithub();
      setList(candidates);
    }
    getCandidates();
  }, []);

  return (
    <div>
      <div>
        <a href='/home'>Home</a>
      </div>
      <main>
        <div className="search-container">
          <h1>CandidateSearch</h1>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src="/candidate_avatar.png" alt="Candidate Avatar" style={{ width: '100px', height: '100px' }} />
          </div>
          <p>Id: {list[current]?.id}</p>
          <p>Name: {list[current]?.login}</p>
          <p>Avatar: {list[current]?.avatar_url}</p>
          <p>Location: {list[current]?.location}</p>
          <p>Email: {list[current]?.email}</p>
          <p>html_url: {list[current]?.html_url}</p>
          <p>Company: {list[current]?.organizations_url}</p>
          <div>
            {/* <button onClick={prevCandidate}></button> */}
            <button onClick={dropCandidate}>-</button>
            <button onClick={saveCandidate}>+</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default CandidateSearch;
