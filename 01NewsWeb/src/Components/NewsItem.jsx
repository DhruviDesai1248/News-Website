import React from "react";
import image from "../assets/01news.webp"

function NewsItem ({title,description,src,url}) {
    return(
        

<div className="inline-block ml-7 my-3 px-2 py-2 box-border max-w-sm  rounded-lg shadow text-white bg-gray-900 dark:border-gray-700" style={{maxWidth: '350px'}}>
    <a href={url}>
        <img className="rounded-t-lg" src={src?src:image} alt="" style={{height: '200px',width: '450px'}} />
    </a>
    <div className="p-5">
        <a href={url}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">{title.slice(0,50)}</h5>
        </a>
        <p className="mb-3 font-normal text-white">{description?description.slice(0,90):
"Curated news: Captivating stories, global updates, insightful analyses. Stay informed."}</p>
        <a href={url} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read More
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokelinecap="round" strokelinejoin="round" strokewidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>

    )
}

export default NewsItem