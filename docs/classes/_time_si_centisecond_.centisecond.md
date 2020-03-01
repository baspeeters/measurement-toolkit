[measurement-toolkit](../README.md) › ["Time/SI/Centisecond"](../modules/_time_si_centisecond_.md) › [Centisecond](_time_si_centisecond_.centisecond.md)

# Class: Centisecond

## Hierarchy

  ↳ [SiDerivedUnit](_time_si_siderivedunit_.siderivedunit.md)

  ↳ **Centisecond**

## Implements

* [IUnit](../interfaces/_iunit_.iunit.md)
* [ISimpleUnit](../interfaces/_isimpleunit_.isimpleunit.md)
* [ISimpleUnit](../interfaces/_isimpleunit_.isimpleunit.md)
* [IDerivedUnit](../interfaces/_iderivedunit_.iderivedunit.md)
* [IUnitOfTime](../interfaces/_time_iunitoftime_.iunitoftime.md)

## Index

### Constructors

* [constructor](_time_si_centisecond_.centisecond.md#constructor)

### Properties

* [baseUnit](_time_si_centisecond_.centisecond.md#baseunit)
* [symbol](_time_si_centisecond_.centisecond.md#symbol)
* [value](_time_si_centisecond_.centisecond.md#value)

### Accessors

* [to](_time_si_centisecond_.centisecond.md#to)

### Methods

* [add](_time_si_centisecond_.centisecond.md#add)
* [divideBy](_time_si_centisecond_.centisecond.md#divideby)
* [dividedBy](_time_si_centisecond_.centisecond.md#dividedby)
* [getConverters](_time_si_centisecond_.centisecond.md#getconverters)
* [multiply](_time_si_centisecond_.centisecond.md#multiply)
* [percentageOf](_time_si_centisecond_.centisecond.md#percentageof)
* [percentageOfThis](_time_si_centisecond_.centisecond.md#percentageofthis)
* [subtract](_time_si_centisecond_.centisecond.md#subtract)
* [toString](_time_si_centisecond_.centisecond.md#tostring)

## Constructors

###  constructor

\+ **new Centisecond**(`value`: number): *[Centisecond](_time_si_centisecond_.centisecond.md)*

*Inherited from [SimpleUnit](_simpleunit_.simpleunit.md).[constructor](_simpleunit_.simpleunit.md#constructor)*

*Defined in [SimpleUnit.ts:17](https://github.com/baspeeters/measurement-toolkit/blob/212ab3d/src/Units/SimpleUnit.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *[Centisecond](_time_si_centisecond_.centisecond.md)*

## Properties

###  baseUnit

• **baseUnit**: *[Second](_time_si_second_.second.md)‹›* = new Second(this.value * Math.pow(10, -2))

*Implementation of [IDerivedUnit](../interfaces/_iderivedunit_.iderivedunit.md).[baseUnit](../interfaces/_iderivedunit_.iderivedunit.md#baseunit)*

*Overrides [SiDerivedUnit](_time_si_siderivedunit_.siderivedunit.md).[baseUnit](_time_si_siderivedunit_.siderivedunit.md#abstract-baseunit)*

*Defined in [Time/SI/Centisecond.ts:14](https://github.com/baspeeters/measurement-toolkit/blob/212ab3d/src/Units/Time/SI/Centisecond.ts#L14)*

___

###  symbol

• **symbol**: *string* = "cs"

*Implementation of [IUnitOfTime](../interfaces/_time_iunitoftime_.iunitoftime.md).[symbol](../interfaces/_time_iunitoftime_.iunitoftime.md#symbol)*

*Overrides [SimpleUnit](_simpleunit_.simpleunit.md).[symbol](_simpleunit_.simpleunit.md#abstract-symbol)*

*Defined in [Time/SI/Centisecond.ts:13](https://github.com/baspeeters/measurement-toolkit/blob/212ab3d/src/Units/Time/SI/Centisecond.ts#L13)*

___

###  value

• **value**: *number*

*Implementation of [IUnitOfTime](../interfaces/_time_iunitoftime_.iunitoftime.md).[value](../interfaces/_time_iunitoftime_.iunitoftime.md#value)*

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

*Implementation of [IUnitOfTime](../interfaces/_time_iunitoftime_.iunitoftime.md)*

*Inherited from [SimpleDerivedUnit](_simplederivedunit_.simplederivedunit.md).[getConverters](_simplederivedunit_.simplederivedunit.md#getconverters)*

*Overrides [SimpleUnit](_simpleunit_.simpleunit.md).[getConverters](_simpleunit_.simpleunit.md#getconverters)*

*Defined in [SimpleDerivedUnit.ts:19](https://github.com/baspeeters/measurement-toolkit/blob/212ab3d/src/Units/SimpleDerivedUnit.ts#L19)*

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

*Implementation of [IUnitOfTime](../interfaces/_time_iunitoftime_.iunitoftime.md)*

*Inherited from [SimpleUnit](_simpleunit_.simpleunit.md).[toString](_simpleunit_.simpleunit.md#tostring)*

*Defined in [SimpleUnit.ts:71](https://github.com/baspeeters/measurement-toolkit/blob/212ab3d/src/Units/SimpleUnit.ts#L71)*

**Returns:** *string*
