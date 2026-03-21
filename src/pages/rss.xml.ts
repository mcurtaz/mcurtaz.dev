import rss from "@astrojs/rss";
import { getCollection } from 'astro:content';
import { SITE } from "@consts";

type Context = {
  site: string
}

export async function GET(context: Context) {
  const blog = await getCollection('blog');
  return rss({
    title: SITE.TITLE,
    description: SITE.DESCRIPTION,
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      //description: post.data.description,
      link: `/blog/${post.id}/`,
    })),
  });
}