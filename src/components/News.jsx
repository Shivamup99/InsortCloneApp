import { Container } from '@material-ui/core'
import React from 'react'
import NewsCard from './NewsCard'

function News({newsData,newsResult, loadmore , setLoadmore}) {
    return (
      <>
      <Container maxWidth="md">
          <div className="content">
              <div className="download">
                  <span className="downloadText">
                      for the best experience use insorts app on your smart phone
                  </span>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxRyxz5QzmW2DbXoJsNwDuGTfLpPOWCZKPBQ&usqp=CAU" alt="tag" height="52px"/>
                  <img src="https://fireship.io/lessons/pwa-to-play-store/img/googleplay-badge.png" alt="tag" height="80px"/>
              </div>
              {newsData.map((newsItem)=>(
                  <NewsCard newsItem={newsItem} key={newsItem.title}/>
              ))}

              {
                  loadmore <= newsResult &&(
                      <> 
                       <hr/>
                       <button className="loadmore"
                       onClick={()=>setLoadmore(loadmore+20)}>load more</button>
                      </>
                  )
              }
             
          </div>
      </Container>
      </>
    )
}

export default News
