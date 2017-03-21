# React selectr (Temporary name)
A select component for react, packed with power.

## FEATURES / TODO LIST
- **DONE** Support OptionGroup
- **DONE** Searchable and Separate SearchInput box from value box (as in Select2)
- **DONE** filterOptions/filterOption

#### TODO
- Add hidden input tag for form submission
- Custom render Option, Value
- Play nicely with huge dataset
- User friendly across devices and screens
- Add Event hooks.
  - onFocus
  - onChange
  - onValueAdd
  - onValueRemove
  - onOpen
  - onClose
  - onSearchInputFocus
  - onSearchInputChange
  - onSearchInputKeydown
  - onSearchInputBlur
- Remote Data fetching
- Create Option on a fly

## PropTypes

| Property | Type | Default |  Description |
|:---|:---|:---|:---|
| disabled | `Boolean` | `false` |  |
| multiple | `Boolean` | `false` |  |
| searchable | `Boolean` | `true` |  |
| extractValueOption | `Boolean` |  |  |
| value | `String` |  |  |
| options | `Array` |  |  |
| placeholder | `String` |  |  |
| keepSearchValue | `Boolean` | `false` |  |
| optionPosition | `String` | `dropdown` |  |
| filterOption | `function` |  |  |
| filterOptions | `function` |  |  |
| onChange | `function` |  |  |
| onInputChange | `function` |  |  |
| onInputKeydown | `function` |  |  |
| customRenderOption | `function` |  |  |
| customRenderOption | `function` |  |  |
| customRenderOptionGroupLabel | `function` |  |  |
| customRenderInput | `function` |  |  |


## Usage

### The Basic use
By minimum, you'll need to pass value, options and onChange prop to the component.

``` js
function handleChange(key, val) {
	console.log(key ' select: ' + val);
}

<Select
  value=""
  options={[
    { value: 'M', label: 'MALE' },
    { value: 'F', label: 'FEMALE' },
  ]}
  onChange={value => this.handleChange('gender', value)}
/>
```

### Option groups
React Selectr also support option groups, pass options inside options to create a group options. Note that you don't have to pass value to each group option, since group is not a selectable option (in this example, strength, agility, intelligent is just group header).

``` js
function handleChange(key, val) {
	console.log(key ' select: ' + val);
}

<Select
  value=""
  onChange={value => this.handleChange('hero', value)}
  options={[
    {
      "label": "Strength",
      "options": [
        { value: "axe", label: "Axe" },
        { value: "earthshaker", label: "Earth Shaker" },
        { value: "pudge", label: "Pudge" },
        { value: "sand_king", label: "Sand King" },
        { value: "sven", label: "Sven" },
        { value: "tiny", label: "Tiny" },
      ]
    },
    {
      "label": "Agility",
      "options": [
        { value: "antimage", label: "Anti-Mage" },
        { value: "bloodseeker", label: "Bloodseeker" },
        { value: "drow_ranger", label: "Drow Ranger" },
        { value: "juggernaut", label: "Juggernaut" },
        { value: "mirana", label: "Mirana" },
        { value: "nevermore", label: "Shadow Fiend" },
        { value: "morphling", label: "Morphling" },
      ]
    },
    {
      "label": "Intelligent",
      "options": [
        { value: "bane", label: "Bane" },
        { value: "crystal_maiden", label: "Crystal Maiden" },
        { value: "puck", label: "Puck" },
        { value: "storm_spirit", label: "Storm Spirit" },
        { value: "zuus", label: "Zeus" },
        { value: "lina", label: "Lina" },
      ],
    }
  ]}
  />

```

### Multiple select box
Enable multi select by passing `multiple`

``` js
function handleChange(key, val) {
	console.log(key ' select: ' + val);
}

<Select
  multiple
  value={''}
  options={[
    { value: 'M', label: 'MALE' },
    { value: 'F', label: 'FEMALE' },
  ]}
  onChange={value => this.handleChange('gender', value)}
/>
```

### Search and Customizing Search algorithm
By default search will find options that contains all the search words (separate by space)

#### filterOption
``` js
  filterOption()
```

``` js

<Select
  value={''}
  options={[
    { value: 'M', label: 'MALE' },
    { value: 'F', label: 'FEMALE' },
  ]}
  onChange={value => this.handleChange('gender', value)}
/>
```

#### SUGGESTIONS WELCOME HERE
Feel free to drop in suggestion in issues, we'll make it done.
