import React from "react";
import Graphin from "@antv/graphin";
import { graphStyle } from "./graphStyle";
import telegramData from "../../Data/telegramData.json";

const processData = (data) => {
  const nodes = [];
  const edges = [];

  data.forEach((account) => {
    nodes.push({
      id: `account-${account.id}`,
      label: account.name,
      shape: "circle",
      style: graphStyle.account
    });

    account.contacts.forEach((contact) => {
      nodes.push({
        id: `contact-${contact.id}`,
        label: contact.name,
        shape: "circle",
        style: graphStyle.contact
      });

      edges.push({
        source: `account-${account.id}`,
        target: `contact-${contact.id}`,
        strength: contact.mutual ? 2 : 1,
        style: graphStyle.edge
      });

      contact.chats.forEach((chat) => {
        nodes.push({
          id: `chat-${chat.id}`,
          label: chat.title,
          shape: "circle",
          style: graphStyle.chat
        });

        edges.push({
          source: `contact-${contact.id}`,
          target: `chat-${chat.id}`,
          strength: chat.participants ? chat.participants.length : 1,
          style: graphStyle.edge
        });
      });
    });
  });

  return { nodes, edges };
};

const { nodes, edges } = processData(telegramData);
const data = {
  nodes,
  edges
};

const TelegramGraph = () => {
  return (
    <Graphin data={data} layout={{ type: "force", preventOverlap: true }}>
      {/* Add other components like zoom controls, tooltip, etc. */}
    </Graphin>
  );
};

export default TelegramGraph;
