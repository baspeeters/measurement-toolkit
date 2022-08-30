/**
 * This file is part of Measurement Toolkit
 *
 * (c) Bas Peeters <bas@peete.rs>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import {IUnit} from '../../src/Units/IUnit';
import {Unit} from '../../src/Units/Unit';

export class UnitStub extends Unit {
    protected converters: {[key: string]: () => IUnit} = {
        OtherStub: () => new UnitStub(),
    };

    public add(): this {
        return this;
    }

    public divideBy(): this {
        return this;
    }

    public multiply(): this {
        return this;
    }

    public percentageOf(): this {
        return this;
    }

    public subtract(): this {
        return this;
    }
}
