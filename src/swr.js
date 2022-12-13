import useSwr from 'swr'



const fetcher = async () => {
    const response = await fetch('https://blynk.cloud/external/api/get?token=UUL4MqaUWqPqjASiXPp9X7ix3Qt-oyTw&V4&V5&V6&V7&V8')
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

