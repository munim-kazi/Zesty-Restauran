export type PostBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "quote"; text: string }
  | { type: "image"; src: string; alt: string };

export type Post = {
  slug: string;
  image: string;
  imageAlt: string;
  date: string;
  title: string;
  summary: string;
  content: PostBlock[];
};

export const POSTS: Post[] = [
  {
    slug: "zesty-gourmet-restaurant",
    image: "/images/blog_1.avif",
    imageAlt: "Zesty Gourmet Restaurant",
    date: "June 29, 2022",
    title: "Zesty Gourmet Restaurant",
    summary:
      "Quis fringilla sit ultrices semper elit. Risus gravida dignissim gravida sed. Congue tempor sed.",
    content: [
      {
        type: "paragraph",
        text: "Quis fringilla sit ultrices semper elit. Risus gravida dignissim gravida sed. Congue tempor sed. Duis sed quam egestas consectetur lacus, massa. Ipsum duis sit quis consectetur viverra porttitor elit magna. Lacus aliquet est bibendum magna.",
      },
      {
        type: "paragraph",
        text: "Sed tellus porttitor ornare blandit. Nibh felis, id cursus tincidunt facilisis amet, vitae rhoncus. Sit vulputate aliquet faucibus consectetur. Blandit lectus quisque porttitor ornare blandit. Nibh felis, id cursus tincidunt facilisis amet.",
      },
      {
        type: "image",
        src: "/images/post_kitchen.jpg",
        alt: "Inside the Zesty kitchen",
      },
      {
        type: "heading",
        text: "A kitchen built on local produce",
      },
      {
        type: "paragraph",
        text: "Nisl amet sed aliquam, lacus sed. Feugiat tristique enim cursus et. Arcu nec tempor a tellus et orci. Quisque odio arcu curabitur facilisis. Iaculis ullamcorper facilisis augue tristique amet, semper.",
      },
      {
        type: "quote",
        text: "Every plate tells the story of the season it was cooked in.",
      },
      {
        type: "paragraph",
        text: "Quisque odio arcu curabitur facilisis. Iaculis ullamcorper facilisis augue tristique amet, semper. Nisl amet sed aliquam, lacus sed. Feugiat tristique enim cursus et. Arcu nec tempor a tellus et orci.",
      },
    ],
  },
  {
    slug: "elote-style-quinoa-salad",
    image: "/images/blog_2.avif",
    imageAlt: "Elote Style Quinoa Salad",
    date: "June 29, 2022",
    title: "Elote Style Quinoa Salad",
    summary:
      "Donec consectetur purus purus lorem. Arcu lacus arcu ornare habitant vulputate.",
    content: [
      {
        type: "paragraph",
        text: "Donec consectetur purus purus lorem. Arcu lacus arcu ornare habitant vulputate. Sem interdum orci sodales molestie mauris euismod. Porta laoreet facilisis vitae, mauris. Quisque odio arcu curabitur facilisis.",
      },
      {
        type: "image",
        src: "/images/post_salad.jpg",
        alt: "Elote style quinoa salad",
      },
      {
        type: "heading",
        text: "Sweet corn meets fresh greens",
      },
      {
        type: "paragraph",
        text: "Nisl amet sed aliquam, lacus sed. Feugiat tristique enim cursus et. Arcu nec tempor a tellus et orci. Iaculis ullamcorper facilisis augue tristique amet, semper.",
      },
      {
        type: "quote",
        text: "The secret is charring the corn over open flame before it ever reaches the bowl.",
      },
      {
        type: "paragraph",
        text: "Sem interdum orci sodales molestie mauris euismod. Porta laoreet facilisis vitae, mauris. Donec consectetur purus purus lorem. Arcu lacus arcu ornare habitant vulputate.",
      },
    ],
  },
  {
    slug: "9-best-healthy-chickpea-recipes",
    image: "/images/blog_3.avif",
    imageAlt: "9 Best Healthy Chickpea Recipes",
    date: "June 29, 2022",
    title: "9 Best Healthy Chickpea Recipes",
    summary:
      "Sem interdum orci sodales molestie mauris euismod. Porta laoreet facilisis vitae, mauris.",
    content: [
      {
        type: "paragraph",
        text: "Sem interdum orci sodales molestie mauris euismod. Porta laoreet facilisis vitae, mauris. Quis fringilla sit ultrices semper elit. Risus gravida dignissim gravida sed. Congue tempor sed.",
      },
      {
        type: "heading",
        text: "One pantry hero, endless dinners",
      },
      {
        type: "paragraph",
        text: "Nisl amet sed aliquam, lacus sed. Feugiat tristique enim cursus et. Arcu nec tempor a tellus et orci. Quisque odio arcu curabitur facilisis. Iaculis ullamcorper facilisis augue tristique amet, semper.",
      },
      {
        type: "image",
        src: "/images/post_chickpea.jpg",
        alt: "Chickpea dishes prepared at Zesty",
      },
      {
        type: "paragraph",
        text: "Quisque odio arcu curabitur facilisis. Iaculis ullamcorper facilisis augue tristique amet, semper. Nisl amet sed aliquam, lacus sed. Feugiat tristique enim cursus et. Arcu nec tempor a tellus et orci.",
      },
      {
        type: "quote",
        text: "Roast them, smash them, or blend them — chickpeas reward a little patience.",
      },
      {
        type: "paragraph",
        text: "Donec consectetur purus purus lorem. Arcu lacus arcu ornare habitant vulputate. Sem interdum orci sodales molestie mauris euismod. Porta laoreet facilisis vitae, mauris.",
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return POSTS.find((post) => post.slug === slug);
}
