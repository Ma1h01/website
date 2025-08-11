import React from "react";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import "./component-css/ProjectCards.css";

const MAX_DESC_LENGTH = 200;
const truncateDescription = (desc) => {
  if (desc.length <= MAX_DESC_LENGTH) return desc;
  return desc.substring(0, MAX_DESC_LENGTH) + "...";
};

// Data for all cards
const cardData = [
  {
    title: "BuzzLink",
    description:
      "A RAG chatbot that helps Georgia Tech students connect with alumni at any specific industry or company in conversational style rather than traditional rigid search. Built with Python, TypeScript, LangChain, OpenAI models, Qdrant vector DB, and nomic embeddings. Collected the first-ever dataset of Georgia Tech alumni LinkedIn profiles for this project through web scrapping.",
    image: "./images/BuzzLink.png",
    repoLink: "https://github.com/Ma1h01/buzzlink",
    hasRepoLink: true,
  },
  {
    title: "Punchshot Pickleball",
    description:
      "A full-stack web app that allows pickleball players to find pickup games, tournaments, courts near them, and connect with other players. Built with MERN stack.",
    image: "./images/Punchshot-Pickleball.jpeg",
    repoLink: "https://github.com/Ma1h01/Punchshot-Pickleball",
    hasRepoLink: true,
  },
  {
    title: "Online Order and Inventory Management System",
    description:
      "A full-stack web application developed with Next.js and Prisma, designed to enable e-commerce vendors to manage inventory and orders across their stores hosted on third-party platforms (such as Amazon, eBay, TikTok) from a single, centralized dashboard.",
    image: "./images/SuperAidJ4u.jpeg",
    repoLink: "https://github.com/Ma1h01/SuperAidj4u",
    hasRepoLink: true,
  },
  {
    title: "Swift Label Matcher",
    description:
      "A Python desktop app that uses PyMuPDF and CUPS libraries to allow e-commerce retailers to automatically match and print shipping labels using only the product IDs.",
    image: "./images/Swift-Label-Matcher-1.jpeg",
    repoLink: "https://github.com/Ma1h01/Swift-Label-Matcher",
    hasRepoLink: true,
  },
  {
    title: "2D Dungeon Game",
    description:
      "A 2D Android dungeon game engages players to explore and fight in a procedurally generated map, featuring AI enemies, collision detection, and a combat system. Built with Java in Android Studio.",
    images: [
      "./images/Dungeon-Game-Home.jpeg",
      "./images/Dungeon-Game-Play.jpeg",
    ],
    repoLink: "https://github.com/Ma1h01/CS2340C_Team29",
    hasRepoLink: true,
  },
  {
    title: "LC-2200 Datapath",
    description:
      "A 32-bit RISC processor with a 5-stage pipeline, featuring a complete datapath and control unit, and is able to perform basic computation, data storage, and loop execution. Built in CircuitSim and tested with assembly code.",
    image: "./images/LC-2200-With-Interrupt.jpeg",
    repoLink: "https://github.com/Ma1h01/LC-2200-With-Interrupt",
    hasRepoLink: true,
  },
];

const ProjectCards = () => {
  const cardContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "30px",
    marginTop: "30px",
    alignItems: "flex-start",
  };

  return (
    <Container id="project">
      <h1>Projects & Experiences</h1>
      <hr />
      <div style={cardContainerStyle}>
        {cardData.map((card, index) => (
          <Card key={index}>
            {card.images ? (
              card.images.map((img, idx) => (
                <Card.Img key={idx} variant="top" src={img} />
              ))
            ) : (
              <Card.Img variant="top" src={card.image} />
            )}
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip id={`tooltip-${index}`}>{card.description}</Tooltip>
                }
              >
                <Card.Text className="card-text">
                  {truncateDescription(card.description)}
                </Card.Text>
              </OverlayTrigger>
              {card.hasRepoLink && (
                <a
                  href={card.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} size="2x" color="black" />
                </a>
              )}
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default ProjectCards;
