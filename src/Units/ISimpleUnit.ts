/**
 * This file is part of Measurement Toolkit
 *
 * (c) Bas Peeters <bas@peete.rs>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import {IUnit} from "./IUnit";

export interface ISimpleUnit extends IUnit {
    value: number;
    to: { [key: string]: () => ISimpleUnit };
    getConverters(): { [key: string]: () => ISimpleUnit };
}
