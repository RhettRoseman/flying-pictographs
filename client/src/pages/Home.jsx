import { useQuery } from '@apollo/client';

import ThoughtList from '../components/ThoughtList';
import ThoughtForm from '../components/ThoughtForm';

import { QUERY_THOUGHTS } from '../utils/queries';

// const Home = () => {
//   const { loading, data } = useQuery(QUERY_THOUGHTS);
//   const thoughts = data?.thoughts || [];

//   return (
//     <main>
//       <div className="flex-row justify-center">
//         <div
//           className="col-12 col-md-10 mb-3 p-3"
//           style={{ border: '1px dotted #1a1a1a' }}
//         >
//           <ThoughtForm />
//         </div>
//         <div className="col-12 col-md-8 mb-3">
//           {loading ? (
//             <div>Loading...</div>
//           ) : (
//             <ThoughtList
//               thoughts={thoughts}
//               title="Some Feed for Thought(s)..."
//             />
//           )}
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Home;


const fakePost = new Array(10).fill(null).map(() => {
  return {
    img: 'some fake img.jpg',
    caption: 'some caption',
    comments: ['c1', 'c2', 'c3']
  }
})
const Home = () => {
  return <div>
    <h2>Photos</h2>

    {/* show img cap and comment of post */}
    {fakePost.map((post, index) => {
      return (
        <div key={index}>
          <img src={post.img} alt={post.caption} />
          <p>{post.caption}</p>
          {/* show comments with each commentt wrapped in a border all around */}
          {post.comments.map((comment, index) => {
            return (
              <div key={index}>
                <p>{comment}</p>
              </div>
            )
          })}
          <textarea name="" id="" cols="30" rows="1"></textarea>
        </div>
      )
    })}
  </div>
}

export default Home