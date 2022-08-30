/**
 * This file is part of Measurement Toolkit
 *
 * (c) Bas Peeters <bas@peete.rs>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import {IBaseUnit} from './IBaseUnit';
import {ISimpleUnit} from './ISimpleUnit';
import {SimpleUnit} from './SimpleUnit';

export abstract class SimpleBaseUnit extends SimpleUnit implements ISimpleUnit, IBaseUnit {
    public derivedUnits = {};

    public getConverters(): { [key: string]: () => ISimpleUnit } {
        for (const converter of Object.keys(this.converters)) {
            const unit = this.converters[converter]();

            if ('derivedUnits' in unit) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                for (const derivedUnit of Object.keys(unit.derivedUnits)) {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
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
