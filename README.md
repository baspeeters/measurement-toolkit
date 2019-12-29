# Unit Converter

An Object Oriented library to convert units, built in TypeScript.

[![Build Status](https://travis-ci.org/baspeeters/unit-converter.svg?branch=master)](https://travis-ci.org/baspeeters/unit-converter)  [![codecov](https://codecov.io/gh/baspeeters/unit-converter/branch/master/graph/badge.svg)](https://codecov.io/gh/baspeeters/unit-converter)

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
[![Code Coverage](https://codecov.io/gh/baspeeters/unit-converter/branch/master/graphs/sunburst.svg)](https://codecov.io/gh/baspeeters/unit-converter)
