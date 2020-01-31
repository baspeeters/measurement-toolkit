[measurement-toolkit](../README.md) › ["Length/SI/Petameter"](../modules/_length_si_petameter_.md) › [Petameter](_length_si_petameter_.petameter.md)

# Class: Petameter

## Hierarchy

  ↳ [SiDerivedUnit](_length_si_siderivedunit_.siderivedunit.md)

  ↳ **Petameter**

## Index

### Constructors

* [constructor](_length_si_petameter_.petameter.md#constructor)

### Properties

* [baseUnit](_length_si_petameter_.petameter.md#baseunit)
* [derivedUnits](_length_si_petameter_.petameter.md#derivedunits)
* [value](_length_si_petameter_.petameter.md#value)

### Accessors

* [to](_length_si_petameter_.petameter.md#to)

### Methods

* [add](_length_si_petameter_.petameter.md#add)
* [divideBy](_length_si_petameter_.petameter.md#divideby)
* [dividedBy](_length_si_petameter_.petameter.md#dividedby)
* [getConverters](_length_si_petameter_.petameter.md#getconverters)
* [multiply](_length_si_petameter_.petameter.md#multiply)
* [percentageOf](_length_si_petameter_.petameter.md#percentageof)
* [percentageOfThis](_length_si_petameter_.petameter.md#percentageofthis)
* [subtract](_length_si_petameter_.petameter.md#subtract)

## Constructors

###  constructor

\+ **new Petameter**(`value`: number): *[Petameter](_length_si_petameter_.petameter.md)*

*Inherited from [DerivedUnit](_derivedunit_.derivedunit.md).[constructor](_derivedunit_.derivedunit.md#constructor)*

*Defined in [Unit.ts:14](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Unit.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *[Petameter](_length_si_petameter_.petameter.md)*

## Properties

###  baseUnit

• **baseUnit**: *[Meter](_length_si_meter_.meter.md)‹›* = new Meter(this.value * Math.pow(10, 15))

*Overrides [SiDerivedUnit](_length_si_siderivedunit_.siderivedunit.md).[baseUnit](_length_si_siderivedunit_.siderivedunit.md#abstract-baseunit)*

*Defined in [Length/SI/Petameter.ts:13](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Length/SI/Petameter.ts#L13)*

___

###  derivedUnits

• **derivedUnits**: *object*

*Inherited from [DerivedUnit](_derivedunit_.derivedunit.md).[derivedUnits](_derivedunit_.derivedunit.md#derivedunits)*

*Defined in [Unit.ts:13](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Unit.ts#L13)*

#### Type declaration:

* \[ **key**: *string*\]: function

▸ (): *[DerivedUnit](_derivedunit_.derivedunit.md)*

___

###  value

• **value**: *number*

*Inherited from [DerivedUnit](_derivedunit_.derivedunit.md).[value](_derivedunit_.derivedunit.md#value)*

*Defined in [Unit.ts:12](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Unit.ts#L12)*

## Accessors

###  to

• **get to**(): *any*

*Inherited from [DerivedUnit](_derivedunit_.derivedunit.md).[to](_derivedunit_.derivedunit.md#to)*

*Defined in [Unit.ts:20](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Unit.ts#L20)*

**Returns:** *any*

## Methods

###  add

▸ **add**(`unit`: [Unit](_unit_.unit.md)): *this*

*Inherited from [DerivedUnit](_derivedunit_.derivedunit.md).[add](_derivedunit_.derivedunit.md#add)*

*Defined in [Unit.ts:38](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Unit.ts#L38)*

**Parameters:**

Name | Type |
------ | ------ |
`unit` | [Unit](_unit_.unit.md) |

**Returns:** *this*

___

###  divideBy

▸ **divideBy**(`unit`: [Unit](_unit_.unit.md)): *this*

*Inherited from [DerivedUnit](_derivedunit_.derivedunit.md).[divideBy](_derivedunit_.derivedunit.md#divideby)*

*Defined in [Unit.ts:44](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Unit.ts#L44)*

**Parameters:**

Name | Type |
------ | ------ |
`unit` | [Unit](_unit_.unit.md) |

**Returns:** *this*

___

###  dividedBy

▸ **dividedBy**(`unit`: [Unit](_unit_.unit.md)): *this*

*Inherited from [DerivedUnit](_derivedunit_.derivedunit.md).[dividedBy](_derivedunit_.derivedunit.md#dividedby)*

*Defined in [Unit.ts:50](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Unit.ts#L50)*

**Parameters:**

Name | Type |
------ | ------ |
`unit` | [Unit](_unit_.unit.md) |

**Returns:** *this*

___

###  getConverters

▸ **getConverters**(): *object*

*Inherited from [DerivedUnit](_derivedunit_.derivedunit.md).[getConverters](_derivedunit_.derivedunit.md#getconverters)*

*Overrides [Unit](_unit_.unit.md).[getConverters](_unit_.unit.md#getconverters)*

*Defined in [DerivedUnit.ts:16](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/DerivedUnit.ts#L16)*

**Returns:** *object*

* \[ **key**: *string*\]: function

▸ (): *[Unit](_unit_.unit.md)*

___

###  multiply

▸ **multiply**(`unit`: [Unit](_unit_.unit.md)): *this*

*Inherited from [DerivedUnit](_derivedunit_.derivedunit.md).[multiply](_derivedunit_.derivedunit.md#multiply)*

*Defined in [Unit.ts:56](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Unit.ts#L56)*

**Parameters:**

Name | Type |
------ | ------ |
`unit` | [Unit](_unit_.unit.md) |

**Returns:** *this*

___

###  percentageOf

▸ **percentageOf**(`unit`: [Unit](_unit_.unit.md)): *this*

*Inherited from [DerivedUnit](_derivedunit_.derivedunit.md).[percentageOf](_derivedunit_.derivedunit.md#percentageof)*

*Defined in [Unit.ts:62](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Unit.ts#L62)*

**Parameters:**

Name | Type |
------ | ------ |
`unit` | [Unit](_unit_.unit.md) |

**Returns:** *this*

___

###  percentageOfThis

▸ **percentageOfThis**(`unit`: [Unit](_unit_.unit.md)): *this*

*Inherited from [DerivedUnit](_derivedunit_.derivedunit.md).[percentageOfThis](_derivedunit_.derivedunit.md#percentageofthis)*

*Defined in [Unit.ts:68](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Unit.ts#L68)*

**Parameters:**

Name | Type |
------ | ------ |
`unit` | [Unit](_unit_.unit.md) |

**Returns:** *this*

___

###  subtract

▸ **subtract**(`unit`: [Unit](_unit_.unit.md)): *this*

*Inherited from [DerivedUnit](_derivedunit_.derivedunit.md).[subtract](_derivedunit_.derivedunit.md#subtract)*

*Defined in [Unit.ts:32](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Unit.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`unit` | [Unit](_unit_.unit.md) |

**Returns:** *this*
