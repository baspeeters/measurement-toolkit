[measurement-toolkit](../README.md) › ["IBaseUnit"](../modules/_ibaseunit_.md) › [IBaseUnit](_ibaseunit_.ibaseunit.md)

# Interface: IBaseUnit

## Hierarchy

* [IUnit](_iunit_.iunit.md)

  ↳ **IBaseUnit**

## Implemented by

* [Grain](../classes/_mass_us_avoirdupois_grain_.grain.md)
* [Kilogram](../classes/_mass_si_kilogram_.kilogram.md)
* [Meter](../classes/_length_si_meter_.meter.md)
* [Pound](../classes/_mass_us_avoirdupois_pound_.pound.md)
* [Pound](../classes/_mass_us_avoirdupois_pound_.pound.md)
* [Second](../classes/_time_si_second_.second.md)
* [SimpleBaseUnit](../classes/_simplebaseunit_.simplebaseunit.md)
* [TroyPound](../classes/_mass_us_troy_troypound_.troypound.md)
* [Yard](../classes/_length_us_yard_.yard.md)
* [Yard](../classes/_length_us_yard_.yard.md)

## Index

### Properties

* [derivedUnits](_ibaseunit_.ibaseunit.md#derivedunits)
* [to](_ibaseunit_.ibaseunit.md#to)

### Methods

* [add](_ibaseunit_.ibaseunit.md#add)
* [divideBy](_ibaseunit_.ibaseunit.md#divideby)
* [getConverters](_ibaseunit_.ibaseunit.md#getconverters)
* [multiply](_ibaseunit_.ibaseunit.md#multiply)
* [percentageOf](_ibaseunit_.ibaseunit.md#percentageof)
* [subtract](_ibaseunit_.ibaseunit.md#subtract)
* [toString](_ibaseunit_.ibaseunit.md#tostring)

## Properties

###  derivedUnits

• **derivedUnits**: *object*

*Defined in [IBaseUnit.ts:12](https://github.com/baspeeters/measurement-toolkit/blob/b5deaf3/src/Units/IBaseUnit.ts#L12)*

#### Type declaration:

* \[ **key**: *string*\]: function

▸ (): *[IUnit](_iunit_.iunit.md)*

___

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

###  getConverters

▸ **getConverters**(): *object*

*Defined in [IBaseUnit.ts:14](https://github.com/baspeeters/measurement-toolkit/blob/b5deaf3/src/Units/IBaseUnit.ts#L14)*

**Returns:** *object*

* \[ **key**: *string*\]: function

▸ (): *[IUnit](_iunit_.iunit.md)*

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
