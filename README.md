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

#### Example
```javascript
import {Kilogram, TroyOunce} from "measurement-toolkit";

const kgs = new Kilogram(5);
const toz = new TroyOunce(3);

kgs.subtract(toz);

> Kilogram {
>   value: 4.9066895696
> }
```

#### API
* [add()](./docs/classes/_unit_.unit.md#add)
* [divideBy()](./docs/classes/_unit_.unit.md#divideby)
* [dividedBy()](./docs/classes/_unit_.unit.md#dividedby)
* [multiply()](./docs/classes/_unit_.unit.md#multiply)
* [percentageOf()](./docs/classes/_unit_.unit.md#percentageof)
* [percentageOfThis()](./docs/classes/_unit_.unit.md#percentageofthis)
* [subtract()](./docs/classes/_unit_.unit.md#subtract)

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
      <a href="./docs/classes/_mass_si_yoctogram_.yoctogram.md">Yoctogram</a>,
      <a href="./docs/classes/_mass_si_zeptogram_.zeptogram.md">Zeptogram</a>,
      <a href="./docs/classes/_mass_si_attogram_.attogram.md">Attogram</a>,
      <a href="./docs/classes/_mass_si_femtogram_.femtogram.md">Femtogram</a>,
      <a href="./docs/classes/_mass_si_picogram_.picogram.md">Picogram</a>,
      <a href="./docs/classes/_mass_si_nanogram_.nanogram.md">Nanogram</a>,
      <a href="./docs/classes/_mass_si_microgram_.microgram.md">Microgram</a>,
      <a href="./docs/classes/_mass_si_milligram_.milligram.md">Milligram</a>,
      <a href="./docs/classes/_mass_si_centigram_.centigram.md">Centigram</a>,
      <a href="./docs/classes/_mass_si_decigram_.decigram.md">Decigram</a>,
      <a href="./docs/classes/_mass_si_gram_.gram.md">Gram</a>,
      <a href="./docs/classes/_mass_si_decagram_.decagram.md">Decagram</a>,
      <a href="./docs/classes/_mass_si_hectogram_.hectogram.md">Hectogram</a>,
      <a href="./docs/classes/_mass_si_kilogram_.kilogram.md">Kilogram</a>,
      <a href="./docs/classes/_mass_si_megagram_.megagram.md">Megagram</a>,
      <a href="./docs/classes/_mass_si_gigagram_.gigagram.md">Gigagram</a>,
      <a href="./docs/classes/_mass_si_teragram_.teragram.md">Teragram</a>,
      <a href="./docs/classes/_mass_si_petagram_.petagram.md">Petagram</a>,
      <a href="./docs/classes/_mass_si_exagram_.exagram.md">Exagram</a>,
      <a href="./docs/classes/_mass_si_zettagram_.zettagram.md">Zettagram</a>,
      <a href="./docs/classes/_mass_si_yottagram_.yottagram.md">Yottagram</a>,
    </td>
  </tr>
  <tr>
    <td rowspan="2">US</td>
    <td>Avoirdupois</td>
    <td>
      <a href="./docs/classes/_mass_us_avoirdupois_grain_.grain.md">Grain</a>,
      <a href="./docs/classes/_mass_us_avoirdupois_dram_.dram.md">Dram</a>,
      <a href="./docs/classes/_mass_us_avoirdupois_ounce_.ounce.md">Ounce</a>,
      <a href="./docs/classes/_mass_us_avoirdupois_quarter_.quarter.md">Quarter</a>,
      <a href="./docs/classes/_mass_us_avoirdupois_hundredweight_.hundredweight.md">Hundredweight</a>,
      <a href="./docs/classes/_mass_us_avoirdupois_pound_.pound.md">Pound</a>,
      <a href="./docs/classes/_mass_us_avoirdupois_avoirdupoiston_.avoirdupoiston.md">AvoirdupoisTon</a>,
    </td>
  </tr>
  <tr>
    <td>Troy</td>
    <td>
      <a href="./docs/classes/_mass_us_troy_troyounce_.troyounce.md">TroyOunce</a>,
      <a href="./docs/classes/_mass_us_troy_troypound_.troypound.md">TroyPound</a>,
    </td>
  </tr>
  <tr>
    <td>Length</td>
    <td colspan="2">SI</td>
    <td>
      <a href="./docs/classes/_length_si_yoctometer_.yoctometer.md">Yoctometer</a>,
      <a href="./docs/classes/_length_si_zeptometer_.zeptometer.md">Zeptometer</a>,
      <a href="./docs/classes/_length_si_attometer_.attometer.md">Attometer</a>,
      <a href="./docs/classes/_length_si_femtometer_.femtometer.md">Femtometer</a>,
      <a href="./docs/classes/_length_si_picometer_.picometer.md">Picometer</a>,
      <a href="./docs/classes/_length_si_nanometer_.nanometer.md">Nanometer</a>,
      <a href="./docs/classes/_length_si_micrometer_.micrometer.md">Micrometer</a>,
      <a href="./docs/classes/_length_si_millimeter_.millimeter.md">Millimeter</a>,
      <a href="./docs/classes/_length_si_centimeter_.centimeter.md">Centimeter</a>,
      <a href="./docs/classes/_length_si_decimeter_.decimeter.md">Decimeter</a>,
      <a href="./docs/classes/_length_si_meter_.meter.md">Meter</a>,
      <a href="./docs/classes/_length_si_decameter_.decameter.md">Decameter</a>,
      <a href="./docs/classes/_length_si_hectometer_.hectometer.md">Hectometer</a>,
      <a href="./docs/classes/_length_si_kilometer_.kilometer.md">Kilometer</a>,
      <a href="./docs/classes/_length_si_megameter_.megameter.md">Megameter</a>,
      <a href="./docs/classes/_length_si_gigameter_.gigameter.md">Gigameter</a>,
      <a href="./docs/classes/_length_si_terameter_.terameter.md">Terameter</a>,
      <a href="./docs/classes/_length_si_petameter_.petameter.md">Petameter</a>,
      <a href="./docs/classes/_length_si_exameter_.exameter.md">Exameter</a>,
      <a href="./docs/classes/_length_si_zettameter_.zettameter.md">Zettameter</a>,
      <a href="./docs/classes/_length_si_yottameter_.yottameter.md">Yottameter</a>,
    </td>
  </tr>
  <tr>
    <td rowspan="2">Time</td>
    <td colspan="2">SI</td>
    <td>
      <a href="./docs/classes/_time_si_yoctosecond_.yoctosecond.md">Yoctosecond</a>,
      <a href="./docs/classes/_time_si_zeptosecond_.zeptosecond.md">Zeptosecond</a>,
      <a href="./docs/classes/_time_si_attosecond_.attosecond.md">Attosecond</a>,
      <a href="./docs/classes/_time_si_femtosecond_.femtosecond.md">Femtosecond</a>,
      <a href="./docs/classes/_time_si_picosecond_.picosecond.md">Picosecond</a>,
      <a href="./docs/classes/_time_si_nanosecond_.nanosecond.md">Nanosecond</a>,
      <a href="./docs/classes/_time_si_microsecond_.microsecond.md">Microsecond</a>,
      <a href="./docs/classes/_time_si_millisecond_.millisecond.md">Millisecond</a>,
      <a href="./docs/classes/_time_si_centisecond_.centisecond.md">Centisecond</a>,
      <a href="./docs/classes/_time_si_decisecond_.decisecond.md">Decisecond</a>,
      <a href="./docs/classes/_time_si_second_.second.md">Second</a>,
      <a href="./docs/classes/_time_si_decasecond_.decasecond.md">Decasecond</a>,
      <a href="./docs/classes/_time_si_hectosecond_.hectosecond.md">Hectosecond</a>,
      <a href="./docs/classes/_time_si_kilosecond_.kilosecond.md">Kilosecond</a>,
      <a href="./docs/classes/_time_si_megasecond_.megasecond.md">Megasecond</a>,
      <a href="./docs/classes/_time_si_gigasecond_.gigasecond.md">Gigasecond</a>,
      <a href="./docs/classes/_time_si_terasecond_.terasecond.md">Terasecond</a>,
      <a href="./docs/classes/_time_si_petasecond_.petasecond.md">Petasecond</a>,
      <a href="./docs/classes/_time_si_exasecond_.exasecond.md">Exasecond</a>,
      <a href="./docs/classes/_time_si_zettasecond_.zettasecond.md">Zettasecond</a>,
      <a href="./docs/classes/_time_si_yottasecond_.yottasecond.md">Yottasecond</a>,
    </td>
  </tr>
  <tr>
    <td colspan="2">Other</td>
    <td>
      <a href="./docs/classes/_time_other_minute_.minute.md">Minute</a>,
      <a href="./docs/classes/_time_other_hour_.hour.md">Hour</a>,
      <a href="./docs/classes/_time_other_day_.day.md">Day</a>,
    </td>
  </tr>
</table>

## Installation

```
npm i measurement-toolkit
```

## API Documentation

```
npm run build:docs
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
