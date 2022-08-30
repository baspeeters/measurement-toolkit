/**
 * This file is part of Measurement Toolkit
 *
 * (c) Bas Peeters <bas@peete.rs>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import {Meter} from './Meter';
import {SiDerivedUnit} from './SiDerivedUnit';

export class Picometer extends SiDerivedUnit {
    public baseUnit = new Meter(this.value * Math.pow(10, -12));
    public symbol = 'pm';
}
