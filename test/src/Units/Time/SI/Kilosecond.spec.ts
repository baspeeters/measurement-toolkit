/**
 * This file is part of Measurement Toolkit
 *
 * (c) Bas Peeters <bas@peete.rs>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import {expect} from "chai";
import {Kilosecond} from "../../../../../src/main";

describe("Kilosecond", () => {
    it("should convert kiloseconds to seconds and back", () => {
        const unit = new Kilosecond(6.437);

        expect(unit.to).to.respondTo("Second");
        expect(unit.to.Second().value).to.equal(6437);
        expect(unit.to.Second().to).to.respondTo("Kilosecond");
        expect(unit.to.Second().to.Kilosecond().value).to.equal(6.437);
    });
});
