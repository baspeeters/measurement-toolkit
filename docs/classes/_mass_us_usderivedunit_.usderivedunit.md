[measurement-toolkit](../README.md) › ["Mass/US/UsDerivedUnit"](../modules/_mass_us_usderivedunit_.md) › [UsDerivedUnit](_mass_us_usderivedunit_.usderivedunit.md)

# Class: UsDerivedUnit

## Hierarchy

  ↳ [SimpleDerivedUnit](_simplederivedunit_.simplederivedunit.md)

  ↳ **UsDerivedUnit**

  ↳ [AvoirdupoisTon](_mass_us_avoirdupois_avoirdupoiston_.avoirdupoiston.md)

  ↳ [Dram](_mass_us_avoirdupois_dram_.dram.md)

  ↳ [Grain](_mass_us_avoirdupois_grain_.grain.md)

  ↳ [Hundredweight](_mass_us_avoirdupois_hundredweight_.hundredweight.md)

  ↳ [Ounce](_mass_us_avoirdupois_ounce_.ounce.md)

  ↳ [Quarter](_mass_us_avoirdupois_quarter_.quarter.md)

## Implements

* [IUnit](../interfaces/_iunit_.iunit.md)
* [ISimpleUnit](../interfaces/_isimpleunit_.isimpleunit.md)
* [ISimpleUnit](../interfaces/_isimpleunit_.isimpleunit.md)
* [IDerivedUnit](../interfaces/_iderivedunit_.iderivedunit.md)
* [IUnitOfMass](../interfaces/_mass_iunitofmass_.iunitofmass.md)

## Index

### Constructors

* [constructor](_mass_us_usderivedunit_.usderivedunit.md#constructor)

### Properties

* [baseUnit](_mass_us_usderivedunit_.usderivedunit.md#abstract-baseunit)
* [symbol](_mass_us_usderivedunit_.usderivedunit.md#abstract-symbol)
* [value](_mass_us_usderivedunit_.usderivedunit.md#value)

### Accessors

* [to](_mass_us_usderivedunit_.usderivedunit.md#to)

### Methods

* [add](_mass_us_usderivedunit_.usderivedunit.md#add)
* [divideBy](_mass_us_usderivedunit_.usderivedunit.md#divideby)
* [dividedBy](_mass_us_usderivedunit_.usderivedunit.md#dividedby)
* [getConverters](_mass_us_usderivedunit_.usderivedunit.md#getconverters)
* [multiply](_mass_us_usderivedunit_.usderivedunit.md#multiply)
* [percentageOf](_mass_us_usderivedunit_.usderivedunit.md#percentageof)
* [percentageOfThis](_mass_us_usderivedunit_.usderivedunit.md#percentageofthis)
* [subtract](_mass_us_usderivedunit_.usderivedunit.md#subtract)
* [toString](_mass_us_usderivedunit_.usderivedunit.md#tostring)

## Constructors

###  constructor

\+ **new UsDerivedUnit**(`value`: number): *[UsDerivedUnit](_mass_us_usderivedunit_.usderivedunit.md)*

*Inherited from [SimpleUnit](_simpleunit_.simpleunit.md).[constructor](_simpleunit_.simpleunit.md#constructor)*

*Defined in [SimpleUnit.ts:17](https://github.com/baspeeters/measurement-toolkit/blob/b5deaf3/src/Units/SimpleUnit.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *[UsDerivedUnit](_mass_us_usderivedunit_.usderivedunit.md)*

## Properties

### `Abstract` baseUnit

• **baseUnit**: *[SimpleBaseUnit](_simplebaseunit_.simplebaseunit.md)*

*Implementation of [IDerivedUnit](../interfaces/_iderivedunit_.iderivedunit.md).[baseUnit](../interfaces/_iderivedunit_.iderivedunit.md#baseunit)*

*Overrides [SimpleDerivedUnit](_simplederivedunit_.simplederivedunit.md).[baseUnit](_simplederivedunit_.simplederivedunit.md#abstract-baseunit)*

*Defined in [Mass/US/UsDerivedUnit.ts:15](https://github.com/baspeeters/measurement-toolkit/blob/b5deaf3/src/Units/Mass/US/UsDerivedUnit.ts#L15)*

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
