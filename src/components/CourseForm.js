import { GRADES } from "../utils/grades";
import { CREDITS } from "../utils/credits";
import { useContext, useState } from "react";

const CourseForm = () => {
  return (
    <>
      <div>
        <div className="input-template">
          <input className="input-form" placeholder="Course's ID"></input>
        </div>
        <div className="input-template">
          <input className="input-form" placeholder="Course's Name"></input>
        </div>
        <div className="input-template2">
          <div>
            <input type="button" className="credit-btn" value="0.5" onChange={(e) => btn_sw(e.target.value)}></input>
          </div>
          <div>
            <select className="grade-btn">
              <option value="-1" selected>
                Select Grade...
              </option>
              <option value="4">
                A
              </option>
              <option value="3.5">
                B+
              </option>
              <option value="3">
                B
              </option>
              <option value="2.5">
                C+
              </option>
              <option value="2">
                C
              </option>
              <option value="1.5">
                D+
              </option>
              <option value="1">
                D
              </option>
              <option value="0">
                F
              </option>
              <option value="-2">
                W
              </option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseForm;
