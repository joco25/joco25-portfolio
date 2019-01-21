import React from "react";
import {
  Section,
  SectionTitle,
  UnorderedList,
  ListItem
} from "../../shared/styles/styled-components";
import { what } from "../../data/about";

const What = () => {
  return (
    <Section id="what">
      <SectionTitle>What I am up to?</SectionTitle>
      <UnorderedList>
        {what.map(item => (
          <ListItem key={item.title}>{item.title}</ListItem>
        ))}
      </UnorderedList>
    </Section>
  );
};

export default What;
