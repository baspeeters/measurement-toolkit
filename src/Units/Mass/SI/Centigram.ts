/**
 * This file is part of Measurement Toolkit
 *
 * (c) Bas Peeters <bas@peete.rs>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import {Kilogram} from './Kilogram';
import {SiDerivedUnit} from './SiDerivedUnit';

export class Centigram extends SiDerivedUnit {
    public symbol = 'cg';
    public baseUnit = new Kilogram(this.value * Math.pow(10, -5));
}
