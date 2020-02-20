[measurement-toolkit](../README.md) › ["Mass/SI/Kilogram"](../modules/_mass_si_kilogram_.md) › [Kilogram](_mass_si_kilogram_.kilogram.md)

# Class: Kilogram

## Hierarchy

  ↳ [SimpleBaseUnit](_simplebaseunit_.simplebaseunit.md)

  ↳ **Kilogram**

## Implements

* [IUnit](../interfaces/_iunit_.iunit.md)
* [ISimpleUnit](../interfaces/_isimpleunit_.isimpleunit.md)
* [ISimpleUnit](../interfaces/_isimpleunit_.isimpleunit.md)
* [IBaseUnit](../interfaces/_ibaseunit_.ibaseunit.md)
* [IUnitOfMass](../interfaces/_mass_iunitofmass_.iunitofmass.md)

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

*Inherited from [SimpleUnit](_simpleunit_.simpleunit.md).[constructor](_simpleunit_.simpleunit.md#constructor)*

*Defined in [SimpleUnit.ts:15](https://github.com/baspeeters/measurement-toolkit/blob/094f000/src/Units/SimpleUnit.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *[Kilogram](_mass_si_kilogram_.kilogram.md)*

## Properties

###  value

• **value**: *number*

*Implementation of [IUnitOfMass](../interfaces/_mass_iunitofmass_.iunitofmass.md).[value](../interfaces/_mass_iunitofmass_.iunitofmass.md#value)*

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

*Implementation of [IUnitOfMass](../interfaces/_mass_iunitofmass_.iunitofmass.md)*

*Inherited from [SimpleBaseUnit](_simplebaseunit_.simplebaseunit.md).[getConverters](_simplebaseunit_.simplebaseunit.md#getconverters)*

*Overrides [SimpleUnit](_simpleunit_.simpleunit.md).[getConverters](_simpleunit_.simpleunit.md#getconverters)*

*Defined in [SimpleBaseUnit.ts:16](https://github.com/baspeeters/measurement-toolkit/blob/094f000/src/Units/SimpleBaseUnit.ts#L16)*

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

## Object literals

###  derivedUnits

### ▪ **derivedUnits**: *object*

*Implementation of [IBaseUnit](../interfaces/_ibaseunit_.ibaseunit.md).[derivedUnits](../interfaces/_ibaseunit_.ibaseunit.md#derivedunits)*

*Overrides [SimpleBaseUnit](_simplebaseunit_.simplebaseunit.md).[derivedUnits](_simplebaseunit_.simplebaseunit.md#derivedunits)*

*Defined in [Mass/SI/Kilogram.ts:36](https://github.com/baspeeters/measurement-toolkit/blob/094f000/src/Units/Mass/SI/Kilogram.ts#L36)*

###  Attogram

▸ **Attogram**(): *[Attogram](_mass_si_attogram_.attogram.md)‹›*

*Defined in [Mass/SI/Kilogram.ts:40](https://github.com/baspeeters/measurement-toolkit/blob/094f000/src/Units/Mass/SI/Kilogram.ts#L40)*

**Returns:** *[Attogram](_mass_si_attogram_.attogram.md)‹›*

###  Centigram

▸ **Centigram**(): *[Centigram](_mass_si_centigram_.centigram.md)‹›*

*Defined in [Mass/SI/Kilogram.ts:46](https://github.com/baspeeters/measurement-toolkit/blob/094f000/src/Units/Mass/SI/Kilogram.ts#L46)*

**Returns:** *[Centigram](_mass_si_centigram_.centigram.md)‹›*

###  Decagram

▸ **Decagram**(): *[Decagram](_mass_si_decagram_.decagram.md)‹›*

*Defined in [Mass/SI/Kilogram.ts:49](https://github.com/baspeeters/measurement-toolkit/blob/094f000/src/Units/Mass/SI/Kilogram.ts#L49)*

**Returns:** *[Decagram](_mass_si_decagram_.decagram.md)‹›*

###  Decigram

▸ **Decigram**(): *[Decigram](_mass_si_decigram_.decigram.md)‹›*

*Defined in [Mass/SI/Kilogram.ts:47](https://github.com/baspeeters/measurement-toolkit/blob/094f000/src/Units/Mass/SI/Kilogram.ts#L47)*

**Returns:** *[Decigram](_mass_si_decigram_.decigram.md)‹›*

###  Exagram

▸ **Exagram**(): *[Exagram](_mass_si_exagram_.exagram.md)‹›*

*Defined in [Mass/SI/Kilogram.ts:55](https://github.com/baspeeters/measurement-toolkit/blob/094f000/src/Units/Mass/SI/Kilogram.ts#L55)*

**Returns:** *[Exagram](_mass_si_exagram_.exagram.md)‹›*

###  Femtogram

▸ **Femtogram**(): *[Femtogram](_mass_si_femtogram_.femtogram.md)‹›*

*Defined in [Mass/SI/Kilogram.ts:41](https://github.com/baspeeters/measurement-toolkit/blob/094f000/src/Units/Mass/SI/Kilogram.ts#L41)*

**Returns:** *[Femtogram](_mass_si_femtogram_.femtogram.md)‹›*

###  Gigagram

▸ **Gigagram**(): *[Gigagram](_mass_si_gigagram_.gigagram.md)‹›*

*Defined in [Mass/SI/Kilogram.ts:52](https://github.com/baspeeters/measurement-toolkit/blob/094f000/src/Units/Mass/SI/Kilogram.ts#L52)*

**Returns:** *[Gigagram](_mass_si_gigagram_.gigagram.md)‹›*

###  Gram

▸ **Gram**(): *[Gram](_mass_si_gram_.gram.md)‹›*

*Defined in [Mass/SI/Kilogram.ts:48](https://github.com/baspeeters/measurement-toolkit/blob/094f000/src/Units/Mass/SI/Kilogram.ts#L48)*

**Returns:** *[Gram](_mass_si_gram_.gram.md)‹›*

###  Hectogram

▸ **Hectogram**(): *[Hectogram](_mass_si_hectogram_.hectogram.md)‹›*

*Defined in [Mass/SI/Kilogram.ts:50](https://github.com/baspeeters/measurement-toolkit/blob/094f000/src/Units/Mass/SI/Kilogram.ts#L50)*

**Returns:** *[Hectogram](_mass_si_hectogram_.hectogram.md)‹›*

###  Megagram

▸ **Megagram**(): *[Megagram](_mass_si_megagram_.megagram.md)‹›*

*Defined in [Mass/SI/Kilogram.ts:51](https://github.com/baspeeters/measurement-toolkit/blob/094f000/src/Units/Mass/SI/Kilogram.ts#L51)*

**Returns:** *[Megagram](_mass_si_megagram_.megagram.md)‹›*

###  Microgram

▸ **Microgram**(): *[Microgram](_mass_si_microgram_.microgram.md)‹›*

*Defined in [Mass/SI/Kilogram.ts:44](https://github.com/baspeeters/measurement-toolkit/blob/094f000/src/Units/Mass/SI/Kilogram.ts#L44)*

**Returns:** *[Microgram](_mass_si_microgram_.microgram.md)‹›*

###  Milligram

▸ **Milligram**(): *[Milligram](_mass_si_milligram_.milligram.md)‹›*

*Defined in [Mass/SI/Kilogram.ts:45](https://github.com/baspeeters/measurement-toolkit/blob/094f000/src/Units/Mass/SI/Kilogram.ts#L45)*

**Returns:** *[Milligram](_mass_si_milligram_.milligram.md)‹›*

###  Nanogram

▸ **Nanogram**(): *[Nanogram](_mass_si_nanogram_.nanogram.md)‹›*

*Defined in [Mass/SI/Kilogram.ts:43](https://github.com/baspeeters/measurement-toolkit/blob/094f000/src/Units/Mass/SI/Kilogram.ts#L43)*

**Returns:** *[Nanogram](_mass_si_nanogram_.nanogram.md)‹›*

###  Petagram

▸ **Petagram**(): *[Petagram](_mass_si_petagram_.petagram.md)‹›*

*Defined in [Mass/SI/Kilogram.ts:54](https://github.com/baspeeters/measurement-toolkit/blob/094f000/src/Units/Mass/SI/Kilogram.ts#L54)*

**Returns:** *[Petagram](_mass_si_petagram_.petagram.md)‹›*

###  Picogram

▸ **Picogram**(): *[Picogram](_mass_si_picogram_.picogram.md)‹›*

*Defined in [Mass/SI/Kilogram.ts:42](https://github.com/baspeeters/measurement-toolkit/blob/094f000/src/Units/Mass/SI/Kilogram.ts#L42)*

**Returns:** *[Picogram](_mass_si_picogram_.picogram.md)‹›*

###  Teragram

▸ **Teragram**(): *[Teragram](_mass_si_teragram_.teragram.md)‹›*

*Defined in [Mass/SI/Kilogram.ts:53](https://github.com/baspeeters/measurement-toolkit/blob/094f000/src/Units/Mass/SI/Kilogram.ts#L53)*

**Returns:** *[Teragram](_mass_si_teragram_.teragram.md)‹›*

###  TroyOunce

▸ **TroyOunce**(): *[TroyOunce](_mass_us_troy_troyounce_.troyounce.md)*

*Defined in [Mass/SI/Kilogram.ts:58](https://github.com/baspeeters/measurement-toolkit/blob/094f000/src/Units/Mass/SI/Kilogram.ts#L58)*

**Returns:** *[TroyOunce](_mass_us_troy_troyounce_.troyounce.md)*

###  TroyPound

▸ **TroyPound**(): *[TroyPound](_mass_us_troy_troypound_.troypound.md)*

*Defined in [Mass/SI/Kilogram.ts:59](https://github.com/baspeeters/measurement-toolkit/blob/094f000/src/Units/Mass/SI/Kilogram.ts#L59)*

**Returns:** *[TroyPound](_mass_us_troy_troypound_.troypound.md)*

###  Yoctogram

▸ **Yoctogram**(): *[Yoctogram](_mass_si_yoctogram_.yoctogram.md)‹›*

*Defined in [Mass/SI/Kilogram.ts:37](https://github.com/baspeeters/measurement-toolkit/blob/094f000/src/Units/Mass/SI/Kilogram.ts#L37)*

**Returns:** *[Yoctogram](_mass_si_yoctogram_.yoctogram.md)‹›*

###  Yottagram

▸ **Yottagram**(): *[Yottagram](_mass_si_yottagram_.yottagram.md)‹›*

*Defined in [Mass/SI/Kilogram.ts:57](https://github.com/baspeeters/measurement-toolkit/blob/094f000/src/Units/Mass/SI/Kilogram.ts#L57)*

**Returns:** *[Yottagram](_mass_si_yottagram_.yottagram.md)‹›*

###  Zeptogram

▸ **Zeptogram**(): *[Zeptogram](_mass_si_zeptogram_.zeptogram.md)‹›*

*Defined in [Mass/SI/Kilogram.ts:38](https://github.com/baspeeters/measurement-toolkit/blob/094f000/src/Units/Mass/SI/Kilogram.ts#L38)*

**Returns:** *[Zeptogram](_mass_si_zeptogram_.zeptogram.md)‹›*

###  Zettagram

▸ **Zettagram**(): *[Zettagram](_mass_si_zettagram_.zettagram.md)‹›*

*Defined in [Mass/SI/Kilogram.ts:56](https://github.com/baspeeters/measurement-toolkit/blob/094f000/src/Units/Mass/SI/Kilogram.ts#L56)*

**Returns:** *[Zettagram](_mass_si_zettagram_.zettagram.md)‹›*
