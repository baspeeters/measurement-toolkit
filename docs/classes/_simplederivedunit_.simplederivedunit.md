[measurement-toolkit](../README.md) › ["SimpleDerivedUnit"](../modules/_simplederivedunit_.md) › [SimpleDerivedUnit](_simplederivedunit_.simplederivedunit.md)

# Class: SimpleDerivedUnit

## Hierarchy

  ↳ [SimpleUnit](_simpleunit_.simpleunit.md)

  ↳ **SimpleDerivedUnit**

  ↳ [SiDerivedUnit](_length_si_siderivedunit_.siderivedunit.md)

  ↳ [UsDerivedUnit](_mass_us_usderivedunit_.usderivedunit.md)

  ↳ [TroyOunce](_mass_us_troy_troyounce_.troyounce.md)

  ↳ [TroyPound](_mass_us_troy_troypound_.troypound.md)

  ↳ [SiDerivedUnit](_mass_si_siderivedunit_.siderivedunit.md)

  ↳ [SiDerivedUnit](_time_si_siderivedunit_.siderivedunit.md)

## Implements

* [IUnit](../interfaces/_iunit_.iunit.md)
* [ISimpleUnit](../interfaces/_isimpleunit_.isimpleunit.md)
* [ISimpleUnit](../interfaces/_isimpleunit_.isimpleunit.md)
* [IDerivedUnit](../interfaces/_iderivedunit_.iderivedunit.md)

## Index

### Constructors

* [constructor](_simplederivedunit_.simplederivedunit.md#constructor)

### Properties

* [baseUnit](_simplederivedunit_.simplederivedunit.md#abstract-baseunit)
* [value](_simplederivedunit_.simplederivedunit.md#value)

### Accessors

* [to](_simplederivedunit_.simplederivedunit.md#to)

### Methods

* [add](_simplederivedunit_.simplederivedunit.md#add)
* [divideBy](_simplederivedunit_.simplederivedunit.md#divideby)
* [dividedBy](_simplederivedunit_.simplederivedunit.md#dividedby)
* [getConverters](_simplederivedunit_.simplederivedunit.md#getconverters)
* [multiply](_simplederivedunit_.simplederivedunit.md#multiply)
* [percentageOf](_simplederivedunit_.simplederivedunit.md#percentageof)
* [percentageOfThis](_simplederivedunit_.simplederivedunit.md#percentageofthis)
* [subtract](_simplederivedunit_.simplederivedunit.md#subtract)

## Constructors

###  constructor

\+ **new SimpleDerivedUnit**(`value`: number): *[SimpleDerivedUnit](_simplederivedunit_.simplederivedunit.md)*

*Inherited from [SimpleUnit](_simpleunit_.simpleunit.md).[constructor](_simpleunit_.simpleunit.md#constructor)*

*Defined in [SimpleUnit.ts:15](https://github.com/baspeeters/measurement-toolkit/blob/094f000/src/Units/SimpleUnit.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *[SimpleDerivedUnit](_simplederivedunit_.simplederivedunit.md)*

## Properties

### `Abstract` baseUnit

• **baseUnit**: *[SimpleBaseUnit](_simplebaseunit_.simplebaseunit.md)*

*Implementation of [IDerivedUnit](../interfaces/_iderivedunit_.iderivedunit.md).[baseUnit](../interfaces/_iderivedunit_.iderivedunit.md#baseunit)*

*Defined in [SimpleDerivedUnit.ts:16](https://github.com/baspeeters/measurement-toolkit/blob/094f000/src/Units/SimpleDerivedUnit.ts#L16)*

___

###  value

• **value**: *number*

*Implementation of [ISimpleUnit](../interfaces/_isimpleunit_.isimpleunit.md).[value](../interfaces/_isimpleunit_.isimpleunit.md#value)*

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

*Implementation of [ISimpleUnit](../interfaces/_isimpleunit_.isimpleunit.md)*

*Overrides [SimpleUnit](_simpleunit_.simpleunit.md).[getConverters](_simpleunit_.simpleunit.md#getconverters)*

*Defined in [SimpleDerivedUnit.ts:19](https://github.com/baspeeters/measurement-toolkit/blob/094f000/src/Units/SimpleDerivedUnit.ts#L19)*

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
