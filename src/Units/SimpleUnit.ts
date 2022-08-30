/**
 * This file is part of Measurement Toolkit
 *
 * (c) Bas Peeters <bas@peete.rs>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import {ISimpleUnit} from './ISimpleUnit';
import {Unit} from './Unit';

export abstract class SimpleUnit extends Unit implements ISimpleUnit {
    public abstract symbol: string;

    public value: number;

    protected converters: {[key: string]: () => ISimpleUnit} = {};

    constructor(value: number) {
        super();

        this.value = value;
    }

    public getConverters(): {[key: string]: () => ISimpleUnit} {
        return this.converters;
    }

    public subtract(unit: ISimpleUnit): this {
        this.value -= unit.to[this.constructor.name]().value;

        return this;
    }

    public add(unit: ISimpleUnit): this {
        this.value += unit.to[this.constructor.name]().value;

        return this;
    }

    public divideBy(unit: ISimpleUnit): this {
        this.value /= unit.to[this.constructor.name]().value;

        return this;
    }

    public dividedBy(unit: ISimpleUnit): this {
        this.value = unit.to[this.constructor.name]().value / this.value;

        return this;
    }

    public multiply(unit: ISimpleUnit): this {
        this.value *= unit.to[this.constructor.name]().value;

        return this;
    }

    public percentageOf(unit: ISimpleUnit): this {
        this.value = (this.value / unit.to[this.constructor.name]().value) * 100;

        return this;
    }

    public percentageOfThis(unit: ISimpleUnit): this {
        this.value = (unit.to[this.constructor.name]().value / this.value) * 100;

        return this;
    }

    public toString(): string {
        return `${this.value} ${this.symbol}`;
    }
}
