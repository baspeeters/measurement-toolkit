[measurement-toolkit](../README.md) › ["Mass/SI/Picogram"](../modules/_mass_si_picogram_.md) › [Picogram](_mass_si_picogram_.picogram.md)

# Class: Picogram

## Hierarchy

  ↳ [SiDerivedUnit](_mass_si_siderivedunit_.siderivedunit.md)

  ↳ **Picogram**

## Index

### Constructors

* [constructor](_mass_si_picogram_.picogram.md#constructor)

### Properties

* [baseUnit](_mass_si_picogram_.picogram.md#baseunit)
* [derivedUnits](_mass_si_picogram_.picogram.md#derivedunits)
* [value](_mass_si_picogram_.picogram.md#value)

### Accessors

* [to](_mass_si_picogram_.picogram.md#to)

### Methods

* [add](_mass_si_picogram_.picogram.md#add)
* [divideBy](_mass_si_picogram_.picogram.md#divideby)
* [dividedBy](_mass_si_picogram_.picogram.md#dividedby)
* [getConverters](_mass_si_picogram_.picogram.md#getconverters)
* [multiply](_mass_si_picogram_.picogram.md#multiply)
* [percentageOf](_mass_si_picogram_.picogram.md#percentageof)
* [percentageOfThis](_mass_si_picogram_.picogram.md#percentageofthis)
* [subtract](_mass_si_picogram_.picogram.md#subtract)

## Constructors

###  constructor

\+ **new Picogram**(`value`: number): *[Picogram](_mass_si_picogram_.picogram.md)*

*Inherited from [DerivedUnit](_derivedunit_.derivedunit.md).[constructor](_derivedunit_.derivedunit.md#constructor)*

*Defined in [Unit.ts:14](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Unit.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *[Picogram](_mass_si_picogram_.picogram.md)*

## Properties

###  baseUnit

• **baseUnit**: *[Kilogram](_mass_si_kilogram_.kilogram.md)‹›* = new Kilogram(this.value * Math.pow(10, -15))

*Overrides [SiDerivedUnit](_mass_si_siderivedunit_.siderivedunit.md).[baseUnit](_mass_si_siderivedunit_.siderivedunit.md#abstract-baseunit)*

*Defined in [Mass/SI/Picogram.ts:13](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Mass/SI/Picogram.ts#L13)*

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
