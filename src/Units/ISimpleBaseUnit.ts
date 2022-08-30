/**
 * This file is part of Measurement Toolkit
 *
 * (c) Bas Peeters <bas@peete.rs>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import {IBaseUnit} from './IBaseUnit';
import {ISimpleUnit} from './ISimpleUnit';

export interface ISimpleBaseUnit extends IBaseUnit {
    value: number;
    symbol: string;
    to: { [key: string]: () => ISimpleUnit };
    derivedUnits: { [key: string]: () => ISimpleUnit };
    getConverters(): { [key: string]: () => ISimpleUnit };
}
