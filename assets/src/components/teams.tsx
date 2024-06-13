import React from "react";
import parse from 'html-react-parser'

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
      name: "Solid Propulsion",
      comment:
        "The propulsion team is the team tasked with fabricating the rocket engine and propulsion sytem. The team is currently developing a solid rocket propellant for N-3 rocket. Our ultimate goal is to develop a liquid propellant engine, which is quite a task but we definitely are up to the task.",
      columns: [
        {
          members: [
            {
              name: "Nephat Gakuya Githua",
              department:
                "BSc Electrical and Electronic Engineering, JKUAT",
              image: "nephat",
            },
            {
              name: "Japheth Kimanthi Kioko",
              department:
                "BSc Mechanical Engineering, JKUAT",
              image: "2024/japheth",
            },
            {
              name: "Martin Kinyua",
              department: "BSc Mechatronic Engineering, JKUAT",
              image: "2024/kinyua",
            },
            {
              name: "Decent Musinai",
              department: "BSc Mechanical Engineering, JKUAT",
              image: "2024/decent",
            },
            {
              name: "Brian Mathaiya Koinange",
              department:
                "BSc Mechanical Engineering, KU",
              image: "2024/koinange",
            },
          ],
        },
        {
          members: [
            {
              name: "Nelly Ndung'u",
              department:
                "BSc Mechatronic Engineering, JKUAT",
              image: "2024/nelly",
            },
            {
              name: "Faith Nyambura Gachau",
              department:
                "BSc Mechanical Engineering, JKUAT",
              image: "2024/faith",
            },
            {
              name: "Daniel Murerwa",
              department:
                "BSc Electrical and Electronic Engineering, JKUAT",
              image: "2024/batch2/daniel_murerwa",
            },
            {
              name: "Benard Mburu",
              department:
                "BSc Mechatronic Engineering, JKUAT",
              image: "2024/batch2/benard_mburu",
            },
            {
              name: "François Muhumbania",
              department:
                "BSc Mechatronic Engineering, JKUAT",
              image: "2024/batch2/franklin_muhumbania",
            },
          ],
        },
        {
          members: [
            {
              name: "Ogweno Emmanuel Otieno",
              department:
                "BSc Mechanical Engineering, JKUAT",
              image: "2024/batch2/ogweno",
            },
            {
              name: "Lukundo Okemba",
              department:
                "BSc Mechatronic Engineering, JKUAT",
              image: "lukundo",
            },
            {
              name: "Stephen David Oduor",
              department:
                "BSc Mechanical Engineering, JKUAT",
              image: "2024/batch2/stephen_oduor",
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
              name: "Naomi Chesang",
              department:
                "BSc Electrical and Electronic Engineering, JKUAT",
              image: "2024/naomi",
            },
            {
              name: "Esther Mamai",
              department: "BSc Electrical and Elecronic Engineering, JKUAT",
              image: "2024/esther",
            },
            {
              name: "Jerry Mumo",
              department: "BSc Electrical and Electronic Engineering, JKUAT",
              image: "2024/jerry",
            },
            {
              name: "Amos Kipngetich Korir",
              department: "BSc Electrical and Electronic Engineering, JKUAT",
              image: "2024/amos",
            },
            {
              name: "Brian Munene",
              department: "BSc Electrical and Electronic Engineering, JKUAT",
              image: "2024/brian_munene",
            },
          ],
        },
        {
          members: [
            {
              name: "Graig Kipkorir",
              department: "BSc Electrical and Electronic Engineering, JKUAT",
              image: "2024/graig",
            },
            {
              name: "Ian Kiptoo",
              department: "BSc Mechatronic Engineering, JKUAT",
              image: "2024/ian",
            },
            {
              name: "Nindo Emmanuel Ochieng",
              department: "BSc Mechatronic Engineering, JKUAT",
              image: "2024/batch2/nindo_emmanuel",
            },
            {
              name: "Brenda Pat Makena",
              department: "BSc Electrical and Electronic Engineering, JKUAT",
              image: "2024/batch2/brenda_pat",
            },
            {
              name: "Tabby Achieng",
              department: "BSc Electronic and Computer Engineering, JKUAT",
              image: "2024/batch2/tabby",
            },
          ],
        },
        {
          members: [
            {
              name: "Fortune Muiruri Karanja",
              department: "BSc Mechanical Engineering, JKUAT",
              image: "2024/batch2/fortune",
            },
            {
              name: "James Mwaura",
              department: "BSc Aerospace Engineering, KU",
              image: "2024/batch2/james_mwaura",
            },
            {
              name: "Sharlyn Bosibori",
              department: "BSc Electrical and Electronic Engineering, JKUAT",
              image: "2024/batch2/sharlyn",
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
              name: "Emily Namusenda",
              department: "BSc Mechanical Engineering, JKUAT",
              image: "2024/emily",
            },
            {
              name: "Cynthia Omondi",
              department: "BSc Mechanical Engineering, JKUAT",
              image: "2024/cynthia",
            },
            {
              name: "Kelvin Kipkorir",
              department: "BSc Mechanical Engineering, JKUAT",
              image: "2024/kipkorir",
            },
            {
              name: "Collins Kimeli",
              department: "BSc Mechanical Engineering, JKUAT",
              image: "2024/kimeli",
            },
            {
              name: "Samwel Omenta",
              department: "BSc Mechanical Engineering, JKUAT",
              image: "2024/omenta",
            },
          ],
        },
        {
          members: [
            {
              name: "Agnes Kimani",
              department: "BSc Mechanical Engineering, JKUAT",
              image: "2024/batch2/agnes_kimani",
            },
            {
              name: "Jeffrey Gichuru",
              department: "BSc Mechatronic Engineering, JKUAT",
              image: "2024/batch2/jeffrey_gichuru",
            },
            {
              name: "Philemon Nyaga",
              department: "BSc Aerospace Engineering, KU",
              image: "2024/batch2/philemon_nyaga",
            },
            {
              name: "Charity Koigo",
              department: "BSc Mechanical Engineering, JKUAT",
              image: "2024/batch2/charity_koigo",
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
      name: "Liquid Propusion",
      comment:
        "Liquid Propulsion team is responsible for the design, fabrication, and testing of the liquid rocket engine. The team is currently working on the development of a liquid rocket engine test stand.",
      columns: [
        {
          members: [
            {
              name: "Mercy Kung'u",
              department: "BSc Mechanical Engineering, KU",
              image: "2024/mercy",
            },
            {
              name: "Sally Muthoni Karigi",
              department: "BSc Mechatronic Engineering, JKUAT",
              image: "2024/sally",
            },
            {
              name: "Carlos Kitti",
              department: "BSc Electrical and Electronic Engineering, JKUAT",
              image: "2024/carlos",
            },
            {
              name: "Osman Ali Ilyas",
              department: "BSc Mechanical Engineering, KU",
              image: "2024/ilyas",
            },
            {
              name: "Churchil Okech Oduor",
              department: "BSc Telecommunication and Information Engineering, JKUAT",
              image: "2024/churchil",
            },
          ],
        },
        {
          members: [
            {
              name: "Brian Macharia",
              department: "BSc Mechatronic Engineering, JKUAT",
              image: "2024/brian_macharia",
            },
            {
              name: "Abdimalik Abdiilah Osman",
              department: "BSc Aerospace Engineering, KU",
              image: "2024/batch2/abdimalik_abdiilah",
            },
            {
              name: "Sandra Bett",
              department: "BSc Mechanical Engineering, JKUAT",
              image: "2024/batch2/sandra_bett",
            },
            {
              name: "Abdullahi Abdi Dahiye",
              department: "BSc Electronic and Computer Engineering, JKUAT",
              image: "2024/batch2/abdullahi_dahiye",
            },
            {
              name: "Balimwacha Betuel",
              department: "BSc Mechatronic Engineering, JKUAT",
              image: "2024/batch2/betuel",
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
              department: "Lecturer, Mechanical Engineering, JKUAT",
              image: "ngoret",
            },
            {
              name: "Dr. Meshack Hawi",
              department: "Lecturer, Mechanical Engineering, JKUAT",
              image: "hawi",
            },
            {
              name: "Dr. Eunice Nduati",
              department: "Lecturer, Geomatic Engineering and Geospatial Information Systems",
              image: "eunice",
            },
            {
              name: "Aloyce Were",
              department: "Kenya Space Agency",
              image: "were",
            },
          ],
        },
        {
          members: [
            {
              name: "Andrew Nyawade",
              department: "Kenya Space Agency",
              image: "placeholder",
            },
            {
              name: "Charles Mwangi",
              department: "Kenya Space Agency",
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
                    {parse (team.html)}
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
