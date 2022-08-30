/**
 * This file is part of Measurement Toolkit
 *
 * (c) Bas Peeters <bas@peete.rs>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import {SimpleBaseUnit} from '../../../SimpleBaseUnit';
import {Kilogram} from '../../SI/Kilogram';
import {AvoirdupoisTon} from './AvoirdupoisTon';
import {Dram} from './Dram';
import {Grain} from './Grain';
import {Hundredweight} from './Hundredweight';
import {Ounce} from './Ounce';
import {Quarter} from './Quarter';
import {ISimpleBaseUnit} from '../../../ISimpleBaseUnit';

export class Pound extends SimpleBaseUnit implements ISimpleBaseUnit {
    public symbol = 'lb';

    public derivedUnits = {
        Grain: () => new Grain(this.value * 7000),
        // tslint:disable-next-line:object-literal-sort-keys
        Dram: () => new Dram(this.value * 256),
        Ounce: () => new Ounce(this.value * 16),
        Quarter: () => new Quarter(this.value / 25),
        Hundredweight: () => new Hundredweight(this.value / 100),
        AvoirdupoisTon: () => new AvoirdupoisTon(this.value / 2000),
    };

    protected converters = {
        Kilogram: (): Kilogram => new Kilogram(this.value * 0.45359237),
    };
}
