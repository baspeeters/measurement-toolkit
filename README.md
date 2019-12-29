# Unit Converter

An Object Oriented library to convert units, built in TypeScript.

[![Build Status](https://travis-ci.org/baspeeters/unit-converter.svg?branch=master)](https://travis-ci.org/baspeeters/unit-converter)  [![codecov](https://codecov.io/gh/baspeeters/unit-converter/branch/master/graph/badge.svg)](https://codecov.io/gh/baspeeters/unit-converter)

## Usage

```javascript
const grams = new Gram(127);

grams.to.Ounce();

> Ounce {
>   value: 4.479793167596712
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
[![Code Coverage](https://codecov.io/gh/baspeeters/unit-converter/branch/master/graphs/sunburst.svg)](https://codecov.io/gh/baspeeters/unit-converter)
