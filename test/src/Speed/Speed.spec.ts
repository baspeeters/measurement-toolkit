/**
 * This file is part of Measurement Toolkit
 *
 * (c) Bas Peeters <bas@peete.rs>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import {expect} from "chai";
import {Centimeter} from "../../../src/Units/Length/SI/Centimeter";
import {Hectometer} from "../../../src/Units/Length/SI/Hectometer";
import {Kilometer} from "../../../src/Units/Length/SI/Kilometer";
import {Meter} from "../../../src/Units/Length/SI/Meter";
import {Millimeter} from "../../../src/Units/Length/SI/Millimeter";
import {Speed} from "../../../src/Units/Speed";
import {Day, Hour, Minute, Second} from "../../../src/Units/Time";

describe("Speed", () => {
    it("should represent distance over time", () => {
        const mps = new Speed(new Meter(15), new Second(1));

        expect(mps.distance).to.be.an.instanceOf(Meter);
        expect(mps.distance.value).to.equal(15);
        expect(mps.time).to.be.an.instanceOf(Second);
        expect(mps.time.value).to.equal(1);

        const km5h = new Speed(new Kilometer(2.5), new Hour(5));

        expect(km5h.distance).to.be.an.instanceOf(Kilometer);
        expect(km5h.distance.value).to.equal(2.5);
        expect(km5h.time).to.be.an.instanceOf(Hour);
        expect(km5h.time.value).to.equal(5);
    });

    it("should calculate time over distance", () => {
        // 150 km/h over half a kilometer should amount to 0.003 hours
        const kmh = new Speed(new Kilometer(150), new Hour(1));
        const timeOverDistance = kmh.getTimeOverDistance(new Kilometer(0.5));

        expect(timeOverDistance).to.be.an.instanceOf(Hour);
        expect(timeOverDistance.value.toPrecision(10)).to.equal("0.003333333333");
    });

    it("should calculate time over distance with a different unit of length for distance", () => {
        // 5 km/h over 10 kilometers (10,000 meters) should amount to 2 hours
        const hmm = new Speed(new Kilometer(5), new Hour(1));
        const timeOverDistance = hmm.getTimeOverDistance(new Meter(10000));

        expect(timeOverDistance).to.be.an.instanceOf(Hour);
        expect(timeOverDistance.value).to.equal(2);
    });

    it("should calculate time over distance with time value greater than 1", () => {
        // 5 km/h (5 kilometers per 60 minutes) over 10 kilometers should amount to 2 hours (120 minutes)
        const hmm = new Speed(new Kilometer(5), new Minute(60));
        const timeOverDistance = hmm.getTimeOverDistance(new Hectometer(100));

        expect(timeOverDistance).to.be.an.instanceOf(Minute);
        expect(timeOverDistance.value).to.equal(120);
        expect(timeOverDistance.to.Hour().value).to.equal(2);
    });

    it("should calculate distance over time", () => {
        // 80 km/h over 2 hours should amount to 160 kilometers
        const kmh = new Speed(new Kilometer(80), new Hour(1));
        const distanceOverTime = kmh.getDistanceOverTime(new Hour(2));

        expect(distanceOverTime).to.be.an.instanceOf(Kilometer);
        expect(distanceOverTime.value).to.equal(160);
    });

    it("should calculate distance over time with a different unit of time for duration", () => {
        // 20 km per 2.5h over 5 hours (300 minutes) should amount to 40 kilometers
        const kmh = new Speed(new Kilometer(20), new Hour(2.5));
        const distanceOverTime = kmh.getDistanceOverTime(new Minute(300));

        expect(distanceOverTime).to.be.an.instanceOf(Kilometer);
        expect(distanceOverTime.value).to.equal(40);
    });

    it("should convert to another unit of speed", () => {
        const kmPerH = new Speed(new Kilometer(3), new Hour(2));
        const mPerM = new Speed(new Meter(4205), new Minute(20));

        const converted = kmPerH.convert(mPerM);

        expect(converted.distance).to.be.an.instanceOf(Meter);
        expect(converted.time).to.be.an.instanceOf(Minute);

        expect(converted.distance.value.toPrecision(10)).to.equal("500.0000000");
        expect(converted.time.value).to.equal(20);
    });

    it("should subtract another unit of speed", () => {
        const kmPerMinute = new Speed(new Kilometer(14), new Minute(21));
        const mPerDay = new Speed(new Meter(8000), new Day(2));

        const subtracted = kmPerMinute.subtract(mPerDay);

        expect(subtracted.distance).to.be.an.instanceOf(Kilometer);
        expect(subtracted.time).to.be.an.instanceOf(Minute);

        expect(subtracted.distance.value.toExponential(16)).to.equal("1.3941666666666666e+1");
        expect(subtracted.time.value).to.equal(21);
    });

    it("should add another unit of speed", () => {
        const mPerHour = new Speed(new Meter(500), new Hour(2));
        const kmPerDay = new Speed(new Kilometer(5), new Day(5));

        const added = mPerHour.add(kmPerDay);

        expect(added.distance).to.be.an.instanceOf(Meter);
        expect(added.time).to.be.an.instanceOf(Hour);

        expect(added.distance.value.toExponential(10)).to.equal("5.8333333333e+2");
        expect(added.time.value).to.equal(2);
    });

    it("should divide another unit by itself", () => {
        const mmPerMinute = new Speed(new Millimeter(2000), new Minute(3));
        const cmPerSecond = new Speed(new Centimeter(5), new Second(12));

        const divided = mmPerMinute.divideBy(cmPerSecond);

        expect(divided.distance).to.be.an.instanceOf(Millimeter);
        expect(divided.time).to.be.an.instanceOf(Minute);

        expect(divided.distance.value.toExponential(10)).to.equal("2.6666666667e+0");
        expect(divided.time.value).to.equal(3);
    });

    it("should multiply by another unit", () => {
        const mPerSecond = new Speed(new Meter(216), new Second(2));
        const kmPerHour = new Speed(new Kilometer(150), new Hour(3));

        const multiplied = mPerSecond.multiply(kmPerHour);

        expect(multiplied.distance).to.be.an.instanceOf(Meter);
        expect(multiplied.time).to.be.an.instanceOf(Second);

        expect(multiplied.distance.value.toExponential(10)).to.equal("6.0000000000e+3");
        expect(multiplied.time.value).to.equal(2);
    });

    it("should calculate another unit's percentage of itself", () => {
        const hmPerDay = new Speed(new Hectometer(736), new Day(1));
        const kmPerHour = new Speed(new Kilometer(3), new Hour(2));

        const percentageOfThis = hmPerDay.percentageOf(kmPerHour);

        expect(percentageOfThis.distance).to.be.an.instanceOf(Hectometer);
        expect(percentageOfThis.time).to.be.an.instanceOf(Day);

        expect(percentageOfThis.distance.value.toPrecision(10)).to.equal("48.91304348");
        expect(percentageOfThis.time.value).to.equal(1);
    });
});
