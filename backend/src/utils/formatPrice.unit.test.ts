import { describe, expect, it } from "vitest";
import { formatPrice } from "./formatPrice";

describe("formatPrice", () => {
	it("should convert cents to price concurrency", () => {
		const price = 1000;
		const formattedPrice = formatPrice(price);

		// \xa0 is a non-breaking space character
		expect(formattedPrice).toBe("R$\xa010,00");
	});
});
