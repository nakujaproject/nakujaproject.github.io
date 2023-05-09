import React from "react";
import ReactHtmlParser from 'react-html-parser'; 

type TeamsInfo = {
  name: string;
  comment: string;
  columns: Column[];
  html: string;
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
              department: "BSc Mechatronic Engineering, JKUAT",
              image: "washington",
            },
            {
              name: "Felix Gateru Wanyoike",
              department: "BSc Mechatronic Engineering, JKUAT",
              image: "felix",
            },
            {
              name: "Jeff Mboya",
              department: "BSc Mechatronic Engineering, JKUAT",
              image: "jeff",
            },
            {
              name: "Ian Kibandi",
              department: "BSc Mechatronic Engineering, JKUAT",
              image: "ian",
            },
            {
              name: "Maureen Gichia",
              department: "BSc Mechatronic Engineering, JKUAT",
              image: "maureen",
            },
          ],
        },
        {
          members: [
            {
              name: "Valerian Nyerere",
              department:
                "BSc Telecommunication and Information Engineering, JKUAT",
              image: "valerian",
            },
            {
              name: "Brian Nyatwanga",
              department: "BSc Electrical and Electronic Engineering, JKUAT",
              image: "brian_nyatwanga",
            },
            {
              name: "Paul Munyao",
              department: "BSc Mechatronic Engineering, JKUAT",
              image: "paul",
            },
            {
              name: "Lael Mukeni",
              department: "BSc Mechatronic Engineering, JKUAT",
              image: "lael",
            },
            {
              name: "Collins Bett",
              department: "BSc Mechatronic Engineering, JKUAT",
              image: "collins",
            },
          ],
        },
        {
          members: [
            {
              name: "Shabach Baraka",
              department:
                "BSc Mechatronic Engineering, JKUAT",
              image: "shabach",
            },
            {
              name: "Bruce Kibet",
              department:
                "BSc Aerospace Engineering, KU",
              image: "bruce",
            },
            {
              name: "Faith Chelang'at Korir ",
              department:
                "BSc Mechanical Engineering, JKUAT",
              image: "faith_korir",
            },
            {
              name: "Edmund Munene",
              department:
                "BSc Mechatronic Engineering, JKUAT",
              image: "edmund",
            },
            {
              name: "Victoria Barasa",
              department:
                "Mechanical Engineering, JKUAT",
              image: "victoria",
            },
          ],
        },
        {
          members: [
            {
              name: "Ian Nzau Mutua",
              department:
                "BSc Mechanical Engineering, KU",
              image: "placeholder",
            },
            {
              name: "Brenda Chepkemoi",
              department:
                "BSc Aerospace Engineering, KU",
              image: "brenda",
            },
            {
              name: "Stephen Kumeiya Njamura",
              department:
                "BSc Electrical and Electronic Engineering, JKUAT",
              image: "placeholder",
            },
            {
              name: "Gloriah Chepkirui",
              department:
                "BSc Electrical and Electronic Engineering, JKUAT",
              image: "placeholder",
            },
            {
              name: "Collins Omariba",
              department:
                "BSc Mechatronic Engineering, JKUAT",
              image: "omariba",
            },
          ],
        },
      ],
      html: '',
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
              department: "BSc Mechatronic Engineering, JKUAT",
              image: "michael",
            },
            {
              name: "Rodney Osodo",
              department: "BSc Mechatronic Engineering, JKUAT",
              image: "rodney",
            },
            {
              name: "Brian Olasya",
              department: "BSc Mechatronic Engineering, JKUAT",
              image: "placeholder",
            },
            {
              name: "Edwin Mwiti",
              department: "BSc Electronics and Computer Engineering, JKUAT",
              image: "edwin",
            },
            {
              name: "Junn Wangai",
              department:
                "BSc Telecommunication and Information Engineering, JKUAT",
              image: "junn",
            }
          ],
        },
        {
          members: [
            {
              name: "George Ogeto",
              department:
                "BSc Telecommunication and Information Engineering, JKUAT",
              image: "george",
            },
            {
              name: "Ian Muchiri",
              department:
                "BSc Telecommunication and Information Engineering, JKUAT",
              image: "ian_muchiri",
            },
            {
              name: "Caleb Mucheru",
              department: "BSc Electrical and Electronic Engineering, JKUAT",
              image: "caleb",
            },
            {
              name: "James Macharia",
              department:
                "BSc Telecommunication and Information Engineering, JKUAT",
              image: "placeholder",
            },
            {
              name: "Martin Munialo",
              department:
                "BSc Telecommunication and Information Engineering, JKUAT",
              image: "martin_munialo",
            }
          ],
        },
        {
          members: [
            {
              name: "Festus Muthama",
              department: "BSc Electrical and Electronic Engineering, JKUAT",
              image: "festus",
            },
            {
              name: "Mohamedhashir Hussein",
              department: "BSc Mechatronic Engineering, JKUAT",
              image: "hussein",
            },
            {
              name: "Jones Kisaka",
              department: "BSc Electrical and Electronic Engineering, JKUAT",
              image: "jones",
            },
            {
              name: "Ruth Chepkemoi",
              department: "BSc Electronics and Computer Engineering, JKUAT",
              image: "ruth",
            },
            {
              name: "Safa Osman",
              department: "BSc Electronics and Computer Engineering, JKUAT",
              image: "safa",
            },
          ],
        },
        {
          members: [
            {
              name: "Beth Wainoi",
              department: "BSc Information Technology, JKUAT",
              image: "beth",
            },
            {
              name: "Njeri Newton Kariuki",
              department: "BSc Mechatronic Engineering, DeKUT",
              image: "newton",
            },
            {
              name: "Erick Gitonga",
              department: "BSc Electrical and Electronic Engineering, JKUAT",
              image: "erick",
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
      html: '',
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
              department: "MSc Mechanical Engineering, PAUSTI",
              image: "destine",
            },
            {
              name: "Harvey Chamanyeta",
              department: "MSc Mechanical Engineering, PAUSTI",
              image: "placeholder",
            },
            {
              name: "Yvonne Mureithi",
              department: "BSc Mechatronic Engineering, JKUAT",
              image: "yvonne",
            },
            {
              name: "Emmanuel Ogweno",
              department: "BSc Mechanical Engineering, JKUAT",
              image: "ogweno",
            },
            {
              name: "Mark Odhiambo",
              department: "BSc Electrical and Electronic Engineering, JKUAT",
              image: "mark",
            }
          ],
        },
        {
          members: [
            {
              name: "Vivian Mwangi",
              department: "BSc Mechatronic Engineering, JKUAT",
              image: "vivian",
            },
            {
              name: "Anne Kariithi",
              department: "BSc Electrical and Electronic Engineering, JKUAT",
              image: "anne",
            },
            {
              name: "Innocent Namuye",
              department: "BSc Mechatronic Engineering, JKUAT",
              image: "innocent",
            },
            {
              name: "Samwel Tinega",
              department: "BSc Mechatronic Engineering, JKUAT",
              image: "tinega",
            },
            {
              name: "Lawrence Mwadime",
              department: "BSc Mechanical Engineering, JKUAT",
              image: "mwadime",
            },
          ],
        },
        {
          members: [
            {
              name: "Francis Gachunga",
              department: "BSc Aerospace Engineering, KU",
              image: "francis",
            },
            {
              name: "Samwel Wanjagi",
              department: "BSc Mechanical Engineering, KU",
              image: "placeholder",
            },
            {
              name: "Muthoni Wandia",
              department: "BSc Aerospace Engineering, KU",
              image: "placeholder",
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
      html: '',
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
              department: "BSc Mechatronic Engineering, JKUAT",
              image: "sammy",
            },
            {
              name: "Earl Spencer",
              department: "BSc Mechatronic Engineering, JKUAT",
              image: "placeholder",
            },
            {
              name: "Faith Chelangat",
              department: "BSc Electrical and Electronic Engineering, JKUAT",
              image: "faith",
            },
            {
              name: "Derrick Kirimi",
              department: "BSc Mechatronic Engineering, JKUAT",
              image: "placeholder",
            },
            {
              name: "Robert Kariuki",
              department: "BSc Mechatronic Engineering, JKUAT",
              image: "robert",
            }
          ],
        },
        {
          members: [
            {
              name: "Arnold Odhiambo",
              department: "BSc Electrical and Electronic Engineering, JKUAT",
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
            {
              name: "",
              department: "",
              image: "",
            },
            {
              name: "",
              department: "",
              image: "",
            }
          ],
        },
      ],
      html: '',
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
              department: "BSc Mechatronic Engineering, JKUAT",
              image: "sameel",
            },
            {
              name: "Allan Nyaundi",
              department: "BSc Media, JKUAT",
              image: "allan",
            },
            {
              name: "Dancan Siriba",
              department: "BSc Journalism, JKUAT",
              image: "dancan",
            },
            {
              name: "Roy Wangui",
              department: "BSc Development Studies, JKUAT",
              image: "roy",
            },
            {
              name: "",
              department: "",
              image: "",
            }
          ],
        },
      ],
      html: '',
    },
    {
      name: "Advisors ",
      comment: "The advisors are JKUAT staff who closely work with the student team to provide necessary assistance.",
      columns: [
        {
          members: [
            {
              name: "Dr. Shohei Aoki",
              department: "Adjunct Faculty, JKUAT, Project Leader",
              image: "shohei",
            },
            {
              name: "Dr. Bernard Owiti",
              department: "Lecturer, Mechanical Engineering, JKUAT",
              image: "owiti",
            },
            {
              name: "Mr. Ben Maniafu",
              department: "Senior Technologist, iPIC",
              image: "ben",
            },
            {
              name: "Dr. Anthony Muchiri",
              department: "Lecturer, Mechatronic Engineering, JKUAT",
              image: "muchiri",
            },
            {
              name: "Mr. Njeru Manegene",
              department:
                "Lecturer, Electrical and Electronic Engineering, JKUAT",
              image: "manegene",
            }
          ],
        },
        {
          members: [
            {
              name: "Dr. Patrick Irungu",
              department: "Lecturer, Mechanical Engineering, JKUAT",
              image: "patrick",
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
            {
              name: "",
              department: "",
              image: "",
            },
          ],
        },
      ],
      html: '',
    },
    {
      name: "Nakuja alumni",
      comment: "Nakuja alumni are active in various parts of the world.",
      columns: [
      ],
      html: '<iframe style="width:100%; height:400px;" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRIW63rx345Fz-yVue82F69w_TtD29Os-ypI5X9kV1kaGkRloZIAsXla9sBHx_5XBdrfyoyxLJA8Hp_/pubhtml?gid=0&single=true&header=false&widget=false&chrome=false"></iframe>'
    },
  ];

  return (
    <>
      <section className="section">
        <div className="container has-text-centered">
          <h2 className="title">Team</h2>

          <div className="columns is-centered">
              <div className="column is-three-fifths">
                <figure className="image is-16by9" style={{marginBottom:'5px'}}>
                  <iframe className="has-ratio" width="560" height="315"
                    src="https://www.youtube.com/embed/FgPUEDIpjJs?rel=0" frameBorder="0" allowFullScreen></iframe>
                </figure>
              </div>
            </div>

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
                                    <figure className="image is-96x96 container">
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
                                    <figure className="image is-96x96 container">
                                      <img
                                        className="is-rounded"
                                        src={
                                          "image/member/" +
                                          member.image +
                                          ".webp"
                                        }
                                      />
                                    </figure>
                                    <p className="is-size-6">{member.name}</p>
                                    <p className="is-size-7">{member.department}</p>
                                  </article>
                                </div>
                              );
                            }
                            return membersDOM;
                          })}
                        </div>
                      );
                    })}
                    {ReactHtmlParser (team.html)}
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
