/**
 * This file is part of Unit Converter
 *
 * (c) Bas Peeters <bas@peete.rs>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import {Unit} from "../../Unit";
import {Kilogram} from "./Kilogram";

export class Gram extends Unit {
    protected converters = {
        Kilogram: (): Kilogram => new Kilogram(this.value * Math.pow(10, -3)),
    };
}
