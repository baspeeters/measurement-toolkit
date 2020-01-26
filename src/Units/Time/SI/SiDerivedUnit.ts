/**
 * This file is part of Measurement Toolkit
 *
 * (c) Bas Peeters <bas@peete.rs>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import {BaseUnit} from "../../BaseUnit";
import {DerivedUnit} from "../../DerivedUnit";
import {Unit} from "../../Unit";

export abstract class SiDerivedUnit extends DerivedUnit {
    public abstract baseUnit: BaseUnit;

    protected baseUnitConverter = {
        Second: (): Unit => this.baseUnit,
    };
}
