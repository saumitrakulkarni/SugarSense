import React, { useEffect, useState } from 'react';
import ReactSwitch from 'react-switch';

function ToggleSwitch({ updateAnswer, value }) {
  const [checked, setChecked] = useState(value);

  useEffect(() => {
    setChecked(value);
  }, [value]);

  const handleChange = (val) => {
    setChecked(val);
    updateAnswer(val);
  };

  return (
    <div className='app' style={{ textAlign: 'center' }}>
      {checked ? (
        <h4 style={{ color: 'green' }}>YES</h4>
      ) : (
        <h4 style={{ color: 'red' }}>NO</h4>
      )}
      <ReactSwitch checked={checked} onChange={handleChange} />
    </div>
  );
}

export default ToggleSwitch;
