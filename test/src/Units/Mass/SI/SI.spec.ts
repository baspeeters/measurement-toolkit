import {expect} from "chai";
import {Attogram} from "../../../../../src/Units/Mass/SI/Attogram";
import {Centigram} from "../../../../../src/Units/Mass/SI/Centigram";
import {Decagram} from "../../../../../src/Units/Mass/SI/Decagram";
import {Decigram} from "../../../../../src/Units/Mass/SI/Decigram";
import {Exagram} from "../../../../../src/Units/Mass/SI/Exagram";
import {Femtogram} from "../../../../../src/Units/Mass/SI/Femtogram";
import {Gigagram} from "../../../../../src/Units/Mass/SI/Gigagram";
import {Gram} from "../../../../../src/Units/Mass/SI/Gram";
import {Hectogram} from "../../../../../src/Units/Mass/SI/Hectogram";
import {Kilogram} from "../../../../../src/Units/Mass/SI/Kilogram";
import {Megagram} from "../../../../../src/Units/Mass/SI/Megagram";
import {Microgram} from "../../../../../src/Units/Mass/SI/Microgram";
import {Milligram} from "../../../../../src/Units/Mass/SI/Milligram";
import {Nanogram} from "../../../../../src/Units/Mass/SI/Nanogram";
import {Petagram} from "../../../../../src/Units/Mass/SI/Petagram";
import {Picogram} from "../../../../../src/Units/Mass/SI/Picogram";
import {SiDerivedUnit} from "../../../../../src/Units/Mass/SI/SiDerivedUnit";
import {Teragram} from "../../../../../src/Units/Mass/SI/Teragram";
import {Yoctogram} from "../../../../../src/Units/Mass/SI/Yoctogram";
import {Yottagram} from "../../../../../src/Units/Mass/SI/Yottagram";
import {Zeptogram} from "../../../../../src/Units/Mass/SI/Zeptogram";
import {Zettagram} from "../../../../../src/Units/Mass/SI/Zettagram";

/**
 * This file is part of Measurement Toolkit
 *
 * (c) Bas Peeters <bas@peete.rs>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
describe("SI: Mass", () => {
    it("should convert between SI units in whole numbers", () => {
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

    it("should convert between SI units with fractions", () => {
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
    ].map((unit: SiDerivedUnit) => {
        it(`should implement ${unit.constructor.name}`, () => {
            expect(unit).to.be.an.instanceOf(SiDerivedUnit);
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

    it("Should have symbols", () => {
        const yottagram = new Yottagram(19);
        expect(yottagram.toString()).to.equal("19 Yg");

        const zettagram = new Zettagram(17);
        expect(zettagram.toString()).to.equal("17 Zg");

        const exagram = new Exagram(15);
        expect(exagram.toString()).to.equal("15 Eg");

        const petagram = new Petagram(13);
        expect(petagram.toString()).to.equal("13 Pg");

        const teragram = new Teragram(11);
        expect(teragram.toString()).to.equal("11 Tg");

        const gigagram = new Gigagram(9);
        expect(gigagram.toString()).to.equal("9 Gg");

        const megagram = new Megagram(7);
        expect(megagram.toString()).to.equal("7 Mg");

        const kilogram = new Kilogram(6);
        expect(kilogram.toString()).to.equal("6 kg");

        const hectogram = new Hectogram(4);
        expect(hectogram.toString()).to.equal("4 hg");

        const decagram = new Decagram(2);
        expect(decagram.toString()).to.equal("2 dag");

        const gram = new Gram(18);
        expect(gram.toString()).to.equal("18 g");

        const decigram = new Decigram(1);
        expect(decigram.toString()).to.equal("1 dg");

        const centigram = new Centigram(3);
        expect(centigram.toString()).to.equal("3 cg");

        const milligram = new Milligram(5);
        expect(milligram.toString()).to.equal("5 mg");

        const microgram = new Microgram(7);
        expect(microgram.toString()).to.equal("7 µg");

        const nanogram = new Nanogram(8);
        expect(nanogram.toString()).to.equal("8 ng");

        const picogram = new Picogram(10);
        expect(picogram.toString()).to.equal("10 pg");

        const femtogram = new Femtogram(12);
        expect(femtogram.toString()).to.equal("12 fg");

        const attogram = new Attogram(14);
        expect(attogram.toString()).to.equal("14 ag");

        const zeptogram = new Zeptogram(16);
        expect(zeptogram.toString()).to.equal("16 zg");

        const yoctogram = new Yoctogram(18);
        expect(yoctogram.toString()).to.equal("18 yg");
    });
});
