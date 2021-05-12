import React from 'react'

function NewsCard({newsItem}) {
    const fulldate = new Date(newsItem.publishedAt)
    var date = fulldate.toString().split(" ");
    const hour = parseInt(date[4].substring(0,2))
    const time = hour>12 ? true : false
    return (
       <>
       <div className="newsCard">
           <img 
           alt={newsItem.title}
           src={newsItem.urlToImage ? newsItem.urlToImage:'https://askleo.askleomedia.com/wp-content/uploads/2004/06/no_image-300x245.jpg'} 
           className="newsImage"/>

        <div className="newsText">
            <div>
                <span className="title">{newsItem.title}</span>
                <span className="author">
                   <br/> <a href={newsItem.url}>
                    </a>
                    <span className="author">{" "}by {newsItem.author ? newsItem.author:'Unknown'} 
                    {" "} / {
                        time ? `${hour-12}:${date[4].substring(3,5)} pm`:
                        `${hour}:${date[4].substring(3,5)} am`
                    }
                    {" "} on {date[2]} {date[1]} {date[3]} , {date[0]}
                    </span> 
                </span>
            </div>
            <div className="lowerNewsText">
                <div className="description">{newsItem.description}</div>
                <a href={newsItem.url} target="__blank">
                read more at {" "}
                    <b>{newsItem.source.name}</b>
                </a>
            </div>
        </div>
       </div>
       </>
    )
}

export default NewsCard
