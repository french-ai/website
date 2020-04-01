import axios from 'axios';

axios.defaults.baseURL = 'https://api.github.com';

export default {
  getRepos(repo) {
    return axios.get(
      `/repos/${repo}`,
      { headers: { Authorization: process.env.GITHUB_TOKEN } },
    );
  },

  getMembers() {
    return axios.get(
      '/orgs/french-ai/members',
      { headers: { Authorization: process.env.GITHUB_TOKEN } },
    );
  },
};
