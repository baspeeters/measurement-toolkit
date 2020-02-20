[measurement-toolkit](../README.md) › ["Mass/US/Troy/TroyPound"](../modules/_mass_us_troy_troypound_.md) › [TroyPound](_mass_us_troy_troypound_.troypound.md)

# Class: TroyPound

## Hierarchy

  ↳ [SimpleDerivedUnit](_simplederivedunit_.simplederivedunit.md)

  ↳ **TroyPound**

## Implements

* [IUnit](../interfaces/_iunit_.iunit.md)
* [ISimpleUnit](../interfaces/_isimpleunit_.isimpleunit.md)
* [ISimpleUnit](../interfaces/_isimpleunit_.isimpleunit.md)
* [IDerivedUnit](../interfaces/_iderivedunit_.iderivedunit.md)
* [IBaseUnit](../interfaces/_ibaseunit_.ibaseunit.md)
* [IUnitOfMass](../interfaces/_mass_iunitofmass_.iunitofmass.md)

## Index

### Constructors

* [constructor](_mass_us_troy_troypound_.troypound.md#constructor)

### Properties

* [baseUnit](_mass_us_troy_troypound_.troypound.md#baseunit)
* [value](_mass_us_troy_troypound_.troypound.md#value)

### Accessors

* [to](_mass_us_troy_troypound_.troypound.md#to)

### Methods

* [add](_mass_us_troy_troypound_.troypound.md#add)
* [divideBy](_mass_us_troy_troypound_.troypound.md#divideby)
* [dividedBy](_mass_us_troy_troypound_.troypound.md#dividedby)
* [getConverters](_mass_us_troy_troypound_.troypound.md#getconverters)
* [multiply](_mass_us_troy_troypound_.troypound.md#multiply)
* [percentageOf](_mass_us_troy_troypound_.troypound.md#percentageof)
* [percentageOfThis](_mass_us_troy_troypound_.troypound.md#percentageofthis)
* [subtract](_mass_us_troy_troypound_.troypound.md#subtract)

### Object literals

* [derivedUnits](_mass_us_troy_troypound_.troypound.md#derivedunits)

## Constructors

###  constructor

\+ **new TroyPound**(`value`: number): *[TroyPound](_mass_us_troy_troypound_.troypound.md)*

*Inherited from [SimpleUnit](_simpleunit_.simpleunit.md).[constructor](_simpleunit_.simpleunit.md#constructor)*

*Defined in [SimpleUnit.ts:15](https://github.com/baspeeters/measurement-toolkit/blob/094f000/src/Units/SimpleUnit.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *[TroyPound](_mass_us_troy_troypound_.troypound.md)*

## Properties

###  baseUnit

• **baseUnit**: *[Grain](_mass_us_avoirdupois_grain_.grain.md)* = new Grain(this.value * 5760)

*Implementation of [IDerivedUnit](../interfaces/_iderivedunit_.iderivedunit.md).[baseUnit](../interfaces/_iderivedunit_.iderivedunit.md#baseunit)*

*Overrides [SimpleDerivedUnit](_simplederivedunit_.simplederivedunit.md).[baseUnit](_simplederivedunit_.simplederivedunit.md#abstract-baseunit)*

*Defined in [Mass/US/Troy/TroyPound.ts:16](https://github.com/baspeeters/measurement-toolkit/blob/094f000/src/Units/Mass/US/Troy/TroyPound.ts#L16)*

___

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

*Overrides [SimpleDerivedUnit](_simplederivedunit_.simplederivedunit.md).[getConverters](_simplederivedunit_.simplederivedunit.md#getconverters)*

*Defined in [Mass/US/Troy/TroyPound.ts:26](https://github.com/baspeeters/measurement-toolkit/blob/094f000/src/Units/Mass/US/Troy/TroyPound.ts#L26)*

**Returns:** *object*

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

*Defined in [Mass/US/Troy/TroyPound.ts:18](https://github.com/baspeeters/measurement-toolkit/blob/094f000/src/Units/Mass/US/Troy/TroyPound.ts#L18)*

###  TroyOunce

▸ **TroyOunce**(): *[TroyOunce](_mass_us_troy_troyounce_.troyounce.md)*

*Defined in [Mass/US/Troy/TroyPound.ts:19](https://github.com/baspeeters/measurement-toolkit/blob/094f000/src/Units/Mass/US/Troy/TroyPound.ts#L19)*

**Returns:** *[TroyOunce](_mass_us_troy_troyounce_.troyounce.md)*
