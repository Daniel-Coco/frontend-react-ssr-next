import React, { useState, Fragment } from 'react';

const InputTest = () => {
  const initialState = {
    text: '',
    number: 0,
    textLength: 0,
    numberLength: 0,
  };
  const [state, setValue] = useState(initialState);

  const items = [
    { title: 'Text', type: 'text', length: state.textLength },
    { title: 'Number', type: 'number', length: state.numberLength },
  ];

  const onChange = (item, value) => {
    setValue({
      ...state,
      [item.type]: value,
      textLength: item.type === 'text' ? value.length : state.textLength,
      numberLength: item.type === 'number' ? value.length : state.numberLength,
    });
  };

  const renderElements = items.map((item, index) => [
    <Fragment key={item.type}>
      <div>
        <h4>{`${index + 1}. ${item.title}`}</h4>
        <p>
          {' '}
          {`input value : ${state[item.type]}`}
          {' '}
        </p>
        <p>
          {' '}
          {`value length : ${item.length}`}
          {' '}
        </p>
        <input
          type={item.type}
          value={state[item.type]}
          onChange={(e) => onChange(item, e.target.value)}
        />
      </div>
    </Fragment>,
  ]);

  return renderElements;
};

export default InputTest;
