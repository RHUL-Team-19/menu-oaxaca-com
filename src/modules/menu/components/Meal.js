import React from 'react';

import Heading from '../../../components/Heading';

const NutritionalFlag = function(props) {
  if (props.value) {
    return (
      <span class="tag is-danger">
        Yes
      </span>
    );
  } else {
    return (
      <span class="tag is-success">
        No
      </span>
    );
  }
}

const Image = function(props) {
  return (
    <figure className="image">
      <img
        src={props.url}
        alt={props.description}
      />
    </figure>
  );
}

const Description = function(props) {
  return (
    <div className="content">
      <Heading
        title={props.name}
        subtitle={`£${props.price}`}
      />

      <p>
        {props.description}
      </p>

      <b>Nutritional information:</b>
      <ul>
        <li>
          <b>Is vegan:</b>
          <NutritionalFlag value={props.vegan} />
        </li>

        <li>
          <b>Is Vegetarian:</b>
          <NutritionalFlag value={props.vegetarian} />
        </li>

        <li>
          <b>Contains egg:</b>
          <NutritionalFlag value={props.egg} />
        </li>

        <li>
          <b>Contains soy:</b>
          <NutritionalFlag value={props.soy} />
        </li>

        <li>
          <b>Contains fish:</b>
          <NutritionalFlag value={props.fish} />
        </li>

        <li>
          <b>Contains lactose:</b>
          <NutritionalFlag value={props.lactose} />
        </li>

        <li>
          <b>Contains wheat:</b>
          <NutritionalFlag value={props.wheat} />
        </li>

        <li>
          <b>Contains nuts:</b>
          <NutritionalFlag value={props.nuts} />
        </li>

        <li>
          <b>Contains gluten:</b>
          <NutritionalFlag value={props.gluten} />
        </li>

        <li>
          <b>Contains dairy:</b>
          <NutritionalFlag value={props.dairy} />
        </li>
      </ul>
    </div>
  );
}

export default function(props) {
  if (props.index % 2 === 0) {
    return (
      <div className="columns is-vcentered">
        <div className="column">
          <Image
            url={props.data.image_url}
            description={props.data.description}
          />
        </div>

        <div className="column">
          <Description
            name={props.data.name}
            price={props.data.price}
            description={props.data.description}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="columns is-vcentered">
        <div className="column">
          <Description
            name={props.data.name}
            price={props.data.price}
            description={props.data.description}
          />
        </div>

        <div className="column">
          <Image
            url={props.data.image_url}
            description={props.data.description}
          />
        </div>
      </div>
    );
  }
}
