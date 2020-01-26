# Measurement Toolkit

Perform math operations and conversions on object-oriented weights & measurements.

[![Build Status](https://travis-ci.org/baspeeters/measurement-toolkit.svg?branch=master)](https://travis-ci.org/baspeeters/measurement-toolkit)  [![codecov](https://codecov.io/gh/baspeeters/measurement-toolkit/branch/master/graph/badge.svg)](https://codecov.io/gh/baspeeters/measurement-toolkit) [![Gitter](https://badges.gitter.im/measurement-toolkit/community.svg)](https://gitter.im/measurement-toolkit/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

## Basic Usage

### Conversion

```javascript
import {Gram} from "measurement-toolkit";

const grams = new Gram(245);
const ounces = grams.to.Ounce();

> Ounce {
>   value: 8.6421206776472
> }
```

### Math operations
```javascript
import {Kilogram, TroyOunce} from "measurement-toolkit";

const kgs = new Kilogram(5);
const toz = new TroyOunce(3);

kgs.subtract(toz);

> Kilogram {
>   value: 4.9066895696
> }
```

## Unit support

<table>
  <tr>
    <th>Measure</th>
    <th colspan="2">System</th>
    <th>Units</th>
  </tr>
  <tr>
    <td rowspan="3">Mass</td>
    <td colspan="2">SI</td>
    <td>
      <code>Kilogram</code>,
      <code>Attogram</code>,
      <code>Centigram</code>,
      <code>Decagram</code>,
      <code>Decigram</code>,
      <code>Exagram</code>,
      <code>Femtogram</code>,
      <code>Gigagram</code>,
      <code>Gram</code>,
      <code>Hectogram</code>,
      <code>Megagram</code>,
      <code>Microgram</code>,
      <code>Milligram</code>,
      <code>Nanogram</code>,
      <code>Petagram</code>,
      <code>Picogram</code>,
      <code>Teragram</code>,
      <code>Yoctogram</code>,
      <code>Yottagram</code>,
      <code>Zeptogram</code>,
      <code>Zettagram</code>
    </td>
  </tr>
  <tr>
    <td rowspan="2">US</td>
    <td>Avoirdupois</td>
    <td>
      <code>Dram</code>,
      <code>Grain</code>,
      <code>Hundredweight</code>,
      <code>Ounce</code>,
      <code>Pound</code>,
      <code>Quarter</code>,
      <code>AvoirdupoisTon</code>
    </td>
  </tr>
  <tr>
    <td>Troy</td>
    <td>
      <code>TroyOunce</code>,
      <code>TroyPound</code>
    </td>
  </tr>
  <tr>
    <td>Length</td>
    <td colspan="2">SI</td>
    <td>
      <code>Kilometer</code>,
      <code>Attometer</code>,
      <code>Centimeter</code>,
      <code>Decameter</code>,
      <code>Decimeter</code>,
      <code>Exameter</code>,
      <code>Femtometer</code>,
      <code>Gigameter</code>,
      <code>Meter</code>,
      <code>Hectometer</code>,
      <code>Megameter</code>,
      <code>Micrometer</code>,
      <code>Millimeter</code>,
      <code>Nanometer</code>,
      <code>Petameter</code>,
      <code>Picometer</code>,
      <code>Terameter</code>,
      <code>Yoctometer</code>,
      <code>Yottameter</code>,
      <code>Zeptometer</code>,
      <code>Zettameter</code>
   </td>
  </tr>
</table>

## Installation

```
npm i measurement-toolkit
```

## Testing

### Run tests
```
npm test
```

### Run Linter
```
npm run lint
```

### Coverage

#### Run tests with coverage
```
npm run test:coverage
```

#### Coverage graph
[![Code Coverage](https://codecov.io/gh/baspeeters/measurement-toolkit/branch/master/graphs/sunburst.svg)](https://codecov.io/gh/baspeeters/measurement-toolkit)
