/**
 * This file is part of Measurement Toolkit
 *
 * (c) Bas Peeters <bas@peete.rs>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import {Second} from "../SI/Second";
import {SiDerivedUnit} from "../SI/SiDerivedUnit";

export class Day extends SiDerivedUnit {
    public symbol = "d";
    public baseUnit = new Second(this.value * 86400);
}
