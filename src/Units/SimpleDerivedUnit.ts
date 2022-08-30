/**
 * This file is part of Measurement Toolkit
 *
 * (c) Bas Peeters <bas@peete.rs>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import {SimpleUnit} from './SimpleUnit';
import {ISimpleBaseUnit} from './ISimpleBaseUnit';
import {ISimpleDerivedUnit} from './ISimpleDerivedUnit';
import {ISimpleUnit} from './ISimpleUnit';

export abstract class SimpleDerivedUnit extends SimpleUnit implements ISimpleDerivedUnit {
    public abstract baseUnit: ISimpleBaseUnit;
    protected abstract baseUnitConverter: { [key: string]: () => ISimpleBaseUnit };

    getConverters(): { [key: string]: () => ISimpleUnit } {
        this.converters = {
            ...super.getConverters(),
            ...this.baseUnit.derivedUnits,
            ...this.baseUnit.getConverters(),
            ...this.baseUnitConverter,
        };

        return this.converters;
    }
}
