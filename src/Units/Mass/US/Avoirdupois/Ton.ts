/**
 * This file is part of Unit Converter
 *
 * (c) Bas Peeters <bas@peete.rs>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import {UsDerivedUnit} from "../UsDerivedUnit";
import {Pound} from "./Pound";

export class Ton extends UsDerivedUnit {
    public baseUnit = new Pound(this.value * 2000);
}
