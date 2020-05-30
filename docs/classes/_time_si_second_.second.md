[measurement-toolkit](../README.md) › ["Time/SI/Second"](../modules/_time_si_second_.md) › [Second](_time_si_second_.second.md)

# Class: Second

## Hierarchy

  ↳ [SimpleBaseUnit](_simplebaseunit_.simplebaseunit.md)

  ↳ **Second**

## Implements

* [IUnit](../interfaces/_iunit_.iunit.md)
* [ISimpleUnit](../interfaces/_isimpleunit_.isimpleunit.md)
* [ISimpleUnit](../interfaces/_isimpleunit_.isimpleunit.md)
* [IBaseUnit](../interfaces/_ibaseunit_.ibaseunit.md)
* [IUnitOfTime](../interfaces/_time_iunitoftime_.iunitoftime.md)

## Index

### Constructors

* [constructor](_time_si_second_.second.md#constructor)

### Properties

* [symbol](_time_si_second_.second.md#symbol)
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
* [toString](_time_si_second_.second.md#tostring)

### Object literals

* [derivedUnits](_time_si_second_.second.md#derivedunits)

## Constructors

###  constructor

\+ **new Second**(`value`: number): *[Second](_time_si_second_.second.md)*

*Inherited from [SimpleUnit](_simpleunit_.simpleunit.md).[constructor](_simpleunit_.simpleunit.md#constructor)*

*Defined in [SimpleUnit.ts:17](https://github.com/baspeeters/measurement-toolkit/blob/b5deaf3/src/Units/SimpleUnit.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *[Second](_time_si_second_.second.md)*

## Properties

###  symbol

• **symbol**: *string* = "s"

*Implementation of [IUnitOfTime](../interfaces/_time_iunitoftime_.iunitoftime.md).[symbol](../interfaces/_time_iunitoftime_.iunitoftime.md#symbol)*

*Overrides [SimpleUnit](_simpleunit_.simpleunit.md).[symbol](_simpleunit_.simpleunit.md#abstract-symbol)*

*Defined in [Time/SI/Second.ts:36](https://github.com/baspeeters/measurement-toolkit/blob/b5deaf3/src/Units/Time/SI/Second.ts#L36)*

___

###  value

• **value**: *number*

*Implementation of [IUnitOfTime](../interfaces/_time_iunitoftime_.iunitoftime.md).[value](../interfaces/_time_iunitoftime_.iunitoftime.md#value)*

*Inherited from [SimpleUnit](_simpleunit_.simpleunit.md).[value](_simpleunit_.simpleunit.md#value)*

*Defined in [SimpleUnit.ts:15](https://github.com/baspeeters/measurement-toolkit/blob/b5deaf3/src/Units/SimpleUnit.ts#L15)*

## Accessors

###  to

• **get to**(): *any*

*Inherited from [Unit](_unit_.unit.md).[to](_unit_.unit.md#to)*

*Defined in [Unit.ts:14](https://github.com/baspeeters/measurement-toolkit/blob/b5deaf3/src/Units/Unit.ts#L14)*

**Returns:** *any*

## Methods

###  add

▸ **add**(`unit`: [SimpleUnit](_simpleunit_.simpleunit.md)): *this*

*Inherited from [SimpleUnit](_simpleunit_.simpleunit.md).[add](_simpleunit_.simpleunit.md#add)*

*Overrides [Unit](_unit_.unit.md).[add](_unit_.unit.md#abstract-add)*

*Defined in [SimpleUnit.ts:35](https://github.com/baspeeters/measurement-toolkit/blob/b5deaf3/src/Units/SimpleUnit.ts#L35)*

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

*Defined in [SimpleUnit.ts:41](https://github.com/baspeeters/measurement-toolkit/blob/b5deaf3/src/Units/SimpleUnit.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`unit` | [SimpleUnit](_simpleunit_.simpleunit.md) |

**Returns:** *this*

___

###  dividedBy

▸ **dividedBy**(`unit`: [SimpleUnit](_simpleunit_.simpleunit.md)): *this*

*Inherited from [SimpleUnit](_simpleunit_.simpleunit.md).[dividedBy](_simpleunit_.simpleunit.md#dividedby)*

*Defined in [SimpleUnit.ts:47](https://github.com/baspeeters/measurement-toolkit/blob/b5deaf3/src/Units/SimpleUnit.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`unit` | [SimpleUnit](_simpleunit_.simpleunit.md) |

**Returns:** *this*

___

###  getConverters

▸ **getConverters**(): *object*

*Implementation of [IUnitOfTime](../interfaces/_time_iunitoftime_.iunitoftime.md)*

*Inherited from [SimpleBaseUnit](_simplebaseunit_.simplebaseunit.md).[getConverters](_simplebaseunit_.simplebaseunit.md#getconverters)*

*Overrides [SimpleUnit](_simpleunit_.simpleunit.md).[getConverters](_simpleunit_.simpleunit.md#getconverters)*

*Defined in [SimpleBaseUnit.ts:16](https://github.com/baspeeters/measurement-toolkit/blob/b5deaf3/src/Units/SimpleBaseUnit.ts#L16)*

**Returns:** *object*

* \[ **key**: *string*\]: function

▸ (): *[ISimpleUnit](../interfaces/_isimpleunit_.isimpleunit.md)*

___

###  multiply

▸ **multiply**(`unit`: [SimpleUnit](_simpleunit_.simpleunit.md)): *this*

*Inherited from [SimpleUnit](_simpleunit_.simpleunit.md).[multiply](_simpleunit_.simpleunit.md#multiply)*

*Overrides [Unit](_unit_.unit.md).[multiply](_unit_.unit.md#abstract-multiply)*

*Defined in [SimpleUnit.ts:53](https://github.com/baspeeters/measurement-toolkit/blob/b5deaf3/src/Units/SimpleUnit.ts#L53)*

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

*Defined in [SimpleUnit.ts:59](https://github.com/baspeeters/measurement-toolkit/blob/b5deaf3/src/Units/SimpleUnit.ts#L59)*

**Parameters:**

Name | Type |
------ | ------ |
`unit` | [SimpleUnit](_simpleunit_.simpleunit.md) |

**Returns:** *this*

___

###  percentageOfThis

▸ **percentageOfThis**(`unit`: [SimpleUnit](_simpleunit_.simpleunit.md)): *this*

*Inherited from [SimpleUnit](_simpleunit_.simpleunit.md).[percentageOfThis](_simpleunit_.simpleunit.md#percentageofthis)*

*Defined in [SimpleUnit.ts:65](https://github.com/baspeeters/measurement-toolkit/blob/b5deaf3/src/Units/SimpleUnit.ts#L65)*

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

*Defined in [SimpleUnit.ts:29](https://github.com/baspeeters/measurement-toolkit/blob/b5deaf3/src/Units/SimpleUnit.ts#L29)*

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

*Defined in [SimpleUnit.ts:71](https://github.com/baspeeters/measurement-toolkit/blob/b5deaf3/src/Units/SimpleUnit.ts#L71)*

**Returns:** *string*

## Object literals

###  derivedUnits

### ▪ **derivedUnits**: *object*

*Implementation of [IBaseUnit](../interfaces/_ibaseunit_.ibaseunit.md).[derivedUnits](../interfaces/_ibaseunit_.ibaseunit.md#derivedunits)*

*Overrides [SimpleBaseUnit](_simplebaseunit_.simplebaseunit.md).[derivedUnits](_simplebaseunit_.simplebaseunit.md#derivedunits)*

*Defined in [Time/SI/Second.ts:38](https://github.com/baspeeters/measurement-toolkit/blob/b5deaf3/src/Units/Time/SI/Second.ts#L38)*

###  Attosecond

▸ **Attosecond**(): *[Attosecond](_time_si_attosecond_.attosecond.md)‹›*

*Defined in [Time/SI/Second.ts:42](https://github.com/baspeeters/measurement-toolkit/blob/b5deaf3/src/Units/Time/SI/Second.ts#L42)*

**Returns:** *[Attosecond](_time_si_attosecond_.attosecond.md)‹›*

###  Centisecond

▸ **Centisecond**(): *[Centisecond](_time_si_centisecond_.centisecond.md)‹›*

*Defined in [Time/SI/Second.ts:48](https://github.com/baspeeters/measurement-toolkit/blob/b5deaf3/src/Units/Time/SI/Second.ts#L48)*

**Returns:** *[Centisecond](_time_si_centisecond_.centisecond.md)‹›*

###  Day

▸ **Day**(): *[Day](_time_other_day_.day.md)‹›*

*Defined in [Time/SI/Second.ts:63](https://github.com/baspeeters/measurement-toolkit/blob/b5deaf3/src/Units/Time/SI/Second.ts#L63)*

**Returns:** *[Day](_time_other_day_.day.md)‹›*

###  Decasecond

▸ **Decasecond**(): *[Decasecond](_time_si_decasecond_.decasecond.md)‹›*

*Defined in [Time/SI/Second.ts:50](https://github.com/baspeeters/measurement-toolkit/blob/b5deaf3/src/Units/Time/SI/Second.ts#L50)*

**Returns:** *[Decasecond](_time_si_decasecond_.decasecond.md)‹›*

###  Decisecond

▸ **Decisecond**(): *[Decisecond](_time_si_decisecond_.decisecond.md)‹›*

*Defined in [Time/SI/Second.ts:49](https://github.com/baspeeters/measurement-toolkit/blob/b5deaf3/src/Units/Time/SI/Second.ts#L49)*

**Returns:** *[Decisecond](_time_si_decisecond_.decisecond.md)‹›*

###  Exasecond

▸ **Exasecond**(): *[Exasecond](_time_si_exasecond_.exasecond.md)‹›*

*Defined in [Time/SI/Second.ts:57](https://github.com/baspeeters/measurement-toolkit/blob/b5deaf3/src/Units/Time/SI/Second.ts#L57)*

**Returns:** *[Exasecond](_time_si_exasecond_.exasecond.md)‹›*

###  Femtosecond

▸ **Femtosecond**(): *[Femtosecond](_time_si_femtosecond_.femtosecond.md)‹›*

*Defined in [Time/SI/Second.ts:43](https://github.com/baspeeters/measurement-toolkit/blob/b5deaf3/src/Units/Time/SI/Second.ts#L43)*

**Returns:** *[Femtosecond](_time_si_femtosecond_.femtosecond.md)‹›*

###  Gigasecond

▸ **Gigasecond**(): *[Gigasecond](_time_si_gigasecond_.gigasecond.md)‹›*

*Defined in [Time/SI/Second.ts:54](https://github.com/baspeeters/measurement-toolkit/blob/b5deaf3/src/Units/Time/SI/Second.ts#L54)*

**Returns:** *[Gigasecond](_time_si_gigasecond_.gigasecond.md)‹›*

###  Hectosecond

▸ **Hectosecond**(): *[Hectosecond](_time_si_hectosecond_.hectosecond.md)‹›*

*Defined in [Time/SI/Second.ts:51](https://github.com/baspeeters/measurement-toolkit/blob/b5deaf3/src/Units/Time/SI/Second.ts#L51)*

**Returns:** *[Hectosecond](_time_si_hectosecond_.hectosecond.md)‹›*

###  Hour

▸ **Hour**(): *[Hour](_time_other_hour_.hour.md)‹›*

*Defined in [Time/SI/Second.ts:62](https://github.com/baspeeters/measurement-toolkit/blob/b5deaf3/src/Units/Time/SI/Second.ts#L62)*

**Returns:** *[Hour](_time_other_hour_.hour.md)‹›*

###  Kilosecond

▸ **Kilosecond**(): *[Kilosecond](_time_si_kilosecond_.kilosecond.md)‹›*

*Defined in [Time/SI/Second.ts:52](https://github.com/baspeeters/measurement-toolkit/blob/b5deaf3/src/Units/Time/SI/Second.ts#L52)*

**Returns:** *[Kilosecond](_time_si_kilosecond_.kilosecond.md)‹›*

###  Megasecond

▸ **Megasecond**(): *[Megasecond](_time_si_megasecond_.megasecond.md)‹›*

*Defined in [Time/SI/Second.ts:53](https://github.com/baspeeters/measurement-toolkit/blob/b5deaf3/src/Units/Time/SI/Second.ts#L53)*

**Returns:** *[Megasecond](_time_si_megasecond_.megasecond.md)‹›*

###  Microsecond

▸ **Microsecond**(): *[Microsecond](_time_si_microsecond_.microsecond.md)‹›*

*Defined in [Time/SI/Second.ts:46](https://github.com/baspeeters/measurement-toolkit/blob/b5deaf3/src/Units/Time/SI/Second.ts#L46)*

**Returns:** *[Microsecond](_time_si_microsecond_.microsecond.md)‹›*

###  Millisecond

▸ **Millisecond**(): *[Millisecond](_time_si_millisecond_.millisecond.md)‹›*

*Defined in [Time/SI/Second.ts:47](https://github.com/baspeeters/measurement-toolkit/blob/b5deaf3/src/Units/Time/SI/Second.ts#L47)*

**Returns:** *[Millisecond](_time_si_millisecond_.millisecond.md)‹›*

###  Minute

▸ **Minute**(): *[Minute](_time_other_minute_.minute.md)‹›*

*Defined in [Time/SI/Second.ts:61](https://github.com/baspeeters/measurement-toolkit/blob/b5deaf3/src/Units/Time/SI/Second.ts#L61)*

**Returns:** *[Minute](_time_other_minute_.minute.md)‹›*

###  Nanosecond

▸ **Nanosecond**(): *[Nanosecond](_time_si_nanosecond_.nanosecond.md)‹›*

*Defined in [Time/SI/Second.ts:45](https://github.com/baspeeters/measurement-toolkit/blob/b5deaf3/src/Units/Time/SI/Second.ts#L45)*

**Returns:** *[Nanosecond](_time_si_nanosecond_.nanosecond.md)‹›*

###  Petasecond

▸ **Petasecond**(): *[Petasecond](_time_si_petasecond_.petasecond.md)‹›*

*Defined in [Time/SI/Second.ts:56](https://github.com/baspeeters/measurement-toolkit/blob/b5deaf3/src/Units/Time/SI/Second.ts#L56)*

**Returns:** *[Petasecond](_time_si_petasecond_.petasecond.md)‹›*

###  Picosecond

▸ **Picosecond**(): *[Picosecond](_time_si_picosecond_.picosecond.md)‹›*

*Defined in [Time/SI/Second.ts:44](https://github.com/baspeeters/measurement-toolkit/blob/b5deaf3/src/Units/Time/SI/Second.ts#L44)*

**Returns:** *[Picosecond](_time_si_picosecond_.picosecond.md)‹›*

###  Terasecond

▸ **Terasecond**(): *[Terasecond](_time_si_terasecond_.terasecond.md)‹›*

*Defined in [Time/SI/Second.ts:55](https://github.com/baspeeters/measurement-toolkit/blob/b5deaf3/src/Units/Time/SI/Second.ts#L55)*

**Returns:** *[Terasecond](_time_si_terasecond_.terasecond.md)‹›*

###  Yoctosecond

▸ **Yoctosecond**(): *[Yoctosecond](_time_si_yoctosecond_.yoctosecond.md)‹›*

*Defined in [Time/SI/Second.ts:39](https://github.com/baspeeters/measurement-toolkit/blob/b5deaf3/src/Units/Time/SI/Second.ts#L39)*

**Returns:** *[Yoctosecond](_time_si_yoctosecond_.yoctosecond.md)‹›*

###  Yottasecond

▸ **Yottasecond**(): *[Yottasecond](_time_si_yottasecond_.yottasecond.md)‹›*

*Defined in [Time/SI/Second.ts:59](https://github.com/baspeeters/measurement-toolkit/blob/b5deaf3/src/Units/Time/SI/Second.ts#L59)*

**Returns:** *[Yottasecond](_time_si_yottasecond_.yottasecond.md)‹›*

###  Zeptosecond

▸ **Zeptosecond**(): *[Zeptosecond](_time_si_zeptosecond_.zeptosecond.md)‹›*

*Defined in [Time/SI/Second.ts:40](https://github.com/baspeeters/measurement-toolkit/blob/b5deaf3/src/Units/Time/SI/Second.ts#L40)*

**Returns:** *[Zeptosecond](_time_si_zeptosecond_.zeptosecond.md)‹›*

###  Zettasecond

▸ **Zettasecond**(): *[Zettasecond](_time_si_zettasecond_.zettasecond.md)‹›*

*Defined in [Time/SI/Second.ts:58](https://github.com/baspeeters/measurement-toolkit/blob/b5deaf3/src/Units/Time/SI/Second.ts#L58)*

**Returns:** *[Zettasecond](_time_si_zettasecond_.zettasecond.md)‹›*
