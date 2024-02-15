
import axios from 'axios';
import DeviceInfo from 'react-native-device-info';

const headerConfig = async () => {

    const config = {
        headers: {
            device_id: await DeviceInfo.getUniqueId(),
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    };

    return config;
};



export const http = axios.create({
    baseURL: process.env.API_URL + '/api/'
});


export async function httpQuery<U>(
    path: string,
    body?: any,
): Promise<U> {
    const config = await headerConfig();

    console.log(`\n`, { baseURL: process.env.API_URL }, `\n`, { path, body })


    const { data } = body ? await http.post(path, body, config) : await http.get(path, config);

    return data;
}


