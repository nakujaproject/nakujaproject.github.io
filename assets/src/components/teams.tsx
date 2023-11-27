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
        "The propulsion team is the team tasked with fabricating the rocket engine and propulsion sytem. The team is currently developing a solid rocket propellant for N-3 rocket. Our ultimate goal is to develop a liquid propellant engine, which is quite a task but we definitely are up to the task.",
      columns: [
        {
          members: [
            {
              name: "Nephat Gakuya Githua",
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
              name: "Lukundo Okemba",
              department:
                "BSc Mechatronic Engineering, JKUAT",
              image: "placeholder",
            },
          ],
        },
        {
          members: [
            {
              name: "Obed Gakui",
              department:
                "BSc Mechatronic Engineering, JKUAT",
              image: "placeholder",
            },
            {
              name: "Bruce Kibet",
              department:
                "BSc Aerospace Engineering, KU",
              image: "bruce",
            },
            {
              name: "Victoria Barasa",
              department:
                "Mechanical Engineering, JKUAT",
              image: "victoria",
            },
            {
              name: "",
              department:
                "",
              image: "",
            },
            {
              name: "",
              department:
                "",
              image: "",
            },
          ],
        },
      ],
      html: '',
    },
    {
      name: "Recovery",
      comment:
        "The Recovery team of the Nakuja project is a team made up of viable and enthusiastic students from the Jomo Kenyatta Univesity of Agriculture and Technology (JKUAT). The team is in charge of designing, testing and implementing the avionics and telemetry system to ensure the successful recovery of our rocket.",
      columns: [
        {
          members: [
            {
              name: "Junn Wangai",
              department:
                "BSc Telecommunication and Information Engineering, JKUAT",
              image: "junn",
            },
            {
              name: "Edwin Mwiti",
              department: "BSc Electronics and Computer Engineering, JKUAT",
              image: "edwin",
            },
            {
              name: "Jones Kisaka",
              department: "BSc Electronics and Computer Engineering, JKUAT",
              image: "placeholder",
            },
            {
              name: "Tonny Ogeto",
              department: "BSc Electronics and Computer Engineering, JKUAT",
              image: "placeholder",
            },
            {
              name: "Patrick Maina",
              department: "BSc Electronics and Computer Engineering, JKUAT",
              image: "placeholder",
            },
          ],
        },
        {
          members: [
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
            {
              name: "Barbra Gitonga",
              department: "BSc Electrical and Electronic Engineering, JKUAT",
              image: "placeholder",
            },
            {
              name: "Erick Gitonga",
              department: "BSc Electrical and Electronic Engineering, JKUAT",
              image: "erick",
            },
          ],
        },
        {
          members: [
            {
              name: "Catherine Kabura",
              department: "BSc Electrical and Electronic Engineering, JKUAT",
              image: "placeholder",
            },
            {
              name: "Victorica Rotich",
              department: "BSc Electrical and Electronic Engineering, JKUAT",
              image: "placeholder",
            },
            {
              name: "",
              department:
                "",
              image: "",
            },
            {
              name: "",
              department:
                "",
              image: "",
            },
            {
              name: "",
              department:
                "",
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
              department: "BSc Mechanical Engineering, JKUAT",
              image: "tinega",
            },
            {
              name: "Lawrence Mwadime",
              department: "BSc Mechanical Engineering, JKUAT",
              image: "mwadime",
            },
            {
              name: "Jeremiah Onyapidi",
              department: "BSc Mechatronic Engineering, JKUAT",
              image: "placeholder",
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
              name: "Emmanuel Ogweno",
              department: "BSc Mechanical Engineering, JKUAT",
              image: "ogweno",
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
      comment: "The advisors work with the student team to provide necessary assistance.",
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
              name: "Dr. Anthony Muchiri",
              department: "Lecturer, Mechatronic Engineering, JKUAT",
              image: "muchiri",
            },
            {
              name: "Dr. Patrick Irungu",
              department: "Lecturer, Mechanical Engineering, JKUAT",
              image: "patrick",
            },
            {
              name: "Ben Maniafu",
              department: "Senior Technologist, iPIC, JKUAT",
              image: "ben",
            },
          ],
        },
        {
          members: [
            {
              name: "Njeru Manegene",
              department:
                "Lecturer, Electrical and Electronic Engineering, JKUAT",
              image: "manegene",
            },
            {
              name: "Dr. Joshua Ngoret",
              department: "Lecturer, Mechatronic Engineering, JKUAT",
              image: "ngoret",
            },
            {
              name: "Andrew Nyawade",
              department: "Kenya Space Agency",
              image: "placeholder",
            },
            {
              name: "Aloyce Were",
              department: "Kenya Space Agency",
              image: "were",
            },
            {
              name: "Charles Mwangi",
              department: "Kenya Space Agency",
              image: "placeholder",
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
