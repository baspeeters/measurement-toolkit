/**
 * This file is part of Measurement Toolkit
 *
 * (c) Bas Peeters <bas@peete.rs>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import {expect} from "chai";
import {Kilometer} from "../../../../../src/Units/Length/SI/Kilometer";
import {Yard} from "../../../../../src/Units/Length/US/Yard";

describe("Kilometer", () => {
    it("should convert kilometers to meters and back", () => {
        const unit = new Kilometer(6.437);

        expect(unit.to).to.respondTo("Meter");
        expect(unit.to.Meter().value).to.equal(6437);
        expect(unit.to.Meter().to).to.respondTo("Kilometer");
        expect(unit.to.Meter().to.Kilometer().value).to.equal(6.437);
    });

    it("should convert to yard", () => {
        const kilometer = new Kilometer(12);

        expect(kilometer.to).to.respondTo("Yard");
        expect(kilometer.to.Yard()).to.be.an.instanceOf(Yard);
        expect(kilometer.to.Yard().value.toPrecision(10)).to.equal("13123.35958");

        expect(kilometer.to.Yard().to.Kilometer()).to.be.an.instanceOf(Kilometer);
        expect(kilometer.to.Yard().to.Kilometer().value.toPrecision(10)).to.equal("12.00000000");
    });
});
