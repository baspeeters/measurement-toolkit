/**
 * This file is part of Measurement Toolkit
 *
 * (c) Bas Peeters <bas@peete.rs>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import {IBaseUnit} from "./IBaseUnit";
import {IDerivedUnit} from "./IDerivedUnit";
import {ISimpleUnit} from "./ISimpleUnit";
import {IUnit} from "./IUnit";
import {SimpleUnit} from "./SimpleUnit";

export abstract class SimpleDerivedUnit extends SimpleUnit implements ISimpleUnit, IDerivedUnit {
    public abstract baseUnit: IBaseUnit;
    protected abstract baseUnitConverter: { [key: string]: () => IBaseUnit };

    public getConverters(): { [key: string]: () => IUnit } {
        this.converters = {
            ...super.getConverters(),
            ...this.baseUnit.derivedUnits,
            ...this.baseUnit.getConverters(),
            ...this.baseUnitConverter,
        };

        return this.converters;
    }
}
