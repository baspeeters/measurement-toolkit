/**
 * This file is part of Unit Converter
 *
 * (c) Bas Peeters <bas@peete.rs>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import {DerivedUnit} from "../../DerivedUnit";
import {Unit} from "../../Unit";
import {Pound} from "./Avoirdupois/Pound";

export abstract class UsDerivedUnit extends DerivedUnit {
    public abstract baseUnit: Pound;

    protected baseUnitConverter = {
        Pound: (): Unit => this.baseUnit,
    };
}
