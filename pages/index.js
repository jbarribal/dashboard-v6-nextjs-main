import Content from '../src/components/content';
import useSensor from '../src/swr';

export default function HomePage() {

  const { data, isLoading, isError } = useSensor()
  let { 
    V4: current,
    V5: power, 
    V6: voltage,  
    V7: energy,
    V8: totalFlow,

  } = data || {}

  
  return <Content  
  current={current} 
  power={power}
  voltage={voltage}
  energy={energy}
  totalFlow={totalFlow}
  />; 
}
