import axios from 'axios';

// Types
import { baseUrl } from 'constants/config-env';

const axiosConfig = {
	baseURL: baseUrl,
};

export const instance = axios.create(axiosConfig);
