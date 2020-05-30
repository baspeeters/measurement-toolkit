[measurement-toolkit](../README.md) › ["Mass/US/Avoirdupois/Pound"](../modules/_mass_us_avoirdupois_pound_.md) › [Pound](_mass_us_avoirdupois_pound_.pound.md)

# Class: Pound

## Hierarchy

  ↳ [SimpleBaseUnit](_simplebaseunit_.simplebaseunit.md)

  ↳ **Pound**

## Implements

* [IUnit](../interfaces/_iunit_.iunit.md)
* [ISimpleUnit](../interfaces/_isimpleunit_.isimpleunit.md)
* [ISimpleUnit](../interfaces/_isimpleunit_.isimpleunit.md)
* [IBaseUnit](../interfaces/_ibaseunit_.ibaseunit.md)
* [IBaseUnit](../interfaces/_ibaseunit_.ibaseunit.md)

## Index

### Constructors

* [constructor](_mass_us_avoirdupois_pound_.pound.md#constructor)

### Properties

* [symbol](_mass_us_avoirdupois_pound_.pound.md#symbol)
* [value](_mass_us_avoirdupois_pound_.pound.md#value)

### Accessors

* [to](_mass_us_avoirdupois_pound_.pound.md#to)

### Methods

* [add](_mass_us_avoirdupois_pound_.pound.md#add)
* [divideBy](_mass_us_avoirdupois_pound_.pound.md#divideby)
* [dividedBy](_mass_us_avoirdupois_pound_.pound.md#dividedby)
* [getConverters](_mass_us_avoirdupois_pound_.pound.md#getconverters)
* [multiply](_mass_us_avoirdupois_pound_.pound.md#multiply)
* [percentageOf](_mass_us_avoirdupois_pound_.pound.md#percentageof)
* [percentageOfThis](_mass_us_avoirdupois_pound_.pound.md#percentageofthis)
* [subtract](_mass_us_avoirdupois_pound_.pound.md#subtract)
* [toString](_mass_us_avoirdupois_pound_.pound.md#tostring)

### Object literals

* [derivedUnits](_mass_us_avoirdupois_pound_.pound.md#derivedunits)

## Constructors

###  constructor

\+ **new Pound**(`value`: number): *[Pound](_mass_us_avoirdupois_pound_.pound.md)*

*Inherited from [SimpleUnit](_simpleunit_.simpleunit.md).[constructor](_simpleunit_.simpleunit.md#constructor)*

*Defined in [SimpleUnit.ts:17](https://github.com/baspeeters/measurement-toolkit/blob/b5deaf3/src/Units/SimpleUnit.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *[Pound](_mass_us_avoirdupois_pound_.pound.md)*

## Properties

###  symbol

• **symbol**: *string* = "lb"

*Implementation of [ISimpleUnit](../interfaces/_isimpleunit_.isimpleunit.md).[symbol](../interfaces/_isimpleunit_.isimpleunit.md#symbol)*

*Overrides [SimpleUnit](_simpleunit_.simpleunit.md).[symbol](_simpleunit_.simpleunit.md#abstract-symbol)*

*Defined in [Mass/US/Avoirdupois/Pound.ts:20](https://github.com/baspeeters/measurement-toolkit/blob/b5deaf3/src/Units/Mass/US/Avoirdupois/Pound.ts#L20)*

___

###  value

• **value**: *number*

*Implementation of [ISimpleUnit](../interfaces/_isimpleunit_.isimpleunit.md).[value](../interfaces/_isimpleunit_.isimpleunit.md#value)*

*Inherited from [SimpleUnit](_simpleunit_.simpleunit.md).[value](_simpleunit_.simpleunit.md#value)*

*Defined in [SimpleUnit.ts:15](https://github.com/baspeeters/measurement-toolkit/blob/b5deaf3/src/Units/SimpleUnit.ts#L15)*

## Accessors

###  to

• **get to**(): *any*

*Inherited from [Unit](_unit_.unit.md).[to](_unit_.unit.md#to)*

*Defined in [Unit.ts:14](https://github.com/baspeeters/measurement-toolkit/blob/b5deaf3/src/Units/Unit.ts#L14)*

**Returns:** *any*

## Methods

###  add

▸ **add**(`unit`: [SimpleUnit](_simpleunit_.simpleunit.md)): *this*

*Inherited from [SimpleUnit](_simpleunit_.simpleunit.md).[add](_simpleunit_.simpleunit.md#add)*

*Overrides [Unit](_unit_.unit.md).[add](_unit_.unit.md#abstract-add)*

*Defined in [SimpleUnit.ts:35](https://github.com/baspeeters/measurement-toolkit/blob/b5deaf3/src/Units/SimpleUnit.ts#L35)*

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

*Defined in [SimpleUnit.ts:41](https://github.com/baspeeters/measurement-toolkit/blob/b5deaf3/src/Units/SimpleUnit.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`unit` | [SimpleUnit](_simpleunit_.simpleunit.md) |

**Returns:** *this*

___

###  dividedBy

▸ **dividedBy**(`unit`: [SimpleUnit](_simpleunit_.simpleunit.md)): *this*

*Inherited from [SimpleUnit](_simpleunit_.simpleunit.md).[dividedBy](_simpleunit_.simpleunit.md#dividedby)*

*Defined in [SimpleUnit.ts:47](https://github.com/baspeeters/measurement-toolkit/blob/b5deaf3/src/Units/SimpleUnit.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`unit` | [SimpleUnit](_simpleunit_.simpleunit.md) |

**Returns:** *this*

___

###  getConverters

▸ **getConverters**(): *object*

*Implementation of [IBaseUnit](../interfaces/_ibaseunit_.ibaseunit.md)*

*Inherited from [SimpleBaseUnit](_simplebaseunit_.simplebaseunit.md).[getConverters](_simplebaseunit_.simplebaseunit.md#getconverters)*

*Overrides [SimpleUnit](_simpleunit_.simpleunit.md).[getConverters](_simpleunit_.simpleunit.md#getconverters)*

*Defined in [SimpleBaseUnit.ts:16](https://github.com/baspeeters/measurement-toolkit/blob/b5deaf3/src/Units/SimpleBaseUnit.ts#L16)*

**Returns:** *object*

* \[ **key**: *string*\]: function

▸ (): *[ISimpleUnit](../interfaces/_isimpleunit_.isimpleunit.md)*

___

###  multiply

▸ **multiply**(`unit`: [SimpleUnit](_simpleunit_.simpleunit.md)): *this*

*Inherited from [SimpleUnit](_simpleunit_.simpleunit.md).[multiply](_simpleunit_.simpleunit.md#multiply)*

*Overrides [Unit](_unit_.unit.md).[multiply](_unit_.unit.md#abstract-multiply)*

*Defined in [SimpleUnit.ts:53](https://github.com/baspeeters/measurement-toolkit/blob/b5deaf3/src/Units/SimpleUnit.ts#L53)*

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

*Defined in [SimpleUnit.ts:59](https://github.com/baspeeters/measurement-toolkit/blob/b5deaf3/src/Units/SimpleUnit.ts#L59)*

**Parameters:**

Name | Type |
------ | ------ |
`unit` | [SimpleUnit](_simpleunit_.simpleunit.md) |

**Returns:** *this*

___

###  percentageOfThis

▸ **percentageOfThis**(`unit`: [SimpleUnit](_simpleunit_.simpleunit.md)): *this*

*Inherited from [SimpleUnit](_simpleunit_.simpleunit.md).[percentageOfThis](_simpleunit_.simpleunit.md#percentageofthis)*

*Defined in [SimpleUnit.ts:65](https://github.com/baspeeters/measurement-toolkit/blob/b5deaf3/src/Units/SimpleUnit.ts#L65)*

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

*Defined in [SimpleUnit.ts:29](https://github.com/baspeeters/measurement-toolkit/blob/b5deaf3/src/Units/SimpleUnit.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`unit` | [SimpleUnit](_simpleunit_.simpleunit.md) |

**Returns:** *this*

___

###  toString

▸ **toString**(): *string*

*Implementation of [IBaseUnit](../interfaces/_ibaseunit_.ibaseunit.md)*

*Inherited from [SimpleUnit](_simpleunit_.simpleunit.md).[toString](_simpleunit_.simpleunit.md#tostring)*

*Defined in [SimpleUnit.ts:71](https://github.com/baspeeters/measurement-toolkit/blob/b5deaf3/src/Units/SimpleUnit.ts#L71)*

**Returns:** *string*

## Object literals

###  derivedUnits

### ▪ **derivedUnits**: *object*

*Implementation of [IBaseUnit](../interfaces/_ibaseunit_.ibaseunit.md).[derivedUnits](../interfaces/_ibaseunit_.ibaseunit.md#derivedunits)*

*Overrides [SimpleBaseUnit](_simplebaseunit_.simplebaseunit.md).[derivedUnits](_simplebaseunit_.simplebaseunit.md#derivedunits)*

*Defined in [Mass/US/Avoirdupois/Pound.ts:22](https://github.com/baspeeters/measurement-toolkit/blob/b5deaf3/src/Units/Mass/US/Avoirdupois/Pound.ts#L22)*

###  AvoirdupoisTon

▸ **AvoirdupoisTon**(): *[AvoirdupoisTon](_mass_us_avoirdupois_avoirdupoiston_.avoirdupoiston.md)‹›*

*Defined in [Mass/US/Avoirdupois/Pound.ts:29](https://github.com/baspeeters/measurement-toolkit/blob/b5deaf3/src/Units/Mass/US/Avoirdupois/Pound.ts#L29)*

**Returns:** *[AvoirdupoisTon](_mass_us_avoirdupois_avoirdupoiston_.avoirdupoiston.md)‹›*

###  Dram

▸ **Dram**(): *[Dram](_mass_us_avoirdupois_dram_.dram.md)‹›*

*Defined in [Mass/US/Avoirdupois/Pound.ts:25](https://github.com/baspeeters/measurement-toolkit/blob/b5deaf3/src/Units/Mass/US/Avoirdupois/Pound.ts#L25)*

**Returns:** *[Dram](_mass_us_avoirdupois_dram_.dram.md)‹›*

###  Grain

▸ **Grain**(): *[Grain](_mass_us_avoirdupois_grain_.grain.md)‹›*

*Defined in [Mass/US/Avoirdupois/Pound.ts:23](https://github.com/baspeeters/measurement-toolkit/blob/b5deaf3/src/Units/Mass/US/Avoirdupois/Pound.ts#L23)*

**Returns:** *[Grain](_mass_us_avoirdupois_grain_.grain.md)‹›*

###  Hundredweight

▸ **Hundredweight**(): *[Hundredweight](_mass_us_avoirdupois_hundredweight_.hundredweight.md)‹›*

*Defined in [Mass/US/Avoirdupois/Pound.ts:28](https://github.com/baspeeters/measurement-toolkit/blob/b5deaf3/src/Units/Mass/US/Avoirdupois/Pound.ts#L28)*

**Returns:** *[Hundredweight](_mass_us_avoirdupois_hundredweight_.hundredweight.md)‹›*

###  Ounce

▸ **Ounce**(): *[Ounce](_mass_us_avoirdupois_ounce_.ounce.md)‹›*

*Defined in [Mass/US/Avoirdupois/Pound.ts:26](https://github.com/baspeeters/measurement-toolkit/blob/b5deaf3/src/Units/Mass/US/Avoirdupois/Pound.ts#L26)*

**Returns:** *[Ounce](_mass_us_avoirdupois_ounce_.ounce.md)‹›*

###  Quarter

▸ **Quarter**(): *[Quarter](_mass_us_avoirdupois_quarter_.quarter.md)‹›*

*Defined in [Mass/US/Avoirdupois/Pound.ts:27](https://github.com/baspeeters/measurement-toolkit/blob/b5deaf3/src/Units/Mass/US/Avoirdupois/Pound.ts#L27)*

**Returns:** *[Quarter](_mass_us_avoirdupois_quarter_.quarter.md)‹›*
