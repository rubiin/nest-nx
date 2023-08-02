import { Container, Grid, SimpleGrid } from "@mantine/core";

import {ArticleCardFooterProps, BlogPost,} from "../components/BlogPost";




const data : ArticleCardFooterProps= {
  title: "Top 10 places to visit in Norway this summer",
  image:
    "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
  category: "Travel",
  footer: "50 people like this",
  author: {
    name: "John Smith",
    description: "Full-stack developer, writer, speaker and creator",
    image: "https://avatars.githubusercontent.com/u/52057145?v=4",


  }
}


export function ArticlesCardsGrid() {


  return (
    <Container py="sm">
      <SimpleGrid cols={4} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
        {Array.from({length: 14}).map((_) => ( <BlogPost {...data}/>))}
      </SimpleGrid>
    </Container>
  );
}
