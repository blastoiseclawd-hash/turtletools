import React from 'react';

interface BlogPostProps {
  title: string;
  date: string;
  author: string;
  tags: string[];
  children: React.ReactNode;
}

export function BlogPost({ title, date, author, tags, children }: BlogPostProps) {
  return (
    <div className="blog-post">
      <h1>{title}</h1>
      <div className="post-meta">
        <span>Published on {date} by {author}</span>
        <div className="tags">
          {tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>
      <div className="post-content">
        {children}
      </div>
    </div>
  );
}