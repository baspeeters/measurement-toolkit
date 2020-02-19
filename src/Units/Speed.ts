/**
 * This file is part of Measurement Toolkit
 *
 * (c) Bas Peeters <bas@peete.rs>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import {ICompoundUnit} from "./ICompoundUnit";
import * as Length from "./Length";
import {IUnitOfLength} from "./Length/IUnitOfLength";
import * as Time from "./Time";
import {IUnitOfTime} from "./Time/IUnitOfTime";
import {Unit} from "./Unit";

export class Speed extends Unit implements ICompoundUnit {
    public distance: IUnitOfLength;
    public time: IUnitOfTime;

    constructor(distance: IUnitOfLength, time: IUnitOfTime) {
        super();

        this.distance = distance;
        this.time = time;
    }

    public convert(unit: Speed): Speed {
        const distance = this.distance.to[unit.distance.constructor.name]();
        const time = this.time.to[unit.time.constructor.name]();

        const factor = unit.time.value / time.value;

        distance.value *= factor;
        time.value = unit.time.value;

        return new Speed(distance, time);
    }

    /**
     * Returns the time spent traveling over the given distance
     *
     * @param distance
     * @return IUnitOfTime
     */
    public getTimeOverDistance(distance: IUnitOfLength): IUnitOfTime {
        if (this.distance.constructor.name !== distance.constructor.name) {
            distance = distance.to[this.distance.constructor.name]();
        }

        // @ts-ignore
        return new Time[this.time.constructor.name](
            this.time.value * (distance.value / this.distance.value),
        );
    }

    /**
     * Returns the distance traveled after spending the given time
     *
     * @param duration
     * @return IUnitOfLength
     */
    public getDistanceOverTime(duration: IUnitOfLength): IUnitOfLength {
        if (this.time.constructor.name !== duration.constructor.name) {
            duration = duration.to[this.time.constructor.name]();
        }

        // @ts-ignore
        return new Length[this.distance.constructor.name](
            (this.distance.value / this.time.value)
            * duration.value,
        );
    }

    public subtract(unit: Speed): this {
        const convertedUnit = this.syncTypes(unit);
        const factor = this.getFactor(convertedUnit);

        this.distance.value -= convertedUnit.distance.value / factor;

        return this;
    }

    public add(unit: Speed): this {
        const convertedUnit = this.syncTypes(unit);
        const factor = this.getFactor(convertedUnit);

        this.distance.value += convertedUnit.distance.value / factor;

        return this;
    }

    public divideBy(unit: Speed): this {
        const convertedUnit = this.syncTypes(unit);
        const factor = this.getFactor(convertedUnit);

        this.distance.value /= convertedUnit.distance.value / factor;

        return this;
    }

    public multiply(unit: Speed): this {
        const convertedUnit = this.syncTypes(unit);
        const factor = this.getFactor(convertedUnit);

        this.distance.value *= convertedUnit.distance.value / factor;

        return this;
    }

    public percentageOf(unit: Speed): this {
        const convertedUnit = this.syncTypes(unit);
        const factor = this.getFactor(convertedUnit);

        this.distance.value = (
            (convertedUnit.distance.value / factor)
            / this.distance.value) * 100;

        return this;
    }

    private syncTypes(unit: Speed): Speed {
        const distance = unit.distance.to[this.distance.constructor.name]();
        const time = unit.time.to[this.time.constructor.name]();

        return new Speed(distance, time);
    }

    private getFactor(convertedUnit: Speed) {
        return convertedUnit.time.value / this.time.value;
    }
}
