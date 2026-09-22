import axios from 'axios';
import type { IUser } from '../interfaces/User';

const API_URL = 'http://localhost:3009/user';   // ← singular

export const getUserAxios = async (): Promise<IUser[]> => {
  const { data } = await axios.get<IUser[]>(API_URL);
  return data;
};

export const crearUserAxios = async (user: IUser): Promise<IUser> => {
  const { data } = await axios.post<IUser>(API_URL, user);
  return data;
};

export const getUserFetch = async (): Promise<IUser[]> => {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
};

export const crearUserFetch = async (user: IUser): Promise<IUser> => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });
  return res.json();
};