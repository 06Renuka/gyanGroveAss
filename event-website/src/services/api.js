import axios from 'axios';

const API_BASE_URL = 'https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==';

export const getRecommendedEvents = () => {
  return axios.get(`${API_BASE_URL}&type=reco`);
};

export const getUpcomingEvents = (page = 1) => {
  return axios.get(`${API_BASE_URL}&page=${page}&type=upcoming`);
};
