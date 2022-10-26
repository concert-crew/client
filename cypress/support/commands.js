import { aliasQuery, hasOperationName } from "../utils/graphql-test-utils";

Cypress.Commands.add("selectUser", () => {
  cy.visit("http://localhost:3000/");
  cy.intercept(
    "POST",
    "https://concert-crew-be-v2.herokuapp.com/graphql",
    (req) => {
      console.log(req);
      const { body } = req;
      aliasQuery(req, "name");
      if (req.body.operationName === "GetUser") {
        req.alias = "gqlNameQuery";
        req.reply((res) => {
          console.log(res);
          res.body.data.user = {
            id: 1,
            name: "Abby",
            image: `https://avatars.githubusercontent.com/u/100726140?s=400&u=fefcffaec4d464cc411254317c47b087ab504c42&v=4`,
            events: [
              {
                name: "Bonobo",
                ticketmasterId: "Z7r9jZ1AdogZP",
                buyTicketsUrl:
                  "https://www.ticketmaster.com/event/Z7r9jZ1AdogZP",
                image:
                  "https://s1.ticketm.net/dam/a/092/c590b21f-9adf-4f96-8a2d-2bb8f216d092_1701661_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                date: "2022-10-22",
                time: "19:30:00",
                venueName: "Greek Theatre",
                city: "Los Angeles",
                state: "CA",
                address: "2700 N. Vermont Ave.",
                longitude: "-118.292",
                latitude: "34.125198",
                attendees: [
                  {
                    name: "Mayu",
                    image:
                      "https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png",
                  },
                  {
                    name: "Chantal",
                    image:
                      "https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png",
                  },
                ],
              },

              {
                name: "Liquid Stranger",
                ticketmasterId: "G5viZ92D6QfDz",
                buyTicketsUrl:
                  "https://www.ticketmaster.com/liquid-stranger-new-orleans-louisiana-10-28-2022/event/1B005CFEC7694EF8",
                image:
                  "https://s1.ticketm.net/dam/a/0c3/06fff564-f412-4a48-bf8a-9c24633bc0c3_1754111_TABLET_LANDSCAPE_3_2.jpg",
                date: "2022-10-28",
                time: "20:00:00",
                venueName: "Mission",
                city: "Denver",
                state: "CO",
                address: "1000 Brighton Blvd.",
                longitude: "39.776260019308395",
                latitude: "-104.96915584167645",
                attendees: [
                  {
                    name: "John",
                    image:
                      "https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png",
                  },
                  {
                    name: "Shirley",
                    image:
                      "https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png",
                  },
                  {
                    name: "Josh",
                    image:
                      "https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png",
                  },
                ],
              },

              {
                name: "Lane 8",
                ticketmasterId: "vvG1YZ92YPOzep",
                buyTicketsUrl:
                  "https://concerts.livenation.com/lane-8-reviver-tour-irving-texas-10-22-2022/event/0C005CFC25838096",
                image:
                  "https://s1.ticketm.net/dam/a/7e4/5d5c89a9-271e-4b89-b9c4-47d14b4197e4_1545251_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                date: "2022-10-22",
                time: "19:00:00",
                venueName: "The Pavilion at Toyota Music Factory",
                city: "Irving",
                state: "TX",
                address: "300 W Las Colinas Blvd",
                longitude: "-96.942954",
                latitude: "32.872469",
                attendees: [
                  {
                    name: "Chantal",
                    image:
                      "https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png",
                  },
                ],
              },
            ],
          };
        });
      }
    }
  ).as("getUser");
});





