import Navigation from '../components/Navigation';
import { AvgStyle } from '../styled/AvgStyle';
import { AvgButton } from '../styled/AvgButton';
import { AvgDivStyle } from '../styled/AvgDivStyle';
import { AvgInput } from '../styled/AvgInput';
import { useState } from 'react';

const Average = () => {
  const [visible, setVisible] = useState(false);
  const [valueOne, setValueOne] = useState(0);
  const [valueTwo, setValueTwo] = useState(0);
  const [valueThree, setValueThree] = useState(0);
  const [result, setResult] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const ShowVis = () => {
    setVisible(!visible);
    setResult(0);
    setShowResult(false);
  };

  const calculateNumbers = () => {
    const avg = (+valueOne + +valueTwo + +valueThree) / 3;
    setResult(avg);
    setShowResult(true);
    return avg;
  };
  return (
    <div className="avg-style">
      <Navigation />
      <AvgStyle>
        <AvgButton color="rgb(22 26 45)" onClick={ShowVis}>
          +
        </AvgButton>
        {visible && (
          <AvgDivStyle>
            <div className="temp-main">
              <AvgInput
                type="number"
                placeholder="Add Random Number"
                onChange={(e) => setValueOne(e.target.value)}
              ></AvgInput>
              <AvgInput
                type="number"
                placeholder="Add Random Number"
                onChange={(e) => setValueTwo(e.target.value)}
              ></AvgInput>
              <AvgInput
                type="number"
                placeholder="Add Random Number"
                onChange={(e) => setValueThree(e.target.value)}
              ></AvgInput>
              <AvgButton color="rgb(38 44 62)" onClick={calculateNumbers}>
                Calculate
              </AvgButton>
            </div>
            {showResult && (
              <h3 className="result">Result: {result.toFixed(2)}</h3>
            )}
          </AvgDivStyle>
        )}
      </AvgStyle>
    </div>
  );
};

export default Average;
