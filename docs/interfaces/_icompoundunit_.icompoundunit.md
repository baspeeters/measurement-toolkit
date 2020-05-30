[measurement-toolkit](../README.md) › ["ICompoundUnit"](../modules/_icompoundunit_.md) › [ICompoundUnit](_icompoundunit_.icompoundunit.md)

# Interface: ICompoundUnit

## Hierarchy

* [IUnit](_iunit_.iunit.md)

  ↳ **ICompoundUnit**

## Implemented by

* [Speed](../classes/_speed_.speed.md)

## Index

### Properties

* [to](_icompoundunit_.icompoundunit.md#to)

### Methods

* [add](_icompoundunit_.icompoundunit.md#add)
* [convert](_icompoundunit_.icompoundunit.md#convert)
* [divideBy](_icompoundunit_.icompoundunit.md#divideby)
* [multiply](_icompoundunit_.icompoundunit.md#multiply)
* [percentageOf](_icompoundunit_.icompoundunit.md#percentageof)
* [subtract](_icompoundunit_.icompoundunit.md#subtract)
* [toString](_icompoundunit_.icompoundunit.md#tostring)

## Properties

###  to

• **to**: *object*

*Inherited from [IUnit](_iunit_.iunit.md).[to](_iunit_.iunit.md#to)*

*Defined in [IUnit.ts:10](https://github.com/baspeeters/measurement-toolkit/blob/b5deaf3/src/Units/IUnit.ts#L10)*

#### Type declaration:

* \[ **key**: *string*\]: function

▸ (): *[IUnit](_iunit_.iunit.md)*

## Methods

###  add

▸ **add**(`unit`: [IUnit](_iunit_.iunit.md)): *this*

*Inherited from [IUnit](_iunit_.iunit.md).[add](_iunit_.iunit.md#add)*

*Defined in [IUnit.ts:12](https://github.com/baspeeters/measurement-toolkit/blob/b5deaf3/src/Units/IUnit.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`unit` | [IUnit](_iunit_.iunit.md) |

**Returns:** *this*

___

###  convert

▸ **convert**(`unit`: [ICompoundUnit](_icompoundunit_.icompoundunit.md)): *[ICompoundUnit](_icompoundunit_.icompoundunit.md)*

*Defined in [ICompoundUnit.ts:12](https://github.com/baspeeters/measurement-toolkit/blob/b5deaf3/src/Units/ICompoundUnit.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`unit` | [ICompoundUnit](_icompoundunit_.icompoundunit.md) |

**Returns:** *[ICompoundUnit](_icompoundunit_.icompoundunit.md)*

___

###  divideBy

▸ **divideBy**(`unit`: [IUnit](_iunit_.iunit.md)): *this*

*Inherited from [IUnit](_iunit_.iunit.md).[divideBy](_iunit_.iunit.md#divideby)*

*Defined in [IUnit.ts:14](https://github.com/baspeeters/measurement-toolkit/blob/b5deaf3/src/Units/IUnit.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`unit` | [IUnit](_iunit_.iunit.md) |

**Returns:** *this*

___

###  multiply

▸ **multiply**(`unit`: [IUnit](_iunit_.iunit.md)): *this*

*Inherited from [IUnit](_iunit_.iunit.md).[multiply](_iunit_.iunit.md#multiply)*

*Defined in [IUnit.ts:16](https://github.com/baspeeters/measurement-toolkit/blob/b5deaf3/src/Units/IUnit.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`unit` | [IUnit](_iunit_.iunit.md) |

**Returns:** *this*

___

###  percentageOf

▸ **percentageOf**(`unit`: [IUnit](_iunit_.iunit.md)): *this*

*Inherited from [IUnit](_iunit_.iunit.md).[percentageOf](_iunit_.iunit.md#percentageof)*

*Defined in [IUnit.ts:18](https://github.com/baspeeters/measurement-toolkit/blob/b5deaf3/src/Units/IUnit.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`unit` | [IUnit](_iunit_.iunit.md) |

**Returns:** *this*

___

###  subtract

▸ **subtract**(`unit`: [IUnit](_iunit_.iunit.md)): *this*

*Inherited from [IUnit](_iunit_.iunit.md).[subtract](_iunit_.iunit.md#subtract)*

*Defined in [IUnit.ts:20](https://github.com/baspeeters/measurement-toolkit/blob/b5deaf3/src/Units/IUnit.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`unit` | [IUnit](_iunit_.iunit.md) |

**Returns:** *this*

___

###  toString

▸ **toString**(): *string*

*Inherited from [IUnit](_iunit_.iunit.md).[toString](_iunit_.iunit.md#tostring)*

*Defined in [IUnit.ts:22](https://github.com/baspeeters/measurement-toolkit/blob/b5deaf3/src/Units/IUnit.ts#L22)*

**Returns:** *string*
