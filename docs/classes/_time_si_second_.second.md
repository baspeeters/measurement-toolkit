[measurement-toolkit](../README.md) › ["Time/SI/Second"](../modules/_time_si_second_.md) › [Second](_time_si_second_.second.md)

# Class: Second

## Hierarchy

  ↳ [BaseUnit](_baseunit_.baseunit.md)

  ↳ **Second**

## Index

### Constructors

* [constructor](_time_si_second_.second.md#constructor)

### Properties

* [value](_time_si_second_.second.md#value)

### Accessors

* [to](_time_si_second_.second.md#to)

### Methods

* [add](_time_si_second_.second.md#add)
* [divideBy](_time_si_second_.second.md#divideby)
* [dividedBy](_time_si_second_.second.md#dividedby)
* [getConverters](_time_si_second_.second.md#getconverters)
* [multiply](_time_si_second_.second.md#multiply)
* [percentageOf](_time_si_second_.second.md#percentageof)
* [percentageOfThis](_time_si_second_.second.md#percentageofthis)
* [subtract](_time_si_second_.second.md#subtract)

### Object literals

* [derivedUnits](_time_si_second_.second.md#derivedunits)

## Constructors

###  constructor

\+ **new Second**(`value`: number): *[Second](_time_si_second_.second.md)*

*Inherited from [DerivedUnit](_derivedunit_.derivedunit.md).[constructor](_derivedunit_.derivedunit.md#constructor)*

*Defined in [Unit.ts:14](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Unit.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *[Second](_time_si_second_.second.md)*

## Properties

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

*Inherited from [BaseUnit](_baseunit_.baseunit.md).[getConverters](_baseunit_.baseunit.md#getconverters)*

*Overrides [Unit](_unit_.unit.md).[getConverters](_unit_.unit.md#getconverters)*

*Defined in [BaseUnit.ts:14](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/BaseUnit.ts#L14)*

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

## Object literals

###  derivedUnits

### ▪ **derivedUnits**: *object*

*Overrides [BaseUnit](_baseunit_.baseunit.md).[derivedUnits](_baseunit_.baseunit.md#derivedunits)*

*Defined in [Time/SI/Second.ts:35](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Time/SI/Second.ts#L35)*

###  Attosecond

▸ **Attosecond**(): *[Attosecond](_time_si_attosecond_.attosecond.md)‹›*

*Defined in [Time/SI/Second.ts:39](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Time/SI/Second.ts#L39)*

**Returns:** *[Attosecond](_time_si_attosecond_.attosecond.md)‹›*

###  Centisecond

▸ **Centisecond**(): *[Centisecond](_time_si_centisecond_.centisecond.md)‹›*

*Defined in [Time/SI/Second.ts:45](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Time/SI/Second.ts#L45)*

**Returns:** *[Centisecond](_time_si_centisecond_.centisecond.md)‹›*

###  Day

▸ **Day**(): *[Day](_time_other_day_.day.md)‹›*

*Defined in [Time/SI/Second.ts:60](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Time/SI/Second.ts#L60)*

**Returns:** *[Day](_time_other_day_.day.md)‹›*

###  Decasecond

▸ **Decasecond**(): *[Decasecond](_time_si_decasecond_.decasecond.md)‹›*

*Defined in [Time/SI/Second.ts:47](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Time/SI/Second.ts#L47)*

**Returns:** *[Decasecond](_time_si_decasecond_.decasecond.md)‹›*

###  Decisecond

▸ **Decisecond**(): *[Decisecond](_time_si_decisecond_.decisecond.md)‹›*

*Defined in [Time/SI/Second.ts:46](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Time/SI/Second.ts#L46)*

**Returns:** *[Decisecond](_time_si_decisecond_.decisecond.md)‹›*

###  Exasecond

▸ **Exasecond**(): *[Exasecond](_time_si_exasecond_.exasecond.md)‹›*

*Defined in [Time/SI/Second.ts:54](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Time/SI/Second.ts#L54)*

**Returns:** *[Exasecond](_time_si_exasecond_.exasecond.md)‹›*

###  Femtosecond

▸ **Femtosecond**(): *[Femtosecond](_time_si_femtosecond_.femtosecond.md)‹›*

*Defined in [Time/SI/Second.ts:40](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Time/SI/Second.ts#L40)*

**Returns:** *[Femtosecond](_time_si_femtosecond_.femtosecond.md)‹›*

###  Gigasecond

▸ **Gigasecond**(): *[Gigasecond](_time_si_gigasecond_.gigasecond.md)‹›*

*Defined in [Time/SI/Second.ts:51](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Time/SI/Second.ts#L51)*

**Returns:** *[Gigasecond](_time_si_gigasecond_.gigasecond.md)‹›*

###  Hectosecond

▸ **Hectosecond**(): *[Hectosecond](_time_si_hectosecond_.hectosecond.md)‹›*

*Defined in [Time/SI/Second.ts:48](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Time/SI/Second.ts#L48)*

**Returns:** *[Hectosecond](_time_si_hectosecond_.hectosecond.md)‹›*

###  Hour

▸ **Hour**(): *[Hour](_time_other_hour_.hour.md)‹›*

*Defined in [Time/SI/Second.ts:59](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Time/SI/Second.ts#L59)*

**Returns:** *[Hour](_time_other_hour_.hour.md)‹›*

###  Kilosecond

▸ **Kilosecond**(): *[Kilosecond](_time_si_kilosecond_.kilosecond.md)‹›*

*Defined in [Time/SI/Second.ts:49](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Time/SI/Second.ts#L49)*

**Returns:** *[Kilosecond](_time_si_kilosecond_.kilosecond.md)‹›*

###  Megasecond

▸ **Megasecond**(): *[Megasecond](_time_si_megasecond_.megasecond.md)‹›*

*Defined in [Time/SI/Second.ts:50](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Time/SI/Second.ts#L50)*

**Returns:** *[Megasecond](_time_si_megasecond_.megasecond.md)‹›*

###  Microsecond

▸ **Microsecond**(): *[Microsecond](_time_si_microsecond_.microsecond.md)‹›*

*Defined in [Time/SI/Second.ts:43](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Time/SI/Second.ts#L43)*

**Returns:** *[Microsecond](_time_si_microsecond_.microsecond.md)‹›*

###  Millisecond

▸ **Millisecond**(): *[Millisecond](_time_si_millisecond_.millisecond.md)‹›*

*Defined in [Time/SI/Second.ts:44](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Time/SI/Second.ts#L44)*

**Returns:** *[Millisecond](_time_si_millisecond_.millisecond.md)‹›*

###  Minute

▸ **Minute**(): *[Minute](_time_other_minute_.minute.md)‹›*

*Defined in [Time/SI/Second.ts:58](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Time/SI/Second.ts#L58)*

**Returns:** *[Minute](_time_other_minute_.minute.md)‹›*

###  Nanosecond

▸ **Nanosecond**(): *[Nanosecond](_time_si_nanosecond_.nanosecond.md)‹›*

*Defined in [Time/SI/Second.ts:42](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Time/SI/Second.ts#L42)*

**Returns:** *[Nanosecond](_time_si_nanosecond_.nanosecond.md)‹›*

###  Petasecond

▸ **Petasecond**(): *[Petasecond](_time_si_petasecond_.petasecond.md)‹›*

*Defined in [Time/SI/Second.ts:53](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Time/SI/Second.ts#L53)*

**Returns:** *[Petasecond](_time_si_petasecond_.petasecond.md)‹›*

###  Picosecond

▸ **Picosecond**(): *[Picosecond](_time_si_picosecond_.picosecond.md)‹›*

*Defined in [Time/SI/Second.ts:41](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Time/SI/Second.ts#L41)*

**Returns:** *[Picosecond](_time_si_picosecond_.picosecond.md)‹›*

###  Terasecond

▸ **Terasecond**(): *[Terasecond](_time_si_terasecond_.terasecond.md)‹›*

*Defined in [Time/SI/Second.ts:52](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Time/SI/Second.ts#L52)*

**Returns:** *[Terasecond](_time_si_terasecond_.terasecond.md)‹›*

###  Yoctosecond

▸ **Yoctosecond**(): *[Yoctosecond](_time_si_yoctosecond_.yoctosecond.md)‹›*

*Defined in [Time/SI/Second.ts:36](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Time/SI/Second.ts#L36)*

**Returns:** *[Yoctosecond](_time_si_yoctosecond_.yoctosecond.md)‹›*

###  Yottasecond

▸ **Yottasecond**(): *[Yottasecond](_time_si_yottasecond_.yottasecond.md)‹›*

*Defined in [Time/SI/Second.ts:56](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Time/SI/Second.ts#L56)*

**Returns:** *[Yottasecond](_time_si_yottasecond_.yottasecond.md)‹›*

###  Zeptosecond

▸ **Zeptosecond**(): *[Zeptosecond](_time_si_zeptosecond_.zeptosecond.md)‹›*

*Defined in [Time/SI/Second.ts:37](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Time/SI/Second.ts#L37)*

**Returns:** *[Zeptosecond](_time_si_zeptosecond_.zeptosecond.md)‹›*

###  Zettasecond

▸ **Zettasecond**(): *[Zettasecond](_time_si_zettasecond_.zettasecond.md)‹›*

*Defined in [Time/SI/Second.ts:55](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Time/SI/Second.ts#L55)*

**Returns:** *[Zettasecond](_time_si_zettasecond_.zettasecond.md)‹›*
