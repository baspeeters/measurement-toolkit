[measurement-toolkit](../README.md) › ["Mass/IUnitOfMass"](../modules/_mass_iunitofmass_.md) › [IUnitOfMass](_mass_iunitofmass_.iunitofmass.md)

# Interface: IUnitOfMass

## Hierarchy

  ↳ [ISimpleUnit](_isimpleunit_.isimpleunit.md)

  ↳ **IUnitOfMass**

## Implemented by

* [Attogram](../classes/_mass_si_attogram_.attogram.md)
* [AvoirdupoisTon](../classes/_mass_us_avoirdupois_avoirdupoiston_.avoirdupoiston.md)
* [Centigram](../classes/_mass_si_centigram_.centigram.md)
* [Decagram](../classes/_mass_si_decagram_.decagram.md)
* [Decigram](../classes/_mass_si_decigram_.decigram.md)
* [Dram](../classes/_mass_us_avoirdupois_dram_.dram.md)
* [Exagram](../classes/_mass_si_exagram_.exagram.md)
* [Femtogram](../classes/_mass_si_femtogram_.femtogram.md)
* [Gigagram](../classes/_mass_si_gigagram_.gigagram.md)
* [Grain](../classes/_mass_us_avoirdupois_grain_.grain.md)
* [Gram](../classes/_mass_si_gram_.gram.md)
* [Hectogram](../classes/_mass_si_hectogram_.hectogram.md)
* [Hundredweight](../classes/_mass_us_avoirdupois_hundredweight_.hundredweight.md)
* [Kilogram](../classes/_mass_si_kilogram_.kilogram.md)
* [Megagram](../classes/_mass_si_megagram_.megagram.md)
* [Microgram](../classes/_mass_si_microgram_.microgram.md)
* [Milligram](../classes/_mass_si_milligram_.milligram.md)
* [Nanogram](../classes/_mass_si_nanogram_.nanogram.md)
* [Ounce](../classes/_mass_us_avoirdupois_ounce_.ounce.md)
* [Petagram](../classes/_mass_si_petagram_.petagram.md)
* [Picogram](../classes/_mass_si_picogram_.picogram.md)
* [Quarter](../classes/_mass_us_avoirdupois_quarter_.quarter.md)
* [SiDerivedUnit](../classes/_mass_si_siderivedunit_.siderivedunit.md)
* [Teragram](../classes/_mass_si_teragram_.teragram.md)
* [TroyPound](../classes/_mass_us_troy_troypound_.troypound.md)
* [UsDerivedUnit](../classes/_mass_us_usderivedunit_.usderivedunit.md)
* [Yoctogram](../classes/_mass_si_yoctogram_.yoctogram.md)
* [Yottagram](../classes/_mass_si_yottagram_.yottagram.md)
* [Zeptogram](../classes/_mass_si_zeptogram_.zeptogram.md)
* [Zettagram](../classes/_mass_si_zettagram_.zettagram.md)

## Index

### Properties

* [to](_mass_iunitofmass_.iunitofmass.md#to)
* [value](_mass_iunitofmass_.iunitofmass.md#value)

### Methods

* [add](_mass_iunitofmass_.iunitofmass.md#add)
* [divideBy](_mass_iunitofmass_.iunitofmass.md#divideby)
* [getConverters](_mass_iunitofmass_.iunitofmass.md#getconverters)
* [multiply](_mass_iunitofmass_.iunitofmass.md#multiply)
* [percentageOf](_mass_iunitofmass_.iunitofmass.md#percentageof)
* [subtract](_mass_iunitofmass_.iunitofmass.md#subtract)

## Properties

###  to

• **to**: *object*

*Overrides [ISimpleUnit](_isimpleunit_.isimpleunit.md).[to](_isimpleunit_.isimpleunit.md#to)*

*Defined in [Mass/IUnitOfMass.ts:12](https://github.com/baspeeters/measurement-toolkit/blob/094f000/src/Units/Mass/IUnitOfMass.ts#L12)*

#### Type declaration:

* \[ **key**: *string*\]: function

▸ (): *[IUnitOfMass](_mass_iunitofmass_.iunitofmass.md)*

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

*Defined in [Mass/IUnitOfMass.ts:13](https://github.com/baspeeters/measurement-toolkit/blob/094f000/src/Units/Mass/IUnitOfMass.ts#L13)*

**Returns:** *object*

* \[ **key**: *string*\]: function

▸ (): *[IUnitOfMass](_mass_iunitofmass_.iunitofmass.md)*

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
