# Measurement Toolkit

Perform math operations and conversions on object-oriented weights & measurements.

[![Build Status](https://travis-ci.org/baspeeters/measurement-toolkit.svg?branch=master)](https://travis-ci.org/baspeeters/measurement-toolkit)  [![codecov](https://codecov.io/gh/baspeeters/measurement-toolkit/branch/master/graph/badge.svg)](https://codecov.io/gh/baspeeters/measurement-toolkit)

## Usage

### Conversion

```javascript
const grams = new Gram(127);

grams.to.Ounce();

> Ounce {
>   value: 4.479793167596712
> }
```

### Math operations

```javascript
const tons = new Megagram(5.2);
const ounces = new Ounce(50000);

tons.subtract(ounces);

> Megagram {
>   value: 3.78252384375
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
