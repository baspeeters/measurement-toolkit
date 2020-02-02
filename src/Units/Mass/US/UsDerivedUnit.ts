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
import {IUnitOfMass} from "../IUnitOfMass";
import {Pound} from "./Avoirdupois/Pound";

export abstract class UsDerivedUnit extends SimpleDerivedUnit implements IUnitOfMass {
    public abstract baseUnit: Pound;

    protected baseUnitConverter = {
        Pound: (): IBaseUnit => this.baseUnit,
    };
}
