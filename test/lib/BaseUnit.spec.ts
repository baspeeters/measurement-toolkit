/**
 * This file is part of Unit Converter
 *
 * (c) Bas Peeters <bas@peete.rs>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import {expect} from "chai";
import {BaseUnit} from "../../lib/Units/BaseUnit";
import {DerivedUnit} from "../../lib/Units/DerivedUnit";
import {Gram} from "../../lib/Units/Mass/Metric/Gram";
import {Kilogram} from "../../lib/Units/Mass/Metric/Kilogram";

describe("BaseUnit", () => {
    it("should be of the proper type", () => {
        const unit = new Kilogram(34.328);

        expect(unit).to.be.an.instanceOf(BaseUnit);
        expect(unit).to.have.property("to");
        expect(unit).to.have.property("derivedUnits");
    });

    it("should implement conversions to its derived units", () => {
        const unit = new Kilogram(9.2312);

        expect(unit).to.be.an.instanceOf(BaseUnit);
        expect(unit.to).to.respondTo("Gram");
        expect(unit.to.Gram()).to.be.an.instanceOf(DerivedUnit);
        expect(unit.to.Gram().value.toFixed(10)).to.equal("9231.2000000000");
    });

    it("should implement converters to other base units", () => {
        const unit = new Kilogram(342);

        expect(unit.to).to.respondTo("Pound");
        expect(unit.to.Pound()).to.be.an.instanceOf(BaseUnit);
        expect(unit.to.Pound().value.toFixed(10)).to.equal("753.9809366723");
    });

    it("should implement converters to derived units of other base units", () => {
        const unit = new Kilogram(32871);

        expect(unit.to).to.respondTo("Ounce");
        expect(unit.to.Ounce()).to.be.an.instanceOf(DerivedUnit);
        expect(unit.to.Ounce()).to.be.an.instanceOf(DerivedUnit);
        expect(unit.to.Ounce().value.toFixed(6)).to.equal("1159490.403245");
    });
});
