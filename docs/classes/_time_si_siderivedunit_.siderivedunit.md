[measurement-toolkit](../README.md) › ["Time/SI/SiDerivedUnit"](../modules/_time_si_siderivedunit_.md) › [SiDerivedUnit](_time_si_siderivedunit_.siderivedunit.md)

# Class: SiDerivedUnit

## Hierarchy

  ↳ [DerivedUnit](_derivedunit_.derivedunit.md)

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

## Index

### Constructors

* [constructor](_time_si_siderivedunit_.siderivedunit.md#constructor)

### Properties

* [baseUnit](_time_si_siderivedunit_.siderivedunit.md#abstract-baseunit)
* [derivedUnits](_time_si_siderivedunit_.siderivedunit.md#derivedunits)
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

## Constructors

###  constructor

\+ **new SiDerivedUnit**(`value`: number): *[SiDerivedUnit](_time_si_siderivedunit_.siderivedunit.md)*

*Inherited from [DerivedUnit](_derivedunit_.derivedunit.md).[constructor](_derivedunit_.derivedunit.md#constructor)*

*Defined in [Unit.ts:14](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Unit.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *[SiDerivedUnit](_time_si_siderivedunit_.siderivedunit.md)*

## Properties

### `Abstract` baseUnit

• **baseUnit**: *[BaseUnit](_baseunit_.baseunit.md)*

*Overrides [DerivedUnit](_derivedunit_.derivedunit.md).[baseUnit](_derivedunit_.derivedunit.md#abstract-baseunit)*

*Defined in [Time/SI/SiDerivedUnit.ts:14](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Time/SI/SiDerivedUnit.ts#L14)*

___

###  derivedUnits

• **derivedUnits**: *object*

*Inherited from [DerivedUnit](_derivedunit_.derivedunit.md).[derivedUnits](_derivedunit_.derivedunit.md#derivedunits)*

*Defined in [Unit.ts:13](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Unit.ts#L13)*

#### Type declaration:

* \[ **key**: *string*\]: function

▸ (): *[DerivedUnit](_derivedunit_.derivedunit.md)*

___

###  value

• **value**: *number*

*Inherited from [DerivedUnit](_derivedunit_.derivedunit.md).[value](_derivedunit_.derivedunit.md#value)*

*Defined in [Unit.ts:12](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Unit.ts#L12)*

## Accessors

###  to

• **get to**(): *any*

*Inherited from [DerivedUnit](_derivedunit_.derivedunit.md).[to](_derivedunit_.derivedunit.md#to)*

*Defined in [Unit.ts:20](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Unit.ts#L20)*

**Returns:** *any*

## Methods

###  add

▸ **add**(`unit`: [Unit](_unit_.unit.md)): *this*

*Inherited from [DerivedUnit](_derivedunit_.derivedunit.md).[add](_derivedunit_.derivedunit.md#add)*

*Defined in [Unit.ts:38](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Unit.ts#L38)*

**Parameters:**

Name | Type |
------ | ------ |
`unit` | [Unit](_unit_.unit.md) |

**Returns:** *this*

___

###  divideBy

▸ **divideBy**(`unit`: [Unit](_unit_.unit.md)): *this*

*Inherited from [DerivedUnit](_derivedunit_.derivedunit.md).[divideBy](_derivedunit_.derivedunit.md#divideby)*

*Defined in [Unit.ts:44](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Unit.ts#L44)*

**Parameters:**

Name | Type |
------ | ------ |
`unit` | [Unit](_unit_.unit.md) |

**Returns:** *this*

___

###  dividedBy

▸ **dividedBy**(`unit`: [Unit](_unit_.unit.md)): *this*

*Inherited from [DerivedUnit](_derivedunit_.derivedunit.md).[dividedBy](_derivedunit_.derivedunit.md#dividedby)*

*Defined in [Unit.ts:50](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Unit.ts#L50)*

**Parameters:**

Name | Type |
------ | ------ |
`unit` | [Unit](_unit_.unit.md) |

**Returns:** *this*

___

###  getConverters

▸ **getConverters**(): *object*

*Inherited from [DerivedUnit](_derivedunit_.derivedunit.md).[getConverters](_derivedunit_.derivedunit.md#getconverters)*

*Overrides [Unit](_unit_.unit.md).[getConverters](_unit_.unit.md#getconverters)*

*Defined in [DerivedUnit.ts:16](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/DerivedUnit.ts#L16)*

**Returns:** *object*

* \[ **key**: *string*\]: function

▸ (): *[Unit](_unit_.unit.md)*

___

###  multiply

▸ **multiply**(`unit`: [Unit](_unit_.unit.md)): *this*

*Inherited from [DerivedUnit](_derivedunit_.derivedunit.md).[multiply](_derivedunit_.derivedunit.md#multiply)*

*Defined in [Unit.ts:56](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Unit.ts#L56)*

**Parameters:**

Name | Type |
------ | ------ |
`unit` | [Unit](_unit_.unit.md) |

**Returns:** *this*

___

###  percentageOf

▸ **percentageOf**(`unit`: [Unit](_unit_.unit.md)): *this*

*Inherited from [DerivedUnit](_derivedunit_.derivedunit.md).[percentageOf](_derivedunit_.derivedunit.md#percentageof)*

*Defined in [Unit.ts:62](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Unit.ts#L62)*

**Parameters:**

Name | Type |
------ | ------ |
`unit` | [Unit](_unit_.unit.md) |

**Returns:** *this*

___

###  percentageOfThis

▸ **percentageOfThis**(`unit`: [Unit](_unit_.unit.md)): *this*

*Inherited from [DerivedUnit](_derivedunit_.derivedunit.md).[percentageOfThis](_derivedunit_.derivedunit.md#percentageofthis)*

*Defined in [Unit.ts:68](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Unit.ts#L68)*

**Parameters:**

Name | Type |
------ | ------ |
`unit` | [Unit](_unit_.unit.md) |

**Returns:** *this*

___

###  subtract

▸ **subtract**(`unit`: [Unit](_unit_.unit.md)): *this*

*Inherited from [DerivedUnit](_derivedunit_.derivedunit.md).[subtract](_derivedunit_.derivedunit.md#subtract)*

*Defined in [Unit.ts:32](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Unit.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`unit` | [Unit](_unit_.unit.md) |

**Returns:** *this*
