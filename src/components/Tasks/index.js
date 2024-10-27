import React from "react";
import PropTypes from "prop-types";
import { FaEdit, FaWindowClose } from "react-icons/fa"

import './Tasks.css';


export default function Tasks({ tasks, handleEdit, handleDelete }) {
  return (
    <ul className="tasks">
        {tasks.map((task, index) => (
          <li key={ index }>{ task }
            <span>
              <FaEdit
                onClick={(event) => handleEdit(event, index)}
                className="edit"
              />

              <FaWindowClose
                onClick={(event) => handleDelete(event, index)}
                className="delete"
              />
            </span>
          </li>
        ))}
      </ul>
  );
}

Tasks.propTypes = {
  tasks: PropTypes.array.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
}
