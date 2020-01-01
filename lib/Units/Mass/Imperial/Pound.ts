/**
 * This file is part of Unit Converter
 *
 * (c) Bas Peeters <bas@peete.rs>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import {BaseUnit} from "../../BaseUnit";
import {Kilogram} from "../SI/Kilogram";
import {Ounce} from "./Ounce";

export class Pound extends BaseUnit {
    public derivedUnits = {
        Ounce: () => new Ounce(this.value * 16),
    };

    protected converters = {
        Kilogram: (): Kilogram => new Kilogram(this.value * 0.45359237),
    };
}
