/**
 * This file is part of Measurement Toolkit
 *
 * (c) Bas Peeters <bas@peete.rs>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import {expect} from "chai";
import {Kilogram} from "../../../../../src/main";

describe("Kilogram", () => {
    it("should convert kilogram to grams and back", () => {
        const unit = new Kilogram(20);

        expect(unit.to.Gram().value).to.equal(20000);
        expect(unit.to.Gram().to.Kilogram().value).to.equal(20);
    });
});
