/**
 * This file is part of Measurement Toolkit
 *
 * (c) Bas Peeters <bas@peete.rs>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import {Second} from './Second';
import {SiDerivedUnit} from './SiDerivedUnit';

export class Exasecond extends SiDerivedUnit {
    public symbol = 'Es';
    public baseUnit = new Second(this.value * Math.pow(10, 18));
}
