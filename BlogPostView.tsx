import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Seo } from './Seo';
import { BLOG_POSTS } from './AiCouncilBlogs';

interface BlogPostViewProps {
  postId: string;
  onBack: () => void;
}

const BlogPostView: React.FC<BlogPostViewProps> = ({ postId, onBack }) => {
  const post = BLOG_POSTS.find(p => p.id === postId);

  if (!post) {
    return (
      <div className="min-h-screen pt-32 pb-24 bg-white dark:bg-slate-950 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4 font-display">Post Not Found</h1>
        <button onClick={onBack} className="text-brand-600 font-bold hover:underline">Return to Blogs</button>
      </div>
    );
  }

  // Generate plain text from JSX content for SEO description if possible
  // For a generic approach, we can provide a curated description based on the title if we don't want to parse JSX.
  const description = `${post.title}. Read the full protocol and insights from ${post.authorBadge.split('•')[0].trim()} on AuraBase.`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": description,
    "author": {
      "@type": "Person",
      "name": post.authorBadge.split('•')[0].trim()
    },
    "publisher": {
      "@type": "Organization",
      "name": "AuraBase"
    },
    "url": `https://aurabase.app/blogs/${post.id}`
  };

  return (
    <article className="min-h-screen pt-32 pb-24 bg-white dark:bg-slate-950 transition-colors duration-500">
      <Seo 
        title={`${post.title} | AuraBase`}
        description={description}
        canonical={`https://aurabase.app/blogs/${post.id}`}
        jsonLd={jsonLd}
      />
      
      <div className="max-w-4xl mx-auto px-6">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-brand-600 dark:text-brand-400 font-bold uppercase tracking-widest text-[11px] mb-12 hover:translate-x-[-4px] transition-all"
        >
          <ArrowLeft size={16} /> Back to Blogs
        </button>

        <div className={`inline-flex items-center px-4 py-2 rounded-full border bg-slate-50 dark:bg-white/5 mb-8 text-sm font-bold uppercase tracking-widest ${post.accentColor.replace('text-', 'text-').replace('border-', 'border-')}`}>
          {post.authorBadge}
        </div>

        <h1 className="text-4xl md:text-6xl font-bold font-display mb-12 tracking-tight leading-[1.1] text-slate-900 dark:text-white">
          {post.title}
        </h1>

        <div className="prose prose-lg dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
          {post.content}
        </div>

        <div className="mt-16 pt-12 border-t border-slate-200 dark:border-white/10">
          <h3 className="text-sm text-slate-500 dark:text-slate-400 uppercase tracking-widest font-bold mb-6">{post.referencesType}</h3>
          <ul className="space-y-4 pl-5 list-disc text-sm text-slate-600 dark:text-slate-400 font-medium">
            {post.references.map((ref, i) => (
              <li key={i}>{ref}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
};

export default BlogPostView;
