export interface Post {
    source: {
      id?: string | null;
      name: string; 
    };
    author: string; 
    title: string; 
    description: string; 
    url: string; 
    urlToImage: string;
    publishedAt: string; 
    content: string; 
    id: number; 
  }
  
  interface PostsData {
    posts: Post[];
  }
  