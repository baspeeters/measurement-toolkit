import {expect} from "chai";
import {DerivedUnit} from "../../../../lib/Units/DerivedUnit";
import {Attogram} from "../../../../lib/Units/Mass/Metric/Attogram";
import {Centigram} from "../../../../lib/Units/Mass/Metric/Centigram";
import {Decagram} from "../../../../lib/Units/Mass/Metric/Decagram";
import {Decigram} from "../../../../lib/Units/Mass/Metric/Decigram";
import {Exagram} from "../../../../lib/Units/Mass/Metric/Exagram";
import {Femtogram} from "../../../../lib/Units/Mass/Metric/Femtogram";
import {Gigagram} from "../../../../lib/Units/Mass/Metric/Gigagram";
import {Gram} from "../../../../lib/Units/Mass/Metric/Gram";
import {Hectogram} from "../../../../lib/Units/Mass/Metric/Hectogram";
import {Kilogram} from "../../../../lib/Units/Mass/Metric/Kilogram";
import {Megagram} from "../../../../lib/Units/Mass/Metric/Megagram";
import {Microgram} from "../../../../lib/Units/Mass/Metric/Microgram";
import {Milligram} from "../../../../lib/Units/Mass/Metric/Milligram";
import {Nanogram} from "../../../../lib/Units/Mass/Metric/Nanogram";
import {Petagram} from "../../../../lib/Units/Mass/Metric/Petagram";
import {Picogram} from "../../../../lib/Units/Mass/Metric/Picogram";
import {Teragram} from "../../../../lib/Units/Mass/Metric/Teragram";
import {Yoctogram} from "../../../../lib/Units/Mass/Metric/Yoctogram";
import {Yottagram} from "../../../../lib/Units/Mass/Metric/Yottagram";
import {Zeptogram} from "../../../../lib/Units/Mass/Metric/Zeptogram";
import {Zettagram} from "../../../../lib/Units/Mass/Metric/Zettagram";

/**
 * This file is part of Unit Converter
 *
 * (c) Bas Peeters <bas@peete.rs>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
describe("Metric System", () => {
    it("should convert between metric units in whole numbers", () => {
        const grams = new Gram(1000);

        expect(grams.to.Yottagram().value.toExponential(0)).to.equal("1e-21");
        expect(grams.to.Zettagram().value.toExponential(0)).to.equal("1e-18");
        expect(grams.to.Exagram().value.toExponential(0)).to.equal("1e-15");
        expect(grams.to.Petagram().value.toExponential(0)).to.equal("1e-12");
        expect(grams.to.Teragram().value.toExponential(0)).to.equal("1e-9");
        expect(grams.to.Gigagram().value.toExponential(0)).to.equal("1e-6");
        expect(grams.to.Megagram().value.toExponential(0)).to.equal("1e-3");
        expect(grams.to.Kilogram().value.toFixed()).to.equal("1");
        expect(grams.to.Hectogram().value.toFixed()).to.equal("10");
        expect(grams.to.Decagram().value.toFixed()).to.equal("100");

        expect(grams.to.Gram().value.toFixed()).to.equal(grams.value.toFixed());

        expect(grams.to.Decigram().value.toFixed()).to.equal("10000");
        expect(grams.to.Centigram().value.toFixed()).to.equal("100000");
        expect(grams.to.Milligram().value.toFixed()).to.equal("1000000");
        expect(grams.to.Microgram().value.toExponential(0)).to.equal("1e+9");
        expect(grams.to.Nanogram().value.toExponential(0)).to.equal("1e+12");
        expect(grams.to.Picogram().value.toExponential(0)).to.equal("1e+15");
        expect(grams.to.Femtogram().value.toExponential(0)).to.equal("1e+18");
        expect(grams.to.Attogram().value.toExponential(0)).to.equal("1e+21");
        expect(grams.to.Zeptogram().value.toExponential(0)).to.equal("1e+24");
        expect(grams.to.Yoctogram().value.toExponential(0)).to.equal("1e+27");
    });

    it("should convert between metric units with fractions", () => {
        const grams = new Gram(36.823);

        expect(grams.to.Yottagram().value.toExponential(10)).to.equal("3.6823000000e-23");
        expect(grams.to.Zettagram().value.toExponential(10)).to.equal("3.6823000000e-20");
        expect(grams.to.Exagram().value.toExponential(10)).to.equal("3.6823000000e-17");
        expect(grams.to.Petagram().value.toExponential(10)).to.equal("3.6823000000e-14");
        expect(grams.to.Teragram().value.toExponential(10)).to.equal("3.6823000000e-11");
        expect(grams.to.Gigagram().value.toExponential(10)).to.equal("3.6823000000e-8");
        expect(grams.to.Megagram().value.toFixed(10)).to.equal("0.0000368230");
        expect(grams.to.Kilogram().value.toFixed(10)).to.equal("0.0368230000");
        expect(grams.to.Hectogram().value.toFixed(10)).to.equal("0.3682300000");
        expect(grams.to.Decagram().value.toFixed(10)).to.equal("3.6823000000");

        expect(grams.to.Gram().value.toExponential()).to.equal(grams.value.toExponential());

        expect(grams.to.Decigram().value.toFixed(10)).to.equal("368.2300000000");
        expect(grams.to.Centigram().value.toFixed(10)).to.equal("3682.3000000000");
        expect(grams.to.Milligram().value.toFixed(10)).to.equal("36823.0000000000");
        expect(grams.to.Microgram().value.toFixed(10)).to.equal("36823000.0000000000");
        expect(grams.to.Nanogram().value.toExponential(10)).to.equal("3.6823000000e+10");
        expect(grams.to.Picogram().value.toExponential(10)).to.equal("3.6823000000e+13");
        expect(grams.to.Femtogram().value.toExponential(10)).to.equal("3.6823000000e+16");
        expect(grams.to.Attogram().value.toExponential(10)).to.equal("3.6823000000e+19");
        expect(grams.to.Zeptogram().value.toExponential(10)).to.equal("3.6823000000e+22");
        expect(grams.to.Yoctogram().value.toExponential(10)).to.equal("3.6823000000e+25");
    });

    const kilogramDerivatives = [
        "Yottagram",
        "Zettagram",
        "Exagram",
        "Petagram",
        "Teragram",
        "Gigagram",
        "Megagram",
        "Kilogram",
        "Hectogram",
        "Decagram",
        "Gram",
        "Decigram",
        "Centigram",
        "Milligram",
        "Microgram",
        "Nanogram",
        "Picogram",
        "Femtogram",
        "Attogram",
        "Zeptogram",
        "Yoctogram",
    ];

    [
        new Yottagram(1),
        new Zettagram(1),
        new Exagram(1),
        new Petagram(1),
        new Teragram(1),
        new Gigagram(1),
        new Megagram(1),
        new Hectogram(1),
        new Decagram(1),
        new Gram(1),
        new Decigram(1),
        new Centigram(1),
        new Milligram(1),
        new Microgram(1),
        new Nanogram(1),
        new Picogram(1),
        new Femtogram(1),
        new Attogram(1),
        new Zeptogram(1),
        new Yoctogram(1),
    ].map((unit: DerivedUnit) => {
        it(`should implement ${unit.constructor.name}`, () => {
            expect(unit).to.be.an.instanceOf(DerivedUnit);
            expect(unit).to.have.property("baseUnit");
            expect(unit.baseUnit).to.be.an.instanceOf(Kilogram);
            expect(unit.to).to.respondTo("Kilogram");
            expect(unit.to.Kilogram()).to.be.an.instanceOf(Kilogram);

            kilogramDerivatives.map((converter: string) => {
                expect(unit.to).to.respondTo(converter);
            });
        });
    });

    it("should convert derived units of kilogram to kilogram and back", () => {
        const value = 72500;

        expect((new Yottagram(value)).to.Kilogram().value.toExponential(2)).to.equal("7.25e+25");
        expect((new Kilogram(7.25e+25)).to.Yottagram().value.toFixed()).to.equal(value.toFixed());

        expect((new Zettagram(value)).to.Kilogram().value.toExponential(2)).to.equal("7.25e+22");
        expect((new Kilogram(7.25e+22)).to.Zettagram().value.toFixed()).to.equal(value.toFixed());

        expect((new Exagram(value)).to.Kilogram().value.toExponential(2)).to.equal("7.25e+19");
        expect((new Kilogram(7.25e+19)).to.Exagram().value.toFixed()).to.equal(value.toFixed());

        expect((new Petagram(value)).to.Kilogram().value.toExponential(2)).to.equal("7.25e+16");
        expect((new Kilogram(7.25e+16)).to.Petagram().value.toFixed()).to.equal(value.toFixed());

        expect((new Teragram(value)).to.Kilogram().value.toExponential(2)).to.equal("7.25e+13");
        expect((new Kilogram(7.25e+13)).to.Teragram().value.toFixed()).to.equal(value.toFixed());

        expect((new Gigagram(value)).to.Kilogram().value.toExponential(2)).to.equal("7.25e+10");
        expect((new Kilogram(7.25e+10)).to.Gigagram().value.toFixed()).to.equal(value.toFixed());

        expect((new Megagram(value)).to.Kilogram().value.toFixed()).to.equal("72500000");
        expect((new Kilogram(72500000)).to.Megagram().value.toFixed()).to.equal(value.toFixed());

        expect((new Hectogram(value)).to.Kilogram().value.toFixed()).to.equal("7250");
        expect((new Kilogram(7250)).to.Hectogram().value.toFixed()).to.equal(value.toFixed());

        expect((new Decagram(value)).to.Kilogram().value.toFixed()).to.equal("725");
        expect((new Kilogram(725)).to.Decagram().value.toFixed()).to.equal(value.toFixed());

        expect((new Gram(value)).to.Kilogram().value.toFixed(9)).to.equal("72.500000000");
        expect((new Kilogram(72.5)).to.Gram().value.toFixed()).to.equal(value.toFixed());

        expect((new Decigram(value)).to.Kilogram().value.toPrecision(9)).to.equal("7.25000000");
        expect((new Kilogram(7.25)).to.Decigram().value.toFixed()).to.equal(value.toFixed());

        expect((new Centigram(value)).to.Kilogram().value.toPrecision(8)).to.equal("0.72500000");
        expect((new Kilogram(0.725)).to.Centigram().value.toFixed()).to.equal(value.toFixed());

        expect((new Milligram(value)).to.Kilogram().value.toPrecision(7)).to.equal("0.07250000");
        expect((new Kilogram(0.0725)).to.Milligram().value.toFixed()).to.equal(value.toFixed());

        expect((new Microgram(value)).to.Kilogram().value.toExponential(2)).to.equal("7.25e-5");
        expect((new Kilogram(7.25e-5)).to.Microgram().value.toFixed()).to.equal(value.toFixed());

        expect((new Nanogram(value)).to.Kilogram().value.toExponential(2)).to.equal("7.25e-8");
        expect((new Kilogram(7.25e-8)).to.Nanogram().value.toFixed()).to.equal(value.toFixed());

        expect((new Picogram(value)).to.Kilogram().value.toExponential(2)).to.equal("7.25e-11");
        expect((new Kilogram(7.25e-11)).to.Picogram().value.toFixed()).to.equal(value.toFixed());

        expect((new Femtogram(value)).to.Kilogram().value.toExponential(2)).to.equal("7.25e-14");
        expect((new Kilogram(7.25e-14)).to.Femtogram().value.toFixed()).to.equal(value.toFixed());

        expect((new Attogram(value)).to.Kilogram().value.toExponential(2)).to.equal("7.25e-17");
        expect((new Kilogram(7.25e-17)).to.Attogram().value.toFixed()).to.equal(value.toFixed());

        expect((new Zeptogram(value)).to.Kilogram().value.toExponential(2)).to.equal("7.25e-20");
        expect((new Kilogram(7.25e-20)).to.Zeptogram().value.toFixed()).to.equal(value.toFixed());

        expect((new Yoctogram(value)).to.Kilogram().value.toExponential(2)).to.equal("7.25e-23");
        expect((new Kilogram(7.25e-23)).to.Yoctogram().value.toFixed()).to.equal(value.toFixed());
    });
});
