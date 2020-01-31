[measurement-toolkit](../README.md) › ["Length/SI/Meter"](../modules/_length_si_meter_.md) › [Meter](_length_si_meter_.meter.md)

# Class: Meter

## Hierarchy

  ↳ [BaseUnit](_baseunit_.baseunit.md)

  ↳ **Meter**

## Index

### Constructors

* [constructor](_length_si_meter_.meter.md#constructor)

### Properties

* [value](_length_si_meter_.meter.md#value)

### Accessors

* [to](_length_si_meter_.meter.md#to)

### Methods

* [add](_length_si_meter_.meter.md#add)
* [divideBy](_length_si_meter_.meter.md#divideby)
* [dividedBy](_length_si_meter_.meter.md#dividedby)
* [getConverters](_length_si_meter_.meter.md#getconverters)
* [multiply](_length_si_meter_.meter.md#multiply)
* [percentageOf](_length_si_meter_.meter.md#percentageof)
* [percentageOfThis](_length_si_meter_.meter.md#percentageofthis)
* [subtract](_length_si_meter_.meter.md#subtract)

### Object literals

* [derivedUnits](_length_si_meter_.meter.md#derivedunits)

## Constructors

###  constructor

\+ **new Meter**(`value`: number): *[Meter](_length_si_meter_.meter.md)*

*Inherited from [DerivedUnit](_derivedunit_.derivedunit.md).[constructor](_derivedunit_.derivedunit.md#constructor)*

*Defined in [Unit.ts:14](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Unit.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *[Meter](_length_si_meter_.meter.md)*

## Properties

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

*Inherited from [BaseUnit](_baseunit_.baseunit.md).[getConverters](_baseunit_.baseunit.md#getconverters)*

*Overrides [Unit](_unit_.unit.md).[getConverters](_unit_.unit.md#getconverters)*

*Defined in [BaseUnit.ts:14](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/BaseUnit.ts#L14)*

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

## Object literals

###  derivedUnits

### ▪ **derivedUnits**: *object*

*Overrides [BaseUnit](_baseunit_.baseunit.md).[derivedUnits](_baseunit_.baseunit.md#derivedunits)*

*Defined in [Length/SI/Meter.ts:32](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Length/SI/Meter.ts#L32)*

###  Attometer

▸ **Attometer**(): *[Attometer](_length_si_attometer_.attometer.md)‹›*

*Defined in [Length/SI/Meter.ts:36](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Length/SI/Meter.ts#L36)*

**Returns:** *[Attometer](_length_si_attometer_.attometer.md)‹›*

###  Centimeter

▸ **Centimeter**(): *[Centimeter](_length_si_centimeter_.centimeter.md)‹›*

*Defined in [Length/SI/Meter.ts:42](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Length/SI/Meter.ts#L42)*

**Returns:** *[Centimeter](_length_si_centimeter_.centimeter.md)‹›*

###  Decameter

▸ **Decameter**(): *[Decameter](_length_si_decameter_.decameter.md)‹›*

*Defined in [Length/SI/Meter.ts:44](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Length/SI/Meter.ts#L44)*

**Returns:** *[Decameter](_length_si_decameter_.decameter.md)‹›*

###  Decimeter

▸ **Decimeter**(): *[Decimeter](_length_si_decimeter_.decimeter.md)‹›*

*Defined in [Length/SI/Meter.ts:43](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Length/SI/Meter.ts#L43)*

**Returns:** *[Decimeter](_length_si_decimeter_.decimeter.md)‹›*

###  Exameter

▸ **Exameter**(): *[Exameter](_length_si_exameter_.exameter.md)‹›*

*Defined in [Length/SI/Meter.ts:51](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Length/SI/Meter.ts#L51)*

**Returns:** *[Exameter](_length_si_exameter_.exameter.md)‹›*

###  Femtometer

▸ **Femtometer**(): *[Femtometer](_length_si_femtometer_.femtometer.md)‹›*

*Defined in [Length/SI/Meter.ts:37](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Length/SI/Meter.ts#L37)*

**Returns:** *[Femtometer](_length_si_femtometer_.femtometer.md)‹›*

###  Gigameter

▸ **Gigameter**(): *[Gigameter](_length_si_gigameter_.gigameter.md)‹›*

*Defined in [Length/SI/Meter.ts:48](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Length/SI/Meter.ts#L48)*

**Returns:** *[Gigameter](_length_si_gigameter_.gigameter.md)‹›*

###  Hectometer

▸ **Hectometer**(): *[Hectometer](_length_si_hectometer_.hectometer.md)‹›*

*Defined in [Length/SI/Meter.ts:45](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Length/SI/Meter.ts#L45)*

**Returns:** *[Hectometer](_length_si_hectometer_.hectometer.md)‹›*

###  Kilometer

▸ **Kilometer**(): *[Kilometer](_length_si_kilometer_.kilometer.md)‹›*

*Defined in [Length/SI/Meter.ts:46](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Length/SI/Meter.ts#L46)*

**Returns:** *[Kilometer](_length_si_kilometer_.kilometer.md)‹›*

###  Megameter

▸ **Megameter**(): *[Megameter](_length_si_megameter_.megameter.md)‹›*

*Defined in [Length/SI/Meter.ts:47](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Length/SI/Meter.ts#L47)*

**Returns:** *[Megameter](_length_si_megameter_.megameter.md)‹›*

###  Micrometer

▸ **Micrometer**(): *[Micrometer](_length_si_micrometer_.micrometer.md)‹›*

*Defined in [Length/SI/Meter.ts:40](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Length/SI/Meter.ts#L40)*

**Returns:** *[Micrometer](_length_si_micrometer_.micrometer.md)‹›*

###  Millimeter

▸ **Millimeter**(): *[Millimeter](_length_si_millimeter_.millimeter.md)‹›*

*Defined in [Length/SI/Meter.ts:41](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Length/SI/Meter.ts#L41)*

**Returns:** *[Millimeter](_length_si_millimeter_.millimeter.md)‹›*

###  Nanometer

▸ **Nanometer**(): *[Nanometer](_length_si_nanometer_.nanometer.md)‹›*

*Defined in [Length/SI/Meter.ts:39](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Length/SI/Meter.ts#L39)*

**Returns:** *[Nanometer](_length_si_nanometer_.nanometer.md)‹›*

###  Petameter

▸ **Petameter**(): *[Petameter](_length_si_petameter_.petameter.md)‹›*

*Defined in [Length/SI/Meter.ts:50](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Length/SI/Meter.ts#L50)*

**Returns:** *[Petameter](_length_si_petameter_.petameter.md)‹›*

###  Picometer

▸ **Picometer**(): *[Picometer](_length_si_picometer_.picometer.md)‹›*

*Defined in [Length/SI/Meter.ts:38](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Length/SI/Meter.ts#L38)*

**Returns:** *[Picometer](_length_si_picometer_.picometer.md)‹›*

###  Terameter

▸ **Terameter**(): *[Terameter](_length_si_terameter_.terameter.md)‹›*

*Defined in [Length/SI/Meter.ts:49](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Length/SI/Meter.ts#L49)*

**Returns:** *[Terameter](_length_si_terameter_.terameter.md)‹›*

###  Yoctometer

▸ **Yoctometer**(): *[Yoctometer](_length_si_yoctometer_.yoctometer.md)‹›*

*Defined in [Length/SI/Meter.ts:33](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Length/SI/Meter.ts#L33)*

**Returns:** *[Yoctometer](_length_si_yoctometer_.yoctometer.md)‹›*

###  Yottameter

▸ **Yottameter**(): *[Yottameter](_length_si_yottameter_.yottameter.md)‹›*

*Defined in [Length/SI/Meter.ts:53](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Length/SI/Meter.ts#L53)*

**Returns:** *[Yottameter](_length_si_yottameter_.yottameter.md)‹›*

###  Zeptometer

▸ **Zeptometer**(): *[Zeptometer](_length_si_zeptometer_.zeptometer.md)‹›*

*Defined in [Length/SI/Meter.ts:34](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Length/SI/Meter.ts#L34)*

**Returns:** *[Zeptometer](_length_si_zeptometer_.zeptometer.md)‹›*

###  Zettameter

▸ **Zettameter**(): *[Zettameter](_length_si_zettameter_.zettameter.md)‹›*

*Defined in [Length/SI/Meter.ts:52](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Length/SI/Meter.ts#L52)*

**Returns:** *[Zettameter](_length_si_zettameter_.zettameter.md)‹›*
