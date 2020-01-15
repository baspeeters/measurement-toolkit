/**
 * This file is part of Unit Converter
 *
 * (c) Bas Peeters <bas@peete.rs>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import {DerivedUnit} from "../../../DerivedUnit";
import {Grain} from "../Avoirdupois/Grain";

export class TroyPound extends DerivedUnit {
    public baseUnit: Grain = new Grain(this.value * 5760);

    protected baseUnitConverter = {
        Grain: (): Grain => this.baseUnit,
    };
}
