/**
 * This file is part of Unit Converter
 *
 * (c) Bas Peeters <bas@peete.rs>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import {BaseUnit} from "../../../BaseUnit";
import {Kilogram} from "../../SI/Kilogram";
import {Dram} from "./Dram";
import {Grain} from "./Grain";
import {Hundredweight} from "./Hundredweight";
import {Ounce} from "./Ounce";
import {Quarter} from "./Quarter";
import {Ton} from "./Ton";

export class Pound extends BaseUnit {
    public derivedUnits = {
        Grain: () => new Grain(this.value * 7000),
        // tslint:disable-next-line:object-literal-sort-keys
        Dram: () => new Dram(this.value * 256),
        Ounce: () => new Ounce(this.value * 16),
        Quarter: () => new Quarter(this.value / 25),
        Hundredweight: () => new Hundredweight(this.value / 100),
        Ton: () => new Ton(this.value / 2000),
    };

    protected converters = {
        Kilogram: (): Kilogram => new Kilogram(this.value * 0.45359237),
    };
}
