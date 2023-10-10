import axios from "axios";

export default axios.create({
  baseURL: 'http://localhost:8080/' //maybe change to localhost:8080?
  //headers: {"ngrok-skip-browser-warning": "true"}
});