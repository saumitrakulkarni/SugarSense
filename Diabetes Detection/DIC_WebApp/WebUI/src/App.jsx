import { useState } from 'react';
import './App.css';
import Card from './Card';
import ToggleSwitch from './ToggleSwitch';
import { CirclesWithBar } from 'react-loader-spinner';
import { questionsData } from './constant';

function App() {
  const [questions, setQuestions] = useState([...questionsData]);
  const [stage, setStage] = useState('start');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [condition, setCondition] = useState('');

  const updateAnswer = (value) => {
    let q = [...questions];
    q[currentIndex].ans = value;
    setQuestions(q);
  };

  const getUIElement = (index) => {
    switch (index) {
      case 0: {
        return (
          <input
            type='number'
            style={{
              padding: '10px',
              fontSize: '16px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              boxSizing: 'border-box',
              width: '100%',
              marginBottom: '10px',
            }}
            placeholder='Age'
            name='Age'
            value={questions[index].ans}
            min='1'
            max='120'
            onChange={(e) => {
              let q = [...questions];
              q[index].ans = e.target.value;
              setQuestions(q);
            }}
          />
        );
      }
      case 1: {
        return (
          <input
            type='number'
            style={{
              padding: '10px',
              fontSize: '16px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              boxSizing: 'border-box',
              width: '100%',
              marginBottom: '10px',
            }}
            placeholder='Annual Income in USD'
            name='Income'
            value={questions[index].ans}
            onChange={(e) => {
              let q = [...questions];
              q[index].ans = e.target.value;
              setQuestions(q);
            }}
          />
        );
      }
      case 2: {
        return (
          <ToggleSwitch
            value={questions[currentIndex].ans}
            updateAnswer={updateAnswer}
          />
        );
      }
      case 3: {
        return (
          <ToggleSwitch
            value={questions[currentIndex].ans}
            updateAnswer={updateAnswer}
          />
        );
      }
      case 4: {
        return (
          <ToggleSwitch
            value={questions[currentIndex].ans}
            updateAnswer={updateAnswer}
          />
        );
      }
      case 5: {
        return (
          <ToggleSwitch
            value={questions[currentIndex].ans}
            updateAnswer={updateAnswer}
          />
        );
      }
      case 6: {
        return (
          <ToggleSwitch
            value={questions[currentIndex].ans}
            updateAnswer={updateAnswer}
          />
        );
      }
      case 7: {
        return (
          <input
            type='number'
            style={{
              padding: '10px',
              fontSize: '16px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              boxSizing: 'border-box',
              width: '100%',
              marginBottom: '10px',
            }}
            placeholder='Body Mass Index'
            name='BMI'
            value={questions[index].ans}
            min='12'
            max='50'
            onChange={(e) => {
              let q = [...questions];
              q[index].ans = e.target.value;
              setQuestions(q);
            }}
          />
        );
      }
      case 8: {
        return (
          <ToggleSwitch
            value={questions[currentIndex].ans}
            updateAnswer={updateAnswer}
          />
        );
      }
      case 9: {
        return (
          <ToggleSwitch
            value={questions[currentIndex].ans}
            updateAnswer={updateAnswer}
          />
        );
      }
      case 10: {
        return (
          <input
            type='number'
            style={{
              padding: '10px',
              fontSize: '16px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              boxSizing: 'border-box',
              width: '100%',
              marginBottom: '10px',
            }}
            placeholder='Number of days'
            name='PHealth'
            min={1}
            max={5}
            value={questions[index].ans}
            onChange={(e) => {
              let q = [...questions];
              q[index].ans = e.target.value;
              setQuestions(q);
            }}
          />
        );
      }
      case 11: {
        return (
          <input
            type='number'
            style={{
              padding: '10px',
              fontSize: '16px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              boxSizing: 'border-box',
              width: '100%',
              marginBottom: '10px',
            }}
            placeholder='Number of days'
            name='PHealth'
            min={0}
            max={30}
            value={questions[index].ans}
            onChange={(e) => {
              let q = [...questions];
              q[index].ans = e.target.value;
              setQuestions(q);
            }}
          />
        );
      }
      case 12: {
        return (
          <input
            type='number'
            style={{
              padding: '10px',
              fontSize: '16px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              boxSizing: 'border-box',
              width: '100%',
              marginBottom: '10px',
            }}
            placeholder='Number of days'
            name='MHealth'
            min={0}
            max={30}
            value={questions[index].ans}
            onChange={(e) => {
              let q = [...questions];
              q[index].ans = e.target.value;
              setQuestions(q);
            }}
          />
        );
      }
      case 13: {
        return (
          <ToggleSwitch
            value={questions[currentIndex].ans}
            updateAnswer={updateAnswer}
          />
        );
      }
      default:
        return null;
    }
  };

  const getAge = (temp) => {
    if (temp <= 24) {
      return 1;
    } else if (temp <= 29) {
      return 2;
    } else if (temp <= 34) {
      return 3;
    } else if (temp <= 39) {
      return 4;
    } else if (temp <= 44) {
      return 5;
    } else if (temp <= 49) {
      return 6;
    } else if (temp <= 54) {
      return 7;
    } else if (temp <= 59) {
      return 8;
    } else if (temp <= 64) {
      return 9;
    } else if (temp <= 69) {
      return 10;
    } else if (temp <= 74) {
      return 11;
    } else if (temp <= 79) {
      return 12;
    }
    return 13;
  };

  const getIncome = (temp) => {
    if (temp <= 10000) {
      return 1;
    } else if (temp <= 17000) {
      return 2;
    } else if (temp <= 25000) {
      return 3;
    } else if (temp <= 32000) {
      return 4;
    } else if (temp <= 35000) {
      return 5;
    } else if (temp <= 55000) {
      return 6;
    } else if (temp <= 75000) {
      return 7;
    }
    return 8;
  };

  const getResults = async () => {
    console.log(questions);
    setIsLoading(true);
    const input = {
      HighBP: questions[2].ans ? 1 : 0,
      HighCholestrol: questions[3].ans ? 1 : 0,
      BodyMassIndex: parseInt(questions[7].ans),
      Smoker: questions[4].ans ? 1 : 0,
      Stroke: questions[5].ans ? 1 : 0,
      HeartDisease: questions[8].ans ? 1 : 0,
      PhysicalActivity: questions[9].ans ? 1 : 0,
      Fruits: questions[6].ans ? 1 : 0,
      Veggies: questions[6].ans ? 1 : 0,
      HighAlcohol: questions[4].ans ? 1 : 0,
      GeneralHealth: parseInt(questions[10].ans),
      MentalHealth: parseInt(questions[12].ans),
      PhysicalHealth: parseInt(questions[11].ans),
      DifficultyWalking: questions[13].ans ? 1 : 0,
      Sex: 0,
      Age: getAge(parseInt(questions[0].ans)),
      Income: getIncome(parseInt(questions[1].ans)),
      Fruits_and_Veggies: questions[6].ans ? 1 : 0,
    };
    const res = await fetch('http://localhost:3005/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(input),
    });

    const data = await res.json();
    const { prediction } = data;
    if (prediction === '0') {
      setCondition('non-diabetic');
    } else if (prediction === '1') {
      setCondition('pre-diabetic');
    } else if (prediction === '2') {
      setCondition('diabetic');
    }
    setIsLoading(false);
  };

  return (
    <div>
      {isLoading && (
        <div className='loading-screen'>
          <CirclesWithBar
            height='100'
            width='100'
            color='cyan'
            wrapperStyle={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
            wrapperClass=''
            visible={true}
            outerCircleColor=''
            innerCircleColor=''
            barColor=''
            ariaLabel='circles-with-bar-loading'
          />
        </div>
      )}
      <h2 style={{ marginBottom: '50px' }}>
        Welcome! Enter your details below to know your diabetic condition.
      </h2>
      <div>
        {stage === 'start' && (
          <div className='q-card'>
            <h3>Hi 👋. Let's gather some information about you.</h3>
            <button className='start-button' onClick={() => setStage('mid')}>
              Start ▶️
            </button>
          </div>
        )}
        {stage === 'mid' && (
          <>
            <h3>Please answer these few questions.</h3>
            <Card question={questions[currentIndex]}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '150px',
                  justifyContent: 'space-between',
                  marginBottom: '10px',
                }}
              >
                {getUIElement(currentIndex)}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <button
                    className='move-button'
                    disabled={currentIndex == 0}
                    onClick={() => setCurrentIndex(currentIndex - 1)}
                  >
                    ⬅️
                  </button>
                  <button
                    className='move-button'
                    onClick={() => {
                      if (currentIndex == questions.length - 1) {
                        setStage('end');
                        return;
                      }
                      setCurrentIndex(currentIndex + 1);
                    }}
                  >
                    ➡️
                  </button>
                </div>
              </div>
            </Card>
          </>
        )}
        {stage === 'end' && (
          <div className='q-card'>
            <h3>
              Thanks for answering. Click on Get Results button to know your
              diabetic condition.
            </h3>
            <button className='end-button' onClick={() => getResults()}>
              Get Results 🔍
            </button>
            <div>
              <button
                style={{ backgroundColor: 'white', marginTop: '10px' }}
                onClick={() => {
                  setStage('start');
                  console.log(questionsData);
                  setQuestions(questionsData);
                  setCurrentIndex(0);
                  setCondition('');
                }}
              >
                Start Again! 🔙
              </button>
            </div>
          </div>
        )}
      </div>
      <div>
        {condition === 'diabetic' && (
          <h2>
            Sorry! 🚨 Based on your data you may have diabeties. Please consult
            a doctor.
          </h2>
        )}
        {condition === 'non-diabetic' && (
          <h2>🟢 Based on your data, you don't have diabeties.</h2>
        )}
        {condition === 'pre-diabetic' && (
          <h2>
            🔔 Based on your data, you might be in a pre-diabetic condition.
            Please consult a doctor.
          </h2>
        )}
      </div>
    </div>
  );
}

export default App;
