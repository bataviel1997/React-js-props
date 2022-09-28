import React from 'react';

export default function MyButton(props) {
  return (
    <button
      style={{
        backgroundColor: props.bgColor,
        border: 'none',
        outline: 'none',
        color: props.color,
        padding: '8px 12px',
        margin: '12px',
        borderRadius: '8px',
      }}
      onClick={props.onClick}
    >
      {props.content}
    </button>
  );
}
