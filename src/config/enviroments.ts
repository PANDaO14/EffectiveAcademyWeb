import { MD5 } from 'crypto-js';

const envs = import.meta.env;

const ts = Date.now().toString();
const hash = MD5(ts + envs.VITE_PRIVATE_KEY + envs.VITE_API_KEY).toString();

export default {
  apiKey: envs.VITE_API_KEY,
  baseApiUrl: envs.VITE_BASE_URL,
  privateKey: envs.VITE_PRIVATE_KEY,
  ts,
  hash,
  limit: 20
};
