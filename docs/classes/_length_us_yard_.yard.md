[measurement-toolkit](../README.md) › ["Length/US/Yard"](../modules/_length_us_yard_.md) › [Yard](_length_us_yard_.yard.md)

# Class: Yard

## Hierarchy

  ↳ [SimpleBaseUnit](_simplebaseunit_.simplebaseunit.md)

  ↳ **Yard**

## Implements

* [IUnit](../interfaces/_iunit_.iunit.md)
* [ISimpleUnit](../interfaces/_isimpleunit_.isimpleunit.md)
* [ISimpleUnit](../interfaces/_isimpleunit_.isimpleunit.md)
* [IBaseUnit](../interfaces/_ibaseunit_.ibaseunit.md)
* [IBaseUnit](../interfaces/_ibaseunit_.ibaseunit.md)
* [IUnitOfLength](../interfaces/_length_iunitoflength_.iunitoflength.md)

## Index

### Constructors

* [constructor](_length_us_yard_.yard.md#constructor)

### Properties

* [symbol](_length_us_yard_.yard.md#symbol)
* [value](_length_us_yard_.yard.md#value)

### Accessors

* [to](_length_us_yard_.yard.md#to)

### Methods

* [add](_length_us_yard_.yard.md#add)
* [divideBy](_length_us_yard_.yard.md#divideby)
* [dividedBy](_length_us_yard_.yard.md#dividedby)
* [getConverters](_length_us_yard_.yard.md#getconverters)
* [multiply](_length_us_yard_.yard.md#multiply)
* [percentageOf](_length_us_yard_.yard.md#percentageof)
* [percentageOfThis](_length_us_yard_.yard.md#percentageofthis)
* [subtract](_length_us_yard_.yard.md#subtract)
* [toString](_length_us_yard_.yard.md#tostring)

### Object literals

* [derivedUnits](_length_us_yard_.yard.md#derivedunits)

## Constructors

###  constructor

\+ **new Yard**(`value`: number): *[Yard](_length_us_yard_.yard.md)*

*Inherited from [SimpleUnit](_simpleunit_.simpleunit.md).[constructor](_simpleunit_.simpleunit.md#constructor)*

*Defined in [SimpleUnit.ts:17](https://github.com/baspeeters/measurement-toolkit/blob/b5deaf3/src/Units/SimpleUnit.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *[Yard](_length_us_yard_.yard.md)*

## Properties

###  symbol

• **symbol**: *string* = "yd"

*Implementation of [IUnitOfLength](../interfaces/_length_iunitoflength_.iunitoflength.md).[symbol](../interfaces/_length_iunitoflength_.iunitoflength.md#symbol)*

*Overrides [SimpleUnit](_simpleunit_.simpleunit.md).[symbol](_simpleunit_.simpleunit.md#abstract-symbol)*

*Defined in [Length/US/Yard.ts:18](https://github.com/baspeeters/measurement-toolkit/blob/b5deaf3/src/Units/Length/US/Yard.ts#L18)*

___

###  value

• **value**: *number*

*Implementation of [IUnitOfLength](../interfaces/_length_iunitoflength_.iunitoflength.md).[value](../interfaces/_length_iunitoflength_.iunitoflength.md#value)*

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

*Implementation of [IUnitOfLength](../interfaces/_length_iunitoflength_.iunitoflength.md)*

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

*Implementation of [IUnitOfLength](../interfaces/_length_iunitoflength_.iunitoflength.md)*

*Inherited from [SimpleUnit](_simpleunit_.simpleunit.md).[toString](_simpleunit_.simpleunit.md#tostring)*

*Defined in [SimpleUnit.ts:71](https://github.com/baspeeters/measurement-toolkit/blob/b5deaf3/src/Units/SimpleUnit.ts#L71)*

**Returns:** *string*

## Object literals

###  derivedUnits

### ▪ **derivedUnits**: *object*

*Implementation of [IBaseUnit](../interfaces/_ibaseunit_.ibaseunit.md).[derivedUnits](../interfaces/_ibaseunit_.ibaseunit.md#derivedunits)*

*Overrides [SimpleBaseUnit](_simplebaseunit_.simplebaseunit.md).[derivedUnits](_simplebaseunit_.simplebaseunit.md#derivedunits)*

*Defined in [Length/US/Yard.ts:20](https://github.com/baspeeters/measurement-toolkit/blob/b5deaf3/src/Units/Length/US/Yard.ts#L20)*

###  Foot

▸ **Foot**(): *[Foot](_length_us_foot_.foot.md)*

*Defined in [Length/US/Yard.ts:23](https://github.com/baspeeters/measurement-toolkit/blob/b5deaf3/src/Units/Length/US/Yard.ts#L23)*

**Returns:** *[Foot](_length_us_foot_.foot.md)*

###  Inch

▸ **Inch**(): *[Inch](_length_us_inch_.inch.md)*

*Defined in [Length/US/Yard.ts:21](https://github.com/baspeeters/measurement-toolkit/blob/b5deaf3/src/Units/Length/US/Yard.ts#L21)*

**Returns:** *[Inch](_length_us_inch_.inch.md)*

###  Mile

▸ **Mile**(): *[Mile](_length_us_mile_.mile.md)*

*Defined in [Length/US/Yard.ts:24](https://github.com/baspeeters/measurement-toolkit/blob/b5deaf3/src/Units/Length/US/Yard.ts#L24)*

**Returns:** *[Mile](_length_us_mile_.mile.md)*
