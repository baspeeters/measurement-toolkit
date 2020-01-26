import {expect} from "chai";
import {Attosecond} from "../../../../../src/Units/Time/SI/Attosecond";
import {Centisecond} from "../../../../../src/Units/Time/SI/Centisecond";
import {Decasecond} from "../../../../../src/Units/Time/SI/Decasecond";
import {Decisecond} from "../../../../../src/Units/Time/SI/Decisecond";
import {Exasecond} from "../../../../../src/Units/Time/SI/Exasecond";
import {Femtosecond} from "../../../../../src/Units/Time/SI/Femtosecond";
import {Gigasecond} from "../../../../../src/Units/Time/SI/Gigasecond";
import {Hectosecond} from "../../../../../src/Units/Time/SI/Hectosecond";
import {Kilosecond} from "../../../../../src/Units/Time/SI/Kilosecond";
import {Megasecond} from "../../../../../src/Units/Time/SI/Megasecond";
import {Microsecond} from "../../../../../src/Units/Time/SI/Microsecond";
import {Millisecond} from "../../../../../src/Units/Time/SI/Millisecond";
import {Nanosecond} from "../../../../../src/Units/Time/SI/Nanosecond";
import {Petasecond} from "../../../../../src/Units/Time/SI/Petasecond";
import {Picosecond} from "../../../../../src/Units/Time/SI/Picosecond";
import {Second} from "../../../../../src/Units/Time/SI/Second";
import {SiDerivedUnit} from "../../../../../src/Units/Time/SI/SiDerivedUnit";
import {Terasecond} from "../../../../../src/Units/Time/SI/Terasecond";
import {Yoctosecond} from "../../../../../src/Units/Time/SI/Yoctosecond";
import {Yottasecond} from "../../../../../src/Units/Time/SI/Yottasecond";
import {Zeptosecond} from "../../../../../src/Units/Time/SI/Zeptosecond";
import {Zettasecond} from "../../../../../src/Units/Time/SI/Zettasecond";

/**
 * This file is part of Measurement Toolkit
 *
 * (c) Bas Peeters <bas@peete.rs>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
describe("SI : Time", () => {
    it("should convert between SI units in whole numbers", () => {
        const kiloseconds = new Kilosecond(1);

        expect(kiloseconds.to.Yottasecond().value.toExponential(0)).to.equal("1e-21");
        expect(kiloseconds.to.Zettasecond().value.toExponential(0)).to.equal("1e-18");
        expect(kiloseconds.to.Exasecond().value.toExponential(0)).to.equal("1e-15");
        expect(kiloseconds.to.Petasecond().value.toExponential(0)).to.equal("1e-12");
        expect(kiloseconds.to.Terasecond().value.toExponential(0)).to.equal("1e-9");
        expect(kiloseconds.to.Gigasecond().value.toExponential(0)).to.equal("1e-6");
        expect(kiloseconds.to.Megasecond().value.toExponential(0)).to.equal("1e-3");
        expect(kiloseconds.to.Kilosecond().value.toFixed()).to.equal("1");
        expect(kiloseconds.to.Hectosecond().value.toFixed()).to.equal("10");
        expect(kiloseconds.to.Decasecond().value.toFixed()).to.equal("100");

        expect(kiloseconds.to.Second().value.toFixed()).to.equal("1000");

        expect(kiloseconds.to.Decisecond().value.toFixed()).to.equal("10000");
        expect(kiloseconds.to.Centisecond().value.toFixed()).to.equal("100000");
        expect(kiloseconds.to.Millisecond().value.toFixed()).to.equal("1000000");
        expect(kiloseconds.to.Microsecond().value.toExponential(0)).to.equal("1e+9");
        expect(kiloseconds.to.Nanosecond().value.toExponential(0)).to.equal("1e+12");
        expect(kiloseconds.to.Picosecond().value.toExponential(0)).to.equal("1e+15");
        expect(kiloseconds.to.Femtosecond().value.toExponential(0)).to.equal("1e+18");
        expect(kiloseconds.to.Attosecond().value.toExponential(0)).to.equal("1e+21");
        expect(kiloseconds.to.Zeptosecond().value.toExponential(0)).to.equal("1e+24");
        expect(kiloseconds.to.Yoctosecond().value.toExponential(0)).to.equal("1e+27");
    });

    it("should convert between SI units with fractions", () => {
        const kiloseconds = new Kilosecond(0.036823);

        expect(kiloseconds.to.Yottasecond().value.toExponential(10)).to.equal("3.6823000000e-23");
        expect(kiloseconds.to.Zettasecond().value.toExponential(10)).to.equal("3.6823000000e-20");
        expect(kiloseconds.to.Exasecond().value.toExponential(10)).to.equal("3.6823000000e-17");
        expect(kiloseconds.to.Petasecond().value.toExponential(10)).to.equal("3.6823000000e-14");
        expect(kiloseconds.to.Terasecond().value.toExponential(10)).to.equal("3.6823000000e-11");
        expect(kiloseconds.to.Gigasecond().value.toExponential(10)).to.equal("3.6823000000e-8");
        expect(kiloseconds.to.Megasecond().value.toFixed(10)).to.equal("0.0000368230");
        expect(kiloseconds.to.Kilosecond().value.toFixed(10)).to.equal("0.0368230000");
        expect(kiloseconds.to.Hectosecond().value.toFixed(10)).to.equal("0.3682300000");
        expect(kiloseconds.to.Decasecond().value.toFixed(10)).to.equal("3.6823000000");

        expect(kiloseconds.to.Second().value.toFixed(10)).to.equal("36.8230000000");

        expect(kiloseconds.to.Decisecond().value.toFixed(10)).to.equal("368.2300000000");
        expect(kiloseconds.to.Centisecond().value.toFixed(10)).to.equal("3682.3000000000");
        expect(kiloseconds.to.Millisecond().value.toFixed(10)).to.equal("36823.0000000000");
        expect(kiloseconds.to.Microsecond().value.toFixed(10)).to.equal("36823000.0000000000");
        expect(kiloseconds.to.Nanosecond().value.toExponential(10)).to.equal("3.6823000000e+10");
        expect(kiloseconds.to.Picosecond().value.toExponential(10)).to.equal("3.6823000000e+13");
        expect(kiloseconds.to.Femtosecond().value.toExponential(10)).to.equal("3.6823000000e+16");
        expect(kiloseconds.to.Attosecond().value.toExponential(10)).to.equal("3.6823000000e+19");
        expect(kiloseconds.to.Zeptosecond().value.toExponential(10)).to.equal("3.6823000000e+22");
        expect(kiloseconds.to.Yoctosecond().value.toExponential(10)).to.equal("3.6823000000e+25");
    });

    const secondDerivatives = [
        "Yottasecond",
        "Zettasecond",
        "Exasecond",
        "Petasecond",
        "Terasecond",
        "Gigasecond",
        "Megasecond",
        "Kilosecond",
        "Hectosecond",
        "Decasecond",
        "Second",
        "Decisecond",
        "Centisecond",
        "Millisecond",
        "Microsecond",
        "Nanosecond",
        "Picosecond",
        "Femtosecond",
        "Attosecond",
        "Zeptosecond",
        "Yoctosecond",
    ];

    [
        new Yottasecond(1),
        new Zettasecond(1),
        new Exasecond(1),
        new Petasecond(1),
        new Terasecond(1),
        new Gigasecond(1),
        new Megasecond(1),
        new Hectosecond(1),
        new Decasecond(1),
        new Kilosecond(1),
        new Decisecond(1),
        new Centisecond(1),
        new Millisecond(1),
        new Microsecond(1),
        new Nanosecond(1),
        new Picosecond(1),
        new Femtosecond(1),
        new Attosecond(1),
        new Zeptosecond(1),
        new Yoctosecond(1),
    ].map((unit: SiDerivedUnit) => {
        it(`should implement ${unit.constructor.name}`, () => {
            expect(unit).to.be.an.instanceOf(SiDerivedUnit);
            expect(unit).to.have.property("baseUnit");
            expect(unit.baseUnit).to.be.an.instanceOf(Second);
            expect(unit.to).to.respondTo("Second");
            expect(unit.to.Second()).to.be.an.instanceOf(Second);

            secondDerivatives.map((converter: string) => {
                expect(unit.to).to.respondTo(converter);
            });
        });
    });

    it("should convert derived units of second to second and back", () => {
        const value = 72.5;

        expect((new Yottasecond(value)).to.Second().value.toExponential(2)).to.equal("7.25e+25");
        expect((new Second(7.25e+25)).to.Yottasecond().value.toFixed()).to.equal(value.toFixed());

        expect((new Zettasecond(value)).to.Second().value.toExponential(2)).to.equal("7.25e+22");
        expect((new Second(7.25e+22)).to.Zettasecond().value.toFixed()).to.equal(value.toFixed());

        expect((new Exasecond(value)).to.Second().value.toExponential(2)).to.equal("7.25e+19");
        expect((new Second(7.25e+19)).to.Exasecond().value.toFixed()).to.equal(value.toFixed());

        expect((new Petasecond(value)).to.Second().value.toExponential(2)).to.equal("7.25e+16");
        expect((new Second(7.25e+16)).to.Petasecond().value.toFixed()).to.equal(value.toFixed());

        expect((new Terasecond(value)).to.Second().value.toExponential(2)).to.equal("7.25e+13");
        expect((new Second(7.25e+13)).to.Terasecond().value.toFixed()).to.equal(value.toFixed());

        expect((new Gigasecond(value)).to.Second().value.toExponential(2)).to.equal("7.25e+10");
        expect((new Second(7.25e+10)).to.Gigasecond().value.toFixed()).to.equal(value.toFixed());

        expect((new Megasecond(value)).to.Second().value.toFixed()).to.equal("72500000");
        expect((new Second(72500000)).to.Megasecond().value.toFixed()).to.equal(value.toFixed());

        expect((new Kilosecond(value)).to.Second().value.toFixed(9)).to.equal("72500.000000000");
        expect((new Second(72500)).to.Kilosecond().value.toFixed()).to.equal(value.toFixed());

        expect((new Hectosecond(value)).to.Second().value.toFixed()).to.equal("7250");
        expect((new Second(7250)).to.Hectosecond().value.toFixed()).to.equal(value.toFixed());

        expect((new Decasecond(value)).to.Second().value.toFixed()).to.equal("725");
        expect((new Second(725)).to.Decasecond().value.toFixed()).to.equal(value.toFixed());

        expect((new Decisecond(value)).to.Second().value.toPrecision(9)).to.equal("7.25000000");
        expect((new Second(7.25)).to.Decisecond().value.toFixed()).to.equal(value.toFixed());

        expect((new Centisecond(value)).to.Second().value.toPrecision(8)).to.equal("0.72500000");
        expect((new Second(0.725)).to.Centisecond().value.toFixed()).to.equal(value.toFixed());

        expect((new Millisecond(value)).to.Second().value.toPrecision(7)).to.equal("0.07250000");
        expect((new Second(0.0725)).to.Millisecond().value.toFixed()).to.equal(value.toFixed());

        expect((new Microsecond(value)).to.Second().value.toExponential(2)).to.equal("7.25e-5");
        expect((new Second(7.25e-5)).to.Microsecond().value.toFixed()).to.equal(value.toFixed());

        expect((new Nanosecond(value)).to.Second().value.toExponential(2)).to.equal("7.25e-8");
        expect((new Second(7.25e-8)).to.Nanosecond().value.toFixed()).to.equal(value.toFixed());

        expect((new Picosecond(value)).to.Second().value.toExponential(2)).to.equal("7.25e-11");
        expect((new Second(7.25e-11)).to.Picosecond().value.toFixed()).to.equal(value.toFixed());

        expect((new Femtosecond(value)).to.Second().value.toExponential(2)).to.equal("7.25e-14");
        expect((new Second(7.25e-14)).to.Femtosecond().value.toFixed()).to.equal(value.toFixed());

        expect((new Attosecond(value)).to.Second().value.toExponential(2)).to.equal("7.25e-17");
        expect((new Second(7.25e-17)).to.Attosecond().value.toFixed()).to.equal(value.toFixed());

        expect((new Zeptosecond(value)).to.Second().value.toExponential(2)).to.equal("7.25e-20");
        expect((new Second(7.25e-20)).to.Zeptosecond().value.toFixed()).to.equal(value.toFixed());

        expect((new Yoctosecond(value)).to.Second().value.toExponential(2)).to.equal("7.25e-23");
        expect((new Second(7.25e-23)).to.Yoctosecond().value.toFixed()).to.equal(value.toFixed());
    });
});