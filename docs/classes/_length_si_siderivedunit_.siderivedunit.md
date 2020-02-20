[measurement-toolkit](../README.md) › ["Length/SI/SiDerivedUnit"](../modules/_length_si_siderivedunit_.md) › [SiDerivedUnit](_length_si_siderivedunit_.siderivedunit.md)

# Class: SiDerivedUnit

## Hierarchy

  ↳ [SimpleDerivedUnit](_simplederivedunit_.simplederivedunit.md)

  ↳ **SiDerivedUnit**

  ↳ [Attometer](_length_si_attometer_.attometer.md)

  ↳ [Centimeter](_length_si_centimeter_.centimeter.md)

  ↳ [Decameter](_length_si_decameter_.decameter.md)

  ↳ [Decimeter](_length_si_decimeter_.decimeter.md)

  ↳ [Exameter](_length_si_exameter_.exameter.md)

  ↳ [Femtometer](_length_si_femtometer_.femtometer.md)

  ↳ [Gigameter](_length_si_gigameter_.gigameter.md)

  ↳ [Hectometer](_length_si_hectometer_.hectometer.md)

  ↳ [Megameter](_length_si_megameter_.megameter.md)

  ↳ [Micrometer](_length_si_micrometer_.micrometer.md)

  ↳ [Millimeter](_length_si_millimeter_.millimeter.md)

  ↳ [Nanometer](_length_si_nanometer_.nanometer.md)

  ↳ [Petameter](_length_si_petameter_.petameter.md)

  ↳ [Picometer](_length_si_picometer_.picometer.md)

  ↳ [Terameter](_length_si_terameter_.terameter.md)

  ↳ [Yoctometer](_length_si_yoctometer_.yoctometer.md)

  ↳ [Yottameter](_length_si_yottameter_.yottameter.md)

  ↳ [Zeptometer](_length_si_zeptometer_.zeptometer.md)

  ↳ [Zettameter](_length_si_zettameter_.zettameter.md)

  ↳ [Kilometer](_length_si_kilometer_.kilometer.md)

## Implements

* [IUnit](../interfaces/_iunit_.iunit.md)
* [ISimpleUnit](../interfaces/_isimpleunit_.isimpleunit.md)
* [ISimpleUnit](../interfaces/_isimpleunit_.isimpleunit.md)
* [IDerivedUnit](../interfaces/_iderivedunit_.iderivedunit.md)
* [IUnitOfLength](../interfaces/_length_iunitoflength_.iunitoflength.md)

## Index

### Constructors

* [constructor](_length_si_siderivedunit_.siderivedunit.md#constructor)

### Properties

* [baseUnit](_length_si_siderivedunit_.siderivedunit.md#abstract-baseunit)
* [value](_length_si_siderivedunit_.siderivedunit.md#value)

### Accessors

* [to](_length_si_siderivedunit_.siderivedunit.md#to)

### Methods

* [add](_length_si_siderivedunit_.siderivedunit.md#add)
* [divideBy](_length_si_siderivedunit_.siderivedunit.md#divideby)
* [dividedBy](_length_si_siderivedunit_.siderivedunit.md#dividedby)
* [getConverters](_length_si_siderivedunit_.siderivedunit.md#getconverters)
* [multiply](_length_si_siderivedunit_.siderivedunit.md#multiply)
* [percentageOf](_length_si_siderivedunit_.siderivedunit.md#percentageof)
* [percentageOfThis](_length_si_siderivedunit_.siderivedunit.md#percentageofthis)
* [subtract](_length_si_siderivedunit_.siderivedunit.md#subtract)

## Constructors

###  constructor

\+ **new SiDerivedUnit**(`value`: number): *[SiDerivedUnit](_length_si_siderivedunit_.siderivedunit.md)*

*Inherited from [SimpleUnit](_simpleunit_.simpleunit.md).[constructor](_simpleunit_.simpleunit.md#constructor)*

*Defined in [SimpleUnit.ts:15](https://github.com/baspeeters/measurement-toolkit/blob/094f000/src/Units/SimpleUnit.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *[SiDerivedUnit](_length_si_siderivedunit_.siderivedunit.md)*

## Properties

### `Abstract` baseUnit

• **baseUnit**: *[SimpleBaseUnit](_simplebaseunit_.simplebaseunit.md)*

*Implementation of [IDerivedUnit](../interfaces/_iderivedunit_.iderivedunit.md).[baseUnit](../interfaces/_iderivedunit_.iderivedunit.md#baseunit)*

*Inherited from [SimpleDerivedUnit](_simplederivedunit_.simplederivedunit.md).[baseUnit](_simplederivedunit_.simplederivedunit.md#abstract-baseunit)*

*Defined in [SimpleDerivedUnit.ts:16](https://github.com/baspeeters/measurement-toolkit/blob/094f000/src/Units/SimpleDerivedUnit.ts#L16)*

___

###  value

• **value**: *number*

*Implementation of [IUnitOfLength](../interfaces/_length_iunitoflength_.iunitoflength.md).[value](../interfaces/_length_iunitoflength_.iunitoflength.md#value)*

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

*Implementation of [IUnitOfLength](../interfaces/_length_iunitoflength_.iunitoflength.md)*

*Inherited from [SimpleDerivedUnit](_simplederivedunit_.simplederivedunit.md).[getConverters](_simplederivedunit_.simplederivedunit.md#getconverters)*

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
