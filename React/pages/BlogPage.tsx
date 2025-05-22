
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/sections/SectionHeader';
import { BLOG_POSTS_DATA } from '../constants';
import { BlogPost } from '../types';
import Button from '../components/ui/Button';

const ArticlePreview: React.FC<{ post: BlogPost }> = ({ post }) => (
  <article className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row group">
    <Link to={`/blog/${post.id}`} className="md:w-1/3 block overflow-hidden">
      <img src={post.image} alt={post.title} className="w-full h-48 md:h-full object-cover transform transition-transform duration-300 group-hover:scale-105" />
    </Link>
    <div className="p-6 md:w-2/3 flex flex-col">
      <div className="mb-2">
        <span className="inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-1 rounded-full uppercase">{post.category}</span>
      </div>
      <h3 className="text-2xl font-semibold text-slate-800 mb-2 group-hover:text-amber-600 transition-colors">
        <Link to={`/blog/${post.id}`}>{post.title}</Link>
      </h3>
      <p className="text-sm text-gray-500 mb-3">
        By {post.author} on {post.date}
      </p>
      <p className="text-gray-600 mb-4 flex-grow text-sm leading-relaxed">{post.excerpt}</p>
      <div className="mt-auto">
        <Button to={`/blog/${post.id}`} variant="secondary" size="sm">Read More</Button>
      </div>
    </div>
  </article>
);

// Placeholder for Single Blog Post View (if routing to /blog/:id)
// For now, this page only shows list. A real app would have a route like:
// <Route path="/blog/:postId" element={<SingleBlogPostPage />} />

const Pagination: React.FC<{ currentPage: number, totalPages: number, onPageChange: (page: number) => void }> = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="mt-12 flex justify-center" aria-label="Pagination">
      <ul className="inline-flex items-center -space-x-px">
        <li>
          <button 
            onClick={() => onPageChange(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50"
          >
            Previous
          </button>
        </li>
        {pageNumbers.map(number => (
          <li key={number}>
            <button
              onClick={() => onPageChange(number)}
              className={`px-3 py-2 leading-tight border border-gray-300 ${currentPage === number ? 'text-amber-600 bg-amber-50 border-amber-300 font-semibold' : 'text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700'}`}
            >
              {number}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};


const BlogPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5; // Configure as needed
  
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const categories = Array.from(new Set(BLOG_POSTS_DATA.map(p => p.category))).sort();


  const filteredPosts = BLOG_POSTS_DATA.filter(post => 
    selectedCategory === '' || post.category === selectedCategory
  );

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <>
      <SectionHeader title="Ministry Blog" subtitle="Insights, testimonies, and updates from Nehemia Ministry." />
      
      <div className="mb-8 flex flex-wrap gap-2 justify-center">
        <Button 
            onClick={() => setSelectedCategory('')} 
            variant={selectedCategory === '' ? 'primary' : 'outline'}
            size="sm"
        >
            All Categories
        </Button>
        {categories.map(category => (
            <Button 
                key={category}
                onClick={() => { setSelectedCategory(category); setCurrentPage(1);}}
                variant={selectedCategory === category ? 'primary' : 'outline'}
                size="sm"
            >
                {category}
            </Button>
        ))}
      </div>

      {currentPosts.length > 0 ? (
        <div className="space-y-12">
          {currentPosts.map(post => (
            <ArticlePreview key={post.id} post={post} />
          ))}
        </div>
      ) : (
         <p className="text-center text-gray-600 text-xl py-10">
          No blog posts found for this category.
        </p>
      )}

      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </>
  );
};

export default BlogPage;
