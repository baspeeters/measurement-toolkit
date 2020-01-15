# Measurement Toolkit

Perform math operations and conversions on object-oriented weights & measurements.

[![Build Status](https://travis-ci.org/baspeeters/measurement-toolkit.svg?branch=master)](https://travis-ci.org/baspeeters/measurement-toolkit)  [![codecov](https://codecov.io/gh/baspeeters/measurement-toolkit/branch/master/graph/badge.svg)](https://codecov.io/gh/baspeeters/measurement-toolkit)



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
