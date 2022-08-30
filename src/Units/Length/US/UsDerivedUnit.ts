/**
 * This file is part of Measurement Toolkit
 *
 * (c) Bas Peeters <bas@peete.rs>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import {IBaseUnit} from '../../IBaseUnit';
import {SimpleDerivedUnit} from '../../SimpleDerivedUnit';
import {IUnitOfLength} from '../IUnitOfLength';
import {Yard} from './Yard';

export abstract class UsDerivedUnit extends SimpleDerivedUnit implements IUnitOfLength {
    public abstract baseUnit: Yard;

    protected baseUnitConverter = {
        Yard: (): IBaseUnit => this.baseUnit,
    };
}
