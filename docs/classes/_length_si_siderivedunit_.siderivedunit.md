[measurement-toolkit](../README.md) › ["Length/SI/SiDerivedUnit"](../modules/_length_si_siderivedunit_.md) › [SiDerivedUnit](_length_si_siderivedunit_.siderivedunit.md)

# Class: SiDerivedUnit

## Hierarchy

  ↳ [DerivedUnit](_derivedunit_.derivedunit.md)

  ↳ **SiDerivedUnit**

  ↳ [Attometer](_length_si_attometer_.attometer.md)

  ↳ [Centimeter](_length_si_centimeter_.centimeter.md)

  ↳ [Decameter](_length_si_decameter_.decameter.md)

  ↳ [Decimeter](_length_si_decimeter_.decimeter.md)

  ↳ [Exameter](_length_si_exameter_.exameter.md)

  ↳ [Femtometer](_length_si_femtometer_.femtometer.md)

  ↳ [Gigameter](_length_si_gigameter_.gigameter.md)

  ↳ [Hectometer](_length_si_hectometer_.hectometer.md)

  ↳ [Megameter](_length_si_megameter_.megameter.md)

  ↳ [Micrometer](_length_si_micrometer_.micrometer.md)

  ↳ [Millimeter](_length_si_millimeter_.millimeter.md)

  ↳ [Nanometer](_length_si_nanometer_.nanometer.md)

  ↳ [Petameter](_length_si_petameter_.petameter.md)

  ↳ [Picometer](_length_si_picometer_.picometer.md)

  ↳ [Terameter](_length_si_terameter_.terameter.md)

  ↳ [Yoctometer](_length_si_yoctometer_.yoctometer.md)

  ↳ [Yottameter](_length_si_yottameter_.yottameter.md)

  ↳ [Zeptometer](_length_si_zeptometer_.zeptometer.md)

  ↳ [Zettameter](_length_si_zettameter_.zettameter.md)

  ↳ [Kilometer](_length_si_kilometer_.kilometer.md)

## Index

### Constructors

* [constructor](_length_si_siderivedunit_.siderivedunit.md#constructor)

### Properties

* [baseUnit](_length_si_siderivedunit_.siderivedunit.md#abstract-baseunit)
* [derivedUnits](_length_si_siderivedunit_.siderivedunit.md#derivedunits)
* [value](_length_si_siderivedunit_.siderivedunit.md#value)

### Accessors

* [to](_length_si_siderivedunit_.siderivedunit.md#to)

### Methods

* [add](_length_si_siderivedunit_.siderivedunit.md#add)
* [divideBy](_length_si_siderivedunit_.siderivedunit.md#divideby)
* [dividedBy](_length_si_siderivedunit_.siderivedunit.md#dividedby)
* [getConverters](_length_si_siderivedunit_.siderivedunit.md#getconverters)
* [multiply](_length_si_siderivedunit_.siderivedunit.md#multiply)
* [percentageOf](_length_si_siderivedunit_.siderivedunit.md#percentageof)
* [percentageOfThis](_length_si_siderivedunit_.siderivedunit.md#percentageofthis)
* [subtract](_length_si_siderivedunit_.siderivedunit.md#subtract)

## Constructors

###  constructor

\+ **new SiDerivedUnit**(`value`: number): *[SiDerivedUnit](_length_si_siderivedunit_.siderivedunit.md)*

*Inherited from [DerivedUnit](_derivedunit_.derivedunit.md).[constructor](_derivedunit_.derivedunit.md#constructor)*

*Defined in [Unit.ts:14](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Unit.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *[SiDerivedUnit](_length_si_siderivedunit_.siderivedunit.md)*

## Properties

### `Abstract` baseUnit

• **baseUnit**: *[BaseUnit](_baseunit_.baseunit.md)*

*Overrides [DerivedUnit](_derivedunit_.derivedunit.md).[baseUnit](_derivedunit_.derivedunit.md#abstract-baseunit)*

*Defined in [Length/SI/SiDerivedUnit.ts:14](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Length/SI/SiDerivedUnit.ts#L14)*

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
