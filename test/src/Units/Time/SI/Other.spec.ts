/**
 * This file is part of Measurement Toolkit
 *
 * (c) Bas Peeters <bas@peete.rs>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import {expect} from "chai";
import {Day} from "../../../../../src/Units/Time/Other/Day";
import {Hour} from "../../../../../src/Units/Time/Other/Hour";
import {Minute} from "../../../../../src/Units/Time/Other/Minute";

describe("SI Approved: Time", () => {
    it("should implement minute", () => {
        const minutes = new Minute(75);

        expect(minutes.to.Millisecond().value.toPrecision(10)).to.equal("4500000.000");
        expect(minutes.to.Second().value.toPrecision(6)).to.equal("4500.00");
        expect(minutes.to.Minute().value.toPrecision(6)).to.equal("75.0000");
        expect(minutes.to.Hour().value.toPrecision(6)).to.equal("1.25000");
        expect(minutes.to.Day().value.toPrecision(6)).to.equal("0.0520833");
    });

    it("should implement hour", () => {
        const hours = new Hour(12);

        expect(hours.to.Millisecond().value.toExponential(2)).to.equal("4.32e+7");
        expect(hours.to.Second().value.toPrecision(6)).to.equal("43200.0");
        expect(hours.to.Hour().value.toPrecision(6)).to.equal("12.0000");
        expect(hours.to.Day().value.toPrecision(6)).to.equal("0.500000");
    });

    it("should implement day", () => {
        const days = new Day(1.5);

        expect(days.to.Millisecond().value.toPrecision(4)).to.equal("1.296e+8");
        expect(days.to.Second().value.toPrecision(8)).to.equal("129600.00");
        expect(days.to.Hour().value.toPrecision(6)).to.equal("36.0000");
        expect(days.to.Day().value.toPrecision(6)).to.equal("1.50000");
    });

    it("Should have symbols", () => {
        const day = new Day(6);
        expect(day.toString()).to.equal("6 d");

        const hour = new Hour(4);
        expect(hour.toString()).to.equal("4 hr");

        const minute = new Minute(2);
        expect(minute.toString()).to.equal("2 min");
    });
});
