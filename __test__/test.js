/**
 * Unit Tests for Lesson 9: User Registration Form
 * Tests for fieldsets, legends, optgroups, and datalists
 *
 * To run these tests:
 * 1. Install dependencies: npm install --save-dev jest @testing-library/dom jsdom
 * 2. Run tests: npm test
 */

const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");

describe("User Registration Form - Lesson 9", () => {
  let dom;
  let document;

  beforeAll(() => {
    // Load the HTML file
    const html = fs.readFileSync(path.resolve(__dirname, "index.html"), "utf8");
    dom = new JSDOM(html);
    document = dom.window.document;
  });

  describe("Form Structure", () => {
    test("should have a form element", () => {
      const form = document.querySelector("form");
      expect(form).toBeTruthy();
    });

    test("should have exactly 3 fieldsets", () => {
      const fieldsets = document.querySelectorAll("fieldset");
      expect(fieldsets.length).toBe(3);
    });
  });

  describe("Personal Information Fieldset", () => {
    let fieldset;

    beforeAll(() => {
      const fieldsets = document.querySelectorAll("fieldset");
      fieldset = Array.from(fieldsets).find((fs) =>
        fs.querySelector("legend")?.textContent.includes("Personal Information")
      );
    });

    test("should exist with correct legend", () => {
      expect(fieldset).toBeTruthy();
      const legend = fieldset.querySelector("legend");
      expect(legend).toBeTruthy();
      expect(legend.textContent).toBe("Personal Information");
    });

    test("should contain first name input with correct attributes", () => {
      const input = fieldset.querySelector("#first-name");
      expect(input).toBeTruthy();
      expect(input.getAttribute("type")).toBe("text");
      expect(input.getAttribute("name")).toBe("first-name");
      expect(input.getAttribute("tabindex")).toBe("1");
      expect(input.hasAttribute("required")).toBe(true);
    });

    test("should have first name label with correct accesskey", () => {
      const label = fieldset.querySelector('label[for="first-name"]');
      expect(label).toBeTruthy();
      expect(label.getAttribute("accesskey")).toBe("f");
      expect(label.textContent).toContain("First Name");
    });

    test("should contain last name input with correct attributes", () => {
      const input = fieldset.querySelector("#last-name");
      expect(input).toBeTruthy();
      expect(input.getAttribute("type")).toBe("text");
      expect(input.getAttribute("name")).toBe("last-name");
      expect(input.getAttribute("tabindex")).toBe("2");
      expect(input.hasAttribute("required")).toBe(true);
    });

    test("should have last name label with correct accesskey", () => {
      const label = fieldset.querySelector('label[for="last-name"]');
      expect(label).toBeTruthy();
      expect(label.getAttribute("accesskey")).toBe("l");
      expect(label.textContent).toContain("Last Name");
    });

    test("should contain email input with correct attributes", () => {
      const input = fieldset.querySelector("#email");
      expect(input).toBeTruthy();
      expect(input.getAttribute("type")).toBe("email");
      expect(input.getAttribute("name")).toBe("email");
      expect(input.getAttribute("tabindex")).toBe("3");
      expect(input.hasAttribute("required")).toBe(true);
    });

    test("should have email label with correct accesskey", () => {
      const label = fieldset.querySelector('label[for="email"]');
      expect(label).toBeTruthy();
      expect(label.getAttribute("accesskey")).toBe("e");
      expect(label.textContent).toContain("Email");
    });
  });

  describe("Account Security Fieldset", () => {
    let fieldset;

    beforeAll(() => {
      const fieldsets = document.querySelectorAll("fieldset");
      fieldset = Array.from(fieldsets).find((fs) =>
        fs.querySelector("legend")?.textContent.includes("Account Security")
      );
    });

    test("should exist with correct legend", () => {
      expect(fieldset).toBeTruthy();
      const legend = fieldset.querySelector("legend");
      expect(legend).toBeTruthy();
      expect(legend.textContent).toBe("Account Security");
    });

    test("should contain password input with correct attributes", () => {
      const input = fieldset.querySelector("#password");
      expect(input).toBeTruthy();
      expect(input.getAttribute("type")).toBe("password");
      expect(input.getAttribute("name")).toBe("password");
      expect(input.getAttribute("tabindex")).toBe("4");
      expect(input.getAttribute("pattern")).toBe("(?=.*\\d).{8,}");
      expect(input.hasAttribute("required")).toBe(true);
      expect(input.hasAttribute("title")).toBe(true);
    });

    test("should have password label with correct accesskey", () => {
      const label = fieldset.querySelector('label[for="password"]');
      expect(label).toBeTruthy();
      expect(label.getAttribute("accesskey")).toBe("p");
      expect(label.textContent).toContain("Password");
    });

    test("should contain confirm password input with correct attributes", () => {
      const input = fieldset.querySelector("#confirm-password");
      expect(input).toBeTruthy();
      expect(input.getAttribute("type")).toBe("password");
      expect(input.getAttribute("name")).toBe("confirm-password");
      expect(input.getAttribute("tabindex")).toBe("5");
      expect(input.hasAttribute("required")).toBe(true);
    });

    test("should have confirm password label with correct accesskey", () => {
      const label = fieldset.querySelector('label[for="confirm-password"]');
      expect(label).toBeTruthy();
      expect(label.getAttribute("accesskey")).toBe("c");
      expect(label.textContent).toContain("Confirm Password");
    });
  });

  describe("Additional Information Fieldset", () => {
    let fieldset;

    beforeAll(() => {
      const fieldsets = document.querySelectorAll("fieldset");
      fieldset = Array.from(fieldsets).find((fs) =>
        fs
          .querySelector("legend")
          ?.textContent.includes("Additional Information")
      );
    });

    test("should exist with correct legend", () => {
      expect(fieldset).toBeTruthy();
      const legend = fieldset.querySelector("legend");
      expect(legend).toBeTruthy();
      expect(legend.textContent).toBe("Additional Information");
    });

    describe("Gender Select with Optgroups", () => {
      test("should contain gender select with correct attributes", () => {
        const select = fieldset.querySelector("#gender");
        expect(select).toBeTruthy();
        expect(select.getAttribute("name")).toBe("gender");
        expect(select.getAttribute("tabindex")).toBe("6");
        expect(select.hasAttribute("required")).toBe(true);
      });

      test("should have gender label with correct accesskey", () => {
        const label = fieldset.querySelector('label[for="gender"]');
        expect(label).toBeTruthy();
        expect(label.getAttribute("accesskey")).toBe("g");
        expect(label.textContent).toContain("Gender");
      });

      test("should have exactly 2 optgroups", () => {
        const select = fieldset.querySelector("#gender");
        const optgroups = select.querySelectorAll("optgroup");
        expect(optgroups.length).toBe(2);
      });

      test("should have first optgroup with correct label", () => {
        const select = fieldset.querySelector("#gender");
        const optgroups = select.querySelectorAll("optgroup");
        const firstOptgroup = optgroups[0];
        const label = firstOptgroup.getAttribute("label");
        expect(label).toMatch(/common genders|genders 1/i);
      });

      test("should have second optgroup with correct label", () => {
        const select = fieldset.querySelector("#gender");
        const optgroups = select.querySelectorAll("optgroup");
        const secondOptgroup = optgroups[1];
        const label = secondOptgroup.getAttribute("label");
        expect(label).toMatch(/other genders|genders 2/i);
      });

      test("should contain male and female options in first optgroup", () => {
        const select = fieldset.querySelector("#gender");
        const firstOptgroup = select.querySelectorAll("optgroup")[0];
        const options = Array.from(firstOptgroup.querySelectorAll("option"));
        const values = options.map((opt) => opt.getAttribute("value"));
        expect(values).toContain("male");
        expect(values).toContain("female");
      });

      test("should contain non-binary and other options in second optgroup", () => {
        const select = fieldset.querySelector("#gender");
        const secondOptgroup = select.querySelectorAll("optgroup")[1];
        const options = Array.from(secondOptgroup.querySelectorAll("option"));
        const values = options.map((opt) => opt.getAttribute("value"));
        expect(values).toContain("non-binary");
        expect(values).toContain("prefer-not-to-say");
      });
    });

    describe("Country Input with Datalist", () => {
      test("should contain country input with correct attributes", () => {
        const input = fieldset.querySelector("#country");
        expect(input).toBeTruthy();
        expect(input.getAttribute("type")).toBe("text");
        expect(input.getAttribute("name")).toBe("country");
        expect(input.getAttribute("list")).toBe("country-list");
        expect(input.getAttribute("tabindex")).toBe("7");
        expect(input.hasAttribute("required")).toBe(true);
      });

      test("should have country label with correct accesskey", () => {
        const label = fieldset.querySelector('label[for="country"]');
        expect(label).toBeTruthy();
        expect(label.getAttribute("accesskey")).toBe("n");
        expect(label.textContent).toContain("Country");
      });

      test("should have datalist element with correct id", () => {
        const datalist = document.querySelector("#country-list");
        expect(datalist).toBeTruthy();
        expect(datalist.tagName.toLowerCase()).toBe("datalist");
      });

      test("should have datalist with at least 5 country options", () => {
        const datalist = document.querySelector("#country-list");
        const options = datalist.querySelectorAll("option");
        expect(options.length).toBeGreaterThanOrEqual(5);
      });

      test("should have specific countries in datalist", () => {
        const datalist = document.querySelector("#country-list");
        const options = Array.from(datalist.querySelectorAll("option"));
        const values = options.map((opt) => opt.getAttribute("value"));
        expect(values).toContain("United States");
        expect(values).toContain("Canada");
        expect(values).toContain("United Kingdom");
        expect(values).toContain("Australia");
        expect(values).toContain("India");
      });
    });

    describe("Address Textarea", () => {
      test("should contain address textarea with correct attributes", () => {
        const textarea = fieldset.querySelector("#address");
        expect(textarea).toBeTruthy();
        expect(textarea.getAttribute("name")).toBe("address");
        expect(textarea.getAttribute("rows")).toBe("4");
        expect(textarea.getAttribute("cols")).toBe("50");
        expect(textarea.getAttribute("tabindex")).toBe("8");
        expect(textarea.hasAttribute("required")).toBe(true);
      });

      test("should have address label with correct accesskey", () => {
        const label = fieldset.querySelector('label[for="address"]');
        expect(label).toBeTruthy();
        expect(label.getAttribute("accesskey")).toBe("a");
        expect(label.textContent).toContain("Address");
      });
    });
  });

  describe("Form Buttons", () => {
    test("should have submit button with correct attributes", () => {
      const button = document.querySelector('button[type="submit"]');
      expect(button).toBeTruthy();
      expect(button.getAttribute("accesskey")).toBe("r");
      expect(button.getAttribute("tabindex")).toBe("9");
      expect(button.textContent).toContain("Register");
    });

    test("should have reset button with correct attributes", () => {
      const button = document.querySelector('button[type="reset"]');
      expect(button).toBeTruthy();
      expect(button.getAttribute("accesskey")).toBe("x");
      expect(button.getAttribute("tabindex")).toBe("10");
      expect(button.textContent).toContain("Reset");
    });

    test("buttons should be outside of fieldsets", () => {
      const submitButton = document.querySelector('button[type="submit"]');
      const resetButton = document.querySelector('button[type="reset"]');

      expect(submitButton.closest("fieldset")).toBeNull();
      expect(resetButton.closest("fieldset")).toBeNull();
    });
  });

  describe("Accessibility Features", () => {
    test("all form inputs should have associated labels", () => {
      const inputs = document.querySelectorAll("input, select, textarea");
      inputs.forEach((input) => {
        const id = input.getAttribute("id");
        if (id) {
          const label = document.querySelector(`label[for="${id}"]`);
          expect(label).toBeTruthy();
        }
      });
    });

    test("all labels should have accesskey attributes", () => {
      const labels = document.querySelectorAll("label[for]");
      labels.forEach((label) => {
        expect(label.hasAttribute("accesskey")).toBe(true);
      });
    });

    test("all form controls should have tabindex attributes", () => {
      const controls = document.querySelectorAll(
        "input, select, textarea, button"
      );
      controls.forEach((control) => {
        expect(control.hasAttribute("tabindex")).toBe(true);
      });
    });

    test("required fields should have required attribute", () => {
      const requiredIds = [
        "first-name",
        "last-name",
        "email",
        "password",
        "confirm-password",
        "gender",
        "country",
        "address",
      ];

      requiredIds.forEach((id) => {
        const element = document.querySelector(`#${id}`);
        expect(element).toBeTruthy();
        expect(element.hasAttribute("required")).toBe(true);
      });
    });
  });

  describe("Form Validation", () => {
    test("email input should have email type", () => {
      const email = document.querySelector("#email");
      expect(email.getAttribute("type")).toBe("email");
    });

    test("password should have pattern validation", () => {
      const password = document.querySelector("#password");
      expect(password.hasAttribute("pattern")).toBe(true);
      expect(password.hasAttribute("title")).toBe(true);
    });
  });
});
