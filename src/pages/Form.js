import React from "react";

const Form = (props) => {
  const [showing, setShowing] = React.useState(false);
  const toggleShowing = () => setShowing(!showing);
  return (
    <>
      <button className="show-form" onClick={toggleShowing}>
        Add New Entry
      </button>
      <section className={`form ${showing ? "showing" : ""}`}>
        <h2>Submit a New Journal Entry</h2>
        <form>
          
        </form>
      </section>
    </>
  );
};

export default Form;
