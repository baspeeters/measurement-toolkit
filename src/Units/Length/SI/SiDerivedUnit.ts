/**
 * This file is part of Measurement Toolkit
 *
 * (c) Bas Peeters <bas@peete.rs>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import {IBaseUnit} from "../../IBaseUnit";
import {SimpleDerivedUnit} from "../../SimpleDerivedUnit";
import {IUnitOfLength} from "../IUnitOfLength";

export abstract class SiDerivedUnit extends SimpleDerivedUnit implements IUnitOfLength {
    protected baseUnitConverter = {
        Meter: (): IBaseUnit => this.baseUnit,
    };
}
