import useSwr from 'swr'


const token = 'UUL4MqaUWqPqjASiXPp9X7ix3Qt-oyTw'
const pin = 'V5'


const fetcher = async () => {
    const response = await fetch('https://blynk.cloud/external/api/get?token=UUL4MqaUWqPqjASiXPp9X7ix3Qt-oyTw&V5&V6')
    const data = await response.json()
    return data
  }

export default function useSensor(){
    const { data, error } = useSwr('/', fetcher)
    return {
        data: data,
        isLoading: !error && !data,
        isError: error
    }
}

