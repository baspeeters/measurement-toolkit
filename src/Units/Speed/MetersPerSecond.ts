/**
 * This file is part of Measurement Toolkit
 *
 * (c) Bas Peeters <bas@peete.rs>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import {Meter} from "../Length/SI/Meter";
import {Speed} from "../Speed";
import {Second} from "../Time/SI/Second";

export class MetersPerSecond extends Speed {
    constructor(value: number) {
        const distance = new Meter(value);
        const time = new Second(1);

        super(distance, time);
    }
}
