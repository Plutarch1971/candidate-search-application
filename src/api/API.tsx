const myTOKEN = import.meta.env.VITE_GITHUB_TOKEN;
console.log(`VITE_GITHUB_TOKEN ${myTOKEN}` );
if (!myTOKEN) {
  throw new Error('VITE_GITHUB_TOKEN is not defined');
}
const baseUrl = import.meta.env.VITE_GITHUB_URL;

const searchGithub = async () => {
  try {
    const start = Math.floor(Math.random() * 100000000) + 1;
    // console.log(import.meta.env);
    const response = await fetch(
      `${baseUrl}/users?since=${start}`,
      // `https://api.github.com/users?since=${start}`,
      {
        headers: {
          Authorization: `Bearer ${myTOKEN}`,
        },
      }
    );
    // console.log('Response:', response);
    const data = await response.json();
    if (!response.ok) {
      throw new Error('invalid API response, check the network tab');
    }
    // console.log('Data:', data);
    return data;
  } catch (err) {
    // console.log('an error occurred', err);
    return [];
  }
};

const searchGithubUser = async (username: string) => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error('invalid API response, check the network tab');
    }
    return data;
  } catch (err) {
    // console.log('an error occurred', err);
    return {};
  }
};

 export { searchGithub, searchGithubUser};