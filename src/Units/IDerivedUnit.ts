/**
 * This file is part of Measurement Toolkit
 *
 * (c) Bas Peeters <bas@peete.rs>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import {IBaseUnit} from './IBaseUnit';
import {IUnit} from './IUnit';

export interface IDerivedUnit extends IUnit {
    baseUnit: IBaseUnit;
}
