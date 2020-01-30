import React from 'react';
import { get } from 'axios';

import Meal from '../components/Meal';

export default class extends React.Component {
  state = {
    meals: [],
    error: {
      hasError: false,
      message: null,
    },
  };

  componentDidMount() {
    get("https://api-oaxaca-com.wsantos.net/menu/")
      .then(resp => {
        this.setState({
          meals: resp.data,
        });
      })
      .catch(err => {
        this.setState({
          error: {
            hasError: true,
            message: err,
          }
        });
      });
  }

  render() {
    if (!this.state.meals) {
      return (
        <div className="content has-text-centered">
          <p className="is-size-4">
            Loading menu...
          </p>
        </div>
      )
    } else if (this.state.error.hasError) {
      return (
        <div class="notification is-danger">
          Unable to load menu. Please try again later.
        </div>
      );
    } else {
      return (
        <ul>
          {this.state.meals.map((meal, i) => (
            <Meal key={i} index={i} data={meal} />
          ))}
        </ul>
      )
    }
  }
}
