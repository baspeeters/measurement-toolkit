/**
 * This file is part of Measurement Toolkit
 *
 * (c) Bas Peeters <bas@peete.rs>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import {ISimpleUnit} from './ISimpleUnit';
import {SimpleUnit} from './SimpleUnit';
import {ISimpleBaseUnit} from './ISimpleBaseUnit';

export abstract class SimpleBaseUnit extends SimpleUnit implements ISimpleBaseUnit {
    derivedUnits: {[key: string]: () => ISimpleUnit} = {};

    public getConverters(): { [key: string]: () => ISimpleUnit } {
        for (const converter of Object.keys(this.converters)) {
            const unit = this.converters[converter]();

            if (unit instanceof SimpleBaseUnit) {
                for (const derivedUnit of Object.keys(unit.derivedUnits)) {
                    this.converters[derivedUnit] = unit.derivedUnits[derivedUnit];
                }
            }
        }

        return {
            ...super.getConverters(),
            ...this.derivedUnits,
        };
    }
}
