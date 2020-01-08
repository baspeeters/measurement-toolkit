/**
 * This file is part of Unit Converter
 *
 * (c) Bas Peeters <bas@peete.rs>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import {expect} from "chai";
import {BaseUnit} from "../../src/Units/BaseUnit";
import {DerivedUnit} from "../../src/Units/DerivedUnit";
import {Gram} from "../../src/Units/Mass/SI/Gram";
import {Kilogram} from "../../src/Units/Mass/SI/Kilogram";

describe("DerivedUnit", () => {
    it("should be of the proper type", () => {
        const unit = new Gram(537.1847);

        expect(unit).to.be.an.instanceOf(DerivedUnit);
        expect(unit).to.have.property("to");
        expect(unit).to.have.property("baseUnit");
    });

    it("should implement conversion to its base unit", () => {
        const unit = new Gram(72.928);

        expect(unit.baseUnit).to.be.an.instanceOf(BaseUnit);
        expect(unit.baseUnit).to.be.an.instanceOf(Kilogram);
        expect(unit.to).to.respondTo("Kilogram");
        expect(unit.to.Kilogram()).to.be.an.instanceOf(BaseUnit);
        expect(unit.to.Kilogram().value.toFixed(17)).to.equal("0.07292799999999999");
    });

    it("should implement converters to other derived units of its base unit", () => {
        const unit = new Gram(3);

        expect(unit.to).to.respondTo("Milligram");
        expect(unit.to.Milligram()).to.be.an.instanceOf(DerivedUnit);
        expect(unit.to.Milligram().value).to.equal(3000);
    });

    it("should implement converters to other base units through its base unit", () => {
        const unit = new Gram(2.87283);

        expect(unit.to).to.respondTo("Pound");
        expect(unit.to.Pound()).to.be.an.instanceOf(BaseUnit);
        expect(unit.to.Pound().value.toFixed(15)).to.equal("0.006333506006726");
    });

    it("should implement converters to derived units of other base units through its base unit", () => {
        const unit = new Gram(99.987);

        expect(unit.to).to.respondTo("Ounce");
        expect(unit.to.Ounce()).to.be.an.instanceOf(DerivedUnit);
        expect(unit.to.Ounce()).to.be.an.instanceOf(DerivedUnit);
        expect(unit.to.Ounce().value.toFixed(12)).to.equal("3.526937633453");
    });
});
