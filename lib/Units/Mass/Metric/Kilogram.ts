/**
 * This file is part of Unit Converter
 *
 * (c) Bas Peeters <bas@peete.rs>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import {BaseUnit} from "../../BaseUnit";
import {Pound} from "../Imperial/Pound";
import {Gram} from "./Gram";

export class Kilogram extends BaseUnit {
    public derivedUnits = {
        Gram: () => new Gram(this.value * Math.pow(10, 3)),
        Milligram: () => new Gram(this.value * Math.pow(10, 6)),
    };

    protected converters = {
        Pound: (): Pound => new Pound(this.value / 0.45359237),
    };
}
