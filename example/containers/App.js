import React, { Component } from 'react';
import Select from 'react-selectr';
import '../../src/scss/react-selectr.scss';
import _ from 'lodash';

import countries from './countries';
import dotaHeroes from './data/dota-heroes';

const countriesOptions = countries.map((item) => {
  return {
    label: item.country,
    options: item.states,
  }
});

const countriesOptions2 = _.reduce(countries, (accumulator, item, index) => {
  const states = item.states.map((state) => {
    return {
      label: state,
      value: state,
    };
  });
  return [ ...accumulator, ...states];
}, []);


function fuzzysearch (needle, haystack) {
  var hlen = haystack.length;
  var nlen = needle.length;
  if (nlen > hlen) {
    return false;
  }
  if (nlen === hlen) {
    return needle === haystack;
  }
  outer: for (var i = 0, j = 0; i < nlen; i++) {
    var nch = needle.charCodeAt(i);
    while (j < hlen) {
      if (haystack.charCodeAt(j++) === nch) {
        continue outer;
      }
    }
    return false;
  }
  return true;
}

export default class App extends Component {

  state = {
    value1: '',
    valueHero: '',
    valueMultiple: '',
    valueCustomRender: '',
    valueCountry: '',
  }

  handleChange = (key, value) => {
    this.setState({
      [key]: value,
    })
  }

  render() {
    const {
      value1,
      valueHero,
      valueMultiple,
      valueCustomRender,
      valueCountry,
      valueCustomSearch1,
      valueCustomSearch2,
      valueCustomSearch3,
    } = this.state;

    return (
      <div className="container">
        <h1>React-selectr</h1>

        <h2>Normal</h2>
        <Select
          value={value1}
          options={[
            { value: 'M', label: 'MALE' },
            { value: 'F', label: 'FEMALE' },
          ]}
          onChange={value => this.handleChange('value1', value)}
        />


        <h2>OptGroup (Dota2 Heroes)</h2>
        <Select
          disabled
          value={valueHero}
          options={dotaHeroes}
          onChange={value => this.handleChange('valueHero', value)}
        />

        <h2>Multiple</h2>
        <Select
          multiple
          value={valueMultiple}
          options={[
            { value: 'M', label: 'Male' },
            { value: 'F', label: 'Female' },
            { value: 'G', label: 'Gay' },
            { value: 'T', label: 'Tom' },
          ]}
          onChange={value => this.handleChange('valueMultiple', value)}
        />

      <h2>CustomRenderOption (Dota2 Heroes)</h2>
        <Select
          value={valueCustomRender}
          options={dotaHeroes}
          onChange={value => this.handleChange('valueCustomRender', value)}
          customRenderOption={(option) =>
            <div>
              <img src={`http://cdn.dota2.com/apps/dota2/images/heroes/${option.value}_sb.png`} width="50" style={{ marginRight: 5 }} />
              {option.label}
            </div>
          }
        />

        <h2>Custom Input</h2>
        <Select
          value={valueHero}
          options={dotaHeroes}
          customRenderInput={() =>
            <input type="text" defaultValue="pcious" />
          }
          onChange={value => this.handleChange('valueHero', value)}
        />

        <h2>Customize Search algorithm</h2>

        <h3>This one use default search algorithm</h3>
        <Select
          value={this.state.valueCustomSearch1}
          options={dotaHeroes}
          onChange={value => this.handleChange('valueCustomSearch1', value)}
        />

        <h3>This one use fuzzy search algorithm instead of default search</h3>
        <Select
          value={this.state.valueCustomSearch2}
          options={dotaHeroes}
          filterOption={(option, searchValue) => fuzzysearch(searchValue, option.value)}
          onChange={value => this.handleChange('valueCustomSearch2', value)}
        />

        <h3>filterOptions: This one also use fuzzy search, but different approach</h3>
        <Select
          value={this.state.valueCustomSearch3}
          options={dotaHeroes}
          filterOptions={(options, searchValue) => {
            return _.filter(options, option => fuzzysearch(searchValue, option.value));
          }}
          onChange={value => this.handleChange('valueCustomSearch3', value)}
        />

        <h3>This one use fuzzy search algorithm instead of default search</h3>
        <Select
          value={this.state.valueCustomSearch2}
          options={dotaHeroes}
          filterOption={(option, searchValue) => fuzzysearch(searchValue, option.value)}
          onChange={value => this.handleChange('valueCustomSearch2', value)}
        />


        <h2>Large DataSet (Countries)</h2>
        <Select
          value={valueCountry}
          options={countriesOptions}
          onChange={value => this.handleChange('valueCountry', value)}
        />
      
        <div style={{ padding: 100 }} />

      </div>
    );
  }
};
