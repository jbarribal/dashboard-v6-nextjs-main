import Content from '../src/components/content';
import useSensor from '../src/swr';

export default function HomePage() {

  const { data, isLoading, isError } = useSensor()
  let { V5: temperature, V6: humidity } = data || {}

  
  return <Content  temperature={temperature} humidity={humidity}/>; 
}
