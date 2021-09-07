import React,{useState} from 'react';
import { Button } from 'react-native';

export default function Toggle(props) {
  const [isToggleOn, setToggleOn] = useState(true);

  function handleClick() {
    setToggleOn(!isToggleOn);
    if (isToggleOn) {
      props.stop();
    }
    else {
      props.start();
    }
  }

  return (
    <Button onPress={handleClick} title={isToggleOn ? 'Stop' : 'Start'}>
    </Button>
  )
}