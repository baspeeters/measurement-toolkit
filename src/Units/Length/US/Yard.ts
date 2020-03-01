/**
 * This file is part of Measurement Toolkit
 *
 * (c) Bas Peeters <bas@peete.rs>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import {IBaseUnit} from "../../IBaseUnit";
import {SimpleBaseUnit} from "../../SimpleBaseUnit";
import {IUnitOfLength} from "../IUnitOfLength";
import {Meter} from "../SI/Meter";

export class Yard extends SimpleBaseUnit implements IBaseUnit, IUnitOfLength {
    public symbol = "yd";

    protected converters = {
        Meter: (): Meter => new Meter(this.value * 0.9144),
    };
}
