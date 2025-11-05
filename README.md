### **Lesson 9: Organizing Forms with Fieldsets and Data Lists**

In this lesson, you will continue enhancing the user registration form by adding `<fieldset>`, `<legend>`, `<optgroup>`, and `<datalist>` elements to better organize the form and improve user experience.

---

### **Step-by-Step Guide**

1. **Open Your Existing HTML File**:

   - Open the `index.html` file you created in previous lessons inside the `user-registration-form` folder.
   - You will now continue building the form by adding new elements and organizing it with `<fieldset>` and `<legend>` tags.

2. **Organize the Form Using `<fieldset>` and `<legend>`**:

   - Add `<fieldset>` elements to group related form fields together. Use `<legend>` tags to label each section.
   - Wrap the first name, last name, and email fields in a `<fieldset>` with the legend "Personal Information":

     ```html
     <fieldset>
       <legend>Personal Information</legend>

       <label for="first-name" accesskey="f">First Name (Alt + F):</label>
       <input
         type="text"
         id="first-name"
         name="first-name"
         tabindex="1"
         required
       />
       <br /><br />

       <label for="last-name" accesskey="l">Last Name (Alt + L):</label>
       <input
         type="text"
         id="last-name"
         name="last-name"
         tabindex="2"
         required
       />
       <br /><br />

       <label for="email" accesskey="e">Email (Alt + E):</label>
       <input type="email" id="email" name="email" tabindex="3" required />
       <br /><br />
     </fieldset>
     ```

3. **Create an "Account Security" Section**:

   - Group the password fields inside a `<fieldset>` with the legend "Account Security":

     ```html
     <fieldset>
       <legend>Account Security</legend>

       <label for="password" accesskey="p">Password (Alt + P):</label>
       <input
         type="password"
         id="password"
         name="password"
         pattern="(?=.*\d).{8,}"
         title="Must contain at least one number and be at least 8 characters long"
         tabindex="4"
         required
       />
       <br /><br />

       <label for="confirm-password" accesskey="c"
         >Confirm Password (Alt + C):</label
       >
       <input
         type="password"
         id="confirm-password"
         name="confirm-password"
         tabindex="5"
         required
       />
       <br /><br />
     </fieldset>
     ```

4. **Adding Additional Information (Broken Down)**

**Step 4.1: Create the "Other Genders" `<optgroup>`**

- In the "Gender" dropdown, add an `<optgroup>` to categorize the options into "Genders 1" and "Genders 2":
  ```html
  <label for="gender" accesskey="g">Gender (Alt + G):</label>
  <select id="gender" name="gender" tabindex="6" required>
    <optgroup label="Genders 1">
      <option value="">Select your gender</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
    </optgroup>
    <optgroup label="Genders 2">
      <option value="non-binary">Non-Binary</option>
      <option value="genderqueer">Genderqueer</option>
      <option value="prefer-not-to-say">Prefer not to say</option>
    </optgroup>
  </select>
  <br /><br />
  ```

**Step 4.2: Create the Country Input and `<datalist>`**

- After the Gender section and before the Address section, add a text input field for the "Country" and link it to a `<datalist>` element to provide suggestions:

  ```html
  <label for="country" accesskey="n">Country (Alt + N):</label>
  <input
    type="text"
    id="country"
    name="country"
    list="country-list"
    tabindex="7"
    required
  />
  <datalist id="country-list">
    <option value="United States"></option>
    <option value="Canada"></option>
    <option value="United Kingdom"></option>
    <option value="Australia"></option>
    <option value="India"></option>
  </datalist>

  <br /><br />
  ```

**Step 4.3: Create a `<fieldset>` Around the "Additional Information" Section**

- Group the "Gender," "Country," and "Address" fields within a `<fieldset>` element and add a `<legend>` for the section label:

  ```html
  <fieldset>
    <legend>Additional Information</legend>

    <!-- Gender Dropdown from Step 4.1 -->
    <label for="gender" accesskey="g">Gender (Alt + G):</label>
    <select id="gender" name="gender" tabindex="6" required>
      <optgroup label="Common Genders">
        <option value="male">Male</option>
        <option value="female">Female</option>
      </optgroup>
      <optgroup label="Other Genders">
        <option value="non-binary">Non-Binary</option>
        <option value="genderqueer">Genderqueer</option>
        <option value="prefer-not-to-say">Prefer not to say</option>
      </optgroup>
    </select>
    <br /><br />

    <!-- Country Input and Datalist from Step 4.2 -->
    <label for="country" accesskey="n">Country (Alt + N):</label>
    <input
      type="text"
      id="country"
      name="country"
      list="country-list"
      tabindex="7"
      required
    />
    <datalist id="country-list">
      <option value="United States"></option>
      <option value="Canada"></option>
      <option value="United Kingdom"></option>
      <option value="Australia"></option>
      <option value="India"></option>
    </datalist>

    <br /><br />

    <!-- Address Field -->
    <label for="address" accesskey="a">Address (Alt + A):</label><br />
    <textarea
      id="address"
      name="address"
      rows="4"
      cols="50"
      tabindex="8"
      required
    >
    </textarea>
    <br /><br />
  </fieldset>
  ```

5. **Add the Submit and Reset Buttons Outside of the Fieldsets**:

   - Place the submit and reset buttons at the bottom of the form, outside of any `<fieldset>`:

     ```html
     <button type="submit" accesskey="r" tabindex="9">
       Register (Alt + R)
     </button>

     <button type="reset" accesskey="x" tabindex="10">
       Reset Form (Alt + X)
     </button>
     ```

6. **Save and Preview Your Updated Form**:

   - Save the `index.html` file.
   - Open it in a browser and check that all form elements are organized correctly, and that the `<legend>`, `<optgroup>`, and `<datalist>` features are functioning as intended.

7. **Testing the Form**:
   - Make sure each section is clearly defined with legends.
   - Test the `<datalist>` by typing into the "Country" input field and verifying that suggestions appear.
   - Verify that the gender dropdown is correctly grouped into "Common Genders" and "Other Genders."

---

### **Assessment Criteria**:

1. **Correct Use of `<fieldset>`, `<legend>`, `<optgroup>`, and `<datalist>`**:

   - The form is organized with logically grouped fields, using `<fieldset>` and `<legend>` tags to label each section.
   - The gender selection uses `<optgroup>` to categorize the dropdown options.
   - The "Country" input field is enhanced with a `<datalist>` for user suggestions.

2. **Form Functionality and User Experience**:

   - The form should be fully functional, with all fields accessible and usable.
   - Accessibility features such as `accesskey` and `tabindex` are present and working as intended.

3. **Form Submission and Reset**:
   - The submit and reset buttons are placed appropriately and work correctly.
