[measurement-toolkit](../README.md) › ["SimpleUnit"](../modules/_simpleunit_.md) › [SimpleUnit](_simpleunit_.simpleunit.md)

# Class: SimpleUnit

## Hierarchy

* [Unit](_unit_.unit.md)

  ↳ **SimpleUnit**

  ↳ [SimpleBaseUnit](_simplebaseunit_.simplebaseunit.md)

  ↳ [SimpleDerivedUnit](_simplederivedunit_.simplederivedunit.md)

## Implements

* [IUnit](../interfaces/_iunit_.iunit.md)
* [ISimpleUnit](../interfaces/_isimpleunit_.isimpleunit.md)

## Index

### Constructors

* [constructor](_simpleunit_.simpleunit.md#constructor)

### Properties

* [symbol](_simpleunit_.simpleunit.md#abstract-symbol)
* [value](_simpleunit_.simpleunit.md#value)

### Accessors

* [to](_simpleunit_.simpleunit.md#to)

### Methods

* [add](_simpleunit_.simpleunit.md#add)
* [divideBy](_simpleunit_.simpleunit.md#divideby)
* [dividedBy](_simpleunit_.simpleunit.md#dividedby)
* [getConverters](_simpleunit_.simpleunit.md#getconverters)
* [multiply](_simpleunit_.simpleunit.md#multiply)
* [percentageOf](_simpleunit_.simpleunit.md#percentageof)
* [percentageOfThis](_simpleunit_.simpleunit.md#percentageofthis)
* [subtract](_simpleunit_.simpleunit.md#subtract)
* [toString](_simpleunit_.simpleunit.md#tostring)

## Constructors

###  constructor

\+ **new SimpleUnit**(`value`: number): *[SimpleUnit](_simpleunit_.simpleunit.md)*

*Defined in [SimpleUnit.ts:17](https://github.com/baspeeters/measurement-toolkit/blob/212ab3d/src/Units/SimpleUnit.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *[SimpleUnit](_simpleunit_.simpleunit.md)*

## Properties

### `Abstract` symbol

• **symbol**: *string*

*Implementation of [ISimpleUnit](../interfaces/_isimpleunit_.isimpleunit.md).[symbol](../interfaces/_isimpleunit_.isimpleunit.md#symbol)*

*Defined in [SimpleUnit.ts:13](https://github.com/baspeeters/measurement-toolkit/blob/212ab3d/src/Units/SimpleUnit.ts#L13)*

___

###  value

• **value**: *number*

*Implementation of [ISimpleUnit](../interfaces/_isimpleunit_.isimpleunit.md).[value](../interfaces/_isimpleunit_.isimpleunit.md#value)*

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

*Defined in [SimpleUnit.ts:47](https://github.com/baspeeters/measurement-toolkit/blob/212ab3d/src/Units/SimpleUnit.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`unit` | [SimpleUnit](_simpleunit_.simpleunit.md) |

**Returns:** *this*

___

###  getConverters

▸ **getConverters**(): *object*

*Implementation of [ISimpleUnit](../interfaces/_isimpleunit_.isimpleunit.md)*

*Overrides [Unit](_unit_.unit.md).[getConverters](_unit_.unit.md#getconverters)*

*Defined in [SimpleUnit.ts:25](https://github.com/baspeeters/measurement-toolkit/blob/212ab3d/src/Units/SimpleUnit.ts#L25)*

**Returns:** *object*

* \[ **key**: *string*\]: function

▸ (): *[ISimpleUnit](../interfaces/_isimpleunit_.isimpleunit.md)*

___

###  multiply

▸ **multiply**(`unit`: [SimpleUnit](_simpleunit_.simpleunit.md)): *this*

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

*Defined in [SimpleUnit.ts:65](https://github.com/baspeeters/measurement-toolkit/blob/212ab3d/src/Units/SimpleUnit.ts#L65)*

**Parameters:**

Name | Type |
------ | ------ |
`unit` | [SimpleUnit](_simpleunit_.simpleunit.md) |

**Returns:** *this*

___

###  subtract

▸ **subtract**(`unit`: [SimpleUnit](_simpleunit_.simpleunit.md)): *this*

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

*Implementation of [ISimpleUnit](../interfaces/_isimpleunit_.isimpleunit.md)*

*Defined in [SimpleUnit.ts:71](https://github.com/baspeeters/measurement-toolkit/blob/212ab3d/src/Units/SimpleUnit.ts#L71)*

**Returns:** *string*
