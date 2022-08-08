import { StoreFilterData } from '../components/SelectComponent';
import axios from 'axios';

const baseURL = 'http://localhost:8080';

export const requestBackend = axios.create({
  baseURL
});
