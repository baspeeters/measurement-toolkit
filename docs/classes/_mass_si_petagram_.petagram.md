[measurement-toolkit](../README.md) › ["Mass/SI/Petagram"](../modules/_mass_si_petagram_.md) › [Petagram](_mass_si_petagram_.petagram.md)

# Class: Petagram

## Hierarchy

  ↳ [SiDerivedUnit](_mass_si_siderivedunit_.siderivedunit.md)

  ↳ **Petagram**

## Implements

* [IUnit](../interfaces/_iunit_.iunit.md)
* [ISimpleUnit](../interfaces/_isimpleunit_.isimpleunit.md)
* [ISimpleUnit](../interfaces/_isimpleunit_.isimpleunit.md)
* [IDerivedUnit](../interfaces/_iderivedunit_.iderivedunit.md)
* [IUnitOfMass](../interfaces/_mass_iunitofmass_.iunitofmass.md)

## Index

### Constructors

* [constructor](_mass_si_petagram_.petagram.md#constructor)

### Properties

* [baseUnit](_mass_si_petagram_.petagram.md#baseunit)
* [symbol](_mass_si_petagram_.petagram.md#symbol)
* [value](_mass_si_petagram_.petagram.md#value)

### Accessors

* [to](_mass_si_petagram_.petagram.md#to)

### Methods

* [add](_mass_si_petagram_.petagram.md#add)
* [divideBy](_mass_si_petagram_.petagram.md#divideby)
* [dividedBy](_mass_si_petagram_.petagram.md#dividedby)
* [getConverters](_mass_si_petagram_.petagram.md#getconverters)
* [multiply](_mass_si_petagram_.petagram.md#multiply)
* [percentageOf](_mass_si_petagram_.petagram.md#percentageof)
* [percentageOfThis](_mass_si_petagram_.petagram.md#percentageofthis)
* [subtract](_mass_si_petagram_.petagram.md#subtract)
* [toString](_mass_si_petagram_.petagram.md#tostring)

## Constructors

###  constructor

\+ **new Petagram**(`value`: number): *[Petagram](_mass_si_petagram_.petagram.md)*

*Inherited from [SimpleUnit](_simpleunit_.simpleunit.md).[constructor](_simpleunit_.simpleunit.md#constructor)*

*Defined in [SimpleUnit.ts:17](https://github.com/baspeeters/measurement-toolkit/blob/b5deaf3/src/Units/SimpleUnit.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *[Petagram](_mass_si_petagram_.petagram.md)*

## Properties

###  baseUnit

• **baseUnit**: *[Kilogram](_mass_si_kilogram_.kilogram.md)‹›* = new Kilogram(this.value * Math.pow(10, 12))

*Implementation of [IDerivedUnit](../interfaces/_iderivedunit_.iderivedunit.md).[baseUnit](../interfaces/_iderivedunit_.iderivedunit.md#baseunit)*

*Overrides [SiDerivedUnit](_mass_si_siderivedunit_.siderivedunit.md).[baseUnit](_mass_si_siderivedunit_.siderivedunit.md#abstract-baseunit)*

*Defined in [Mass/SI/Petagram.ts:14](https://github.com/baspeeters/measurement-toolkit/blob/b5deaf3/src/Units/Mass/SI/Petagram.ts#L14)*

___

###  symbol

• **symbol**: *string* = "Pg"

*Implementation of [IUnitOfMass](../interfaces/_mass_iunitofmass_.iunitofmass.md).[symbol](../interfaces/_mass_iunitofmass_.iunitofmass.md#symbol)*

*Overrides [SimpleUnit](_simpleunit_.simpleunit.md).[symbol](_simpleunit_.simpleunit.md#abstract-symbol)*

*Defined in [Mass/SI/Petagram.ts:13](https://github.com/baspeeters/measurement-toolkit/blob/b5deaf3/src/Units/Mass/SI/Petagram.ts#L13)*

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
