/**
 * This file is part of Measurement Toolkit
 *
 * (c) Bas Peeters <bas@peete.rs>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import {BaseUnit} from "./BaseUnit";
import {Unit} from "./Unit";

export abstract class DerivedUnit extends Unit {
    public abstract baseUnit: BaseUnit;
    protected abstract baseUnitConverter: { [key: string]: () => Unit };

    public getConverters(): { [key: string]: () => Unit } {
        this.converters = {
            ...super.getConverters(),
            ...this.baseUnit.derivedUnits,
            ...this.baseUnit.getConverters(),
            ...this.baseUnitConverter,
        };

        return this.converters;
    }
}
