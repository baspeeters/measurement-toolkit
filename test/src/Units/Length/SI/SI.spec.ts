import {expect} from "chai";
import {Attometer} from "../../../../../src/Units/Length/SI/Attometer";
import {Centimeter} from "../../../../../src/Units/Length/SI/Centimeter";
import {Decameter} from "../../../../../src/Units/Length/SI/Decameter";
import {Decimeter} from "../../../../../src/Units/Length/SI/Decimeter";
import {Exameter} from "../../../../../src/Units/Length/SI/Exameter";
import {Femtometer} from "../../../../../src/Units/Length/SI/Femtometer";
import {Gigameter} from "../../../../../src/Units/Length/SI/Gigameter";
import {Hectometer} from "../../../../../src/Units/Length/SI/Hectometer";
import {Kilometer} from "../../../../../src/Units/Length/SI/Kilometer";
import {Megameter} from "../../../../../src/Units/Length/SI/Megameter";
import {Meter} from "../../../../../src/Units/Length/SI/Meter";
import {Micrometer} from "../../../../../src/Units/Length/SI/Micrometer";
import {Millimeter} from "../../../../../src/Units/Length/SI/Millimeter";
import {Nanometer} from "../../../../../src/Units/Length/SI/Nanometer";
import {Petameter} from "../../../../../src/Units/Length/SI/Petameter";
import {Picometer} from "../../../../../src/Units/Length/SI/Picometer";
import {SiDerivedUnit} from "../../../../../src/Units/Length/SI/SiDerivedUnit";
import {Terameter} from "../../../../../src/Units/Length/SI/Terameter";
import {Yoctometer} from "../../../../../src/Units/Length/SI/Yoctometer";
import {Yottameter} from "../../../../../src/Units/Length/SI/Yottameter";
import {Zeptometer} from "../../../../../src/Units/Length/SI/Zeptometer";
import {Zettameter} from "../../../../../src/Units/Length/SI/Zettameter";

/**
 * This file is part of Measurement Toolkit
 *
 * (c) Bas Peeters <bas@peete.rs>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
describe("SI : Length", () => {
    it("should convert between SI units in whole numbers", () => {
        const kilometers = new Kilometer(1);

        expect(kilometers.to.Yottameter().value.toExponential(0)).to.equal("1e-21");
        expect(kilometers.to.Zettameter().value.toExponential(0)).to.equal("1e-18");
        expect(kilometers.to.Exameter().value.toExponential(0)).to.equal("1e-15");
        expect(kilometers.to.Petameter().value.toExponential(0)).to.equal("1e-12");
        expect(kilometers.to.Terameter().value.toExponential(0)).to.equal("1e-9");
        expect(kilometers.to.Gigameter().value.toExponential(0)).to.equal("1e-6");
        expect(kilometers.to.Megameter().value.toExponential(0)).to.equal("1e-3");
        expect(kilometers.to.Kilometer().value.toFixed()).to.equal("1");
        expect(kilometers.to.Hectometer().value.toFixed()).to.equal("10");
        expect(kilometers.to.Decameter().value.toFixed()).to.equal("100");

        expect(kilometers.to.Meter().value.toFixed()).to.equal("1000");

        expect(kilometers.to.Decimeter().value.toFixed()).to.equal("10000");
        expect(kilometers.to.Centimeter().value.toFixed()).to.equal("100000");
        expect(kilometers.to.Millimeter().value.toFixed()).to.equal("1000000");
        expect(kilometers.to.Micrometer().value.toExponential(0)).to.equal("1e+9");
        expect(kilometers.to.Nanometer().value.toExponential(0)).to.equal("1e+12");
        expect(kilometers.to.Picometer().value.toExponential(0)).to.equal("1e+15");
        expect(kilometers.to.Femtometer().value.toExponential(0)).to.equal("1e+18");
        expect(kilometers.to.Attometer().value.toExponential(0)).to.equal("1e+21");
        expect(kilometers.to.Zeptometer().value.toExponential(0)).to.equal("1e+24");
        expect(kilometers.to.Yoctometer().value.toExponential(0)).to.equal("1e+27");
    });

    it("should convert between SI units with fractions", () => {
        const kilometers = new Kilometer(0.036823);

        expect(kilometers.to.Yottameter().value.toExponential(10)).to.equal("3.6823000000e-23");
        expect(kilometers.to.Zettameter().value.toExponential(10)).to.equal("3.6823000000e-20");
        expect(kilometers.to.Exameter().value.toExponential(10)).to.equal("3.6823000000e-17");
        expect(kilometers.to.Petameter().value.toExponential(10)).to.equal("3.6823000000e-14");
        expect(kilometers.to.Terameter().value.toExponential(10)).to.equal("3.6823000000e-11");
        expect(kilometers.to.Gigameter().value.toExponential(10)).to.equal("3.6823000000e-8");
        expect(kilometers.to.Megameter().value.toFixed(10)).to.equal("0.0000368230");
        expect(kilometers.to.Kilometer().value.toFixed(10)).to.equal("0.0368230000");
        expect(kilometers.to.Hectometer().value.toFixed(10)).to.equal("0.3682300000");
        expect(kilometers.to.Decameter().value.toFixed(10)).to.equal("3.6823000000");

        expect(kilometers.to.Meter().value.toFixed(10)).to.equal("36.8230000000");

        expect(kilometers.to.Decimeter().value.toFixed(10)).to.equal("368.2300000000");
        expect(kilometers.to.Centimeter().value.toFixed(10)).to.equal("3682.3000000000");
        expect(kilometers.to.Millimeter().value.toFixed(10)).to.equal("36823.0000000000");
        expect(kilometers.to.Micrometer().value.toFixed(10)).to.equal("36823000.0000000000");
        expect(kilometers.to.Nanometer().value.toExponential(10)).to.equal("3.6823000000e+10");
        expect(kilometers.to.Picometer().value.toExponential(10)).to.equal("3.6823000000e+13");
        expect(kilometers.to.Femtometer().value.toExponential(10)).to.equal("3.6823000000e+16");
        expect(kilometers.to.Attometer().value.toExponential(10)).to.equal("3.6823000000e+19");
        expect(kilometers.to.Zeptometer().value.toExponential(10)).to.equal("3.6823000000e+22");
        expect(kilometers.to.Yoctometer().value.toExponential(10)).to.equal("3.6823000000e+25");
    });

    const meterDerivatives = [
        "Yottameter",
        "Zettameter",
        "Exameter",
        "Petameter",
        "Terameter",
        "Gigameter",
        "Megameter",
        "Kilometer",
        "Hectometer",
        "Decameter",
        "Meter",
        "Decimeter",
        "Centimeter",
        "Millimeter",
        "Micrometer",
        "Nanometer",
        "Picometer",
        "Femtometer",
        "Attometer",
        "Zeptometer",
        "Yoctometer",
    ];

    [
        new Yottameter(1),
        new Zettameter(1),
        new Exameter(1),
        new Petameter(1),
        new Terameter(1),
        new Gigameter(1),
        new Megameter(1),
        new Hectometer(1),
        new Decameter(1),
        new Kilometer(1),
        new Decimeter(1),
        new Centimeter(1),
        new Millimeter(1),
        new Micrometer(1),
        new Nanometer(1),
        new Picometer(1),
        new Femtometer(1),
        new Attometer(1),
        new Zeptometer(1),
        new Yoctometer(1),
    ].map((unit: SiDerivedUnit) => {
        it(`should implement ${unit.constructor.name}`, () => {
            expect(unit).to.be.an.instanceOf(SiDerivedUnit);
            expect(unit).to.have.property("baseUnit");
            expect(unit.baseUnit).to.be.an.instanceOf(Meter);
            expect(unit.to).to.respondTo("Meter");
            expect(unit.to.Meter()).to.be.an.instanceOf(Meter);

            meterDerivatives.map((converter: string) => {
                expect(unit.to).to.respondTo(converter);
            });
        });
    });

    it("should convert derived units of meter to meter and back", () => {
        const value = 72.5;

        expect((new Yottameter(value)).to.Meter().value.toExponential(2)).to.equal("7.25e+25");
        expect((new Meter(7.25e+25)).to.Yottameter().value.toFixed()).to.equal(value.toFixed());

        expect((new Zettameter(value)).to.Meter().value.toExponential(2)).to.equal("7.25e+22");
        expect((new Meter(7.25e+22)).to.Zettameter().value.toFixed()).to.equal(value.toFixed());

        expect((new Exameter(value)).to.Meter().value.toExponential(2)).to.equal("7.25e+19");
        expect((new Meter(7.25e+19)).to.Exameter().value.toFixed()).to.equal(value.toFixed());

        expect((new Petameter(value)).to.Meter().value.toExponential(2)).to.equal("7.25e+16");
        expect((new Meter(7.25e+16)).to.Petameter().value.toFixed()).to.equal(value.toFixed());

        expect((new Terameter(value)).to.Meter().value.toExponential(2)).to.equal("7.25e+13");
        expect((new Meter(7.25e+13)).to.Terameter().value.toFixed()).to.equal(value.toFixed());

        expect((new Gigameter(value)).to.Meter().value.toExponential(2)).to.equal("7.25e+10");
        expect((new Meter(7.25e+10)).to.Gigameter().value.toFixed()).to.equal(value.toFixed());

        expect((new Megameter(value)).to.Meter().value.toFixed()).to.equal("72500000");
        expect((new Meter(72500000)).to.Megameter().value.toFixed()).to.equal(value.toFixed());

        expect((new Kilometer(value)).to.Meter().value.toFixed(9)).to.equal("72500.000000000");
        expect((new Meter(72500)).to.Kilometer().value.toFixed()).to.equal(value.toFixed());

        expect((new Hectometer(value)).to.Meter().value.toFixed()).to.equal("7250");
        expect((new Meter(7250)).to.Hectometer().value.toFixed()).to.equal(value.toFixed());

        expect((new Decameter(value)).to.Meter().value.toFixed()).to.equal("725");
        expect((new Meter(725)).to.Decameter().value.toFixed()).to.equal(value.toFixed());

        expect((new Decimeter(value)).to.Meter().value.toPrecision(9)).to.equal("7.25000000");
        expect((new Meter(7.25)).to.Decimeter().value.toFixed()).to.equal(value.toFixed());

        expect((new Centimeter(value)).to.Meter().value.toPrecision(8)).to.equal("0.72500000");
        expect((new Meter(0.725)).to.Centimeter().value.toFixed()).to.equal(value.toFixed());

        expect((new Millimeter(value)).to.Meter().value.toPrecision(7)).to.equal("0.07250000");
        expect((new Meter(0.0725)).to.Millimeter().value.toFixed()).to.equal(value.toFixed());

        expect((new Micrometer(value)).to.Meter().value.toExponential(2)).to.equal("7.25e-5");
        expect((new Meter(7.25e-5)).to.Micrometer().value.toFixed()).to.equal(value.toFixed());

        expect((new Nanometer(value)).to.Meter().value.toExponential(2)).to.equal("7.25e-8");
        expect((new Meter(7.25e-8)).to.Nanometer().value.toFixed()).to.equal(value.toFixed());

        expect((new Picometer(value)).to.Meter().value.toExponential(2)).to.equal("7.25e-11");
        expect((new Meter(7.25e-11)).to.Picometer().value.toFixed()).to.equal(value.toFixed());

        expect((new Femtometer(value)).to.Meter().value.toExponential(2)).to.equal("7.25e-14");
        expect((new Meter(7.25e-14)).to.Femtometer().value.toFixed()).to.equal(value.toFixed());

        expect((new Attometer(value)).to.Meter().value.toExponential(2)).to.equal("7.25e-17");
        expect((new Meter(7.25e-17)).to.Attometer().value.toFixed()).to.equal(value.toFixed());

        expect((new Zeptometer(value)).to.Meter().value.toExponential(2)).to.equal("7.25e-20");
        expect((new Meter(7.25e-20)).to.Zeptometer().value.toFixed()).to.equal(value.toFixed());

        expect((new Yoctometer(value)).to.Meter().value.toExponential(2)).to.equal("7.25e-23");
        expect((new Meter(7.25e-23)).to.Yoctometer().value.toFixed()).to.equal(value.toFixed());
    });
});
