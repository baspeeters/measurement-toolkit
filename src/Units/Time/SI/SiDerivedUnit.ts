/**
 * This file is part of Measurement Toolkit
 *
 * (c) Bas Peeters <bas@peete.rs>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import {SimpleBaseUnit} from '../../SimpleBaseUnit';
import {SimpleDerivedUnit} from '../../SimpleDerivedUnit';
import {IUnitOfTime} from '../IUnitOfTime';
import {ISimpleBaseUnit} from '../../ISimpleBaseUnit';

export abstract class SiDerivedUnit extends SimpleDerivedUnit implements IUnitOfTime {
    public abstract baseUnit: SimpleBaseUnit;

    protected baseUnitConverter = {
        Second: (): ISimpleBaseUnit => this.baseUnit,
    };
}
