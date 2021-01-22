const Form = () => {
  return (
    <form>
      <label htmlFor="fname">
        first name:
        <br />
        <input type="text" name="fname" placeholder="first name" />
      </label>
      <br />
      <br />
      <label htmlFor="lname">
        last name:
        <br />
        <input type="text" name="lname" placeholder="last name" />
      </label>
      <br />
      <br />
      <label htmlFor="password">
        password:
        <br />
        <input type="password" name="password" />
      </label>
      <br />
      <br />
      <label>Comments:</label>
      <br />
      <textarea
        id="textArea"
        cols="39"
        rows="10"
        placeholder="text here"
        maxLength="14"
      ></textarea>
      <br />
      <h4>Gender:</h4>
      <label>
        <input type="radio" name="genderButton" value="male" />
        Male.
      </label>
      <br />
      <label>
        <input type="radio" name="genderButton" value="female" />
        Female.
      </label>
      <br />
      <label>
        <input type="radio" name="genderButton" value="other" />
        other.
      </label>
      <br />
      <br />
      <div id="resetButton">
        <label htmlFor="resetButton">
          Click below to empty all feilds above
        </label>
        <br />
        <input type="reset" name="resetButton" value="Reset" />
      </div>
      <br />
      <br />
      <div className="checkBox">
        <label>
          <input type="checkbox" name="Checkbox" id="chbox" />
          <small>
            By checking this box you confirm that all information given are
            true.
          </small>
        </label>
        <br />
        <br />
      </div>
      <p id="final-para">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <input type="submit" name="submitButton" value="Confirm" />
    </form>
  );
};

export default Form;
