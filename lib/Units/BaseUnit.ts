/**
 * This file is part of Unit Converter
 *
 * (c) Bas Peeters <bas@peete.rs>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import {Unit} from "./Unit";

export abstract class BaseUnit extends Unit {
    public derivedUnits = {};

    public getConverters(): { [key: string]: () => Unit } {
        for (const converter of Object.keys(this.converters)) {
            const unit = this.converters[converter]();
            for (const derivedUnit of Object.keys(unit.derivedUnits)) {
                this.converters[derivedUnit] = unit.derivedUnits[derivedUnit];
            }
        }

        return {
            ...super.getConverters(),
            ...this.derivedUnits,
        };
    }
}
