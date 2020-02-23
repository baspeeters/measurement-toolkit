/**
 * This file is part of Measurement Toolkit
 *
 * (c) Bas Peeters <bas@peete.rs>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import {SimpleDerivedUnit} from "../../../SimpleDerivedUnit";
import {TroyPound} from "./TroyPound";

export class TroyOunce extends SimpleDerivedUnit {
    public symbol = "oz (t)";

    public baseUnit: TroyPound = new TroyPound(this.value / 12);

    protected baseUnitConverter = {
        TroyPound: (): TroyPound => this.baseUnit,
    };
}
