/**
 * This file is part of Measurement Toolkit
 *
 * (c) Bas Peeters <bas@peete.rs>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import {IBaseUnit} from "../../../IBaseUnit";
import {IDerivedUnit} from "../../../IDerivedUnit";
import {TroyPound} from "../Troy/TroyPound";
import {UsDerivedUnit} from "../UsDerivedUnit";
import {Pound} from "./Pound";

export class Grain extends UsDerivedUnit implements IBaseUnit, IDerivedUnit {
    public symbol = "gr";
    public baseUnit = new Pound(this.value / 7000);
    public derivedUnits = {
        TroyPound: (): TroyPound => new TroyPound(this.value / 5760),
    };
}
