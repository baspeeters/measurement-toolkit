/**
 * This file is part of Measurement Toolkit
 *
 * (c) Bas Peeters <bas@peete.rs>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import {UsDerivedUnit} from './UsDerivedUnit';
import {Yard} from './Yard';

export class Inch extends UsDerivedUnit {
    public symbol = 'in';
    public baseUnit = new Yard(this.value / 36);
}
