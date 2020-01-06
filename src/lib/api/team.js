import axios from 'axios';

export const getTeam = ({Id, Name, LogoUrl}) => axios.get('api/teams', {Id, Name, LogoUrl});