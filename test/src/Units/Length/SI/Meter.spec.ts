/**
 * This file is part of Measurement Toolkit
 *
 * (c) Bas Peeters <bas@peete.rs>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import {expect} from "chai";
import {Meter} from "../../../../../src/Units/Length/SI/Meter";

describe("Meter", () => {
    it("should convert meter to kilometers and back", () => {
        const unit = new Meter(1337);

        expect(unit.to).to.respondTo("Kilometer");
        expect(unit.to.Kilometer().value).to.equal(1.337);
        expect(unit.to.Kilometer().to.Meter().value).to.equal(1337);
    });
});
