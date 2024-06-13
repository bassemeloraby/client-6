import React from "react";
import { InputGroup, Form } from "react-bootstrap";

const SearchInput = ({ setQuery, placeholder, cl }) => {
  return (
    <div className={`shadow ${cl}`}>
      <InputGroup className="mb-1">
        <InputGroup.Text id="basic-addon1">Search</InputGroup.Text>
        <Form.Control
          type="text"
          placeholder={placeholder}
          autoComplete="off"
          autoFocus
          onChange={(e) => setQuery(e.target.value)}
          className="text-capitalize"
        />
      </InputGroup>{" "}
    </div>
  );
};

export default SearchInput;
