/**
 * This file is part of Unit Converter
 *
 * (c) Bas Peeters <bas@peete.rs>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import {DerivedUnit} from "./DerivedUnit";

export abstract class Unit {
    public value: number;
    public derivedUnits: {[key: string]: () => DerivedUnit} = {};
    protected converters: {[key: string]: () => Unit} = {};

    constructor(value: number) {
        this.value = value;
    }

    get to(): any {
        return this.getConverters();
    }

    public getConverters() {
        for (const converter of Object.keys(this.converters)) {
            this.converters[converter] = this.converters[converter].bind(this, this.value);
        }

        return this.converters;
    }
}
