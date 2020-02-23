[measurement-toolkit](../README.md) › ["Speed"](../modules/_speed_.md) › [Speed](_speed_.speed.md)

# Class: Speed

## Hierarchy

* [Unit](_unit_.unit.md)

  ↳ **Speed**

## Implements

* [IUnit](../interfaces/_iunit_.iunit.md)
* [ICompoundUnit](../interfaces/_icompoundunit_.icompoundunit.md)

## Index

### Constructors

* [constructor](_speed_.speed.md#constructor)

### Properties

* [distance](_speed_.speed.md#distance)
* [time](_speed_.speed.md#time)

### Accessors

* [to](_speed_.speed.md#to)

### Methods

* [add](_speed_.speed.md#add)
* [convert](_speed_.speed.md#convert)
* [divideBy](_speed_.speed.md#divideby)
* [getConverters](_speed_.speed.md#getconverters)
* [getDistanceOverTime](_speed_.speed.md#getdistanceovertime)
* [getTimeOverDistance](_speed_.speed.md#gettimeoverdistance)
* [multiply](_speed_.speed.md#multiply)
* [percentageOf](_speed_.speed.md#percentageof)
* [subtract](_speed_.speed.md#subtract)
* [toString](_speed_.speed.md#tostring)

## Constructors

###  constructor

\+ **new Speed**(`distance`: [IUnitOfLength](../interfaces/_length_iunitoflength_.iunitoflength.md), `time`: [IUnitOfTime](../interfaces/_time_iunitoftime_.iunitoftime.md)): *[Speed](_speed_.speed.md)*

*Defined in [Speed.ts:18](https://github.com/baspeeters/measurement-toolkit/blob/b77bfc1/src/Units/Speed.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`distance` | [IUnitOfLength](../interfaces/_length_iunitoflength_.iunitoflength.md) |
`time` | [IUnitOfTime](../interfaces/_time_iunitoftime_.iunitoftime.md) |

**Returns:** *[Speed](_speed_.speed.md)*

## Properties

###  distance

• **distance**: *[IUnitOfLength](../interfaces/_length_iunitoflength_.iunitoflength.md)*

*Defined in [Speed.ts:17](https://github.com/baspeeters/measurement-toolkit/blob/b77bfc1/src/Units/Speed.ts#L17)*

___

###  time

• **time**: *[IUnitOfTime](../interfaces/_time_iunitoftime_.iunitoftime.md)*

*Defined in [Speed.ts:18](https://github.com/baspeeters/measurement-toolkit/blob/b77bfc1/src/Units/Speed.ts#L18)*

## Accessors

###  to

• **get to**(): *any*

*Inherited from [Unit](_unit_.unit.md).[to](_unit_.unit.md#to)*

*Defined in [Unit.ts:14](https://github.com/baspeeters/measurement-toolkit/blob/b77bfc1/src/Units/Unit.ts#L14)*

**Returns:** *any*

## Methods

###  add

▸ **add**(`unit`: [Speed](_speed_.speed.md)): *this*

*Overrides [Unit](_unit_.unit.md).[add](_unit_.unit.md#abstract-add)*

*Defined in [Speed.ts:83](https://github.com/baspeeters/measurement-toolkit/blob/b77bfc1/src/Units/Speed.ts#L83)*

**Parameters:**

Name | Type |
------ | ------ |
`unit` | [Speed](_speed_.speed.md) |

**Returns:** *this*

___

###  convert

▸ **convert**(`unit`: [Speed](_speed_.speed.md)): *[Speed](_speed_.speed.md)*

*Defined in [Speed.ts:27](https://github.com/baspeeters/measurement-toolkit/blob/b77bfc1/src/Units/Speed.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`unit` | [Speed](_speed_.speed.md) |

**Returns:** *[Speed](_speed_.speed.md)*

___

###  divideBy

▸ **divideBy**(`unit`: [Speed](_speed_.speed.md)): *this*

*Overrides [Unit](_unit_.unit.md).[divideBy](_unit_.unit.md#abstract-divideby)*

*Defined in [Speed.ts:92](https://github.com/baspeeters/measurement-toolkit/blob/b77bfc1/src/Units/Speed.ts#L92)*

**Parameters:**

Name | Type |
------ | ------ |
`unit` | [Speed](_speed_.speed.md) |

**Returns:** *this*

___

###  getConverters

▸ **getConverters**(): *object*

*Inherited from [Unit](_unit_.unit.md).[getConverters](_unit_.unit.md#getconverters)*

*Defined in [Unit.ts:18](https://github.com/baspeeters/measurement-toolkit/blob/b77bfc1/src/Units/Unit.ts#L18)*

**Returns:** *object*

* \[ **key**: *string*\]: function

▸ (): *[IUnit](../interfaces/_iunit_.iunit.md)*

___

###  getDistanceOverTime

▸ **getDistanceOverTime**(`duration`: [IUnitOfLength](../interfaces/_length_iunitoflength_.iunitoflength.md)): *[IUnitOfLength](../interfaces/_length_iunitoflength_.iunitoflength.md)*

*Defined in [Speed.ts:62](https://github.com/baspeeters/measurement-toolkit/blob/b77bfc1/src/Units/Speed.ts#L62)*

Returns the distance traveled after spending the given time

**Parameters:**

Name | Type |
------ | ------ |
`duration` | [IUnitOfLength](../interfaces/_length_iunitoflength_.iunitoflength.md) |

**Returns:** *[IUnitOfLength](../interfaces/_length_iunitoflength_.iunitoflength.md)*

IUnitOfLength

___

###  getTimeOverDistance

▸ **getTimeOverDistance**(`distance`: [IUnitOfLength](../interfaces/_length_iunitoflength_.iunitoflength.md)): *[IUnitOfTime](../interfaces/_time_iunitoftime_.iunitoftime.md)*

*Defined in [Speed.ts:45](https://github.com/baspeeters/measurement-toolkit/blob/b77bfc1/src/Units/Speed.ts#L45)*

Returns the time spent traveling over the given distance

**Parameters:**

Name | Type |
------ | ------ |
`distance` | [IUnitOfLength](../interfaces/_length_iunitoflength_.iunitoflength.md) |

**Returns:** *[IUnitOfTime](../interfaces/_time_iunitoftime_.iunitoftime.md)*

IUnitOfTime

___

###  multiply

▸ **multiply**(`unit`: [Speed](_speed_.speed.md)): *this*

*Overrides [Unit](_unit_.unit.md).[multiply](_unit_.unit.md#abstract-multiply)*

*Defined in [Speed.ts:101](https://github.com/baspeeters/measurement-toolkit/blob/b77bfc1/src/Units/Speed.ts#L101)*

**Parameters:**

Name | Type |
------ | ------ |
`unit` | [Speed](_speed_.speed.md) |

**Returns:** *this*

___

###  percentageOf

▸ **percentageOf**(`unit`: [Speed](_speed_.speed.md)): *this*

*Overrides [Unit](_unit_.unit.md).[percentageOf](_unit_.unit.md#abstract-percentageof)*

*Defined in [Speed.ts:110](https://github.com/baspeeters/measurement-toolkit/blob/b77bfc1/src/Units/Speed.ts#L110)*

**Parameters:**

Name | Type |
------ | ------ |
`unit` | [Speed](_speed_.speed.md) |

**Returns:** *this*

___

###  subtract

▸ **subtract**(`unit`: [Speed](_speed_.speed.md)): *this*

*Overrides [Unit](_unit_.unit.md).[subtract](_unit_.unit.md#abstract-subtract)*

*Defined in [Speed.ts:74](https://github.com/baspeeters/measurement-toolkit/blob/b77bfc1/src/Units/Speed.ts#L74)*

**Parameters:**

Name | Type |
------ | ------ |
`unit` | [Speed](_speed_.speed.md) |

**Returns:** *this*

___

###  toString

▸ **toString**(): *string*

*Implementation of [ICompoundUnit](../interfaces/_icompoundunit_.icompoundunit.md)*

*Defined in [Speed.ts:121](https://github.com/baspeeters/measurement-toolkit/blob/b77bfc1/src/Units/Speed.ts#L121)*

**Returns:** *string*
