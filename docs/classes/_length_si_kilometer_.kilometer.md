[measurement-toolkit](../README.md) › ["Length/SI/Kilometer"](../modules/_length_si_kilometer_.md) › [Kilometer](_length_si_kilometer_.kilometer.md)

# Class: Kilometer

## Hierarchy

  ↳ [SiDerivedUnit](_length_si_siderivedunit_.siderivedunit.md)

  ↳ **Kilometer**

## Implements

* [IUnit](../interfaces/_iunit_.iunit.md)
* [ISimpleUnit](../interfaces/_isimpleunit_.isimpleunit.md)
* [ISimpleUnit](../interfaces/_isimpleunit_.isimpleunit.md)
* [IDerivedUnit](../interfaces/_iderivedunit_.iderivedunit.md)
* [IUnitOfLength](../interfaces/_length_iunitoflength_.iunitoflength.md)

## Index

### Constructors

* [constructor](_length_si_kilometer_.kilometer.md#constructor)

### Properties

* [baseUnit](_length_si_kilometer_.kilometer.md#baseunit)
* [value](_length_si_kilometer_.kilometer.md#value)

### Accessors

* [to](_length_si_kilometer_.kilometer.md#to)

### Methods

* [add](_length_si_kilometer_.kilometer.md#add)
* [divideBy](_length_si_kilometer_.kilometer.md#divideby)
* [dividedBy](_length_si_kilometer_.kilometer.md#dividedby)
* [getConverters](_length_si_kilometer_.kilometer.md#getconverters)
* [multiply](_length_si_kilometer_.kilometer.md#multiply)
* [percentageOf](_length_si_kilometer_.kilometer.md#percentageof)
* [percentageOfThis](_length_si_kilometer_.kilometer.md#percentageofthis)
* [subtract](_length_si_kilometer_.kilometer.md#subtract)

## Constructors

###  constructor

\+ **new Kilometer**(`value`: number): *[Kilometer](_length_si_kilometer_.kilometer.md)*

*Inherited from [SimpleUnit](_simpleunit_.simpleunit.md).[constructor](_simpleunit_.simpleunit.md#constructor)*

*Defined in [SimpleUnit.ts:15](https://github.com/baspeeters/measurement-toolkit/blob/094f000/src/Units/SimpleUnit.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *[Kilometer](_length_si_kilometer_.kilometer.md)*

## Properties

###  baseUnit

• **baseUnit**: *[Meter](_length_si_meter_.meter.md)‹›* = new Meter(this.value * Math.pow(10, 3))

*Implementation of [IDerivedUnit](../interfaces/_iderivedunit_.iderivedunit.md).[baseUnit](../interfaces/_iderivedunit_.iderivedunit.md#baseunit)*

*Overrides [SimpleDerivedUnit](_simplederivedunit_.simplederivedunit.md).[baseUnit](_simplederivedunit_.simplederivedunit.md#abstract-baseunit)*

*Defined in [Length/SI/Kilometer.ts:13](https://github.com/baspeeters/measurement-toolkit/blob/094f000/src/Units/Length/SI/Kilometer.ts#L13)*

___

###  value

• **value**: *number*

*Implementation of [IUnitOfLength](../interfaces/_length_iunitoflength_.iunitoflength.md).[value](../interfaces/_length_iunitoflength_.iunitoflength.md#value)*

*Inherited from [SimpleUnit](_simpleunit_.simpleunit.md).[value](_simpleunit_.simpleunit.md#value)*

*Defined in [SimpleUnit.ts:13](https://github.com/baspeeters/measurement-toolkit/blob/094f000/src/Units/SimpleUnit.ts#L13)*

## Accessors

###  to

• **get to**(): *any*

*Inherited from [Unit](_unit_.unit.md).[to](_unit_.unit.md#to)*

*Defined in [Unit.ts:14](https://github.com/baspeeters/measurement-toolkit/blob/094f000/src/Units/Unit.ts#L14)*

**Returns:** *any*

## Methods

###  add

▸ **add**(`unit`: [SimpleUnit](_simpleunit_.simpleunit.md)): *this*

*Inherited from [SimpleUnit](_simpleunit_.simpleunit.md).[add](_simpleunit_.simpleunit.md#add)*

*Overrides [Unit](_unit_.unit.md).[add](_unit_.unit.md#abstract-add)*

*Defined in [SimpleUnit.ts:33](https://github.com/baspeeters/measurement-toolkit/blob/094f000/src/Units/SimpleUnit.ts#L33)*

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

*Defined in [SimpleUnit.ts:39](https://github.com/baspeeters/measurement-toolkit/blob/094f000/src/Units/SimpleUnit.ts#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`unit` | [SimpleUnit](_simpleunit_.simpleunit.md) |

**Returns:** *this*

___

###  dividedBy

▸ **dividedBy**(`unit`: [SimpleUnit](_simpleunit_.simpleunit.md)): *this*

*Inherited from [SimpleUnit](_simpleunit_.simpleunit.md).[dividedBy](_simpleunit_.simpleunit.md#dividedby)*

*Defined in [SimpleUnit.ts:45](https://github.com/baspeeters/measurement-toolkit/blob/094f000/src/Units/SimpleUnit.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`unit` | [SimpleUnit](_simpleunit_.simpleunit.md) |

**Returns:** *this*

___

###  getConverters

▸ **getConverters**(): *object*

*Implementation of [IUnitOfLength](../interfaces/_length_iunitoflength_.iunitoflength.md)*

*Inherited from [SimpleDerivedUnit](_simplederivedunit_.simplederivedunit.md).[getConverters](_simplederivedunit_.simplederivedunit.md#getconverters)*

*Overrides [SimpleUnit](_simpleunit_.simpleunit.md).[getConverters](_simpleunit_.simpleunit.md#getconverters)*

*Defined in [SimpleDerivedUnit.ts:19](https://github.com/baspeeters/measurement-toolkit/blob/094f000/src/Units/SimpleDerivedUnit.ts#L19)*

**Returns:** *object*

* \[ **key**: *string*\]: function

▸ (): *[ISimpleUnit](../interfaces/_isimpleunit_.isimpleunit.md)*

___

###  multiply

▸ **multiply**(`unit`: [SimpleUnit](_simpleunit_.simpleunit.md)): *this*

*Inherited from [SimpleUnit](_simpleunit_.simpleunit.md).[multiply](_simpleunit_.simpleunit.md#multiply)*

*Overrides [Unit](_unit_.unit.md).[multiply](_unit_.unit.md#abstract-multiply)*

*Defined in [SimpleUnit.ts:51](https://github.com/baspeeters/measurement-toolkit/blob/094f000/src/Units/SimpleUnit.ts#L51)*

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

*Defined in [SimpleUnit.ts:57](https://github.com/baspeeters/measurement-toolkit/blob/094f000/src/Units/SimpleUnit.ts#L57)*

**Parameters:**

Name | Type |
------ | ------ |
`unit` | [SimpleUnit](_simpleunit_.simpleunit.md) |

**Returns:** *this*

___

###  percentageOfThis

▸ **percentageOfThis**(`unit`: [SimpleUnit](_simpleunit_.simpleunit.md)): *this*

*Inherited from [SimpleUnit](_simpleunit_.simpleunit.md).[percentageOfThis](_simpleunit_.simpleunit.md#percentageofthis)*

*Defined in [SimpleUnit.ts:63](https://github.com/baspeeters/measurement-toolkit/blob/094f000/src/Units/SimpleUnit.ts#L63)*

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

*Defined in [SimpleUnit.ts:27](https://github.com/baspeeters/measurement-toolkit/blob/094f000/src/Units/SimpleUnit.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`unit` | [SimpleUnit](_simpleunit_.simpleunit.md) |

**Returns:** *this*
