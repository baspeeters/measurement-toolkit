/**
 * This file is part of Unit Converter
 *
 * (c) Bas Peeters <bas@peete.rs>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import {Unit} from "../../Unit";
import {Gram} from "./Gram";

export class Kilogram extends Unit {
    protected converters = {
        Gram: (): Gram => new Gram(this.value * Math.pow(10, 3)),
    };
}
