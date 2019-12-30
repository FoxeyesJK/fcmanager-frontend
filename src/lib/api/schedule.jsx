export const getSchedule = id => client.get(`/api/schedules/${id}`);

export const postSchedule = ({ date, title, location }) =>
    client.post('/api/schedules', {date, title, location });
