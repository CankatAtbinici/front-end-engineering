import React from "react";
import ArticlesGrid from "../../components/project-components/articles/Index";
import Head from "./Articles.head";

function Articles() {
  return (
    <section className="container mx-auto py-5">
      <Head />
      <ArticlesGrid />
    </section>
  );
}

export default Articles;
