## Personal Website / Blog

Personal website that I am building using [NextJS](https://www.nextjs.com). It is deployed on [Vercel](https://www.vercel.com) and is a work in progress.

### Design Overview

I wanted the website to load as fast as possible because it is a blog and blogs do not have a lot of client side logic. I looked into similar offerings like Gatsby and Hugo but decided to go ahead with NextJS because it gave me the flexibility I needed in case I wanted to add client side logic in the future. Since NextJS is created and maintained by Vercel, I decided to go ahead with Vercel for quick deployments. As for managing the content, I will be writing the the blog posts in markdown and they will be converted to html on the fly during build. I have looked into CMS and am thinking of integrating [Strapi](https://www.strapi.io) for better writing experience. Nothing is set in stone though and I welcome your suggestions. Feel free to create issues to discuss your thoughts.

### Current Undertakings

The basic design is pretty similar to the NextJS blog example. I am changing it a bit to add more sections. Once that is done, I will work on dark theme support and persistence to store reader's preferences and the suggestions they submit via forms. You might think that all of this is a bit overkill for a static blog, but I want this to be my little experiment where I can let my imagination run wild.
