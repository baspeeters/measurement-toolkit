/**
 * This file is part of Unit Converter
 *
 * (c) Bas Peeters <bas@peete.rs>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import {Kilogram} from "./Kilogram";
import {KilogramDerivedUnit} from "./KilogramDerivedUnit";

export class Yottagram extends KilogramDerivedUnit {
    public baseUnit = new Kilogram(this.value * Math.pow(10, 21));
}
