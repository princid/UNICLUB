import React, {useEffect, useState} from "react";
import { Link, Text } from "@nextui-org/react";

import {assignPresident, getAllPresidents} from "../api";
import "./Administration.css";

const Administration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [club, setClub] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = () => {
    const formDetails = new FormData();
    formDetails.append('name', name);
    formDetails.append('email', email);
    formDetails.append('club', club);
    formDetails.append('password', password);
    assignPresident(formDetails).then(console.log).catch(console.log);
  }

  const [presidents, setPresidents] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getAllPresidents()
      .then(({data}) => {
        setPresidents(data.data)
        setIsLoading(false)
      })
      .catch(err => console.log(err))
  }, [])

  const presidentsRows = presidents.map(president => {
    return (
      <tr>
        <td>{president.name}</td>
        <td>{president.email}</td>
        <td>{president.club}</td>
        <td>{president.password}</td>
        <td><button className="delete__btn">DELETE</button></td>
      </tr>
    )
  })

  const PresidentsTable = () => (
    <div className="table-content">
      <h3 className="president__details">ASSIGNED PRESIDENT's CREDENTIAL</h3>
      <table className="president-table">
        <thead>
          <tr>
            <th scope="col">President's Name</th>
            <th scope="col">President's Email</th>
            <th scope="col">Assigned Club</th>
            <th scope="col">Assigned Password</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>{presidentsRows}</tbody>
      </table>
    </div>
  );

  return (
    <>
      <div class="content">
        <div className="admin-header">
          <Link href="/studentmail">
            <Text css={{ color: "#fff" }} size={15} weight="bold">
              Click Here to go to Student's Email Section
            </Text>
          </Link>
        </div>
          <h3 className="president__details">ADD PRESIDENT's DETAIL</h3>
          <div class="class4" id="contactForm">
            <div>
              <div>
                <label for="" class="class3">Name{" "}</label>
                <br/>
                <input
                  type="text" class="form-control" name="name" id="name" placeholder="President's name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label for="" class="class3">
                  Email{" "}
                </label>
                <br/>
                <input
                  type="text" class="form-control" name="email" id="email" placeholder="President's email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div>
              <div>
                <label for="club" class="class3">Select Club</label>
                <br/>
                <select
                  class="custom-select" id="budget" name="budget"
                  onChange={(e) => setClub(e.target.value)}
                >
                  <option selected>Choose...</option>
                  <option value="codingclub">Coding Club </option>
                  <option value="culturalclub">Cultural Club</option>
                  <option value="editorialclub">Editorial Club</option>
                  <option value="facultyclub">Faculty Club</option>
                  <option value="personalityclub">Personality Club</option>
                  <option value="sportsclub">Sports Club</option>
                  <option value="ecell">Entrepreneurship Cell</option>
                  <option value="tpcell">Training & Placement Cell</option>
                </select>
              </div>
            </div>

            <div>
              <label for="message">Assign Password</label>
              <br/>
              <input
                type="password" className="form-control" name="password" id="password" placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}/>
            </div>

            <div>
              <div>
                {/* <input type="submit" value="Assign" class="button" /> */}
                <button className="Assign__btn" onClick={handleSubmit}>ASSIGN</button>
                <span class="submitting"/>
              </div>
            </div>
          </div>
      </div>
      {isLoading ? (<div>President details are getting loaded!</div>) : <PresidentsTable/>}
    </>
  );
};

export default Administration;
