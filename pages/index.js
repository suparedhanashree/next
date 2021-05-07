
import styles from '../styles/Home.module.css'
import Title from '../components/Title'

export default function Home({data}) {
  console.log('this',data);
  return (
        <>
         <Title title="Home"/>
        <h1>This is Home Page!</h1>
        {data.map((post,i)=>{
          return (
            <div key={i}>
              <h3>{post.title}</h3>
              <p>{post.body}</p><hr/>
            </div>
          )
        })}
        </>
    )
}

export async function getStaticProps()
{
   const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
   const data = await res.json()
   return{
     props:{
       data
     }
   }
}


// https://www.youtube.com/watch?v=_oNAGdvsFW4 link for video