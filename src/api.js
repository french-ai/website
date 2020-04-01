import axios from 'axios';

axios.defaults.baseURL = 'https://api.github.com';

export default {
  getRepos(repo) {
    return axios.get(
      `/repos/${repo}`,
      { headers: { Authorization: '0275258bbcb329dffaf88de4ef1d7e986d758f3a' } },
    );
  },

  getMembers() {
    return axios.get(
      '/orgs/french-ai/members',
      { headers: { Authorization: '0275258bbcb329dffaf88de4ef1d7e986d758f3a' } },
    );
  },
};
