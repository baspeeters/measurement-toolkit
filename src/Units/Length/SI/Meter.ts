/**
 * This file is part of Measurement Toolkit
 *
 * (c) Bas Peeters <bas@peete.rs>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import {SimpleBaseUnit} from '../../SimpleBaseUnit';
import {IUnitOfLength} from '../IUnitOfLength';
import {Yard} from '../US/Yard';
import {Attometer} from './Attometer';
import {Centimeter} from './Centimeter';
import {Decameter} from './Decameter';
import {Decimeter} from './Decimeter';
import {Exameter} from './Exameter';
import {Femtometer} from './Femtometer';
import {Gigameter} from './Gigameter';
import {Hectometer} from './Hectometer';
import {Kilometer} from './Kilometer';
import {Megameter} from './Megameter';
import {Micrometer} from './Micrometer';
import {Millimeter} from './Millimeter';
import {Nanometer} from './Nanometer';
import {Petameter} from './Petameter';
import {Picometer} from './Picometer';
import {Terameter} from './Terameter';
import {Yoctometer} from './Yoctometer';
import {Yottameter} from './Yottameter';
import {Zeptometer} from './Zeptometer';
import {Zettameter} from './Zettameter';

export class Meter extends SimpleBaseUnit implements IUnitOfLength {
    public symbol = 'm';

    public derivedUnits = {
        Yoctometer: () => new Yoctometer(this.value * Math.pow(10, 24)),
        Zeptometer: () => new Zeptometer(this.value * Math.pow(10, 21)),
        // tslint:disable-next-line:object-literal-sort-keys
        Attometer: () => new Attometer(this.value * Math.pow(10, 18)),
        Femtometer: () => new Femtometer(this.value * Math.pow(10, 15)),
        Picometer: () => new Picometer(this.value * Math.pow(10, 12)),
        Nanometer: () => new Nanometer(this.value * Math.pow(10, 9)),
        Micrometer: () => new Micrometer(this.value * Math.pow(10, 6)),
        Millimeter: () => new Millimeter(this.value * Math.pow(10, 3)),
        Centimeter: () => new Centimeter(this.value * Math.pow(10, 2)),
        Decimeter: () => new Decimeter(this.value * Math.pow(10, 1)),
        Decameter: () => new Decameter(this.value * Math.pow(10, -1)),
        Hectometer: () => new Hectometer(this.value * Math.pow(10, -2)),
        Kilometer: () => new Kilometer(this.value * Math.pow(10, -3)),
        Megameter: () => new Megameter(this.value * Math.pow(10, -6)),
        Gigameter: () => new Gigameter(this.value * Math.pow(10, -9)),
        Terameter: () => new Terameter(this.value * Math.pow(10, -12)),
        Petameter: () => new Petameter(this.value * Math.pow(10, -15)),
        Exameter: () => new Exameter(this.value * Math.pow(10, -18)),
        Zettameter: () => new Zettameter(this.value * Math.pow(10, -21)),
        Yottameter: () => new Yottameter(this.value * Math.pow(10, -24)),
    };

    protected converters = {
        Yard: () => new Yard(this.value / 0.9144),
    };
}
