import { Post } from '@/types/post';
import posts from '../../data/posts';

export default function handler(req: any, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: Post[]): void; new(): any; }; }; }) {
  res.status(200).json(posts);
}