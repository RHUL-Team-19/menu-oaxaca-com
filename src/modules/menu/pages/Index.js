import React from 'react';

import Title from '../../../components/Title';

import MealsListContainer from '../containers/MealsListContainer';

export default function() {
  return (
    <div className="section">
      <div className="box">
        <Title
          title="Menu"
          subtitle="Browse and filter the Oaxaca menu"
        />
        <MealsListContainer />
      </div>
    </div>
  );
}
