## Personal Website / Blog

Personal website that I am building using [NextJS](https://www.nextjs.com). It is deployed on [Vercel](https://www.vercel.com) and is a work in progress.

### Design Overview

I wanted the website to load as fast as possible because it is a blog and blogs do not have a lot of client side logic. I looked into similar offerings like [Gatsby](https://www.gatsbyjs.com) and [Hugo](https://www.gohugo.io) but decided to go ahead with NextJS because it gave me the flexibility I needed in case I wanted to add client side logic in the future.

I chose Vercel among others because it offered some nice features. For one, it had first class support for NextJS deployments because it is the creator of NextJS. It also automatically spins up Lambdas for APIs that are created in NextJS. Moreover, its free tier is good enough for me to showcase the in progress version of my website. Once the website is in a good shape, I will buy a domain and host it privately.

As for content creation and management, I will be writing the blog posts in Markdown. They will be converted to HTML on the fly during build. I have looked into other options and CMS caught my eye. I am thinking of integrating [Strapi](https://www.strapi.io), a headless CMS, for better writing experience. Nothing is set in stone though and I welcome your suggestions. Feel free to create issues to discuss your thoughts and offer improvements.

### Current Undertakings

The basic design is pretty similar to the NextJS blog example. I am changing it a bit to add more sections. Once that is done, I will work on dark theme support and persistence to store reader's preferences. You might think that all of this is a bit overkill for a static blog, but I want this to be my little experiment where I can let my imagination run wild.
