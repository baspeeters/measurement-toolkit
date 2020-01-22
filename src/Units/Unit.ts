/**
 * This file is part of Measurement Toolkit
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

    public subtract(unit: Unit): this {
        this.value -= unit.to[this.constructor.name]().value;

        return this;
    }

    public add(unit: Unit): this {
        this.value += unit.to[this.constructor.name]().value;

        return this;
    }

    public divideBy(unit: Unit): this {
        this.value /= unit.to[this.constructor.name]().value;

        return this;
    }

    public dividedBy(unit: Unit): this {
        this.value = unit.to[this.constructor.name]().value / this.value;

        return this;
    }

    public multiply(unit: Unit): this {
        this.value *= unit.to[this.constructor.name]().value;

        return this;
    }

    public percentageOf(unit: Unit): this {
        this.value = (this.value / unit.to[this.constructor.name]().value) * 100;

        return this;
    }

    public percentageOfThis(unit: Unit): this {
        this.value = (unit.to[this.constructor.name]().value / this.value) * 100;

        return this;
    }
}
