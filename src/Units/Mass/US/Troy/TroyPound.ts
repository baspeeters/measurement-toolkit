/**
 * This file is part of Measurement Toolkit
 *
 * (c) Bas Peeters <bas@peete.rs>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import {IBaseUnit} from "../../../IBaseUnit";
import {SimpleDerivedUnit} from "../../../SimpleDerivedUnit";
import {Grain} from "../Avoirdupois/Grain";
import {TroyOunce} from "./TroyOunce";

export class TroyPound extends SimpleDerivedUnit implements IBaseUnit {
    public baseUnit: Grain = new Grain(this.value * 5760);

    public derivedUnits = {
        TroyOunce: (): TroyOunce => new TroyOunce(this.value * 12),
    };

    protected baseUnitConverter = {
        Grain: (): Grain => this.baseUnit,
    };

    public getConverters() {
        return {
            ...super.getConverters(),
            ...this.derivedUnits,
        };
    }
}
