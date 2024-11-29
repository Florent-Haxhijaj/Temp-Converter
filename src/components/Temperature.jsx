import Navigation from './Navigation';
import { AvgStyle } from '../styled/AvgStyle';
import { Input } from '../styled/InputStyle';
import { Select } from '../styled/SelectStyle';
import { useState } from 'react';
import { AvgButton } from '../styled/AvgButton';

const Temperature = () => {
  const [toTemperature, setToTemperature] = useState('Celsius');
  const [fromTemperature, setFromTemperature] = useState('Kelvin');
  const [temperature, setTemperature] = useState('');
  const [result, setResult] = useState(null);

  const handleResult = () => {
    console.log(toTemperature);
    console.log(fromTemperature);
    console.log(temperature);

    if (toTemperature === 'Celsius' && fromTemperature === 'Kelvin') {
      setResult(+temperature + 273.15 );
    } else if (
      toTemperature === 'Celsius' &&
      fromTemperature === 'Farenheit'
    ) {
      setResult((+temperature * 9) / 5 + 32 );
    } else if (toTemperature === 'Kelvin' && fromTemperature === 'Celsius') {
      setResult(+temperature - 273.15 );
    } else if (toTemperature === 'Kelvin' && fromTemperature === 'Farenheit') {
      setResult(+temperature - 273.15 * 1.8 + 32 );
    } else if (toTemperature === 'Farenheit' && fromTemperature === 'Celsius') {
      setResult(((+temperature - 32) * 5) / 9 );
    } else {
      setResult(((+temperature - 32) * 5) / 9 + 273.15 );
    }
  };

  return (
    <div className="avg-style">
      <Navigation />
      <AvgStyle>
        <div className="temp-main">
          <div>
            <Input
              onChange={(e) => setTemperature(e.target.value)}
              type="number"
              placeholder="Tempurature Converter"
            />
          </div>
          <div className="temp-style">
            <Select onChange={(e) => setToTemperature(e.target.value)}>
              {fromTemperature !== 'Celsius' && <option>Celsius</option>}
              {fromTemperature !== 'Kelvin' && <option>Kelvin</option>}
              {fromTemperature !== 'Farenheit' && <option>Farenheit</option>}
            </Select>
            <Select onChange={(e) => setFromTemperature(e.target.value)}>
              {toTemperature !== 'Celsius' && <option>Celsius</option>}
              {toTemperature !== 'Kelvin' && <option>Kelvin</option>}
              {toTemperature !== 'Farenheit' && <option>Farenheit</option>}
            </Select>
          </div>
          <AvgButton color="rgb(22 26 45)" onClick={handleResult}>
            Convert
          </AvgButton>
          {result && <h3>Result : {parseFloat(result).toFixed(2)} {fromTemperature}</h3>}
        </div>
      </AvgStyle>
    </div>
  );
};

export default Temperature;
