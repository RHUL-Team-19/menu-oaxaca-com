import React from 'react';

import Heading from '../../../components/Heading';
import Separator from '../../../components/Separator';

const NutritionalBoolean = function(props) {
  if (props.state === true) {
    return (
      <span className="tag is-success">Yes</span>
    );
  } else {
    return (
      <span className="tag is-danger">Yes</span>
    );
  }
}

const NutritionTable = function(props) {
  return (
    <div>
      <p className="is-size-4">
        Nutritional information
      </p>

      <table className="table is-fullwidth">
        <tbody>
          <tr>
            <th>Is vegan</th>
            <th><NutritionalBoolean state={props.meal.is_vegan} /></th>
          </tr>

          <tr>
            <th>Is vegetarian</th>
            <th><NutritionalBoolean state={props.meal.is_vegetarian} /></th>
          </tr>

          <tr>
            <th>Contains egg</th>
            <th><NutritionalBoolean state={props.meal.does_contain_egg} /></th>
          </tr>

          <tr>
            <th>Contains soy</th>
            <th><NutritionalBoolean state={props.meal.does_contain_soy} /></th>
          </tr>

          <tr>
            <th>Contains fish</th>
            <th><NutritionalBoolean state={props.meal.does_contain_fish} /></th>
          </tr>

          <tr>
            <th>Contains lactose</th>
            <th><NutritionalBoolean state={props.meal.does_contain_lactose} /></th>
          </tr>

          <tr>
            <th>Contains wheat</th>
            <th><NutritionalBoolean state={props.meal.does_contain_wheat} /></th>
          </tr>

          <tr>
            <th>Contains nuts</th>
            <th><NutritionalBoolean state={props.meal.does_contain_nuts} /></th>
          </tr>

          <tr>
            <th>Contains gluten</th>
            <th><NutritionalBoolean state={props.meal.does_contain_gluten} /></th>
          </tr>

          <tr>
            <th>Contains dairy</th>
            <th><NutritionalBoolean state={props.meal.does_contain_dairy} /></th>
          </tr>
        </tbody>
      </table>
    </div>
  );
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

const ImagePriceDescription = function(props) {
  return (
    <div>
      <Image
        url={props.meal.image_url}
        description={props.meal.description}
      />

      <div className="content">
        <Heading
          title={props.meal.name}
          subtitle={`£${props.meal.price}`}
        />

        <p className="is-size-5">
          {props.meal.description}
        </p>
      </div>
    </div>
  );
}

export default function(props) {
  if (props.index % 2 === 0) {
    return (
      <div>
        <div className="columns is-vcentered">
          <div className="column is-hidden-mobile">
            <ImagePriceDescription meal={props.data} />
          </div>

          <div className="column is-three-fifths">
            <NutritionTable meal={props.data} />
          </div>
        </div>

        <Separator />
      </div>
    );
  } else {
    return (
      <div>
        <div className="columns is-vcentered">
          <div className="column is-three-fifths">
            <NutritionTable meal={props.data} />
          </div>

          <div className="column is-hidden-mobile">
            <ImagePriceDescription meal={props.data} />
          </div>
        </div>
        <Separator />
      </div>
    );
  }
}
