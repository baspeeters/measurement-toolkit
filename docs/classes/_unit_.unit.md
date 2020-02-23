[measurement-toolkit](../README.md) › ["Unit"](../modules/_unit_.md) › [Unit](_unit_.unit.md)

# Class: Unit

## Hierarchy

* **Unit**

  ↳ [SimpleUnit](_simpleunit_.simpleunit.md)

  ↳ [Speed](_speed_.speed.md)

## Implements

* [IUnit](../interfaces/_iunit_.iunit.md)

## Index

### Accessors

* [to](_unit_.unit.md#to)

### Methods

* [add](_unit_.unit.md#abstract-add)
* [divideBy](_unit_.unit.md#abstract-divideby)
* [getConverters](_unit_.unit.md#getconverters)
* [multiply](_unit_.unit.md#abstract-multiply)
* [percentageOf](_unit_.unit.md#abstract-percentageof)
* [subtract](_unit_.unit.md#abstract-subtract)

## Accessors

###  to

• **get to**(): *any*

*Defined in [Unit.ts:14](https://github.com/baspeeters/measurement-toolkit/blob/b77bfc1/src/Units/Unit.ts#L14)*

**Returns:** *any*

## Methods

### `Abstract` add

▸ **add**(`unit`: [IUnit](../interfaces/_iunit_.iunit.md)): *this*

*Implementation of [IUnit](../interfaces/_iunit_.iunit.md)*

*Defined in [Unit.ts:22](https://github.com/baspeeters/measurement-toolkit/blob/b77bfc1/src/Units/Unit.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`unit` | [IUnit](../interfaces/_iunit_.iunit.md) |

**Returns:** *this*

___

### `Abstract` divideBy

▸ **divideBy**(`unit`: [IUnit](../interfaces/_iunit_.iunit.md)): *this*

*Implementation of [IUnit](../interfaces/_iunit_.iunit.md)*

*Defined in [Unit.ts:24](https://github.com/baspeeters/measurement-toolkit/blob/b77bfc1/src/Units/Unit.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`unit` | [IUnit](../interfaces/_iunit_.iunit.md) |

**Returns:** *this*

___

###  getConverters

▸ **getConverters**(): *object*

*Defined in [Unit.ts:18](https://github.com/baspeeters/measurement-toolkit/blob/b77bfc1/src/Units/Unit.ts#L18)*

**Returns:** *object*

* \[ **key**: *string*\]: function

▸ (): *[IUnit](../interfaces/_iunit_.iunit.md)*

___

### `Abstract` multiply

▸ **multiply**(`unit`: [IUnit](../interfaces/_iunit_.iunit.md)): *this*

*Implementation of [IUnit](../interfaces/_iunit_.iunit.md)*

*Defined in [Unit.ts:26](https://github.com/baspeeters/measurement-toolkit/blob/b77bfc1/src/Units/Unit.ts#L26)*

**Parameters:**

Name | Type |
------ | ------ |
`unit` | [IUnit](../interfaces/_iunit_.iunit.md) |

**Returns:** *this*

___

### `Abstract` percentageOf

▸ **percentageOf**(`unit`: [IUnit](../interfaces/_iunit_.iunit.md)): *this*

*Implementation of [IUnit](../interfaces/_iunit_.iunit.md)*

*Defined in [Unit.ts:28](https://github.com/baspeeters/measurement-toolkit/blob/b77bfc1/src/Units/Unit.ts#L28)*

**Parameters:**

Name | Type |
------ | ------ |
`unit` | [IUnit](../interfaces/_iunit_.iunit.md) |

**Returns:** *this*

___

### `Abstract` subtract

▸ **subtract**(`unit`: [IUnit](../interfaces/_iunit_.iunit.md)): *this*

*Implementation of [IUnit](../interfaces/_iunit_.iunit.md)*

*Defined in [Unit.ts:30](https://github.com/baspeeters/measurement-toolkit/blob/b77bfc1/src/Units/Unit.ts#L30)*

**Parameters:**

Name | Type |
------ | ------ |
`unit` | [IUnit](../interfaces/_iunit_.iunit.md) |

**Returns:** *this*
