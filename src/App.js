import React, { useEffect, useState } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import axios from 'axios'
import apiKey from './data/config'
import Footer from './components/Footer';
function App() {
  const [category , setCategory] = useState('general')
  const [newsData ,setNewsData] = useState([])
  const [newsResult , setNewsResult] = useState()
  const [loadmore , setLoadmore] = useState(20)

  useEffect(()=>{
    newsApi()
  },[newsResult,category,loadmore])

  //console.log(newsData)
   const newsApi = async()=>{
     try {
       const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}&pageSize=${loadmore}`) 
      //  console.log(news.data)
        setNewsData(news.data.articles)
        setNewsResult(news.data.totalResults)
      } catch (error) {
       console.log(error)
     }
   } 
 
  return (
    <div className="App">
     <Navbar setCategory={setCategory}/>
     <News newsData={newsData} newsResult={newsResult} loadmore={loadmore} setLoadmore={setLoadmore}/>
     <Footer/>
    </div>
  );
}

export default App;
