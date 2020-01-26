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

describe("Kilometer", () => {
    it("should convert kilometers to meters and back", () => {
        const unit = new Kilometer(6.437);

        expect(unit.to).to.respondTo("Meter");
        expect(unit.to.Meter().value).to.equal(6437);
        expect(unit.to.Meter().to).to.respondTo("Kilometer");
        expect(unit.to.Meter().to.Kilometer().value).to.equal(6.437);
    });
});
