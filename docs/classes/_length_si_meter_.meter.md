[measurement-toolkit](../README.md) › ["Length/SI/Meter"](../modules/_length_si_meter_.md) › [Meter](_length_si_meter_.meter.md)

# Class: Meter

## Hierarchy

  ↳ [SimpleBaseUnit](_simplebaseunit_.simplebaseunit.md)

  ↳ **Meter**

## Implements

* [IUnit](../interfaces/_iunit_.iunit.md)
* [ISimpleUnit](../interfaces/_isimpleunit_.isimpleunit.md)
* [ISimpleUnit](../interfaces/_isimpleunit_.isimpleunit.md)
* [IBaseUnit](../interfaces/_ibaseunit_.ibaseunit.md)
* [IUnitOfLength](../interfaces/_length_iunitoflength_.iunitoflength.md)

## Index

### Constructors

* [constructor](_length_si_meter_.meter.md#constructor)

### Properties

* [symbol](_length_si_meter_.meter.md#symbol)
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
* [toString](_length_si_meter_.meter.md#tostring)

### Object literals

* [derivedUnits](_length_si_meter_.meter.md#derivedunits)

## Constructors

###  constructor

\+ **new Meter**(`value`: number): *[Meter](_length_si_meter_.meter.md)*

*Inherited from [SimpleUnit](_simpleunit_.simpleunit.md).[constructor](_simpleunit_.simpleunit.md#constructor)*

*Defined in [SimpleUnit.ts:17](https://github.com/baspeeters/measurement-toolkit/blob/212ab3d/src/Units/SimpleUnit.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *[Meter](_length_si_meter_.meter.md)*

## Properties

###  symbol

• **symbol**: *string* = "m"

*Implementation of [IUnitOfLength](../interfaces/_length_iunitoflength_.iunitoflength.md).[symbol](../interfaces/_length_iunitoflength_.iunitoflength.md#symbol)*

*Overrides [SimpleUnit](_simpleunit_.simpleunit.md).[symbol](_simpleunit_.simpleunit.md#abstract-symbol)*

*Defined in [Length/SI/Meter.ts:34](https://github.com/baspeeters/measurement-toolkit/blob/212ab3d/src/Units/Length/SI/Meter.ts#L34)*

___

###  value

• **value**: *number*

*Implementation of [IUnitOfLength](../interfaces/_length_iunitoflength_.iunitoflength.md).[value](../interfaces/_length_iunitoflength_.iunitoflength.md#value)*

*Inherited from [SimpleUnit](_simpleunit_.simpleunit.md).[value](_simpleunit_.simpleunit.md#value)*

*Defined in [SimpleUnit.ts:15](https://github.com/baspeeters/measurement-toolkit/blob/212ab3d/src/Units/SimpleUnit.ts#L15)*

## Accessors

###  to

• **get to**(): *any*

*Inherited from [Unit](_unit_.unit.md).[to](_unit_.unit.md#to)*

*Defined in [Unit.ts:14](https://github.com/baspeeters/measurement-toolkit/blob/212ab3d/src/Units/Unit.ts#L14)*

**Returns:** *any*

## Methods

###  add

▸ **add**(`unit`: [SimpleUnit](_simpleunit_.simpleunit.md)): *this*

*Inherited from [SimpleUnit](_simpleunit_.simpleunit.md).[add](_simpleunit_.simpleunit.md#add)*

*Overrides [Unit](_unit_.unit.md).[add](_unit_.unit.md#abstract-add)*

*Defined in [SimpleUnit.ts:35](https://github.com/baspeeters/measurement-toolkit/blob/212ab3d/src/Units/SimpleUnit.ts#L35)*

**Parameters:**

Name | Type |
------ | ------ |
`unit` | [SimpleUnit](_simpleunit_.simpleunit.md) |

**Returns:** *this*

___

###  divideBy

▸ **divideBy**(`unit`: [SimpleUnit](_simpleunit_.simpleunit.md)): *this*

*Inherited from [SimpleUnit](_simpleunit_.simpleunit.md).[divideBy](_simpleunit_.simpleunit.md#divideby)*

*Overrides [Unit](_unit_.unit.md).[divideBy](_unit_.unit.md#abstract-divideby)*

*Defined in [SimpleUnit.ts:41](https://github.com/baspeeters/measurement-toolkit/blob/212ab3d/src/Units/SimpleUnit.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`unit` | [SimpleUnit](_simpleunit_.simpleunit.md) |

**Returns:** *this*

___

###  dividedBy

▸ **dividedBy**(`unit`: [SimpleUnit](_simpleunit_.simpleunit.md)): *this*

*Inherited from [SimpleUnit](_simpleunit_.simpleunit.md).[dividedBy](_simpleunit_.simpleunit.md#dividedby)*

*Defined in [SimpleUnit.ts:47](https://github.com/baspeeters/measurement-toolkit/blob/212ab3d/src/Units/SimpleUnit.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`unit` | [SimpleUnit](_simpleunit_.simpleunit.md) |

**Returns:** *this*

___

###  getConverters

▸ **getConverters**(): *object*

*Implementation of [IUnitOfLength](../interfaces/_length_iunitoflength_.iunitoflength.md)*

*Inherited from [SimpleBaseUnit](_simplebaseunit_.simplebaseunit.md).[getConverters](_simplebaseunit_.simplebaseunit.md#getconverters)*

*Overrides [SimpleUnit](_simpleunit_.simpleunit.md).[getConverters](_simpleunit_.simpleunit.md#getconverters)*

*Defined in [SimpleBaseUnit.ts:16](https://github.com/baspeeters/measurement-toolkit/blob/212ab3d/src/Units/SimpleBaseUnit.ts#L16)*

**Returns:** *object*

* \[ **key**: *string*\]: function

▸ (): *[ISimpleUnit](../interfaces/_isimpleunit_.isimpleunit.md)*

___

###  multiply

▸ **multiply**(`unit`: [SimpleUnit](_simpleunit_.simpleunit.md)): *this*

*Inherited from [SimpleUnit](_simpleunit_.simpleunit.md).[multiply](_simpleunit_.simpleunit.md#multiply)*

*Overrides [Unit](_unit_.unit.md).[multiply](_unit_.unit.md#abstract-multiply)*

*Defined in [SimpleUnit.ts:53](https://github.com/baspeeters/measurement-toolkit/blob/212ab3d/src/Units/SimpleUnit.ts#L53)*

**Parameters:**

Name | Type |
------ | ------ |
`unit` | [SimpleUnit](_simpleunit_.simpleunit.md) |

**Returns:** *this*

___

###  percentageOf

▸ **percentageOf**(`unit`: [SimpleUnit](_simpleunit_.simpleunit.md)): *this*

*Inherited from [SimpleUnit](_simpleunit_.simpleunit.md).[percentageOf](_simpleunit_.simpleunit.md#percentageof)*

*Overrides [Unit](_unit_.unit.md).[percentageOf](_unit_.unit.md#abstract-percentageof)*

*Defined in [SimpleUnit.ts:59](https://github.com/baspeeters/measurement-toolkit/blob/212ab3d/src/Units/SimpleUnit.ts#L59)*

**Parameters:**

Name | Type |
------ | ------ |
`unit` | [SimpleUnit](_simpleunit_.simpleunit.md) |

**Returns:** *this*

___

###  percentageOfThis

▸ **percentageOfThis**(`unit`: [SimpleUnit](_simpleunit_.simpleunit.md)): *this*

*Inherited from [SimpleUnit](_simpleunit_.simpleunit.md).[percentageOfThis](_simpleunit_.simpleunit.md#percentageofthis)*

*Defined in [SimpleUnit.ts:65](https://github.com/baspeeters/measurement-toolkit/blob/212ab3d/src/Units/SimpleUnit.ts#L65)*

**Parameters:**

Name | Type |
------ | ------ |
`unit` | [SimpleUnit](_simpleunit_.simpleunit.md) |

**Returns:** *this*

___

###  subtract

▸ **subtract**(`unit`: [SimpleUnit](_simpleunit_.simpleunit.md)): *this*

*Inherited from [SimpleUnit](_simpleunit_.simpleunit.md).[subtract](_simpleunit_.simpleunit.md#subtract)*

*Overrides [Unit](_unit_.unit.md).[subtract](_unit_.unit.md#abstract-subtract)*

*Defined in [SimpleUnit.ts:29](https://github.com/baspeeters/measurement-toolkit/blob/212ab3d/src/Units/SimpleUnit.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`unit` | [SimpleUnit](_simpleunit_.simpleunit.md) |

**Returns:** *this*

___

###  toString

▸ **toString**(): *string*

*Implementation of [IUnitOfLength](../interfaces/_length_iunitoflength_.iunitoflength.md)*

*Inherited from [SimpleUnit](_simpleunit_.simpleunit.md).[toString](_simpleunit_.simpleunit.md#tostring)*

*Defined in [SimpleUnit.ts:71](https://github.com/baspeeters/measurement-toolkit/blob/212ab3d/src/Units/SimpleUnit.ts#L71)*

**Returns:** *string*

## Object literals

###  derivedUnits

### ▪ **derivedUnits**: *object*

*Implementation of [IBaseUnit](../interfaces/_ibaseunit_.ibaseunit.md).[derivedUnits](../interfaces/_ibaseunit_.ibaseunit.md#derivedunits)*

*Overrides [SimpleBaseUnit](_simplebaseunit_.simplebaseunit.md).[derivedUnits](_simplebaseunit_.simplebaseunit.md#derivedunits)*

*Defined in [Length/SI/Meter.ts:36](https://github.com/baspeeters/measurement-toolkit/blob/212ab3d/src/Units/Length/SI/Meter.ts#L36)*

###  Attometer

▸ **Attometer**(): *[Attometer](_length_si_attometer_.attometer.md)‹›*

*Defined in [Length/SI/Meter.ts:40](https://github.com/baspeeters/measurement-toolkit/blob/212ab3d/src/Units/Length/SI/Meter.ts#L40)*

**Returns:** *[Attometer](_length_si_attometer_.attometer.md)‹›*

###  Centimeter

▸ **Centimeter**(): *[Centimeter](_length_si_centimeter_.centimeter.md)‹›*

*Defined in [Length/SI/Meter.ts:46](https://github.com/baspeeters/measurement-toolkit/blob/212ab3d/src/Units/Length/SI/Meter.ts#L46)*

**Returns:** *[Centimeter](_length_si_centimeter_.centimeter.md)‹›*

###  Decameter

▸ **Decameter**(): *[Decameter](_length_si_decameter_.decameter.md)‹›*

*Defined in [Length/SI/Meter.ts:48](https://github.com/baspeeters/measurement-toolkit/blob/212ab3d/src/Units/Length/SI/Meter.ts#L48)*

**Returns:** *[Decameter](_length_si_decameter_.decameter.md)‹›*

###  Decimeter

▸ **Decimeter**(): *[Decimeter](_length_si_decimeter_.decimeter.md)‹›*

*Defined in [Length/SI/Meter.ts:47](https://github.com/baspeeters/measurement-toolkit/blob/212ab3d/src/Units/Length/SI/Meter.ts#L47)*

**Returns:** *[Decimeter](_length_si_decimeter_.decimeter.md)‹›*

###  Exameter

▸ **Exameter**(): *[Exameter](_length_si_exameter_.exameter.md)‹›*

*Defined in [Length/SI/Meter.ts:55](https://github.com/baspeeters/measurement-toolkit/blob/212ab3d/src/Units/Length/SI/Meter.ts#L55)*

**Returns:** *[Exameter](_length_si_exameter_.exameter.md)‹›*

###  Femtometer

▸ **Femtometer**(): *[Femtometer](_length_si_femtometer_.femtometer.md)‹›*

*Defined in [Length/SI/Meter.ts:41](https://github.com/baspeeters/measurement-toolkit/blob/212ab3d/src/Units/Length/SI/Meter.ts#L41)*

**Returns:** *[Femtometer](_length_si_femtometer_.femtometer.md)‹›*

###  Gigameter

▸ **Gigameter**(): *[Gigameter](_length_si_gigameter_.gigameter.md)‹›*

*Defined in [Length/SI/Meter.ts:52](https://github.com/baspeeters/measurement-toolkit/blob/212ab3d/src/Units/Length/SI/Meter.ts#L52)*

**Returns:** *[Gigameter](_length_si_gigameter_.gigameter.md)‹›*

###  Hectometer

▸ **Hectometer**(): *[Hectometer](_length_si_hectometer_.hectometer.md)‹›*

*Defined in [Length/SI/Meter.ts:49](https://github.com/baspeeters/measurement-toolkit/blob/212ab3d/src/Units/Length/SI/Meter.ts#L49)*

**Returns:** *[Hectometer](_length_si_hectometer_.hectometer.md)‹›*

###  Kilometer

▸ **Kilometer**(): *[Kilometer](_length_si_kilometer_.kilometer.md)‹›*

*Defined in [Length/SI/Meter.ts:50](https://github.com/baspeeters/measurement-toolkit/blob/212ab3d/src/Units/Length/SI/Meter.ts#L50)*

**Returns:** *[Kilometer](_length_si_kilometer_.kilometer.md)‹›*

###  Megameter

▸ **Megameter**(): *[Megameter](_length_si_megameter_.megameter.md)‹›*

*Defined in [Length/SI/Meter.ts:51](https://github.com/baspeeters/measurement-toolkit/blob/212ab3d/src/Units/Length/SI/Meter.ts#L51)*

**Returns:** *[Megameter](_length_si_megameter_.megameter.md)‹›*

###  Micrometer

▸ **Micrometer**(): *[Micrometer](_length_si_micrometer_.micrometer.md)‹›*

*Defined in [Length/SI/Meter.ts:44](https://github.com/baspeeters/measurement-toolkit/blob/212ab3d/src/Units/Length/SI/Meter.ts#L44)*

**Returns:** *[Micrometer](_length_si_micrometer_.micrometer.md)‹›*

###  Millimeter

▸ **Millimeter**(): *[Millimeter](_length_si_millimeter_.millimeter.md)‹›*

*Defined in [Length/SI/Meter.ts:45](https://github.com/baspeeters/measurement-toolkit/blob/212ab3d/src/Units/Length/SI/Meter.ts#L45)*

**Returns:** *[Millimeter](_length_si_millimeter_.millimeter.md)‹›*

###  Nanometer

▸ **Nanometer**(): *[Nanometer](_length_si_nanometer_.nanometer.md)‹›*

*Defined in [Length/SI/Meter.ts:43](https://github.com/baspeeters/measurement-toolkit/blob/212ab3d/src/Units/Length/SI/Meter.ts#L43)*

**Returns:** *[Nanometer](_length_si_nanometer_.nanometer.md)‹›*

###  Petameter

▸ **Petameter**(): *[Petameter](_length_si_petameter_.petameter.md)‹›*

*Defined in [Length/SI/Meter.ts:54](https://github.com/baspeeters/measurement-toolkit/blob/212ab3d/src/Units/Length/SI/Meter.ts#L54)*

**Returns:** *[Petameter](_length_si_petameter_.petameter.md)‹›*

###  Picometer

▸ **Picometer**(): *[Picometer](_length_si_picometer_.picometer.md)‹›*

*Defined in [Length/SI/Meter.ts:42](https://github.com/baspeeters/measurement-toolkit/blob/212ab3d/src/Units/Length/SI/Meter.ts#L42)*

**Returns:** *[Picometer](_length_si_picometer_.picometer.md)‹›*

###  Terameter

▸ **Terameter**(): *[Terameter](_length_si_terameter_.terameter.md)‹›*

*Defined in [Length/SI/Meter.ts:53](https://github.com/baspeeters/measurement-toolkit/blob/212ab3d/src/Units/Length/SI/Meter.ts#L53)*

**Returns:** *[Terameter](_length_si_terameter_.terameter.md)‹›*

###  Yard

▸ **Yard**(): *[Yard](_length_us_yard_.yard.md)‹›*

*Defined in [Length/SI/Meter.ts:59](https://github.com/baspeeters/measurement-toolkit/blob/212ab3d/src/Units/Length/SI/Meter.ts#L59)*

**Returns:** *[Yard](_length_us_yard_.yard.md)‹›*

###  Yoctometer

▸ **Yoctometer**(): *[Yoctometer](_length_si_yoctometer_.yoctometer.md)‹›*

*Defined in [Length/SI/Meter.ts:37](https://github.com/baspeeters/measurement-toolkit/blob/212ab3d/src/Units/Length/SI/Meter.ts#L37)*

**Returns:** *[Yoctometer](_length_si_yoctometer_.yoctometer.md)‹›*

###  Yottameter

▸ **Yottameter**(): *[Yottameter](_length_si_yottameter_.yottameter.md)‹›*

*Defined in [Length/SI/Meter.ts:57](https://github.com/baspeeters/measurement-toolkit/blob/212ab3d/src/Units/Length/SI/Meter.ts#L57)*

**Returns:** *[Yottameter](_length_si_yottameter_.yottameter.md)‹›*

###  Zeptometer

▸ **Zeptometer**(): *[Zeptometer](_length_si_zeptometer_.zeptometer.md)‹›*

*Defined in [Length/SI/Meter.ts:38](https://github.com/baspeeters/measurement-toolkit/blob/212ab3d/src/Units/Length/SI/Meter.ts#L38)*

**Returns:** *[Zeptometer](_length_si_zeptometer_.zeptometer.md)‹›*

###  Zettameter

▸ **Zettameter**(): *[Zettameter](_length_si_zettameter_.zettameter.md)‹›*

*Defined in [Length/SI/Meter.ts:56](https://github.com/baspeeters/measurement-toolkit/blob/212ab3d/src/Units/Length/SI/Meter.ts#L56)*

**Returns:** *[Zettameter](_length_si_zettameter_.zettameter.md)‹›*
