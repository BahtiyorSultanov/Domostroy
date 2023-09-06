import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { projectFirestore } from "../Firebase/Config";

function BlogItem() {
  const { id } = useParams();
  const [blogItem, setBlogItem] = useState([]);
  useEffect(() => {
    projectFirestore
      .collection("blog")
      .doc(id)
      .onSnapshot((doc) => {
        if (doc.exists) {
          setBlogItem(doc.data());
        } 
        else {
          console.log("No such document!");
        }
      });
  }, []);
  console.log(blogItem);
  return <div className="mt-[100px]">{blogItem.h1}{blogItem.date}</div>;
}

export default BlogItem;
