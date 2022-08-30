/**
 * This file is part of Measurement Toolkit
 *
 * (c) Bas Peeters <bas@peete.rs>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import {SimpleDerivedUnit} from '../../SimpleDerivedUnit';
import {IUnitOfMass} from '../IUnitOfMass';
import {ISimpleBaseUnit} from '../../ISimpleBaseUnit';

export abstract class UsDerivedUnit extends SimpleDerivedUnit implements IUnitOfMass {
    public abstract baseUnit: ISimpleBaseUnit;

    protected baseUnitConverter = {
        Pound: (): ISimpleBaseUnit => this.baseUnit,
    };
}
