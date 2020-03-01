[measurement-toolkit](../README.md) › ["Time/SI/SiDerivedUnit"](../modules/_time_si_siderivedunit_.md) › [SiDerivedUnit](_time_si_siderivedunit_.siderivedunit.md)

# Class: SiDerivedUnit

## Hierarchy

  ↳ [SimpleDerivedUnit](_simplederivedunit_.simplederivedunit.md)

  ↳ **SiDerivedUnit**

  ↳ [Day](_time_other_day_.day.md)

  ↳ [Hour](_time_other_hour_.hour.md)

  ↳ [Minute](_time_other_minute_.minute.md)

  ↳ [Attosecond](_time_si_attosecond_.attosecond.md)

  ↳ [Centisecond](_time_si_centisecond_.centisecond.md)

  ↳ [Decasecond](_time_si_decasecond_.decasecond.md)

  ↳ [Decisecond](_time_si_decisecond_.decisecond.md)

  ↳ [Exasecond](_time_si_exasecond_.exasecond.md)

  ↳ [Femtosecond](_time_si_femtosecond_.femtosecond.md)

  ↳ [Gigasecond](_time_si_gigasecond_.gigasecond.md)

  ↳ [Hectosecond](_time_si_hectosecond_.hectosecond.md)

  ↳ [Megasecond](_time_si_megasecond_.megasecond.md)

  ↳ [Microsecond](_time_si_microsecond_.microsecond.md)

  ↳ [Millisecond](_time_si_millisecond_.millisecond.md)

  ↳ [Nanosecond](_time_si_nanosecond_.nanosecond.md)

  ↳ [Petasecond](_time_si_petasecond_.petasecond.md)

  ↳ [Picosecond](_time_si_picosecond_.picosecond.md)

  ↳ [Terasecond](_time_si_terasecond_.terasecond.md)

  ↳ [Yoctosecond](_time_si_yoctosecond_.yoctosecond.md)

  ↳ [Yottasecond](_time_si_yottasecond_.yottasecond.md)

  ↳ [Zeptosecond](_time_si_zeptosecond_.zeptosecond.md)

  ↳ [Zettasecond](_time_si_zettasecond_.zettasecond.md)

  ↳ [Kilosecond](_time_si_kilosecond_.kilosecond.md)

## Implements

* [IUnit](../interfaces/_iunit_.iunit.md)
* [ISimpleUnit](../interfaces/_isimpleunit_.isimpleunit.md)
* [ISimpleUnit](../interfaces/_isimpleunit_.isimpleunit.md)
* [IDerivedUnit](../interfaces/_iderivedunit_.iderivedunit.md)
* [IUnitOfTime](../interfaces/_time_iunitoftime_.iunitoftime.md)

## Index

### Constructors

* [constructor](_time_si_siderivedunit_.siderivedunit.md#constructor)

### Properties

* [baseUnit](_time_si_siderivedunit_.siderivedunit.md#abstract-baseunit)
* [symbol](_time_si_siderivedunit_.siderivedunit.md#abstract-symbol)
* [value](_time_si_siderivedunit_.siderivedunit.md#value)

### Accessors

* [to](_time_si_siderivedunit_.siderivedunit.md#to)

### Methods

* [add](_time_si_siderivedunit_.siderivedunit.md#add)
* [divideBy](_time_si_siderivedunit_.siderivedunit.md#divideby)
* [dividedBy](_time_si_siderivedunit_.siderivedunit.md#dividedby)
* [getConverters](_time_si_siderivedunit_.siderivedunit.md#getconverters)
* [multiply](_time_si_siderivedunit_.siderivedunit.md#multiply)
* [percentageOf](_time_si_siderivedunit_.siderivedunit.md#percentageof)
* [percentageOfThis](_time_si_siderivedunit_.siderivedunit.md#percentageofthis)
* [subtract](_time_si_siderivedunit_.siderivedunit.md#subtract)
* [toString](_time_si_siderivedunit_.siderivedunit.md#tostring)

## Constructors

###  constructor

\+ **new SiDerivedUnit**(`value`: number): *[SiDerivedUnit](_time_si_siderivedunit_.siderivedunit.md)*

*Inherited from [SimpleUnit](_simpleunit_.simpleunit.md).[constructor](_simpleunit_.simpleunit.md#constructor)*

*Defined in [SimpleUnit.ts:17](https://github.com/baspeeters/measurement-toolkit/blob/212ab3d/src/Units/SimpleUnit.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *[SiDerivedUnit](_time_si_siderivedunit_.siderivedunit.md)*

## Properties

### `Abstract` baseUnit

• **baseUnit**: *[SimpleBaseUnit](_simplebaseunit_.simplebaseunit.md)*

*Implementation of [IDerivedUnit](../interfaces/_iderivedunit_.iderivedunit.md).[baseUnit](../interfaces/_iderivedunit_.iderivedunit.md#baseunit)*

*Overrides [SimpleDerivedUnit](_simplederivedunit_.simplederivedunit.md).[baseUnit](_simplederivedunit_.simplederivedunit.md#abstract-baseunit)*

*Defined in [Time/SI/SiDerivedUnit.ts:15](https://github.com/baspeeters/measurement-toolkit/blob/212ab3d/src/Units/Time/SI/SiDerivedUnit.ts#L15)*

___

### `Abstract` symbol

• **symbol**: *string*

*Implementation of [IUnitOfTime](../interfaces/_time_iunitoftime_.iunitoftime.md).[symbol](../interfaces/_time_iunitoftime_.iunitoftime.md#symbol)*

*Inherited from [SimpleUnit](_simpleunit_.simpleunit.md).[symbol](_simpleunit_.simpleunit.md#abstract-symbol)*

*Defined in [SimpleUnit.ts:13](https://github.com/baspeeters/measurement-toolkit/blob/212ab3d/src/Units/SimpleUnit.ts#L13)*

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
