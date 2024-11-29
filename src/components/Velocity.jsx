import Navigation from './Navigation';
import { AvgStyle } from '../styled/AvgStyle';
import { Input } from '../styled/InputStyle';
import { VelButton } from '../styled/VelButton';
import { useState } from 'react';
import { Select } from '../styled/SelectStyle';


const Velocity = () => {
  const [result, setResult] = useState(null);
  const [toVelocity, setToVelocity] = useState('cm/s');
  const [fromVelocity, setFromVelocity] = useState('m/s');
  const [velocity, setVelocity] = useState('');

  const handleResult = () => {
    if (toVelocity === 'cm/s' && fromVelocity === 'm/s') {
      setResult(+velocity / 100);
    } else if (
      toVelocity === 'cm/s' &&
      fromVelocity === 'km/s'
    ) {
      setResult(+velocity * 0.00001);
    } else if (toVelocity === 'm/s' && fromVelocity === 'cm/s') {
      setResult(+velocity * 100);
    } else if (toVelocity === 'm/s' && fromVelocity === 'km/s') {
      setResult(+velocity / 1000);
    } else if (toVelocity === 'km/s' && fromVelocity === 'cm/s') {
      setResult(+velocity * 100000);
    } else {
      setResult(+velocity * 1000);
    }
  }

  return (
    <div className="avg-style">
      <Navigation />
      <AvgStyle>
        <div className="avg-style-two">
        <Input
              onChange={(e) => setVelocity(e.target.value)}
              type="number"
              placeholder="Value"
            />
        <Select onChange={(e) => setToVelocity(e.target.value)}>
              {fromVelocity !== 'cm/s' && <option>CentiMeter / Second [cm/s]</option>}
              {fromVelocity !== 'm/s' && <option>Meter / Second [m/s]</option>}
              {fromVelocity !== 'km/s' && <option>Kilometer / Second [km/s]</option>}
            </Select>
            <Select onChange={(e) => setFromVelocity(e.target.value)}>
              {toVelocity !== 'cm/s' && <option>CentiMeter / Second [cm/s]</option>}
              {toVelocity !== 'm/s' && <option>Meter / Second [m/s]</option>}
              {toVelocity !== 'km/s' && <option>Kilometer / Second [km/s]</option>}
            </Select>
          <VelButton onClick={handleResult} color="rgb(22 26 45)">
            =
          </VelButton>
          {result && <h3 className="result-vel">Result : {parseFloat(result).toFixed(2)} {fromVelocity}</h3>}
        </div>
      </AvgStyle>
    </div>
  );
};

export default Velocity;
