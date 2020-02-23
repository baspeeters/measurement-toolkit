[measurement-toolkit](../README.md) › ["Length/IUnitOfLength"](../modules/_length_iunitoflength_.md) › [IUnitOfLength](_length_iunitoflength_.iunitoflength.md)

# Interface: IUnitOfLength

## Hierarchy

  ↳ [ISimpleUnit](_isimpleunit_.isimpleunit.md)

  ↳ **IUnitOfLength**

## Implemented by

* [Attometer](../classes/_length_si_attometer_.attometer.md)
* [Centimeter](../classes/_length_si_centimeter_.centimeter.md)
* [Decameter](../classes/_length_si_decameter_.decameter.md)
* [Decimeter](../classes/_length_si_decimeter_.decimeter.md)
* [Exameter](../classes/_length_si_exameter_.exameter.md)
* [Femtometer](../classes/_length_si_femtometer_.femtometer.md)
* [Gigameter](../classes/_length_si_gigameter_.gigameter.md)
* [Hectometer](../classes/_length_si_hectometer_.hectometer.md)
* [Kilometer](../classes/_length_si_kilometer_.kilometer.md)
* [Megameter](../classes/_length_si_megameter_.megameter.md)
* [Meter](../classes/_length_si_meter_.meter.md)
* [Micrometer](../classes/_length_si_micrometer_.micrometer.md)
* [Millimeter](../classes/_length_si_millimeter_.millimeter.md)
* [Nanometer](../classes/_length_si_nanometer_.nanometer.md)
* [Petameter](../classes/_length_si_petameter_.petameter.md)
* [Picometer](../classes/_length_si_picometer_.picometer.md)
* [SiDerivedUnit](../classes/_length_si_siderivedunit_.siderivedunit.md)
* [Terameter](../classes/_length_si_terameter_.terameter.md)
* [Yoctometer](../classes/_length_si_yoctometer_.yoctometer.md)
* [Yottameter](../classes/_length_si_yottameter_.yottameter.md)
* [Zeptometer](../classes/_length_si_zeptometer_.zeptometer.md)
* [Zettameter](../classes/_length_si_zettameter_.zettameter.md)

## Index

### Properties

* [symbol](_length_iunitoflength_.iunitoflength.md#symbol)
* [to](_length_iunitoflength_.iunitoflength.md#to)
* [value](_length_iunitoflength_.iunitoflength.md#value)

### Methods

* [add](_length_iunitoflength_.iunitoflength.md#add)
* [divideBy](_length_iunitoflength_.iunitoflength.md#divideby)
* [getConverters](_length_iunitoflength_.iunitoflength.md#getconverters)
* [multiply](_length_iunitoflength_.iunitoflength.md#multiply)
* [percentageOf](_length_iunitoflength_.iunitoflength.md#percentageof)
* [subtract](_length_iunitoflength_.iunitoflength.md#subtract)
* [toString](_length_iunitoflength_.iunitoflength.md#tostring)

## Properties

###  symbol

• **symbol**: *string*

*Inherited from [ISimpleUnit](_isimpleunit_.isimpleunit.md).[symbol](_isimpleunit_.isimpleunit.md#symbol)*

*Defined in [ISimpleUnit.ts:13](https://github.com/baspeeters/measurement-toolkit/blob/b77bfc1/src/Units/ISimpleUnit.ts#L13)*

___

###  to

• **to**: *object*

*Overrides [ISimpleUnit](_isimpleunit_.isimpleunit.md).[to](_isimpleunit_.isimpleunit.md#to)*

*Defined in [Length/IUnitOfLength.ts:12](https://github.com/baspeeters/measurement-toolkit/blob/b77bfc1/src/Units/Length/IUnitOfLength.ts#L12)*

#### Type declaration:

* \[ **key**: *string*\]: function

▸ (): *[IUnitOfLength](_length_iunitoflength_.iunitoflength.md)*

___

###  value

• **value**: *number*

*Inherited from [ISimpleUnit](_isimpleunit_.isimpleunit.md).[value](_isimpleunit_.isimpleunit.md#value)*

*Defined in [ISimpleUnit.ts:12](https://github.com/baspeeters/measurement-toolkit/blob/b77bfc1/src/Units/ISimpleUnit.ts#L12)*

## Methods

###  add

▸ **add**(`unit`: [IUnit](_iunit_.iunit.md)): *this*

*Inherited from [IUnit](_iunit_.iunit.md).[add](_iunit_.iunit.md#add)*

*Defined in [IUnit.ts:12](https://github.com/baspeeters/measurement-toolkit/blob/b77bfc1/src/Units/IUnit.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`unit` | [IUnit](_iunit_.iunit.md) |

**Returns:** *this*

___

###  divideBy

▸ **divideBy**(`unit`: [IUnit](_iunit_.iunit.md)): *this*

*Inherited from [IUnit](_iunit_.iunit.md).[divideBy](_iunit_.iunit.md#divideby)*

*Defined in [IUnit.ts:14](https://github.com/baspeeters/measurement-toolkit/blob/b77bfc1/src/Units/IUnit.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`unit` | [IUnit](_iunit_.iunit.md) |

**Returns:** *this*

___

###  getConverters

▸ **getConverters**(): *object*

*Overrides [ISimpleUnit](_isimpleunit_.isimpleunit.md).[getConverters](_isimpleunit_.isimpleunit.md#getconverters)*

*Defined in [Length/IUnitOfLength.ts:13](https://github.com/baspeeters/measurement-toolkit/blob/b77bfc1/src/Units/Length/IUnitOfLength.ts#L13)*

**Returns:** *object*

* \[ **key**: *string*\]: function

▸ (): *[IUnitOfLength](_length_iunitoflength_.iunitoflength.md)*

___

###  multiply

▸ **multiply**(`unit`: [IUnit](_iunit_.iunit.md)): *this*

*Inherited from [IUnit](_iunit_.iunit.md).[multiply](_iunit_.iunit.md#multiply)*

*Defined in [IUnit.ts:16](https://github.com/baspeeters/measurement-toolkit/blob/b77bfc1/src/Units/IUnit.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`unit` | [IUnit](_iunit_.iunit.md) |

**Returns:** *this*

___

###  percentageOf

▸ **percentageOf**(`unit`: [IUnit](_iunit_.iunit.md)): *this*

*Inherited from [IUnit](_iunit_.iunit.md).[percentageOf](_iunit_.iunit.md#percentageof)*

*Defined in [IUnit.ts:18](https://github.com/baspeeters/measurement-toolkit/blob/b77bfc1/src/Units/IUnit.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`unit` | [IUnit](_iunit_.iunit.md) |

**Returns:** *this*

___

###  subtract

▸ **subtract**(`unit`: [IUnit](_iunit_.iunit.md)): *this*

*Inherited from [IUnit](_iunit_.iunit.md).[subtract](_iunit_.iunit.md#subtract)*

*Defined in [IUnit.ts:20](https://github.com/baspeeters/measurement-toolkit/blob/b77bfc1/src/Units/IUnit.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`unit` | [IUnit](_iunit_.iunit.md) |

**Returns:** *this*

___

###  toString

▸ **toString**(): *string*

*Inherited from [IUnit](_iunit_.iunit.md).[toString](_iunit_.iunit.md#tostring)*

*Defined in [IUnit.ts:22](https://github.com/baspeeters/measurement-toolkit/blob/b77bfc1/src/Units/IUnit.ts#L22)*

**Returns:** *string*
