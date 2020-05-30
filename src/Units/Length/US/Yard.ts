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
import {Foot} from "./Foot";
import {Inch} from "./Inch";
import {Mile} from "./Mile";

export class Yard extends SimpleBaseUnit implements IBaseUnit, IUnitOfLength {
    public symbol = "yd";

    public derivedUnits = {
        Inch: (): Inch => new Inch(this.value * 36),
        // tslint:disable-next-line:object-literal-sort-keys
        Foot: (): Foot => new Foot(this.value * 3),
        Mile: (): Mile => new Mile(this.value / 1760),
    };

    protected converters = {
        Meter: (): Meter => new Meter(this.value * 0.9144),
    };
}
