[measurement-toolkit](../README.md) › ["Mass/SI/SiDerivedUnit"](../modules/_mass_si_siderivedunit_.md) › [SiDerivedUnit](_mass_si_siderivedunit_.siderivedunit.md)

# Class: SiDerivedUnit

## Hierarchy

  ↳ [SimpleDerivedUnit](_simplederivedunit_.simplederivedunit.md)

  ↳ **SiDerivedUnit**

  ↳ [Attogram](_mass_si_attogram_.attogram.md)

  ↳ [Centigram](_mass_si_centigram_.centigram.md)

  ↳ [Decagram](_mass_si_decagram_.decagram.md)

  ↳ [Decigram](_mass_si_decigram_.decigram.md)

  ↳ [Exagram](_mass_si_exagram_.exagram.md)

  ↳ [Femtogram](_mass_si_femtogram_.femtogram.md)

  ↳ [Gigagram](_mass_si_gigagram_.gigagram.md)

  ↳ [Gram](_mass_si_gram_.gram.md)

  ↳ [Hectogram](_mass_si_hectogram_.hectogram.md)

  ↳ [Megagram](_mass_si_megagram_.megagram.md)

  ↳ [Microgram](_mass_si_microgram_.microgram.md)

  ↳ [Milligram](_mass_si_milligram_.milligram.md)

  ↳ [Nanogram](_mass_si_nanogram_.nanogram.md)

  ↳ [Petagram](_mass_si_petagram_.petagram.md)

  ↳ [Picogram](_mass_si_picogram_.picogram.md)

  ↳ [Teragram](_mass_si_teragram_.teragram.md)

  ↳ [Yoctogram](_mass_si_yoctogram_.yoctogram.md)

  ↳ [Yottagram](_mass_si_yottagram_.yottagram.md)

  ↳ [Zeptogram](_mass_si_zeptogram_.zeptogram.md)

  ↳ [Zettagram](_mass_si_zettagram_.zettagram.md)

## Implements

* [IUnit](../interfaces/_iunit_.iunit.md)
* [ISimpleUnit](../interfaces/_isimpleunit_.isimpleunit.md)
* [ISimpleUnit](../interfaces/_isimpleunit_.isimpleunit.md)
* [IDerivedUnit](../interfaces/_iderivedunit_.iderivedunit.md)
* [IUnitOfMass](../interfaces/_mass_iunitofmass_.iunitofmass.md)

## Index

### Constructors

* [constructor](_mass_si_siderivedunit_.siderivedunit.md#constructor)

### Properties

* [baseUnit](_mass_si_siderivedunit_.siderivedunit.md#abstract-baseunit)
* [symbol](_mass_si_siderivedunit_.siderivedunit.md#abstract-symbol)
* [value](_mass_si_siderivedunit_.siderivedunit.md#value)

### Accessors

* [to](_mass_si_siderivedunit_.siderivedunit.md#to)

### Methods

* [add](_mass_si_siderivedunit_.siderivedunit.md#add)
* [divideBy](_mass_si_siderivedunit_.siderivedunit.md#divideby)
* [dividedBy](_mass_si_siderivedunit_.siderivedunit.md#dividedby)
* [getConverters](_mass_si_siderivedunit_.siderivedunit.md#getconverters)
* [multiply](_mass_si_siderivedunit_.siderivedunit.md#multiply)
* [percentageOf](_mass_si_siderivedunit_.siderivedunit.md#percentageof)
* [percentageOfThis](_mass_si_siderivedunit_.siderivedunit.md#percentageofthis)
* [subtract](_mass_si_siderivedunit_.siderivedunit.md#subtract)
* [toString](_mass_si_siderivedunit_.siderivedunit.md#tostring)

## Constructors

###  constructor

\+ **new SiDerivedUnit**(`value`: number): *[SiDerivedUnit](_mass_si_siderivedunit_.siderivedunit.md)*

*Inherited from [SimpleUnit](_simpleunit_.simpleunit.md).[constructor](_simpleunit_.simpleunit.md#constructor)*

*Defined in [SimpleUnit.ts:17](https://github.com/baspeeters/measurement-toolkit/blob/b5deaf3/src/Units/SimpleUnit.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *[SiDerivedUnit](_mass_si_siderivedunit_.siderivedunit.md)*

## Properties

### `Abstract` baseUnit

• **baseUnit**: *[SimpleBaseUnit](_simplebaseunit_.simplebaseunit.md)*

*Implementation of [IDerivedUnit](../interfaces/_iderivedunit_.iderivedunit.md).[baseUnit](../interfaces/_iderivedunit_.iderivedunit.md#baseunit)*

*Overrides [SimpleDerivedUnit](_simplederivedunit_.simplederivedunit.md).[baseUnit](_simplederivedunit_.simplederivedunit.md#abstract-baseunit)*

*Defined in [Mass/SI/SiDerivedUnit.ts:15](https://github.com/baspeeters/measurement-toolkit/blob/b5deaf3/src/Units/Mass/SI/SiDerivedUnit.ts#L15)*

___

### `Abstract` symbol

• **symbol**: *string*

*Implementation of [IUnitOfMass](../interfaces/_mass_iunitofmass_.iunitofmass.md).[symbol](../interfaces/_mass_iunitofmass_.iunitofmass.md#symbol)*

*Inherited from [SimpleUnit](_simpleunit_.simpleunit.md).[symbol](_simpleunit_.simpleunit.md#abstract-symbol)*

*Defined in [SimpleUnit.ts:13](https://github.com/baspeeters/measurement-toolkit/blob/b5deaf3/src/Units/SimpleUnit.ts#L13)*

___

###  value

• **value**: *number*

*Implementation of [IUnitOfMass](../interfaces/_mass_iunitofmass_.iunitofmass.md).[value](../interfaces/_mass_iunitofmass_.iunitofmass.md#value)*

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

*Implementation of [IUnitOfMass](../interfaces/_mass_iunitofmass_.iunitofmass.md)*

*Inherited from [SimpleDerivedUnit](_simplederivedunit_.simplederivedunit.md).[getConverters](_simplederivedunit_.simplederivedunit.md#getconverters)*

*Overrides [SimpleUnit](_simpleunit_.simpleunit.md).[getConverters](_simpleunit_.simpleunit.md#getconverters)*

*Defined in [SimpleDerivedUnit.ts:19](https://github.com/baspeeters/measurement-toolkit/blob/b5deaf3/src/Units/SimpleDerivedUnit.ts#L19)*

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

*Implementation of [IUnitOfMass](../interfaces/_mass_iunitofmass_.iunitofmass.md)*

*Inherited from [SimpleUnit](_simpleunit_.simpleunit.md).[toString](_simpleunit_.simpleunit.md#tostring)*

*Defined in [SimpleUnit.ts:71](https://github.com/baspeeters/measurement-toolkit/blob/b5deaf3/src/Units/SimpleUnit.ts#L71)*

**Returns:** *string*
