/**
 * This file is part of Measurement Toolkit
 *
 * (c) Bas Peeters <bas@peete.rs>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import {SimpleBaseUnit} from '../../SimpleBaseUnit';
import {IUnitOfTime} from '../IUnitOfTime';
import {Day} from '../Other/Day';
import {Hour} from '../Other/Hour';
import {Minute} from '../Other/Minute';
import {Attosecond} from './Attosecond';
import {Centisecond} from './Centisecond';
import {Decasecond} from './Decasecond';
import {Decisecond} from './Decisecond';
import {Exasecond} from './Exasecond';
import {Femtosecond} from './Femtosecond';
import {Gigasecond} from './Gigasecond';
import {Hectosecond} from './Hectosecond';
import {Kilosecond} from './Kilosecond';
import {Megasecond} from './Megasecond';
import {Microsecond} from './Microsecond';
import {Millisecond} from './Millisecond';
import {Nanosecond} from './Nanosecond';
import {Petasecond} from './Petasecond';
import {Picosecond} from './Picosecond';
import {Terasecond} from './Terasecond';
import {Yoctosecond} from './Yoctosecond';
import {Yottasecond} from './Yottasecond';
import {Zeptosecond} from './Zeptosecond';
import {Zettasecond} from './Zettasecond';

export class Second extends SimpleBaseUnit implements IUnitOfTime {
    public symbol = 's';

    public derivedUnits = {
        Yoctosecond: () => new Yoctosecond(this.value * Math.pow(10, 24)),
        Zeptosecond: () => new Zeptosecond(this.value * Math.pow(10, 21)),
        // tslint:disable-next-line:object-literal-sort-keys
        Attosecond: () => new Attosecond(this.value * Math.pow(10, 18)),
        Femtosecond: () => new Femtosecond(this.value * Math.pow(10, 15)),
        Picosecond: () => new Picosecond(this.value * Math.pow(10, 12)),
        Nanosecond: () => new Nanosecond(this.value * Math.pow(10, 9)),
        Microsecond: () => new Microsecond(this.value * Math.pow(10, 6)),
        Millisecond: () => new Millisecond(this.value * Math.pow(10, 3)),
        Centisecond: () => new Centisecond(this.value * Math.pow(10, 2)),
        Decisecond: () => new Decisecond(this.value * Math.pow(10, 1)),
        Decasecond: () => new Decasecond(this.value * Math.pow(10, -1)),
        Hectosecond: () => new Hectosecond(this.value * Math.pow(10, -2)),
        Kilosecond: () => new Kilosecond(this.value * Math.pow(10, -3)),
        Megasecond: () => new Megasecond(this.value * Math.pow(10, -6)),
        Gigasecond: () => new Gigasecond(this.value * Math.pow(10, -9)),
        Terasecond: () => new Terasecond(this.value * Math.pow(10, -12)),
        Petasecond: () => new Petasecond(this.value * Math.pow(10, -15)),
        Exasecond: () => new Exasecond(this.value * Math.pow(10, -18)),
        Zettasecond: () => new Zettasecond(this.value * Math.pow(10, -21)),
        Yottasecond: () => new Yottasecond(this.value * Math.pow(10, -24)),

        Minute: () => new Minute(this.value / 60),
        Hour: () => new Hour(this.value / 3600),
        Day: () => new Day(this.value / 86400),
    };
}
