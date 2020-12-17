import React from 'react';

import { Button } from '@progress/kendo-react-buttons';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import { NumericTextBox } from '@progress/kendo-react-inputs';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';

import '@progress/kendo-theme-default/dist/all.css';
import './App.css';

import nutrition from './nutrition.json';

const App = () => {
  const state = {
    data: nutrition,
    habitsOptions: [
      'Drink Some Water as much as possible.',
      'Exercise Regularly.',
      'Train the mind.',
      'Eat a balanced diet.',
      'Live diligently with responsibility.',
    ],
  };

  return (
    <div className="App">
      <div className="list">
        <h1>Healthy Habits</h1>
        <DropDownList data={state.habitsOptions} />
        <NumericTextBox />
        <Button>Add habit</Button>
      </div>
      <section className="grid">
        <Grid data={state.data}>
          <Column field="Description" title="Food" />
          <Column field="Measure" title="Amount" />
          <Column field="Protein(g)Per Measure" title="Protein" />
          <Column
            field="Carbohydrate, by difference(g)Per Measure"
            title="Carbohydrate"
          />
          <Column field="Sugars, total(g)Per Measure" title="Sugar" />
        </Grid>
      </section>
    </div>
  );
};

export default App;
