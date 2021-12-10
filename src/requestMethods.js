import axios from "axios";

const baseURL = "http://localhost:5000/api/"
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYjEwYjhlMTQyNGZkNzFlMzkzMTg5MiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzOTExOTM1OSwiZXhwIjoxNjM5Mzc4NTU5fQ.ISs915MZtXHoiwDJGlMGUIqmo6ETQfR-8ribTaZUd6Q'

export const publicRequest = axios.create({ baseURL })
export const userRequest = axios.create({ baseURL, headers: { token: `Bearer ${token}` } })