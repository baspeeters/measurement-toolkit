[measurement-toolkit](../README.md) › ["Time/IUnitOfTime"](../modules/_time_iunitoftime_.md) › [IUnitOfTime](_time_iunitoftime_.iunitoftime.md)

# Interface: IUnitOfTime

## Hierarchy

  ↳ [ISimpleUnit](_isimpleunit_.isimpleunit.md)

  ↳ **IUnitOfTime**

## Implemented by

* [Attosecond](../classes/_time_si_attosecond_.attosecond.md)
* [Centisecond](../classes/_time_si_centisecond_.centisecond.md)
* [Day](../classes/_time_other_day_.day.md)
* [Decasecond](../classes/_time_si_decasecond_.decasecond.md)
* [Decisecond](../classes/_time_si_decisecond_.decisecond.md)
* [Exasecond](../classes/_time_si_exasecond_.exasecond.md)
* [Femtosecond](../classes/_time_si_femtosecond_.femtosecond.md)
* [Gigasecond](../classes/_time_si_gigasecond_.gigasecond.md)
* [Hectosecond](../classes/_time_si_hectosecond_.hectosecond.md)
* [Hour](../classes/_time_other_hour_.hour.md)
* [Hour](../classes/_time_other_hour_.hour.md)
* [Kilosecond](../classes/_time_si_kilosecond_.kilosecond.md)
* [Megasecond](../classes/_time_si_megasecond_.megasecond.md)
* [Microsecond](../classes/_time_si_microsecond_.microsecond.md)
* [Millisecond](../classes/_time_si_millisecond_.millisecond.md)
* [Minute](../classes/_time_other_minute_.minute.md)
* [Nanosecond](../classes/_time_si_nanosecond_.nanosecond.md)
* [Petasecond](../classes/_time_si_petasecond_.petasecond.md)
* [Picosecond](../classes/_time_si_picosecond_.picosecond.md)
* [Second](../classes/_time_si_second_.second.md)
* [SiDerivedUnit](../classes/_time_si_siderivedunit_.siderivedunit.md)
* [Terasecond](../classes/_time_si_terasecond_.terasecond.md)
* [Yoctosecond](../classes/_time_si_yoctosecond_.yoctosecond.md)
* [Yottasecond](../classes/_time_si_yottasecond_.yottasecond.md)
* [Zeptosecond](../classes/_time_si_zeptosecond_.zeptosecond.md)
* [Zettasecond](../classes/_time_si_zettasecond_.zettasecond.md)

## Index

### Properties

* [to](_time_iunitoftime_.iunitoftime.md#to)
* [value](_time_iunitoftime_.iunitoftime.md#value)

### Methods

* [add](_time_iunitoftime_.iunitoftime.md#add)
* [divideBy](_time_iunitoftime_.iunitoftime.md#divideby)
* [getConverters](_time_iunitoftime_.iunitoftime.md#getconverters)
* [multiply](_time_iunitoftime_.iunitoftime.md#multiply)
* [percentageOf](_time_iunitoftime_.iunitoftime.md#percentageof)
* [subtract](_time_iunitoftime_.iunitoftime.md#subtract)

## Properties

###  to

• **to**: *object*

*Overrides [ISimpleUnit](_isimpleunit_.isimpleunit.md).[to](_isimpleunit_.isimpleunit.md#to)*

*Defined in [Time/IUnitOfTime.ts:12](https://github.com/baspeeters/measurement-toolkit/blob/094f000/src/Units/Time/IUnitOfTime.ts#L12)*

#### Type declaration:

* \[ **key**: *string*\]: function

▸ (): *[IUnitOfTime](_time_iunitoftime_.iunitoftime.md)*

___

###  value

• **value**: *number*

*Inherited from [ISimpleUnit](_isimpleunit_.isimpleunit.md).[value](_isimpleunit_.isimpleunit.md#value)*

*Defined in [ISimpleUnit.ts:12](https://github.com/baspeeters/measurement-toolkit/blob/094f000/src/Units/ISimpleUnit.ts#L12)*

## Methods

###  add

▸ **add**(`unit`: [IUnit](_iunit_.iunit.md)): *this*

*Inherited from [IUnit](_iunit_.iunit.md).[add](_iunit_.iunit.md#add)*

*Defined in [IUnit.ts:12](https://github.com/baspeeters/measurement-toolkit/blob/094f000/src/Units/IUnit.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`unit` | [IUnit](_iunit_.iunit.md) |

**Returns:** *this*

___

###  divideBy

▸ **divideBy**(`unit`: [IUnit](_iunit_.iunit.md)): *this*

*Inherited from [IUnit](_iunit_.iunit.md).[divideBy](_iunit_.iunit.md#divideby)*

*Defined in [IUnit.ts:14](https://github.com/baspeeters/measurement-toolkit/blob/094f000/src/Units/IUnit.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`unit` | [IUnit](_iunit_.iunit.md) |

**Returns:** *this*

___

###  getConverters

▸ **getConverters**(): *object*

*Overrides [ISimpleUnit](_isimpleunit_.isimpleunit.md).[getConverters](_isimpleunit_.isimpleunit.md#getconverters)*

*Defined in [Time/IUnitOfTime.ts:13](https://github.com/baspeeters/measurement-toolkit/blob/094f000/src/Units/Time/IUnitOfTime.ts#L13)*

**Returns:** *object*

* \[ **key**: *string*\]: function

▸ (): *[IUnitOfTime](_time_iunitoftime_.iunitoftime.md)*

___

###  multiply

▸ **multiply**(`unit`: [IUnit](_iunit_.iunit.md)): *this*

*Inherited from [IUnit](_iunit_.iunit.md).[multiply](_iunit_.iunit.md#multiply)*

*Defined in [IUnit.ts:16](https://github.com/baspeeters/measurement-toolkit/blob/094f000/src/Units/IUnit.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`unit` | [IUnit](_iunit_.iunit.md) |

**Returns:** *this*

___

###  percentageOf

▸ **percentageOf**(`unit`: [IUnit](_iunit_.iunit.md)): *this*

*Inherited from [IUnit](_iunit_.iunit.md).[percentageOf](_iunit_.iunit.md#percentageof)*

*Defined in [IUnit.ts:18](https://github.com/baspeeters/measurement-toolkit/blob/094f000/src/Units/IUnit.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`unit` | [IUnit](_iunit_.iunit.md) |

**Returns:** *this*

___

###  subtract

▸ **subtract**(`unit`: [IUnit](_iunit_.iunit.md)): *this*

*Inherited from [IUnit](_iunit_.iunit.md).[subtract](_iunit_.iunit.md#subtract)*

*Defined in [IUnit.ts:20](https://github.com/baspeeters/measurement-toolkit/blob/094f000/src/Units/IUnit.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`unit` | [IUnit](_iunit_.iunit.md) |

**Returns:** *this*
