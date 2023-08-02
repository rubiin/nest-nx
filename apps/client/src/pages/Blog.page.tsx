import { Paper, Text } from "@mantine/core";

import AppContainer from "../app/appshell";
import BlogPost from "../components/BlogPost";


const BlogPage = () => {
  return (
    <AppContainer>
      <Paper p="lg" shadow="sm">
        <Text size="xl" weight={700} align="center" style={{ marginBottom: 20 }}>
          Welcome to My Blog
        </Text>
        <BlogPost
          title="My First Blog Post"
          content="This is the content of my first blog post."
        />
        <BlogPost
          title="My Second Blog Post"
          content="This is the content of my second blog post."
        />
      </Paper>
    </AppContainer>
  );
};

export default BlogPage;



