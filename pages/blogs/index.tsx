import { GetStaticProps } from "next";
import getPosts from "../../utils/db";
import {cdate} from "cdate";

type Post = {
  id: string;
  title: string;
  date: string;
}

type Props = {
  allPostsData: Post[];
}

export const getStaticProps:GetStaticProps<Props> = async () => {
  const posts = await getPosts();


  const allPostsData= posts.map((post)=> {
    return {
      id: post.id,
      title: post.title,
      date: JSON.parse(JSON.stringify(post.date)),
    }
  });

  return {
    props: {
      allPostsData
    }
  }
}

const Index = ({allPostsData}:Props) => {

  return (
    <div>
      <h1>Index</h1>
      <ul>
        {allPostsData.map(({id, title, date}) => {
          const dt = cdate(date);
          return (
          <li key={id}>{title} / {dt.format("YYYY-MM-DD")}</li>
        )})}
      </ul>
    </div>
  )
}

export default Index;
