import React, { useState } from 'react';

import Meal from '../components/Meal';

import { withMenu } from '../providers/menu';

export default function(props) {
  return withMenu(function(req) {
    const [data, setData] = useState(null);

    req.then((resp) => setData(resp.data));

    if (!data) {
      return (
        <div className="content has-text-centered">
          <p className="is-size-4">
            Loading menu...
          </p>
        </div>
      )
    } else {
      return (
        <ul>
          {data.map((meal, i) => (
            <Meal key={i} index={i} data={meal} />
          ))}
        </ul>
      )
    }
  })();
}
