import React from 'react';

export default function(props) {
  let a = (
    <figure class="image is-128x128">
      <img
        src={props.imageURL}
      >
    </figure>
  );

  let b = (
    <div className="content">
    </div>
  );

  if (props.index % 2 == 0) {
    return (
      <div className="columns is-vcentered">
        <div className="column">{a}</div>
        <div className="column">{b}</div>
      </div>
    );
  } else {
    return (
      <div className="columns is-vcentered">
        <div className="column">{b}</div>
        <div className="column">{a}</div>
      </div>
    );
  }
}
