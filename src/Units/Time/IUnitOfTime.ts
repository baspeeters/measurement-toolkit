/**
 * This file is part of Measurement Toolkit
 *
 * (c) Bas Peeters <bas@peete.rs>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import {ISimpleUnit} from "../ISimpleUnit";

export interface IUnitOfTime extends ISimpleUnit {
    to: { [key: string]: () => IUnitOfTime };
    getConverters(): { [key: string]: () => IUnitOfTime };
}
