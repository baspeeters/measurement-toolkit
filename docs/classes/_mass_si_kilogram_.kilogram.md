[measurement-toolkit](../README.md) › ["Mass/SI/Kilogram"](../modules/_mass_si_kilogram_.md) › [Kilogram](_mass_si_kilogram_.kilogram.md)

# Class: Kilogram

## Hierarchy

  ↳ [BaseUnit](_baseunit_.baseunit.md)

  ↳ **Kilogram**

## Index

### Constructors

* [constructor](_mass_si_kilogram_.kilogram.md#constructor)

### Properties

* [value](_mass_si_kilogram_.kilogram.md#value)

### Accessors

* [to](_mass_si_kilogram_.kilogram.md#to)

### Methods

* [add](_mass_si_kilogram_.kilogram.md#add)
* [divideBy](_mass_si_kilogram_.kilogram.md#divideby)
* [dividedBy](_mass_si_kilogram_.kilogram.md#dividedby)
* [getConverters](_mass_si_kilogram_.kilogram.md#getconverters)
* [multiply](_mass_si_kilogram_.kilogram.md#multiply)
* [percentageOf](_mass_si_kilogram_.kilogram.md#percentageof)
* [percentageOfThis](_mass_si_kilogram_.kilogram.md#percentageofthis)
* [subtract](_mass_si_kilogram_.kilogram.md#subtract)

### Object literals

* [derivedUnits](_mass_si_kilogram_.kilogram.md#derivedunits)

## Constructors

###  constructor

\+ **new Kilogram**(`value`: number): *[Kilogram](_mass_si_kilogram_.kilogram.md)*

*Inherited from [DerivedUnit](_derivedunit_.derivedunit.md).[constructor](_derivedunit_.derivedunit.md#constructor)*

*Defined in [Unit.ts:14](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Unit.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *[Kilogram](_mass_si_kilogram_.kilogram.md)*

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

*Defined in [Mass/SI/Kilogram.ts:35](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Mass/SI/Kilogram.ts#L35)*

###  Attogram

▸ **Attogram**(): *[Attogram](_mass_si_attogram_.attogram.md)‹›*

*Defined in [Mass/SI/Kilogram.ts:39](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Mass/SI/Kilogram.ts#L39)*

**Returns:** *[Attogram](_mass_si_attogram_.attogram.md)‹›*

###  Centigram

▸ **Centigram**(): *[Centigram](_mass_si_centigram_.centigram.md)‹›*

*Defined in [Mass/SI/Kilogram.ts:45](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Mass/SI/Kilogram.ts#L45)*

**Returns:** *[Centigram](_mass_si_centigram_.centigram.md)‹›*

###  Decagram

▸ **Decagram**(): *[Decagram](_mass_si_decagram_.decagram.md)‹›*

*Defined in [Mass/SI/Kilogram.ts:48](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Mass/SI/Kilogram.ts#L48)*

**Returns:** *[Decagram](_mass_si_decagram_.decagram.md)‹›*

###  Decigram

▸ **Decigram**(): *[Decigram](_mass_si_decigram_.decigram.md)‹›*

*Defined in [Mass/SI/Kilogram.ts:46](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Mass/SI/Kilogram.ts#L46)*

**Returns:** *[Decigram](_mass_si_decigram_.decigram.md)‹›*

###  Exagram

▸ **Exagram**(): *[Exagram](_mass_si_exagram_.exagram.md)‹›*

*Defined in [Mass/SI/Kilogram.ts:54](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Mass/SI/Kilogram.ts#L54)*

**Returns:** *[Exagram](_mass_si_exagram_.exagram.md)‹›*

###  Femtogram

▸ **Femtogram**(): *[Femtogram](_mass_si_femtogram_.femtogram.md)‹›*

*Defined in [Mass/SI/Kilogram.ts:40](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Mass/SI/Kilogram.ts#L40)*

**Returns:** *[Femtogram](_mass_si_femtogram_.femtogram.md)‹›*

###  Gigagram

▸ **Gigagram**(): *[Gigagram](_mass_si_gigagram_.gigagram.md)‹›*

*Defined in [Mass/SI/Kilogram.ts:51](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Mass/SI/Kilogram.ts#L51)*

**Returns:** *[Gigagram](_mass_si_gigagram_.gigagram.md)‹›*

###  Gram

▸ **Gram**(): *[Gram](_mass_si_gram_.gram.md)‹›*

*Defined in [Mass/SI/Kilogram.ts:47](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Mass/SI/Kilogram.ts#L47)*

**Returns:** *[Gram](_mass_si_gram_.gram.md)‹›*

###  Hectogram

▸ **Hectogram**(): *[Hectogram](_mass_si_hectogram_.hectogram.md)‹›*

*Defined in [Mass/SI/Kilogram.ts:49](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Mass/SI/Kilogram.ts#L49)*

**Returns:** *[Hectogram](_mass_si_hectogram_.hectogram.md)‹›*

###  Megagram

▸ **Megagram**(): *[Megagram](_mass_si_megagram_.megagram.md)‹›*

*Defined in [Mass/SI/Kilogram.ts:50](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Mass/SI/Kilogram.ts#L50)*

**Returns:** *[Megagram](_mass_si_megagram_.megagram.md)‹›*

###  Microgram

▸ **Microgram**(): *[Microgram](_mass_si_microgram_.microgram.md)‹›*

*Defined in [Mass/SI/Kilogram.ts:43](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Mass/SI/Kilogram.ts#L43)*

**Returns:** *[Microgram](_mass_si_microgram_.microgram.md)‹›*

###  Milligram

▸ **Milligram**(): *[Milligram](_mass_si_milligram_.milligram.md)‹›*

*Defined in [Mass/SI/Kilogram.ts:44](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Mass/SI/Kilogram.ts#L44)*

**Returns:** *[Milligram](_mass_si_milligram_.milligram.md)‹›*

###  Nanogram

▸ **Nanogram**(): *[Nanogram](_mass_si_nanogram_.nanogram.md)‹›*

*Defined in [Mass/SI/Kilogram.ts:42](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Mass/SI/Kilogram.ts#L42)*

**Returns:** *[Nanogram](_mass_si_nanogram_.nanogram.md)‹›*

###  Petagram

▸ **Petagram**(): *[Petagram](_mass_si_petagram_.petagram.md)‹›*

*Defined in [Mass/SI/Kilogram.ts:53](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Mass/SI/Kilogram.ts#L53)*

**Returns:** *[Petagram](_mass_si_petagram_.petagram.md)‹›*

###  Picogram

▸ **Picogram**(): *[Picogram](_mass_si_picogram_.picogram.md)‹›*

*Defined in [Mass/SI/Kilogram.ts:41](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Mass/SI/Kilogram.ts#L41)*

**Returns:** *[Picogram](_mass_si_picogram_.picogram.md)‹›*

###  Teragram

▸ **Teragram**(): *[Teragram](_mass_si_teragram_.teragram.md)‹›*

*Defined in [Mass/SI/Kilogram.ts:52](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Mass/SI/Kilogram.ts#L52)*

**Returns:** *[Teragram](_mass_si_teragram_.teragram.md)‹›*

###  TroyOunce

▸ **TroyOunce**(): *[TroyOunce](_mass_us_troy_troyounce_.troyounce.md)*

*Defined in [Mass/SI/Kilogram.ts:57](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Mass/SI/Kilogram.ts#L57)*

**Returns:** *[TroyOunce](_mass_us_troy_troyounce_.troyounce.md)*

###  TroyPound

▸ **TroyPound**(): *[TroyPound](_mass_us_troy_troypound_.troypound.md)*

*Defined in [Mass/SI/Kilogram.ts:58](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Mass/SI/Kilogram.ts#L58)*

**Returns:** *[TroyPound](_mass_us_troy_troypound_.troypound.md)*

###  Yoctogram

▸ **Yoctogram**(): *[Yoctogram](_mass_si_yoctogram_.yoctogram.md)‹›*

*Defined in [Mass/SI/Kilogram.ts:36](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Mass/SI/Kilogram.ts#L36)*

**Returns:** *[Yoctogram](_mass_si_yoctogram_.yoctogram.md)‹›*

###  Yottagram

▸ **Yottagram**(): *[Yottagram](_mass_si_yottagram_.yottagram.md)‹›*

*Defined in [Mass/SI/Kilogram.ts:56](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Mass/SI/Kilogram.ts#L56)*

**Returns:** *[Yottagram](_mass_si_yottagram_.yottagram.md)‹›*

###  Zeptogram

▸ **Zeptogram**(): *[Zeptogram](_mass_si_zeptogram_.zeptogram.md)‹›*

*Defined in [Mass/SI/Kilogram.ts:37](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Mass/SI/Kilogram.ts#L37)*

**Returns:** *[Zeptogram](_mass_si_zeptogram_.zeptogram.md)‹›*

###  Zettagram

▸ **Zettagram**(): *[Zettagram](_mass_si_zettagram_.zettagram.md)‹›*

*Defined in [Mass/SI/Kilogram.ts:55](https://github.com/baspeeters/measurement-toolkit/blob/a0a75cb/src/Units/Mass/SI/Kilogram.ts#L55)*

**Returns:** *[Zettagram](_mass_si_zettagram_.zettagram.md)‹›*
