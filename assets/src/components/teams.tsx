import React from "react";

type TeamsInfo = {
  name: string;
  comment: string;
  columns: Column[];
};

type Column = {
  members: MemberInfo[];
};

type MemberInfo = {
  name: string;
  department: string;
  image: string;
};

const Teams = () => {
  const teamsInfo: TeamsInfo[] = [
    {
      name: "Propulsion",
      comment:
        "The propulsion team is the team tasked with fabricating the rocket engine and propulsion sytem. The team is currently developing a solid rocket propellant for N-2 rocket. Our ultimate goal is to develop a liquid propellant engine, which is quite a task but we definitely are up to the task.",
      columns: [
        {
          members: [
            {
              name: "Washington Kamadi",
              department: "JKUAT BSc, Mechatronic Engineering",
              image: "washington",
            },
            {
              name: "Felix Gateru Wanyoike",
              department: "JKUAT BSc, Mechatronic Engineering",
              image: "felix",
            },
            {
              name: "Jeff Mboya",
              department: "JKUAT BSc, Mechatronic Engineering",
              image: "jeff",
            },
            {
              name: "Ian Kibandi",
              department: "JKUAT BSc, Mechatronic Engineering",
              image: "ian",
            },
          ],
        },
        {
          members: [
            {
              name: "Maureen Gichia",
              department: "JKUAT BSc, Mechatronic Engineering",
              image: "maureen",
            },
            {
              name: "Valerian Nyerere",
              department:
                "JKUAT BSc, Telecommunication and Information Engineering",
              image: "valerian",
            },
            {
              name: "Brian Nyatwanga",
              department: "JKUAT BSc, Electrical and Electronic engineering",
              image: "brian_nyatwanga",
            },
            { name: "", department: "", image: "" },
          ],
        },
      ],
    },
    {
      name: "Avionics",
      comment:
        "The Avionics team of the Nakuja project is a team made up of viable and enthusiastic students from the Jomo Kenyatta Univesity of Agriculture and Technology (JKUAT). The team is in charge of designing, testing and implementing the avionics system of our rocket.",
      columns: [
        {
          members: [
            {
              name: "Michael Kimani",
              department: "JKUAT BSc, Mechatronic Engineering",
              image: "michael",
            },
            {
              name: "Rodney Osodo",
              department: "JKUAT BSc, Mechatronic Engineering",
              image: "rodney",
            },
            {
              name: "Brian Olasya",
              department: "Brian Olasya",
              image: "placeholder",
            },
            {
              name: "Edwin Mwiti",
              department: "JKUAT BSc, Electrical and Electronic Engineering",
              image: "edwin",
            },
          ],
        },
        {
          members: [
            {
              name: "Junn Wangai",
              department:
                "JKUAT BSc, Telecommunication and Information Engineering",
              image: "junn",
            },
            {
              name: "George Ogeto",
              department:
                "JKUAT BSc, Telecommunication and Information Engineering",
              image: "george",
            },
            {
              name: "Ian Muchiri",
              department:
                "JKUAT BSc, Telecommunication and Information Engineering",
              image: "ian_muchiri",
            },
            {
              name: "Caleb Mucheru",
              department: "JKUAT BSc, Electrical and Electronic Engineering",
              image: "caleb",
            },
          ],
        },
        {
          members: [
            {
              name: "James Macharia",
              department:
                "JKUAT BSc, Telecommunication and Information Engineering",
              image: "placeholder",
            },
            {
              name: "Martin Munialo",
              department:
                "JKUAT BSc, Telecommunication and Information Engineering",
              image: "martin_munialo",
            },
            {
              name: "Festus Muthama",
              department: "JKUAT BSc, Electrical and Electronic Engineering",
              image: "festus",
            },
            {
              name: "Mohamedhashir Hussein",
              department: "JKUAT BSc, Mechatronic Engineering",
              image: "hussein",
            },
          ],
        },
      ],
    },
    {
      name: "Airframe",
      comment:
        "Airframe team majors in designing the rocket structural system. The team areas of concern include material selection, designing, simulation, fabrication, and testing of airframe.",
      columns: [
        {
          members: [
            {
              name: "Destine Mashava",
              department: "PAUSTI MSc, Mechanical Engineering",
              image: "destine",
            },
            {
              name: "Harvey Chamanyeta",
              department: "PAUSTI MSc, Mechanical Engineering",
              image: "placeholder",
            },
            {
              name: "Yvonne Mureithi",
              department: "JKUAT BSc, Mechatronic Engineering",
              image: "yvonne",
            },
            {
              name: "Emmanuel Ogweno",
              department: "JKUAT BSc, Mechanical Engineering",
              image: "ogweno",
            },
          ],
        },
        {
          members: [
            {
              name: "Mark Odhiambo",
              department: "JKUAT BSc, Electrical and Electronic Engineering",
              image: "mark",
            },
            {
              name: "Vivian Mwangi",
              department: "JKUAT BSc, Mechatronic Engineering",
              image: "vivian",
            },
            {
              name: "",
              department: "",
              image: "",
            },
            {
              name: "",
              department: "",
              image: "",
            },
          ],
        },
      ],
    },
    {
      name: "Flight control",
      comment:
        "The team consists of JKUAT students interested in conttrol systems. The team is focused on design of control systems, PCB design, and programming of the control systems for the rocket. The current development is focused on the reaction wheel control system.",
      columns: [
        {
          members: [
            {
              name: "Sammy Oina",
              department: "JKUAT BSc, Mechatronic Engineering",
              image: "sammy",
            },
            {
              name: "Earl Spencer",
              department: "JKUAT BSc, Mechatronic Engineering",
              image: "placeholder",
            },
            {
              name: "Faith Chelangat",
              department: "JKUAT BSc, Electrical and Electronic Engineering",
              image: "faith",
            },
            {
              name: "Derrick Kirimi",
              department: "JKUAT BSc, Mechatronic Engineering",
              image: "placeholder",
            },
          ],
        },
        {
          members: [
            {
              name: "Robert Kariuki",
              department: "JKUAT BSc, Mechatronic Engineering",
              image: "robert",
            },
            {
              name: "Arnold Odhiambo",
              department: "JKUAT BSc, Electrical and Electronic Engineering",
              image: "arnold",
            },
            {
              name: "",
              department: "",
              image: "",
            },
            {
              name: "",
              department: "",
              image: "",
            },
          ],
        },
      ],
    },
    {
      name: "Media",
      comment:
        "The media team aims to work on public relations to advertise our activity efficiently. The team intends to develop an introductory movie, documentary article, and other advertisement materials. The team comprises different expertise, such as photography, filming, editing, and journalism.",
      columns: [
        {
          members: [
            {
              name: "Sameel Halai",
              department: "JKUAT BSc, Mechatronic Engineering",
              image: "sameel",
            },
            {
              name: "Allan Nyaundi",
              department: "JKUAT BSc, Media department",
              image: "allan",
            },
            {
              name: "Dancan Siriba",
              department: "JKUAT BSc, Journalism",
              image: "dancan",
            },
            {
              name: "Roy Wangui",
              department: "JKUAT BSc, Development studies",
              image: "roy",
            },
          ],
        },
      ],
    },
    {
      name: "Advisors ",
      comment: "",
      columns: [
        {
          members: [
            {
              name: "Dr. Shohei Aoki",
              department: "JKUAT/PAUSTI Adjunct Faculty, Project Leader",
              image: "shohei",
            },
            {
              name: "Dr. Bernard Owiti",
              department: "Lecturer, Mech.Eng., JKUAT",
              image: "owiti",
            },
            {
              name: "Mr. Ben Maniafu",
              department: "Senior Technologist, iPIC",
              image: "ben",
            },
            {
              name: "Dr. Anthony Muchiri",
              department: "Lecturer, Mechatronics, JKUAT",
              image: "muchiri",
            },
          ],
        },
        {
          members: [
            {
              name: "Mr. Njeru Manegene",
              department:
                "Lecturer, Electrical and Electronic Engineering, JKUAT",
              image: "manegene",
            },
            {
              name: "",
              department: "",
              image: "",
            },
            {
              name: "",
              department: "",
              image: "",
            },
            {
              name: "",
              department: "",
              image: "",
            },
          ],
        },
      ],
    },
  ];

  return (
    <>
      <section className="section">
        <div className="container has-text-centered">
          <h2 className="title">Team</h2>

          {teamsInfo.map((team: TeamsInfo) => {
            return (
              <>
                <div className="card article">
                  <div className="card-content">
                    <h2 className="subtitle has-text-weight-bold">
                      {team.name}
                    </h2>
                    <div className="content article-body has-text-left">
                      <p>{team.comment}</p>
                    </div>

                    {team.columns.map((column: Column) => {
                      return (
                        <div className="tile is-ancestor">
                          {column.members.map((member: MemberInfo) => {
                            let membersDOM;
                            if (member.name.length === 0) {
                              membersDOM = (
                                <div
                                  className="tile is-parent is-hidden-mobile"
                                  style={{ visibility: "hidden" }}
                                >
                                  <article className="tile is-child has-text-centered has-image-centered">
                                    <figure className="image is-128x128 container">
                                      <img
                                        className="is-rounded"
                                        src="image/member/placeholder.webp"
                                      />
                                    </figure>
                                    <p className="is-size-5"></p>
                                    <p className=""></p>
                                  </article>
                                </div>
                              );
                            } else {
                              membersDOM = (
                                <div className="tile is-parent">
                                  <article className="tile is-child box has-text-centered has-image-centered">
                                    <figure className="image is-128x128 container">
                                      <img
                                        className="is-rounded"
                                        src={
                                          "image/member/" +
                                          member.image +
                                          ".webp"
                                        }
                                      />
                                    </figure>
                                    <p className="is-size-5">{member.name}</p>
                                    <p className="">{member.department}</p>
                                  </article>
                                </div>
                              );
                            }
                            return membersDOM;
                          })}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Teams;
