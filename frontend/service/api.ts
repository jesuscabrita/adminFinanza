import axios from "axios";

export const api = axios.create({baseURL:'/'})

export const api2 = axios.create({baseURL:'https://api.bluelytics.com.ar/'})

export const api3 = axios.create({baseURL:"https://backadminfinanza.herokuapp.com/"})