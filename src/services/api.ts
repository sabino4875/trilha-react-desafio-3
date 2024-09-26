import axios, { AxiosResponse } from 'axios';
import { User } from '../models/user';
import { Feed } from '../models/feed';

const instance = axios.create({
    baseURL: 'http://localhost:8765',
    timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
    get: (url: string) => instance.get(url).then(responseBody),
    post: (url: string, body: string) => instance.post(url, body, {headers: {
        'Content-Type': 'application/json'
    }}).then(responseBody),
    put: (url: string, body: string) => instance.put(url, body, {headers: {
        'Content-Type': 'application/json'
    }}).then(responseBody),
    delete: (url: string) => instance.delete(url).then(responseBody),
    login: (url: string, body: string) => instance.post(url, body, {headers: {
        'Content-Type': 'application/x-www-form-urlencode'
    }}).then(responseBody)
};

export const Api = {
    login: (email: string, senha: string): Promise<User> => requests.login(`/users`, JSON.stringify({'email': email, 'senha': senha})),
    register: (user: User): Promise<User> => requests.post(`/users`, JSON.stringify(user)),
    feeds: (user: string): Promise<Feed> => requests.get(`/feeds?userId=${user}`),
}