/**
 * This file is part of Measurement Toolkit
 *
 * (c) Bas Peeters <bas@peete.rs>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import {IUnit} from "./IUnit";

export abstract class Unit implements IUnit {
    protected converters: {[key: string]: () => IUnit} = {};

    get to(): any {
        return this.getConverters();
    }

    public getConverters() {
        return this.converters;
    }

    public abstract add(unit: IUnit): this;

    public abstract divideBy(unit: IUnit): this;

    public abstract dividedBy(unit: IUnit): this;

    public abstract multiply(unit: IUnit): this;

    public abstract percentageOf(unit: IUnit): this;

    public abstract percentageOfThis(unit: IUnit): this;

    public abstract subtract(unit: IUnit): this;
}
